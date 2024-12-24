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
  selector: 'app-discontinued-villages',
  templateUrl: './discontinued-villages.component.html',
  styleUrls: ['./discontinued-villages.component.css'],
})
export class DiscontinuedVillagesComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  discontinuedVillagesDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    NO_OF_VILLAGES: 0,
    NO_OF_MILK_POURED_VILLAGES: 0,
    NO_OF_DISCONTINUED_VILLAGES: 0,
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
        DISTRICT: 'TOTAL',
        NO_OF_VILLAGES: 0,
        NO_OF_MILK_POURED_VILLAGES: 0,
        NO_OF_DISCONTINUED_VILLAGES: 0,
      };
      const req = {
        levelType: '6',
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
          this.reportTotals.NO_OF_VILLAGES += parseInt(
            this.discontinuedVillagesDetails[i].NO_OF_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILK_POURED_VILLAGES += parseInt(
            this.discontinuedVillagesDetails[i].NO_OF_MILK_POURED_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_DISCONTINUED_VILLAGES += parseInt(
            this.discontinuedVillagesDetails[i].NO_OF_DISCONTINUED_VILLAGES
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.discontinuedVillagesDetails[i].DISTRICT,
            NO_OF_VILLAGES: this.discontinuedVillagesDetails[i].NO_OF_VILLAGES,
            NO_OF_MILK_POURED_VILLAGES:
              this.discontinuedVillagesDetails[i].NO_OF_MILK_POURED_VILLAGES,
            NO_OF_DISCONTINUED_VILLAGES:
              this.discontinuedVillagesDetails[i].NO_OF_DISCONTINUED_VILLAGES,
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
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Discontinued Villages Status',
      true
    );
  }

  btnPDF(): void {
    const req = {
      levelType: '6',
    };
    const fileName = 'discontinuedVillagesStatus';
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
