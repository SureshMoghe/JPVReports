import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-farmer-baneficiary-no-of-women-farmer-milk-pouring-report',
    templateUrl: './farmer-baneficiary-no-of-women-farmer-milk-pouring-report.component.html',
    styleUrls: ['./farmer-baneficiary-no-of-women-farmer-milk-pouring-report.component.css']
})
export class FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent implements OnInit {
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
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        }
        else {
            this.ReportName = 'WOMEN FARMERS MILK POURING ABSTRACT REPORT ON';
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
            this.Reportdate = this.session.getdatetimepageheadingReport();
        }

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
                Status: this.Status

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerMilkPouringVillageReport'], {
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
                Status: this.Status

            }; const result = this.utils.encrypt(JSON.stringify(requestData));
            this.router.navigate(['/state/WomenFarmerMilkPouringVillageReport'], {
                queryParams: { request: result },
            });
        }
    }

}
