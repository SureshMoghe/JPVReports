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
import { MinutesOfMeetingService } from '../../services/minutes-of-meeting.service';

@Component({
  selector: 'app-mom-mentor',
  templateUrl: './mom-mentor.component.html',
  styleUrls: ['./mom-mentor.component.css'],
})
export class MomMentorComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
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
    NO_OF_METG_CONDUCTED_IN_VILL: 0,
    MINUTES_OF_MEETING_SUBMITTED: 0,
    MINUTES_OF_MEETING_NOT_SUBMIT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private momApi: MinutesOfMeetingService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  ngOnChanges(): void {}

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        TOTAL_VILLAGES: 0,
        NO_OF_METG_CONDUCTED_IN_VILL: 0,
        MINUTES_OF_MEETING_SUBMITTED: 0,
        MINUTES_OF_MEETING_NOT_SUBMIT: 0,
      };
      const req = {
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.mentorLevelDetails = [];
      this.spinner.show();
      const res = await this.momApi.mentorLevelReport(req);
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_METG_CONDUCTED_IN_VILL += parseInt(
            this.mentorLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MINUTES_OF_MEETING_SUBMITTED += parseInt(
            this.mentorLevelDetails[i].MINUTES_OF_MEETING_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MINUTES_OF_MEETING_NOT_SUBMIT += parseInt(
            this.mentorLevelDetails[i].MINUTES_OF_MEETING_NOT_SUBMIT
          );

          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.mentorLevelDetails[i].DISTRICT_NAME,
            MANDAL_NAME: this.mentorLevelDetails[i].MANDAL_NAME,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            NO_OF_METG_CONDUCTED_IN_VILL:
              this.mentorLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL,
            MINUTES_OF_MEETING_SUBMITTED:
              this.mentorLevelDetails[i].MINUTES_OF_MEETING_SUBMITTED,
            MINUTES_OF_MEETING_NOT_SUBMIT:
              this.mentorLevelDetails[i].MINUTES_OF_MEETING_NOT_SUBMIT,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);

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
      'Minutes Of Meeting Mentor Level Report',
      true
    );
  }
  async btnPDF(): Promise<void> {
    try {
      const req = {
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelMinutesOfMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.momApi.mentorLevelReportPDF(req);
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
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
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
