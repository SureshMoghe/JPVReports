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
  selector: 'app-ldm-bank-wise-district',
  templateUrl: './ldm-bank-wise-district.component.html',
  styleUrls: ['./ldm-bank-wise-district.component.css'],
})
export class LdmBankWiseDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  @Input() bankName: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_BRANCH: 0,
    TOTAL_RBKS: 0,
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
      this.bankName === undefined &&
      this.bankName === '' &&
      this.bankName === null
    ) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {
    if (
      this.bankName === undefined &&
      this.bankName === '' &&
      this.bankName === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.districtLevelDetails = [];
      const req = {
        bankName: this.bankName,
      };
      this.spinner.show();
      const res = await this.ldmBankAPI.districtLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          DISTRICT: 'TOTAL',
          TOTAL_MANDALS: 0,
          TOTAL_BRANCH: 0,
          TOTAL_RBKS: 0,
          TOTAL_APPLICATION: 0,
          TO_BE_VERIFIED: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.districtLevelDetails[i].TOTAL_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BRANCH += parseInt(
            this.districtLevelDetails[i].TOTAL_BRANCH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.districtLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.districtLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.districtLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.districtLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.districtLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.districtLevelDetails[i].DISTRICT,
            TOTAL_MANDALS: this.districtLevelDetails[i].TOTAL_MANDALS,
            TOTAL_BRANCH: this.districtLevelDetails[i].TOTAL_BRANCH,
            TOTAL_RBKS: this.districtLevelDetails[i].TOTAL_RBKS,
            TOTAL_APPLICATION: this.districtLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.districtLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.districtLevelDetails[i].APPROVED,
            REJECTED: this.districtLevelDetails[i].REJECTED,
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
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank District Level Report',
      true
    );
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha LDM District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        bankName: this.bankName,
        // fromDate : this.utils.dateFormatConversion(this.fromDate),
        // toDate : this.utils.dateFormatConversion(this.toDate)
      };
      const fileName = 'districtLevelCheyuthaLDMReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.ldmBankAPI.districtLevelCheyuthaLDMPDFReport(req);
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
