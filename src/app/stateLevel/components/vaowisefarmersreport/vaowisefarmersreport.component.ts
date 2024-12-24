import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { VAOwisefarmersreportDetailsComponent } from '../vaowisefarmersreport-details/vaowisefarmersreport-details.component';

@Component({
    selector: 'app-vaowisefarmersreport',
    templateUrl: './vaowisefarmersreport.component.html',
    styleUrls: ['./vaowisefarmersreport.component.css']
})
export class VAOwisefarmersreportComponent

    implements OnInit {
    @ViewChild(VAOwisefarmersreportDetailsComponent)
    private VAOReport: VAOwisefarmersreportDetailsComponent;
    DistrictId: any;
    DistrictList: any[] = [];
    MandalList: any[] = [];
    MandalId: any;
    RouteList: any[] = [];
    PhaseTypeList: any[] = []; 
    RouteId: any;
    PhaseId: any;
    sysDate: any;
    uniqueId: any;
    desigId: any;
    districtId: any;


    constructor(
        private router: Router,
        private toast: ToasterService,
        private spinner: NgxSpinnerService,
        private session: SessionService,
        private stateAPI: StateService,
        private utils: UtilsService,

    ) {
        // this.desigId = this.session.desigId;
        // this.uniqueId = this.session.uniqueId;
        // this.districtId = this.session.districtId;
    }




    ngOnInit(): void { 
        this.desigId = this.session.desigId;
        this.uniqueId = sessionStorage.getItem('uniqueId');
        this.districtId = this.session.districtId;
        if (this.session.desigId != null && this.uniqueId != null &&  this.session.districtId != null
        ) {

            this.loadDistricts();
        }
        else {
            this.router.navigate(['/shared/UnAuthorized']);
        }
    }







    async loadDistricts(): Promise<void> {
        try {
            debugger;

            const req = {
                type: '1',
                input_01: this.desigId,
                input_02: this.uniqueId,
                input_03: this.districtId,
            };
            this.DistrictList = [];
            this.spinner.show();
            const res = await this.stateAPI.VAOReportSelect(req);
            if (res.success) {
                debugger;
                this.RouteId = "undefined";
                this.PhaseId = "undefined";
                this.MandalId = "undefined";
                this.DistrictList = res.result;
                // console.log(this.DistrictList);
                this.spinner.hide();
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


    async loadPhase(): Promise<void> {
        try {
            debugger
            const req = {
                type: '4',
                input_03: this.RouteId,
                mandal: this.MandalId,
                district: this.DistrictId,
                input_01: this.desigId,
                input_02: this.uniqueId,


            };
            this.PhaseTypeList = [];
            this.spinner.show();
            const res = await this.stateAPI.VAOReportSelect(req);
            if (res.success) {
                debugger;
                this.PhaseTypeList = res.result;
                console.log(this.PhaseTypeList);
                this.spinner.hide();
            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);

            }
        } catch (error) {
            this.spinner.hide();
        }
    }

    async onMandalChange(): Promise<void> {
        try {
            debugger;
            const req =
            {
                type: '3',
                mandal: this.MandalId,
                district: this.DistrictId,
                input_01: this.desigId,
                input_02: this.uniqueId,


            };
            this.RouteList = [];
            this.spinner.show();
            const res = await this.stateAPI.VAOReportSelect(req);
            if (res.success) {
                debugger;
                this.RouteList = res.result;
                this.PhaseId = "undefined";
                this.RouteId = "undefined";
                //console.log(this.RouteList);
                this.spinner.hide();
            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);

            }
        } catch (error) {
            this.spinner.hide();
        }
    }

    async onDistrictChange(): Promise<void> {
        try {
            debugger
            const req =
            {
                type: '2',
                district: this.DistrictId,
                input_01: this.desigId,
                input_02: this.uniqueId,


            };
            this.MandalList = [];
            this.spinner.show();
            const res = await this.stateAPI.VAOReportSelect(req);
            if (res.success) {
                debugger;
                this.MandalList = res.result;
                this.MandalId = "undefined";
                this.RouteId = "undefined";
                this.PhaseId = "undefined";

                //console.log(this.MandalList);
                this.spinner.hide();
            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);

            }
        } catch (error) {
            this.spinner.hide();
        }
    }







    btnLoadReport(): void {
        debugger;

        if (this.utils.isEmpty(this.DistrictId)) {
            this.toast.warning('Please Select District');
            return;
        } if (this.utils.isEmpty(this.MandalId)) {
            this.toast.warning('Please Select Mandal');
            return;
        }
        if (this.utils.isEmpty(this.RouteId)) {
            this.toast.warning('Please Select Route');
            return;
        } if (this.utils.isEmpty(this.PhaseId)) {
            this.toast.warning('Please Select Phase');
            return;
        }
        else {
            this.VAOReport.loadReport();
        }


    }
}
