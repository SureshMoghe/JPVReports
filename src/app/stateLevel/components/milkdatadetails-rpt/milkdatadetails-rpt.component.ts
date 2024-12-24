import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
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
  selector: 'app-milkdatadetails-rpt',
  templateUrl: './milkdatadetails-rpt.component.html',
  styleUrls: ['./milkdatadetails-rpt.component.css']
})
export class MilkdatadetailsRptComponent implements OnInit {
 
  

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

    YearDetailsdata=[];
    MonthList=[];
    toyeardetails=[];
    tomonthdetails=[];
    milktypedetails=[];
    MilkSecnarioData=[];

   
    
    MilkDetailsRpt={
      S_NO: '-',
      DISTRICT_NAME:'Total', 
      UNION_FAR_CNT:0, 
      UNION_MILK_QTY:0,
      UNION_BENFIT_AMOUNT:0, 
      UNION_CRNT_AMT:0, 
      PVT_FAR_CNT:0, 
      PVT_MILK_QTY:0, 
      PVT_BENFIT_AMOUNT:0, 
      PVT_CRNT_AMT:0, 
      FAR_CNT:0, 
      MILK_QTY:0, 
      BENFIT_AMOUNT:0, 
      CRNT_AMT:0, 
    };
    excelDataDetails = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
  
    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

  MilksecnarioCls={
    fromyearId:'',
    fromMonths:'',
    ToyearId:'',
    ToMonths:'',
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
    this.fromyears();    
    this.MilkTypeData();

  }

   // year data
   async fromyears(): Promise<void> {
    try {
      this.spinner.show();
      const reqyear = {
        type:"13"
      };

     // const res = await this.passwordResetAPI.FinancialYearGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqyear);
     
      if (res.success) {
       console.log(res.result);
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
  async onyearMChange(): Promise<void> {
    try {
      this.spinner.show();
      const reqmonth = {
        type:"14",year:this.MilksecnarioCls.fromyearId
      };
      //const res = await this.passwordResetAPI.MonthsDataGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqmonth);
      debugger;
      if (res.success) {
        console.log(res.result);
        this.MonthList = res.result;
        this.Toyears();
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  //to year 
  async Toyears(): Promise<void> {
    
    try {
      this.spinner.show();
      const reqyear = {
        type:"15",year:this.MilksecnarioCls.fromyearId
      };

     // const res = await this.passwordResetAPI.FinancialYearGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqyear);
     
      if (res.success) {
       console.log(res.result);
        this.toyeardetails = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  
  }

  //To Moths Data
  async ontoyearMChange(): Promise<void> {
    try {
      this.spinner.show();
      const reqmonth = {
        type:"16",year:this.MilksecnarioCls.ToyearId
      };
      //const res = await this.passwordResetAPI.MonthsDataGet(req);
      const res = await this.MilkDetails.RbkBenfitDetails(reqmonth);
      debugger;
      if (res.success) {
        console.log(res.result);
        this.tomonthdetails = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  //Milk type 
  async MilkTypeData(): Promise<void> {
    try {
      this.spinner.show();
       
      const requns = {type:"17"};
            const res = await this.MilkDetails.RbkBenfitDetails(requns);
      if (res.success) {
        console.log(res.result);
        this.milktypedetails = res.result;
       
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async onmilkTypeChange():Promise<void>{
    this.MilkDetailsRpt={
      S_NO: '-',
      DISTRICT_NAME:'Total', 
      UNION_FAR_CNT:0, 
      UNION_MILK_QTY:0,
      UNION_BENFIT_AMOUNT:0, 
      UNION_CRNT_AMT:0, 
      PVT_FAR_CNT:0, 
      PVT_MILK_QTY:0, 
      PVT_BENFIT_AMOUNT:0, 
      PVT_CRNT_AMT:0, 
      FAR_CNT:0, 
      MILK_QTY:0, 
      BENFIT_AMOUNT:0, 
      CRNT_AMT:0, 
    };
    
      this.spinner.show();
      const req = { type:"18",year:this.MilksecnarioCls.fromyearId,month:this.MilksecnarioCls.fromMonths,tyear:this.MilksecnarioCls.ToyearId,tmonth:this.MilksecnarioCls.ToMonths,milk_type:this.MilksecnarioCls.Milktype
      
    };
     
    const res = await this.MilkDetails.RbkBenfitDetails(req);
    
      if (res.success) {
       
        this.excelDataDetails = [];
        this.MilkSecnarioData=res.result; 
        this.spinner.hide();
        for (let i = 0; i < this.MilkSecnarioData.length; i++) {
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.UNION_FAR_CNT += parseFloat(
            this.MilkSecnarioData[i].UNION_FAR_CNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.UNION_MILK_QTY += parseFloat(
            this.MilkSecnarioData[i].UNION_MILK_QTY
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.UNION_BENFIT_AMOUNT += parseFloat(
            this.MilkSecnarioData[i].UNION_BENFIT_AMOUNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.UNION_CRNT_AMT += parseFloat(
            this.MilkSecnarioData[i].UNION_CRNT_AMT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.PVT_FAR_CNT += parseFloat(
            this.MilkSecnarioData[i].PVT_FAR_CNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.PVT_MILK_QTY += parseFloat(
            this.MilkSecnarioData[i].PVT_MILK_QTY
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.PVT_BENFIT_AMOUNT += parseFloat(
            this.MilkSecnarioData[i].PVT_BENFIT_AMOUNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.PVT_CRNT_AMT += parseFloat(
            this.MilkSecnarioData[i].PVT_CRNT_AMT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.FAR_CNT += parseFloat(
            this.MilkSecnarioData[i].FAR_CNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.MILK_QTY += parseFloat(
            this.MilkSecnarioData[i].MILK_QTY
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.BENFIT_AMOUNT += parseFloat(
            this.MilkSecnarioData[i].BENFIT_AMOUNT
          );
          // tslint:disable-next-line: radix
          this.MilkDetailsRpt.CRNT_AMT += parseFloat(
            this.MilkSecnarioData[i].CRNT_AMT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME:this.MilkSecnarioData[i].DISTRICT_NAME,
            UNION_FAR_CNT: this.MilkSecnarioData[i].UNION_FAR_CNT,
            UNION_MILK_QTY: this.MilkSecnarioData[i].UNION_MILK_QTY,
            UNION_BENFIT_AMOUNT: this.MilkSecnarioData[i].UNION_BENFIT_AMOUNT,
            UNION_CRNT_AMT: this.MilkSecnarioData[i].UNION_CRNT_AMT,
            PVT_FAR_CNT: this.MilkSecnarioData[i].PVT_FAR_CNT,
            PVT_MILK_QTY: this.MilkSecnarioData[i].PVT_MILK_QTY,
            PVT_BENFIT_AMOUNT: this.MilkSecnarioData[i].PVT_BENFIT_AMOUNT,
            PVT_CRNT_AMT: this.MilkSecnarioData[i].PVT_CRNT_AMT,
            FAR_CNT: this.MilkSecnarioData[i].FAR_CNT,
            MILK_QTY: this.MilkSecnarioData[i].MILK_QTY,
            BENFIT_AMOUNT: this.MilkSecnarioData[i].BENFIT_AMOUNT,
            CRNT_AMT: this.MilkSecnarioData[i].CRNT_AMT,
            
          };

           this.excelDataDetails.push(singleRow);
          
        }  
        this.excelDataDetails.push(this.MilkDetailsRpt);
        this.rerender();  
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
        

    }



    btnExcel(): void {
      this.utils.JSONToCSVConvertor(
        this.excelDataDetails,
        'Milk Details Report',
        true
      );
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



