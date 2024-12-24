import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-dashboard-noof-rbk-count-report',
    templateUrl: './dashboard-noof-rbk-count-report.component.html',
    styleUrls: ['./dashboard-noof-rbk-count-report.component.css']
})
export class DashboardNoofRbkCountReportComponent implements OnInit {

    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) { }
    Reportdate: any; today = new Date();
    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
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


