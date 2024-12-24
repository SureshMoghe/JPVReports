import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-village-newly-milk-pouring-farmers-report',
    templateUrl: './village-newly-milk-pouring-farmers-report.component.html',
    styleUrls: ['./village-newly-milk-pouring-farmers-report.component.css']
})
export class VillageNewlyMilkPouringFarmersReportComponent implements OnInit {

    input: any;
    rbkId: any;
    rbkName: any;
    MandalId: any;
    MandalName: any;
    districtId: any;
    districtName: any;
    Reportdate: any;

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
        this.Reportdate = this.session.getdatetimepageheadingReport();

    }
    onVillageChange(result) {
        debugger;
        this.router.navigate(['/state/NewlyMilkPouringFarmersFarmerReport'], {
            queryParams: { request: result },
        });
    }

    btnBack(): void {
        const requestData = {
            rbkId: this.rbkId,
            rbkName: this.rbkName,
            MandalId: this.MandalId,
            MandalName: this.MandalName,
            districtId: this.districtId,
            districtName: this.districtName,


        }; const result = this.utils.encrypt(JSON.stringify(requestData));
        this.router.navigate(['/state/NewlyMilkPouringFarmersRbkReport'], {
            queryParams: { request: result },
        });
    }

}
