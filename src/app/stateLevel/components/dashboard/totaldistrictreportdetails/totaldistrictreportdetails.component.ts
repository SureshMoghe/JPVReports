import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-totaldistrictreportdetails',
  templateUrl: './totaldistrictreportdetails.component.html',
  styleUrls: ['./totaldistrictreportdetails.component.css']
})
export class TotaldistrictreportdetailsComponent implements OnInit {

 
  Districtdiv=true;
  Mandaldiv=false;
  Rbkdiv=false;
  Villagediv=false;
  Bendiv=false;

  totalDistrictsDetails: any[] = [];
  totalMandalDetails: any[] = [];
  totalRbkDetails: any[] = [];
  totalVillageDetails: any[] = [];
  totalBenDetails: any[] = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: 'TOTAL',
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
  };
  reportTotals1 = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
  };
  reportTotals2 = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',        
    TOTAL_VILLAGES: 0,
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
  };
  reportTotals3 = {
    S_NO: '-',
    VILLAGE_NAME: 'TOTAL',    
    TOTAL_FARMERS: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
  };
  excelData = [];  
  excelData1 = [];  
  excelData2 = [];  
  excelData3 = [];  
  excelData4 = [];  

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private dashboardAPI: DashboardService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
    private stateAPI:StateService,
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    this.spinner.show();
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: 'TOTAL',
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_FARMERS: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      };

      const req = {
        type:'5', 
      };
      this.totalDistrictsDetails = [];
      this.spinner.show();
      // const res = await this.dashboardAPI.totalDistrictReport();
      const res = await this.stateAPI.DashboardDailycountsRptGet(req);
      if (res.success) {
        this.spinner.hide();
        this.Districtdiv=true;
        this.Mandaldiv=false;
        this.Rbkdiv=false;
        this.Villagediv=false;
        this.Bendiv=false;
        this.excelData = [];
        this.totalDistrictsDetails = res.result;
        for (let i = 0; i < this.totalDistrictsDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.totalDistrictsDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix

         if (            
          this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS  === null ||
          this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS  === undefined
          ){ this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS=0;}

          this.reportTotals.TOTAL_WOMEN_FARMERS += parseInt(
            this.totalDistrictsDetails[i].TOTAL_WOMEN_FARMERS
          );

          if (            
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR  === null ||
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR=0;}

          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === null ||
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT=0;}

          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR  === null ||
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR=0;}

          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_LTR
          );
          if (            
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT  === null ||
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT  === undefined
            ){ this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT=0;}

          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.totalDistrictsDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.totalDistrictsDetails[i].DISTRICT_NAME,
            TOTAL_RBKS: this.totalDistrictsDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.totalDistrictsDetails[i].TOTAL_VILLAGES,
            TOTAL_FARMERS: this.totalDistrictsDetails[i].TOTAL_FARMERS,
            TOTAL_WOMEN_FARMERS: this.totalDistrictsDetails[i]
              .TOTAL_WOMEN_FARMERS,
            TOTAL_BUFFALO_MILK_LTR: this.totalDistrictsDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.totalDistrictsDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.totalDistrictsDetails[i]
              .TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.totalDistrictsDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        //this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  } 
 
  district_id:any;
  districtname:any;

  btnGetDetails(obj: any): void {

    this.district_id= obj.DISTRICT_CODE;
     this.districtname= obj.DISTRICT_NAME;
      
     this.loadMandalReport();       
   }

  async loadMandalReport(): Promise<void> {
    this.spinner.show();
    try {
      this.reportTotals1 = {
        S_NO: '-',
        MANDAL_NAME: 'TOTAL',
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_FARMERS: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      };

      const req = {
        type:'1',
        district_id:this.district_id 
      };
      this.totalMandalDetails = [];
      this.spinner.show();
      // const res = await this.dashboardAPI.totalDistrictReport();
      const res =  await this.stateAPI.DashboardDailycountsRptGet(req);
      if (res.success) {
        this.spinner.hide();
        this.Districtdiv=false;
        this.Mandaldiv=true;
        this.Rbkdiv=false;
        this.Villagediv=false;
        this.Bendiv=false;
        this.excelData1 = [];
        this.totalMandalDetails = res.result;
        for (let i = 0; i < this.totalMandalDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals1.TOTAL_RBKS += parseInt(
            this.totalMandalDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals1.TOTAL_VILLAGES += parseInt(
            this.totalMandalDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals1.TOTAL_FARMERS += parseInt(
            this.totalMandalDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix

         if (            
          this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS  === null ||
          this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS  === undefined
          ){ this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS=0;}

          this.reportTotals1.TOTAL_WOMEN_FARMERS += parseInt(
            this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS
          );

          if (            
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR  === null ||
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR  === undefined
            ){ this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR=0;}

          this.reportTotals1.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          if (            
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === null ||
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === undefined
            ){ this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT=0;}

          this.reportTotals1.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          if (            
            this.totalMandalDetails[i].TOTAL_COW_MILK_LTR  === null ||
            this.totalMandalDetails[i].TOTAL_COW_MILK_LTR  === undefined
            ){ this.totalMandalDetails[i].TOTAL_COW_MILK_LTR=0;}

          this.reportTotals1.TOTAL_COW_MILK_LTR += parseFloat(
            this.totalMandalDetails[i].TOTAL_COW_MILK_LTR
          );
          if (            
            this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT  === null ||
            this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT  === undefined
            ){ this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT=0;}

          this.reportTotals1.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.totalMandalDetails[i].MANDAL_NAME,
            TOTAL_RBKS: this.totalMandalDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.totalMandalDetails[i].TOTAL_VILLAGES,
            TOTAL_FARMERS: this.totalMandalDetails[i].TOTAL_FARMERS,
            TOTAL_WOMEN_FARMERS: this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS,
            TOTAL_BUFFALO_MILK_LTR: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.totalMandalDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData1.push(singleRow);
        }
        this.reportTotals1.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals1.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals1.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals1.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals1.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals1.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals1.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals1.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.excelData1.push(this.reportTotals1);
        this.spinner.hide();
        //this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  } 


  mandal_id:any;
  mandalname:any;

  btnGetDetails1(obj: any): void {

    this.mandal_id= obj.MANDAL_CODE;
     this.mandalname= obj.MANDAL_NAME;
      
     this.loadRBKReport();       
   }

   async loadRBKReport(): Promise<void> {
    this.spinner.show();
    try {
      this.reportTotals2 = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',        
        TOTAL_VILLAGES: 0,
        TOTAL_FARMERS: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      };

      const req = {
        type:'2',
        mandal_id:this.mandal_id 
      };
      this.totalRbkDetails = [];
      this.spinner.show();
      // const res = await this.dashboardAPI.totalDistrictReport();
       const res = await this.stateAPI.DashboardDailycountsRptGet(req);
       
      if (res.success) {
        this.spinner.hide();
        this.Districtdiv=false;
        this.Mandaldiv=false;
        this.Rbkdiv=true;
        this.Villagediv=false;
        this.Bendiv=false;
        this.excelData2 = [];
        this.totalRbkDetails = res.result;
        for (let i = 0; i < this.totalRbkDetails.length; i++) {
          // tslint:disable-next-line: radix
          // this.reportTotals2.TOTAL_RBKS += parseInt(
          //   this.totalRbkDetails[i].TOTAL_RBKS
          // );
          // tslint:disable-next-line: radix
          this.reportTotals2.TOTAL_VILLAGES += parseInt(
            this.totalRbkDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals2.TOTAL_FARMERS += parseInt(
            this.totalRbkDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix

         if (            
          this.totalRbkDetails[i].TOTAL_WOMEN_FARMERS  === null ||
          this.totalRbkDetails[i].TOTAL_WOMEN_FARMERS  === undefined
          ){ this.totalRbkDetails[i].TOTAL_WOMEN_FARMERS=0;}

          this.reportTotals2.TOTAL_WOMEN_FARMERS += parseInt(
            this.totalRbkDetails[i].TOTAL_WOMEN_FARMERS
          );

          if (            
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_LTR  === null ||
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_LTR  === undefined
            ){ this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_LTR=0;}

          this.reportTotals2.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          if (            
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === null ||
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === undefined
            ){ this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_AMOUNT=0;}

          this.reportTotals2.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          if (            
            this.totalRbkDetails[i].TOTAL_COW_MILK_LTR  === null ||
            this.totalRbkDetails[i].TOTAL_COW_MILK_LTR  === undefined
            ){ this.totalRbkDetails[i].TOTAL_COW_MILK_LTR=0;}

          this.reportTotals2.TOTAL_COW_MILK_LTR += parseFloat(
            this.totalRbkDetails[i].TOTAL_COW_MILK_LTR
          );
          if (            
            this.totalRbkDetails[i].TOTAL_COW_MILK_AMOUNT  === null ||
            this.totalRbkDetails[i].TOTAL_COW_MILK_AMOUNT  === undefined
            ){ this.totalRbkDetails[i].TOTAL_COW_MILK_AMOUNT=0;}

          this.reportTotals2.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.totalRbkDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.totalRbkDetails[i].RBK_NAME,            
            TOTAL_VILLAGES: this.totalRbkDetails[i].TOTAL_VILLAGES,
            TOTAL_FARMERS: this.totalRbkDetails[i].TOTAL_FARMERS,
            TOTAL_WOMEN_FARMERS: this.totalRbkDetails[i].TOTAL_WOMEN_FARMERS,
            TOTAL_BUFFALO_MILK_LTR: this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.totalRbkDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.totalRbkDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.totalRbkDetails[i].TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData2.push(singleRow);
        }
        this.reportTotals2.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals2.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals2.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals2.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals2.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals2.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals2.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals2.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.excelData2.push(this.reportTotals2);
        this.spinner.hide();
        //this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  } 

  rbk_id:any;
  rbkname:any;
  btnGetDetails2(obj: any): void {debugger;

    this.rbk_id= obj.RBK_CODE;
     this.rbkname= obj.RBK_NAME;
      
     this.loadVillageReport();       
   }

   async loadVillageReport(): Promise<void> {debugger;
    this.spinner.show();
    try {
      this. reportTotals3 = {
        S_NO: '-',
        VILLAGE_NAME: 'TOTAL',    
        TOTAL_FARMERS: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
      }; 
      const req = {
        type:'3',
        rbk_id:this.rbk_id 
      };
      this.totalVillageDetails = [];
      this.spinner.show();
      // const res = await this.dashboardAPI.totalDistrictReport();
      const res = await this.stateAPI.DashboardDailycountsRptGet(req);
      if (res.success) {
        debugger;
        this.spinner.hide();
        this.Districtdiv=false;
        this.Mandaldiv=false;
        this.Rbkdiv=false;
        this.Villagediv=true;
        this.Bendiv=false;
        this.excelData3 = [];
        this.totalVillageDetails = res.result;
        for (let i = 0; i < this.totalVillageDetails.length; i++) {
          // tslint:disable-next-line: radix
          // this.reportTotals2.TOTAL_RBKS += parseInt(
          //   this.totalRbkDetails[i].TOTAL_RBKS
          // );
          // tslint:disable-next-line: radix
          // this.reportTotals3.TOTAL_VILLAGES += parseInt(
          //   this.totalRbkDetails[i].TOTAL_VILLAGES
          // );
          // tslint:disable-next-line: radix
          this.reportTotals3.TOTAL_FARMERS += parseInt(
            this.totalVillageDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix

         if (            
          this.totalVillageDetails[i].TOTAL_WOMEN_FARMERS  === null ||
          this.totalVillageDetails[i].TOTAL_WOMEN_FARMERS  === undefined
          ){ this.totalVillageDetails[i].TOTAL_WOMEN_FARMERS=0;}

          this.reportTotals3.TOTAL_WOMEN_FARMERS += parseInt(
            this.totalVillageDetails[i].TOTAL_WOMEN_FARMERS
          );

          if (            
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_LTR  === null ||
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_LTR  === undefined
            ){ this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_LTR=0;}

          this.reportTotals3.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          if (            
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === null ||
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_AMOUNT  === undefined
            ){ this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_AMOUNT=0;}

          this.reportTotals3.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          if (            
            this.totalVillageDetails[i].TOTAL_COW_MILK_LTR  === null ||
            this.totalVillageDetails[i].TOTAL_COW_MILK_LTR  === undefined
            ){ this.totalVillageDetails[i].TOTAL_COW_MILK_LTR=0;}

          this.reportTotals3.TOTAL_COW_MILK_LTR += parseFloat(
            this.totalVillageDetails[i].TOTAL_COW_MILK_LTR
          );
          if (            
            this.totalVillageDetails[i].TOTAL_COW_MILK_AMOUNT  === null ||
            this.totalVillageDetails[i].TOTAL_COW_MILK_AMOUNT  === undefined
            ){ this.totalVillageDetails[i].TOTAL_COW_MILK_AMOUNT=0;}

          this.reportTotals3.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.totalVillageDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.totalVillageDetails[i].VILLAGE_NAME,            
            // TOTAL_VILLAGES: this.totalRbkDetails[i].TOTAL_VILLAGES,
            TOTAL_FARMERS: this.totalVillageDetails[i].TOTAL_FARMERS,
            TOTAL_WOMEN_FARMERS: this.totalVillageDetails[i].TOTAL_WOMEN_FARMERS,
            TOTAL_BUFFALO_MILK_LTR: this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.totalVillageDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.totalVillageDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.totalVillageDetails[i].TOTAL_COW_MILK_AMOUNT,
          };

          this.excelData3.push(singleRow);
        }
        this.reportTotals3.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals3.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals3.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals3.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals3.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals3.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals3.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals3.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.excelData3.push(this.reportTotals3);
        this.spinner.hide();
        //this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  } 

   village_id:any;
   villagename:any;
  btnGetDetails3(obj: any): void {debugger;

    this.village_id= obj.VILLAGE_CODE;
     this.villagename= obj.VILLAGE_NAME;
      
     this.loadBenifisheriesReport();       
   }

   async loadBenifisheriesReport(): Promise<void> {
    this.spinner.show();
    try {
     
      const req = {
        type:'4',
        village_id:this.village_id 
      };
      this.totalBenDetails = [];
      this.spinner.show();
      // const res = await this.dashboardAPI.totalDistrictReport();
      const res = await this.stateAPI.DashboardDailycountsRptGet(req);
      if (res.success) { 
        debugger;
        this.spinner.hide();
        this.Districtdiv=false;
        this.Mandaldiv=false;
        this.Rbkdiv=false;
        this.Villagediv=false;
        this.Bendiv=true;
        this.excelData4 = [];
        this.totalBenDetails = res.result;       
        this.excelData4= res.totalBenDetails; 
        this.spinner.hide();
        //this.rerender();
      } else {
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
      'Total Districts Report',
      true
    );
  }
  btnExcel1(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData1,
      'Total Mandal Report',
      true
    );
  }
  btnExcel2(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData2,
      'Total RBK Report',
      true
    );
  }
  btnExcel3(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData3,
      'Total Village Report',
      true
    );
  }
  btnExcel4(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData4,
      'Total Benefisheries Report',
      true
    );
  }

  btnback():void{
    this.spinner.show();
    this.Districtdiv=true;
        this.Mandaldiv=false; 
        this.Rbkdiv=false;
        this.Villagediv=false;
        this.Bendiv=false;            
                   
        this.spinner.hide();
        
  }
  btnback1():void{
    this.spinner.show();
    this.Districtdiv=false;
        this.Mandaldiv=true; 
        this.Rbkdiv=false;
        this.Villagediv=false;
        this.Bendiv=false;           
                   
        this.spinner.hide();
        
  }
  btnback2():void{
    this.spinner.show();
    this.Districtdiv=false;
        this.Mandaldiv=false; 
        this.Rbkdiv=true;
        this.Villagediv=false;
        this.Bendiv=false;    
                   
        this.spinner.hide();
        
  }
  btnback3():void{
    this.spinner.show();
    this.Districtdiv=false;
        this.Mandaldiv=false; 
        this.Rbkdiv=false;
        this.Villagediv=true;
        this.Bendiv=false;           
                   
        this.spinner.hide();
        
  }

  btnPDF(): void {
    const fileName = 'totalDistrictsReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .totalDistrictPDFReport()
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }  
}
