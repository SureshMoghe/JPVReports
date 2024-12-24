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
import { LdmBankWiseService } from '../../services/ldm-bank-wise.service';

@Component({
  selector: 'app-ldm-bank-wise-state',
  templateUrl: './ldm-bank-wise-state.component.html',
  styleUrls: ['./ldm-bank-wise-state.component.css'],
})
export class LdmBankWiseStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBankChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    BANK: 'TOTAL',
    TOTAL_BRANCH: 0,
    TOTAL_APPLICATION: 0,
    TO_BE_VERIFIED: 0,
    APPROVED: 0,
    REJECTED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private ldmBankAPI: LdmBankWiseService,
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
        BANK: 'TOTAL',
        TOTAL_BRANCH: 0,
        TOTAL_APPLICATION: 0,
        TO_BE_VERIFIED: 0,
        APPROVED: 0,
        REJECTED: 0,
      };
      const req = {};
      this.spinner.show();
      const res = await this.ldmBankAPI.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BRANCH += parseInt(
            this.stateLevelDetails[i].TOTAL_BRANCH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.stateLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.stateLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.stateLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.stateLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            BANK: this.stateLevelDetails[i].BANK,
            TOTAL_BRANCH: this.stateLevelDetails[i].TOTAL_BRANCH,
            TOTAL_APPLICATION: this.stateLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.stateLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.stateLevelDetails[i].APPROVED,
            REJECTED: this.stateLevelDetails[i].REJECTED,
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
      bankName: obj.BANK,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onBankChange.emit(encryptedString);
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank Wise State Level Report',
      true
    );
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha LDM State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
      };
      const fileName = 'stateLevelCheyuthaLDMReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.ldmBankAPI.stateLevelCheyuthaLDMPDFReport(req);
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
