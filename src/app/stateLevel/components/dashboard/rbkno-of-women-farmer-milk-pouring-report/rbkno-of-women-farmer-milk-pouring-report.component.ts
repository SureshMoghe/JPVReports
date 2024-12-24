import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-rbkno-of-women-farmer-milk-pouring-report',
    templateUrl: './rbkno-of-women-farmer-milk-pouring-report.component.html',
    styleUrls: ['./rbkno-of-women-farmer-milk-pouring-report.component.css']
})
export class RBKNoOfWomenFarmerMilkPouringReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    MandalId: any;
    MandalName: any;
    districtId: any;
    districtName: any;
    Reportdate: any;
    Status: any; ReportName: any;
    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {

        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.MandalId = decString.MandalId;
        this.MandalName = decString.MandalName;
        this.Status = decString.Status;


        if (this.Status == '99') {
            debugger;
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        }
        else {
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT ON';
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
            this.Reportdate = this.session.getdatetimepageheadingReport();
        }
    }
    onRbkChange(result) {
        this.router.navigate(['/state/WomenFarmerMilkPouringVillageReport'], {
            queryParams: { request: result },
        });
    }


    btnBack(): void {
        debugger;
        if (this.Status === '99') {
            const requestData = {

                MandalId: this.MandalId,
                MandalName: this.MandalName,
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerMilkPouringMandalReport'], {
                queryParams: { request: result },
            });
        }
        else {
            const requestData = {

                MandalId: this.MandalId,
                MandalName: this.MandalName,
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerMilkPouringMandalReport'], {
                queryParams: { request: result },
            });
        }

    }
}

