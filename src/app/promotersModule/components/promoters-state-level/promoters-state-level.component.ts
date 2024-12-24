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
import { PromotersModuleService } from '../../services/promoters-module.service'; 

@Component({
  selector: 'app-promoters-state-level',
  templateUrl: './promoters-state-level.component.html',
  styleUrls: ['./promoters-state-level.component.css'], 
})
export class PromotersStateLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAddedRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNotAddedRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onTotalPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkPouringPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkNotPouringPromotersChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_MENTOR: 0,
    MANDALS: 0,
    TOTAL_RBK: 0,
    TOTAL_PROMOTERS_UPDATED_RBK: 0,
    TOTAL_PROM_NOT_UPDATED_RBK: 0,
    NUM_PROMETERS: 0,
    MILK_POURING_PROMO_MS:0,
    MILK_POURING_PROMO_ES:0,
    MILK_POURING_PROMO: 0,
    MILK_NOT_POURING_PROMO: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
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
        TOTAL_ROUTES: 0,
        TOTAL_MENTOR: 0,
        MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_PROMOTERS_UPDATED_RBK: 0,
        TOTAL_PROM_NOT_UPDATED_RBK: 0,
        NUM_PROMETERS: 0,
        MILK_POURING_PROMO_MS:0,
        MILK_POURING_PROMO_ES:0,
        MILK_POURING_PROMO: 0,
        MILK_NOT_POURING_PROMO: 0,
      }; debugger;
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.promotersAPI.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.reportTotals = {
          S_NO: '-',
          DISTRICT: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_MENTOR: 0,
          MANDALS: 0,
          TOTAL_RBK: 0,
          TOTAL_PROMOTERS_UPDATED_RBK: 0,
          TOTAL_PROM_NOT_UPDATED_RBK: 0,
          NUM_PROMETERS: 0,
          MILK_POURING_PROMO_MS:0,
          MILK_POURING_PROMO_ES:0,
          MILK_POURING_PROMO: 0,
          MILK_NOT_POURING_PROMO: 0,
        };
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MENTOR += parseInt(
            this.stateLevelDetails[i].TOTAL_MENTOR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MANDALS += parseInt(
            this.stateLevelDetails[i].MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_UPDATED_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_PROMOTERS_UPDATED_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROM_NOT_UPDATED_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_PROM_NOT_UPDATED_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NUM_PROMETERS += parseInt(
            this.stateLevelDetails[i].NUM_PROMETERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_MS += parseInt(
            this.stateLevelDetails[i].MILK_POURING_PROMO_MS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_ES += parseInt(
            this.stateLevelDetails[i].MILK_POURING_PROMO_ES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO += parseInt(
            this.stateLevelDetails[i].MILK_POURING_PROMO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NOT_POURING_PROMO += parseInt(
            this.stateLevelDetails[i].MILK_NOT_POURING_PROMO
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_MENTOR: this.stateLevelDetails[i].TOTAL_MENTOR,
            MANDALS: this.stateLevelDetails[i].MANDALS,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_PROMOTERS_UPDATED_RBK:
              this.stateLevelDetails[i].TOTAL_PROMOTERS_UPDATED_RBK,
            TOTAL_PROM_NOT_UPDATED_RBK:
              this.stateLevelDetails[i].TOTAL_PROM_NOT_UPDATED_RBK,
            NUM_PROMETERS: this.stateLevelDetails[i].NUM_PROMETERS,
            MILK_POURING_PROMO_MS: this.stateLevelDetails[i].MILK_POURING_PROMO_MS,
            MILK_POURING_PROMO_ES: this.stateLevelDetails[i].MILK_POURING_PROMO_ES,
            MILK_POURING_PROMO: this.stateLevelDetails[i].MILK_POURING_PROMO,
            MILK_NOT_POURING_PROMO:
              this.stateLevelDetails[i].MILK_NOT_POURING_PROMO,
          };

          this.excelData.push(singleRow);
        }
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
      'Promoters State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.stateLevelPromotersPDFReport(req);
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

  btnAddedRbkDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '1',
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAddedRbkChange.emit(encryptedString);
  }

  btnNotAddedRbkDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '2',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNotAddedRbkChange.emit(encryptedString);
  }

  btnTotalPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '3',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onTotalPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '4',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsMs(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '6',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsEs(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '7',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkNotPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '5',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
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
