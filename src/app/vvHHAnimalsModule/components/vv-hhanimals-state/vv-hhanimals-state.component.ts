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
import { VvHHAnimalsService } from '../../services/vv-hhanimals.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-vv-hhanimals-state', 
  templateUrl: './vv-hhanimals-state.component.html', 
  styleUrls: ['./vv-hhanimals-state.component.css'], 
})
export class VvHHAnimalsStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;//districtId:any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
   

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_CLUSTERS: 0,
    TOTAL_VV: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_HH: 0,
    TOTAL_SUYVYED_DEAD: 0,
    TOTAL_SUYVYED_MIGRATED: 0,
    TOTAL_SUR_HH: 0,
    TOTAL_FARMERS_WITH_AINM_HH: 0,
    TOTAL_ANIMALS: 0,
    TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
    TOTAL_RESURVEYED_HH:0,
    TOTAL_PENDING: 0,
    TOTAL_AH_DEPT_HH: 0,
    TOTAL_FMR_WITH_AINM_AH_HH: 0,
    TOTAL_ANIMALS_AH: 0,
    TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
   

  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VvHHAnimalsService, 
    private utils: UtilsService,
    private stateAPI: StateService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }
  cleartotals()
  {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_CLUSTERS: 0,
        TOTAL_VV: 0,
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_HH: 0,
        TOTAL_SUYVYED_DEAD: 0,
        TOTAL_SUYVYED_MIGRATED: 0,
        TOTAL_SUR_HH: 0,
        TOTAL_FARMERS_WITH_AINM_HH: 0,
        TOTAL_ANIMALS: 0,
        TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
        TOTAL_RESURVEYED_HH:0,
        TOTAL_PENDING: 0,
        TOTAL_AH_DEPT_HH: 0,
        TOTAL_FMR_WITH_AINM_AH_HH: 0,
        TOTAL_ANIMALS_AH: 0,
        TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
         
      };
    } catch (error) {
      
    }
  }

  async loadReport(): Promise<void> {
    try { this.cleartotals();
      // this.reportTotals = {
      //   S_NO: '-',
      //   DISTRICT: 'TOTAL',
      //   TOTAL_MANDALS: 0,
      //   TOTAL_RBK: 0,
      //   TOTAL_VILLAGES: 0,
      //   TOTAL_CLUSTERS: 0,
      //   TOTAL_VV: 0,
      //   TOTAL_VV_LOGEDIN: 0,
      //   TOTAL_HH: 0,
      //   TOTAL_SUYVYED_DEAD: 0,
      //   TOTAL_SUYVYED_MIGRATED: 0,
      //   TOTAL_SUR_HH: 0,
      //   TOTAL_FARMERS_WITH_AINM_HH: 0,
      //   TOTAL_ANIMALS: 0,
      //   TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
      //   TOTAL_PENDING: 0,
      //   TOTAL_AH_DEPT_HH: 0,
      //   TOTAL_FMR_WITH_AINM_AH_HH: 0,
      //   TOTAL_ANIMALS_AH: 0,
      //   TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
      // };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        clusterId:this.phaseid,
      };
      this.spinner.show();debugger;
      const res = await this.vvFarmerAPI.vvHHAnimalStateReport(req);
      if (res.success) { this.cleartotals();
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
          this.reportTotals.TOTAL_CLUSTERS += parseInt(
            this.stateLevelDetails[i].TOTAL_CLUSTERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.stateLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.stateLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUYVYED_DEAD += parseInt(
            this.stateLevelDetails[i].TOTAL_SUYVYED_DEAD
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUYVYED_MIGRATED += parseInt(
            this.stateLevelDetails[i].TOTAL_SUYVYED_MIGRATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUR_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_SUR_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_FARMERS_WITH_AINM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.stateLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM_HH
          );
          // if( this.stateLevelDetails[i].TOTAL_PENDING===""|| this.stateLevelDetails[i].TOTAL_PENDING=="0")
          // this.reportTotals.TOTAL_PENDING += parseInt("0");
          // else{
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING += parseInt(
            this.stateLevelDetails[i].TOTAL_PENDING
          );
       // }
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AH_DEPT_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_AH_DEPT_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_AINM_AH_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_FMR_WITH_AINM_AH_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS_AH += parseInt(
            this.stateLevelDetails[i].TOTAL_ANIMALS_AH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_OUT_AINM_AH_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_FMR_WITH_OUT_AINM_AH_HH
          );
          this.reportTotals.TOTAL_RESURVEYED_HH+=parseInt(this.stateLevelDetails[i].TOTAL_RESURVEYED_HH);

          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            RBK: this.stateLevelDetails[i].TOTAL_RBK,
            VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            CLUSTERS: this.stateLevelDetails[i].TOTAL_CLUSTERS,
            Volunteers: this.stateLevelDetails[i].TOTAL_VV,
            Volunteers_LOGEDIN: this.stateLevelDetails[i].TOTAL_VV_LOGEDIN,
            Households: this.stateLevelDetails[i].TOTAL_HH,
            Death: this.stateLevelDetails[i].TOTAL_SUYVYED_DEAD,
            Migrated: this.stateLevelDetails[i].TOTAL_SUYVYED_MIGRATED,
            SurveyedHouseholds_SUR_HH: this.stateLevelDetails[i].TOTAL_SUR_HH,
            SurveyedHouseholds_FARMERS_WITH_AINM_HH: this.stateLevelDetails[i].TOTAL_FARMERS_WITH_AINM_HH,
            SurveyedHouseholds_ANIMALS: this.stateLevelDetails[i].TOTAL_ANIMALS,
            SurveyedHouseholds_FARMERS_WITH_OUT_AINM_HH: this.stateLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM_HH,
            SurveyedHouseholds_RESURVEYED_HH:  this.stateLevelDetails[i].TOTAL_RESURVEYED_HH,
            TOTAL_PENDING: this.stateLevelDetails[i].TOTAL_PENDING,
            HouseholdAsPerAHDEPT_AH_DEPT_HH: this.stateLevelDetails[i].TOTAL_AH_DEPT_HH,
            HouseholdAsPerAHDEPT_FMR_WITH_AINM_AH_HH: this.stateLevelDetails[i].TOTAL_FMR_WITH_AINM_AH_HH,
            HouseholdAsPerAHDEPT_ANIMALS_AH: this.stateLevelDetails[i].TOTAL_ANIMALS_AH,
            HouseholdAsPerAHDEPT_FMR_WITH_OUT_AINM_AH_HH: this.stateLevelDetails[i].TOTAL_FMR_WITH_OUT_AINM_AH_HH,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else { this.cleartotals();
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
      'Volunteer Farmer HouseHold Data State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        clusterId:this.phaseid,
        columnValue:this.phasename,
      };
      const fileName = 'stateLevelVVFarmerHouseHoldReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalStatePDFReport(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename:this.phasename,
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





  async btnDownloadReport(id): Promise<void> { 
    try {
      if (this.utils.isEmpty(id)) {
        this.toast.warning('Please Select District');
        return;
      }
      const req = {
        districtId: id,
        clusterId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.stateAPI.volunteerHHReport(req);
      if (res.success) {
       
        this.utils.JSONToCSVConvertor(
          res.result,
          'Volunteer HH Report',
          true
        );
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    }  catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }



  async btnDownloadstateReport(obj,id): Promise<void> {
    try { 
      if (this.utils.isEmpty(obj.DIST_CODE)) {
        this.toast.warning('Please Select District');
        return;
      }
      // if (this.utils.isEmpty(obj.MANDAL_CODE)) {
      //   this.toast.warning('Please Select MANDAL');
      //   return;
      // }
      const req = {
        type:id,
          districtId: obj.DIST_CODE,
          clusterId:this.phaseid
          //mandalId:obj.MANDAL_CODE
      };
      this.spinner.show();
      const res = await this.stateAPI.volunteerHHMandalReport(req);
      if (res.success) {
       
        this.utils.JSONToCSVConvertor(
          res.result,
          'Volunteer HH Report',
          true
        );
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    }  catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  
  
}
