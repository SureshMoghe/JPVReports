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
import { MpuacBankAccService } from '../../services/mpuac-bank-acc.service';

@Component({
  selector: 'app-mpuac-bank-acc-state',
  templateUrl: './mpuac-bank-acc-state.component.html',
  styleUrls: ['./mpuac-bank-acc-state.component.css'],
})
export class MpuacBankAccStateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any; 
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNoMdacAccChange = new EventEmitter<string>();

  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDAL: 0,
    TOTAL_RBKS: 0,
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
        TOTAL_MANDAL: 0,
        TOTAL_RBKS: 0,
        TOTAL_MPUSS_UPDATED_RBKS: 0,
        TOTAL_NOT_MPUSS_UPDATED_RBKS: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid

      };
      this.spinner.show();
      const res = await this.bankAccAPI.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDAL += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MPUSS_UPDATED_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_MPUSS_UPDATED_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_MPUSS_UPDATED_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_NOT_MPUSS_UPDATED_RBKS
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_MANDAL: this.stateLevelDetails[i].TOTAL_MANDAL,
            TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
            TOTAL_MPUSS_UPDATED_RBKS:
              this.stateLevelDetails[i].TOTAL_MPUSS_UPDATED_RBKS,
            TOTAL_NOT_MPUSS_UPDATED_RBKS:
              this.stateLevelDetails[i].TOTAL_NOT_MPUSS_UPDATED_RBKS,
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
      'MDAC Bank Account State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelMDACBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.stateLevelMpuacBankPDFReport(req);
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
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnNoMdacAccount(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNoMdacAccChange.emit(encryptedString);
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
