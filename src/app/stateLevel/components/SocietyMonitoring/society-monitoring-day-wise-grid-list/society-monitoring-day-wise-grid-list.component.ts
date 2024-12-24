import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { SessionService } from 'src/app/shared/services/session.service';
import { VolunteerFarmerDataService } from 'src/app/volunteerFarmerDataModule/services/volunteer-farmer-data.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-society-monitoring-day-wise-grid-list',
    templateUrl: './society-monitoring-day-wise-grid-list.component.html',
    styleUrls: ['./society-monitoring-day-wise-grid-list.component.css']
})
export class SocietyMonitoringDayWiseGridListComponent implements OnInit {

    @Input() districtId: any;
    @Input() districtName: any;
    @Input() SelectDate: any;
    @Input() type: any;
    // @Input() MRGEVGDataRecei: any;
    // @Input() TotalDataRecei: any;
    Type: number;
    stateLevelDetails = [];
    reportTotals = {
        S_NO: '-',
        DATE: '-',
        DISTRICT: 'TOTAL',
        Society_Code: '-',
        SOCIETY_NAME: '-',
        NO_OF_REGISTERED_FARMERS: 0,
        NO_OF_MILK_POURERS: 0,
        TOTAL_MILK_QTY: 0,
        TOTAL_AMOUNT: 0,
        SHIFT: '-'
    };
    reportTotalsone = {
        S_NO: '-',
        DATE: '-',
        DISTRICT: 'TOTAL',
        Society_Code: '-',
        SOCIETY_NAME: '-',
        NO_OF_REGISTERED_FARMERS: 0,
        NO_OF_MILK_POURERS: 0,
        TOTAL_MILK_QTY: 0,
        TOTAL_AMOUNT: 0,
    };
    reportTotalstwo = {
        S_NO: '-',
        DATE: '-',
        DISTRICT: 'TOTAL',
        Society_Code: '-',
        SOCIETY_NAME: '-',
        NO_OF_REGISTERED_FARMERS: 0,
        NO_OF_MILK_POURERS: 0,
        LAST_MILK_RECEVIED_DATE: '-',
        SHIFT: '-'
    };
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private vvFarmerAPI: VolunteerFarmerDataService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private stateapi: StateService,
    ) { }

    ngOnInit(): void {
        debugger;
        if (this.type == 2 || this.type == 3) {
            this.Type = 2;
        }
        else if (this.type == 4) {
            this.Type = 4;
        }
        else if (this.type == 5 || this.type == 1) {
            this.Type = 5;
        }
        else {
            this.Type = 0;
        }
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_NO: '-',
                DATE: '-',
                DISTRICT: 'TOTAL',
                Society_Code: '-',
                SOCIETY_NAME: '-',
                NO_OF_REGISTERED_FARMERS: 0,
                NO_OF_MILK_POURERS: 0,
                TOTAL_MILK_QTY: 0,
                TOTAL_AMOUNT: 0,
                SHIFT: '-'
            };
            this.reportTotalstwo = {
                S_NO: '-',
                DATE: '-',
                DISTRICT: 'TOTAL',
                Society_Code: '-',
                SOCIETY_NAME: '-',
                NO_OF_REGISTERED_FARMERS: 0,
                NO_OF_MILK_POURERS: 0,
                LAST_MILK_RECEVIED_DATE: '-',
                SHIFT: '-'
            };
            const req = {
                type: this.type,
                districtId: this.districtId,
                fromDate: this.SelectDate
            };
            console.log(req);
            this.spinner.show();
            const res = await this.stateapi.SocietyMonotoringService(req);
            if (res.success) {
                this.spinner.hide();
                this.reportTotals = {
                    S_NO: '-',
                    DATE: '-',
                    DISTRICT: 'TOTAL',
                    Society_Code: '-',
                    SOCIETY_NAME: '-',
                    NO_OF_REGISTERED_FARMERS: 0,
                    NO_OF_MILK_POURERS: 0,
                    TOTAL_MILK_QTY: 0,
                    TOTAL_AMOUNT: 0,
                    SHIFT: '-'
                };
                this.reportTotalstwo = {
                    S_NO: '-',
                    DATE: '-',
                    DISTRICT: 'TOTAL',
                    Society_Code: '-',
                    SOCIETY_NAME: '-',
                    NO_OF_REGISTERED_FARMERS: 0,
                    NO_OF_MILK_POURERS: 0,
                    LAST_MILK_RECEVIED_DATE: '-',
                    SHIFT: '-'
                };
                debugger;

                this.excelData = [];
                this.stateLevelDetails = res.result;
                console.log(this.stateLevelDetails)
                for (let i = 0; i < this.stateLevelDetails.length; i++) {

                    if (this.Type == 5) {
                        this.reportTotalstwo.NO_OF_REGISTERED_FARMERS += parseInt(this.stateLevelDetails[i].NO_OF_REGIS_FMRS);
                        this.reportTotalstwo.NO_OF_MILK_POURERS += parseInt(this.stateLevelDetails[i].NO_OF_MILK_POURERS);
                    }
                    else {
                        this.reportTotals.NO_OF_REGISTERED_FARMERS += parseInt(this.stateLevelDetails[i].NO_OF_REGIS_FMRS);
                        this.reportTotals.NO_OF_MILK_POURERS += parseInt(this.stateLevelDetails[i].NO_OF_MILK_POURERS);
                        this.reportTotals.TOTAL_MILK_QTY += parseFloat(this.stateLevelDetails[i].TOTAL_MILK_QTY);
                        this.reportTotals.TOTAL_AMOUNT += parseFloat(this.stateLevelDetails[i].TOTAL_AMOUNT);
                    }


                    let SingleRow = {
                        S_NO: i + 1,
                        DATE: this.stateLevelDetails[i].TXN_DATE,
                        DISTRICT: this.stateLevelDetails[i].DISTRICT,
                        SOCIETY_CODE: this.stateLevelDetails[i].SOCIETY_CODE,
                        SOCIETY_NAME: this.stateLevelDetails[i].SOCIETY_NAME,
                        NO_OF_REGISTERED_FARMERS: this.stateLevelDetails[i].NO_OF_REGIS_FMRS,
                        NO_OF_MILK_POURERS: this.stateLevelDetails[i].NO_OF_MILK_POURERS,
                        QUANTITY: this.stateLevelDetails[i].TOTAL_MILK_QTY,
                        AMOUNT: this.stateLevelDetails[i].TOTAL_AMOUNT,
                        SHIFT: this.stateLevelDetails[i].SHIFT
                    }
                    let SingleRowone = {
                        S_NO: i + 1,
                        DATE: this.stateLevelDetails[i].TXN_DATE,
                        DISTRICT: this.stateLevelDetails[i].DISTRICT,
                        SOCIETY_CODE: this.stateLevelDetails[i].SOCIETY_CODE,
                        SOCIETY_NAME: this.stateLevelDetails[i].SOCIETY_NAME,
                        NO_OF_REGISTERED_FARMERS: this.stateLevelDetails[i].NO_OF_REGIS_FMRS,
                        NO_OF_MILK_POURERS: this.stateLevelDetails[i].NO_OF_MILK_POURERS,
                        QUANTITY: this.stateLevelDetails[i].TOTAL_MILK_QTY,
                        AMOUNT: this.stateLevelDetails[i].TOTAL_AMOUNT,

                    }
                    let SingleRowtwo = {
                        S_NO: i + 1,
                        DATE: this.stateLevelDetails[i].TXN_DATE,
                        DISTRICT: this.stateLevelDetails[i].DISTRICT,
                        SOCIETY_CODE: this.stateLevelDetails[i].SOCIETY_CODE,
                        SOCIETY_NAME: this.stateLevelDetails[i].SOCIETY_NAME,
                        NO_OF_REGISTERED_FARMERS: this.stateLevelDetails[i].NO_OF_REGIS_FMRS,
                        NO_OF_MILK_POURERS: this.stateLevelDetails[i].NO_OF_MILK_POURERS,
                        LAST_MILK_RECEVIED_DATE: this.stateLevelDetails[i].TXN_DATE,
                        SHIFT: this.stateLevelDetails[i].SHIFT

                    }
                    if (this.Type == 4) {
                        this.excelData.push(SingleRowone);
                    }
                    else if (this.Type == 5) {
                        this.excelData.push(SingleRowtwo);
                    }
                    else {
                        this.excelData.push(SingleRow);
                    }

                }
                if (this.Type == 4) {
                    this.excelData.push(this.reportTotals);
                }
                else if (this.Type == 5) {
                    this.excelData.push(this.reportTotalstwo);
                }
                else {
                    this.excelData.push(this.reportTotals);
                }

            } else {
                this.reportTotals = {
                    S_NO: '-',
                    DATE: '-',
                    DISTRICT: 'TOTAL',
                    Society_Code: '-',
                    SOCIETY_NAME: '-',
                    NO_OF_REGISTERED_FARMERS: 0,
                    NO_OF_MILK_POURERS: 0,
                    TOTAL_MILK_QTY: 0,
                    TOTAL_AMOUNT: 0,
                    SHIFT: '-'
                };
                this.toast.info(res.message);
            }
            this.rerender();
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnExcel(): void {

        if (this.Type == 4) {
            this.utils.JSONToCSVConvertor(
                this.excelData,
                'Total Societies Data Received Report',
                true
            );
        }
        else if (this.Type == 5) {
            this.utils.JSONToCSVConvertor(
                this.excelData,
                'Societies Data Not Received Report',
                true
            );
        }
        else {
            this.utils.JSONToCSVConvertor(
                this.excelData,
                'Society Monitoring Report',
                true
            );
        }
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
