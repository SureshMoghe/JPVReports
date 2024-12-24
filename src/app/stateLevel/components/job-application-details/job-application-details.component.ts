import { Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../../services/state.service';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
 
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-job-application-details',
  templateUrl: './job-application-details.component.html',
  styleUrls: ['./job-application-details.component.css']
})
export class JobApplicationDetailsComponent implements OnInit {

  
  jobDetailsList = [];
  jobDetailsListA = [];
  jobDetailsListR = [];
  reportTotals = {
      S_NO: '-',
      REGISTRATION_ID: '-',
      NAME: '-',
      FATHER_OR_MOTHER_NAME: '-',
      GENDER: '-',
      DOB: '',
      EMAIL_ID: '-',
      MOBILE_NUMBER: '-'
  };
  excelData = [];
  excelDataA = [];
  excelDataR = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  showaprovedPopup=false;
  REJECTED_div=false;
  PENDING_div=false;
  reportType:any;
  APPROVED_div=false;
  IndentDashboardview=false;
  StockIncrementCounts: any = '';
  PendingList:any[]=[];
  ApprovedList:any[]=[];
  RejectList:any[]=[];
  filterdata:any[]=[];
  filterdata_one:any[]=[];
  filterdata_two:any[]=[];
 

  constructor(
      private spinner: NgxSpinnerService,
      private toast: ToasterService,
      //private vvFarmerAPI: VolunteerFarmerDataService,
      private utils: UtilsService,
      private logger: LoggerService,
      private session: SessionService,
      private stateapi: StateService,
  ) { }

  ngOnInit(): void {
      debugger;
     // this.loadReport();
     this.loadCountsDetails();
     this.btnDashboardDetails('1');
  }
  reportTotalsA = {
    S_NO: '-',
    REGISTRATION_ID: '-',
    NAME: '-',
    FATHER_OR_MOTHER_NAME: '-',
    GENDER: '-',
    DOB: '',
    EMAIL_ID: '-',
    MOBILE_NUMBER: '-'
};
  reportTotalsR = {
    S_NO: '-',
    REGISTRATION_ID: '-',
    NAME: '-',
    FATHER_OR_MOTHER_NAME: '-',
    GENDER: '-',
    DOB: '',
    EMAIL_ID: '-',
    MOBILE_NUMBER: '-'
};

