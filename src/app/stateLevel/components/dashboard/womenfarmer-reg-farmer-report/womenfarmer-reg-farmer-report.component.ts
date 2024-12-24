import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-womenfarmer-reg-farmer-report',
    templateUrl: './womenfarmer-reg-farmer-report.component.html',
    styleUrls: ['./womenfarmer-reg-farmer-report.component.css']
})
export class WomenfarmerRegFarmerReportComponent implements OnInit {

    Selected_Date: any;
    input: any;
    rbkId: any;
    rbkName: any;
    MandalId: any;
    MandalName: any;
    districtId: any;
    districtName: any;
    villageId: any;
    villageName: any;
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
        this.villageId = decString.villageId;
        this.villageName = decString.villageName;
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
        this.router.navigate(['/state/FarmerReport'], {
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
                villageId: this.villageId,
                villageName: this.villageName,
                Status: this.Status,

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerRegVillageReport'], {
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
                villageId: this.villageId,
                villageName: this.villageName,
                Status: this.Status,

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerRegVillageReport'], {
                queryParams: { request: result },
            });
        }
    }
}