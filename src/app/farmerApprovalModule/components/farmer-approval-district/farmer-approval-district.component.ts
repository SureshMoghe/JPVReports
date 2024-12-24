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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerApprovalService } from '../../services/farmer-approval.service';

@Component({
    selector: 'app-farmer-approval-district',
    templateUrl: './farmer-approval-district.component.html',
    styleUrls: ['./farmer-approval-district.component.css'],
})
export class FarmerApprovalDistrictComponent
    implements OnInit, OnDestroy, AfterViewInit {
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() phaseid: any;
    @Input() phasename: any;
    @Input() fromDate: any;
    @Input() toDate: any;
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onMandalChange = new EventEmitter<string>();
    districtLevelDetails = [];

    reportTotals = {
        S_NO: '-',
        MANDAL_NAME: 'TOTAL',
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
        private logger: LoggerService
    ) { }

    ngOnInit(): void {
        if (
            this.districtId !== null &&
            this.districtId !== '' &&
            this.districtId !== null
        ) {
            this.loadReport();
        }
    }

    async loadReport(): Promise<void> {
        try {
            this.reportTotals = {
                S_NO: '-',
                MANDAL_NAME: 'TOTAL',
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
            const req = {
                districtId: this.districtId,
                phase: this.phaseid,
                fromDate: this.fromDate,
                toDate: this.toDate
            };
            console.log(req);
            this.spinner.show(); debugger;
            const res = await this.approvalAPI.farmerApprovalDistrictReportmodifications(req);//farmerApprovalDistrictReport
            if (res.success) {
                this.excelData = [];
                this.districtLevelDetails = res.result;
                for (let i = 0; i < this.districtLevelDetails.length; i++) {
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_RBK += parseInt(
                        this.districtLevelDetails[i].TOTAL_RBK
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_VILLAGE += parseInt(
                        this.districtLevelDetails[i].TOTAL_VILLAGE
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV += parseInt(
                        this.districtLevelDetails[i].TOT_VV
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV_LOGIN += parseInt(
                        this.districtLevelDetails[i].TOT_VV_LOGIN
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_HH += parseInt(
                        this.districtLevelDetails[i].TOT_HH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VV_REG_FARMERS += parseInt(
                        this.districtLevelDetails[i].VV_REG_FARMERS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.APPROVED += parseInt(
                        this.districtLevelDetails[i].APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.REJECTED += parseInt(
                        this.districtLevelDetails[i].REJECTED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_ANIMALS += parseInt(
                        this.districtLevelDetails[i].PENDING_FMR_WITH_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_OUT_ANIMALS += parseInt(
                        this.districtLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VA_DA_APPROVED += parseInt(
                        this.districtLevelDetails[i].VA_DA_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MENTOR_APPROVED += parseInt(
                        this.districtLevelDetails[i].MENTOR_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.RIC_APPROVED += parseInt(
                        this.districtLevelDetails[i].RIC_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.WITHOUT_MILCH += parseInt(
                        this.districtLevelDetails[i].WITHOUT_MILCH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MILCH_DATA_COL_PENDING += parseInt(
                        this.districtLevelDetails[i].MILCH_DATA_COL_PENDING
                    );

                    let singleRow = {
                        S_NO: i + 1,
                        MANDAL_NAME: this.districtLevelDetails[i].MANDAL_NAME,
                        TOTAL_RBK: this.districtLevelDetails[i].TOTAL_RBK,
                        TOTAL_VILLAGE: this.districtLevelDetails[i].TOTAL_VILLAGE,
                        TOT_VV: this.districtLevelDetails[i].TOT_VV,
                        TOT_VV_LOGIN: this.districtLevelDetails[i].TOT_VV_LOGIN,
                        TOT_HH: this.districtLevelDetails[i].TOT_HH,
                        VV_S_THH: this.districtLevelDetails[i].VV_REG_FARMERS,
                        APPROVED: this.districtLevelDetails[i].APPROVED,
                        REJECTED: this.districtLevelDetails[i].REJECTED,
                        PENDING_FMR_WITH_ANIMALS:
                            this.districtLevelDetails[i].PENDING_FMR_WITH_ANIMALS,
                        PENDING_FMR_WITH_OUT_ANIMALS:
                            this.districtLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS,
                        VA_DA_APPROVED: this.districtLevelDetails[i].VA_DA_APPROVED,
                        MENTOR_APPROVED: this.districtLevelDetails[i].MENTOR_APPROVED,
                        RIC_APPROVED: this.districtLevelDetails[i].RIC_APPROVED,
                        WITHOUT_MILCH: this.districtLevelDetails[i].WITHOUT_MILCH,
                        MILCH_DATA_COL_PENDING:
                            this.districtLevelDetails[i].MILCH_DATA_COL_PENDING,
                    };

                    this.excelData.push(singleRow);
                }
                this.excelData.push(this.reportTotals);
            } else {
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
            'Farmer Approval District Level Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {
                districtId: this.districtId,
            };
            const fileName = 'districtLevelFarmerApprovalReport';
            let basePDF = '';
            this.spinner.show();
            const res = await this.approvalAPI.farmerApprovalDistrictReportPDF(req);
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
            districtName: obj.DISTRICT_NAME,
            mandalId: obj.MANDAL_CODE,
            mandalName: obj.MANDAL_NAME,
            phaseid: this.phaseid,
            phasename: this.phasename,
            fromDate: this.fromDate,
            toDate: this.toDate

        };

        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onMandalChange.emit(encryptedString);
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
