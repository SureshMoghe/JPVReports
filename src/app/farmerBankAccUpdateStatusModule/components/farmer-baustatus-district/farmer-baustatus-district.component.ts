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
  selector: 'app-farmer-baustatus-district',
  templateUrl: './farmer-baustatus-district.component.html',
  styleUrls: ['./farmer-baustatus-district.component.css'],
})
export class FarmerBAUStatusDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Output() onMandalChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL: 'TOTAL',
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
      this.reportTotals = {
        S_NO: '-',
        MANDAL: 'TOTAL',
        TOTAL_INVALID_ACCOUNTS: 0,
        TOTAL_DA_VERIFIED: 0,
        PENDING_AT_DA: 0,
        MENTOR_PENDING: 0,
        TOTAL_INVALID_BNK_ACC_APPROVED: 0,
        TOTAL_INVALID_BNK_ACC_REJECTED: 0,
      };
      const req = {
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.bankAccAPI.farmerBUSDistrictLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_ACCOUNTS += parseInt(
            this.districtLevelDetails[i].TOTAL_INVALID_ACCOUNTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_DA_VERIFIED += parseInt(
            this.districtLevelDetails[i].TOTAL_DA_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING_AT_DA += parseInt(
            this.districtLevelDetails[i].PENDING_AT_DA
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MENTOR_PENDING += parseInt(
            this.districtLevelDetails[i].MENTOR_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_BNK_ACC_APPROVED += parseInt(
            this.districtLevelDetails[i].TOTAL_INVALID_BNK_ACC_APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_INVALID_BNK_ACC_REJECTED += parseInt(
            this.districtLevelDetails[i].TOTAL_INVALID_BNK_ACC_REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL: this.districtLevelDetails[i].MANDAL_NAME,
            TOTAL_INVALID_ACCOUNTS: this.districtLevelDetails[i]
              .TOTAL_INVALID_ACCOUNTS,
            TOTAL_DA_VERIFIED: this.districtLevelDetails[i].TOTAL_DA_VERIFIED,
            PENDING_AT_DA: this.districtLevelDetails[i].PENDING_AT_DA,
            MENTOR_PENDING: this.districtLevelDetails[i].MENTOR_PENDING,
            TOTAL_INVALID_BNK_ACC_APPROVED: this.districtLevelDetails[i]
              .TOTAL_INVALID_BNK_ACC_APPROVED,
            TOTAL_INVALID_BNK_ACC_REJECTED: this.districtLevelDetails[i]
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
      'Farmer Invalid Bank Account Verification District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      const fileName = 'districtLevelFarmerInvalidBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.farmerBUSDistrictLevelPDFReport(req);
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
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
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
