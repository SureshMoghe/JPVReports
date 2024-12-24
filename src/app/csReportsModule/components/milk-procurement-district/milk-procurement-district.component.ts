import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
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
  selector: 'app-milk-procurement-district',
  templateUrl: './milk-procurement-district.component.html',
  styleUrls: ['./milk-procurement-district.component.css'],
})
export class MilkProcurementDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  milkProcurementDetails = [];

  reportTotals = {
    S_NO: '-',
    TXN_YEAR: '-',
    TXN_MONTH_NAME: 'TOTAL',
    SOCITIES: 0,
    REG_FARMERS: 0,
    ACTIVE_FARMERS: 0,
    MILK_QTY: 0,
    FAT_IN_MILK: 0,
    SNF_IN_MILK: 0,
    MILK_AMOUNT: 0,
    AVG_LTR_DAY: 0,
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
        SOCITIES: 0,
        REG_FARMERS: 0,
        ACTIVE_FARMERS: 0,
        MILK_QTY: 0,
        FAT_IN_MILK: 0,
        SNF_IN_MILK: 0,
        MILK_AMOUNT: 0,
        AVG_LTR_DAY: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '1',
      };
      this.milkProcurementDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.milkProcurementDetails = res.result;
        for (let i = 0; i < this.milkProcurementDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SOCITIES += parseInt(
            this.milkProcurementDetails[i].SOCITIES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REG_FARMERS += parseInt(
            this.milkProcurementDetails[i].REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ACTIVE_FARMERS += parseInt(
            this.milkProcurementDetails[i].ACTIVE_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_QTY += parseFloat(
            this.milkProcurementDetails[i].MILK_QTY
          );
          this.reportTotals.FAT_IN_MILK += parseFloat(
            this.milkProcurementDetails[i].FAT_IN_MILK
          );
          this.reportTotals.SNF_IN_MILK += parseFloat(
            this.milkProcurementDetails[i].SNF_IN_MILK
          );
          this.reportTotals.MILK_AMOUNT += parseFloat(
            this.milkProcurementDetails[i].MILK_AMOUNT
          );
          this.reportTotals.AVG_LTR_DAY += parseFloat(
            this.milkProcurementDetails[i].AVG_LTR_DAY
          );
          let singleRow = {
            S_NO: i + 1,
            TXN_YEAR: this.milkProcurementDetails[i].TXN_YEAR,
            TXN_MONTH_NAME: this.milkProcurementDetails[i].TXN_MONTH_NAME,
            SOCITIES: this.milkProcurementDetails[i].SOCITIES,
            REG_FARMERS: this.milkProcurementDetails[i].REG_FARMERS,
            ACTIVE_FARMERS: this.milkProcurementDetails[i].ACTIVE_FARMERS,
            MILK_QTY: this.milkProcurementDetails[i].MILK_QTY,
            FAT_IN_MILK: this.milkProcurementDetails[i].FAT_IN_MILK,
            SNF_IN_MILK: this.milkProcurementDetails[i].SNF_IN_MILK,
            MILK_AMOUNT: this.milkProcurementDetails[i].MILK_AMOUNT,
            AVG_LTR_DAY: this.milkProcurementDetails[i].AVG_LTR_DAY,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.MILK_QTY = parseFloat(
          this.reportTotals.MILK_QTY.toFixed(2)
        );
        this.reportTotals.FAT_IN_MILK = parseFloat(
          this.reportTotals.FAT_IN_MILK.toFixed(2)
        );
        this.reportTotals.SNF_IN_MILK = parseFloat(
          this.reportTotals.SNF_IN_MILK.toFixed(2)
        );
        this.reportTotals.MILK_AMOUNT = parseFloat(
          this.reportTotals.MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.AVG_LTR_DAY = parseFloat(
          this.reportTotals.AVG_LTR_DAY.toFixed(2)
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
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Month Wise Milk Procurement Status',
      true
    );
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '1',
    };
    const fileName = 'monthWiseMilkProcurementStatus';
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
