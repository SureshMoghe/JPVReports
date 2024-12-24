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
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { PromotersModuleService } from '../../services/promoters-module.service';

@Component({
  selector: 'app-promoters-rbk-level',
  templateUrl: './promoters-rbk-level.component.html',
  styleUrls: ['./promoters-rbk-level.component.css'],
})
export class PromotersRbkLevelComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkPouringPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkNotPouringPromotersChange = new EventEmitter<string>();

  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    MDAC_CODE: '-',
    TOTAL_ROUTES: 0,
    MANDAL_NAME: '-',
    NUM_PROMETERS: 0,
    MILK_POURING_PROMO_MS: 0,
    MILK_POURING_PROMO_ES:0,
    MILK_POURING_PROMO: 0,
    MILK_NOT_POURING_PROMO: 0
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.mentorId !== undefined &&
      this.mentorId !== '' &&
      this.mentorId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.promotersAPI.rbkLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          RBK_NAME: 'TOTAL',
          MDAC_CODE: '-',
          TOTAL_ROUTES: 0,
          MANDAL_NAME: '-',
          NUM_PROMETERS: 0,
          MILK_POURING_PROMO_MS: 0,
          MILK_POURING_PROMO_ES:0,
          MILK_POURING_PROMO: 0,
          MILK_NOT_POURING_PROMO: 0
        };
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.rbkLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NUM_PROMETERS += parseInt(
            this.rbkLevelDetails[i].NUM_PROMETERS
          );

          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_MS += parseInt(
            this.rbkLevelDetails[i].MILK_POURING_PROMO_MS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO_ES += parseInt(
            this.rbkLevelDetails[i].MILK_POURING_PROMO_ES
          );
          this.reportTotals.MILK_POURING_PROMO += parseInt(
            this.rbkLevelDetails[i].MILK_POURING_PROMO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NOT_POURING_PROMO += parseInt(
            this.rbkLevelDetails[i].MILK_NOT_POURING_PROMO
          );
          let singleRow = {   
            S_NO: i + 1,
            RBK_NAME: this.rbkLevelDetails[i].RBK_NAME,
            MDAC_CODE: this.rbkLevelDetails[i].MDAC_CODE,
            TOTAL_ROUTES: this.rbkLevelDetails[i].TOTAL_ROUTES,
            MANDAL_NAME: this.rbkLevelDetails[i].MANDAL_NAME,
            NUM_PROMETERS: this.rbkLevelDetails[i].NUM_PROMETERS,
            MILK_POURING_PROMO_MS: this.rbkLevelDetails[i].MILK_POURING_PROMO_MS,
            MILK_POURING_PROMO_ES: this.rbkLevelDetails[i].MILK_POURING_PROMO_ES,
            MILK_POURING_PROMO: this.rbkLevelDetails[i].MILK_POURING_PROMO,
            MILK_NOT_POURING_PROMO: this.rbkLevelDetails[i].MILK_NOT_POURING_PROMO,
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
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };
    debugger;

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
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
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,   
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
      mentorName: this.mentorName, //obj.NAME_OF_THE_MENTOR,       //obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };
debugger;
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
      mentorName: this.mentorName,//obj.NAME_OF_THE_MENTOR,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
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
      mentorName:this.mentorName, //obj.NAME_OF_THE_MENTOR,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Promoters RBK Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        mentorId: this.mentorId,
        mentorName: this.mentorName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'rbkLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.rbkLevelPromotersPDFReport(req);
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
