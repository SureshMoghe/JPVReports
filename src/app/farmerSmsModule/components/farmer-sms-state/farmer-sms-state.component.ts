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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerSmsService } from '../../services/farmer-sms.service';

@Component({
    selector: 'app-farmer-sms-state',
    templateUrl: './farmer-sms-state.component.html',
    styleUrls: ['./farmer-sms-state.component.css'],
})
export class FarmerSmsStateComponent
    implements OnInit, OnDestroy, AfterViewInit {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onDistrictChange = new EventEmitter<string>();








    @Input() fromDate: any;
    @Input() toDate: any;
    @Input() phaseid: any;
    @Input() phasename: any;

    stateLevelDetails = [];
    reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        FARMERS_REGISTERED: 0,
        FMR_REGIS_SMS_SENT: 0,
        NO_OF_SCHEDULES_CREATED: 0,
        SCHEDULE_INVITATION_SENT: 0,
        VV_INVITED: 0,
        VV_INVITED_PENDING: 0,
        TOTAL_NO_OF_PARTICIPANTS: 0,
    };
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();
    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private farmerSms: FarmerSmsService,
        private utils: UtilsService
    ) { }

    ngOnInit(): void {
        this.loadReport();
        if (
            this.phaseid === undefined ||
            this.phaseid === '' ||
            this.phaseid === null
        ) {
            // this.phase_type='0';
            this.phaseid = '0';
            this.phasename = 'ALL';

        }

    }
    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_NO: '-',
                DISTRICT: 'TOTAL',
                TOTAL_MANDALS: 0,
                TOTAL_RBKS: 0,
                TOTAL_VILLAGES: 0,
                FARMERS_REGISTERED: 0,
                FMR_REGIS_SMS_SENT: 0,
                NO_OF_SCHEDULES_CREATED: 0,
                SCHEDULE_INVITATION_SENT: 0,
                VV_INVITED: 0,
                VV_INVITED_PENDING: 0,
                TOTAL_NO_OF_PARTICIPANTS: 0,
            };
            const req = {
                fromDate: this.fromDate,
                toDate: this.toDate,
                villageId: this.phaseid,
            };
            this.stateLevelDetails = [];
            this.spinner.show(); debugger;
            const res = await this.farmerSms.farmerSmsStateLevelReport(req);
            if (res.success) {
                this.excelData = [];
                this.stateLevelDetails = res.result;
                for (let i = 0; i < this.stateLevelDetails.length; i++) {
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_MANDALS += parseInt(
                        this.stateLevelDetails[i].TOTAL_MANDALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_RBKS += parseInt(
                        this.stateLevelDetails[i].TOTAL_RBKS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_VILLAGES += parseInt(
                        this.stateLevelDetails[i].TOTAL_VILLAGES
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.FARMERS_REGISTERED += parseInt(
                        this.stateLevelDetails[i].FARMERS_REGISTERED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.FMR_REGIS_SMS_SENT += parseInt(
                        this.stateLevelDetails[i].FMR_REGIS_SMS_SENT
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.NO_OF_SCHEDULES_CREATED += parseInt(
                        this.stateLevelDetails[i].NO_OF_SCHEDULES_CREATED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.SCHEDULE_INVITATION_SENT += parseInt(
                        this.stateLevelDetails[i].SCHEDULE_INVITATION_SENT
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VV_INVITED += parseInt(
                        this.stateLevelDetails[i].VV_INVITED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VV_INVITED_PENDING += parseInt(
                        this.stateLevelDetails[i].VV_INVITED_PENDING
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_NO_OF_PARTICIPANTS += parseInt(
                        this.stateLevelDetails[i].TOTAL_NO_OF_PARTICIPANTS
                    );
                    let singleRow = {
                        S_NO: i + 1,
                        DISTRICT: this.stateLevelDetails[i].DISTRICT,
                        TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
                        TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
                        TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
                        FARMERS_REGISTERED: this.stateLevelDetails[i].FARMERS_REGISTERED,
                        FMR_REGIS_SMS_SENT: this.stateLevelDetails[i].FMR_REGIS_SMS_SENT,
                        NO_OF_SCHEDULES_CREATED: this.stateLevelDetails[i]
                            .NO_OF_SCHEDULES_CREATED,
                        SCHEDULE_INVITATION_SENT: this.stateLevelDetails[i]
                            .SCHEDULE_INVITATION_SENT,
                        VV_INVITED: this.stateLevelDetails[i].VV_INVITED,
                        VV_INVITED_PENDING: this.stateLevelDetails[i].VV_INVITED_PENDING,
                        TOTAL_NO_OF_PARTICIPANTS: this.stateLevelDetails[i]
                            .TOTAL_NO_OF_PARTICIPANTS,
                    };

                    this.excelData.push(singleRow);
                }
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
            'Farmer SMS State Level Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {
                fromDate: this.fromDate,
                toDate: this.toDate,
                villageId: this.phaseid,
                columnValue: this.phasename
            };
            const fileName = 'stateLevelFarmerSmsReport';
            let basePDF = '';
            this.spinner.show();
            const res = await this.farmerSms.farmerSmsStateLevelReportPDF(req);
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

    btnGetDetails(obj): void {
        const requestData = {
            districtId: obj.DIST_CODE,
            districtName: obj.DISTRICT,
            fromDate: this.fromDate,
            toDate: this.toDate,
            phaseid: this.phaseid,
            phasename: this.phasename,
        };
        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onDistrictChange.emit(encryptedString);
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
