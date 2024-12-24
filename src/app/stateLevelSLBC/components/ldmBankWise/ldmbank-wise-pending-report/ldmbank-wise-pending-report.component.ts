import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-pending-report',
  templateUrl: './ldmbank-wise-pending-report.component.html',
  styleUrls: ['./ldmbank-wise-pending-report.component.css'],
})
export class LdmbankWisePendingReportComponent implements OnInit {
  input: any;
  bankName: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  ifscCode: any;
  branchName: any;
  rbkId: any;
  rbkName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.bankName = decString.bankName;
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.ifscCode = decString.ifscCode;
    this.branchName = decString.branchName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
  }

  btnBack(): void {
    const requestData = {
      bankName: this.bankName,
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      ifscCode: this.ifscCode,
      branchName: this.branchName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/stateLevelSLBC/LdmbankWiseRbkReport'], {
      queryParams: { request: result },
    });
  }
}
