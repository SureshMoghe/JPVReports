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
    selector: 'app-farmer-approval-routes',
    templateUrl: './farmer-approval-routes.component.html',
    styleUrls: ['./farmer-approval-routes.component.css'],
})
export class FarmerApprovalRoutesComponent
    implements OnInit, OnDestroy, AfterViewInit {
        @Output() onRBkChange = new EventEmitter<string>();
    @Input() districtId: any;
    @Input() districtName: any;
    @Input() mandalId: any;
    @Input() mandalName: any;
    @Input() phaseid: any;
    @Input() phasename: any;
    @Input() fromDate: any;
    @Input() toDate: any;
    routeLevelDetails = [];

    reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        VILLAGES: 0,
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
            this.districtId === null &&
            this.districtId === '' &&
            this.districtId === undefined
        ) {
            return;
        }
        if (
            this.mandalId === null &&
            this.mandalId === '' &&
            this.mandalId === undefined
        ) {
            return;
        }
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            debugger;
            this.reportTotals = {
                S_NO: '-',
                RBK_NAME: 'TOTAL',
                VILLAGES: 0,
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
                mandalId: this.mandalId,
                phase: this.phaseid,
                fromDate: this.fromDate,
                toDate: this.toDate

            };
            console.log(req);

            this.spinner.show();
            const res = await this.approvalAPI.farmerApprovalRouteLevelmodifications(req);//farmerApprovalRouteLevel
            if (res.success) {
                this.excelData = [];
                this.routeLevelDetails = res.result;
                for (let i = 0; i < this.routeLevelDetails.length; i++) {

                    this.reportTotals.VILLAGES += parseInt(
                        this.routeLevelDetails[i].TOTAL_VILLAGE);
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV += parseInt(
                        this.routeLevelDetails[i].TOT_VV
                    );

                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_VV_LOGIN += parseInt(
                        this.routeLevelDetails[i].TOT_VV_LOGIN
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOT_HH += parseInt(
                        this.routeLevelDetails[i].TOT_HH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VV_REG_FARMERS += parseInt(
                        this.routeLevelDetails[i].VV_REG_FARMERS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.APPROVED += parseInt(
                        this.routeLevelDetails[i].APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.REJECTED += parseInt(
                        this.routeLevelDetails[i].REJECTED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_ANIMALS += parseInt(
                        this.routeLevelDetails[i].PENDING_FMR_WITH_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.PENDING_FMR_WITH_OUT_ANIMALS += parseInt(
                        this.routeLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.VA_DA_APPROVED += parseInt(
                        this.routeLevelDetails[i].VA_DA_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MENTOR_APPROVED += parseInt(
                        this.routeLevelDetails[i].MENTOR_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.RIC_APPROVED += parseInt(
                        this.routeLevelDetails[i].RIC_APPROVED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.WITHOUT_MILCH += parseInt(
                        this.routeLevelDetails[i].WITHOUT_MILCH
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.MILCH_DATA_COL_PENDING += parseInt(
                        this.routeLevelDetails[i].MILCH_DATA_COL_PENDING
                    );

                    let singleRow = {
                        S_NO: i + 1,
                        RBK_NAME: this.routeLevelDetails[i].RBK_NAME,
                        VILLAGES: this.routeLevelDetails[i].TOTAL_VILLAGE,
                        TOT_VV: this.routeLevelDetails[i].TOT_VV,
                        TOT_VV_LOGIN: this.routeLevelDetails[i].TOT_VV_LOGIN,
                        TOT_HH: this.routeLevelDetails[i].TOT_HH,
                        VV_S_THH: this.routeLevelDetails[i].VV_REG_FARMERS,
                        APPROVED: this.routeLevelDetails[i].APPROVED,
                        REJECTED: this.routeLevelDetails[i].REJECTED,
                        PENDING_FMR_WITH_ANIMALS:
                            this.routeLevelDetails[i].PENDING_FMR_WITH_ANIMALS,
                        PENDING_FMR_WITH_OUT_ANIMALS:
                            this.routeLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS,
                        VA_DA_APPROVED: this.routeLevelDetails[i].VA_DA_APPROVED,
                        MENTOR_APPROVED: this.routeLevelDetails[i].MENTOR_APPROVED,
                        RIC_APPROVED: this.routeLevelDetails[i].RIC_APPROVED,
                        WITHOUT_MILCH: this.routeLevelDetails[i].WITHOUT_MILCH,
                        MILCH_DATA_COL_PENDING:
                            this.routeLevelDetails[i].MILCH_DATA_COL_PENDING,
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
            'Farmer Approval Route Level Report',
            true
        );
    }

    async btnPDF(): Promise<void> {
        try {
            const req = {
                districtId: this.districtId,
                mandalId: this.mandalId,
                phase: this.phaseid,
                fromDate: this.fromDate,
                toDate: this.toDate
            };
            const fileName = 'routeLevelFarmerApprovalReport';
            let basePDF = '';
            this.spinner.show();
            const res = await this.approvalAPI.farmerApprovalRouteLevelPDF(req);
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
            mandalId: obj.MANDAL_CODE,
            mandalName: obj.MANDAL_NAME,
            route: obj.ROUTE_NO,
            routeName: obj.ROUTE_NAME,
            rbkId: obj.RBK_CODE,
            rbkName: obj.RBK_NAME,
            phaseid: this.phaseid,
            phasename: this.phasename,
            fromDate: this.fromDate,
            toDate: this.toDate


        };

        const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
        this.onRBkChange.emit(encryptedString);
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
