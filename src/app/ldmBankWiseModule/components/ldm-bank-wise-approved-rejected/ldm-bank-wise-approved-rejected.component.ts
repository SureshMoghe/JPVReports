import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
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
  selector: 'app-ldm-bank-wise-approved-rejected',
  templateUrl: './ldm-bank-wise-approved-rejected.component.html',
  styleUrls: ['./ldm-bank-wise-approved-rejected.component.css'],
})
export class LdmBankWiseApprovedRejectedComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() bankName: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() ifscCode: any;
  @Input() branchName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() actionTaken: any;
  @Input() reportType: any;

  approvedLevelDetails = [];

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
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.ifscCode === undefined &&
      this.ifscCode === '' &&
      this.ifscCode === null
    ) {
      return;
    }
    if (
      this.actionTaken === undefined &&
      this.actionTaken === '' &&
      this.actionTaken === null
    ) {
      return;
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
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.ifscCode === undefined &&
      this.ifscCode === '' &&
      this.ifscCode === null
    ) {
      return;
    }
    if (
      this.actionTaken === undefined &&
      this.actionTaken === '' &&
      this.actionTaken === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.approvedLevelDetails = [];
      const req = {
        bankName: this.bankName,
        districtId: this.districtId,
        mandalId: this.mandalId,
        ifscCode: this.ifscCode,
        rbkId: this.rbkId,
        actionTaken: this.actionTaken,
      };
      this.spinner.show();
      const res = await this.ldmBankAPI.detailLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.approvedLevelDetails = res.result;
        for (let i = 0; i < this.approvedLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            BEN_CODE: this.approvedLevelDetails[i].BEN_CODE,
            BEN_NAME: this.approvedLevelDetails[i].BEN_NAME,
            DOB_DT: this.approvedLevelDetails[i].DOB_DT,
            BEN_FATHER_NAME: this.approvedLevelDetails[i].BEN_FATHER_NAME,
            UID_NUM: this.approvedLevelDetails[i].UID_NUM,
            MOBILE_NUMBER: this.approvedLevelDetails[i].MOBILE_NUMBER,
            ACCOUNT_NUMBER: this.approvedLevelDetails[i].ACCOUNT_NUMBER,
            LIVE_STOCK: this.approvedLevelDetails[i].LIVE_STOCK,
            APP_HARD_COPY_REV_DATE: this.approvedLevelDetails[i]
              .APP_HARD_COPY_REV_DATE,
            ACTION_TAKEN: this.approvedLevelDetails[i].ACTION_TAKEN,
            REMARKS: this.approvedLevelDetails[i].REMARKS,
          };

          this.excelData.push(singleRow);
        }
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
      'Cheyutha LDM Bank Approved And Rejected Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        bankName: this.bankName,
        districtId: this.districtId,
        mandalId: this.mandalId,
        ifscCode: this.ifscCode,
        rbkId: this.rbkId,
        actionTaken: this.actionTaken,
        // fromDate : this.utils.dateFormatConversion(this.fromDate),
        // toDate : this.utils.dateFormatConversion(this.toDate)
      };
      const fileName = 'approvedRejectedLevelCheyuthaLDMReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.ldmBankAPI.detailLevelCheyuthaLDMPDFReport(req);
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
