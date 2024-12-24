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
  selector: 'app-daily-total-milk-popuring-farmers-report',
  templateUrl: './daily-total-milk-popuring-farmers-report.component.html',
  styleUrls: ['./daily-total-milk-popuring-farmers-report.component.css'],
})
export class DailyTotalMilkPopuringFarmersReportComponent
  implements OnInit, OnDestroy, AfterViewInit {
  milkPouringDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    RBK_NAME: '-',
    VILLAGE_NAME: '-',
    FARMER_CODE: '-',
    NAME: 'TOTAL',
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
        DISTRICT_NAME: '-',
        RBK_NAME: '-',
        VILLAGE_NAME: '-',
        FARMER_CODE: '-',
        NAME: 'TOTAL',
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      };
      this.milkPouringDetails = [];
      this.spinner.show();
      const res = await this.dashboardAPI.dailyTotalMilkPopuringFarmersReport();
      if (res.success) {
        this.excelData = [];
        this.milkPouringDetails = res.result;
        for (let i = 0; i < this.milkPouringDetails.length; i++) {
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR);
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat( this.milkPouringDetails[i].TOTAL_COW_MILK_LTR);
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT );

          let singleRow = {
            S_NO: i + 1,
                      DISTRICT_NAME: this.milkPouringDetails[i].DISTRICT_NAME,
                          RBK_NAME: this.milkPouringDetails[i].RBK_NAME,
                      VILLAGE_NAME: this.milkPouringDetails[i].VILLAGE_NAME,
                       FARMER_CODE: this.milkPouringDetails[i].FARMER_CODE,
                              NAME: this.milkPouringDetails[i].NAME,
            TOTAL_BUFFALO_MILK_LTR: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                TOTAL_COW_MILK_LTR: this.milkPouringDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)        );
        this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(     this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)        );
        this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat( this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2) );
        this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(  this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2) );
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
      'Daily Total Milk Pouring Farmers Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'dailyTotalMilkPouringFarmersReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .dailyTotalMilkPopuringFarmersPDFReport()
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
