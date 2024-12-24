import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LoginReportService } from '../../services/login-report.service';

@Component({
  selector: 'app-login-report-state',
  templateUrl: './login-report-state.component.html',
  styleUrls: ['./login-report-state.component.css'],
})
export class LoginReportStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  stateLevelDetails = [];
  date: any;
  reportdata = {
    date: null,
  };

  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private userLogin: LoginReportService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.date = this.session.getTodayDateString();
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportdata.date = this.date;
      this.spinner.show();
      const res = await this.userLogin.stateLevelReport(this.reportdata);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_LOGINS: this.stateLevelDetails[i].TOTAL_LOGINS,
            DA_LOGIN: this.stateLevelDetails[i].DA_LOGIN,
            DA_NOT_LOGIN: this.stateLevelDetails[i].DA_NOT_LOGIN,
            VF_LOGIN: this.stateLevelDetails[i].VF_LOGIN,
            VF_NOT_LOGIN: this.stateLevelDetails[i].VF_NOT_LOGIN,
            WEDS_LOGIN: this.stateLevelDetails[i].WEDS_LOGIN,
            WEDS_NOT_LOGIN: this.stateLevelDetails[i].WEDS_NOT_LOGIN,
            MENTOR_LOGIN: this.stateLevelDetails[i].MENTOR_LOGIN,
            MENTOR_NOT_LOGIN: this.stateLevelDetails[i].MENTOR_NOT_LOGIN,
            TECHINISIAN_LOGIN: this.stateLevelDetails[i].TECHINISIAN_LOGIN,
            TECHINISIAN_NOT_LOGIN: this.stateLevelDetails[i]
              .TECHINISIAN_NOT_LOGIN,
            BANKERS_DISTRICT_LOGIN: this.stateLevelDetails[i]
              .BANKERS_DISTRICT_LOGIN,
            BANKERS_DISTRICT_NOT_LOGIN: this.stateLevelDetails[i]
              .BANKERS_DISTRICT_NOT_LOGIN,
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

  btnLoadReport(): void {
    if (
      this.reportdata.date === undefined &&
      this.reportdata.date === '' &&
      this.reportdata.date === null
    ) {
      this.toast.warning('Please Select Date');
      return;
    }
    this.loadReport();
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'User Logins State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'stateLevelUserLoginsReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.userLogin.stateLevelUserLoginPDFReport(
        this.reportdata
      );
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
