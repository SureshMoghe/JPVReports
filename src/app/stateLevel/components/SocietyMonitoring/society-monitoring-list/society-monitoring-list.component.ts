import { Component, EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { VolunteerFarmerDataService } from 'src/app/volunteerFarmerDataModule/services/volunteer-farmer-data.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-society-monitoring-list',
    templateUrl: './society-monitoring-list.component.html',
    styleUrls: ['./society-monitoring-list.component.css']
})
export class SocietyMonitoringListComponent implements OnInit {

    @Input() fromDate: any;
    @Input() toDate: any;
    @Input() districtId: any;
    @Input() districtName: any;
    @Output() onSocietyChange = new EventEmitter<string>();
    stateLevelDetails = [];
    reportTotals = {
        S_NO: '-',
        DATE: '-',
        DISTRICT: 'TOTAL',
        MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
        MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
        EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
        EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
        TOATL_NO_OF_SOCIETIES: 0
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


        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_NO: '-',
                DATE: '-',
                DISTRICT: 'TOTAL',
                MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                TOATL_NO_OF_SOCIETIES: 0
            };
            const req = {
                type: "6",
                fromDate: this.fromDate,
                toDate: this.toDate,
                districtId: this.session.districtId,
            };
            console.log(req);
            this.spinner.show();
            const res = await this.stateapi.SocietyMonotoringService(req);
            if (res.success) {
                this.reportTotals = {
                    S_NO: '-',
                    DATE: '-',
                    DISTRICT: 'TOTAL',
                    MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                    MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                    EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                    EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                    TOATL_NO_OF_SOCIETIES: 0
                };
                this.excelData = [];
                this.stateLevelDetails = res.result;


                for (let i = 0; i < this.stateLevelDetails.length; i++) {
                    this.reportTotals.MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED += parseInt(this.stateLevelDetails[i].MORNING_SOCIETY_COUNT);
                    this.reportTotals.MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED += parseInt(this.stateLevelDetails[i].NOT_RECIEVED_M);
                    this.reportTotals.EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED += parseInt(this.stateLevelDetails[i].EVENING_SOCIETY_COUNT);
                    this.reportTotals.EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED += parseInt(this.stateLevelDetails[i].NOT_RECIEVED_E);
                    this.reportTotals.TOATL_NO_OF_SOCIETIES += parseInt(this.stateLevelDetails[i].DAY_WISE_SOCIETY_COUNTS);

                    let singleRow = {
                        S_NO: i + 1,
                        DATE: this.stateLevelDetails[i].TXN_DATE,
                        DISTRICT: this.stateLevelDetails[i].DISTRICT,
                        MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: this.stateLevelDetails[i].MORNING_SOCIETY_COUNT,
                        MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: this.stateLevelDetails[i].NOT_RECIEVED_M,
                        EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: this.stateLevelDetails[i].EVENING_SOCIETY_COUNT,
                        EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: this.stateLevelDetails[i].NOT_RECIEVED_E,
                        TOATL_NO_OF_SOCIETIES: this.stateLevelDetails[i].DAY_WISE_SOCIETY_COUNTS,
                    }
                    this.excelData.push(singleRow);

                }
                this.excelData.push(this.reportTotals);
            } else {
                this.reportTotals = {
                    S_NO: '-',
                    DATE: '-',
                    DISTRICT: 'TOTAL',
                    MORNING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                    MORNING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                    EVENING_SHIFT_NO_OF_SOCIETIES_DATA_RECEIVED: 0,
                    EVENING_SHIFT_NO_OF_SOCIETIES_DATA_NOT_RECEIVED: 0,
                    TOATL_NO_OF_SOCIETIES: 0
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
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Society Monitoring Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {
                fromDate: this.fromDate,
                toDate: this.toDate, uidNumber: this.session.districtId,
            };
            const fileName = 'Society Monitoring Report';
            let basePDF = '';
            this.spinner.show();
            const res = await this.vvFarmerAPI.vvFarmerDataStatePDFReport(req);
            if (res.success) {
                basePDF = res.result;
                this.utils.downloadPdfFile(basePDF, fileName);
            } else {
                this.toast.info(res.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
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

    btnGetDetailsMrg(obj: any) {
        debugger;
        const requestData = {
            districtId: obj.DISTRICT_CODE,
            districtName: obj.DISTRICT,
            SelectDate: obj.TXN_DATE,
            type: "2",

        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onSocietyChange.emit(encryptedString);

    }
    btnGetDetailsEvg(obj: any) {
        debugger;
        const requestData = {
            districtId: obj.DISTRICT_CODE,
            districtName: obj.DISTRICT,
            SelectDate: obj.TXN_DATE,
            type: "3",


        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onSocietyChange.emit(encryptedString);

    }
    btnGetDetailsDay(obj: any) {
        debugger;
        const requestData = {
            districtId: obj.DISTRICT_CODE,
            districtName: obj.DISTRICT,
            SelectDate: obj.TXN_DATE,
            type: "4",


        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onSocietyChange.emit(encryptedString);

    }


    btnGetDetailsMrgNotRece(obj: any) {
        debugger;
        const requestData = {
            districtId: obj.DISTRICT_CODE,
            districtName: obj.DISTRICT,
            SelectDate: obj.TXN_DATE,
            type: "5"
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onSocietyChange.emit(encryptedString);
    }
    btnGetDetailsEvgNotRec(obj: any) {
        debugger;
        const requestData = {
            districtId: obj.DISTRICT_CODE,
            districtName: obj.DISTRICT,
            SelectDate: obj.TXN_DATE,
            type: "1"
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onSocietyChange.emit(encryptedString);
    }


}
