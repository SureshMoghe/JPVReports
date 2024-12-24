import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-womenfarmer-reg-district-reports',
    templateUrl: './womenfarmer-reg-district-reports.component.html',
    styleUrls: ['./womenfarmer-reg-district-reports.component.css']
})
export class WomenfarmerRegDistrictReportsComponent implements OnInit {

    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService
    ) { }
    Reportdate: any;
    Selected_Date: any;
    ngOnInit(): void {
        this.Reportdate = this.session.getdatetimepageheadingReport();
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
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
