import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePickerService } from 'src/app/shared/services/date-picker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
 

@Component({
    selector: 'app-to-dat-cum-dashboard-det',
    templateUrl: './to-dat-cum-dashboard-det.component.html',
    styleUrls: ['./to-dat-cum-dashboard-det.component.css']
})
export class ToDatCumDashboardDetComponent implements OnInit {
    DistList: any[] = [];
    PhaseList: any[] = [];
    RoutsList: any[] = [];
    arrayList: any[] = [];
    CountList: any[] = [];
    CountListTwo: any[] = [];
    District = "744";
    Phase = '1';
    route_id = '1';
    SLECTTYPE: '';
    fromDate: any;
    toDate: any;
    IsDates: boolean = true;
    constructor(private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private dashboardAPI: StateService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private datePicker: DatePickerService,
        private route: ActivatedRoute,) { }

    ngOnInit(): void {
        this.fromDate = this.session.getTodayDateString();
        this.toDate = this.session.getTodayDateString();
        this.LoadDistlist(1);
        this.LoadPhaselist(744);
        this.LoadRotelist(1);
        this.btnLoadReport();
        this.LoadCounts(1);
        this.LoadCountsTwo(1);
    }
    btnGetDetailsIndent(type: any, subtype: any) {
    }
    Cmucountsclick(cmu: any) {
        debugger;
        this.LoadCounts(2);
        this.LoadCountsTwo(2);
        this.IsDates = false;
    }
    dailycountsclick(day: any) {
        debugger;
        this.LoadCounts(1);
        this.LoadCountsTwo(1);
        this.IsDates = true;

    }
    async LoadDistlist(obj: any): Promise<void> {
        debugger
        try {
            const req = {
                type: obj
            }
            this.spinner.show();
            const res = await this.dashboardAPI.CCCDashboardDistrictlist(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistList = res.result;
                //console.log(this.DistList);



            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }
    async LoadPhaselist(obj: any): Promise<void> {
        debugger
        try {
            this.PhaseList = [];
            const req = {
                district_id: obj
            }
            this.spinner.show();
            const res = await this.dashboardAPI.CCCDashboardPhaselist(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.PhaseList = res.result;
                //console.log(this.PhaseList)


            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }
    async LoadRotelist(obj: any): Promise<void> {
        debugger
        try {
            this.RoutsList = [];
            const req = {
                district_id: this.District,
                phase: obj
            }
            this.spinner.show();
            const res = await this.dashboardAPI.CCCDashboardRoutslist(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.RoutsList = res.result;
                //console.log(this.RoutsList);


            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    ondistrictchange(obj) {
        debugger;
        this.LoadPhaselist(obj);
    }

    onphasechange(obj) {
        this.LoadRotelist(obj);
    }
    async btnLoadReport(): Promise<void> {
        try {
            debugger;
            if (
                this.District === null ||
                this.District === undefined ||
                this.District === ''
            ) {
                this.toast.warning('District Is Empty');
                return;
            }
            if (
                this.Phase === null ||
                this.Phase === undefined ||
                this.Phase === ''
            ) {
                this.toast.warning('Phase Is Empty');
                return;
            }
            if (
                this.route_id === null ||
                this.route_id === undefined ||
                this.route_id === ''
            ) {
                this.toast.warning('Route Is Empty');
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
            else {
                this.arrayList = [];
                const req = {
                    type: "4",
                    district_id: this.District,
                    phase: this.Phase,
                    var1: this.route_id
                }
                this.spinner.show();
                const res = await this.dashboardAPI.CCCDashboardDetails(req);
                debugger;
                if (res.success) {
                    this.spinner.hide();
                    this.arrayList = res.result;
                    //console.log(this.arrayList);
                } else {
                    this.spinner.hide();
                    this.toast.info(res.message);
                }
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }

    async LoadCounts(obj: any): Promise<void> {
        try {
            debugger;
            let cnt = '';
            let FromDate: any;
            let Todate: any;
            this.CountList = [];
            if (obj == 1) {
                cnt = "1";
                FromDate = this.fromDate;
                Todate = this.toDate

            }
            else if (obj == 2) {
                cnt = "2";
                FromDate = '';
                Todate = ''
            }
            const req = {
                type: "5",
                district_id: this.District,
                phase: this.Phase,
                var1: this.route_id,
                cnt1: cnt,
                from_date: FromDate,
                to_date: Todate
            }
            this.spinner.show();
            const res = await this.dashboardAPI.CCCDashboardDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.CountList = res.result;
                //console.log(this.CountList);
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }
    async LoadCountsTwo(obj: any): Promise<void> {
        try {
            debugger;
            let cnt = '';
            let FromDate: any;
            let Todate: any;
            this.CountListTwo = [];
            if (obj == 1) {
                cnt = "1";
                FromDate = this.fromDate;
                Todate = this.toDate

            }
            else if (obj == 2) {
                cnt = "2";
                FromDate = '';
                Todate = ''
            }
            const req = {
                type: "6",
                district_id: this.District,
                phase: this.Phase,
                var1: this.route_id,
                cnt1: cnt,
                from_date: FromDate,
                to_date: Todate
            }
            this.spinner.show();
            const res = await this.dashboardAPI.CCCDashboardDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.CountListTwo = res.result;
                //console.log(this.CountListTwo);
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }
}
