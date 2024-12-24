import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-noof-rbk-count-report',
    templateUrl: './noof-rbk-count-report.component.html',
    styleUrls: ['./noof-rbk-count-report.component.css']
})
export class NoofRbkCountReportComponent implements OnInit {

    Selected_Date: any;

    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) { }
    Reportdate: any; today = new Date();
    ngOnInit(): void {
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
        this.Reportdate = this.session.getdatetimepageheadingReport();
        //formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }

    onDistrictChange(result) {
        debugger;
        this.router.navigate(['/state/DistrictwiseRbkReport'], {  // DistrictWiseRbkDetails
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }
}

