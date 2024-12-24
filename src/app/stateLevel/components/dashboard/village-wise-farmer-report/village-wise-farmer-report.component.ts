import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-village-wise-farmer-report',
    templateUrl: './village-wise-farmer-report.component.html',
    styleUrls: ['./village-wise-farmer-report.component.css']
})
export class VillageWiseFarmerReportComponent implements OnInit {
    Selected_Date: any;
    input: any;
    VillageId: any;
    VillageName: any;
    MandalName: any;
    districtName: any;
    RbkName: any;
    RbkId: any;
    MandalId: any;
    districtId: any;
    Status: any; ReportName: any;

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
            this.ReportName = 'TOTAL VILLAGES ABSTRACT REPORT TILL';
            this.Reportdate = this.session.getdatetimepageheadingReportCumulative();
        }
        else {
            this.ReportName = 'TOTAL VILLAGES ABSTRACT REPORT ON';
            this.Reportdate = this.session.getdatetimepageheadingReport();
            this.Selected_Date = sessionStorage.getItem('Selected_Date');
        }




        //formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

    }

    //   onvillageChange(result) {
    //       this.router.navigate(['/state/DistrictWiseFarmerReport'], {
    //           queryParams: { request: result },
    //       });
    //   }

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
            this.router.navigate(['/state/VillageWiseVillageReport'], {
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
            this.router.navigate(['/state/VillageWiseVillageReport'], {
                queryParams: { request: result },
            });
        }
    }
}



