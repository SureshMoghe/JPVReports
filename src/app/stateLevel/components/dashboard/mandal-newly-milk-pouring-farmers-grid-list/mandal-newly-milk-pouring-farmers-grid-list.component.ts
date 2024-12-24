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
    selector: 'app-mandal-newly-milk-pouring-farmers-grid-list',
    templateUrl: './mandal-newly-milk-pouring-farmers-grid-list.component.html',
    styleUrls: ['./mandal-newly-milk-pouring-farmers-grid-list.component.css']
})
export class MandalNewlyMilkPouringFarmersGridListComponent implements OnInit {

    @Input() Selected_Date: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Output() onMandalChange = new EventEmitter<string>();
    dailyRegisteredFarmersDetails = [];
    // reportTotals = {
    //     S_NO: '-',
    //     DISTRICT_NAME: '-',
    //     RBK_NAME: '-',
    //     VILLAGE_NAME: '-',
    //     AMC_ID: '',
    //     FARMER_CODE: '-',
    //     NAME: '',
    //     MOBILE_NUMBER: '',
    // };

    reportTotals = {
        S_No: '-',
        Mandals: 'TOTAL',
        Rbks: 0,
        Villages: 0,
        Total_Women_Farmers_Registered: 0,
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
            Mandals: 'TOTAL',
            Rbks: 0,
            Villages: 0,
            Total_Women_Farmers_Registered: 0,
        };
        try {
            const req = {
                type: "220",
                district_id: this.districtId,
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
                    // this.reportTotals.Mandals += parseInt(
                    //     this.dailyRegisteredFarmersDetails[i].TOTAL_MANDALS
                    //   );
                    this.reportTotals.Rbks += parseInt(
                        this.dailyRegisteredFarmersDetails[i].TOTAL_RBKS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.Villages += parseInt(
                        this.dailyRegisteredFarmersDetails[i].TOTAL_VILLAGES
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.Total_Women_Farmers_Registered += parseInt(
                        this.dailyRegisteredFarmersDetails[i].TOTAL_FARMERS
                    );

                    let singleRow = {
                        S_No: i + 1,
                        //  Districts: this.dailyRegisteredFarmersDetails[i].DISTRICT_NAME,
                        Mandals: this.dailyRegisteredFarmersDetails[i].MANDAL_NAME,
                        Rbks: this.dailyRegisteredFarmersDetails[i].TOTAL_RBKS,
                        Villages: this.dailyRegisteredFarmersDetails[i].TOTAL_VILLAGES,
                        Total_Women_Farmers_Registered: this.dailyRegisteredFarmersDetails[i].TOTAL_FARMERS,
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
            'Mandal Wise Report',
            true
        );
    }

    btnPDF(): void {
        const fileName = 'Mandal Wise Report';
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
            MandalName: obj.MANDAL_NAME
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onMandalChange.emit(encryptedString);
    }


}
