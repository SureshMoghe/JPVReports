import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { MdssPromotersMilkPouring } from '../../models/mdsspromotersmilkpouring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdss-promoters-milk-pouring-status',
  templateUrl: './mdss-promoters-milk-pouring-status.component.html',
  styleUrls: ['./mdss-promoters-milk-pouring-status.component.css']
})
export class MdssPromotersMilkPouringStatusComponent implements OnInit, OnDestroy, AfterViewInit { 

  @Output() AdhocMilkPouredFarmerCountChange = new EventEmitter<string>();  
  MDSSPromotersMilkPouringStatusDetails = [];
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  MandalName: any;
  fromDate: any;
  toDate: any;  
		mandalList:[];


    MDSSPromotersMilkPouringStatus:MdssPromotersMilkPouring={
      DIST_CODE:'',
      MANDAL_CODE:'', 
    }

  districtList = [];  
  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME:'TOTAL',
    MANDAL_NAME: '-',
    RBK_NAME: '-',
    ADHOC_TOTAL: 0,
    MILK_POURED_FARMER_CNT: 0,
    MILK_NOT_POURED_FARMER_CNT:0,
    NO_OF_PROMOTER:0,
    MILK_POURED_FMR_CNT: 0,
    MILK_NOT_POURED_FMR_CNT: 0, 
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerModuleAPI: StateService,
    private farmerAPI: FarmerRegService,
    private stateAPI:StateService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.districtId = '';
     
