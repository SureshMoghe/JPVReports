import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BankerService } from 'src/app/bankerModule/services/banker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-totalmilkpouringdistrictwisereport',
  templateUrl: './totalmilkpouringdistrictwisereport.component.html',
  styleUrls: ['./totalmilkpouringdistrictwisereport.component.css']
})
export class TotalmilkpouringdistrictwisereportComponent implements OnInit {
  stateLevelDetails = [];
  reportname:any;
  excelData = []; 
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  totreportTotals = {
    tt_TOTAL_WOMEN_FARMERS:0,
    tt_TOTAL_COW_MILK_LTR:0,     
    tt_TOTAL_COW_MILK_AMOUNT:0,
    tt_TOTAL_BUFFALO_MILK_LTR:0,
    tt_TOTAL_BUFFALO_MILK_AMOUNT:0, 
      };

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
    private farmerModuleAPI: StateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try { 

     this.totreportTotals = {
      tt_TOTAL_WOMEN_FARMERS:0,
      tt_TOTAL_COW_MILK_LTR:0,     
      tt_TOTAL_COW_MILK_AMOUNT:0,
      tt_TOTAL_BUFFALO_MILK_LTR:0,
      tt_TOTAL_BUFFALO_MILK_AMOUNT:0, 
        };

      const req = {
        type:'28', 
      };
      this.spinner.show(); 
    
      const res = await this.farmerModuleAPI.TotalMilkPouringDistrictwiseReport(req);
   
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;

         
        this.totreportTotals = {
          tt_TOTAL_WOMEN_FARMERS:0,
          tt_TOTAL_COW_MILK_LTR:0,     
          tt_TOTAL_COW_MILK_AMOUNT:0,
          tt_TOTAL_BUFFALO_MILK_LTR:0,
          tt_TOTAL_BUFFALO_MILK_AMOUNT:0, 
            };
 
         for (let i = 0; i < this.stateLevelDetails.length; i++) {

          this.totreportTotals.tt_TOTAL_WOMEN_FARMERS += parseInt( this.stateLevelDetails[i].TOTAL_WOMEN_FARMERS );  
          this.totreportTotals.tt_TOTAL_COW_MILK_LTR += parseInt( this.stateLevelDetails[i].TOTAL_COW_MILK_LTR );
          this.totreportTotals.tt_TOTAL_COW_MILK_AMOUNT += parseInt( this.stateLevelDetails[i].TOTAL_COW_MILK_AMOUNT );
           this.totreportTotals.tt_TOTAL_BUFFALO_MILK_LTR+=parseInt( this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_LTR);
           this.totreportTotals.tt_TOTAL_BUFFALO_MILK_AMOUNT+=parseInt( this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);
           
           let singleRow = {
              S_NO: i + 1,
              DISTRICTCODE:this.stateLevelDetails[i].DISTRICT_CODE,
              DISTRICTNAME: this.stateLevelDetails[i].DISTRICT_NAME,
              TOTAL_WOMEN_FARMERS:this.stateLevelDetails[i].TOTAL_WOMEN_FARMERS,
              TOTAL_COW_MILK_LTR: this.stateLevelDetails[i].TOTAL_COW_MILK_LTR,
              TOTAL_COW_MILK_AMOUNT: this.stateLevelDetails[i].TOTAL_COW_MILK_AMOUNT,
              TOTAL_BUFFALO_MILK_LTR: this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_LTR, 
              TOTAL_BUFFALO_MILK_AMOUNT : this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
          

           };

            this.excelData.push(singleRow);
         }
         this.excelData.push(this.totreportTotals);
 
        
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
        'Cheyutha State Level Report ('+this.session.getdatetimeReport()+")",
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


  btnGetDetails(obj): void { 
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
       
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/TotalMilkPouringDistrictwiseFarmersReport'], {
      queryParams: { request: encryptedString },
    });

    //this.onDistrictChange.emit(encryptedString);
  }


}
 