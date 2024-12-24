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
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VolunteerFarmerDataService } from '../../services/volunteer-farmer-data.service';

@Component({
  selector: 'app-vv-farmer-data-mentor',
  templateUrl: './vv-farmer-data-mentor.component.html',
  styleUrls: ['./vv-farmer-data-mentor.component.css'],
})
export class VvFarmerDataMentorComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() uniqueId: any;
  @Input() route: any;
  @Input() routeName: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVolunteerChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onLoggedInChange = new EventEmitter<string>();
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_VILLAGE: 0,
    TOTAL_VOLUNTEERS: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_FARMERS_WITH_OUT_AINM: 0,
    TOTAL_FARMERS_WITH_AINM: 0,
    TOTAL_APPROVED_FMR: 0,
    TOTAL_APPROVED_FMR_PERCNT: 0,
    TOTAL_ANIMALS: 0,
    AH_DEPT_VV_ANM_YES: 0,
    AH_DEPT_YES_VV_ANM_NO: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (
      this.uniqueId === undefined &&
      this.uniqueId === '' &&
      this.uniqueId === null
    ) {
      return;
    }

    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        TOTAL_VILLAGE: 0,
        TOTAL_VOLUNTEERS: 0,
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_FARMERS_WITH_OUT_AINM: 0,
        TOTAL_FARMERS_WITH_AINM: 0,
        TOTAL_APPROVED_FMR: 0,
        TOTAL_APPROVED_FMR_PERCNT: 0,
        TOTAL_ANIMALS: 0,
        AH_DEPT_VV_ANM_YES: 0,
        AH_DEPT_YES_VV_ANM_NO: 0,
      };
      const req = {
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataMentorReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGE += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VOLUNTEERS += parseInt(
            this.mentorLevelDetails[i].TOTAL_VOLUNTEERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.mentorLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
            this.mentorLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
            this.mentorLevelDetails[i].TOTAL_FARMERS_WITH_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
            this.mentorLevelDetails[i].TOTAL_APPROVED_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
            this.mentorLevelDetails[i].TOTAL_APPROVED_FMR_PERCNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.mentorLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
            this.mentorLevelDetails[i].AH_DEPT_VV_ANM_YES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
            this.mentorLevelDetails[i].AH_DEPT_YES_VV_ANM_NO
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGE: this.mentorLevelDetails[i].TOTAL_VILLAGE,
            TOTAL_VOLUNTEERS: this.mentorLevelDetails[i].TOTAL_VOLUNTEERS,
            TOTAL_VV_LOGEDIN: this.mentorLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_FARMERS_WITH_OUT_AINM: this.mentorLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM,
            TOTAL_FARMERS_WITH_AINM: this.mentorLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM,
            TOTAL_APPROVED_FMR: this.mentorLevelDetails[i].TOTAL_APPROVED_FMR,
            TOTAL_APPROVED_FMR_PERCNT: this.mentorLevelDetails[i]
              .TOTAL_APPROVED_FMR_PERCNT,
            TOTAL_ANIMALS: this.mentorLevelDetails[i].TOTAL_ANIMALS,
            AH_DEPT_VV_ANM_YES: this.mentorLevelDetails[i].AH_DEPT_VV_ANM_YES,
            AH_DEPT_YES_VV_ANM_NO: this.mentorLevelDetails[i]
              .AH_DEPT_YES_VV_ANM_NO,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
          this.mentorLevelDetails.length;
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT = parseFloat(
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT.toFixed(2)
        );
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Volunteer Farmer Data Mentor Level Report',
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
      const fileName = 'mentorLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataMentorPDFReport(req);
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
      route: obj.ROUTE_NOS,
      routeName: obj.ROUTE_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }
  btnGetVolunteers(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      route: obj.ROUTE_NOS,
      routeName: obj.ROUTE_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVolunteerChange.emit(encryptedString);
  }

  btnGetLoggedIn(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      route: obj.ROUTE_NOS,
      routeName: obj.ROUTE_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onLoggedInChange.emit(encryptedString);
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
