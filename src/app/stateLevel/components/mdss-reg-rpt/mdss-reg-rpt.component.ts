
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-mdss-reg-rpt',
  templateUrl: './mdss-reg-rpt.component.html',
  styleUrls: ['./mdss-reg-rpt.component.css']
})
export class MdssRegRptComponent implements OnInit, OnDestroy, AfterViewInit  {

  constructor(private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private logger: LoggerService,
    private dashboardAPI: DashboardService,
    private session: SessionService,
    private districtlistapi: FarmerRegService,
    private passwordResetAPI: StateService,
    private  MDSSDetails:CheyuthaGroundingService,
    private stateAPI: StateService,
    private router: Router) { }

    statediv=true;
    distctdiv=false;
    routediv=false;

    CommonList: any[] = [];
    CommonExcelData: any[] = [];


    MdssRegGetData=[];
    MdssRegGetDatadist=[];
    MdssRegGetDataroute=[];
    
    MdssRegTotal={
      S_NO: '-',
      DISTRICT:'Total', 
                            
      NO_OF_ROUTES :0,
      ELIGIBLE_RBKS :0,
      SCHEDULED_RBKS :0,
      MEETING_RBKS :0,        
      DOC_UPLOADED_RBKS :0,
      SUBMITTED_RBKS :0,
      REJECTED_RBKS :0,
      PENDING_RBKS_DLCO :0,          
      PENDING_RBKS_DCO :0,
      PENDING_RBKS_GM :0,
      PENDING_RBKS_COMM :0,
      REGISTERED_RBKS :0
      // TOTAL_SUBMITED_BANK_DETAILS:0,
      // TOTAL_APPROVED_BANK_DETAILS:0
    };

    MdssRegTotaldist={
      S_NO: '-',
      DISTRICT:'Total',                             
      ROUTE_NO :'-',
      ELIGIBLE_RBKS :0,
      SCHEDULED_RBKS :0,
      MEETING_RBKS :0,        
      DOC_UPLOADED_RBKS :0,
      SUBMITTED_RBKS :0,
      REJECTED_RBKS :0,
      PENDING_RBKS_DLCO :0,          
      PENDING_RBKS_DCO :0,
      PENDING_RBKS_GM :0,
      PENDING_RBKS_COMM :0,
      REGISTERED_RBKS :0
    };

    MdssRegTotalroute={
      S_NO: '-',
      DISTRICT:'Total',                             
      RBK_CODE :'-',
      RBK_NAME :'-',
      SCHEDULE_STATUS :'-',
      SCHEDULE_CREATED_DATE :'-',        
      MEETING_DATE :'-',
      MEETING_STATUS :'-',
      RIC_FINAL_STATUS :'-',
      // FINAL_STATUS :0,          
      
    };
    
    excelDataDetails = [];
    excelDataDetailsdist = [];
    excelDataDetailsroute=[];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
  
