import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
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
  selector: 'app-dashboard-total-milk-pouring-districtwise-details',
  templateUrl: './dashboard-total-milk-pouring-districtwise-details.component.html',
  styleUrls: ['./dashboard-total-milk-pouring-districtwise-details.component.css']
})
export class DashboardTotalMilkPouringDistrictwiseDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  milkPouringDetails = [];
  districtId:any;
  reportTotals = { 
    S_No: '-',
    Districts: 'TOTAL',
    Mandals: 0,
    RBKs: 0,
    Villages: 0,
    No_of_Women_Farmers_Pouring_Milk: 0,
    Total_Buffalo_Milk_in_Litres: 0,
    Total_Buffalo_Milk_Amount: 0,
    Total_cow_Milk_in_Litres: 0,
    Total_cow_Milk_Amount: 0
   
  };
  excelData = [];
  @Output() onDistrictChange = new EventEmitter<string>();
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
      private stateAPI: StateService,
      private session:SessionService,
  ) { }

  ngOnInit(): void {
      this.loadReport();
  }

  async loadReport(): Promise<void> {
      try {
          this.reportTotals = {
              S_No: '-',
              Districts: 'TOTAL',
              RBKs: 0,
              Mandals: 0,
              Villages: 0,
              No_of_Women_Farmers_Pouring_Milk: 0,
              Total_Buffalo_Milk_in_Litres: 0,
              Total_Buffalo_Milk_Amount: 0,
              Total_cow_Milk_in_Litres: 0,
              Total_cow_Milk_Amount: 0
           
          }
             
          this.milkPouringDetails = [];
          this.spinner.show();debugger;
          const req = {
              type: "26",
              cnt:'99',
              district_id:this.session.dashboarddistrictid
          }           
          const res = await this.stateAPI.DashboardDailycountsRptGet(req);
          if (res.success) {
              this.excelData = [];
              this.milkPouringDetails = res.result;
              for (let i = 0; i < this.milkPouringDetails.length; i++) {
                this.reportTotals.Mandals +=
                parseFloat(this.milkPouringDetails[i].TOTAL_MANDALS);
                this.reportTotals.RBKs +=
                parseFloat(this.milkPouringDetails[i].TOTAL_RBKS);
                this.reportTotals.Villages +=
                parseFloat(this.milkPouringDetails[i].TOTAL_VILLAGES);
                this.reportTotals.No_of_Women_Farmers_Pouring_Milk +=
                parseFloat(this.milkPouringDetails[i].TOTAL_MILK_POURING_WOMEN_FMRS);
                  this.reportTotals.Total_cow_Milk_in_Litres +=
                   parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_LTR);
                  this.reportTotals.Total_cow_Milk_Amount +=
                   parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT);
                  this.reportTotals.Total_Buffalo_Milk_in_Litres +=
                   parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR);
                  this.reportTotals.Total_Buffalo_Milk_Amount += 
                  parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);

                  let singleRow = {
                    S_No: i + 1,
                    Districts: this.milkPouringDetails[i].DISTRICT_NAME,
                    Mandals: this.milkPouringDetails[i].TOTAL_MANDALS,
                    RBKs: this.milkPouringDetails[i].TOTAL_RBKS,
                    Villages: this.milkPouringDetails[i].TOTAL_VILLAGES,
                    No_of_Women_Farmers_Pouring_Milk: this.milkPouringDetails[i].TOTAL_MILK_POURING_WOMEN_FMRS,
                    Total_Buffalo_Milk_in_Litres: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR,
                    Total_Buffalo_Milk_Amount: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                    Total_cow_Milk_in_Litres: this.milkPouringDetails[i].TOTAL_COW_MILK_LTR,
                    Total_cow_Milk_Amount: this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT,
                    
                      
                  };

                  this.excelData.push(singleRow);
              }
              this.reportTotals.Total_cow_Milk_in_Litres = parseFloat(this.reportTotals.Total_cow_Milk_in_Litres.toFixed(2));
              this.reportTotals.Total_cow_Milk_Amount = parseFloat(this.reportTotals.Total_cow_Milk_Amount.toFixed(2));
              this.reportTotals.Total_Buffalo_Milk_in_Litres = parseFloat(this.reportTotals.Total_Buffalo_Milk_in_Litres.toFixed(2));
              this.reportTotals.Total_Buffalo_Milk_Amount = parseFloat(this.reportTotals.Total_Buffalo_Milk_Amount.toFixed(2));
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

  btnExcel(): void {
      this.utils.JSONToCSVConvertor(
          this.excelData,
          'District Wise Report',
          true
      );
  }

  btnPDF(): void {
      const fileName = 'District Wise Report';
      let basePDF = '';
      this.spinner.show();
      this.dashboardAPI
          .dailyTotalMilkPopuringFarmersPDFReport()
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
  btnGetDetails(obj): void {
      debugger;
      const requestData = {
          districtId: obj.DISTRICT_CODE,
          districtName: obj.DISTRICT_NAME,
          Status: obj.STATUS,
      };
      const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
      this.onDistrictChange.emit(encryptedString);
  }
}
