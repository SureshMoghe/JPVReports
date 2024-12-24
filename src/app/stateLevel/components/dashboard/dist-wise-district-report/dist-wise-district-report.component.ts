import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-dist-wise-district-report',
    templateUrl: './dist-wise-district-report.component.html',
    styleUrls: ['./dist-wise-district-report.component.css']
})
export class DistWiseDistrictReportComponent implements OnInit {

    Selected_Date: any;
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService,
    ) { }
    Reportdate: any;
    ngOnInit(): void {//Selected_Date
        this.Reportdate = this.session.getdatetimepageheadingReport();
        // formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        this.Selected_Date = sessionStorage.getItem('Selected_Date');

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
