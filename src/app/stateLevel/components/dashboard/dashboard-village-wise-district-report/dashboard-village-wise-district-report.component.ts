import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-dashboard-village-wise-district-report',
    templateUrl: './dashboard-village-wise-district-report.component.html',
    styleUrls: ['./dashboard-village-wise-district-report.component.css']
})
export class DashboardVillageWiseDistrictReportComponent implements OnInit {


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
        this.router.navigate(['/state/VillageWiseMandalReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }
}
