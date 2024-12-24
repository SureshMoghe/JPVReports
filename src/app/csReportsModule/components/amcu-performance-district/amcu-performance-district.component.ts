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
  selector: 'app-amcu-performance-district',
  templateUrl: './amcu-performance-district.component.html',
  styleUrls: ['./amcu-performance-district.component.css'],
})
export class AmcuPerformanceDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  amcuDetails = [];

  reportTotals = {
    S_NO: '-',
    TXN_YEAR: 'TOTAL',
    TXN_MONTH_NAME: '-',
    SOCITIES: 0,
    MILK_IN_LITERS_ABOVE_200: 0,
    MILK_IN_LITERS_160_200: 0,
    MILK_IN_LITERS_101_160: 0,
    MILK_IN_LITERS_51_100: 0,
    MILK_IN_LITERS_26_50: 0,
    MILK_IN_LITERS_10_25: 0,
    MILK_IN_LITERS_BELOW_10: 0,
    DISCONTINUED_SOCIETIES: 0,
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
        TXN_YEAR: 'TOTAL',
        TXN_MONTH_NAME: '-',
        SOCITIES: 0,
        MILK_IN_LITERS_ABOVE_200: 0,
        MILK_IN_LITERS_160_200: 0,
        MILK_IN_LITERS_101_160: 0,
        MILK_IN_LITERS_51_100: 0,
        MILK_IN_LITERS_26_50: 0,
        MILK_IN_LITERS_10_25: 0,
        MILK_IN_LITERS_BELOW_10: 0,
        DISCONTINUED_SOCIETIES: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '5',
      };
      this.amcuDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.amcuDetails = res.result;
        for (let i = 0; i < this.amcuDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SOCITIES += parseInt(this.amcuDetails[i].SOCITIES);
          this.reportTotals.MILK_IN_LITERS_ABOVE_200 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_ABOVE_200
          );
          this.reportTotals.MILK_IN_LITERS_160_200 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_160_200
          );
          this.reportTotals.MILK_IN_LITERS_101_160 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_101_160
          );
          this.reportTotals.MILK_IN_LITERS_51_100 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_51_100
          );
          this.reportTotals.MILK_IN_LITERS_26_50 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_26_50
          );
          this.reportTotals.MILK_IN_LITERS_10_25 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_10_25
          );
          this.reportTotals.MILK_IN_LITERS_BELOW_10 += parseFloat(
            this.amcuDetails[i].MILK_IN_LITERS_BELOW_10
          );
          this.reportTotals.DISCONTINUED_SOCIETIES += parseFloat(
            this.amcuDetails[i].DISCONTINUED_SOCIETIES
          );
          let singleRow = {
            S_NO: i + 1,
            TXN_YEAR: this.amcuDetails[i].TXN_YEAR,
            TXN_MONTH_NAME: this.amcuDetails[i].TXN_MONTH_NAME,
            SOCITIES: this.amcuDetails[i].SOCITIES,
            MILK_IN_LITERS_ABOVE_200:
              this.amcuDetails[i].MILK_IN_LITERS_ABOVE_200,
            MILK_IN_LITERS_160_200: this.amcuDetails[i].MILK_IN_LITERS_160_200,
            MILK_IN_LITERS_101_160: this.amcuDetails[i].MILK_IN_LITERS_101_160,
            MILK_IN_LITERS_51_100: this.amcuDetails[i].MILK_IN_LITERS_51_100,
            MILK_IN_LITERS_26_50: this.amcuDetails[i].MILK_IN_LITERS_26_50,
            MILK_IN_LITERS_10_25: this.amcuDetails[i].MILK_IN_LITERS_10_25,
            MILK_IN_LITERS_BELOW_10:
              this.amcuDetails[i].MILK_IN_LITERS_BELOW_10,
            DISCONTINUED_SOCIETIES: this.amcuDetails[i].DISCONTINUED_SOCIETIES,
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
    this.utils.JSONToCSVConvertor(this.excelData, 'AMCU Performance', true);
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '5',
    };
    const fileName = 'amcuPerformanceStatus';
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
