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
  selector: 'app-amcuportaldata',
  templateUrl: './amcuportaldata.component.html',
  styleUrls: ['./amcuportaldata.component.css']
})
export class AmcuportaldataComponent implements OnInit {
  fromDate: any;
  Quantity: any;
  DISTRICTLIST:any[]=[];
  AMCSLIST: [];
  amcuportal: any;
  districtId: any;
  typeid: any;
  typeid2: any;
  dist: any; 
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

        this.LoadAmcs();
        this.LoadDistricts();
        // this.btnLoadReport();
    }

    async LoadAmcs(): Promise<void> {
      try {
        const req = {
          type: "3",
        }; debugger;
        this.AMCSLIST = [];
        this.spinner.show();
  
        const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
        if (res.success) {
          this.AMCSLIST = res.result;
          this.spinner.hide();
  
        }
        else{
          this.spinner.hide();
          this.toast.warning(res.message);
        }
        this.spinner.hide();
      } catch (error) {
        this.spinner.hide();
                  this.toast.warning(error);
      }
    }

    async LoadDistricts(): Promise<void> {
      try {
        const req = {
          type: "4",
          district_id:"0",
        }; debugger;
        this.DISTRICTLIST = [];
        this.spinner.show();
  
        const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
        if (res.success) {
          this.DISTRICTLIST = res.result;
  //console.log( this.DISTRICTLIST)
           
          this.spinner.hide();
  
        }
        else{
          this.spinner.hide();
          this.toast.warning(res.message);
        }
        this.spinner.hide();
      } catch (error) {
        this.spinner.hide();
        this.toast.warning(error);
      }
    }

    onAmcsChange() {
      if (this.amcuportal == "1") {
        this.typeid = "5";
        return;
      }
      else {
        this.typeid = "6";
        return;
      }
    } 
    async btnSubmit(obj:any): Promise<void> {   
      debugger;  
      try {

        if (this.amcuportal == "" || this.amcuportal == null || this.amcuportal == undefined) {
                this.toast.info("Please Select Amcs");
                return;
              };
             
              if (this.fromDate == "" || this.fromDate == null || this.fromDate == undefined) {
                this.toast.info("Please Select Date");
                return;
              } ; 
              if (obj.Quantity == "" || obj.Quantity == null || obj.Quantity == undefined) {
                this.toast.info("Please Select Quantity");
                return;
              }; debugger;
              const req = {
                      type: this.typeid,
                      from_date: this.fromDate,                      
                      DISTRICT_ID:obj.DIST_CODE,
                      input2:obj.Quantity,
                      input3: this.session.userName,
                      role: this.session.desigId,
                      unique_id: this.session.uniqueId
                    };              
              this.spinner.show();
              const res = await this.OfficeModuleAPI.TransactionsByUnionidGet(req);
              if (res.success) { 
                this.toast.success("Data Inserted Successfully");  
                this.clearControls(obj);
              } else {   this.spinner.hide();
                  this.toast.warning(res.message);
              }  
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }
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


  
  clearControls(obj)
  {
    try {
      this.amcuportal=undefined;
      obj.Quantity="";

      
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

}