   // this.fromDate = this.session.getFromDateString();
   this.fromDate = this.session.getTodayDateString();
   this.toDate = this.session.getTodayDateString();
    this.loadDistrictList();   
    this.MDSSPromotersMilkPouringStatus.DIST_CODE="0";
    this.MDSSPromotersMilkPouringStatus.MANDAL_CODE="0"; 
    //this.btnLoadReport(); 
    
  } 
 
    async loadDistrictList(): Promise<void> {  
    try { 
      const req = { 
        type: '1',  
      };
		this.districtList=[];
		this.spinner.show();
		const res = await this.stateAPI.MDSSPromotersMilkPouringGet(req);
		if (res.success) {        
			this.districtList = res.result;  
      this.MDSSPromotersMilkPouringStatus.DIST_CODE="0";
      this.MDSSPromotersMilkPouringStatus.MANDAL_CODE="0"; 
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  } 
    async onDistrictIdChange(): Promise<void> {      
     try { 
      const req = {
        type: '2', 
        dist:this.MDSSPromotersMilkPouringStatus.DIST_CODE,
      };
		this.mandalList=[];
		this.spinner.show();
		const res = await this.stateAPI.MDSSPromotersMilkPouringGet(req);
		if (res.success) {        
			this.mandalList = res.result; 
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }  
  async btnLoadReport(): Promise<void> { 
    this.MDSSPromotersMilkPouringStatusDetails = [];
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME:'TOTAL',
        MANDAL_NAME: '-',
        RBK_NAME: '-',
        ADHOC_TOTAL: 0,
        MILK_POURED_FARMER_CNT: 0,
        MILK_NOT_POURED_FARMER_CNT:0,
        NO_OF_PROMOTER:0,
        MILK_POURED_FMR_CNT: 0,
        MILK_NOT_POURED_FMR_CNT: 0, 
      };debugger;
      const req = {
        type:"3",
        dist:this.MDSSPromotersMilkPouringStatus.DIST_CODE,
        mandal:this.MDSSPromotersMilkPouringStatus.MANDAL_CODE,
        fromdate:this.fromDate , 
        todate:this.toDate,
      };
      this.MDSSPromotersMilkPouringStatusDetails = [];
      this.spinner.show(); 
     const res = await this.stateAPI.MDSSPromotersMilkPouringGet(req);
        
      if (res.success) {
        this.excelData = [];
        this.MDSSPromotersMilkPouringStatusDetails = res.result;
        for (let i = 0; i < this.MDSSPromotersMilkPouringStatusDetails.length; i++) {
          this.reportTotals.ADHOC_TOTAL += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].ADHOC_TOTAL
          );
          this.reportTotals.MILK_POURED_FARMER_CNT += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].MILK_POURED_FARMER_CNT
          );
          this.reportTotals.MILK_NOT_POURED_FARMER_CNT += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].MILK_NOT_POURED_FARMER_CNT
          );
          this.reportTotals.NO_OF_PROMOTER += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].NO_OF_PROMOTER
          );
          this.reportTotals.MILK_POURED_FMR_CNT += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].MILK_POURED_FMR_CNT
          );
          this.reportTotals.MILK_NOT_POURED_FMR_CNT += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].MILK_NOT_POURED_FMR_CNT
          ); 
          let singleRow = {
          S_NO: i + 1,
          District: this.MDSSPromotersMilkPouringStatusDetails[i].DISTRICT_NAME,
          Mandal: this.MDSSPromotersMilkPouringStatusDetails[i].MANDAL_NAME,
          RBKs: this.MDSSPromotersMilkPouringStatusDetails[i].RBK_NAME,
          Adhoc_Committee_Members_Total: this.MDSSPromotersMilkPouringStatusDetails[i].ADHOC_TOTAL,
          Adhoc_Committee_Members_Milk_Pouring_Members: this.MDSSPromotersMilkPouringStatusDetails[i]
          .MILK_POURED_FARMER_CNT,
          Adhoc_Committee_Members_Milk_Not_Pouring_Members: this.MDSSPromotersMilkPouringStatusDetails[i]
          .MILK_NOT_POURED_FARMER_CNT,
          No_of_Promoters_Total: this.MDSSPromotersMilkPouringStatusDetails[i]
          .NO_OF_PROMOTER,
          No_of_Promoters_Milk_Pouring_Members: this.MDSSPromotersMilkPouringStatusDetails[i]
          .MILK_POURED_FMR_CNT,
          No_of_Promoters_Milk_Not_Pouring_Members: this.MDSSPromotersMilkPouringStatusDetails[i]
          .MILK_NOT_POURED_FMR_CNT, 
          }; 

          this.excelData.push(singleRow);
        } 
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else { this.excelData = [];
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {  if(this.excelData.length>0){ 
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'MDSS Promoters Milk Pouring Status',
      true
    );
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

  PromotersMilkPouredFarmerCount(obj): void {debugger;
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      MandalId: obj.MANDAL_CODE,
      MandalName: obj.MANDAL_NAME,
      RbkId: obj.RBK_CODE,
      RBKName: obj.RBK_NAME,
      fromDate:this.fromDate,
      toDate:this.toDate,
      type:"4",
      // fromDate: this.fromDate,
      // toDate: this.toDate,
    }; 
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.AdhocMilkPouredFarmerCountChange.emit(encryptedString);

    this.router.navigate(['/state/MdssAdhocMilkDetails'], 
    { queryParams: { request: encryptedString },});
  }
  PromotersMilkNotPouredFarmerCount(obj): void {debugger;
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      MandalId: obj.MANDAL_CODE,
      MandalName: obj.MANDAL_NAME,
      RbkId: obj.RBK_CODE,
      RBKName: obj.RBK_NAME,
      fromDate:this.fromDate,
      toDate:this.toDate,
      type:"5",
      // fromDate: this.fromDate,
      // toDate: this.toDate,
    }; 
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.AdhocMilkPouredFarmerCountChange.emit(encryptedString);

    this.router.navigate(['/state/MdssAdhocMilkDetails'], 
    { queryParams: { request: encryptedString },});
  }

  AdhocMilkPouredFarmerCount(obj): void {debugger;
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      MandalId: obj.MANDAL_CODE,
      MandalName: obj.MANDAL_NAME,
      RbkId: obj.RBK_CODE,
      RBKName: obj.RBK_NAME,
      fromDate:this.fromDate,
      toDate:this.toDate,
      type:"6",
      // fromDate: this.fromDate,
      // toDate: this.toDate,
    }; 
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.AdhocMilkPouredFarmerCountChange.emit(encryptedString);

    this.router.navigate(['/state/MdssAdhocMilkDetails'], 
    { queryParams: { request: encryptedString },});
  }
  AdhocMilkNotPouredFarmerCount(obj): void {debugger;
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      MandalId: obj.MANDAL_CODE,
      MandalName: obj.MANDAL_NAME,
      RbkId: obj.RBK_CODE,
      RBKName: obj.RBK_NAME,
      fromDate:this.fromDate,
      toDate:this.toDate,
      type:"7",
      // fromDate: this.fromDate,
      // toDate: this.toDate,
    }; 
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.AdhocMilkPouredFarmerCountChange.emit(encryptedString);

    this.router.navigate(['/state/MdssAdhocMilkDetails'], 
    { queryParams: { request: encryptedString },});
  }
}
