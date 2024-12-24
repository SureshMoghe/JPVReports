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
  selector: 'app-top-milk-pourers-mdac-district',
  templateUrl: './top-milk-pourers-mdac-district.component.html',
  styleUrls: ['./top-milk-pourers-mdac-district.component.css'],
})
export class TopMilkPourersMdacDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  topMilkPourerDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: '-',
    MANDAL_NAME: '-',
    ROUTE_NAME: '-',
    MPUSS_CODE: '-',
    TOTAL_MILK_POURERS: 0,
    FARMER_NAME: '-',
    TOTAL_MILK: 0,
    TOTAL_AMOUNT: 0,
    AVG_TOTAL_AMOUNT: 0,
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
        DISTRICT: '-',
        MANDAL_NAME: '-',
        ROUTE_NAME: '-',
        MPUSS_CODE: '-',
        TOTAL_MILK_POURERS: 0,
        FARMER_NAME: '-',
        TOTAL_MILK: 0,
        TOTAL_AMOUNT: 0,
        AVG_TOTAL_AMOUNT: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '4',
      };
      this.topMilkPourerDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.topMilkPourerDetails = res.result;
        for (let i = 0; i < this.topMilkPourerDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILK_POURERS += parseInt(
            this.topMilkPourerDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILK += parseFloat(
            this.topMilkPourerDetails[i].TOTAL_MILK
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.topMilkPourerDetails[i].TOTAL_AMOUNT
          );
          this.reportTotals.AVG_TOTAL_AMOUNT += parseFloat(
            this.topMilkPourerDetails[i].AVG_TOTAL_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.topMilkPourerDetails[i].DISTRICT,
            MANDAL_NAME: this.topMilkPourerDetails[i].MANDAL_NAME,
            ROUTE_NAME: this.topMilkPourerDetails[i].ROUTE_NAME,
            MPUSS_CODE: this.topMilkPourerDetails[i].MPUSS_CODE,
            TOTAL_MILK_POURERS: this.topMilkPourerDetails[i].TOTAL_MILK_POURERS,
            FARMER_NAME: this.topMilkPourerDetails[i].FARMER_NAME,
            TOTAL_MILK: this.topMilkPourerDetails[i].TOTAL_MILK,
            TOTAL_AMOUNT: this.topMilkPourerDetails[i].TOTAL_AMOUNT,
            AVG_TOTAL_AMOUNT: this.topMilkPourerDetails[i].AVG_TOTAL_AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_MILK = parseFloat(
          this.reportTotals.TOTAL_MILK.toFixed(2)
        );
        this.reportTotals.TOTAL_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_AMOUNT.toFixed(2)
        );
        this.reportTotals.AVG_TOTAL_AMOUNT = parseFloat(
          this.reportTotals.AVG_TOTAL_AMOUNT.toFixed(2)
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
    this.utils.JSONToCSVConvertor(this.excelData, 'Top Milk Pourers', true);
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '4',
    };
    const fileName = 'topMilkPourers';
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
