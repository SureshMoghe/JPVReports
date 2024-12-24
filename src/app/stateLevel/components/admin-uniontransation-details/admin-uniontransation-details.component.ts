import { Component, EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { VolunteerFarmerDataService } from 'src/app/volunteerFarmerDataModule/services/volunteer-farmer-data.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';

@Component({
  selector: 'app-admin-uniontransation-details',
  templateUrl: './admin-uniontransation-details.component.html',
  styleUrls: ['./admin-uniontransation-details.component.css']
})
export class AdminUniontransationDetailsComponent implements OnInit {

  fromDate: any;
  toDate: any;
  DistType: any;
  unionid :any; 
  unionname: any; 
  UNIONLIST: [];
 
    UnionTransactionList = [];
    reportTotals = {
        S_NO: '-', 
        DATE: '-',
        UNION_NAME: 'TOTAL',
        NO_OF_SOCIETIES: 0,
        NO_OF_FARMERS: 0,
        NO_OF_TRANSACTIONS: 0,
        TOTAL_LITRES: 0,
        TOTAL_AMOUNT: 0,
        EX_1:0,
        EX_2:0
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
        this.onUnionChange();  
        this.unionid = '0';
        this.btnLoadReport();
    }

    async onUnionChange(): Promise<void> {
      try {
        const req ={
          "type":"1",
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


    async btnLoadReport(): Promise<void> {   
        debugger;  
        try {

            // if( this.unionid =="" ||this.unionid ==null||this.unionid ==undefined){
            //     this.toast.info("Please Select Union");
            //   }
             // else{
                this.reportTotals = {
                    S_NO: '-', 
                    DATE: '-',
                    UNION_NAME: 'TOTAL',
                    NO_OF_SOCIETIES: 0,
                    NO_OF_FARMERS: 0,
                    NO_OF_TRANSACTIONS: 0,
                    TOTAL_LITRES: 0,
                    TOTAL_AMOUNT: 0,
                    EX_1:0,
                    EX_2:0 
                };
                const req = {
                    type: "2",
                    from_date: this.fromDate,
                    to_date: this.toDate,
                    union_id:this.unionid,
                };
                console.log(req); debugger;
                this.spinner.show();
                const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
                if (res.success) { 
                    this.excelData = [];
                    this.UnionTransactionList = res.result; 
                    for (let i = 0; i < this.UnionTransactionList.length; i++) {
                        this.reportTotals.NO_OF_SOCIETIES += parseFloat(this.UnionTransactionList[i].NOOFSOCIETY);
                        this.reportTotals.NO_OF_FARMERS += parseFloat(this.UnionTransactionList[i].NOOF_FARMERS);
                        this.reportTotals.NO_OF_TRANSACTIONS += parseFloat(this.UnionTransactionList[i].NOOFTXN);
                        this.reportTotals.TOTAL_LITRES += parseFloat(this.UnionTransactionList[i].MILK_IN_LITERS);
                        this.reportTotals.TOTAL_AMOUNT += parseFloat(this.UnionTransactionList[i].MILK_AMOUNT);
                        this.reportTotals.EX_1 += parseFloat(this.UnionTransactionList[i].EX_1);
                        this.reportTotals.EX_2 += parseFloat(this.UnionTransactionList[i].EX_2);
    
                        let singleRow = {
                            S_NO: i + 1,
                            DATE: this.UnionTransactionList[i].TXN_DATE,
                            UNION_NAME: this.UnionTransactionList[i].UNION_NAME,
                            NO_OF_SOCIETIES: this.UnionTransactionList[i].NOOFSOCIETY,
                            NO_OF_FARMERS: this.UnionTransactionList[i].NOOF_FARMERS,
                            NO_OF_TRANSACTIONS: this.UnionTransactionList[i].NOOFTXN,
                            TOTAL_LITRES: this.UnionTransactionList[i].MILK_IN_LITERS,
                            TOTAL_AMOUNT: this.UnionTransactionList[i].MILK_AMOUNT,
                            EX_1: this.UnionTransactionList[i].EX_1,
                            EX_2: this.UnionTransactionList[i].EX_2,
                        }
                        this.excelData.push(singleRow);
    
                    }
                        this.reportTotals.TOTAL_LITRES = parseFloat(
                        this.reportTotals.TOTAL_LITRES.toFixed(2)
                        );
                        this.reportTotals.TOTAL_AMOUNT = parseFloat(
                        this.reportTotals.TOTAL_AMOUNT.toFixed(2)
                        );
                    this.excelData.push(this.reportTotals);
                } else { 
                    this.toast.info(res.message);
                }
              //} 
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
            'Admin Union Transaction Wise Details',
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
