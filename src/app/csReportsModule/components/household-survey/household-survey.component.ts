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
import { CsReportsService } from '../../services/cs-reports.service';

@Component({
  selector: 'app-household-survey',
  templateUrl: './household-survey.component.html',
  styleUrls: ['./household-survey.component.css'],
})
export class HouseholdSurveyComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  householdSurveyDetails = [];

  reportTotals = {
    S_NO: '-',
    TXN_YEAR: '-',
    MONTH_NAME: 'TOTAL',
    MANDALS: 0,
    RBKS: 0,
    VILLAGES: 0,
    TOTAL_VV: 0,
    TOTAL_HH: 0,
    DEAD: 0,
    MIGRATED: 0,
    TOTAL_SURVEYED: 0,
    PENDING: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private csAPI: CsReportsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtName = this.session.districtName;
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        TXN_YEAR: '-',
        MONTH_NAME: 'TOTAL',
        MANDALS: 0,
        RBKS: 0,
        VILLAGES: 0,
        TOTAL_VV: 0,
        TOTAL_HH: 0,
        DEAD: 0,
        MIGRATED: 0,
        TOTAL_SURVEYED: 0,
        PENDING: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '8',
      };
      this.householdSurveyDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.householdSurveyDetails = res.result;
        for (let i = 0; i < this.householdSurveyDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.MANDALS += parseInt(
            this.householdSurveyDetails[i].MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.RBKS += parseInt(
            this.householdSurveyDetails[i].RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.VILLAGES += parseInt(
            this.householdSurveyDetails[i].VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.householdSurveyDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.householdSurveyDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.DEAD += parseInt(
            this.householdSurveyDetails[i].DEAD
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MIGRATED += parseInt(
            this.householdSurveyDetails[i].MIGRATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SURVEYED += parseInt(
            this.householdSurveyDetails[i].TOTAL_SURVEYED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING += parseInt(
            this.householdSurveyDetails[i].PENDING
          );
          let singleRow = {
            S_NO: i + 1,
            TXN_YEAR: this.householdSurveyDetails[i].TXN_YEAR,
            MONTH_NAME: this.householdSurveyDetails[i].MONTH_NAME,
            MANDALS: this.householdSurveyDetails[i].MANDALS,
            RBKS: this.householdSurveyDetails[i].RBKS,
            VILLAGES: this.householdSurveyDetails[i].VILLAGES,
            TOTAL_VV: this.householdSurveyDetails[i].TOTAL_VV,
            TOTAL_HH: this.householdSurveyDetails[i].TOTAL_HH,
            DEAD: this.householdSurveyDetails[i].DEAD,
            MIGRATED: this.householdSurveyDetails[i].MIGRATED,
            TOTAL_SURVEYED: this.householdSurveyDetails[i].TOTAL_SURVEYED,
            PENDING: this.householdSurveyDetails[i].PENDING,
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
      'HouseHold Survey Report',
      true
    );
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '8',
    };
    const fileName = 'householdSurveyReport';
    let basePDF = '';
    this.spinner.show();
    this.csAPI
      .csDistrictReports(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
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
