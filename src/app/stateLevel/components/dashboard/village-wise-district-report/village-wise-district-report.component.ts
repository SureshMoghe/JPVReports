import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-village-wise-district-report',
    templateUrl: './village-wise-district-report.component.html',
    styleUrls: ['./village-wise-district-report.component.css']
})
export class VillageWiseDistrictReportComponent implements OnInit {
    Selected_Date: any;
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router, private session: SessionService
    ) { }
    Reportdate: any; today = new Date();
    ngOnInit(): void {
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
        this.Reportdate = this.session.getdatetimepageheadingReport();

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
