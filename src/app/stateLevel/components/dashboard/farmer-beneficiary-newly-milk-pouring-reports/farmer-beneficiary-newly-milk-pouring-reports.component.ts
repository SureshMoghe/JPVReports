import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-farmer-beneficiary-newly-milk-pouring-reports',
    templateUrl: './farmer-beneficiary-newly-milk-pouring-reports.component.html',
    styleUrls: ['./farmer-beneficiary-newly-milk-pouring-reports.component.css']
})
export class FarmerBeneficiaryNewlyMilkPouringReportsComponent implements OnInit {

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
        this.Reportdate = this.session.getdatetimepageheadingReport();


    }


    btnBack(): void {
        const requestData = {
            rbkId: this.rbkId,
            rbkName: this.rbkName,
            MandalId: this.MandalId,
            MandalName: this.MandalName,
            districtId: this.districtId,
            districtName: this.districtName,
            villageId: this.villageId,
            villageName: this.villageName

        }; const result = this.utils.encrypt(JSON.stringify(requestData));
        this.router.navigate(['/state/NewlyMilkPouringFarmersVillageReport'], {
            queryParams: { request: result },
        });
    }


}
