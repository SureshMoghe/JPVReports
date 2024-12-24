import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BankerService } from 'src/app/bankerModule/services/banker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
 
 

@Component({
  selector: 'app-all-masters-details',
  templateUrl: './all-masters-details.component.html',
  styleUrls: ['./all-masters-details.component.css']
})
 


export class AllMastersDetailsComponent implements OnInit {
  masterDetails=[];
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
 

  constructor(private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
    private session: SessionService,
    private stateAPI: StateService,) { }
 
  ngOnInit(): void {

    if(this.session.uniqueId !="" && this.session.desigId != ""){
      this.loadReport();
    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    } 
  } 
  async loadReport(): Promise<void> {
    try {
      this.masterDetails = [];
      
      
      const req = {
        type:'32',
        cnt1: this.session.desigId,    //Role
        cnt2: this.session.uniqueId,   //uniqueid        
       // cnt3:  this.session.userName,   //insertedby 
      };

      this.spinner.show();debugger;
      const res = await this.stateAPI.farmerWiseAbstractReportphase(req);
     // const res = await this.bankAPI.cheyuthaList(this.reportTotals1);
     debugger;
      if (res.success) {
        this.excelData = [];
        this.masterDetails = res.result;
      //   this.districtName=this.mandalLevelDetails[0].DISTRICTNAME;
           for (let i = 0; i < this.masterDetails.length; i++) {
 
                      let singleRow = { 
                              S_NO: i + 1,

                              DISTRICT_NAME: this.masterDetails[i].DISTRICT_NAME,
                              MANDAL_NAME: this.masterDetails[i].MANDAL_NAME,
                              RBK_NAME: this.masterDetails[i].RBK_NAME,
                              SECRETARIATE_NAME  : this.masterDetails[i].SECRETARIATE_NAME,
                              VILLAGE_NAME: this.masterDetails[i].VILLAGE_NAME,
                              SOCIETY_NAME: this.masterDetails[i].SOCIETY_NAME,
                              DIVISION_NAME: this.masterDetails[i].DIVISION_NAME,
                              ROUTE_NAME: this.masterDetails[i].ROUTE_NAME,
                              NAME_OF_THE_MENTOR: this.masterDetails[i].NAME_OF_THE_MENTOR,
                              MENTOR_MOBILE_NO : this.masterDetails[i].MENTOR_MOBILE_NO,
                              NAME_OF_THE_ROUTE_INCHARGE: this.masterDetails[i].NAME_OF_THE_ROUTE_INCHARGE,
                              ROUTE_INCHARGE_MOBILE_NO : this.masterDetails[i].ROUTE_INCHARGE_MOBILE_NO,
                              PHASE: this.masterDetails[i].PHASE,
                              ACTIVE_STATUS: this.masterDetails[i].ACTIVE_STATUS,

         
             };

              this.excelData.push(singleRow);
           } 
        
      } else {
        this.toast.info(res.message);
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
      'MASTER DETAILS ('+this.session.getdatetimeReport()+")",
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
