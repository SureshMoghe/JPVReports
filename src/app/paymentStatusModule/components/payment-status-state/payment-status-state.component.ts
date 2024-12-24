import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { PaymentStatusService } from '../../services/payment-status.service';

@Component({
  selector: 'app-payment-status-state',
  templateUrl: './payment-status-state.component.html',
  styleUrls: ['./payment-status-state.component.css'],
})
export class PaymentStatusStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    REG_FARMERS: 0,
    MILK_POURING_FARMERS: 0,
    AMOUNT_PAID: 0,
    YET_TO_PAY: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private paymentAPI: PaymentStatusService,
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
        DISTRICT: 'TOTAL',
        REG_FARMERS: 0,
        MILK_POURING_FARMERS: 0,
        AMOUNT_PAID: 0,
        YET_TO_PAY: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.paymentAPI.paymentStateReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.REG_FARMERS += parseInt(
            this.stateLevelDetails[i].REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_FARMERS += parseInt(
            this.stateLevelDetails[i].MILK_POURING_FARMERS
          );
          this.reportTotals.AMOUNT_PAID += parseFloat(
            this.stateLevelDetails[i].AMOUNT_PAID
          );
          this.reportTotals.YET_TO_PAY += parseFloat(
            this.stateLevelDetails[i].YET_TO_PAY
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            REG_FARMERS: this.stateLevelDetails[i].REG_FARMERS,
            MILK_POURING_FARMERS: this.stateLevelDetails[i]
              .MILK_POURING_FARMERS,
            AMOUNT_PAID: this.stateLevelDetails[i].AMOUNT_PAID,
            YET_TO_PAY: this.stateLevelDetails[i].YET_TO_PAY,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.AMOUNT_PAID = parseFloat(
          this.reportTotals.AMOUNT_PAID.toFixed(2)
        );
        this.reportTotals.YET_TO_PAY = parseFloat(
          this.reportTotals.YET_TO_PAY.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Payment Status State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelPaymentStatusReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.paymentAPI.paymentStatePDFReport(req);
      if (res.success) {
        basePDF = res.result;
        this.utils.downloadPdfFile(basePDF, fileName);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
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
