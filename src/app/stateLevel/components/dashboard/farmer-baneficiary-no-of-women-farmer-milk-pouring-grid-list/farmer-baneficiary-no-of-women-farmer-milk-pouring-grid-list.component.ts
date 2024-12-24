import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list',
    templateUrl: './farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list.component.html',
    styleUrls: ['./farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list.component.css']
})
export class FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent implements OnInit {
    @Input() Selected_Date: any;
    @Input() villageId: any;
    @Input() villageName: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() MandalId: any;
    @Input() MandalName: any;
    @Input() rbkId: any;
    @Input() rbkName: any;
    @Input() Status: any;

    milkPouringDetails = [];
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
        private logger: LoggerService
    ) { }

    ngOnInit(): void {

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
            };
            this.milkPouringDetails = [];
            this.spinner.show();
            const req = {
                type: "30",
                village_id: this.villageId,
                cnt: this.Status,
                var: this.Selected_Date
            }
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            if (res.success) {
                this.excelData = [];
                this.milkPouringDetails = res.result;
                for (let i = 0; i < this.milkPouringDetails.length; i++) {
                    this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR);
                    this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);
                    this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_LTR);
                    this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT);

                    let singleRow = {
                        S_NO: i + 1,
                        DISTRICT: this.milkPouringDetails[i].DISTRICT_NAME,
                        RBK: this.milkPouringDetails[i].RBK_NAME,
                        VILLAGE: this.milkPouringDetails[i].VILLAGE_NAME,
                        FARMER_CODE: this.milkPouringDetails[i].FARMER_CODE,
                        FARMER_NAME: this.milkPouringDetails[i].NAME,
                        BUFFALO_MILK_IN_LTR: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR,
                        BUFFALO_MILK_AMOUNT: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                        COW_MILK__IN_LTR: this.milkPouringDetails[i].TOTAL_COW_MILK_LTR,
                        COW_MILK_AMOUNT: this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT,
                    };

                    this.excelData.push(singleRow);
                }
                this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2));
                this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2));
                this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2));
                this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2));
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
            'Farmer Wise Report',
            true
        );
    }

    btnPDF(): void {
        const fileName = 'Farmer Wise Report';
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


}
