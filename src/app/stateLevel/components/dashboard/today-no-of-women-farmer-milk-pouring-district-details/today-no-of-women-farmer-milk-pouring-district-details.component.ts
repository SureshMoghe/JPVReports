import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
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
    selector: 'app-today-no-of-women-farmer-milk-pouring-district-details',
    templateUrl: './today-no-of-women-farmer-milk-pouring-district-details.component.html',
    styleUrls: ['./today-no-of-women-farmer-milk-pouring-district-details.component.css']
})
export class TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
    milkPouringDetails = [];
    districtId: any;
    @Input() Selected_Date: any;
    reportTotals = {
        S_No: '-',
        District: 'TOTAL',
        Mandals: 0,
        RBKs: 0,
        Villages: 0,
        Farmers: 0,
        Total_Buffalo_Milk_in_Litres: 0,
        Total_Buffalo_Milk_Amount: 0,
        Total_Cow_milk_in_Litres: 0,
        Total_Cow_Milk_Amount: 0,
    };
    excelData = [];
    @Output() onDistrictChange = new EventEmitter<string>();
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptionsaLL();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private dashboardAPI: DashboardService,
        private utils: UtilsService,
        private logger: LoggerService,
        private stateAPI: StateService,
        private session: SessionService
    ) { }

    ngOnInit(): void {
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_No: '-',
                District: 'TOTAL',
                Mandals: 0,
                RBKs: 0,
                Villages: 0,
                Farmers: 0,
                Total_Buffalo_Milk_in_Litres: 0,
                Total_Buffalo_Milk_Amount: 0,
                Total_Cow_milk_in_Litres: 0,
                Total_Cow_Milk_Amount: 0,
            };
            this.milkPouringDetails = [];
            this.spinner.show();
            const req = {
                type: "260",
                cnt: '9',
                district_id: this.session.dashboarddistrictid,
                var: this.Selected_Date
            }
            const res = await this.stateAPI.DashboardDailycountsRptGet(req);
            if (res.success) {
                this.excelData = [];
                this.milkPouringDetails = res.result;
                for (let i = 0; i < this.milkPouringDetails.length; i++) {
                    this.reportTotals.Mandals += parseFloat(this.milkPouringDetails[i].TOTAL_MANDALS);
                    this.reportTotals.RBKs += parseFloat(this.milkPouringDetails[i].TOTAL_RBKS);
                    this.reportTotals.Villages += parseFloat(this.milkPouringDetails[i].TOTAL_VILLAGES);
                    this.reportTotals.Farmers += parseFloat(this.milkPouringDetails[i].TOTAL_FARMERS);
                    this.reportTotals.Total_Buffalo_Milk_in_Litres += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_LTR);
                    this.reportTotals.Total_Buffalo_Milk_Amount += parseFloat(this.milkPouringDetails[i].TOTAL_BUFFALO_MILK_AMOUNT);
                    this.reportTotals.Total_Cow_milk_in_Litres += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_LTR);
                    this.reportTotals.Total_Cow_Milk_Amount += parseFloat(this.milkPouringDetails[i].TOTAL_COW_MILK_AMOUNT);

                    let singleRow = {
                        S_No: i + 1,
                        District: this.milkPouringDetails[i].DISTRICT_NAME,
                        Mandals: this.milkPouringDetails[i].TOTAL_MANDALS,
                        RBKs: this.milkPouringDetails[i].TOTAL_RBKS,
                        Villages: this.milkPouringDetails[i].TOTAL_VILLAGES,
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
