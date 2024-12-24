import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-vaowisefarmersreport-details',
    templateUrl: './vaowisefarmersreport-details.component.html',
    styleUrls: ['./vaowisefarmersreport-details.component.css']
})
export class VAOwisefarmersreportDetailsComponent
    implements OnInit, OnDestroy, AfterViewInit {


    excelData = [];
    @Input() PhaseId: any
    @Input() MandalId: any;
    @Input() DistrictId: any;
    @Input() RouteId: any;
    sysDate: any;


    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    routeListDetails = [];


    constructor(private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private stateapi: StateService,
        private session: SessionService,
    ) {
    }

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();


    ngOnInit(): void {

        this.sysDate = this.session.getTodayDateString();

    }

    async loadReport(): Promise<void> {
        try {
            debugger;

            const req = {
                type: '5',
                phase: this.PhaseId,
                district: this.DistrictId,
                rid: this.RouteId,
                mandal: this.MandalId,
                input_01: this.session.desigId,
                input_02: this.session.uniqueId,
                input_03: this.session.districtId,
                input_05: this.sysDate,
                input_06: this.sysDate

            };
            console.log(req);
            this.routeListDetails = [];
            this.spinner.show(); debugger;
            const res = await this.stateapi.VAOReportSelect(req);
            if (res.success) {
                this.excelData = [];
                this.routeListDetails = res.result;
                console.log(this.routeListDetails);
                for (var i = 0; i < this.routeListDetails.length; i++) {
                    let singleRow = {
                        S_NO: i + 1,
                        DIST_CODE: this.routeListDetails[i].DIST_CODE,
                        DISTRICT_NAME: this.routeListDetails[i].DISTRICT,
                        MANDAL_CODE: this.routeListDetails[i].MANDAL_CODE,
                        MANDAL_NAME: this.routeListDetails[i].MANDAL_NAME,
                        SECRETARIATE_CODE: this.routeListDetails[i].SECRETARIATE_CODE,
                        SECRETARIATE_NAME: this.routeListDetails[i].SECRETARIATE_NAME,
                        SOCEITY_CODE: this.routeListDetails[i].SOCEITY_CODE,
                        VILLAGE_CODE: this.routeListDetails[i].VILLAGE_CODE,
                        VILLAGE_NAME: this.routeListDetails[i].VILLAGE_NAME,
                        FARMER_CODE: this.routeListDetails[i].FARMER_CODE,
                        FARMER_NAME: this.routeListDetails[i].FARMER_NAME,
                        MOBILE_NUMBER: this.routeListDetails[i].MOBILE_NUMBER,
                        CLUSTER_ID: this.routeListDetails[i].CLUSTER_ID,
                        VOLUNTEER_NAME: this.routeListDetails[i].VOLUNTEER_NAME,
                        VOLUNTEER_MOBILE: this.routeListDetails[i].VOLUNTEER_MOBILE,
                        SHG_MEMBER_STATUS: this.routeListDetails[i].SHG_MEMBER_STATUS,
                        VOA_NAME: this.routeListDetails[i].VOA_NAME,
                        VOA_MOBILE: this.routeListDetails[i].VOA_MOBILE,
                        VO_NAME: this.routeListDetails[i].VOA_NAME,
                        VO_MOBILE: this.routeListDetails[i].VO_MOBILE,

                    };

                    this.excelData.push(singleRow);
                }

                this.spinner.hide();
                this.rerender();
            }
            else {
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
            'VO Wise Farmers Report',
            true
        );
    }


    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }
}