      dtOptions: DataTables.Settings = this.utils.dataTableOptionsaLL();
      dtTrigger: Subject<any> = new Subject();

      
    DIST_CODE:any;
    DISTRICT:any;


  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 1000,
    // };
    this.loadreport();

  }


  async loadreport():Promise<void>{

   this. statediv=true;
    this.distctdiv=false;
    this.routediv=false;
    this.MdssRegTotal={
      S_NO: '-',
      DISTRICT:'Total',                             
      NO_OF_ROUTES :0,
      ELIGIBLE_RBKS :0,
      SCHEDULED_RBKS :0,
      MEETING_RBKS :0,        
      DOC_UPLOADED_RBKS :0,
      SUBMITTED_RBKS :0,
      REJECTED_RBKS :0,
      PENDING_RBKS_DLCO :0,          
      PENDING_RBKS_DCO :0,
      PENDING_RBKS_GM :0,
      PENDING_RBKS_COMM :0,
      REGISTERED_RBKS :0
      // TOTAL_SUBMITED_BANK_DETAILS:0,
      // TOTAL_APPROVED_BANK_DETAILS:0
    };
      const req = {
         TYPE:"1" 
         };
    const res = await this.stateAPI.MSSReportGetDetails(req);
      if (res.success) {
       
        this.excelDataDetails = [];
        this.MdssRegGetData=res.result;
        this.rerender(); 
        this.spinner.hide();
        for (let i = 0; i < this.MdssRegGetData.length; i++) {
          // tslint:disable-next-line: radix
          this.MdssRegTotal.NO_OF_ROUTES += parseInt(
            this.MdssRegGetData[i].NO_OF_ROUTES
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.ELIGIBLE_RBKS += parseFloat(
            this.MdssRegGetData[i].ELIGIBLE_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.SCHEDULED_RBKS += parseFloat(
            this.MdssRegGetData[i].SCHEDULED_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.MEETING_RBKS += parseFloat(
            this.MdssRegGetData[i].MEETING_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.DOC_UPLOADED_RBKS += parseFloat(
            this.MdssRegGetData[i].DOC_UPLOADED_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.SUBMITTED_RBKS += parseInt(
            this.MdssRegGetData[i].SUBMITTED_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.REJECTED_RBKS += parseInt(
            this.MdssRegGetData[i].REJECTED_RBKS
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.PENDING_RBKS_DLCO += parseFloat(
            this.MdssRegGetData[i].PENDING_RBKS_DLCO
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.PENDING_RBKS_DCO += parseFloat(
            this.MdssRegGetData[i].PENDING_RBKS_DCO
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.PENDING_RBKS_GM += parseInt(
            this.MdssRegGetData[i].PENDING_RBKS_GM
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.PENDING_RBKS_COMM += parseInt(
            this.MdssRegGetData[i].PENDING_RBKS_COMM
          );
          // tslint:disable-next-line: radix
          this.MdssRegTotal.REGISTERED_RBKS += parseInt(
            this.MdssRegGetData[i].REGISTERED_RBKS
          );
          
          // this.MdssRegTotal.TOTAL_SUBMITED_BANK_DETAILS += parseInt(
          //   this.MdssRegGetData[i].TOTAL_SUBMITED_BANK_DETAILS
          // );
          // this.MdssRegTotal.TOTAL_APPROVED_BANK_DETAILS += parseInt(
          //   this.MdssRegGetData[i].TOTAL_APPROVED_BANK_DETAILS
          // );
       
      

          let singleRow = {
            S_NO: i + 1,
            DISTRICT:this.MdssRegGetData[i].DISTRICT,
            NO_OF_ROUTES: this.MdssRegGetData[i].NO_OF_ROUTES,
            ELIGIBLE_RBKS: this.MdssRegGetData[i].ELIGIBLE_RBKS,
            SCHEDULED_RBKS: this.MdssRegGetData[i].SCHEDULED_RBKS,
            MEETING_RBKS: this.MdssRegGetData[i].MEETING_RBKS,
            DOC_UPLOADED_RBKS: this.MdssRegGetData[i].DOC_UPLOADED_RBKS,
            SUBMITTED_RBKS: this.MdssRegGetData[i].SUBMITTED_RBKS,
            REJECTED_RBKS: this.MdssRegGetData[i].REJECTED_RBKS,
            PENDING_RBKS_DLCO: this.MdssRegGetData[i].PENDING_RBKS_DLCO,
            PENDING_RBKS_DCO: this.MdssRegGetData[i].PENDING_RBKS_DCO,
            PENDING_RBKS_GM: this.MdssRegGetData[i].PENDING_RBKS_GM,
            PENDING_RBKS_COMM: this.MdssRegGetData[i].PENDING_RBKS_COMM,
            REGISTERED_RBKS: this.MdssRegGetData[i].REGISTERED_RBKS,
            // TOTAL_SUBMITED_BANK_DETAILS: this.MdssRegGetData[i].TOTAL_SUBMITED_BANK_DETAILS,
            // TOTAL_APPROVED_BANK_DETAILS: this.MdssRegGetData[i].TOTAL_APPROVED_BANK_DETAILS,

          };

           this.excelDataDetails.push(singleRow);
          
        }
       
      
        this.excelDataDetails.push(this.MdssRegTotal);
         
      } else {
        this.toast.info(res.message);
        this.spinner.hide();
      }
      this.spinner.hide();
        

    }
    districtid:any;
    ROUTE_NO:any;

    async loadreportdistrict():Promise<void>{

      this. statediv=false;
    this.distctdiv=true;
    this.routediv=false;
      this.MdssRegTotaldist={
        S_NO: '-',
        DISTRICT:'Total',                             
        ROUTE_NO :'-',
        ELIGIBLE_RBKS :0,
        SCHEDULED_RBKS :0,
        MEETING_RBKS :0,        
        DOC_UPLOADED_RBKS :0,
        SUBMITTED_RBKS :0,
        REJECTED_RBKS :0,
        PENDING_RBKS_DLCO :0,          
        PENDING_RBKS_DCO :0,
        PENDING_RBKS_GM :0,
        PENDING_RBKS_COMM :0,
        REGISTERED_RBKS :0
      };
        const req = {
           TYPE:"2",
           DIST:this.districtid, 
           };
       
        const res = await this.stateAPI.MSSReportGetDetails(req);
        if (res.success) {   
          this.excelDataDetailsdist = [];
          this.MdssRegGetDatadist=res.result;
          this.rerender(); 
          this.spinner.hide();
          for (let i = 0; i < this.MdssRegGetDatadist.length; i++) {
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.ELIGIBLE_RBKS += parseFloat(
              this.MdssRegGetDatadist[i].ELIGIBLE_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.SCHEDULED_RBKS += parseFloat(
              this.MdssRegGetDatadist[i].SCHEDULED_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.MEETING_RBKS += parseFloat(
              this.MdssRegGetDatadist[i].MEETING_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.DOC_UPLOADED_RBKS += parseFloat(
              this.MdssRegGetDatadist[i].DOC_UPLOADED_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.SUBMITTED_RBKS += parseInt(
              this.MdssRegGetDatadist[i].SUBMITTED_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.REJECTED_RBKS += parseInt(
              this.MdssRegGetDatadist[i].REJECTED_RBKS
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.PENDING_RBKS_DLCO += parseFloat(
              this.MdssRegGetDatadist[i].PENDING_RBKS_DLCO
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.PENDING_RBKS_DCO += parseFloat(
              this.MdssRegGetDatadist[i].PENDING_RBKS_DCO
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.PENDING_RBKS_GM += parseInt(
              this.MdssRegGetDatadist[i].PENDING_RBKS_GM
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.PENDING_RBKS_COMM += parseInt(
              this.MdssRegGetDatadist[i].PENDING_RBKS_COMM
            );
            // tslint:disable-next-line: radix
            this.MdssRegTotaldist.REGISTERED_RBKS += parseInt(
              this.MdssRegGetDatadist[i].REGISTERED_RBKS
            );
            let singleRow = {
              S_NO: i + 1,
              DISTRICT:this.MdssRegGetDatadist[i].DISTRICT,
              ROUTE_NAME: this.MdssRegGetDatadist[i].ROUTE_NO,
              ELIGIBLE_RBKS: this.MdssRegGetDatadist[i].ELIGIBLE_RBKS,
              SCHEDULED_RBKS: this.MdssRegGetDatadist[i].SCHEDULED_RBKS,
              MEETING_RBKS: this.MdssRegGetDatadist[i].MEETING_RBKS,
              DOC_UPLOADED_RBKS: this.MdssRegGetDatadist[i].DOC_UPLOADED_RBKS,
              SUBMITTED_RBKS: this.MdssRegGetDatadist[i].SUBMITTED_RBKS,
              REJECTED_RBKS: this.MdssRegGetDatadist[i].REJECTED_RBKS,
              PENDING_RBKS_DLCO: this.MdssRegGetDatadist[i].PENDING_RBKS_DLCO,
              PENDING_RBKS_DCO: this.MdssRegGetDatadist[i].PENDING_RBKS_DCO,
              PENDING_RBKS_GM: this.MdssRegGetDatadist[i].PENDING_RBKS_GM,
              PENDING_RBKS_COMM: this.MdssRegGetDatadist[i].PENDING_RBKS_COMM,
              REGISTERED_RBKS: this.MdssRegGetDatadist[i].REGISTERED_RBKS,
              
            };
  
             this.excelDataDetailsdist.push(singleRow);
            
          }
         
        
          this.excelDataDetailsdist.push(this.MdssRegTotaldist);
           
        } else {
          this.toast.info(res.message);
          this.spinner.hide();
        }
        this.spinner.hide();
          
  
      }

      async loadreportroute():Promise<void>{
       this. MdssRegTotalroute={
          S_NO: '-',
          DISTRICT:'Total',                             
          RBK_CODE :'-',
          RBK_NAME :'-',
          SCHEDULE_STATUS :'-',
          SCHEDULE_CREATED_DATE :'-',        
          MEETING_DATE :'-',
          MEETING_STATUS :'-',
          RIC_FINAL_STATUS :'-',
          // FINAL_STATUS :0,          
          
        };
          const req = {
             TYPE:"3",
             DIST:this.districtid,
             ROUTE:this.ROUTE_NAME,
             };
          const res = await this.stateAPI.MSSReportGetDetails(req);
          if (res.success) {
            this.excelDataDetailsroute = [];
            this.MdssRegGetDataroute = res.result;
            for (let i = 0; i < this.MdssRegGetDataroute.length; i++) {      
          
              let singleRow = {
                S_NO: i + 1,
                DISTRICT_NAME:this.MdssRegGetDataroute[i].DISTRICT_NAME,
                RBK_CODE: this.MdssRegGetDataroute[i].RBK_CODE,
                RBK_NAME: this.MdssRegGetDataroute[i].RBK_NAME,
                SCHEDULE_STATUS: this.MdssRegGetDataroute[i].SCHEDULE_STATUS,
                SCHEDULE_CREATED_DATE: this.MdssRegGetDataroute[i].SCHEDULE_CREATED_DATE,
                MEETING_DATE: this.MdssRegGetDataroute[i].MEETING_DATE,
                MEETING_STATUS: this.MdssRegGetDataroute[i].MEETING_STATUS,
                RIC_FINAL_STATUS: this.MdssRegGetDataroute[i].RIC_FINAL_STATUS,
                // FINAL_STATUS: this.MdssRegGetDataroute[i].FINAL_STATUS,
               
                
              };
    
               this.excelDataDetailsroute.push(singleRow);
              
            }
           
          
            this.excelDataDetailsroute.push(this.MdssRegTotalroute);
             
          } else {
            this.toast.info(res.message);
            this.spinner.hide();
          }
          this.spinner.hide();
            
    
        }
      DIST:any;

     btnDistrictDetails(obj): void{

      this.DIST=obj.DIST_CODE;
      this.districtid=this.DIST;
      this.DISTRICT=obj.DISTRICT;
      this.loadreportdistrict();
      this.distctdiv=true;
      this.statediv=false;
      this.routediv=false;

    }
    ROUTE:any;
    ROUTE_NAME;

    btnrouteDetails(obj): void{

      this.DIST=obj.DIST_CODE;
      this.districtid=this.DIST;
      this.DISTRICT=obj.DISTRICT;
      this.ROUTE=obj.ROUTE_NO;
      this.ROUTE_NAME=this.ROUTE;
      this.loadreportroute();
      this.routediv=true;
      this.distctdiv=false;
      this.statediv=false;


    }

    async RegisteredRBKsTotal(): Promise<void> {
      try {
          this.CommonList = [];
          this.CommonExcelData = [];
          const req = {
              type: "121"
          }
          this.spinner.show();
          debugger;
          const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
          if (res.success) {
              this.CommonList = [];
              this.CommonExcelData = [];
              this.spinner.hide();
              this.CommonList = res.result;

              for (var i = 0; i < this.CommonList.length; i++) {
                  let singleRow =
                  {
                      S_NO: i + 1,
                      DISTRICT: this.CommonList[i].DISTRICT,
                      FILE_NUMBER: this.CommonList[i].FILE_NUMBER,
                      MDSS_NAME: this.CommonList[i].MDSS_NAME,
                      REGISTRATION_NO: this.CommonList[i].REGISTRATION_NO,
                      DATE_OF_REGISTRATION: this.CommonList[i].DATE_OF_REGISTRATION,
                      NUMBER_OF_PROMOTERS: this.CommonList[i].NUMBER_OF_PROMOTERS,
                      SHARE_CAPITAL: this.CommonList[i].SHARE_CAPITAL,
                      ADMISSION_FEE: this.CommonList[i].ADMISSION_FEE,
                      CHEIF_PROMOTER: this.CommonList[i].CHEIF_PROMOTER,
                      MOBILE_NUMBER: this.CommonList[i].MOBILE_NUMBER,
                      ADDRESS_OF_THE_SOCIETY: this.CommonList[i].ADDRESS_OF_THE_SOCIETY,
                      HEAD_QUARTERSOF_THESOCIETY: this.CommonList[i].HEAD_QUARTERSOF_THESOCIETY,
                      AREA_OF_OPERATION_THE_SOCIETY: this.CommonList[i].AREA_OF_OPERATION_THE_SOCIETY,
                      DATE_OF_STARTING: this.CommonList[i].DATE_OF_STARTING,
                      REMARKS: this.CommonList[i].REMARKS,
                      SIGNATURE_OF_THE_GM: this.CommonList[i].SIGNATURE_OF_THE_GM,
                      SIGNATURE_OF_THE_COMMISSIONER: this.CommonList[i].SIGNATURE_OF_THE_COMMISSIONER


                  }
                  this.CommonExcelData.push(singleRow);
              }

              this.utils.JSONToCSVConvertor(
                  this.CommonExcelData,
                  'MDSS Registered RBKs Total Counts Report ' + this.session.dpTodayDate,
                  true
              );

          }
          else {
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
        this.excelDataDetails,
        'MDSS FARMER REGISTRATION  Report',
        true
      );
    }


    btndistExcel(): void {
      this.utils.JSONToCSVConvertor(
        this.excelDataDetailsdist,
        'MDSS District WISE FARMER REGISTRATION  Report',
        true
      );
    }

    btnrouteExcel(): void {
      this.utils.JSONToCSVConvertor(
        this.excelDataDetailsroute,
        'MDSS ROUTE WISE FARMER REGISTRATION  Report',
        true
      );
    }

    btnback():void{
      this.spinner.show();
      this.statediv=true;
      this. distctdiv=false;
      this.routediv=false;                        
      this.spinner.hide();
          
    }

    btnbackdist():void{
      this.spinner.show();
      this.statediv=false;
      this. distctdiv=true;
      this.routediv=false;                        
      this.spinner.hide();
          
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