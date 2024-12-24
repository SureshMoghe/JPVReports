import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-farmer-route-wise-milk-pouring-report',
    templateUrl: './farmer-route-wise-milk-pouring-report.component.html',
    styleUrls: ['./farmer-route-wise-milk-pouring-report.component.css'],
})
export class FarmerRouteWiseMilkPouringReportComponent
    implements OnInit, OnDestroy, AfterViewInit {
    routeWiseMilkPouringReport = [];
    input: any;
    districtId: any;
    districtName: any;
    fromDate: any;
    toDate: any;

    PhaseType: any;
    phaseid: any;
    phasename: any;
    PhaseTypeList: [];

    districtList = [];
    reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: '-',
        ROUTE_ID: '-',
        ROUTE_NAME: '-',
        MENTOR_NAME: 'TOTAL',
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_MILK_ITR: 0,
    };
    excelData = [];

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private farmerModuleAPI: StateService,
        private utils: UtilsService,
        private farmerAPI: FarmerRegService,
        private logger: LoggerService,
        private session: SessionService,
        private stateAPI: StateService

    ) { }

    ngOnInit(): void {
        this.districtId = '0';
        this.fromDate = this.session.getTodayDateString();//this.session.getFromDateString();
        this.toDate = this.session.getTodayDateString();
        this.PhaseType = '0';
        this.loadDistrictList();
        this.loadPhaseTypelist();

        // tslint:disable-next-line: max-line-length

        this.loadReport();
    }

    async loadPhaseTypelist(): Promise<void> {
        try {
            const req = {
                type: '9',
                districtId: this.districtId,
            };
            this.PhaseTypeList = [];
            this.spinner.show();
            const res = await this.stateAPI.volunteerHHMandalReport(req);
            if (res.success) {
                this.PhaseTypeList = res.result;
                // this.PhaseType = '0';
                this.spinner.hide();
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
        }
    }

    onReportPhaseTypeChange(): void {
        debugger;
        //this.phaseid = this.PhaseType;
        let obj = document.getElementById('PhaseType');
        this.phasename = obj[this.PhaseType].innerText;

    }
    loadDistrictList(): void {
        this.spinner.show();
        this.farmerAPI
            .districtList()
            .then((res: any) => {
                if (res.success) {
                    this.districtList = res.result;

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

    onDistrictIdChange(): void {
        this.routeWiseMilkPouringReport = [];
        this.excelData = [];
        this.loadPhaseTypelist();
    }

    btnLoadReport(): void {
        if (this.districtId === null || this.districtId === undefined) {
            this.toast.warning('Please Select District');
            return;
        }
        if (
            this.fromDate === null ||
            this.fromDate === undefined ||
            this.fromDate === ''
        ) {
            this.toast.warning('From Date Is Empty');
            return;
        }
        if (
            this.toDate === null ||
            this.toDate === undefined ||
            this.toDate === ''
        ) {
            this.toast.warning('To Date Is Empty');
            return;
        }
        this.loadReport();
    }
    async loadReport(): Promise<void> {
        //this.spinner.show();
        try {
            debugger;
            if (this.districtId === null || this.districtId === undefined || this.districtId === "") {
                this.districtId = '0';
            }
            else {

                this.reportTotals = {
                    S_NO: '-',
                    DISTRICT_NAME: '-',
                    ROUTE_ID: '-',
                    ROUTE_NAME: '-',
                    MENTOR_NAME: 'TOTAL',
                    TOTAL_BUFFALO_MILK_LTR: 0,
                    TOTAL_COW_MILK_LTR: 0,
                    TOTAL_MILK_ITR: 0,
                };
                const req = {
                    type: '4',
                    districtId: this.districtId,
                    fromDate: this.fromDate,
                    toDate: this.toDate,
                    var1: this.PhaseType, //phaseid
                };
                this.routeWiseMilkPouringReport = [];
                this.spinner.show();
                //const res = await this.farmerModuleAPI.farmerRouteWiseMilkPopuringReport(req);
                const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
                //this.spinner.show();
                if (res.success) {
                    this.excelData = [];
                    this.routeWiseMilkPouringReport = res.result;
                    //this.spinner.hide();
                    for (let i = 0; i < this.routeWiseMilkPouringReport.length; i++) {
                        this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
                            this.routeWiseMilkPouringReport[i].TOTAL_BUFFALO_MILK_LTR
                        );
                        this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
                            this.routeWiseMilkPouringReport[i].TOTAL_COW_MILK_LTR
                        );
                        this.reportTotals.TOTAL_MILK_ITR += parseFloat(
                            this.routeWiseMilkPouringReport[i].TOTAL_MILK_ITR
                        );
                        let singleRow = {
                            S_NO: i + 1,
                            DISTRICT_NAME: this.routeWiseMilkPouringReport[i].DISTRICT_NAME,
                            ROUTE_ID: this.routeWiseMilkPouringReport[i].ROUTE_ID,
                            ROUTE_NAME: this.routeWiseMilkPouringReport[i].ROUTE_NAME,
                            MENTOR_NAME: this.routeWiseMilkPouringReport[i].MENTOR_NAME,
                            TOTAL_BUFFALO_MILK_LTR: this.routeWiseMilkPouringReport[i]
                                .TOTAL_BUFFALO_MILK_LTR,
                            TOTAL_COW_MILK_LTR: this.routeWiseMilkPouringReport[i]
                                .TOTAL_COW_MILK_LTR,
                            TOTAL_MILK_ITR: this.routeWiseMilkPouringReport[i].TOTAL_MILK_ITR,
                        };

                        this.excelData.push(singleRow);
                    }
                    this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(
                        this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
                    );
                    this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(
                        this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2)
                    );
                    this.reportTotals.TOTAL_MILK_ITR = parseFloat(
                        this.reportTotals.TOTAL_MILK_ITR.toFixed(2)
                    );
                    this.excelData.push(this.reportTotals);

                    this.rerender();
                } else {
                    //this.spinner.hide();
                    this.toast.info(res.message);
                }
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
        finally {
            this.spinner.hide(); // Hide spinner when async operation completes
        }
    }

    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Farmer Route Wise Milk Pouring Report',
            true
        );
    }

    btnPDF(): void {
        const req = {
            // districtId: this.districtId,
            // fromDate: this.fromDate,
            // toDate: this.toDate,
            district_id: this.districtId,
            from_date: this.fromDate,
            to_date: this.toDate,
            var: this.phasename,
            var1: this.phaseid
        };
        const fileName = 'farmerRouteWiseMilkPouringReport';
        let basePDF = '';
        this.spinner.show();
        this.farmerModuleAPI
            .farmerRouteWiseMilkPopuringPDFReport(req)
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
