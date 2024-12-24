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
import { FarmerBankAccUpdateStatusService } from '../../services/farmer-bank-acc-update-status.service';

@Component({
  selector: 'app-farmer-baustatus-mandal',
  templateUrl: './farmer-baustatus-mandal.component.html',
  styleUrls: ['./farmer-baustatus-mandal.component.css'],
})
export class FarmerBAUStatusMandalComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Output() onRbkChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK: 'TOTAL',
    TOTAL_INVALID_ACCOUNTS: 0,
    TOTAL_DA_VERIFIED: 0,
    PENDING_AT_DA: 0,
    MENTOR_PENDING: 0,
    TOTAL_INVALID_BNK_ACC_APPROVED: 0,
    TOTAL_INVALID_BNK_ACC_REJECTED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAccAPI: FarmerBankAccUpdateStatusService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK: 'TOTAL',
        TOTAL_INVALID_ACCOUNTS: 0,
        TOTAL_DA_VERIFIED: 0,
        PENDING_AT_DA: 0,
        MENTOR_PENDING: 0,
        TOTAL_INVALID_BNK_ACC_APPROVED: 0,
        TOTAL_INVALID_BNK_ACC_REJECTED: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      this.spinner.show();
      const res = await this.bankAccAPI.farmerBUSMandalLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_ACCOUNTS += parseInt(
            this.mandalLevelDetails[i].TOTAL_INVALID_ACCOUNTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_DA_VERIFIED += parseInt(
            this.mandalLevelDetails[i].TOTAL_DA_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING_AT_DA += parseInt(
            this.mandalLevelDetails[i].PENDING_AT_DA
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MENTOR_PENDING += parseInt(
            this.mandalLevelDetails[i].MENTOR_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_BNK_ACC_APPROVED += parseInt(
            this.mandalLevelDetails[i].TOTAL_INVALID_BNK_ACC_APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_BNK_ACC_REJECTED += parseInt(
            this.mandalLevelDetails[i].TOTAL_INVALID_BNK_ACC_REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            RBK: this.mandalLevelDetails[i].RBK_NAME,
            TOTAL_INVALID_ACCOUNTS: this.mandalLevelDetails[i]
              .TOTAL_INVALID_ACCOUNTS,
            TOTAL_DA_VERIFIED: this.mandalLevelDetails[i].TOTAL_DA_VERIFIED,
            PENDING_AT_DA: this.mandalLevelDetails[i].PENDING_AT_DA,
            MENTOR_PENDING: this.mandalLevelDetails[i].MENTOR_PENDING,
            TOTAL_INVALID_BNK_ACC_APPROVED: this.mandalLevelDetails[i]
              .TOTAL_INVALID_BNK_ACC_APPROVED,
            TOTAL_INVALID_BNK_ACC_REJECTED: this.mandalLevelDetails[i]
              .TOTAL_INVALID_BNK_ACC_REJECTED,
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
      'Farmer Invalid Bank Account Verification Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      const fileName = 'mandalLevelFarmerInvalidBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.farmerBUSMandalLevelPDFReport(req);
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
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
