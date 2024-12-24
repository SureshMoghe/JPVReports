import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { MdssPromotersMilkPouring } from '../../models/mdsspromotersmilkpouring';
import { StateService } from '../../services/state.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mdss-adhoc-milk-pouring-details',
  templateUrl: './mdss-adhoc-milk-pouring-details.component.html',
  styleUrls: ['./mdss-adhoc-milk-pouring-details.component.css']
})
export class MdssAdhocMilkPouringDetailsComponent  implements OnInit, OnDestroy, AfterViewInit {  
  
  MDSSPromotersMilkPouringStatusDetails = [];
  input: any;
  districtId: any;
  districtName: any;
  MandalId: any;
  MandalName: any;
  RbkId: any;
  RBKName: any;
  fromDate: any;
  toDate: any;  
  type: any;  
		mandalList:[]; 
  districtList = [];  
  reportTotals = {
    S_NO: '-',
    NAME:'TOTAL',
    DESIGNATION: '-',
    MOBILE_NUMBER: '-',
    LAST_DATE: '-',
    MILK_IN_LITERS: 0, 
  }
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService, 
    private stateAPI:StateService,
    private utils: UtilsService,
    private router: Router,
    private session: SessionService, 
    private route: ActivatedRoute,
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {

    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.MandalId = decString.MandalId;
    this.MandalName = decString.MandalName;
    this.RbkId = decString.RbkId;
    this.RBKName = decString.RBKName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.type=decString.type; 
    
    // this.districtId = '';
     
   // this.fromDate = this.session.getFromDateString();
   //this.fromDate = this.session.getTodayDateString();
   // this.toDate = this.session.getTodayDateString(); 
    this.btnLoadReport(); 
  }  
  headingname:any;
  async btnLoadReport(): Promise<void> { 
    
    if(this.type=="4"){ this.headingname= "MDSS Promoters Milk Pouring Members";}
    if(this.type=="5"){ this.headingname= "MDSS Promoters Milk Not Pouring Members";}
    if(this.type=="6"){ this.headingname= "MDSS Adhoc Committee Milk Pouring Members";}
    if(this.type=="7"){ this.headingname= "MDSS Adhoc Committee Milk Not Pouring Members";}
    try {
      this. reportTotals = {
        S_NO: '-',
        NAME:'TOTAL',
        DESIGNATION: '-',
        MOBILE_NUMBER: '-',
        LAST_DATE: '-',
        MILK_IN_LITERS: 0,  
      };debugger;
      const req = {
        type:this.type,                //"4", 
        rbk:this.RbkId,      //"11090421", 
      }; 
      this.MDSSPromotersMilkPouringStatusDetails = [];
      this.spinner.show(); 
     const res = await this.stateAPI.MDSSPromotersMilkPouringGet(req);
        
      if (res.success) {
        this.excelData = [];
        this.MDSSPromotersMilkPouringStatusDetails = res.result;
        for (let i = 0; i < this.MDSSPromotersMilkPouringStatusDetails.length; i++) {
          this.reportTotals.MILK_IN_LITERS += parseFloat(
            this.MDSSPromotersMilkPouringStatusDetails[i].MILK_IN_LITERS
          ); 
          let singleRow = {
          S_NO: i + 1,
          NAME: this.MDSSPromotersMilkPouringStatusDetails[i].NAME,
          DESIGNATION: this.MDSSPromotersMilkPouringStatusDetails[i].DESIGNATION,
          MOBILE_NUMBER: this.MDSSPromotersMilkPouringStatusDetails[i].MOBILE_NUMBER,
          LAST_DATE: this.MDSSPromotersMilkPouringStatusDetails[i].LAST_DATE,
          MILK_IN_LITERS: this.MDSSPromotersMilkPouringStatusDetails[i].MILK_IN_LITERS, 
          }; 

          this.excelData.push(singleRow);
        } 
        this.reportTotals.MILK_IN_LITERS = parseFloat(
          this.reportTotals.MILK_IN_LITERS.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else { this.excelData = [];
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {  
    if(this.excelData.length>0)
    { 
   
      if(this.type=="4")
      { 
        this.utils.JSONToCSVConvertor(
          this.excelData,
        "MDSS Promoters Milk Pouring Members",true
        );}
      if(this.type=="5")
      { 
        this.utils.JSONToCSVConvertor(
          this.excelData,
        "MDSS Promoters Milk Not Pouring Members",true
        );}
      if(this.type=="6")
      { 
        this.utils.JSONToCSVConvertor(
          this.excelData,
        "MDSS Adhoc Committee Milk Pouring Members",true
        );}
      if(this.type=="7")
      { 
        this.utils.JSONToCSVConvertor(
          this.excelData,
        "MDSS Adhoc Committee Milk Not Pouring Members",true
        );} 
  }
  }  
  
  btnBack(): void {
    this.router.navigate(['/state/MdssPromotersMilkPouringStatus']);
    this.spinner.show();
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

