import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-dashboard-total-milk-pouring-districtwise-report',
    templateUrl: './dashboard-total-milk-pouring-districtwise-report.component.html',
    styleUrls: ['./dashboard-total-milk-pouring-districtwise-report.component.css']
})
export class DashboardTotalMilkPouringDistrictwiseReportComponent implements OnInit {

    Reportdate: any;
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router, private session: SessionService
    ) { }

    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
    }

    onDistrictChange(result) {
        debugger;
        this.router.navigate(['/state/WomenFarmerMilkPouringMandalReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }

}

