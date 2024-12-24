import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankWiseBranchComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-branch/ldm-bank-wise-branch.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-branch-report',
  templateUrl: './ldmbank-wise-branch-report.component.html',
  styleUrls: ['./ldmbank-wise-branch-report.component.css'],
})
export class LdmbankWiseBranchReportComponent implements OnInit {
  @ViewChild(LdmBankWiseBranchComponent)
  private ldmBank: LdmBankWiseBranchComponent;

  input: any;
  bankName: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  reportType: any;

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
    this.reportType = '';
  }

  onBranchChange(result): void {
    this.router.navigate(['/state/LdmbankWiseRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      bankName: this.bankName,
      districtId: this.districtId,
      districtName: this.districtName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/LdmbankWiseMandalReport'], {
      queryParams: { request: result },
    });
  }
}
