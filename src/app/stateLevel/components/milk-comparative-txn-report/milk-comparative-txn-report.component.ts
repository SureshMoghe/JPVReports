import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VolunteerFarmerDataService } from 'src/app/volunteerFarmerDataModule/services/volunteer-farmer-data.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-milk-comparative-txn-report',
  templateUrl: './milk-comparative-txn-report.component.html',
  styleUrls: ['./milk-comparative-txn-report.component.css']
})
export class MilkComparativeTxnReportComponent implements OnInit {

  fromDate: any;
  toDate: any;
  DistType: any;
  unionid :any; 
  unionname: any; 
  districtId: any; 
  //unionname: any; 
  UNIONLIST: [];
  DISTRICTLIST: [];
 
    UnionTransactionList = [];
    reportTotals = {
        S_NO: '-', 
        DATE:'TOTAL',
        District_Name:'-',  
        Field: 0,
        Amcs: 0,
        APDDCFL: 0,
        Field_Amcs: 0,
        Amcs_APDDCFL: 0,
        Field_APDDCFL:0, 
    };
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private vvFarmerAPI: VolunteerFarmerDataService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private OfficeModuleAPI: StateService,       
    ) { }

    ngOnInit(): void {
        debugger;

        this.fromDate = this.session.getTodayDateString();
        this.toDate = this.session.getTodayDateString();
        this.districtId="0";  
        this.loadUnions();  
        
    }

    async loadUnions(): Promise<void> {
      try {
        const req ={
          type: "9",
        };debugger;
          this.UNIONLIST = [];
          this.spinner.show();
       
          const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
          if (res.success) {
              this.UNIONLIST = res.result;              
              this.spinner.hide();
              
          }   
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
      }
  }
  async onUnionChange(): Promise<void> {
    try {
      if(this.unionid==undefined || this.unionid==="" ||  this.unionid===null)
    {
this.toast.warning("Select Union "); return;
      }

      const req ={
        type: "10",
        union_id:this.unionid,
      };debugger;
        this.DISTRICTLIST = [];
        this.spinner.show();
     
        const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
        if (res.success) {
            this.DISTRICTLIST = res.result; 
            this.districtId="0";             
            this.spinner.hide();
            
        }   
        this.spinner.hide();
    } catch (error) {
        this.spinner.hide();
    }
}


    async btnLoadReport(): Promise<void> {   
        debugger;  
        try { 
          
          if(this.unionid==undefined || this.unionid==="" ||  this.unionid===null)
    {
this.toast.warning("Select Union "); return;
      }
  //    else if(this.districtId==undefined || this.districtId==="" ||  this.districtId===null)
  //     {
  // this.toast.warning("Select District "); return;
  //       }

        else if(this.fromDate==undefined || this.fromDate==="" ||  this.fromDate===null)
        {
    this.toast.warning("Select From Date "); return;
          }

          else if(this.toDate==undefined || this.toDate==="" ||  this.toDate===null)
          {
      this.toast.warning("Select To Date "); return;
            }

                this.reportTotals = {
                  S_NO: '-', 
                  DATE:'TOTAL',
                  District_Name:'-',  
                  Field: 0,
                  Amcs: 0,
                  APDDCFL: 0,
                  Field_Amcs: 0,
                  Amcs_APDDCFL: 0,
                  Field_APDDCFL:0, 
                };
                const req = {
                    type: "11",
                    from_date: this.fromDate,
                    to_date: this.toDate,
                    union_id:this.unionid,
                    district_id:this.districtId

                };
                this.UnionTransactionList=[];
                console.log(req); debugger;
                this.spinner.show();
                const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
                if(res.result.length!=0){
                if (res.success) { 
                    this.excelData = [];
                    this.UnionTransactionList = res.result; 
                    for (let i = 0; i < this.UnionTransactionList.length; i++) {
                        this.reportTotals.Field += parseFloat(this.UnionTransactionList[i].FIELD);
                        this.reportTotals.Amcs += parseFloat(this.UnionTransactionList[i].AMCUS);
                        this.reportTotals.APDDCFL += parseFloat(this.UnionTransactionList[i].APDDCF);
                        this.reportTotals.Field_Amcs += parseFloat(this.UnionTransactionList[i].FIELD_AMCUS);
                        this.reportTotals.Amcs_APDDCFL += parseFloat(this.UnionTransactionList[i].AMCUS_APDDCF);
                        this.reportTotals.Field_APDDCFL += parseFloat(this.UnionTransactionList[i].FIELD_APDDCF); 

                        let singleRow = {
                          S_NO: i + 1,
                            DATE: this.UnionTransactionList[i].TDATE,
                            District_Name: this.UnionTransactionList[i].DISTRICT,
                            Field: this.UnionTransactionList[i].FIELD,
                            Amcs: this.UnionTransactionList[i].AMCUS,
                            APDDCFL: this.UnionTransactionList[i].APDDCF,
                            Field_Amcs: this.UnionTransactionList[i].FIELD_AMCUS,
                            Amcs_APDDCFL: this.UnionTransactionList[i].AMCUS_APDDCF,
                            Field_APDDCFL: this.UnionTransactionList[i].FIELD_APDDCF, 
                        }
                        this.excelData.push(singleRow);
    
                    }
                        this.reportTotals.Field = parseFloat(
                        this.reportTotals.Field.toFixed(2)
                        );
                        this.reportTotals.Amcs = parseFloat(
                        this.reportTotals.Amcs.toFixed(2)
                        );
                        this.reportTotals.APDDCFL = parseFloat(
                        this.reportTotals.APDDCFL.toFixed(2)
                        );
                        this.reportTotals.Field_Amcs = parseFloat(
                        this.reportTotals.Field_Amcs.toFixed(2)
                        );
                        this.reportTotals.Amcs_APDDCFL = parseFloat(
                        this.reportTotals.Amcs_APDDCFL.toFixed(2)
                        );
                        this.reportTotals.Field_APDDCFL = parseFloat(
                        this.reportTotals.Field_APDDCFL.toFixed(2)
                        );
                    this.excelData.push(this.reportTotals);
                } else {  
                    this.toast.info(res.message);
                }
              }
              else{
                this.UnionTransactionList=[];
                this.excelData=[];
                this.toast.info("No Data Available to Show !!!");
              }
                
            this.rerender();
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Comparative Report on Milk Transaction Data',
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
