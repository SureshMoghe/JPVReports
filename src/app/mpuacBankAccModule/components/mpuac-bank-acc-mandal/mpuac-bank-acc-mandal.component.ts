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
import { MpuacBankAccService } from '../../services/mpuac-bank-acc.service';

@Component({
  selector: 'app-mpuac-bank-acc-mandal',
  templateUrl: './mpuac-bank-acc-mandal.component.html',
  styleUrls: ['./mpuac-bank-acc-mandal.component.css'],
})
export class MpuacBankAccMandalComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNoMdacAccRbkChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
    TOTAL_RBKS: 0,
    TOTAL_AMCU_VILLAGES: 0,
    TOTAL_MPUSS_UPDATED_RBKS: 0,
    TOTAL_NOT_MPUSS_UPDATED_RBKS: 0,
  };
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAccAPI: MpuacBankAccService,
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
        villageId: this.phaseid
      };
      this.spinner.show();
      const res = await this.bankAccAPI.mandalLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL_NAME: 'TOTAL',
          TOTAL_RBKS: 0,
          TOTAL_AMCU_VILLAGES: 0,
          TOTAL_MPUSS_UPDATED_RBKS: 0,
          TOTAL_NOT_MPUSS_UPDATED_RBKS: 0,
        };
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AMCU_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_AMCU_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MPUSS_UPDATED_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_MPUSS_UPDATED_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_MPUSS_UPDATED_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_NOT_MPUSS_UPDATED_RBKS
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.mentorLevelDetails[i].MANDAL_NAME,
            TOTAL_RBKS: this.mentorLevelDetails[i].TOTAL_RBKS,
            TOTAL_AMCU_VILLAGES: this.mentorLevelDetails[i].TOTAL_AMCU_VILLAGES,
            TOTAL_MPUSS_UPDATED_RBKS: this.mentorLevelDetails[i]
              .TOTAL_MPUSS_UPDATED_RBKS,
            TOTAL_NOT_MPUSS_UPDATED_RBKS: this.mentorLevelDetails[i]
              .TOTAL_NOT_MPUSS_UPDATED_RBKS,
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
      'MDAC Bank Account Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mandalLevelMDACBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.mandalLevelMpuacBankPDFReport(req);
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
      mentorId: obj.MANDAL_CODE,
      mentorName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
  }

  btnNoMdacAccRbk(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mentorId: obj.MANDAL_CODE,
      mentorName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNoMdacAccRbkChange.emit(encryptedString);
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
