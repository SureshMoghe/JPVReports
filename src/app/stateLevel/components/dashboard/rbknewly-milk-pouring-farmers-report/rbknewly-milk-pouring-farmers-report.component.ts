import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-rbknewly-milk-pouring-farmers-report',
    templateUrl: './rbknewly-milk-pouring-farmers-report.component.html',
    styleUrls: ['./rbknewly-milk-pouring-farmers-report.component.css']
})
export class RBKNewlyMilkPouringFarmersReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    MandalId: any;
    MandalName: any;
    districtId: any;
    districtName: any;
    Reportdate: any;
    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        debugger;
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.MandalId = decString.MandalId;
        this.MandalName = decString.MandalName;
        this.Reportdate = this.session.getdatetimepageheadingReport();
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
    }
    onRbkChange(result) {
        this.router.navigate(['/state/NewlyMilkPouringFarmersVillageReport'], {
            queryParams: { request: result },
        });
    }


    btnBack(): void {
        debugger;
        const requestData = {

            MandalId: this.MandalId,
            MandalName: this.MandalName,
            districtId: this.districtId,
            districtName: this.districtName,

        }; const result = this.utils.encrypt(JSON.stringify(requestData));
        this.router.navigate(['/state/NewlyMilkPouringFarmersMandalReport'], {
            queryParams: { request: result },
        });

    }

}
