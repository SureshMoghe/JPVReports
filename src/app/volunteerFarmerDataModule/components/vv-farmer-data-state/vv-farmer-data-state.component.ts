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
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VolunteerFarmerDataService } from '../../services/volunteer-farmer-data.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({ 
  selector: 'app-vv-farmer-data-state',
  templateUrl: './vv-farmer-data-state.component.html',
  styleUrls: ['./vv-farmer-data-state.component.css'],
})
export class VvFarmerDataStateComponent
  implements OnInit, OnDestroy, AfterViewInit {  
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  PhaseType:any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRouteChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_ROUTE_NOS: 0,
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
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {debugger;
 
  
  if (
    this.phaseid === undefined ||
    this.phaseid === '' ||
    this.phaseid === null
  ) {

  this.phaseid='0'; this.phasename='ALL'; this.phaseid= this.phaseid;this.phasename= this.phasename;}else
{
    this.phaseid=this.phaseid;
    this.phasename=this.phasename;}
    
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {  
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_ROUTE_NOS: 0,
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
        fromDate: this.fromDate,
        toDate: this.toDate,
        uidNumber:this.phaseid,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataStateReport(req);
      if (res.success) { this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_ROUTE_NOS: 0,
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
        this.excelData = [];
        this.stateLevelDetails = res.result; this.spinner.show();
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTE_NOS += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTE_NOS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGE += parseInt(
            this.stateLevelDetails[i].TOTAL_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VOLUNTEERS += parseInt(
            this.stateLevelDetails[i].TOTAL_VOLUNTEERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.stateLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
            this.stateLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
            this.stateLevelDetails[i].TOTAL_FARMERS_WITH_AINM
          );


           // tslint:disable-next-line: radix
           this.reportTotals.TOTAL_MIGRATED += parseInt(
            this.stateLevelDetails[i].MIGRATED
          );

           // tslint:disable-next-line: radix
           this.reportTotals.TOTAL_DEAD += parseInt(
            this.stateLevelDetails[i].DEAD
          );

 

          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
            this.stateLevelDetails[i].TOTAL_APPROVED_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
            this.stateLevelDetails[i].TOTAL_APPROVED_FMR_PERCNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.stateLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
            this.stateLevelDetails[i].AH_DEPT_VV_ANM_YES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
            this.stateLevelDetails[i].AH_DEPT_YES_VV_ANM_NO
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_ROUTE_NOS: this.stateLevelDetails[i].TOTAL_ROUTE_NOS,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGE: this.stateLevelDetails[i].TOTAL_VILLAGE,
            TOTAL_VOLUNTEERS: this.stateLevelDetails[i].TOTAL_VOLUNTEERS,
            TOTAL_VV_LOGEDIN: this.stateLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_FARMERS_WITH_OUT_AINM: this.stateLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM,
            TOTAL_FARMERS_WITH_AINM: this.stateLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM,

              MIGRATED:  this.stateLevelDetails[i].MIGRATED,
              DEAD:  this.stateLevelDetails[i].DEAD,
            TOTAL_APPROVED_FMR: this.stateLevelDetails[i].TOTAL_APPROVED_FMR,
            TOTAL_APPROVED_FMR_PERCNT: this.stateLevelDetails[i]
              .TOTAL_APPROVED_FMR_PERCNT,
            TOTAL_ANIMALS: this.stateLevelDetails[i].TOTAL_ANIMALS,
            AH_DEPT_VV_ANM_YES: this.stateLevelDetails[i].AH_DEPT_VV_ANM_YES,
            AH_DEPT_YES_VV_ANM_NO: this.stateLevelDetails[i]
              .AH_DEPT_YES_VV_ANM_NO,
          };

          this.excelData.push(singleRow);
        } this.spinner.hide();
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
          this.stateLevelDetails.length;
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT = parseFloat(
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
      } else {
        this.reportTotals = {
          S_NO: '-',
          DISTRICT: 'TOTAL',
          TOTAL_MANDALS: 0,
          TOTAL_ROUTE_NOS: 0,
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
        this.toast.info(res.message);this.spinner.hide();
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
    this.spinner.show();
    this.spinner.hide();
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Volunteer Farmer Data State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try { 
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        uidNumber:this.phaseid,
        columnValue:this.phasename
      };
      const fileName = 'stateLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataStatePDFReport(req);
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

  btnGetDetails(obj): void { debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
       phaseid:  this.phaseid,
       phasename: this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnGetRoutes(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:  this.phaseid,
       phasename: this.phasename,
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
