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
    selector: 'app-village-no-of-women-farmer-milk-pouring-grid-list',
    templateUrl: './village-no-of-women-farmer-milk-pouring-grid-list.component.html',
    styleUrls: ['./village-no-of-women-farmer-milk-pouring-grid-list.component.css']
})
export class VillageNoOfWomenFarmerMilkPouringGridListComponent implements OnInit {

    @Input() Selected_Date: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() MandalId: any;
    @Input() MandalName: any;
    @Input() rbkId: any;
    @Input() rbkName: any;
    @Input() Status: any;
    @Output() onVillageChange = new EventEmitter<string>();
    milkPouringDetails = [];
    reportTotals = {
        S_No: '-',
        Villages: 'TOTAL',
        Farmers: 0,
        Total_Buffalo_Milk_in_Litres: 0,
        Total_Buffalo_Milk_Amount: 0,
        Total_Cow_milk_in_Litres: 0,
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
        private logger: LoggerService
    ) { }

    ngOnInit(): void {

        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_No: '-',
                Villages: 'TOTAL',
                Farmers: 0,
                Total_Buffalo_Milk_in_Litres: 0,
                Total_Buffalo_Milk_Amount: 0,
                Total_Cow_milk_in_Litres: 0,
                Total_Cow_Milk_Amount: 0,
            };
            this.milkPouringDetails = [];
            this.spinner.show();
            const req = {
                type: "290",
                rbk_id: this.rbkId,
                cnt: this.Status,
                var: this.Selected_Date
            }
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            if (res.success) {
                this.excelData = [];
                this.milkPouringDetails = res.result;
                for (let i = 0; i < this.milkPouringDetails.length; i++) {
                    this.reportTotals.Farmers += parseFloat(this.milkPouringDetails[i].TOTAL_FARMERS);
                    this.reportTotals.Total_Buffalo_Milk_in_Litres += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR);
                    this.reportTotals.Total_Buffalo_Milk_Amount += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);
                    this.reportTotals.Total_Cow_milk_in_Litres += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_LTR);
                    this.reportTotals.Total_Cow_Milk_Amount += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT);

                    let singleRow = {
                        S_No: i + 1,
                        Villages: this.milkPouringDetails[i].VILLAGE_NAME,
                        Noof_Women_Farmers_Pouring_Milk: this.milkPouringDetails[i].TOTAL_FARMERS,
                        Total_Buffalo_Milk_in_Litres: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR,
                        Total_Buffalo_Milk_Amount: this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
                        Total_Cow_milk_in_Litres: this.milkPouringDetails[i].TOTAL_COW_MILK_LTR,
                        Total_Cow_Milk_Amount: this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT,
                    };

                    this.excelData.push(singleRow);
                }
                this.reportTotals.Total_Buffalo_Milk_in_Litres = parseFloat(this.reportTotals.Total_Buffalo_Milk_in_Litres.toFixed(2));
                this.reportTotals.Total_Buffalo_Milk_Amount = parseFloat(this.reportTotals.Total_Buffalo_Milk_Amount.toFixed(2));
                this.reportTotals.Total_Cow_milk_in_Litres = parseFloat(this.reportTotals.Total_Cow_milk_in_Litres.toFixed(2));
                this.reportTotals.Total_Cow_Milk_Amount = parseFloat(this.reportTotals.Total_Cow_Milk_Amount.toFixed(2));
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
            'Village Wise Report',
            true
        );
    }

    btnPDF(): void {
        const fileName = 'Village Wise Report';
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
            rbkId: obj.RBK_CODE,
            rbkName: obj.RBK_NAME,
            villageId: obj.VILLAGE_CODE,
            villageName: obj.VILLAGE_NAME,
            Status: obj.STATUS,
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onVillageChange.emit(encryptedString);
    }

}
