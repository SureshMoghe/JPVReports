import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';


@Component({
    selector: 'app-today-no-of-women-farmer-milk-pouring-district-report',
    templateUrl: './today-no-of-women-farmer-milk-pouring-district-report.component.html',
    styleUrls: ['./today-no-of-women-farmer-milk-pouring-district-report.component.css']
})
export class TodayNoOfWomenFarmerMilkPouringDistrictReportComponent implements OnInit {

    Reportdate: any;
    Selected_Date: any;
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router, private session: SessionService
    ) { }

    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
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
