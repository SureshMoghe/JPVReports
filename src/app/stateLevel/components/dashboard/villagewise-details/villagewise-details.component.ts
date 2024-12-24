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
    selector: 'app-villagewise-details',
    templateUrl: './villagewise-details.component.html',
    styleUrls: ['./villagewise-details.component.css']
})
export class VillagewiseDetailsComponent implements OnInit {
    @Input() Selected_Date: any;
    @Input() RbkId: any;
    @Input() MandalName: any;
    @Input() districtName: any;
    @Input() RbkName: any;
    @Input() districtId: any;
    @Input() MandalId: any;
    @Input() VillageId: any;
    @Input() VillageName: any;
    @Input() Status: any;
    @Output() onVillageChange = new EventEmitter<string>();
    totalMandalDetails = [];
    reportTotals1 = {
        S_No: '-',
        Villages: 'TOTAL',
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

        this.loadReport();
    }

    async loadReport(): Promise<void> {
        this.spinner.show();
        try {
            this.reportTotals1 = {
                S_No: '-',
                Villages: 'TOTAL',
                Women_Farmers: 0,
                Milk_Pouring_Women_Farmers: 0,
                Total_Buffalo_Milk_in_Litres: 0,
                Total_Buffalo_Milk_Amount: 0,
                Total_Cow_Milk_in_Litres: 0,
                Total_Cow_Milk_Amount: 0,
            };
            //Proc: Proc: RBK_FMR_REGI_DASHBOARD_HYPRLNK
            const req = {
                type: '9',
                rbk_id: this.RbkId,
                cnt: this.Status,
                var: this.Selected_Date
            }; debugger;
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
                    // this.reportTotals1.TOTAL_RBKS += parseInt(
                    //   this.totalMandalDetails[i].TOTAL_RBKS
                    // );
                    // tslint:disable-next-line: radix
                    // this.reportTotals1.TOTAL_VILLAGES += parseInt(
                    //   this.totalMandalDetails[i].TOTAL_VILLAGES
                    // );
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
                        Villages: this.totalMandalDetails[i].VILLAGE_NAME,
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
            'Village Wise Report',
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
        this.onVillageChange.emit(encryptedString);
    }

}


