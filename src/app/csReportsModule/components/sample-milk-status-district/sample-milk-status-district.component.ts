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
  selector: 'app-sample-milk-status-district',
  templateUrl: './sample-milk-status-district.component.html',
  styleUrls: ['./sample-milk-status-district.component.css'],
})
export class SampleMilkStatusDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  sampleMilkStatusDetails = [];

  reportTotals = {
    S_NO: '-',
    TXN_YEAR: '-',
    TXN_MONTH_NAME: 'TOTAL',
    TOTAL: 0,
    MILK_POURED_SOC: 0,
    AMOUNT: 0,
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
        TXN_MONTH_NAME: 'TOTAL',
        TOTAL: 0,
        MILK_POURED_SOC: 0,
        AMOUNT: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '3',
      };
      this.sampleMilkStatusDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.sampleMilkStatusDetails = res.result;
        for (let i = 0; i < this.sampleMilkStatusDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL += parseInt(
            this.sampleMilkStatusDetails[i].TOTAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURED_SOC += parseFloat(
            this.sampleMilkStatusDetails[i].MILK_POURED_SOC
          );
          this.reportTotals.AMOUNT += parseFloat(
            this.sampleMilkStatusDetails[i].AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            TXN_YEAR: this.sampleMilkStatusDetails[i].TXN_YEAR,
            TXN_MONTH_NAME: this.sampleMilkStatusDetails[i].TXN_MONTH_NAME,
            TOTAL: this.sampleMilkStatusDetails[i].TOTAL,
            MILK_POURED_SOC: this.sampleMilkStatusDetails[i].MILK_POURED_SOC,
            AMOUNT: this.sampleMilkStatusDetails[i].AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.MILK_POURED_SOC = parseFloat(
          this.reportTotals.MILK_POURED_SOC.toFixed(2)
        );
        this.reportTotals.AMOUNT = parseFloat(
          this.reportTotals.AMOUNT.toFixed(2)
        );
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
    this.utils.JSONToCSVConvertor(this.excelData, 'Sample Milk Status', true);
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '3',
    };
    const fileName = 'sampleMilkStatus';
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
