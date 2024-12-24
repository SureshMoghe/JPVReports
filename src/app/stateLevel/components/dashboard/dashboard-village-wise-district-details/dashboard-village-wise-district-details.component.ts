import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-dashboard-village-wise-district-details',
  templateUrl: './dashboard-village-wise-district-details.component.html',
  styleUrls: ['./dashboard-village-wise-district-details.component.css']
})
export class DashboardVillageWiseDistrictDetailsComponent implements OnInit {
  @Output() onDistrictChange = new EventEmitter<string>();
  totalVillagesDetails = [];
  districtId:any;
  reportTotals = { 
    S_No: '-',	
    District: 'TOTAL',	      
    Villages: 0,	
    Total_Women_Farmers: 0,	
    Total_Milk_Pouring_Women_Farmers: 0,	
    Total_Buffalo_Milk_in_Litres: 0,	
    Total_Buffalo_Milk_Amount: 0,	
    Total_Cow_Milk_in_Litres: 0,	
    Total_Cow_Milk_Amount: 0,
  };
  excelData = [];
  
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private dashboardAPI: DashboardService,
    private utils: UtilsService,
    private logger: LoggerService,
    private stateAPI:StateService,
    private session:SessionService

  ) {}
  
  ngOnInit(): void {
    this.loadReport();
  }
  
  async loadReport(): Promise<void> {
    this.spinner.show();
    try {
      this.reportTotals = {
        S_No: '-',	
        District: 'TOTAL',	      
        Villages: 0,		
        Total_Women_Farmers: 0,	
        Total_Milk_Pouring_Women_Farmers: 0,	
        Total_Buffalo_Milk_in_Litres: 0,	
        Total_Buffalo_Milk_Amount: 0,	
        Total_Cow_Milk_in_Litres: 0,	
        Total_Cow_Milk_Amount: 0,
      };
      const req = {
        type:'11',
        cnt:'99', 
        district_id:this.session.dashboarddistrictid,
      }; 
      this.totalVillagesDetails = [];
      this.spinner.show();       
      const res = await this.stateAPI.DashboardDailycountsRptGet(req);     
      if (res.success) {debugger;
        this.spinner.hide();
        this.excelData = [];
        this.totalVillagesDetails = res.result;
        for (let i = 0; i < this.totalVillagesDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.Villages += parseInt(
            this.totalVillagesDetails[i].TOTAL_VILLAGES
          );
          this.reportTotals.Total_Women_Farmers += parseInt(
            this.totalVillagesDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Total_Milk_Pouring_Women_Farmers += parseInt(
            this.totalVillagesDetails[i].TOTAL_WOMEN_FARMERS
          );
          this.reportTotals.Total_Buffalo_Milk_in_Litres += parseFloat(
            this.totalVillagesDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.Total_Buffalo_Milk_Amount += parseFloat(
            this.totalVillagesDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.Total_Cow_Milk_in_Litres += parseFloat(
            this.totalVillagesDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.Total_Cow_Milk_Amount += parseFloat(
            this.totalVillagesDetails[i].TOTAL_COW_MILK_AMOUNT
          );
  
          let singleRow = {
            S_No: i + 1,
            District: this.totalVillagesDetails[i].DISTRICT_NAME,          
            Villages: this.totalVillagesDetails[i].TOTAL_VILLAGES,
            Total_Women_Farmers: this.totalVillagesDetails[i].TOTAL_FARMERS,
            Total_Milk_Pouring_Women_Farmers: this.totalVillagesDetails[i].TOTAL_WOMEN_FARMERS,
            Total_Buffalo_Milk_in_Litres: this.totalVillagesDetails[i].TOTAL_BUFFALO_MILK_LTR,
            Total_Buffalo_Milk_Amount: this.totalVillagesDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            Total_Cow_Milk_in_Litres: this.totalVillagesDetails[i].TOTAL_COW_MILK_LTR,
            Total_Cow_Milk_Amount: this.totalVillagesDetails[i].TOTAL_COW_MILK_AMOUNT,
          };
  
          this.excelData.push(singleRow);
        }
        this.reportTotals.Total_Buffalo_Milk_in_Litres = parseFloat(
          this.reportTotals.Total_Buffalo_Milk_in_Litres.toFixed(2)
        );
        this.reportTotals.Total_Buffalo_Milk_Amount = parseFloat(
          this.reportTotals.Total_Buffalo_Milk_Amount.toFixed(2)
        );
        this.reportTotals.Total_Cow_Milk_in_Litres = parseFloat(
          this.reportTotals.Total_Cow_Milk_in_Litres.toFixed(2)
        );
        this.reportTotals.Total_Cow_Milk_Amount = parseFloat(
          this.reportTotals.Total_Cow_Milk_Amount.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
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
  
  btnGetDetails(obj): void {
    debugger;
    const requestData = {
        districtId: obj.DISTRICT_CODE,
        districtName: obj.DISTRICT_NAME,
        MandalId: obj.MANDAL_CODE,
        MandalName: obj.MANDAL_NAME,
        RbkId: obj.RBK_CODE,
        RbkName: obj.RBK_NAME,
        VillageId: obj.VILLAGE_CODE,
        VillageName: obj.VILLAGE_NAME,
        Status: obj.STATUS,
  
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }
  
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'District Wise Report',
      true
    );
  }
  
  btnPDF(): void {
    const fileName = 'totalVillagessReport';
    let basePDF = '';
    this.spinner.show();
    this.dashboardAPI
      .totalVillagesPDFReport()
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
  
