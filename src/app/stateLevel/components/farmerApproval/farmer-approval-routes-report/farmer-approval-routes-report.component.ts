import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-farmer-approval-routes-report',
    templateUrl: './farmer-approval-routes-report.component.html',
    styleUrls: ['./farmer-approval-routes-report.component.css'],
})
export class FarmerApprovalRoutesReportComponent implements OnInit {
    input: any;
    districtId: any;
    districtName: any;
    mandalId: any;
    mandalName: any;
    fromDate: any;
    toDate: any;
    phaseid: any;
    phasename: any;
    constructor(
        private router: Router,
        private utils: UtilsService,
        private routes: ActivatedRoute
    ) {
        routes.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.mandalId = decString.mandalId;
        this.mandalName = decString.mandalName;
        this.phaseid = decString.phaseid;
        this.phasename = decString.phasename;
        this.fromDate = decString.fromDate;
        this.toDate = decString.toDate;
    }

    btnBack(): void {
        const requestData = {
            districtId: this.districtId,
            districtName: this.districtName,
            mandalId: this.mandalId,
            mandalName: this.mandalName,
            phaseid: this.phaseid,
            phasename: this.phasename,
            fromDate: this.fromDate,
            toDate: this.toDate
        };

        const result = this.utils.encrypt(JSON.stringify(requestData));

        this.router.navigate(['/state/FarmerApprovalDistrictReport'], {
            queryParams: { request: result },
        });
    }



    onRBkChange(result): void {
        debugger;
        this.router.navigate(['/state/FarmerApprovalVillageLevelReport'], {
            queryParams: { request: result },
        });
    }
}
