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
  selector: 'app-total-registered-farmers-report',
  templateUrl: './total-registered-farmers-report.component.html',
  styleUrls: ['./total-registered-farmers-report.component.css'],
})
export class TotalRegisteredFarmersReportComponent
  implements OnInit, OnDestroy, AfterViewInit {
  RegisteredFarmerDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    RBK_NAME: '-',
    VILLAGE_NAME: 'TOTAL',
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
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
      this.RegisteredFarmerDetails = [];
      this.spinner.show();
      const res = await this.dashboardAPI.totalRegisteredFarmersReport();
      if (res.success) {
        this.excelData = [];
        this.RegisteredFarmerDetails = res.result;
        for (let i = 0; i < this.RegisteredFarmerDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.RegisteredFarmerDetails[i].DISTRICT_NAME,
            RBK_NAME: this.RegisteredFarmerDetails[i].RBK_NAME,
            VILLAGE_NAME: this.RegisteredFarmerDetails[i].VILLAGE_NAME,
            AMC_ID: this.RegisteredFarmerDetails[i].AMC_ID,
            FARMER_CODE: this.RegisteredFarmerDetails[i].FARMER_CODE,
            NAME: this.RegisteredFarmerDetails[i].NAME,
            MOBILE_NUMBER: this.RegisteredFarmerDetails[i].MOBILE_NUMBER,
          };

          this.excelData.push(singleRow);
        }
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
      'Total Registered Farmers Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'totalRegisteredFarmersReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .totalDistrictReport()
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
