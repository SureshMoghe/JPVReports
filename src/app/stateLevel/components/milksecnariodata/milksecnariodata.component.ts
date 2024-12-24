import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheyuthaGroundingService } from 'src/app/cheyuthaGroundingModule/services/cheyutha-grounding.service';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from '../../services/dashboard.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-milksecnariodata',
  templateUrl: './milksecnariodata.component.html',
  styleUrls: ['./milksecnariodata.component.css']
})
export class MilksecnariodataComponent implements OnInit {

  FramerTablediv=false;
  constructor(private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private logger: LoggerService,
    private dashboardAPI: DashboardService,
    private session: SessionService,
    private districtlistapi: FarmerRegService,
    private passwordResetAPI: StateService,
    private  MilkDetails:CheyuthaGroundingService,
    private router: Router) { }

    districtListdata=[];
    YearDetailsdata=[];
    MonthList=[];
    DairyList=[];
    MilkData=[];
    MilkSecnarioData=[];
    btn_enabled=false;
    text_enabled=true;
    btn_enabled_calculation=true;

    disabled:boolean;
    btn_enabled1=false;

   

  
  MilkType=[
    {"Drylist_milk":"Cow"},
    {"Drylist_milk":"Buffalo"},
  ]
  

 

    MilksecnarioCls={
      yearId:'',
      Months:'',
      DistrictId:'',
      Dairynames:'',
      Milktype:'',
      FarmerLaks:'',
      Milk_LLPD:'',
      Price_Fat:'',
      Additional_Benfts:'',
     Baseprice:'',

    }

