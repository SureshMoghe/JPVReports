import {
    AfterViewInit,
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerApprovalService } from '../../services/farmer-approval.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-farmer-approval-state',
    templateUrl: './farmer-approval-state.component.html',
    styleUrls: ['./farmer-approval-state.component.css'],
})
export class FarmerApprovalStateComponent implements OnInit, OnDestroy, AfterViewInit {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onDistrictChange = new EventEmitter<string>();
    stateLevelDetails = [];
    PhaseType: any;
    phaseid: any;//  this.phaseid,
    phasename: any;// this.phasename,
    PhaseTypeList: [];
    //PhaseTypeid:any;
    fromDate: any;
    toDate: any;

    reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: 'TOTAL',
        TOTAL_MANDAL: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGE: 0,
        TOT_VV: 0,
        TOT_VV_LOGIN: 0,
        TOT_HH: 0,
        VV_REG_FARMERS: 0,
        APPROVED: 0,
        REJECTED: 0,
        PENDING_FMR_WITH_ANIMALS: 0,
        PENDING_FMR_WITH_OUT_ANIMALS: 0,
        VA_DA_APPROVED: 0,
        MENTOR_APPROVED: 0,
        RIC_APPROVED: 0,
        WITHOUT_MILCH: 0,
        MILCH_DATA_COL_PENDING: 0,
    };
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private approvalAPI: FarmerApprovalService,
        private utils: UtilsService,
        private stateAPI: StateService,
        private logger: LoggerService,
        private session: SessionService
    ) {

    }

    ngOnInit(): void {
        this.spinner.show();
        this.loadPhaseTypelist();
        if (
            this.phaseid === undefined ||
            this.phaseid === '' ||
            this.phaseid === null
        ) {
            this.phaseid = '0';
            this.phasename = 'ALL';
            this.phasename = 'ALL';
            this.phaseid = '0';
        }
        else {
            //this.PhaseTypeid=this.phaseid;
        }

        this.fromDate = this.session.getTodayDateString();
        this.toDate = this.session.getTodayDateString();
        this.loadReport();
        this.spinner.hide();
    }

    async btnfind(): Promise<void> {
        try {
            if (
                this.phaseid === undefined ||
                this.phaseid === '' ||
                this.phaseid === null
            ) {
                this.phaseid = '0';
                this.phasename = 'ALL';
                this.phasename = 'ALL';
                this.phaseid = '0';
            }
            // this.reportTotals = {
            //     S_NO: '-',
            //     DISTRICT_NAME: 'TOTAL',
            //     TOTAL_MANDAL: 0,
            //     TOTAL_RBK: 0,
            //     TOTAL_VILLAGE: 0,
            //     TOT_VV: 0,
            //     TOT_VV_LOGIN: 0,
            //     TOT_HH: 0,
            //     VV_REG_FARMERS: 0,
            //     APPROVED: 0,
            //     REJECTED: 0,
            //     PENDING_FMR_WITH_ANIMALS: 0,
            //     PENDING_FMR_WITH_OUT_ANIMALS: 0,
            //     VA_DA_APPROVED: 0,
            //     MENTOR_APPROVED: 0,
            //     RIC_APPROVED: 0,
            //     WITHOUT_MILCH: 0,
            //     MILCH_DATA_COL_PENDING: 0,
            // };


            this.loadReport();
        } catch (error) {
            this.spinner.hide();

        }

    }

    async loadPhaseTypelist(): Promise<void> {
        try {
            const req = {
                type: '9',
                districtId: '0',
            };
            this.PhaseTypeList = [];
            this.spinner.show();
            const res = await this.stateAPI.volunteerHHMandalReport(req);
            if (res.success) {
                this.PhaseTypeList = res.result;
                this.PhaseType = '0'; this.phaseid = '0';
                this.spinner.hide();
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
        }
    }

    onReportPhaseTypeChange(): void {
        debugger;
        this.phaseid = this.PhaseType;
        let obj = document.getElementById('PhaseType');
        this.phasename = obj[this.PhaseType].innerText;

    }

    async loadReport(): Promise<void> {
        try {
            console.log('Entering loadReport');
            this.excelData = [];
            this.stateLevelDetails = [];
            this.reportTotals = {
                S_NO: '-',
                DISTRICT_NAME: 'TOTAL',
                TOTAL_MANDAL: 0,
                TOTAL_RBK: 0,
                TOTAL_VILLAGE: 0,
                TOT_VV: 0,
                TOT_VV_LOGIN: 0,
                TOT_HH: 0,
                VV_REG_FARMERS: 0,
                APPROVED: 0,
                REJECTED: 0,
                PENDING_FMR_WITH_ANIMALS: 0,
                PENDING_FMR_WITH_OUT_ANIMALS: 0,
                VA_DA_APPROVED: 0,
                MENTOR_APPROVED: 0,
                RIC_APPROVED: 0,
                WITHOUT_MILCH: 0,
                MILCH_DATA_COL_PENDING: 0,
            };

            console.log('reportTotals reset:', this.reportTotals);
            const req = {
                phase: this.phaseid,
                fromDate: this.fromDate,
                toDate: this.toDate
            };
            console.log(req);
            this.spinner.show();
            const res = await this.approvalAPI.farmerApprovalStateReportmodifications(req);
            if (res.success) {
                this.excelData = [];
                this.stateLevelDetails = [];
                this.reportTotals = {
                    S_NO: '-',
                    DISTRICT_NAME: 'TOTAL',
                    TOTAL_MANDAL: 0,
                    TOTAL_RBK: 0,
                    TOTAL_VILLAGE: 0,
                    TOT_VV: 0,
                    TOT_VV_LOGIN: 0,
                    TOT_HH: 0,
                    VV_REG_FARMERS: 0,
                    APPROVED: 0,
                    REJECTED: 0,
                    PENDING_FMR_WITH_ANIMALS: 0,
                    PENDING_FMR_WITH_OUT_ANIMALS: 0,
                    VA_DA_APPROVED: 0,
                    MENTOR_APPROVED: 0,
                    RIC_APPROVED: 0,
                    WITHOUT_MILCH: 0,
                    MILCH_DATA_COL_PENDING: 0,
                };
                this.stateLevelDetails = res.result;
                for (let i = 0; i < this.stateLevelDetails.length; i++) {
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_MANDAL += parseInt(
                        this.stateLevelDetails[i].TOTAL_MANDAL
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_RBK += parseInt(
                        this.stateLevelDetails[i].TOTAL_RBK
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_VILLAGE += parseInt(
                        this.stateLevelDetails[i].TOTAL_VILLAGE
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV += parseInt(
                        this.stateLevelDetails[i].TOT_VV
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV_LOGIN += parseInt(
                        this.stateLevelDetails[i].TOT_VV_LOGIN
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_HH += parseInt(
                        this.stateLevelDetails[i].TOT_HH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VV_REG_FARMERS += parseInt(
                        this.stateLevelDetails[i].VV_REG_FARMERS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.APPROVED += parseInt(
                        this.stateLevelDetails[i].APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.REJECTED += parseInt(
                        this.stateLevelDetails[i].REJECTED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_ANIMALS += parseInt(
                        this.stateLevelDetails[i].PENDING_FMR_WITH_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_OUT_ANIMALS += parseInt(
                        this.stateLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VA_DA_APPROVED += parseInt(
                        this.stateLevelDetails[i].VA_DA_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MENTOR_APPROVED += parseInt(
                        this.stateLevelDetails[i].MENTOR_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.RIC_APPROVED += parseInt(
                        this.stateLevelDetails[i].RIC_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.WITHOUT_MILCH += parseInt(
                        this.stateLevelDetails[i].WITHOUT_MILCH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MILCH_DATA_COL_PENDING += parseInt(
                        this.stateLevelDetails[i].MILCH_DATA_COL_PENDING
                    );

                    let singleRow = {
                        S_NO: i + 1,
                        DISTRICT_NAME: this.stateLevelDetails[i].DISTRICT_NAME,
                        TOTAL_MANDAL: this.stateLevelDetails[i].TOTAL_MANDAL,
                        TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
                        TOTAL_VILLAGE: this.stateLevelDetails[i].TOTAL_VILLAGE,
                        TOT_VV: this.stateLevelDetails[i].TOT_VV,
                        TOT_VV_LOGIN: this.stateLevelDetails[i].TOT_VV_LOGIN,
                        TOT_HH: this.stateLevelDetails[i].TOT_HH,
                        VV_S_THH: this.stateLevelDetails[i].VV_REG_FARMERS,
                        APPROVED: this.stateLevelDetails[i].APPROVED,
                        REJECTED: this.stateLevelDetails[i].REJECTED,
                        PENDING_FMR_WITH_ANIMALS:
                            this.stateLevelDetails[i].PENDING_FMR_WITH_ANIMALS,
                        PENDING_FMR_WITH_OUT_ANIMALS:
                            this.stateLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS,
                        VA_DA_APPROVED: this.stateLevelDetails[i].VA_DA_APPROVED,
                        MENTOR_APPROVED: this.stateLevelDetails[i].MENTOR_APPROVED,
                        RIC_APPROVED: this.stateLevelDetails[i].RIC_APPROVED,
                        WITHOUT_MILCH: this.stateLevelDetails[i].WITHOUT_MILCH,
                        MILCH_DATA_COL_PENDING:
                            this.stateLevelDetails[i].MILCH_DATA_COL_PENDING,
                    };

                    this.excelData.push(singleRow);
                }
                this.excelData.push(this.reportTotals);
            } else {
                this.spinner.hide();
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
            'Farmer Approval State Level Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {};
            const fileName = 'stateLevelFarmerApprovalReport';
            let basePDF = '';
            this.spinner.show();
            const res = await this.approvalAPI.farmerApprovalStateReportPDF(req);
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
        debugger;
        const requestData = {
            districtId: obj.DIST_CODE,
            districtName: obj.DISTRICT_NAME,
            phaseid: this.phaseid,
            phasename: this.phasename,
            fromDate: this.fromDate,
            toDate: this.toDate
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
