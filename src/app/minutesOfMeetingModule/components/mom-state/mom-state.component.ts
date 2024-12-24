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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { MinutesOfMeetingService } from '../../services/minutes-of-meeting.service';

@Component({
  selector: 'app-mom-state',
  templateUrl: './mom-state.component.html',
  styleUrls: ['./mom-state.component.css'],
})
export class MomStateComponent implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  @Input() fromDate: any;
  @Input() toDate: any;
  stateLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_RBK: 0,
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
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        NO_OF_METG_CONDUCTED_IN_VILL: 0,
        MINUTES_OF_MEETING_SUBMITTED: 0,
        MINUTES_OF_MEETING_NOT_SUBMIT: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.stateLevelDetails = [];
      this.spinner.show();
      const res = await this.momApi.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDALS
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
          this.reportTotals.NO_OF_METG_CONDUCTED_IN_VILL += parseInt(
            this.stateLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MINUTES_OF_MEETING_SUBMITTED += parseInt(
            this.stateLevelDetails[i].MINUTES_OF_MEETING_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MINUTES_OF_MEETING_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].MINUTES_OF_MEETING_NOT_SUBMIT
          );

          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            NO_OF_METG_CONDUCTED_IN_VILL:
              this.stateLevelDetails[i].NO_OF_METG_CONDUCTED_IN_VILL,
            MINUTES_OF_MEETING_SUBMITTED:
              this.stateLevelDetails[i].MINUTES_OF_MEETING_SUBMITTED,
            MINUTES_OF_MEETING_NOT_SUBMIT:
              this.stateLevelDetails[i].MINUTES_OF_MEETING_NOT_SUBMIT,
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
      'Minutes Of Meeting State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelMinutesOgMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.momApi.stateLevelReportPDF(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
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
