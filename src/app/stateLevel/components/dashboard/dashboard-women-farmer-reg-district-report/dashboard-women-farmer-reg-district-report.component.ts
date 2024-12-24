import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-dashboard-women-farmer-reg-district-report',
    templateUrl: './dashboard-women-farmer-reg-district-report.component.html',
    styleUrls: ['./dashboard-women-farmer-reg-district-report.component.css']
})
export class DashboardWomenFarmerRegDistrictReportComponent implements OnInit {

    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) { }
    Reportdate: any;
    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
    }

    onDistrictChange(result) {
        debugger;
        this.router.navigate(['/state/WomenFarmerRegMandalReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }




}
