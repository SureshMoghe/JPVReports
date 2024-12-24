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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerSmsService } from '../../services/farmer-sms.service';

@Component({
  selector: 'app-farmer-sms-mentor',
  templateUrl: './farmer-sms-mentor.component.html',
  styleUrls: ['./farmer-sms-mentor.component.css'],
})
export class FarmerSmsMentorComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() uniqueId: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  mentorLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_VILLAGES: 0,
    FARMERS_REGISTERED: 0,
    FMR_REGIS_SMS_SENT: 0,
    NO_OF_SCHEDULES_CREATED: 0,
    SCHEDULE_INVITATION_SENT: 0,
    VV_INVITED: 0,
    VV_INVITED_PENDING: 0,
    TOTAL_NO_OF_PARTICIPANTS: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerSms: FarmerSmsService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.uniqueId === null &&
      this.uniqueId === '' &&
      this.uniqueId === undefined
    ) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {}

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        TOTAL_VILLAGES: 0,
        FARMERS_REGISTERED: 0,
        FMR_REGIS_SMS_SENT: 0,
        NO_OF_SCHEDULES_CREATED: 0,
        SCHEDULE_INVITATION_SENT: 0,
        VV_INVITED: 0,
        VV_INVITED_PENDING: 0,
        TOTAL_NO_OF_PARTICIPANTS: 0,
      };
      const req = {
        districtId: this.districtId,
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.mentorLevelDetails = [];
      this.spinner.show();
      const res = await this.farmerSms.farmerSmsMentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FARMERS_REGISTERED += parseInt(
            this.mentorLevelDetails[i].FARMERS_REGISTERED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FMR_REGIS_SMS_SENT += parseInt(
            this.mentorLevelDetails[i].FMR_REGIS_SMS_SENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SCHEDULES_CREATED += parseInt(
            this.mentorLevelDetails[i].NO_OF_SCHEDULES_CREATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SCHEDULE_INVITATION_SENT += parseInt(
            this.mentorLevelDetails[i].SCHEDULE_INVITATION_SENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.VV_INVITED += parseInt(
            this.mentorLevelDetails[i].VV_INVITED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.VV_INVITED_PENDING += parseInt(
            this.mentorLevelDetails[i].VV_INVITED_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NO_OF_PARTICIPANTS += parseInt(
            this.mentorLevelDetails[i].TOTAL_NO_OF_PARTICIPANTS
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            FARMERS_REGISTERED: this.mentorLevelDetails[i].FARMERS_REGISTERED,
            FMR_REGIS_SMS_SENT: this.mentorLevelDetails[i].FMR_REGIS_SMS_SENT,
            NO_OF_SCHEDULES_CREATED: this.mentorLevelDetails[i]
              .NO_OF_SCHEDULES_CREATED,
            SCHEDULE_INVITATION_SENT: this.mentorLevelDetails[i]
              .SCHEDULE_INVITATION_SENT,
            VV_INVITED: this.mentorLevelDetails[i].VV_INVITED,
            VV_INVITED_PENDING: this.mentorLevelDetails[i].VV_INVITED_PENDING,
            TOTAL_NO_OF_PARTICIPANTS: this.mentorLevelDetails[i]
              .TOTAL_NO_OF_PARTICIPANTS,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer SMS Mentor Level Report',
      true
    );
  }
  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelFarmerSmsReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerSms.farmerSmsMentorLevelReportPDF(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
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
