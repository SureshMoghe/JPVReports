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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { PromotersModuleService } from '../../services/promoters-module.service';

@Component({
  selector: 'app-promoters-mentor-level',
  templateUrl: './promoters-mentor-level.component.html',
  styleUrls: ['./promoters-mentor-level.component.css'],
})
export class PromotersMentorLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
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

  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MENTOR_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    MANDALS: 0,
    TOTAL_RBK: 0,
    TOTAL_PROMOTERS_UPDATED_RBK: 0,
    TOTAL_PROM_NOT_UPDATED_RBK: 0,
    NUM_PROMETERS: 0,
    MILK_POURING_PROMO_MS: 0,
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
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== null
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.mentorLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.promotersAPI.mentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MENTOR_NAME: 'TOTAL',
          TOTAL_ROUTES: 0,
          MANDALS: 0,
          TOTAL_RBK: 0,
          NUM_PROMETERS: 0,
          TOTAL_PROMOTERS_UPDATED_RBK: 0,
          TOTAL_PROM_NOT_UPDATED_RBK: 0,
          MILK_POURING_PROMO_MS: 0,
          MILK_POURING_PROMO_ES:0,
          MILK_POURING_PROMO: 0,
          MILK_NOT_POURING_PROMO: 0,
        };
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.MANDALS += parseInt(
            this.mentorLevelDetails[i].MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.mentorLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.mentorLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_UPDATED_RBK += parseInt(
            this.mentorLevelDetails[i].TOTAL_PROMOTERS_UPDATED_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROM_NOT_UPDATED_RBK += parseInt(
            this.mentorLevelDetails[i].TOTAL_PROM_NOT_UPDATED_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NUM_PROMETERS += parseInt(
            this.mentorLevelDetails[i].NUM_PROMETERS
          );

          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_MS += parseInt(
            this.mentorLevelDetails[i].MILK_POURING_PROMO_MS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_ES += parseInt(
            this.mentorLevelDetails[i].MILK_POURING_PROMO_ES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO += parseInt(
            this.mentorLevelDetails[i].MILK_POURING_PROMO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NOT_POURING_PROMO += parseInt(
            this.mentorLevelDetails[i].MILK_NOT_POURING_PROMO
          );
          let singleRow = {
            S_NO: i + 1,
            MENTOR_NAME: this.mentorLevelDetails[i].MENTOR_NAME,
            TOTAL_ROUTES: this.mentorLevelDetails[i].TOTAL_ROUTES,
            MANDALS: this.mentorLevelDetails[i].MANDALS,
            TOTAL_RBK: this.mentorLevelDetails[i].TOTAL_RBK,
            TOTAL_PROMOTERS_UPDATED_RBK:
              this.mentorLevelDetails[i].TOTAL_PROMOTERS_UPDATED_RBK,
            TOTAL_PROM_NOT_UPDATED_RBK:
              this.mentorLevelDetails[i].TOTAL_PROM_NOT_UPDATED_RBK,
            NUM_PROMETERS: this.mentorLevelDetails[i].NUM_PROMETERS,
            MILK_POURING_PROMO_MS: this.mentorLevelDetails[i].MILK_POURING_PROMO_MS,
            MILK_POURING_PROMO_ES: this.mentorLevelDetails[i].MILK_POURING_PROMO_ES,
            MILK_POURING_PROMO: this.mentorLevelDetails[i].MILK_POURING_PROMO,
            MILK_NOT_POURING_PROMO:
              this.mentorLevelDetails[i].MILK_NOT_POURING_PROMO,
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };
    debugger;

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnAddedRbkDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,        
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '1',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAddedRbkChange.emit(encryptedString);
  }

  btnNotAddedRbkDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '2',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNotAddedRbkChange.emit(encryptedString);
  }

  btnTotalPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '3',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onTotalPromotersChange.emit(encryptedString);
  }

  btnMilkPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '4',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsMs(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '6',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsEs(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '7',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }

  btnMilkNotPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '5',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Promoters Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.mentorLevelPromotersPDFReport(req);
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
