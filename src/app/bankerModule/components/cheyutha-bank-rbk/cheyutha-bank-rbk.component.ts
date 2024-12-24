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
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BankerService } from '../../services/banker.service';

@Component({
  selector: 'app-cheyutha-bank-rbk',
  templateUrl: './cheyutha-bank-rbk.component.html',
  styleUrls: ['./cheyutha-bank-rbk.component.css'],
})
export class CheyuthaBankRbkComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPendingChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onApprovedChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRejectedChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;

  rbkLevelDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.rbkId !== undefined &&
      this.rbkId !== '' &&
      this.rbkId !== null &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      this.spinner.show();
      const res = await this.bankAPI.rbkLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            BANK: this.rbkLevelDetails[i].BANK,
            IFSC_CODE: this.rbkLevelDetails[i].IFSC_CODE,
            BRANCH: this.rbkLevelDetails[i].BRANCH,
            TOTAL_APPLICATION: this.rbkLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.rbkLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.rbkLevelDetails[i].APPROVED,
            REJECTED: this.rbkLevelDetails[i].REJECTED,
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

  btnPendingDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      rbkId: obj.SECRETARIAT_CODE,
      rbkName: obj.SECRETARIAT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      ifscCode: obj.IFSC_CODE,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onPendingChange.emit(encryptedString);
  }

  btnApprovedDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      rbkId: obj.SECRETARIAT_CODE,
      rbkName: obj.SECRETARIAT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      ifscCode: obj.IFSC_CODE,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onApprovedChange.emit(encryptedString);
  }

  btnRejectedDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      rbkId: obj.SECRETARIAT_CODE,
      rbkName: obj.SECRETARIAT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      ifscCode: obj.IFSC_CODE,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRejectedChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank RBK Level Report',
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
      const fileName = 'rbkLevelCheyuthaBankReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAPI.rbkLevelCheyuthaBankPDFReport(req);
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
