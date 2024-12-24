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
  selector: 'app-daily-total-registerd-farmers-report',
  templateUrl: './daily-total-registerd-farmers-report.component.html',
  styleUrls: ['./daily-total-registerd-farmers-report.component.css'],
})
export class DailyTotalRegisterdFarmersReportComponent
  implements OnInit, OnDestroy, AfterViewInit {
  dailyRegisteredFarmersDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    RBK_NAME: '-',
    VILLAGE_NAME: '-',
    AMC_ID: '',
    FARMER_CODE: '-',
    NAME: '',
    MOBILE_NUMBER: '',
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
      this.dailyRegisteredFarmersDetails = [];
      this.spinner.show();
      const res = await this.dashboardAPI.dailyTotalRegisterdFarmersReport();
      if (res.success) {
        this.excelData = [];
        this.dailyRegisteredFarmersDetails = res.result;
        for (let i = 0; i < this.dailyRegisteredFarmersDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.dailyRegisteredFarmersDetails[i].DISTRICT_NAME,
            RBK_NAME: this.dailyRegisteredFarmersDetails[i].RBK_NAME,
            VILLAGE_NAME: this.dailyRegisteredFarmersDetails[i].VILLAGE_NAME,
            AMC_ID: this.dailyRegisteredFarmersDetails[i].AMC_ID,
            FARMER_CODE: this.dailyRegisteredFarmersDetails[i].FARMER_CODE,
            NAME: this.dailyRegisteredFarmersDetails[i].NAME,
            NAMOBILE_NUMBER: this.dailyRegisteredFarmersDetails[i]
              .MOBILE_NUMBER,
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
      'Daily Total Registered  Farmers Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'dailyTotalRegisteredFarmersReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .dailyTotalRegisterdFarmersPDFReport()
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
