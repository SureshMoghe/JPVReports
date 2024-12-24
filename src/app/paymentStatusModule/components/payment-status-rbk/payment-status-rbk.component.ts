import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
  selector: 'app-payment-status-rbk',
  templateUrl: './payment-status-rbk.component.html',
  styleUrls: ['./payment-status-rbk.component.css'],
})
export class PaymentStatusRbkComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVillageChange = new EventEmitter<string>();
  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    VILLAGE: '-',
    AMC_ID: 'TOTAL',
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
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined
    ) {
      this.loadReport();
    }
  }
  ngOnChanges(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        VILLAGE: '-',
        AMC_ID: 'TOTAL',
        REG_FARMERS: 0,
        MILK_POURING_FARMERS: 0,
        AMOUNT_PAID: 0,
        YET_TO_PAY: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      this.spinner.show();
      const res = await this.paymentAPI.paymentRbkReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.REG_FARMERS += parseInt(
            this.rbkLevelDetails[i].REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_FARMERS += parseInt(
            this.rbkLevelDetails[i].MILK_POURING_FARMERS
          );
          this.reportTotals.AMOUNT_PAID += parseFloat(
            this.rbkLevelDetails[i].AMOUNT_PAID
          );
          this.reportTotals.YET_TO_PAY += parseFloat(
            this.rbkLevelDetails[i].YET_TO_PAY
          );
          let singleRow = {
            S_NO: i + 1,
            VILLAGE: this.rbkLevelDetails[i].VILLAGE_NAME,
            AMC_ID: this.rbkLevelDetails[i].AMC_ID,
            REG_FARMERS: this.rbkLevelDetails[i].REG_FARMERS,
            MILK_POURING_FARMERS: this.rbkLevelDetails[i].MILK_POURING_FARMERS,
            AMOUNT_PAID: this.rbkLevelDetails[i].AMOUNT_PAID,
            YET_TO_PAY: this.rbkLevelDetails[i].YET_TO_PAY,
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
      'Payment Status RBK Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      const fileName = 'rbkLevelPaymentStatusReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.paymentAPI.paymentRbkPDFReport(req);
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.NAME_OF_THE_RBK,
      villageId: obj.VILLAGECODE,
      villageName: obj.VILLAGE_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVillageChange.emit(encryptedString);
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
