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
    selector: 'app-womenfarmer-reg-farmer-details',
    templateUrl: './womenfarmer-reg-farmer-details.component.html',
    styleUrls: ['./womenfarmer-reg-farmer-details.component.css']
})
export class WomenfarmerRegFarmerDetailsComponent implements OnInit {
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

    dailyRegisteredFarmersDetails = [];
    reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: '-',
        RBK_NAME: '-',
        VILLAGE_NAME: '-',
        AMC_ID: '',
        FARMER_CODE: '-',
        NAME: '',
        MOBILE_NUMBER: '',
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

            const req = {
                type: "20",
                village_id: this.villageId,
                cnt: this.Status,
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
                    let singleRow = {
                        S_NO: i + 1,
                        DISTRICT: this.dailyRegisteredFarmersDetails[i].DISTRICT_NAME,
                        RBK: this.dailyRegisteredFarmersDetails[i].RBK_NAME,
                        VILLAGE: this.dailyRegisteredFarmersDetails[i].VILLAGE_NAME,
                        SOCIETY_ID: this.dailyRegisteredFarmersDetails[i].AMC_ID,
                        FARMER_CODE: this.dailyRegisteredFarmersDetails[i].FARMER_CODE,
                        FARMER_NAME: this.dailyRegisteredFarmersDetails[i].NAME,
                        MOBILE_NUMBER: this.dailyRegisteredFarmersDetails[i].MOBILE_NUMBER,
                    };

                    this.excelData.push(singleRow);
                }
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
