import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { CsReportsService } from '../../services/cs-reports.service';

@Component({
  selector: 'app-farmer-status',
  templateUrl: './farmer-status.component.html',
  styleUrls: ['./farmer-status.component.css'],
})
export class FarmerStatusComponent implements OnInit, OnDestroy, AfterViewInit {
  districtId = '';
  districtName = '';
  discontinuedVillagesDetails = [];

  reportTotals = {
    S_NO: '-',
    TXN_YEAR: '-',
    MONTH_NAME: 'TOTAL',
    TOTAL_MILK_POURERS: 0,
    ADDED_MILK_POURERS: 0,
    DROPPED_MILK_POURERS: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private csAPI: CsReportsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtName = this.session.districtName;
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        TXN_YEAR: '-',
        MONTH_NAME: 'TOTAL',
        TOTAL_MILK_POURERS: 0,
        ADDED_MILK_POURERS: 0,
        DROPPED_MILK_POURERS: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '7',
      };
      this.discontinuedVillagesDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.discontinuedVillagesDetails = res.result;
        for (let i = 0; i < this.discontinuedVillagesDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILK_POURERS += parseInt(
            this.discontinuedVillagesDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ADDED_MILK_POURERS += parseInt(
            this.discontinuedVillagesDetails[i].ADDED_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.DROPPED_MILK_POURERS += parseInt(
            this.discontinuedVillagesDetails[i].DROPPED_MILK_POURERS
          );
          let singleRow = {
            S_NO: i + 1,
            TXN_YEAR: this.discontinuedVillagesDetails[i].TXN_YEAR,
            MONTH_NAME: this.discontinuedVillagesDetails[i].MONTH_NAME,
            TOTAL_MILK_POURERS:
              this.discontinuedVillagesDetails[i].TOTAL_MILK_POURERS,
            ADDED_MILK_POURERS:
              this.discontinuedVillagesDetails[i].ADDED_MILK_POURERS,
            DROPPED_MILK_POURERS:
              this.discontinuedVillagesDetails[i].DROPPED_MILK_POURERS,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(this.excelData, 'Milk Pourer Status', true);
  }

  btnPDF(): void {
    const req = {
      levelType: '7',
      districtId: this.districtId,
      districtName: this.districtName,
    };
    const fileName = 'milkPourerStatus';
    let basePDF = '';
    this.spinner.show();
    this.csAPI
      .csDistrictReports(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
