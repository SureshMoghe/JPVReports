import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    selector: 'app-dist-wise-farmer-details-report',
    templateUrl: './dist-wise-farmer-details-report.component.html',
    styleUrls: ['./dist-wise-farmer-details-report.component.css']
})
export class DistWiseFarmerDetailsReportComponent implements OnInit {

    @Input() Selected_Date: any;
    @Input() VillageId: any;
    @Input() MandalName: any;
    @Input() districtName: any;
    @Input() RbkName: any;
    @Input() VillageName: any;
    @Input() RbkId: any;
    @Input() MandalId: any;
    @Input() districtId: any;
    @Input() Status: any;


    totalMandalDetails: any[] = [];
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private dashboardAPI: DashboardService,
        private stateAPI: StateService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService
    ) { }
    reportTotals = {
        S_No: '-',
        Districts: 'TOTAL',
        RBKs: '-',
        Villages: '-',
        Farmer_code: '-',
        Farmer_Name: '-',
        Mobile_Number: '-',
        Total_Buffalo_Milk_in_Litres: 0,
        Total_Buffalo_Milk_Amount: 0,
        Total_Cow_Milk_in_Litres: 0,
        Total_Cow_Milk_Amount: 0,

    }
    type: any;
    ngOnInit(): void {
        // if(this.Status == '99'){
        //   this.type = '35';
        // }
        // else{
        //   this.type = '5'
        // }
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        this.reportTotals = {
            S_No: '-',
            Districts: 'TOTAL',
            RBKs: '-',
            Villages: '-',
            Farmer_code: '-',
            Farmer_Name: '-',
            Mobile_Number: '-',
            Total_Buffalo_Milk_in_Litres: 0,
            Total_Buffalo_Milk_Amount: 0,
            Total_Cow_Milk_in_Litres: 0,
            Total_Cow_Milk_Amount: 0,

        }
        this.spinner.show();

        try {

            const req = {
                type: '5',
                village_id: this.VillageId,
                cnt: this.Status,
                var: this.Selected_Date//this.session.Date
            };
            debugger;
            this.totalMandalDetails = [];
            // const res = await this.dashboardAPI.totalDistrictReport();
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            if (res.success) {
                this.spinner.hide();
                this.excelData = [];
                this.totalMandalDetails = res.result;
                // this.excelData = this.totalMandalDetails;     
                for (let i = 0; i < this.totalMandalDetails.length; i++) {
                    if (
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR === null ||
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR === undefined
                    ) { this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR = 0; }

                    this.reportTotals.Total_Buffalo_Milk_in_Litres += parseFloat(
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR
                    );
                    if (
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT === null ||
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT === undefined
                    ) { this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT = 0; }

                    this.reportTotals.Total_Buffalo_Milk_Amount += parseFloat(
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
                    );

                    if (
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR === null ||
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR === undefined
                    ) { this.totalMandalDetails[i].TOTAL_COW_MILK_LTR = 0; }

                    this.reportTotals.Total_Cow_Milk_in_Litres += parseFloat(
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR
                    );

                    if (
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT === null ||
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT === undefined
                    ) { this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT = 0; }

                    this.reportTotals.Total_Cow_Milk_Amount += parseFloat(
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT
                    );

                    let singleRow = {
                        S_No: i + 1,
                        Districts: this.totalMandalDetails[i].DISTRICT_NAME,
                        RBKs: this.totalMandalDetails[i].RBK_NAME,
                        Villages: this.totalMandalDetails[i].VILLAGE_NAME,
                        Farmer_code: this.totalMandalDetails[i].TOTAL_FARMERS,
                        Farmer_Name: this.totalMandalDetails[i].NAME,
                        Mobile_Number: this.totalMandalDetails[i].MOBILE_NUMBER,
                        Total_Buffalo_Milk_in_Litres: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR,
                        Total_Buffalo_Milk_Amount: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                        Total_Cow_Milk_in_Litres: this.totalMandalDetails[i].TOTAL_COW_MILK_LTR,
                        Total_Cow_Milk_Amount: this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT,
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
            'Farmer Wise Report',
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



