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
import { LdmBankService } from '../../services/ldm-bank.service';

@Component({
  selector: 'app-ldm-bank-state',
  templateUrl: './ldm-bank-state.component.html',
  styleUrls: ['./ldm-bank-state.component.css'],
})
export class LdmBankStateComponent implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
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
    private ldmBankAPI: LdmBankService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_BRANCH: 0,
        TOTAL_APPLICATION: 0,
        TO_BE_VERIFIED: 0,
        APPROVED: 0,
        REJECTED: 0,
      };
      const req = {
        bankName: this.session.bankName,
      };
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
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
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
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      bankName: this.session.bankName,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'LDM Bank State Level Report',
      true
    );
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
