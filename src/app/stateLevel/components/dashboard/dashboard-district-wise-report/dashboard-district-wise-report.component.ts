import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-dashboard-district-wise-report',
    templateUrl: './dashboard-district-wise-report.component.html',
    styleUrls: ['./dashboard-district-wise-report.component.css']
})
export class DashboardDistrictWiseReportComponent implements OnInit {

    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) { }
    Reportdate: any; today = new Date();
    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        // formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }

    onDistrictChange(result) {
        debugger;
        this.router.navigate(['/state/DashboardMandalCountReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }
}