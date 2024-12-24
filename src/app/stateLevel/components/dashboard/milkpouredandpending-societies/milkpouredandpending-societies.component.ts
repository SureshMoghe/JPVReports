import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-milkpouredandpending-societies',
  templateUrl: './milkpouredandpending-societies.component.html',
  styleUrls: ['./milkpouredandpending-societies.component.css']
})
export class MilkpouredandpendingSocietiesComponent  implements OnInit, OnDestroy, AfterViewInit
{
  societyAbstractDetails = [];   DAYS_SINCE_LAST_DATE  : any; CURRENT_MONTH_DAYS  : any; CURRENT_FIN_YEAR_DAYS: any;
  //societycolumns = [];
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  districtList = [];
  PhaseType:any;
  phaseid: any;//  this.phaseid,
  phasename: any;// this.phasename,
  PhaseTypeList:[];
  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    MDAC_CODE: '-',
    SOCIETY_ID: '-',
    SOCIETY_NAME: 'TOTAL',
    NO_OF_FARMERS: 0,
    NO_OF_MILK_POURER_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
    TOTAL_MILK_ITR: 0,
    TOTAL_AMOUNT: 0,
    RBK_CODE: '-',   RBK_NAME:'-',   HEAD_OF_VILLAGE: '-',
  };
  excelData = [];district_Id:any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptionsaLL();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerModuleAPI: StateService,
    private utils: UtilsService,
    private farmerAPI: FarmerRegService,
    private logger: LoggerService,
    private stateAPI:StateService,
    private session: SessionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
     
   
 
    this.districtId = '';
    this.fromDate = this.session.getTodayDateString();  //getFromDateString   req for madu
    this.toDate = this.session.getTodayDateString();
    this.loadDistrictList();


    
	   
	  if (
		this.phaseid === undefined ||
		this.phaseid === '' ||
		this.phaseid === null
	  ) { 
	  this.phaseid='0';
	  this.phasename='ALL';
	  this.phasename='ALL';
	  this.phaseid='0';
	  }

    if (this.session.dashboarddistrictid !== null || this.session.dashboarddistrictid !== undefined || this.session.dashboarddistrictid === '' ) {
      this.districtId =this.session.dashboarddistrictid;
      this.district_Id=this.session.dashboarddistrictid;
    }else{this.districtId ="0";
      this.district_Id="0";}

    // tslint:disable-next-line: max-line-length
    if (this.districtId  == null || this.districtId  == undefined || this.districtId === '' ) {
      this.districtId ="0"; this.district_Id="0";
    }
    
    this.loadReport();
  }
  loadDistrictList(): void {
    this.spinner.show();
    this.farmerAPI
      .districtList()
      .then((res: any) => {
        if (res.success) {
          this.districtList = res.result;

          this.loadPhaseTypelist();
          

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

	  
  async loadPhaseTypelist(): Promise<void> {
    try { 
      const req = {
        type: '9', 
        districtId:this.district_Id,
      };
		this.PhaseTypeList=[];
		this.spinner.show();
		const res = await this.stateAPI.volunteerHHMandalReport(req);
		if (res.success) {        
			this.PhaseTypeList = res.result;
			this.PhaseType='0';
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }
  
  onReportPhaseTypeChange(): void {  debugger;
    this.phaseid=this.PhaseType; 
      let obj=document.getElementById('PhaseType');
    this.phasename=obj[this.PhaseType].innerText;
   
  }
  
  onDistrictIdChange(): void {
    this.societyAbstractDetails = [];
    this.excelData = [];
    this.loadPhaseTypelist();
  }

  btnLoadReport(): void {
    if (this.districtId === null || this.districtId === undefined) {
      this.toast.warning('Please Select District');
      return;
    }
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
      return;
    }
    this.spinner.show();
    this.loadReport();
    this.spinner.hide();
  }
  async loadReport(): Promise<void> {
    try { 
      // this.reportTotals = {
      //   S_NO: '-',
      //   DISTRICT_NAME: '-',
      //   MDAC_CODE: '-',
      //   SOCIETY_ID: '-',
      //   SOCIETY_NAME: 'TOTAL',
      //   NO_OF_FARMERS: 0,
      //   NO_OF_MILK_POURER_FARMERS: 0,
      //   TOTAL_BUFFALO_MILK_LTR: 0,
      //   TOTAL_BUFFALO_MILK_AMOUNT: 0,
      //   TOTAL_COW_MILK_LTR: 0,
      //   TOTAL_COW_MILK_AMOUNT: 0,
      //   TOTAL_MILK_ITR: 0,
      //   TOTAL_AMOUNT: 0,
      //   RBK_CODE: '-',   RBK_NAME:'-',   HEAD_OF_VILLAGE: '-',
      // };debugger;
      const req = {
         
        type:"6",
        dist_code:this.district_Id,
        from_date: this.fromDate, 

      }; 
    
      this.societyAbstractDetails = [];
      this.spinner.show(); 
     
    const res = await this.farmerModuleAPI.DayWiseMilkPouredVillagesandSocieties(req);
    this.spinner.hide(); 
      if (res.success)
       {
        // this.reportTotals = {
        //   S_NO: '-',
        //   DISTRICT_NAME: '-',
        //   MDAC_CODE: '-',
        //   SOCIETY_ID: '-',
        //   SOCIETY_NAME: 'TOTAL',
        //   NO_OF_FARMERS: 0,
        //   NO_OF_MILK_POURER_FARMERS: 0,
        //   TOTAL_BUFFALO_MILK_LTR: 0,
        //   TOTAL_BUFFALO_MILK_AMOUNT: 0,
        //   TOTAL_COW_MILK_LTR: 0,
        //   TOTAL_COW_MILK_AMOUNT: 0,
        //   TOTAL_MILK_ITR: 0,
        //   TOTAL_AMOUNT: 0,
        //   RBK_CODE: '-',   RBK_NAME:'-',   HEAD_OF_VILLAGE: '-',
        // };

        this.excelData = [];
        this.societyAbstractDetails = res.result;
        this.DAYS_SINCE_LAST_DATE  =this.societyAbstractDetails[1].DAYS_SINCE_LAST_DATE;
        this.CURRENT_MONTH_DAYS  =this.societyAbstractDetails[1].CURRENT_MONTH_DAYS;
         this.CURRENT_FIN_YEAR_DAYS =this.societyAbstractDetails[1].CURRENT_FIN_YEAR_DAYS;

          for (let i = 0; i < this.societyAbstractDetails.length; i++) 
           {

            let d=this.societyAbstractDetails[i].CURRENT_FIN_YEAR_DAYS +'_Days'; 

         
        //   this.reportTotals.NO_OF_FARMERS += parseInt(this.societyAbstractDetails[i].NO_OF_FARMERS);
         
        //   this.reportTotals.NO_OF_MILK_POURER_FARMERS += parseInt( this.societyAbstractDetails[i].NO_OF_MILK_POURER_FARMERS );
        //   this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_LTR );
        //   this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);
        //   this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(this.societyAbstractDetails[i].TOTAL_COW_MILK_LTR);
        //   this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(this.societyAbstractDetails[i].TOTAL_COW_MILK_AMOUNT);
        //   this.reportTotals.TOTAL_MILK_ITR += parseFloat(this.societyAbstractDetails[i].TOTAL_MILK_ITR);
        //   this.reportTotals.TOTAL_AMOUNT += parseFloat(this.societyAbstractDetails[i].TOTAL_AMOUNT);

          
       

           let singleRow = {
                  S_NO: i + 1,
              
                  
                  District_Name	: this.societyAbstractDetails[i].DISTRICT_NAME,
                  Mandal_Name	: this.societyAbstractDetails[i].MANDAL_NAME,
                  RBK_Name	: this.societyAbstractDetails[i].RBK_NAME,
                  Society_Code	: this.societyAbstractDetails[i].SOCIETY_CODE,
                  Society_Name	: this.societyAbstractDetails[i].SOCIETY_NAME,
                  Noof_Registered_Farmers	: this.societyAbstractDetails[i].REG_FAREMRS,
                  MilkPouring_Status_on_today   : this.societyAbstractDetails[i].CURRENT_DAY_POURING_STATUS,
                  Present_Society_Status: this.societyAbstractDetails[i].CURRENT_SOCIETY_STATUS,
                  MilkPouring_Status_after_today : this.societyAbstractDetails[i].LATER_POURING_STATUS,
                  LastMilkPoured_Date: this.societyAbstractDetails[i].LAST_POURING_DATE,
                  NoofDaysMilk_Not_PouredSince_today_In_1_Days : this.societyAbstractDetails[i].SINCE_LASTDATE_NOT_COUNT,              
                  NoofDaysMilk_Not_PouredIn_Current_Month_In_13_Days   : this.societyAbstractDetails[i].CURRENT_MONTH_NOT_COUNT,              
                  NoofDaysMilk_Not_Poured_In_Last_60_Days_AsOn_today   : this.societyAbstractDetails[i].LAST_60_DAYS_NOT_COUNT,             
                  NoofDaysMilk_Not_PouredInCurretFinancialYear_In_168_Days   : this.societyAbstractDetails[i].CURRENT_FIN_YEAR_NOT_COUNT,             
                  
                  //NoofDaysMilk_Not_PouredInCurretFinancialYear_In_+d.toString()    : this.societyAbstractDetails[i].CURRENT_FIN_YEAR_NOT_COUNT,             

                  

                  QuantityOf_MilkPouredIn_Current_Financial_Year         : this.societyAbstractDetails[i].CURRENT_FIN_YEAR_QTY,        
                  TotalMilkPoured_AmountIn_Current_Financial_Year: this.societyAbstractDetails[i].CURRENT_FIN_YEAR_AMOUNT,

           }															
                  this.excelData.push(singleRow);

                  

        //        HEAD_OF_VILLAGE: this.societyAbstractDetails[i].HEAD_OF_VILLAGE,
              
        //   };

        //   this.excelData.push(singleRow);
        // }
        // this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat( this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2) );
        // this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2) );
        // this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat( this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2) );
        // this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2) );
        // this.reportTotals.TOTAL_MILK_ITR = parseFloat( this.reportTotals.TOTAL_MILK_ITR.toFixed(2) );
        // this.reportTotals.TOTAL_AMOUNT = parseFloat( this.reportTotals.TOTAL_AMOUNT.toFixed(2) );

        //  this.excelData.push(this.reportTotals);
            
      }
        this.spinner.hide();
         this.rerender();
      } else {  
        
        // this.reportTotals = {
        //   S_NO: '-',
        //   DISTRICT_NAME: '-',
        //   MDAC_CODE: '-',
        //   SOCIETY_ID: '-',
        //   SOCIETY_NAME: 'TOTAL',
        //   NO_OF_FARMERS: 0,
        //   NO_OF_MILK_POURER_FARMERS: 0,
        //   TOTAL_BUFFALO_MILK_LTR: 0,
        //   TOTAL_BUFFALO_MILK_AMOUNT: 0,
        //   TOTAL_COW_MILK_LTR: 0,
        //   TOTAL_COW_MILK_AMOUNT: 0,
        //   TOTAL_MILK_ITR: 0,
        //   TOTAL_AMOUNT: 0,
        //   RBK_CODE: '-',   RBK_NAME:'-',   HEAD_OF_VILLAGE: '-',
        // };
        this.excelData = [];
        
              if ( this.fromDate < this.toDate) {
              this.toast.warning(res.message); this.spinner.hide();//"Please select from date  to date"
                return ;
             }

        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {


   if(this.excelData.length>0){ this.utils.JSONToCSVConvertor( this.excelData, 'Society Pending Milk Poured Society Details Report', true );   }
  
  
  }

  btntotalsocieties(): void { 
    

   // const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/DailyBargraphSocietyAbstractReport']);
  }
  btnDashboard(): void { 
    

    // const result = this.utils.encrypt(JSON.stringify(requestData));
     this.router.navigate(['/state/dashboard']);
   }

 
   btnPDF(): void {
    debugger;
    const req = {
        // districtId: this.districtId,
        // fromDate: this.fromDate,
        // toDate: this.toDate,
        dist_code: this.district_Id,
        from_date: this.fromDate,



    };
    const fileName = 'MilkCollectionDataNotReceivedSocietieReport';
    let basePDF = '';
    this.spinner.show();
    this.farmerModuleAPI
        .MilkCollectionDataNotReceivedSocietie(req)
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


  btnGetDetails(obj): void {debugger;
    const requestData = {

      SOCIETYCODE: obj.SOCIETY_CODE,
      SOCIETYNAME: obj.SOCIETY_NAME,
      fromDate: this.fromDate,
       
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
   // this.onDistrictChange.emit(encryptedString);
   //this.router.navigate(['/state/CheyuthaMandalReport'], {   queryParams: { request: result },  });
   this.router.navigate(['/state/PendingSocietiesReport'], {   queryParams: { request: encryptedString },  });


  }
}
