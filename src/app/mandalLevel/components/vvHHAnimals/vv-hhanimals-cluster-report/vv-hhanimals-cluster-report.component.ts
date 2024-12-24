import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-vv-hhanimals-cluster-report',
    templateUrl: './vv-hhanimals-cluster-report.component.html',
    styleUrls: ['./vv-hhanimals-cluster-report.component.css'],
})
export class VvHHAnimalsClusterReportComponent implements OnInit {
    input: any;
    districtId: any;
    districtName: any;
    mandalId: any;
    mandalName: any;
    rbkId: any;
    rbkName: any;
    fromDate: any;
    toDate: any;
    phaseId: any;
    constructor(
        private utils: UtilsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        route.queryParams.subscribe((params) => (this.input = params['request']));
    }

    ngOnInit(): void {
        const decString = JSON.parse(this.utils.decrypt(this.input));
        console.log(decString);
        this.districtId = decString.districtId;
        this.districtName = decString.districtName;
        this.mandalId = decString.mandalId;
        this.mandalName = decString.mandalName;
        this.rbkId = decString.rbkId;
        this.rbkName = decString.rbkName;
        this.fromDate = decString.fromDate;
        this.toDate = decString.toDate;
        this.phaseId = decString.phaseid;
    }

    onPendingHHChange(result): void {
        this.router.navigate(['/mandalLevel/pendingHouseHoldReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        const requestData = {
            districtId: this.districtId,
            districtName: this.districtName,
            mandalId: this.mandalId,
            mandalName: this.mandalName,
            fromDate: this.fromDate,
            toDate: this.toDate,
        };

        const result = this.utils.encrypt(JSON.stringify(requestData));

        this.router.navigate(['/mandalLevel/VvHHAnimalsMandalReport'], {
            queryParams: { request: result },
        });
    }
}
