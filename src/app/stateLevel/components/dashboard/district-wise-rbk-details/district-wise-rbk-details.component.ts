import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
    selector: 'app-district-wise-rbk-details',
    templateUrl: './district-wise-rbk-details.component.html',
    styleUrls: ['./district-wise-rbk-details.component.css']
})
export class DistrictWiseRbkDetailsComponent implements OnInit {

    @Input() Selected_Date: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() MandalId: any;
    @Input() MandalName: any;
    @Input() RbkId: any;
    @Input() RbkName: any;
    @Input() Status: any;
    // @Input() VillageId: any;
    // @Input() villageName: any;
    @Output() onMandalChange = new EventEmitter<string>();
    totalMandalDetails = [];
    reportTotals1 = {
        S_No: '-',
        Mandal: 'TOTAL',
        RBKs: 0,
        Villages: 0,
        Women_Farmers: 0,
        Milk_Pouring_Women_Farmers: 0,
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
        private stateAPI: StateService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService
    ) { }
    type: any;
    ngOnInit(): void {
        debugger;

        // if(this.Status == '99'){
        //   this.type = '37'
        // }
        // else{
        //   this.type = '7'
        // }

        this.loadReport();
    }

    async loadReport(): Promise<void> {
        this.spinner.show();
        try {
            this.reportTotals1 = {
                S_No: '-',
                Mandal: 'TOTAL',
                RBKs: 0,
                Villages: 0,
                Women_Farmers: 0,
                Milk_Pouring_Women_Farmers: 0,
                Total_Buffalo_Milk_in_Litres: 0,
                Total_Buffalo_Milk_Amount: 0,
                Total_Cow_Milk_in_Litres: 0,
                Total_Cow_Milk_Amount: 0,
            };
            //Proc:RBK_FMR_REGI_DASHBOARD_HYPRLNK
            const req = {
                type: '7',
                district_id: this.districtId,
                cnt: this.Status,
                var: this.Selected_Date//this.session.Date
            };
            this.totalMandalDetails = [];
            this.spinner.show();
            // const res = await this.dashboardAPI.totalDistrictReport();
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            if (res.success) {
                this.spinner.hide();
                this.excelData = [];
                this.totalMandalDetails = res.result;
                for (let i = 0; i < this.totalMandalDetails.length; i++) {
                    // tslint:disable-next-line: radix
                    this.reportTotals1.RBKs += parseInt(
                        this.totalMandalDetails[i].TOTAL_RBKS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals1.Villages += parseInt(
                        this.totalMandalDetails[i].TOTAL_VILLAGES
                    );
                    if (
                        this.totalMandalDetails[i].TOTAL_FARMERS === null ||
                        this.totalMandalDetails[i].TOTAL_FARMERS === undefined
                    ) { this.totalMandalDetails[i].TOTAL_FARMERS = 0; }

                    // tslint:disable-next-line: radix
                    this.reportTotals1.Women_Farmers += parseInt(
                        this.totalMandalDetails[i].TOTAL_FARMERS
                    );
                    // tslint:disable-next-line: radix

                    if (
                        this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS === null ||
                        this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS === undefined
                    ) { this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS = 0; }

                    this.reportTotals1.Milk_Pouring_Women_Farmers += parseInt(
                        this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS
                    );

                    if (
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR === null ||
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR === undefined
                    ) { this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR = 0; }

                    this.reportTotals1.Total_Buffalo_Milk_in_Litres += parseFloat(
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR
                    );
                    if (
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT === null ||
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT === undefined
                    ) { this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT = 0; }

                    this.reportTotals1.Total_Buffalo_Milk_Amount += parseFloat(
                        this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
                    );
                    if (
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR === null ||
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR === undefined
                    ) { this.totalMandalDetails[i].TOTAL_COW_MILK_LTR = 0; }

                    this.reportTotals1.Total_Cow_Milk_in_Litres += parseFloat(
                        this.totalMandalDetails[i].TOTAL_COW_MILK_LTR
                    );
                    if (
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT === null ||
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT === undefined
                    ) { this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT = 0; }

                    this.reportTotals1.Total_Cow_Milk_Amount += parseFloat(
                        this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT
                    );
                    let singleRow = {
                        S_No: i + 1,
                        Mandal: this.totalMandalDetails[i].MANDAL_NAME,
                        RBKs: this.totalMandalDetails[i].TOTAL_RBKS,
                        Villages: this.totalMandalDetails[i].TOTAL_VILLAGES,
                        Women_Farmers: this.totalMandalDetails[i].TOTAL_FARMERS,
                        Milk_Pouring_Women_Farmers: this.totalMandalDetails[i].TOTAL_WOMEN_FARMERS,
                        Total_Buffalo_Milk_in_Litres: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_LTR,
                        Total_Buffalo_Milk_Amount: this.totalMandalDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                        Total_Cow_Milk_in_Litres: this.totalMandalDetails[i].TOTAL_COW_MILK_LTR,
                        Total_Cow_Milk_Amount: this.totalMandalDetails[i].TOTAL_COW_MILK_AMOUNT,
                    };

                    this.excelData.push(singleRow);
                }
                this.reportTotals1.Total_Buffalo_Milk_in_Litres = parseFloat(
                    this.reportTotals1.Total_Buffalo_Milk_in_Litres.toFixed(2)
                );
                this.reportTotals1.Total_Buffalo_Milk_Amount = parseFloat(
                    this.reportTotals1.Total_Buffalo_Milk_Amount.toFixed(2)
                );
                this.reportTotals1.Total_Cow_Milk_in_Litres = parseFloat(
                    this.reportTotals1.Total_Cow_Milk_in_Litres.toFixed(2)
                );
                this.reportTotals1.Total_Cow_Milk_Amount = parseFloat(
                    this.reportTotals1.Total_Cow_Milk_Amount.toFixed(2)
                );
                this.excelData.push(this.reportTotals1);
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
            'Mandal Wise Report',
            true
        );
    }

    btnPDF(): void {
        const fileName = 'dailyTotalRegisteredFarmersReport';
        let basePDF = '';
        this.spinner.show();
        this.dashboardAPI
            .dailyTotalRegisterdFarmersPDFReport()
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
            MandalId: obj.MANDAL_CODE,
            MandalName: obj.MANDAL_NAME,
            RbkId: obj.RBK_CODE,
            RbkName: obj.RBK_NAME,
            VillageId: obj.VILLAGE_CODE,
            VillageName: obj.VILLAGE_NAME,
            Status: obj.STATUS,
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onMandalChange.emit(encryptedString);
    }

}
