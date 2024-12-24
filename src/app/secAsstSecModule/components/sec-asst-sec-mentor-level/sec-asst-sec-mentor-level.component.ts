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
import { SecAsstSecModuleService } from '../../services/sec-asst-sec-module.service';

@Component({
  selector: 'app-sec-asst-sec-mentor-level',
  templateUrl: './sec-asst-sec-mentor-level.component.html',
  styleUrls: ['./sec-asst-sec-mentor-level.component.css'],
})
export class SecAsstSecMentorLevelComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetailsChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAsstSecChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MENTOR_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_SECRETARY: 0,
    TOTAL_ASSI_SECRETARY: 0,
    NOT_ADDED_SECRETARY: 0,
    NOT_ADDED_ASSI_SECRETARY: 0,
  };
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private secAsstSecAPI: SecAsstSecModuleService,
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
    try {
      this.mentorLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.secAsstSecAPI.mentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MENTOR_NAME: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_RBK: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_SECRETARY: 0,
          TOTAL_ASSI_SECRETARY: 0,
          NOT_ADDED_SECRETARY: 0,
          NOT_ADDED_ASSI_SECRETARY: 0,
        };
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
          this.reportTotals.TOTAL_SECRETARY += parseInt(
            this.mentorLevelDetails[i].TOTAL_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ASSI_SECRETARY += parseInt(
            this.mentorLevelDetails[i].TOTAL_ASSI_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_ADDED_SECRETARY += parseInt(
            this.mentorLevelDetails[i].NOT_ADDED_SECRETARY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_ADDED_ASSI_SECRETARY += parseInt(
            this.mentorLevelDetails[i].NOT_ADDED_ASSI_SECRETARY
          );
          let singleRow = {
            S_NO: i + 1,
            MENTOR_NAME: this.mentorLevelDetails[i].MENTOR_NAME,
            TOTAL_ROUTES: this.mentorLevelDetails[i].TOTAL_ROUTES,
            TOTAL_RBK: this.mentorLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_SECRETARY: this.mentorLevelDetails[i].TOTAL_SECRETARY,
            TOTAL_ASSI_SECRETARY: this.mentorLevelDetails[i]
              .TOTAL_ASSI_SECRETARY,
            NOT_ADDED_SECRETARY: this.mentorLevelDetails[i].NOT_ADDED_SECRETARY,
            NOT_ADDED_ASSI_SECRETARY: this.mentorLevelDetails[i]
              .NOT_ADDED_ASSI_SECRETARY,
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
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnAsstSecDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAsstSecChange.emit(encryptedString);
  }
  btnAsstSecNotAddedDetails(obj, id): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      subReportType: id,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDetailsChange.emit(encryptedString);
  }
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Secretary/Assistant Secretary Mentor Level Report',
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
      const fileName = 'mentorLevelSecAsstSecReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.secAsstSecAPI.mentorLevelSecAsstSecPDFReport(req);
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
