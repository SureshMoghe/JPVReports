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
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-village',
  templateUrl: './village-meeting-village.component.html',
  styleUrls: ['./village-meeting-village.component.css'],
})
export class VillageMeetingVillageComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAttendanceClickChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFunctionariesClickChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSecAssSecClickChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;

  villageLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    VILLAGE_NAME: '-',
    AMC_ID: 'TOTAL',
    ROUTE_NAME: '-',
    SCHEDULE_MEETINGS: 0,
    NO_OF_METG_CONDUCTED_IN_VILL: 0,
    MEETING_MINUTES_SUBMITTED: 0,
    MEETING_NOT_MINUTES_SUBMITTED: 0,
    FUNCTIONARIES_UPDATED: 0,
    TOTAL_NO_PARTICIPANTS: 0,
    OWNER_OF_ANIMAL: 0,
    CHEYUTHA_NO_BEN: 0,
    TOTAL_SECRETARY: 0,
    TOTAL_ASSI_SECRETARY: 0,
    TOTAL_BULDING_INSPS_VILL: 0,
    TOTAL_CALIB_DONE_VILLAGES: 0,
    TOTAL_PROMOTERS_ADDED_VILL: 0,
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params.request));
  }

  ngOnInit(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mentorId === undefined &&
    //   this.mentorId === '' &&
    //   this.mentorId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.rbkId === undefined &&
    //   this.rbkId === '' &&
    //   this.rbkId === null
    // ) {
    //   return;
    // }
    // this.loadReport();
  }
  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        VILLAGE_NAME: '-',
        AMC_ID: 'TOTAL',
        ROUTE_NAME: '-',
        SCHEDULE_MEETINGS: 0,
        NO_OF_METG_CONDUCTED_IN_VILL: 0,
        MEETING_MINUTES_SUBMITTED: 0,
        MEETING_NOT_MINUTES_SUBMITTED: 0,
        FUNCTIONARIES_UPDATED: 0,
        TOTAL_NO_PARTICIPANTS: 0,
        OWNER_OF_ANIMAL: 0,
        CHEYUTHA_NO_BEN: 0,
        TOTAL_SECRETARY: 0,
        TOTAL_ASSI_SECRETARY: 0,
        TOTAL_BULDING_INSPS_VILL: 0,
        TOTAL_CALIB_DONE_VILLAGES: 0,
        TOTAL_PROMOTERS_ADDED_VILL: 0,
      };
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid

      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.villageLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SCHEDULE_MEETINGS += parseInt(
            this.villageLevelDetails[i].SCHEDULE_MEETINGS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_METG_CONDUCTED_IN_VILL += parseInt(
            this.villageLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_MINUTES_SUBMITTED += parseInt(
            this.villageLevelDetails[i].MEETING_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MEETING_NOT_MINUTES_SUBMITTED += parseInt(
            this.villageLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FUNCTIONARIES_UPDATED += parseInt(
            this.villageLevelDetails[i].FUNCTIONARIES_UPDATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NO_PARTICIPANTS += parseInt(
            this.villageLevelDetails[i].TOTAL_NO_PARTICIPANTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OWNER_OF_ANIMAL += parseInt(
            this.villageLevelDetails[i].OWNER_OF_ANIMAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.CHEYUTHA_NO_BEN += parseInt(
            this.villageLevelDetails[i].CHEYUTHA_NO_BEN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SECRETARY += parseInt(
            this.villageLevelDetails[i].TOTAL_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ASSI_SECRETARY += parseInt(
            this.villageLevelDetails[i].TOTAL_ASSI_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BULDING_INSPS_VILL += parseInt(
            this.villageLevelDetails[i].TOTAL_BULDING_INSPS_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_DONE_VILLAGES += parseInt(
            this.villageLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PROMOTERS_ADDED_VILL += parseInt(
            this.villageLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL
          );

          const singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.villageLevelDetails[i].VILLAGE_NAME,
            AMC_ID: this.villageLevelDetails[i].AMC_ID,
            ROUTE_NAME: this.villageLevelDetails[i].ROUTE_NAME,
            SCHEDULE_MEETINGS: this.villageLevelDetails[i].SCHEDULE_MEETINGS,
            NO_OF_METG_CONDUCTED_IN_VILL:
              this.villageLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL,
            MEETING_MINUTES_SUBMITTED:
              this.villageLevelDetails[i].MEETING_MINUTES_SUBMITTED,
            MEETING_NOT_MINUTES_SUBMITTED:
              this.villageLevelDetails[i].MEETING_NOT_MINUTES_SUBMITTED,
            FUNCTIONARIES_UPDATED:
              this.villageLevelDetails[i].FUNCTIONARIES_UPDATED,
            TOTAL_NO_PARTICIPANTS:
              this.villageLevelDetails[i].TOTAL_NO_PARTICIPANTS,
            OWNER_OF_ANIMAL: this.villageLevelDetails[i].OWNER_OF_ANIMAL,
            CHEYUTHA_NO_BEN: this.villageLevelDetails[i].CHEYUTHA_NO_BEN,
            TOTAL_SECRETARY: this.villageLevelDetails[i].TOTAL_SECRETARY,
            TOTAL_ASSI_SECRETARY:
              this.villageLevelDetails[i].TOTAL_ASSI_SECRETARY,
            TOTAL_BULDING_INSPS_VILL:
              this.villageLevelDetails[i].TOTAL_BULDING_INSPS_VILL,
            TOTAL_CALIB_DONE_VILLAGES:
              this.villageLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES,
            TOTAL_PROMOTERS_ADDED_VILL:
              this.villageLevelDetails[i].TOTAL_PROMOTERS_ADDED_VILL,
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

  btnGetAttendanceDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      villageId: obj.VILLAGECODE,
      villageName: obj.VILLAGE_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAttendanceClickChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'village Meeting Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.villageMeetingsAPI.villageLevelVillageMeetingPDFReport(req);
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

  btnGetFunctionaryDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      villageId: obj.VILLAGECODE,
      villageName: obj.VILLAGE_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onFunctionariesClickChange.emit(encryptedString);
  }

  btnGetSecAssSecDetails(obj, type: string): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      villageId: obj.VILLAGECODE,
      villageName: obj.VILLAGE_NAME,
      desigId: type,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSecAssSecClickChange.emit(encryptedString);
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
