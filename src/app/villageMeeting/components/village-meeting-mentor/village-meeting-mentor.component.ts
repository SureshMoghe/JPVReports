import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-mentor',
  templateUrl: './village-meeting-mentor.component.html',
  styleUrls: ['./village-meeting-mentor.component.css'],
})
export class VillageMeetingMentorComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MENTOR_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    SCHEDULE_MEETINGS: 0,
    NOT_SCHEDULE_MEETING: 0,
    NO_OF_METG_CONDUCTED_IN_VILL: 0,
    MEETING_MINUTES_SUBMITTED: 0,
    MEETING_NOT_MINUTES_SUBMITTED: 0,
    FUNCTIONARIES_UPDATED: 0,
    FUNCTIONARIES_NOT_UPDATED: 0,
    TOTAL_NO_PARTICIPANTS: 0,
    OWNER_OF_ANIMAL: 0,
    CHEYUTHA_NO_BEN: 0,
    TOTAL_SECRETARY: 0,
    TOTAL_ASSI_SECRETARY: 0,
    TOTAL_BULDING_INSPS_VILL: 0,
    TOTAL_BULDING_NOT_INSPS_VILL: 0,
    TOTAL_CALIB_NOT_DONE_VILLAGES: 0,
    TOTAL_CALIB_DONE_VILLAGES: 0,
    TOTAL_PROMOTERS_ADDED_VILL: 0,
    TOTAL_PROMOTERS_NOT_ADDED_VILL: 0,
  };

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private villageMeetingsAPI: VillageMeetingService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router
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
    try {debugger;
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        mentorId: this.phaseid,
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.MentorLevelReport(req);
      if(res.result.length!=0){
      if (res.success) {
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MENTOR_NAME: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_RBK: 0,
          TOTAL_VILLAGES: 0,
          SCHEDULE_MEETINGS: 0,
          NOT_SCHEDULE_MEETING: 0,
          NO_OF_METG_CONDUCTED_IN_VILL: 0,
          MEETING_MINUTES_SUBMITTED: 0,
          MEETING_NOT_MINUTES_SUBMITTED: 0,
          FUNCTIONARIES_UPDATED: 0,
          FUNCTIONARIES_NOT_UPDATED: 0,
          TOTAL_NO_PARTICIPANTS: 0,
          OWNER_OF_ANIMAL: 0,
          CHEYUTHA_NO_BEN: 0,
          TOTAL_SECRETARY: 0,
          TOTAL_ASSI_SECRETARY: 0,
          TOTAL_BULDING_INSPS_VILL: 0,
          TOTAL_BULDING_NOT_INSPS_VILL: 0,
          TOTAL_CALIB_NOT_DONE_VILLAGES: 0,
          TOTAL_CALIB_DONE_VILLAGES: 0,
          TOTAL_PROMOTERS_ADDED_VILL: 0,
          TOTAL_PROMOTERS_NOT_ADDED_VILL: 0,
        };

        this.excelData = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.mentorLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.mentorLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SCHEDULE_MEETINGS += parseInt(
            this.mentorLevelDetails[i].SCHEDULE_MEETINGS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_SCHEDULE_MEETING += parseInt(
            this.mentorLevelDetails[i].NOT_SCHEDULE_MEETING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_METG_CONDUCTED_IN_VILL += parseInt(
            this.mentorLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_MINUTES_SUBMITTED += parseInt(
            this.mentorLevelDetails[i].MEETING_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_NOT_MINUTES_SUBMITTED += parseInt(
            this.mentorLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FUNCTIONARIES_UPDATED += parseInt(
            this.mentorLevelDetails[i].FUNCTIONARIES_UPDATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FUNCTIONARIES_NOT_UPDATED += parseInt(
            this.mentorLevelDetails[i].FUNCTIONARIES_NOT_UPDATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NO_PARTICIPANTS += parseInt(
            this.mentorLevelDetails[i].TOTAL_NO_PARTICIPANTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OWNER_OF_ANIMAL += parseInt(
            this.mentorLevelDetails[i].OWNER_OF_ANIMAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.CHEYUTHA_NO_BEN += parseInt(
            this.mentorLevelDetails[i].CHEYUTHA_NO_BEN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SECRETARY += parseInt(
            this.mentorLevelDetails[i].TOTAL_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ASSI_SECRETARY += parseInt(
            this.mentorLevelDetails[i].TOTAL_ASSI_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BULDING_INSPS_VILL += parseInt(
            this.mentorLevelDetails[i].TOTAL_BULDING_INSPS_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BULDING_NOT_INSPS_VILL += parseInt(
            this.mentorLevelDetails[i].TOTAL_BULDING_NOT_INSPS_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_NOT_DONE_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_CALIB_NOT_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_DONE_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_ADDED_VILL += parseInt(
            this.mentorLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_NOT_ADDED_VILL += parseInt(
            this.mentorLevelDetails[i].TOTAL_PROMOTERS_NOT_ADDED_VILL
          );

          let singleRow = {
            S_NO: i + 1,
            MENTOR: this.mentorLevelDetails[i].MENTOR_NAME,
            ROUTE: this.mentorLevelDetails[i].TOTAL_ROUTES,
            RBKs: this.mentorLevelDetails[i].TOTAL_RBK,
            VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            No_of_Villages_Scheduled_Meetings: this.mentorLevelDetails[i].SCHEDULE_MEETINGS,
            No_of_Villages_Not_Scheduled_Meetings:this.mentorLevelDetails[i].NOT_SCHEDULE_MEETING,
            NO_OF_Meetings_scheduled: this.mentorLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL,
           
            MEETING_MINUTES_SUBMITTED:this.mentorLevelDetails[i].MEETING_MINUTES_SUBMITTED,
            MEETING_NOT_MINUTES_SUBMITTED:this.mentorLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED,
            No_of_FUNCTIONARIES_UPDATED:this.mentorLevelDetails[i].FUNCTIONARIES_UPDATED,
            No_of_FUNCTIONARIES_NOT_UPDATED:this.mentorLevelDetails[i].FUNCTIONARIES_NOT_UPDATED,
            PARTICIPANTS:this.mentorLevelDetails[i].TOTAL_NO_PARTICIPANTS,
            No_of_Animal_Owners: this.mentorLevelDetails[i].OWNER_OF_ANIMAL,
            No_of_Cheyutha_Beneficiaries: this.mentorLevelDetails[i].CHEYUTHA_NO_BEN,
            Secretaries_Submitted: this.mentorLevelDetails[i].TOTAL_SECRETARY,
            Assistant_Secretaries_Submitted: this.mentorLevelDetails[i].TOTAL_ASSI_SECRETARY,
            No_of_Buildings_Inspected:this.mentorLevelDetails[i].TOTAL_BULDING_INSPS_VILL,
            No_of_Buildings_Not_Inspected:this.mentorLevelDetails[i].TOTAL_BULDING_NOT_INSPS_VILL,
           
            Calibration_Not_Done_Villages:this.mentorLevelDetails[i].TOTAL_CALIB_NOT_DONE_VILLAGES,
            Calibration_Done_Villages:this.mentorLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES,
          
            Noof_Promoters_Added_Villages: this.mentorLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL,
            Noof_Promoters_Not_Added_Villages:this.mentorLevelDetails[i].TOTAL_PROMOTERS_NOT_ADDED_VILL,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.logger.log(this.excelData);
      } else {
        this.toast.info(res.message);
      }
    }
    else{
      this.mentorLevelDetails = [];
      this.excelData = [];
      this.spinner.hide();
      this.toast.info("No Data Available to Show !!!")
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
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnLoadReport(): void {
    alert('Hello');
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'village Meeting Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.villageMeetingsAPI.mentorLevelVillageMeetingPDFReport(req);
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
