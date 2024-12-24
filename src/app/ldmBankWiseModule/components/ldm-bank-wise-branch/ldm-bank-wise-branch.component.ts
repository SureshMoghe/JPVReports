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
import { LdmBankWiseService } from '../../services/ldm-bank-wise.service';

@Component({
  selector: 'app-ldm-bank-wise-branch',
  templateUrl: './ldm-bank-wise-branch.component.html',
  styleUrls: ['./ldm-bank-wise-branch.component.css'],
})
export class LdmBankWiseBranchComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBranchChange = new EventEmitter<string>();
  @Input() reportType: any;
  @Input() bankName: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;

  branchLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    BRANCH: 'TOTAL',
    IFSC_CODE: '-',
    TOTAL_RBK: 0,
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
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.bankName === undefined &&
      this.bankName === '' &&
      this.bankName === null
    ) {
      return;
    }
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
      return;
    }
    if (this.reportType === 'SLBC') {
      this.mandalName = 'ALL';
      this.mandalId = 'ALL';
    }
    this.loadReport();
  }

  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.bankName === undefined &&
      this.bankName === '' &&
      this.bankName === null
    ) {
      return;
    }
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
      return;
    }
    if (this.reportType === 'SLBC') {
      this.mandalName = 'ALL';
      this.mandalId = 'ALL';
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.branchLevelDetails = [];
      const req = {
        bankName: this.bankName,
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      this.spinner.show();
      const res = await this.ldmBankAPI.branchLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.branchLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          BRANCH: 'TOTAL',
          IFSC_CODE: '-',
          TOTAL_RBK: 0,
          TOTAL_APPLICATION: 0,
          TO_BE_VERIFIED: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.branchLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.branchLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.branchLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.branchLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.branchLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.branchLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            BRANCH: this.branchLevelDetails[i].BRANCH,
            IFSC_CODE: this.branchLevelDetails[i].IFSC_CODE,
            TOTAL_RBK: this.branchLevelDetails[i].TOTAL_RBK,
            TOTAL_APPLICATION: this.branchLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.branchLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.branchLevelDetails[i].APPROVED,
            REJECTED: this.branchLevelDetails[i].REJECTED,
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
      bankName: this.bankName,
      districtId: obj.LGD_DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.LGD_MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      branchName: obj.BRANCH,
      ifscCode: obj.IFSC_CODE,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onBranchChange.emit(encryptedString);
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank  Level Report',
      true
    );
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha LDM Branch Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        bankName: this.bankName,
        districtId: this.districtId,
        mandalId: this.mandalId,
        // fromDate : this.utils.dateFormatConversion(this.fromDate),
        // toDate : this.utils.dateFormatConversion(this.toDate)
      };
      const fileName = 'branchLevelCheyuthaLDMReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.ldmBankAPI.branchLevelCheyuthaLDMPDFReport(req);
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
