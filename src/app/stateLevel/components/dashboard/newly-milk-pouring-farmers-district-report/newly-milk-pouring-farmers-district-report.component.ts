import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-newly-milk-pouring-farmers-district-report',
    templateUrl: './newly-milk-pouring-farmers-district-report.component.html',
    styleUrls: ['./newly-milk-pouring-farmers-district-report.component.css']
})
export class NewlyMilkPouringFarmersDistrictReportComponent implements OnInit {
    Reportdate: any; today: any; Selected_Date: any;
    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {

    }
    ngOnInit(): void {
        debugger;
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
        this.Reportdate = this.session.getdatetimepageheadingReport();
        //this.today=this.session.getdatetimepageheadingReport();



        // formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }

    onDistrictChange(result) {
        debugger;
        this.router.navigate(['/state/NewlyMilkPouringFarmersMandalReport'], {
            queryParams: { request: result },
        });
    }
    btnBack(): void {
        this.router.navigate(['/state/dashboard']);
    }

}