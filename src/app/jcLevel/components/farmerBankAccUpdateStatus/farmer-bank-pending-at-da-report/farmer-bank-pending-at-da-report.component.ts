import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-bank-pending-at-da-report',
  templateUrl: './farmer-bank-pending-at-da-report.component.html',
  styleUrls: ['./farmer-bank-pending-at-da-report.component.css'],
})
export class FarmerBankPendingAtDaReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  villageId: any;
  villageName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.villageId = decString.villageId;
    this.villageName = decString.villageName;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/jcLevel/FarmerBankBAUStatusRbkReport'], {
      queryParams: { request: result },
    });
  }
}
