import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-mandal-newly-milk-pouring-farmers-report',
    templateUrl: './mandal-newly-milk-pouring-farmers-report.component.html',
    styleUrls: ['./mandal-newly-milk-pouring-farmers-report.component.css']
})
export class MandalNewlyMilkPouringFarmersReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    districtId: any;
    districtName: any;
    Reportdate: any; today = new Date();

    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        debugger;
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.Reportdate = this.Reportdate = this.session.getdatetimepageheadingReport();//formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        this.Selected_Date = sessionStorage.getItem('Selected_Date');
    }



    onMandalChange(result) {
        debugger;
        this.router.navigate(['/state/NewlyMilkPouringFarmersRbkReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        debugger;
        const requestData = {
            districtId: this.districtId,
            districtName: this.districtName,


        }; const result = this.utils.encrypt(JSON.stringify(requestData));
        this.router.navigate(['/state/NewlyMilkPouringFarmersDistrictReport'], {
            queryParams: { request: result },
        });
    }
}
