import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';

@Component({
    selector: 'app-farmermonitoringdistrictcount',
    templateUrl: './farmermonitoringdistrictcount.component.html',
    styleUrls: ['./farmermonitoringdistrictcount.component.css']
})
export class FarmermonitoringdistrictcountComponent implements OnInit {


    Rpttype = '';
    fromDate: any;
    toDate: any;
    districtLevelDetails = [];
    fromdt = false;
    todt = false;
    Tableload = false;
    reportTotals = {

        dLastYearSameDate: '',
        dLastMonthSameDate: '',
        dPresentDay: '',
        mLastYearSameDate: '',
        mLastMonthSameDate: '',
        mPresentDay: '',
        rLastYearSameDate: '',
        rLastMonthSameDate: '',
        rPresentDay: '',
        sLastYearSameDate: '',
        sLastMonthSameDate: '',
        sPresentDay: '',
        fLastYearSameDate: '',
        fLastMonthSameDate: '',
        fPresentDay: '',
        lLastYearSameDate: '',
        lLastMonthSameDate: '',
        lPresentDay: '',
        aLastYearSameDate: '',
        aLastMonthSameDate: '',
        aPresentDay: '',
    };
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private session: SessionService,
        private spinner: NgxSpinnerService,
        private utils: UtilsService,
        private dashboardAPI: DashboardService,
        private toast: ToasterService) { }

    ngOnInit(): void {
        this.fromDate = this.session.getTodayDateString();//this.session.getFromDateString();
        this.toDate = this.session.getTodayDateString();
        this.btnLoadReport();
    }

    async btnLoadReport(): Promise<void> {
        try {

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

            this.Tableload = true;
            const req = {
                from_Date: this.fromDate,
                to_Date: this.toDate,

            };
            this.spinner.show();
            const res = await this.dashboardAPI.farmerMonitoringTotRpt(req);
            if (res.success) {

                this.districtLevelDetails = res.result;
            }
            else {
                this.toast.info(res.message);
            }


            this.spinner.hide();

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
}