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
  selector: 'app-future-dates-milk-pouring-report',
  templateUrl: './future-dates-milk-pouring-report.component.html',
  styleUrls: ['./future-dates-milk-pouring-report.component.css'],
})
export class FutureDatesMilkPouringReportComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  milkPouringDetails = [];

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
      this.milkPouringDetails = [];
      this.spinner.show();
      const res = await this.dashboardAPI.futureDatesMilkPouring();
      if (res.success) {
        this.excelData = [];
        this.milkPouringDetails = res.result;
        for (let i = 0; i < this.milkPouringDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            VENDOR_ID: this.milkPouringDetails[i].VENDOR_ID,
            DISTRICT: this.milkPouringDetails[i].DISTRICT,
            TXN_DATE: this.milkPouringDetails[i].TXN_DATE,
            TOTAL_RECORDS: this.milkPouringDetails[i].TOTAL_RECORDS,
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
      'Daily Total Milk Pouring Farmers Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'Newly Milk Pouring Farmers Report';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .newlyMilkPouringFarmersPDFReport()
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
