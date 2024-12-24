import { AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BankerService } from 'src/app/bankerModule/services/banker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { DashboardService } from '../../services/dashboard.service';
 

@Component({
  selector: 'app-totalmilkpouringfarmerbydistidwisereport',
  templateUrl: './totalmilkpouringfarmerbydistidwisereport.component.html',
  styleUrls: ['./totalmilkpouringfarmerbydistidwisereport.component.css']
})
export class TotalmilkpouringfarmerbydistidwisereportComponent implements  OnInit, OnDestroy, AfterViewInit {
  input: any;
    districtId: any;
    districtName: any;





    milkPouringDetails = [];
  milkPouringDetailstest = []; 
  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    RBK_NAME: '-',
    VILLAGE_NAME: '-',
    FARMER_CODE: '-',
    NAME: 'TOTAL',
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
    MILK_POUR_START_DATE: '-',
    MILK_POUR_LAST_DATE: '-',
    TOTAL_MILK_POUR_DAYS: '-',
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();


  
  constructor( private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
    private route: ActivatedRoute,
    private farmerModuleAPI: StateService,
    private dashboardAPI:DashboardService
    ) { 
      route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {debugger;

    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
     this.loadReport();
  }

  
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: '-',
        RBK_NAME: '-',
        VILLAGE_NAME: '-',
        FARMER_CODE: '-',
        NAME: 'TOTAL',
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
        MILK_POUR_START_DATE: '-',
        MILK_POUR_LAST_DATE: '-',
        TOTAL_MILK_POUR_DAYS: '-',
      };
      this.milkPouringDetails = [];
      
      this.milkPouringDetailstest = [];
       this.spinner.show();debugger;
     // const res = await this.dashboardAPI.totalMilkPouringFarmersReport();


      const req = {
        type:'29', 
        districtId: this.districtId,
      };
      this.spinner.show(); 
    
      const res = await this.farmerModuleAPI.TotalMilkPouringDistrictwiseReport(req);


      if (res.success) {
        this.excelData = [];
        this.milkPouringDetailstest = res.result;          
        for (let i = 0; i < this.milkPouringDetailstest.length; i++) 
        {  this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat( this.milkPouringDetailstest[i].TOTAL_BUFFALO_MILK_LTR);
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat( this.milkPouringDetailstest[i].TOTAL_BUFFALO_MILK_AMOUNT);
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(  this.milkPouringDetailstest[i].TOTAL_COW_MILK_LTR);
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(this.milkPouringDetailstest[i].TOTAL_COW_MILK_AMOUNT  );
          this.reportTotals.TOTAL_MILK_POUR_DAYS+= parseFloat(this.milkPouringDetailstest[i].TOTAL_MILK_POUR_DAYS  );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.milkPouringDetailstest[i].DISTRICT_NAME,
            RBK_NAME: this.milkPouringDetailstest[i].RBK_NAME,
            VILLAGE_NAME: this.milkPouringDetailstest[i].VILLAGE_NAME,
            FARMER_CODE: this.milkPouringDetailstest[i].FARMER_CODE,
            NAME: this.milkPouringDetailstest[i].NAME,
            TOTAL_BUFFALO_MILK_LTR:  this.milkPouringDetailstest[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT:          this.milkPouringDetailstest[i].TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.milkPouringDetailstest[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT:  this.milkPouringDetailstest[i].TOTAL_COW_MILK_AMOUNT,
            MILK_POUR_START_DATE:          this.milkPouringDetailstest[i].MILK_POUR_START_DATE,
            MILK_POUR_LAST_DATE: this.milkPouringDetailstest[i].MILK_POUR_LAST_DATE,
            TOTAL_MILK_POUR_DAYS:      this.milkPouringDetailstest[i].TOTAL_MILK_POUR_DAYS,
          };

          this.excelData.push(singleRow);
        }
          // this.reportTotals.TOTAL_BUFFALO_MILK_LTR = this.reportTotals.TOTAL_BUFFALO_MILK_LTR;// parseFloat(          this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2));
          // this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT =this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT;// parseFloat(          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)        );
          // this.reportTotals.TOTAL_COW_MILK_LTR =  this.reportTotals.TOTAL_COW_MILK_LTR;//parseFloat(         .toFixed(2)        );
          // this.reportTotals.TOTAL_COW_MILK_AMOUNT =  this.reportTotals.TOTAL_COW_MILK_AMOUNT;//parseFloat(          this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2)        );
          this.excelData.push(this.reportTotals);


           if ( this.milkPouringDetailstest.length > 20000) { debugger;

          this.milkPouringDetails= this.milkPouringDetailstest.slice(0, 5000);;
          //this.milkPouringDetailstest.filter(o=>o.DISTRICT_CODE=547);// .slice(0, 20000);//(this.data, "acctId").map(x => x.acctId)
          // var filteredResults = from employee in milkPouringDetailstest
          // where employee.Department == "Software"
          //               select employee.Name;
//| filter:{ 'DISTRICT_CODE' : districtFilter === '547' ? undefined : districtFilter }
         // .GroupBy(i => i.id).Select(group => group.First())
          //this.milkPouringDetailstest.slice(0, 5000);
        } else   this.milkPouringDetails= this.milkPouringDetailstest ;

         this.spinner.hide();
         this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnBack(): void {
    this.router.navigate(['/state/TotalMilkPouringDistrictwiseReport']); 
  }
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Total Milk Pouring Farmers Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'totalMilkPouringFarmersReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .totalMilkPouringFarmersPDFReport()
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

}
