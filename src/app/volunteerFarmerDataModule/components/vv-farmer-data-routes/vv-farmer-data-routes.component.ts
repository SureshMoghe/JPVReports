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
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-vv-farmer-data-routes',
  templateUrl: './vv-farmer-data-routes.component.html',
  styleUrls: ['./vv-farmer-data-routes.component.css'], 
})
export class VvFarmerDataRoutesComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() route: any;
  @Input() routeName: any;

  @Input() phaseid: any;
  @Input() phasename: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVolunteerChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onLoggedInChange = new EventEmitter<string>();
  routeLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_VILLAGE: 0,
    TOTAL_VOLUNTEERS: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_FARMERS_WITH_OUT_AINM: 0,
    TOTAL_FARMERS_WITH_AINM: 0,
    TOTAL_MIGRATED:0,
    TOTAL_DEAD:0,
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
    private session: SessionService,
    private toast: ToasterService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
      return;
    }
    if (this.route === undefined && this.route === '' && this.route === null) {
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
        TOTAL_MIGRATED:0,
    TOTAL_DEAD:0,
        TOTAL_APPROVED_FMR: 0,
        TOTAL_APPROVED_FMR_PERCNT: 0,
        TOTAL_ANIMALS: 0,
        AH_DEPT_VV_ANM_YES: 0,
        AH_DEPT_YES_VV_ANM_NO: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        route: this.route,
        fromDate: this.fromDate,
        toDate: this.toDate,
        uidNumber:this.phaseid,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataRouteReport(req);
      if (res.success) {
        this.excelData = [];
        this.routeLevelDetails = res.result;
        for (let i = 0; i < this.routeLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGE += parseInt(
            this.routeLevelDetails[i].TOTAL_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VOLUNTEERS += parseInt(
            this.routeLevelDetails[i].TOTAL_VOLUNTEERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.routeLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
            this.routeLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
            this.routeLevelDetails[i].TOTAL_FARMERS_WITH_AINM
          );

          
    // tslint:disable-next-line: radix
    this.reportTotals.TOTAL_MIGRATED += parseInt(
      this.routeLevelDetails[i].MIGRATED
    );
    // tslint:disable-next-line: radix
    this.reportTotals.TOTAL_DEAD += parseInt(
      this.routeLevelDetails[i].DEAD
    );



          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
            this.routeLevelDetails[i].TOTAL_APPROVED_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
            this.routeLevelDetails[i].TOTAL_APPROVED_FMR_PERCNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.routeLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
            this.routeLevelDetails[i].AH_DEPT_VV_ANM_YES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
            this.routeLevelDetails[i].AH_DEPT_YES_VV_ANM_NO
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.routeLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGE: this.routeLevelDetails[i].TOTAL_VILLAGE,
            TOTAL_VOLUNTEERS: this.routeLevelDetails[i].TOTAL_VOLUNTEERS,
            TOTAL_VV_LOGEDIN: this.routeLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_FARMERS_WITH_OUT_AINM: this.routeLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM,
            TOTAL_FARMERS_WITH_AINM: this.routeLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM,
            
              MIGRATED:   this.routeLevelDetails[i].MIGRATED,
              DEAD:   this.routeLevelDetails[i].DEAD,

            TOTAL_APPROVED_FMR: this.routeLevelDetails[i].TOTAL_APPROVED_FMR,
            TOTAL_APPROVED_FMR_PERCNT: this.routeLevelDetails[i]
              .TOTAL_APPROVED_FMR_PERCNT,
            TOTAL_ANIMALS: this.routeLevelDetails[i].TOTAL_ANIMALS,
            AH_DEPT_VV_ANM_YES: this.routeLevelDetails[i].AH_DEPT_VV_ANM_YES,
            AH_DEPT_YES_VV_ANM_NO: this.routeLevelDetails[i]
              .AH_DEPT_YES_VV_ANM_NO,
          };
          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
          this.routeLevelDetails.length;
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
      'Volunteer Farmer Data Route Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        route: this.route,
        fromDate: this.fromDate,
        toDate: this.toDate,
        uidNumber:this.phaseid,columnValue:this.phasename
      };
      const fileName = 'routesLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataRoutePDFReport(req);
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
      phaseid:this.phaseid,
      phasename:this.phasename,
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
      phaseid:this.phaseid,
      phasename:this.phasename,
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
      phaseid:this.phaseid,
      phasename:this.phasename,
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