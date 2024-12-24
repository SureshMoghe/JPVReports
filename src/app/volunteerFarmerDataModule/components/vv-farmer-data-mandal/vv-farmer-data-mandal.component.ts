import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnChanges,
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
  selector: 'app-vv-farmer-data-mandal',
  templateUrl: './vv-farmer-data-mandal.component.html',
  styleUrls: ['./vv-farmer-data-mandal.component.css'],
})
export class VvFarmerDataMandalComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges { 
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  
  @Input() phaseid: any;
  @Input() phasename: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRouteChange = new EventEmitter<string>();
  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    ROUTE_NAME: 'TOTAL',
    TOTAL_RBK: 0,
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
    private toast: ToasterService,
    private session: SessionService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.mandalId === null &&
      this.mandalId === '' &&
      this.mandalId === undefined
    ) {
      return;
    }
    this.loadReport();
  }
  ngOnChanges(): void {
    // if (
    //   this.districtId !== null &&
    //   this.districtId !== '' &&
    //   this.districtId !== null
    // ) {
    //   this.loadReport();
    // }
    // if (
    //   this.mandalId !== null &&
    //   this.mandalId !== '' &&
    //   this.mandalId !== null
    // ) {
    //   this.loadReport();
    //   }
  }
  async loadReport(): Promise<void> {
    try {debugger;
      this.reportTotals = {
        S_NO: '-',
        ROUTE_NAME: 'TOTAL',
        TOTAL_RBK: 0,
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
        fromDate: this.fromDate,
        toDate: this.toDate, 
        uidNumber:this.phaseid,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataMandalReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.mandalLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGE += parseInt(
            this.mandalLevelDetails[i].TOTAL_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VOLUNTEERS += parseInt(
            this.mandalLevelDetails[i].TOTAL_VOLUNTEERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.mandalLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
            this.mandalLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
            this.mandalLevelDetails[i].TOTAL_FARMERS_WITH_AINM
          );

         
     // tslint:disable-next-line: radix
     this.reportTotals.TOTAL_MIGRATED += parseInt(
      this.mandalLevelDetails[i].MIGRATED
    );
     // tslint:disable-next-line: radix
     this.reportTotals.TOTAL_DEAD += parseInt(
      this.mandalLevelDetails[i].DEAD
    );


          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
            this.mandalLevelDetails[i].TOTAL_APPROVED_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
            this.mandalLevelDetails[i].TOTAL_APPROVED_FMR_PERCNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.mandalLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
            this.mandalLevelDetails[i].AH_DEPT_VV_ANM_YES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
            this.mandalLevelDetails[i].AH_DEPT_YES_VV_ANM_NO
          );
          const singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.mandalLevelDetails[i].ROUTE_NAME,
            TOTAL_RBK: this.mandalLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGE: this.mandalLevelDetails[i].TOTAL_VILLAGE,
            TOTAL_VOLUNTEERS: this.mandalLevelDetails[i].TOTAL_VOLUNTEERS,
            TOTAL_VV_LOGEDIN: this.mandalLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_FARMERS_WITH_OUT_AINM: this.mandalLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM,
            TOTAL_FARMERS_WITH_AINM: this.mandalLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM,
              MIGRATED:   this.mandalLevelDetails[i].MIGRATED,
              DEAD:   this.mandalLevelDetails[i].DEAD,


            TOTAL_APPROVED_FMR: this.mandalLevelDetails[i].TOTAL_APPROVED_FMR,
            TOTAL_APPROVED_FMR_PERCNT: this.mandalLevelDetails[i]
              .TOTAL_APPROVED_FMR_PERCNT,
            TOTAL_ANIMALS: this.mandalLevelDetails[i].TOTAL_ANIMALS,
            AH_DEPT_VV_ANM_YES: this.mandalLevelDetails[i].AH_DEPT_VV_ANM_YES,
            AH_DEPT_YES_VV_ANM_NO: this.mandalLevelDetails[i]
              .AH_DEPT_YES_VV_ANM_NO,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
          this.mandalLevelDetails.length;
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
      'Volunteer Farmer Data Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        uidNumber:this.phaseid,   
        columnValue:this.phasename     
      };
      const fileName = 'mandalLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataMandalPDFReport(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRouteChange.emit(encryptedString);
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
