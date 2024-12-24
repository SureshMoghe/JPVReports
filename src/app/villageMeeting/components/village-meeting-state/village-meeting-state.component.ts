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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-state',
  templateUrl: './village-meeting-state.component.html',
  styleUrls: ['./village-meeting-state.component.css'],
})
export class VillageMeetingStateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;    

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {    
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_MENTOR: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_LOGIN: 0,
    NOT_LOGIN: 0,
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
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_ROUTES: 0,
        TOTAL_MENTOR: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_LOGIN: 0,
        NOT_LOGIN: 0,
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

      debugger;
      const req = { 
        fromDate: this.fromDate,
        toDate: this.toDate,
        mentorId:this.phaseid
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.stateLevelScheduleReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MENTOR += parseInt(
            this.stateLevelDetails[i].TOTAL_MENTOR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LOGIN += parseInt(
            this.stateLevelDetails[i].TOTAL_LOGIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_LOGIN += parseInt(
            this.stateLevelDetails[i].NOT_LOGIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SCHEDULE_MEETINGS += parseInt(
            this.stateLevelDetails[i].SCHEDULE_MEETINGS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_SCHEDULE_MEETING += parseInt(
            this.stateLevelDetails[i].NOT_SCHEDULE_MEETING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_METG_CONDUCTED_IN_VILL += parseInt(
            this.stateLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_MINUTES_SUBMITTED += parseInt(
            this.stateLevelDetails[i].MEETING_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_NOT_MINUTES_SUBMITTED += parseInt(
            this.stateLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FUNCTIONARIES_UPDATED += parseInt(
            this.stateLevelDetails[i].FUNCTIONARIES_UPDATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FUNCTIONARIES_NOT_UPDATED += parseInt(
            this.stateLevelDetails[i].FUNCTIONARIES_NOT_UPDATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NO_PARTICIPANTS += parseInt(
            this.stateLevelDetails[i].TOTAL_NO_PARTICIPANTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OWNER_OF_ANIMAL += parseInt(
            this.stateLevelDetails[i].OWNER_OF_ANIMAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.CHEYUTHA_NO_BEN += parseInt(
            this.stateLevelDetails[i].CHEYUTHA_NO_BEN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SECRETARY += parseInt(
            this.stateLevelDetails[i].TOTAL_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ASSI_SECRETARY += parseInt(
            this.stateLevelDetails[i].TOTAL_ASSI_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BULDING_INSPS_VILL += parseInt(
            this.stateLevelDetails[i].TOTAL_BULDING_INSPS_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BULDING_NOT_INSPS_VILL += parseInt(
            this.stateLevelDetails[i].TOTAL_BULDING_NOT_INSPS_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_NOT_DONE_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_CALIB_NOT_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_DONE_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_ADDED_VILL += parseInt(
            this.stateLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_NOT_ADDED_VILL += parseInt(
            this.stateLevelDetails[i].TOTAL_PROMOTERS_NOT_ADDED_VILL
          );

          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_MENTOR: this.stateLevelDetails[i].TOTAL_MENTOR,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_LOGIN: this.stateLevelDetails[i].TOTAL_LOGIN,
            NOT_LOGIN: this.stateLevelDetails[i].NOT_LOGIN,
            SCHEDULE_MEETINGS: this.stateLevelDetails[i].SCHEDULE_MEETINGS,
            NOT_SCHEDULE_MEETING: this.stateLevelDetails[i].NOT_SCHEDULE_MEETING,
            NO_OF_METG_CONDUCTED_IN_VILL:
              this.stateLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL,
            MEETING_MINUTES_SUBMITTED:
              this.stateLevelDetails[i].MEETING_MINUTES_SUBMITTED,
            MEETING_NOT_MINUTES_SUBMITTED:
              this.stateLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED,
            FUNCTIONARIES_UPDATED:
              this.stateLevelDetails[i].FUNCTIONARIES_UPDATED,
            FUNCTIONARIES_NOT_UPDATED:
              this.stateLevelDetails[i].FUNCTIONARIES_NOT_UPDATED,
            TOTAL_NO_PARTICIPANTS:
              this.stateLevelDetails[i].TOTAL_NO_PARTICIPANTS,
            OWNER_OF_ANIMAL: this.stateLevelDetails[i].OWNER_OF_ANIMAL,
            CHEYUTHA_NO_BEN: this.stateLevelDetails[i].CHEYUTHA_NO_BEN,
            TOTAL_SECRETARY: this.stateLevelDetails[i].TOTAL_SECRETARY,
            TOTAL_ASSI_SECRETARY:
              this.stateLevelDetails[i].TOTAL_ASSI_SECRETARY,
            TOTAL_BULDING_INSPS_VILL:
              this.stateLevelDetails[i].TOTAL_BULDING_INSPS_VILL,
            TOTAL_BULDING_NOT_INSPS_VILL:
              this.stateLevelDetails[i].TOTAL_BULDING_NOT_INSPS_VILL,
            TOTAL_CALIB_NOT_DONE_VILLAGES:
              this.stateLevelDetails[i].TOTAL_CALIB_NOT_DONE_VILLAGES,
            TOTAL_CALIB_DONE_VILLAGES:
              this.stateLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES,
            TOTAL_PROMOTERS_ADDED_VILL:
              this.stateLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL,
            TOTAL_PROMOTERS_NOT_ADDED_VILL:
              this.stateLevelDetails[i].TOTAL_PROMOTERS_NOT_ADDED_VILL,
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
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'village Meeting State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      }; debugger;
      const fileName = 'stateLevelVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.villageMeetingsAPI.stateLevelVillageMeetingPDFReport(req);
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
