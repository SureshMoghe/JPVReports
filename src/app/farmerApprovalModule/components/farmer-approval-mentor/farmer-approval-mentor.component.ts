import {
  AfterViewInit,
  Component,
  Input,
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
import { FarmerApprovalService } from '../../services/farmer-approval.service';

@Component({
  selector: 'app-farmer-approval-mentor',
  templateUrl: './farmer-approval-mentor.component.html',
  styleUrls: ['./farmer-approval-mentor.component.css'],
})
export class FarmerApprovalMentorComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() uniqueId: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: '-',
    RBK_NAME: 'TOTAL',
    TOT_VV: 0,
    TOT_VV_LOGIN: 0,
    TOT_HH: 0,
    VV_REG_FARMERS: 0,
    APPROVED: 0,
    REJECTED: 0,
    PENDING_FMR_WITH_ANIMALS: 0,
    PENDING_FMR_WITH_OUT_ANIMALS: 0,
    VA_DA_APPROVED: 0,
    MENTOR_APPROVED: 0,
    RIC_APPROVED: 0,
    WITHOUT_MILCH: 0,
    MILCH_DATA_COL_PENDING: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private approvalAPI: FarmerApprovalService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === null
    ) {
      return;
    }
    if (
      this.uniqueId === null &&
      this.uniqueId === '' &&
      this.uniqueId === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        MANDAL_NAME: '-',
        RBK_NAME: 'TOTAL',
        TOT_VV: 0,
        TOT_VV_LOGIN: 0,
        TOT_HH: 0,
        VV_REG_FARMERS: 0,
        APPROVED: 0,
        REJECTED: 0,
        PENDING_FMR_WITH_ANIMALS: 0,
        PENDING_FMR_WITH_OUT_ANIMALS: 0,
        VA_DA_APPROVED: 0,
        MENTOR_APPROVED: 0,
        RIC_APPROVED: 0,
        WITHOUT_MILCH: 0,
        MILCH_DATA_COL_PENDING: 0,
      };
      const req = {
        districtId: this.districtId,
        uniqueId: this.uniqueId,
      };
      this.spinner.show();
      const res = await this.approvalAPI.farmerApprovalMentorLevel(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_VV += parseInt(
            this.mentorLevelDetails[i].TOT_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_VV_LOGIN += parseInt(
            this.mentorLevelDetails[i].TOT_VV_LOGIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_HH += parseInt(
            this.mentorLevelDetails[i].TOT_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.VV_REG_FARMERS += parseInt(
            this.mentorLevelDetails[i].VV_REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.mentorLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.mentorLevelDetails[i].REJECTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING_FMR_WITH_ANIMALS += parseInt(
            this.mentorLevelDetails[i].PENDING_FMR_WITH_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING_FMR_WITH_OUT_ANIMALS += parseInt(
            this.mentorLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.VA_DA_APPROVED += parseInt(
            this.mentorLevelDetails[i].VA_DA_APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MENTOR_APPROVED += parseInt(
            this.mentorLevelDetails[i].MENTOR_APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.RIC_APPROVED += parseInt(
            this.mentorLevelDetails[i].RIC_APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.WITHOUT_MILCH += parseInt(
            this.mentorLevelDetails[i].WITHOUT_MILCH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILCH_DATA_COL_PENDING += parseInt(
            this.mentorLevelDetails[i].MILCH_DATA_COL_PENDING
          );

          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.mentorLevelDetails[i].MANDAL_NAME,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            TOT_VV: this.mentorLevelDetails[i].TOT_VV,
            TOT_VV_LOGIN: this.mentorLevelDetails[i].TOT_VV_LOGIN,
            TOT_HH: this.mentorLevelDetails[i].TOT_HH,
            VV_REG_FARMERS: this.mentorLevelDetails[i].VV_REG_FARMERS,
            APPROVED: this.mentorLevelDetails[i].APPROVED,
            REJECTED: this.mentorLevelDetails[i].REJECTED,
            PENDING_FMR_WITH_ANIMALS:
              this.mentorLevelDetails[i].PENDING_FMR_WITH_ANIMALS,
            PENDING_FMR_WITH_OUT_ANIMALS:
              this.mentorLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS,
            VA_DA_APPROVED: this.mentorLevelDetails[i].VA_DA_APPROVED,
            MENTOR_APPROVED: this.mentorLevelDetails[i].MENTOR_APPROVED,
            RIC_APPROVED: this.mentorLevelDetails[i].RIC_APPROVED,
            WITHOUT_MILCH: this.mentorLevelDetails[i].WITHOUT_MILCH,
            MILCH_DATA_COL_PENDING:
              this.mentorLevelDetails[i].MILCH_DATA_COL_PENDING,
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
      'Farmer Approval Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        uniqueId: this.uniqueId,
      };
      const fileName = 'mentorLevelFarmerApprovalReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.approvalAPI.farmerApprovalMentorLevelPDF(req);
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
