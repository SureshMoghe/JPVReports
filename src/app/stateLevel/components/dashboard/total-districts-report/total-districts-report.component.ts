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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';

@Component({
  selector: 'app-total-districts-report',
  templateUrl: './total-districts-report.component.html',
  styleUrls: ['./total-districts-report.component.css'],
})
export class TotalDistrictsReportComponent
  implements OnInit, OnDestroy, AfterViewInit {
  totalDistrictsDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: 'TOTAL',
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private dashboardAPI: DashboardService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: 'TOTAL',
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_FARMERS: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      };
      this.totalDistrictsDetails = [];
      this.spinner.show();
      const res = await this.dashboardAPI.totalDistrictReport();
      if (res.success) {
        this.excelData = [];
        this.totalDistrictsDetails = res.result;
        for (let i = 0; i < this.totalDistrictsDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.totalDistrictsDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix

         if (            
          this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS  === null ||
          this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS  === undefined
          ){ this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS=0;}

          this.reportTotals.TOTAL_WOMEN_FARMERS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS
          );

          if (            
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR  === null ||
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR=0;}

          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === null ||
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT=0;}

          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR  === null ||
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR=0;}

          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT  === null ||
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT=0;}

          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.totalDistrictsDetails[i].DISTRICT_NAME,
            TOTAL_RBKS: this.totalDistrictsDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.totalDistrictsDetails[i].TOTAL_VILLAGES,
            TOTAL_FARMERS: this.totalDistrictsDetails[i].TOTAL_FARMERS,
            TOTAL_WOMEN_FARMERS: this.totalDistrictsDetails[i]
              .TOTAL_WOMEN_FARMERS,
            TOTAL_BUFFALO_MILK_LTR: this.totalDistrictsDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.totalDistrictsDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.totalDistrictsDetails[i]
              .TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.totalDistrictsDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
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
      'Total Districts Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'totalDistrictsReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .totalDistrictPDFReport()
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
