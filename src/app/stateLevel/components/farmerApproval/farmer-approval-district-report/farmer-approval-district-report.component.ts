import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-farmer-approval-district-report',
    templateUrl: './farmer-approval-district-report.component.html',
    styleUrls: ['./farmer-approval-district-report.component.css'],
})
export class FarmerApprovalDistrictReportComponent implements OnInit {
    input: any;
    districtId: any;
    districtName: any;
    phaseid: any;
    phasename: any;
    fromDate: any;
    toDate: any;

    constructor(
        private router: Router,
        private utils: UtilsService,
        private route: ActivatedRoute
    ) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        const decString = JSON.parse(this.utils.decrypt(this.input));
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.phaseid = decString.phaseid;
        this.phasename = decString.phasename;
        this.fromDate = decString.fromDate;
        this.toDate = decString.toDate;
    }

    onMandalChange(result): void {
        this.router.navigate(['/state/FarmerApprovalRoutesReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        this.router.navigate(['/state/FarmerApprovalStateReport']);
    }
}
