import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-womenfarmer-reg-village-report',
    templateUrl: './womenfarmer-reg-village-report.component.html',
    styleUrls: ['./womenfarmer-reg-village-report.component.css']
})
export class WomenfarmerRegVillageReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    rbkId: any;
    rbkName: any;
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
        debugger;
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.MandalId = decString.MandalId;
        this.MandalName = decString.MandalName;
        this.rbkId = decString.rbkId;
        this.rbkName = decString.rbkName;
        this.Status = decString.Status;



        if (this.Status == '99') {
            this.ReportName = 'WOMEN FARMER REGISTERED ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        }
        else {
            this.ReportName = 'WOMEN FARMER REGISTERED ABSTRACT REPORT ON';
            this.Reportdate = this.session.getdatetimepageheadingReport();
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
        }


    }
    onVillageChange(result) {
        this.router.navigate(['/state/WomenFarmerRegFarmerReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        if (this.Status === '99') {
            const requestData = {
                rbkId: this.rbkId,
                rbkName: this.rbkName,
                MandalId: this.MandalId,
                MandalName: this.MandalName,
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,


            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerRegRbkReport'], {
                queryParams: { request: result },
            });
        }
        else {
            const requestData = {
                rbkId: this.rbkId,
                rbkName: this.rbkName,
                MandalId: this.MandalId,
                MandalName: this.MandalName,
                districtId: this.districtId,
                districtName: this.districtName,
                Status: this.Status,

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerRegRbkReport'], {
                queryParams: { request: result },
            });
        }
    }
}