  async loadCountsDetails(): Promise<void> {
    try {  
      this.spinner.show();    
      const req = {
        type: "30",
        
      }
      
      const response = await this.stateapi.NotificationsForJobDetails(req);    
      debugger;
            if (response.success) {
        this.spinner.hide();
        this.StockIncrementCounts = response.result[0];
        this.IndentDashboardview=true;
        
      } else {
        this.toast.info(response.message);
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  async loadReport(obj:any): Promise<void> {
      try {

          this.reportTotals = {
              S_NO: '-',
              REGISTRATION_ID: '-',
              NAME: '-',
              FATHER_OR_MOTHER_NAME: '-',
              GENDER: '-',
              DOB: '',
              EMAIL_ID: '-',
              MOBILE_NUMBER: '-'
          };
          this.reportTotalsA = {
            S_NO: '-',
            REGISTRATION_ID: '-',
            NAME: '-',
            FATHER_OR_MOTHER_NAME: '-',
            GENDER: '-',
            DOB: '',
            EMAIL_ID: '-',
            MOBILE_NUMBER: '-'
        };
          this.reportTotalsR = {
            S_NO: '-',
            REGISTRATION_ID: '-',
            NAME: '-',
            FATHER_OR_MOTHER_NAME: '-',
            GENDER: '-',
            DOB: '',
            EMAIL_ID: '-',
            MOBILE_NUMBER: '-'
        };
          const req = {
              type: "31",
              MASTER_ID: obj
          };
          
          this.spinner.show();
          const res = await this.stateapi.NotificationsForJobDetails(req);
          console.log(res);
                    if (res.success) {
                      this.jobDetailsList=[];
                      this.jobDetailsListA=[];
                      this.jobDetailsListR=[];
                      this.excelData=[];
                      if(obj=="0" && res.result!=""){

                        
                        
                                               this.PENDING_div=true;
                                               this.APPROVED_div=false;
                                               this.REJECTED_div=false;
                                               this.jobDetailsList = res.result;
                                               this.filterdata=this.jobDetailsList;
                                              
                      }
                      if(obj=="1" && res.result!=""){
                         
                        
                        this.PENDING_div=false;
                        this.APPROVED_div=true;
                        this.REJECTED_div=false;
                        this.jobDetailsListA = res.result;
                         this.filterdata_one=this.jobDetailsListA;
                       
                      }
                      if(obj=="2" && res.result!=""){
                         
                        
                        this.PENDING_div=false;
                        this.APPROVED_div=false;
                        this.REJECTED_div=true;
                        this.jobDetailsListR = res.result;
                         this.filterdata_two=this.jobDetailsListR;
                        
                      }

                      for (let i = 0; i < this.jobDetailsList.length; i++) {
                        const singleRow = {
                           S_NO: i + 1,
                           REGISTRATION_ID: this.jobDetailsList[i].REGISTRATION_ID,
                           NAME: this.jobDetailsList[i].NAME,
                           FATHER_OR_MOTHER_NAME: this.jobDetailsList[i].FATHER_OR_MOTHER_NAME,
                           GENDER: this.jobDetailsList[i].GENDER,
                           DOB: this.jobDetailsList[i].DATE_OF_BIRTH_SCC,
                           EMAIL_ID: this.jobDetailsList[i].EMAIL_ID,
                           MOBILE_NUMBER: this.jobDetailsList[i].MOBILE_NUMBER,
                            
              
                           };
                         this.excelData.push(singleRow);
                       }
                       this.excelData.push(this.reportTotals);

                      for (let i = 0; i < this.jobDetailsListR.length; i++) {
                                                 

                        const singleRow = {
                          S_NO: i + 1,
                          REGISTRATION_ID: this.jobDetailsListR[i].REGISTRATION_ID,
                          NAME: this.jobDetailsListR[i].NAME,
                          FATHER_OR_MOTHER_NAME: this.jobDetailsListR[i].FATHER_OR_MOTHER_NAME,
                          GENDER: this.jobDetailsListR[i].GENDER,
                          DOB: this.jobDetailsListR[i].DATE_OF_BIRTH_SCC,
                          EMAIL_ID: this.jobDetailsListR[i].EMAIL_ID,
                          MOBILE_NUMBER: this.jobDetailsListR[i].MOBILE_NUMBER,
                           
             
                          };
                        this.excelDataR.push(singleRow);
                      }
                      this.excelDataR.push(this.reportTotalsR);

                       for (let i = 0; i < this.jobDetailsListA.length; i++) {
                                                 

                        const singleRow = {
                          S_NO: i + 1,
                          REGISTRATION_ID: this.jobDetailsListA[i].REGISTRATION_ID,
                          NAME: this.jobDetailsListA[i].NAME,
                          FATHER_OR_MOTHER_NAME: this.jobDetailsListA[i].FATHER_OR_MOTHER_NAME,
                          GENDER: this.jobDetailsListA[i].GENDER,
                          DOB: this.jobDetailsListA[i].DATE_OF_BIRTH_SCC,
                          EMAIL_ID: this.jobDetailsListA[i].EMAIL_ID,
                          MOBILE_NUMBER: this.jobDetailsListA[i].MOBILE_NUMBER,
                           
             
                          };
                        this.excelDataA.push(singleRow);
                      }
                      this.excelDataA.push(this.reportTotalsA);
               
              


               
          } else {
               
              this.toast.info(res.message);
          }
         // this.rerender();
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }
  }

  btnExcel(): void {
      this.utils.JSONToCSVConvertor(
          this.excelData,
          'Job Details Report Pending Records',
          true
      );
  }
  btnExcelone(): void {
      this.utils.JSONToCSVConvertor(
          this.excelDataA,
          'Job Details Report Approved Records',
          true
      );
  }
  btnExceltwo(): void {
      this.utils.JSONToCSVConvertor(
          this.excelDataR,
          'Job Details Report Reject Records',
          true
      );
  }

  btnDashboardDetails(id:any): void {
    debugger;
    this.REJECTED_div =false;

    this.reportType = id;
    if (id === '1') 
    {  

    this.PENDING_div =true;
    this.APPROVED_div =false;
    this.REJECTED_div =false;
    this.loadReport("0");

    } else if (id === '2') {
      this.PENDING_div =false;
      this.APPROVED_div =true;
      this.REJECTED_div =false;

       this.loadReport("1");
      
    }else if (id === '3') {
      this.REJECTED_div =true;
      this.PENDING_div =false;
      this.APPROVED_div =false;
      
      this.loadReport("2");
     
       
    }

   
    
  } 
  
  message="";
  Remarks="";
  StockpointName='';
  Indentquantity='';
  onClear(){
    this.showaprovedPopup=false;
    this.message="";
    this.Remarks="";
    this.StockpointName='';
    this.Indentquantity='';
  }

  async btnPdfView(pdf): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(pdf);
      if (res.success) {
        this.utils.viewPDF(res.result);
        // let signedByPdf = 'data:application/pdf, ' + res.result;
        // window.open(signedByPdf, '_blank');
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  UNIQUEID:any;
  name:any;
  Registration:any;
  statuscode:any;

  btnUpdateDetails(obj:any){
    this.UNIQUEID=obj.UNIQUEID;
    this.name=obj.NAME;
    this.Registration=obj.REGISTRATION_ID
    this.statuscode="1";
    this.message="APPROVE";
    this.Remarks="Approved.";
this.showaprovedPopup=true;
  }

  btnRejectDetails(obj:any){
    
    this.message="REJECT";
    this.UNIQUEID=obj.UNIQUEID;
    this.name=obj.NAME;
    this.Registration=obj.REGISTRATION_ID
    this.statuscode="2";
    this.Remarks="Rejected."
this.showaprovedPopup=true;

  }

  async btnSubmitDetails(): Promise<void> {
    try {  

      if(this.Remarks=="" || this.Remarks==undefined || this.Remarks==null)
      {
        this.toast.info("Please Enter Remarks");
        return;
      }

      this.spinner.show();    
      const req = {
              type: "25",
              UNIQUE_ID:this.Registration,
              STATUS:this.statuscode

          };
          
          this.spinner.show();
          const res = await this.stateapi.NotificationsForJobDetails(req);
 debugger;
            if (res.success) {

              if(res.result[0].STATUS!="0")
              {

             
              if(this.statuscode=="1")
              {
                this.spinner.hide();
this.showaprovedPopup=false; 
this.toast.success("Details Approved Successfully ... !");
this.loadReport("0");
return;

              }
              
              if(this.statuscode=="2")
              {
                this.spinner.hide();
                this.showaprovedPopup=false;
                
                this.toast.success(" Details Reject Successfully ... !");
                this.loadReport("0");
                return;
              }
            }
            else{
              this.toast.info("Data Not Submitted Please Try Again  ...!");
              this.spinner.hide();
            }

           
       
        
      } else {
        this.toast.info(res.message);
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  // async btnPdfView(pdf): Promise<void> {
  //   try {
  //     this.spinner.show();
  //     const res = await this.utils.viewPDF(pdf);

  //    // this.utils.downloadPdfFile(res.result,pdf);
  //     // if (res.success) {
  //     //   this.utils.downloadPdfFile(res.result,pdf);
  //     //  // this.utils.viewPDF(res.result);
  //     //   // let signedByPdf = 'data:application/pdf, ' + res.result;
  //     //   // window.open(signedByPdf, '_blank');
  //     // } else {
  //     //   this.toast.info(res.message);
  //     // }
  //     this.spinner.hide();
  //   } catch (error) {
  //     this.spinner.hide();
  //     this.utils.catchResponse(error);
  //   }
  // }

  // async btnPDF(): Promise<void> {
  //     try {
  //         const req = {
  //             fromDate: this.fromDate,
  //             toDate: this.toDate, uidNumber: this.session.districtId,
  //         };
  //         const fileName = 'Society Monitoring Report';
  //         let basePDF = '';
  //         this.spinner.show();
  //         const res = await this.vvFarmerAPI.vvFarmerDataStatePDFReport(req);
  //         if (res.success) {
  //             basePDF = res.result;
  //             this.utils.downloadPdfFile(basePDF, fileName);
  //         } else {
  //             this.toast.info(res.message);
  //         }
  //         this.spinner.hide();
  //     } catch (error) {
  //         this.spinner.hide();
  //         this.utils.catchResponse(error);
  //     }
  // }
  searchQuery:any;
  searchQuery_one:any;
  searchQuery_two:any;

  applyFilter() {  
    this.filterdata = this.jobDetailsList.filter((item:any) =>
        { 
      for (const key in item) {
        if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery.toLowerCase())) {
          return true;
        }
      }
      return false;
        });
  
     }

     applyFilterone() {  
      this.filterdata_one = this.jobDetailsListA.filter((item:any) =>
          { 
        for (const key in item) {
          if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery_one.toLowerCase())) {
            return true;
          }
        }
        return false;
          });
    
       }
     applyFiltertwo() {  
      this.filterdata_two = this.jobDetailsListR.filter((item:any) =>
          { 
        for (const key in item) {
          if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery_two.toLowerCase())) {
            return true;
          }
        }
        return false;
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




}
