import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { promise } from 'protractor';
import { Subject } from 'rxjs';
import { CheyuthaGroundingService } from 'src/app/cheyuthaGroundingModule/services/cheyutha-grounding.service';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from '../../services/dashboard.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-milkdatadetails-update',
  templateUrl: './milkdatadetails-update.component.html',
  styleUrls: ['./milkdatadetails-update.component.css']
})
export class MilkdatadetailsUpdateComponent implements OnInit {

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
    Milkupdatedetails=[];
    MilkDataupdate=[];
    btn_enabled=false;
    text_enabled=true;
    btn_enabled_calculation=true;
    MilkSeanearoview=true;
    MilkDetailsupdate=false;

    disabled:boolean;
    btn_enabled1=false;
    districtname='';
    monthname='';

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
  
    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

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
     Status:'',

    }

 

  ngOnInit(): void {
    this.MilkSeanearoview=true;
    this.MilkDetailsupdate=false;
    this.loadyears();
    this.MonthsLoad();

  }
    // year data
    async loadyears(): Promise<void> {
      try {
        this.spinner.show();
        const reqyear = {
          type:"5"
        };
  
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

 

 async onyearMChange():Promise<void> {

    try {
      this.spinner.show();
      const reqmy={ type:"10",year:this.MilksecnarioCls.yearId,month:this.MilksecnarioCls.Months}
      
      const res = await this.MilkDetails.RbkBenfitDetails(reqmy);
      if (res.success) {
        debugger;
        console.log(res.result);
        this.MilkSecnarioData = res.result;
       this.rerender();
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

 
async btnActionDetailsEdit(obj:any):Promise<void>{
  this.MilksecnarioCls.DistrictId=obj.DISTRICT_CODE;
  
        this.MilkSeanearoview=false;
        this.MilkDetailsupdate=true;
  this.spinner.show();
      const reqmy={ type:"11",year:this.MilksecnarioCls.yearId,month:this.MilksecnarioCls.Months,district_code:this.MilksecnarioCls.DistrictId}
      
      const res = await this.MilkDetails.RbkBenfitDetails(reqmy);
      if (res.success) {
        debugger;
        console.log(res.result);
        this.MilkDataupdate = res.result;
        this.districtname=res.result[0]["DISTRICT_NAME"];
         var emonth=res.result[0]["MONTH"];
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var d = new Date();
               this.monthname=months[emonth-1]; 
        debugger;
        this.MilkSeanearoview=false;
        this.MilkDetailsupdate=true;
       
      } else {
        this.toast.info(res.message);
        this.MilkSeanearoview=true;
  this.MilkDetailsupdate=false;
      }
      this.spinner.hide();


  
}

Backdata(){
  this.FramerTablediv=true;
  this.MilkSeanearoview=true;
  this.MilkDetailsupdate=false;

}
 
async btnActionDetails(obj:any,obj1:any):Promise<void>{
  this.spinner.show();
   
  const reqmy={ type:"12",status:obj,month:obj1,inserted_by:this.session.userName}
      
  const res = await this.MilkDetails.RbkBenfitDetails(reqmy);
  debugger;
  if (res.success) {
    
    if(res.result[0]["STATUS"]=="1")
    {
  this.toast.success(res.result[0]["MSG"]);
  this.spinner.hide();
  this.FramerTablediv=true;
  this.MilkSeanearoview=true;
  this.MilkDetailsupdate=false;
  
    }
    else{
this.toast.error(res.result[0]["MSG"]);
    }
   
    
     
   
  } else {
    this.toast.info(res.message);
    this.MilkSeanearoview=false;
this.MilkDetailsupdate=true;
  }
  this.spinner.hide();



this.MilksecnarioCls.Status=obj.PVT_CM_STATUS;
alert(obj.PVT_CM_STATUS);


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
