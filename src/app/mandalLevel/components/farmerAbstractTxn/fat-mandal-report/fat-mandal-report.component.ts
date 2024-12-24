import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FarmerAbstractTxnMandalComponent } from 'src/app/farmerAbstractTxnModule/components/farmer-abstract-txn-mandal/farmer-abstract-txn-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-fat-mandal-report',
    templateUrl: './fat-mandal-report.component.html',
    styleUrls: ['./fat-mandal-report.component.css'],
})
export class FatMandalReportComponent implements OnInit {
    @ViewChild(FarmerAbstractTxnMandalComponent)
    private farmerAbstractTxnMandal: FarmerAbstractTxnMandalComponent;
    districtId: any;
    districtName: any;
    mandalId: any;
    mandalName: any;
    fromDate: any;
    toDate: any;

    constructor(
        private router: Router,
        private toast: ToasterService,
        private session: SessionService,
        private spinner: NgxSpinnerService,
        private stateAPI: StateService,

    ) { }

    ngOnInit(): void {
        this.districtId = this.session.districtId;
        this.districtName = this.session.districtName;
        this.mandalId = this.session.mandalId;
        this.mandalName = this.session.mandalName;
        this.fromDate = this.session.getFromDateString();
        this.toDate = this.session.getTodayDateString();

    }


    onRbkChange(result): void {
        this.router.navigate(['/mandalLevel/FarmerAbstractTxnRbkReport'], {
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

        this.farmerAbstractTxnMandal.loadReport();
    }
}
