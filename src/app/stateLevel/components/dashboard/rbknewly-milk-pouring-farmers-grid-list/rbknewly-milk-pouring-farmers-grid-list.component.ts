import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-rbknewly-milk-pouring-farmers-grid-list',
    templateUrl: './rbknewly-milk-pouring-farmers-grid-list.component.html',
    styleUrls: ['./rbknewly-milk-pouring-farmers-grid-list.component.css']
})
export class RBKNewlyMilkPouringFarmersGridListComponent implements OnInit {

    @Input() Selected_Date: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() MandalId: any;
    @Input() MandalName: any;
    @Output() onRbkChange = new EventEmitter<string>();
    dailyRegisteredFarmersDetails = [];
    reportTotals = {
        S_No: '-',
        RBK: 'TOTAL',
        Village: '-',
        Farmer_Code: '-',
        Farmer_Name: '-',
        Mobile_Number: '-',
        Total_Milk_in_Litres: 0,
        Total_Milk_Amount: 0,
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
        this.reportTotals = {
            S_No: '-',
            RBK: 'TOTAL',
            Village: '-',
            Farmer_Code: '-',
            Farmer_Name: '-',
            Mobile_Number: '-',
            Total_Milk_in_Litres: 0,
            Total_Milk_Amount: 0,
        };
        try {

            const req = {
                type: "230",
                mandal_id: this.MandalId,
                var: this.Selected_Date
            }
            this.dailyRegisteredFarmersDetails = [];
            this.spinner.show();
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            debugger;
            if (res.success) {
                this.excelData = [];
                this.dailyRegisteredFarmersDetails = res.result;
                console.log(this.dailyRegisteredFarmersDetails);
                for (let i = 0; i < this.dailyRegisteredFarmersDetails.length; i++) {
                    this.reportTotals.Total_Milk_in_Litres += parseFloat(
                        this.dailyRegisteredFarmersDetails[i].TOTAL_MILK_IN_LITERS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.Total_Milk_Amount += parseFloat(
                        this.dailyRegisteredFarmersDetails[i].TOTAL_MILK_AMOUNT
                    );
                    let singleRow = {
                        S_No: i + 1,
                        RBK: this.dailyRegisteredFarmersDetails[i].RBK_NAME,
                        Village: this.dailyRegisteredFarmersDetails[i].VILLAGE_NAME,
                        Farmer_Code: this.dailyRegisteredFarmersDetails[i].FARMER_CODE,
                        Farmer_Name: this.dailyRegisteredFarmersDetails[i].FARMER_NAME,
                        Mobile_Number: this.dailyRegisteredFarmersDetails[i].MOBILE_NUMBER,
                        Total_Milk_in_Litres: this.dailyRegisteredFarmersDetails[i].TOTAL_MILK_IN_LITERS,
                        Total_Milk_Amount: this.dailyRegisteredFarmersDetails[i].TOTAL_MILK_AMOUNT,
                    };
                    this.excelData.push(singleRow);
                }
                this.reportTotals.Total_Milk_in_Litres = parseFloat(
                    this.reportTotals.Total_Milk_in_Litres.toFixed(2)
                );
                this.reportTotals.Total_Milk_Amount = parseFloat(
                    this.reportTotals.Total_Milk_Amount.toFixed(2)
                );
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
            'RBK Wise Report',
            true
        );
    }

    btnPDF(): void {
        const fileName = 'RBK Wise Report';
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
