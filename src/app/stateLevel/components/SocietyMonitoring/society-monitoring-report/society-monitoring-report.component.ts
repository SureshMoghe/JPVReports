import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';  
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service'; 
import { SocietyMonitoringListComponent } from '../society-monitoring-list/society-monitoring-list.component';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-society-monitoring-report',
    templateUrl: './society-monitoring-report.component.html',
    styleUrls: ['./society-monitoring-report.component.css']
})
export class SocietyMonitoringReportComponent implements OnInit {



    @ViewChild(SocietyMonitoringListComponent)
    private SocietyMonitoring: SocietyMonitoringListComponent;
    fromDate: any;
    toDate: any;
    DistType: any;
    districtId: any;//  this.districtId,
    districtName: any;// this.districtName,
    DistTypeList: [];
    constructor(
        private router: Router,
        private toast: ToasterService,
        private session: SessionService,
        private stateAPI: StateService,
        private spinner: NgxSpinnerService,
        private farmerAPI: FarmerRegService,
         
    ) { }

    ngOnInit(): void {
        
        this.fromDate = this.session.getTodayDateString();
        this.toDate = this.session.getTodayDateString();
        this.loadDistTypelist();

        if (
            this.session.districtId === undefined ||
            this.session.districtId === '' ||
            this.session.districtId === null
        ) { this.districtId = '0'; this.districtName = 'ALL'; this.session.districtName = 'ALL'; this.session.districtId = '0'; }
        else {
            document.getElementById('DistType').attributes.item(this.session.districtId);

        }
    }

    async loadDistTypelist(): Promise<void> {
        try {

            this.DistTypeList = [];
            this.spinner.show();
            const res = await this.farmerAPI.districtList();
            if (res.success) {
                this.DistTypeList = res.result;
                this.DistType = '0';
                this.spinner.hide();
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
        }
    }


    onReportDistTypeChange(): void {
        debugger;
        this.session.districtId = this.DistType;
        let obj = document.getElementById('DistType');
        this.session.districtName = obj[this.DistType].innerText;

    }

    onSocietyChange(result): void {
        debugger;
        this.router.navigate(['/state/SocietyMonitoringDayWiseCheck'], {
            queryParams: { request: result },
        });
    }

    btnLoadReport(): void {
        debugger;

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
        if (
            this.DistType === null ||
            this.DistType === undefined ||
            this.DistType === ''
        ) {
            this.toast.warning('District Is Empty');
            return;
        }
        this.spinner.show();
        this.SocietyMonitoring.loadReport();
        this.spinner.hide();
        return;


    }

}