  ngOnInit(): void {
   this.loadDistrictList();
   this.loadyears();
   this.MonthsLoad();
   this.DairyData();
   this.MilkTypeData();
  }
  async loadDistrictList(): Promise<void> {
    try {
      this.spinner.show();
      const reqdistrict={
type:"1"
      }
      //const res = await this.districtlistapi.districtList();
      const res = await this.MilkDetails.RbkBenfitDetails(reqdistrict);
      if (res.success) {
        this.districtListdata = res.result;
        debugger;
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

 
  // year data
  async loadyears(): Promise<void> {
    try {
      this.spinner.show();
      const reqyear = {
        type:"5"
      };

     // const res = await this.passwordResetAPI.FinancialYearGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqyear);
     
      if (res.success) {
       
        this.YearDetailsdata = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  //Moths Data
  async MonthsLoad(): Promise<void> {
    try {
      this.spinner.show();
      const reqmonth = {
        type:"4"
      };
      //const res = await this.passwordResetAPI.MonthsDataGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqmonth);
      debugger;
      if (res.success) {
        
        this.MonthList = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  async DairyData(): Promise<void> {
    try {
      this.spinner.show();
      const reqdairy = {type:"2"};
     // const req = {district:this.MilksecnarioCls.DistrictId};
     // const res = await this.passwordResetAPI.DistrictwiseDairyGet(req);
     const res = await this.MilkDetails.RbkBenfitDetails(reqdairy);
      if (res.success) {
        console.log(res.result);
        this.DairyList = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async MilkTypeData(): Promise<void> {
    try {
      this.spinner.show();
      this.MilksecnarioCls.Milktype='';
      this.MilksecnarioCls.Baseprice='';
      const requns = {type:"3"};
      // const req = {district:this.MilksecnarioCls.DistrictId};
      // const res = await this.passwordResetAPI.DistrictMilkTypeGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(requns);
      if (res.success) {
        console.log(res.result);
        this.MilkData = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

 
  async onDistrictChange():Promise<void>{
    debugger;
    this.MilksecnarioCls.Milktype='';
    this.MilksecnarioCls.Dairynames='';    

this.MilkTypeData();

  }
  async onmilkTypeChange():Promise<void>{
    if (this.validate()) {
      this.spinner.show();
      const req = { type:"6",
      district_code:this.MilksecnarioCls.DistrictId,
      union_type:this.MilksecnarioCls.Dairynames,
      milk_type:this.MilksecnarioCls.Milktype
    };
    const res = await this.MilkDetails.RbkBenfitDetails(req);
      if (res.success) {
        console.log(res.result);
        this.MilksecnarioCls.Baseprice = res.result[0]["BASE_PRICE"];
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
     

    }

  }


 async onyearMChange():Promise<void> {

    try {
      this.spinner.show();
      const reqmy={ type:"8",year:this.MilksecnarioCls.yearId,month:this.MilksecnarioCls.Months}
      // const req = {fnyear:this.MilksecnarioCls.yearId,month:this.MilksecnarioCls.Months};
      // const res = await this.passwordResetAPI.MilkSecnarioDetails(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqmy);
      if (res.success) {
        debugger;
        this.MilkSecnarioData = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
 
this.FramerTablediv=true
 }

 async onbtnSubmit():Promise<void>{
  try {

    this.spinner.show();
    if (this.validate()) {
      if (this.utils.isEmpty(this.MilksecnarioCls.FarmerLaks)) {
        this.toast.warning('Please Enter  Farmer Laks');
         
      }
      if (this.utils.isEmpty(this.MilksecnarioCls.Milk_LLPD)) {
        this.toast.warning('Please Enter Milk LLPD');
         
      }
      if (this.utils.isEmpty(this.MilksecnarioCls.Price_Fat)) {
        this.toast.warning('Please Enter Price');
         
      }
      if (this.utils.isEmpty(this.MilksecnarioCls.Additional_Benfts)) {
        this.toast.warning('Please Enter Benfit Amount');
         
      }
      else{
        const req = { type:"9",
        district_code:this.MilksecnarioCls.DistrictId,
        union_type:this.MilksecnarioCls.Dairynames,
        milk_type:this.MilksecnarioCls.Milktype,
        farmers:this.MilksecnarioCls.FarmerLaks,
        milk_qty:this.MilksecnarioCls.Milk_LLPD,
        amount:this.MilksecnarioCls.Price_Fat,
        year:this.MilksecnarioCls.yearId,
        month:this.MilksecnarioCls.Months,
        benfit_amount:this.MilksecnarioCls.Additional_Benfts,inserted_by:this.session.userName
      };
      const res = await this.MilkDetails.RbkBenfitDetails(req);
      debugger;
      if (res.success) {
        if(res.result[0]["STATUS"]==1){
          this.toast.success(res.result[0]["MSG"]);

        }
        if(res.result[0]["STATUS"]==4){
          this.toast.info(res.result[0]["MSG"]);

        }
       this.btn_enabled_calculation=true;
       this.btn_enabled=false;
       //this.toast.success(res.message);
       this.clearData();
       this.onyearMChange();
      } else {
        this.toast.info(res.message);
      }
      }
    // const req = { district:this.MilksecnarioCls.DistrictId,dairy:this.MilksecnarioCls.Dairynames,
    //   milktype:this.MilksecnarioCls.Milktype,farmerlakhs:this.MilksecnarioCls.FarmerLaks,
    //   milkProcureman:this.MilksecnarioCls.Milk_LLPD,pricesft:this.MilksecnarioCls.Price_Fat,
    //   additionalbts:this.MilksecnarioCls.Additional_Benfts};
    //const res = await this.passwordResetAPI.MilkSecnarioInsertData(req);
    
  }
    this.spinner.hide();
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
 }

 

 clearData(){
    
  this.MilksecnarioCls.Dairynames='',
  this.MilksecnarioCls.Milktype='',
  this.MilksecnarioCls.FarmerLaks='',
  this.MilksecnarioCls.Milk_LLPD='',
  this.MilksecnarioCls.Price_Fat='',
  this.MilksecnarioCls.Additional_Benfts=''
}

validate(): boolean {
   
  if (this.utils.isEmpty(this.MilksecnarioCls.yearId)) {
    this.toast.warning('Please Select Year');
    return false;
  }
  if (this.utils.isEmpty(this.MilksecnarioCls.Months)) {
    this.toast.warning('Please Select Month');
    return false;
  }
  if (this.utils.isEmpty(this.MilksecnarioCls.DistrictId)) {
    this.toast.warning('Please Select District');
    return false;
  }
  if (this.utils.isEmpty(this.MilksecnarioCls.Dairynames)) {
    this.toast.warning('Please Select Dairy Type');
    return false;
  }
  if (this.utils.isEmpty(this.MilksecnarioCls.Milktype)) {
    this.toast.warning('Please Select Milk Type');
    return false;
  }
  return true;
   
}

async onbtnSubmitcalculater(){

  if (this.validate()) {
this.spinner.show();
    if (this.utils.isEmpty(this.MilksecnarioCls.FarmerLaks)) {
      this.toast.warning('Please Enter  Farmer Laks');
       
    }
    if (this.utils.isEmpty(this.MilksecnarioCls.Milk_LLPD)) {
      this.toast.warning('Please Enter Milk LLPD');
       
    }
    if (this.MilksecnarioCls.FarmerLaks=="" || this.MilksecnarioCls.Milk_LLPD=="") {
      
      this.MilksecnarioCls.FarmerLaks='';
      this.MilksecnarioCls.Milk_LLPD='';
      this.MilksecnarioCls.Additional_Benfts='';
      this.MilksecnarioCls.Price_Fat='';

    }
    else{
      const req = { type:"7",
      district_code:this.MilksecnarioCls.DistrictId,
      union_type:this.MilksecnarioCls.Dairynames,
      milk_type:this.MilksecnarioCls.Milktype,
      farmers:this.MilksecnarioCls.FarmerLaks,
      milk_qty:this.MilksecnarioCls.Milk_LLPD,
      amount:this.MilksecnarioCls.Price_Fat,
      year:this.MilksecnarioCls.yearId,
      month:this.MilksecnarioCls.Months,
    };
    const res = await this.MilkDetails.RbkBenfitDetails(req);

      if (res.success) {
debugger;
        this.btn_enabled_calculation=false;
          this.disabled=true;
          this.btn_enabled=true;
        this.MilksecnarioCls.Additional_Benfts=res.result[0]["BENFIT_AMOUNT"];
        if(res.result[0]["STATUS"]==0)
        {
          this.btn_enabled1=true;

        }
        else  {
         
         this.btn_enabled1=false;
        }

      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();

      
    }
  
  }
}




}
