import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-mandal-no-of-women-farmer-milk-pouring-report',
    templateUrl: './mandal-no-of-women-farmer-milk-pouring-report.component.html',
    styleUrls: ['./mandal-no-of-women-farmer-milk-pouring-report.component.css']
})
export class MandalNoOfWomenFarmerMilkPouringReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    districtId: any;
    districtName: any; ReportName: any;
    Reportdate: any;
    Status: any;
    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {

        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.Status = decString.Status;

        if (this.Status == '99') {
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        }
        else {
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT ON';
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
            this.Reportdate = this.session.getdatetimepageheadingReport();
        }
    }



    onMandalChange(result) {
        debugger;
        this.router.navigate(['/state/WomenFarmerMilkPouringRbkReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        debugger;
        if (this.Status === '99') {
            const requestData = {
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,


            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/DashBoardTotalMilkPouringDistrictwiseReport'], {
                queryParams: { request: result },
            });
        }
        else {
            const requestData = {
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,


            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerMilkPouringDistrictReport'], {
                queryParams: { request: result },
            });

        }
    }

}
