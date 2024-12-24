import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';


@Component({
    selector: 'app-rbkwise-report',
    templateUrl: './rbkwise-report.component.html',
    styleUrls: ['./rbkwise-report.component.css']
})
export class RbkwiseReportComponent implements OnInit {

    input: any;
    MandalId: any;
    MandalName: any;
    districtName: any;
    districtId: any;
    RbkId: any;
    RbkName: any;
    VillageId: any;
    VillageName: any;
    Status: any; ReportName: any;
    Selected_Date: any;
    constructor(private utils: UtilsService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }
    Reportdate: any; today = new Date();
    ngOnInit(): void {
        debugger;
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.MandalId = decString.MandalId;
        this.MandalName = decString.MandalName;
        this.RbkId = decString.RbkId;
        this.RbkName = decString.RbkName;
        this.VillageId = decString.VillageId;
        this.VillageName = decString.VillageName;
        this.Status = decString.Status;



        if (this.Status == '99') {
            this.ReportName = 'TOTAL RBKs ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();

        }
        else {
            this.ReportName = 'TOTAL RBKs ABSTRACT REPORT ON';
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
            this.Reportdate = this.session.getdatetimepageheadingReport();

        }

        // formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }

    onRBKChange(result) {
        this.router.navigate(['/state/VillagewiseReport'], {  //DistrictWiseVillageReport
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        debugger;
        if (this.Status === '99') {
            const requestData = {
                districtId: this.districtId,
                districtName: this.districtName,
                MandalId: this.MandalId,
                MandalName: this.MandalName,
                RbkId: this.RbkId,
                RbkName: this.RbkName,
                VillageId: this.VillageId,
                VillageName: this.VillageName,
                Status: this.Status,
            };

            const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/DistrictwiseRbkReport'], {
                queryParams: { request: result },
            });
        }
        else {
            const requestData = {
                districtId: this.districtId,
                districtName: this.districtName,
                MandalId: this.MandalId,
                MandalName: this.MandalName,
                RbkId: this.RbkId,
                RbkName: this.RbkName,
                VillageId: this.VillageId,
                VillageName: this.VillageName,
                Status: this.Status,
            };

            const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/DistrictwiseRbkReport'], {
                queryParams: { request: result },
            });
        }
    }
}


