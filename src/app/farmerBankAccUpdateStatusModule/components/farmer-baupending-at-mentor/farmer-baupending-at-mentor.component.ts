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
import { FarmerBankAccUpdateStatusService } from '../../services/farmer-bank-acc-update-status.service';

@Component({
  selector: 'app-farmer-baupending-at-mentor',
  templateUrl: './farmer-baupending-at-mentor.component.html',
  styleUrls: ['./farmer-baupending-at-mentor.component.css'],
})
export class FarmerBAUPendingAtMentorComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  PendingAtMentorDetails = [];

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
  ngOnChanges(): void {
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
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
      };
      this.spinner.show();
      const res = await this.bankAccAPI.mentorPendingList(req);
      if (res.success) {
        this.excelData = [];
        this.PendingAtMentorDetails = res.result;
        for (let i = 0; i < this.PendingAtMentorDetails.length; i++) {
          const singleRow = {
            S_NO: i + 1,
            FARMER_CODE: this.PendingAtMentorDetails[i].FARMER_CODE,
            FARMER_NAME: this.PendingAtMentorDetails[i].FARMER_NAME,
            MOBILE_NUMBER: this.PendingAtMentorDetails[i].MOBILE_NUMBER,
            ACCOUNT_NUMBER: this.PendingAtMentorDetails[i].ACCOUNT_NUMBER,
            BANK_NAME: this.PendingAtMentorDetails[i].BANK_NAME,
            BANK_BRANCH: this.PendingAtMentorDetails[i].BANK_BRANCH,
            IFSC_CODE: this.PendingAtMentorDetails[i].IFSC_CODE,
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Invalid Bank Account Verification Pending At MENTOR Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
      };
      const fileName = 'PendingAtMentorFarmerInvalidBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.mentorPendingListPDF(req);
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
