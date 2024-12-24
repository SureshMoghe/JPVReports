import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { VvHHAnimalsMandalComponent } from 'src/app/vvHHAnimalsModule/components/vv-hhanimals-mandal/vv-hhanimals-mandal.component';

@Component({
    selector: 'app-vv-hhanimals-mandal-report',
    templateUrl: './vv-hhanimals-mandal-report.component.html',
    styleUrls: ['./vv-hhanimals-mandal-report.component.css'],
})
export class VvHHAnimalsMandalReportComponent implements OnInit {
    @ViewChild(VvHHAnimalsMandalComponent)
    private vvFarmerMandal: VvHHAnimalsMandalComponent;
    input: any;
    districtId: any;
    districtName: any;
    mandalId: any;
    mandalName: any;
    fromDate: any;
    toDate: any;
    PhaseTypeList: [];
    phaseid: any;
    phase_name: any;
    constructor(
        private router: Router,
        private toast: ToasterService,
        private session: SessionService,
        private spinner: NgxSpinnerService,
        private stateAPI: StateService
    ) { }

    ngOnInit(): void {
        this.districtId = this.session.districtId;
        this.districtName = this.session.districtName;
        this.mandalId = this.session.mandalId;
        this.mandalName = this.session.mandalName;
        this.fromDate = this.session.getFromDateString();
        this.toDate = this.session.getTodayDateString();
        this.loadPhaseTypelist();
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
                this.phaseid = '0';
                this.spinner.hide();
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
        }
    }
    onRbkChange(result): void {
        this.router.navigate(['/mandalLevel/VvHHAnimalsClusterReport'], {
            queryParams: { request: result },
        });
    }

    btnLoadReport(): void {
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
        // console.log(this.phaseid);
        this.vvFarmerMandal.loadReport();
    }
}
