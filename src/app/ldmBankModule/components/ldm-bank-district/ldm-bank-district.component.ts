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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LdmBankService } from '../../services/ldm-bank.service';

@Component({
  selector: 'app-ldm-bank-district',
  templateUrl: './ldm-bank-district.component.html',
  styleUrls: ['./ldm-bank-district.component.css'],
})
export class LdmBankDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() bankName: any;
  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    BRANCH_NAME: 'TOTAL',
    TOTAL_RBK: 0,
    TO_BE_VERIFIED: 0,
    TOTAL_APPLICATION: 0,
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
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    // if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  ngOnChanges(): void {
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
      this.rbkLevelDetails = [];
      const req = {
        districtId: this.districtId,
        bankName: this.bankName,
      };
      this.spinner.show();
      const res = await this.ldmBankAPI.branchLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          BRANCH_NAME: 'TOTAL',
          TOTAL_RBK: 0,
          TO_BE_VERIFIED: 0,
          TOTAL_APPLICATION: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.rbkLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.rbkLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.rbkLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.rbkLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.rbkLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            BRANCH_NAME: this.rbkLevelDetails[i].BRANCH_NAME,
            TOTAL_RBK: this.rbkLevelDetails[i].TOTAL_RBK,
            TOTAL_APPLICATION: this.rbkLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.rbkLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.rbkLevelDetails[i].APPROVED,
            REJECTED: this.rbkLevelDetails[i].REJECTED,
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
      ifscCode: obj.IFSC_CODE,
      branchName: obj.BRANCH_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'LDM Bank Branch Level Report',
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
