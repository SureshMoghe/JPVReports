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
  selector: 'app-amcuportaldata-report',
  templateUrl: './amcuportaldata-report.component.html',
  styleUrls: ['./amcuportaldata-report.component.css']
})
export class AmcuportaldataReportComponent implements OnInit {

  fromDate: any;
  toDate: any;
  DistType: any;
  unionid :any; 
  unionname: any; 
  UNIONLIST: [];
  amcuportal:any;
  typeid:any;
  AMCSLIST: [];
 
    UnionTransactionList = [];
   reportTotals = {
      S_NO: '-',
      DATE: 'TOTAL',
      DISTRICT:'-',
      QUANTITY: 0, 
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
        this.LoadAmcs();  
      //  this.unionid = '0';
      //  this.btnLoadReport();
    }
 

  async LoadAmcs(): Promise<void> {
    try {
      const req = {
        "type": "3",
      }; debugger;
      this.AMCSLIST = [];
      this.spinner.show();

      const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
      if (res.success) {
        this.AMCSLIST = res.result;
        this.spinner.hide();

      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }

  onAmcsChange() {
    if (this.amcuportal == "1") {
      this.typeid = "7";
      return;
    }
    else {
      this.typeid = "8";
      return;
    }
  }

  async btnLoadReport(): Promise<void> {
    
       
      try {

        if (this.amcuportal == "" || this.amcuportal == null || this.amcuportal == undefined) {
          this.toast.info("Please Select Amcs");           
        }
        else{
          this.reportTotals = {
            S_NO: '-',
            DATE: 'TOTAL',
            DISTRICT:'-',
            QUANTITY: 0, 
          };
          const req = {
            type:this.typeid,
            from_date:this.fromDate,
            to_date:this.toDate,
            input1: this.amcuportal     //  this.session.amcuportal
          };
          console.log(req); debugger;
          this.spinner.show();
          const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
          if (res.success) {
            this.excelData = [];
            this.UnionTransactionList = res.result;
            console.log(this.UnionTransactionList);
            for (let i = 0; i < this.UnionTransactionList.length; i++) {
              this.reportTotals.QUANTITY += parseFloat(this.UnionTransactionList[i].QUANTITY); 
              let singleRow = {
                S_NO: i + 1,
                DATE: this.UnionTransactionList[i].TXN_DATE,
                DISTRICT: this.UnionTransactionList[i].DISTRICT,
                QUANTITY: this.UnionTransactionList[i].QUANTITY, 
              }
              this.excelData.push(singleRow); 
            }
            this.reportTotals.QUANTITY = parseFloat(
              this.reportTotals.QUANTITY.toFixed(2)
            ); 
            this.excelData.push(this.reportTotals);
          } else {
            this.toast.info(res.message);
          } 
          this.rerender();
          this.spinner.hide();
        }
        }
        catch (error) {
        this.spinner.hide();
        this.utils.catchResponse(error);
      }
    }

    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Field AMCS Portal Data Report',
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

