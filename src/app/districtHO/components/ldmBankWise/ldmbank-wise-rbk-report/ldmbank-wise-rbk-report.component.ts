import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankWiseRbkComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-rbk/ldm-bank-wise-rbk.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-rbk-report',
  templateUrl: './ldmbank-wise-rbk-report.component.html',
  styleUrls: ['./ldmbank-wise-rbk-report.component.css'],
})
export class LdmbankWiseRbkReportComponent implements OnInit {
  @ViewChild(LdmBankWiseRbkComponent) private ldmBank: LdmBankWiseRbkComponent;

  input: any;
  bankName: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  ifscCode: any;
  branchName: any;

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
  }

  onPendingChange(result): void {
    this.router.navigate(['/districtHO/LdmbankWisePendingReport'], {
      queryParams: { request: result },
    });
  }

  onApprovedRejectedChange(result): void {
    this.router.navigate(['/districtHO/LdmbankWiseApprovedRejectedReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      bankName: this.bankName,
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/districtHO/LdmbankWiseBranchReport'], {
      queryParams: { request: result },
    });
  }
}
