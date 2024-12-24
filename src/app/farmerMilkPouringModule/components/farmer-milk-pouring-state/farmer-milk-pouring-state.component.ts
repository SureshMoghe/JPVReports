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
import { FarmerMilkPouringService } from '../../services/farmer-milk-pouring.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-milk-pouring-state', 
  templateUrl: './farmer-milk-pouring-state.component.html',
  styleUrls: ['./farmer-milk-pouring-state.component.css'],
})
export class FarmerMilkPouringStateComponent 
  implements OnInit, OnDestroy, AfterViewInit 
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetailsChange = new EventEmitter<string>();
  Phase_Type:any;
  phaseid: any;//  this.phaseid,
  phasename: any;// this.phasename,
  PhaseTypeList:[];
  stateLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_VV: 0,
    TOTAL_HH: 0,
    TOTAL_REG_FARMERS: 0,
    TOT_REG_MPOUR_FAR_WITH_M_ANM: 0,
    TOT_REG_MPOUR_FAR_WO_M_ANM: 0,
    NO_OF_MILCH_ANM: 0,
    TOT_SUR_REG_MILK_NOT_POUR_FAR: 0,
    TOT_HH_WITHOUT_ANM: 0,
    TOTAL_PENDING_HH: 0,
    FMR_REGI_MILCH_ANM_COLL_PED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerMilkPouring: FarmerMilkPouringService,
    private session: SessionService,
		private stateAPI: StateService, 
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.loadPhaseTypelist();
    this.loadReport();
    if (
      this.phaseid === undefined ||
      this.phaseid === '' ||
      this.phaseid === null
      ) { 
       this.Phase_Type='0';
       this.phaseid='0';
        this.phasename='ALL';
       
      } 
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_VV: 0,
        TOTAL_HH: 0,
        TOTAL_REG_FARMERS: 0,
        TOT_REG_MPOUR_FAR_WITH_M_ANM: 0,
        TOT_REG_MPOUR_FAR_WO_M_ANM: 0,
        NO_OF_MILCH_ANM: 0,
        TOT_SUR_REG_MILK_NOT_POUR_FAR: 0,
        TOT_HH_WITHOUT_ANM: 0,
        TOTAL_PENDING_HH: 0,
        FMR_REGI_MILCH_ANM_COLL_PED: 0,
      };debugger;
      const req = {subReportType:this.phaseid,};
      // this.stateLevelDetails = [];
      this.spinner.show(); 
      const res = await this.farmerMilkPouring.stateFarmerMilkPouringReport(
        req
      );
      this.spinner.hide();
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
          this.reportTotals.TOTAL_VV += parseInt(
            this.stateLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REG_FARMERS += parseInt(
            this.stateLevelDetails[i].TOTAL_REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WITH_M_ANM += parseInt(
            this.stateLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_SUR_REG_MILK_NOT_POUR_FAR += parseInt(
            this.stateLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.stateLevelDetails[i].NO_OF_MILCH_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WO_M_ANM += parseInt(
            this.stateLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_HH_WITHOUT_ANM += parseInt(
            this.stateLevelDetails[i].TOT_HH_WITHOUT_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_PENDING_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FMR_REGI_MILCH_ANM_COLL_PED += parseInt(
            this.stateLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_VV: this.stateLevelDetails[i].TOTAL_VV,
            TOTAL_HH: this.stateLevelDetails[i].TOTAL_HH,
            TOTAL_REG_FARMERS: this.stateLevelDetails[i].TOTAL_REG_FARMERS,
            TOT_REG_MPOUR_FAR_WITH_M_ANM:
              this.stateLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM,
            TOT_SUR_REG_MILK_NOT_POUR_FAR:
              this.stateLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR,
            NO_OF_MILCH_ANM: this.stateLevelDetails[i].NO_OF_MILCH_ANM,
            TOT_REG_MPOUR_FAR_WO_M_ANM:
              this.stateLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM,
            TOT_HH_WITHOUT_ANM: this.stateLevelDetails[i].TOT_HH_WITHOUT_ANM,
            TOTAL_PENDING_HH: this.stateLevelDetails[i].TOTAL_PENDING_HH,
            FMR_REGI_MILCH_ANM_COLL_PED:
              this.stateLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED,
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
  

  async btnfind(): Promise<void> {
    try {debugger;this.spinner.show();
      this.phaseid=this.Phase_Type; 
      let obj=document.getElementById('phaseid'); 
    this.phasename=obj[this.Phase_Type].innerText;
    this.spinner.hide();this.spinner.show();
      this.loadReport();
      this.spinner.hide();
    } catch (error) {
      
    }
  }

  async loadPhaseTypelist(): Promise<void> {
    try { 
      const req = {
        type: '9', 
      };
		this.PhaseTypeList=[];
		this.spinner.show();
		const res = await this.stateAPI.volunteerHHMandalReport(req);
		if (res.success) {        
			this.PhaseTypeList = res.result;
			this.Phase_Type='0';
      this.phaseid='0';
      this.phasename='All';
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }
  
  onReportPhaseTypeChange(): void {  debugger;
    this.phaseid=this.Phase_Type; 
      let obj=document.getElementById('phaseid');
    this.phasename=obj[this.Phase_Type].innerText;
   
  }
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Milk Pouring State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {  subReportType: this.phaseid,
        columnValue: this.phasename
      };
      const fileName = 'stateLevelFarmerMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerMilkPouring.stateFarmerMilkPouringReportPDF(
        req
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

  btnGetDetails(obj): void { debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnGetFarmerDetails(obj, id): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      subReportType: id,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData)); 
    this.onDetailsChange.emit(encryptedString);
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
