import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankWiseDistrictLoginComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-district-login/ldm-bank-wise-district-login.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-district-report',
  templateUrl: './ldmbank-wise-district-report.component.html',
  styleUrls: ['./ldmbank-wise-district-report.component.css'],
})
export class LdmbankWiseDistrictReportComponent implements OnInit {
  @ViewChild(LdmBankWiseDistrictLoginComponent)
  private ldmBank: LdmBankWiseDistrictLoginComponent;

  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  onBankChange(result): void {
    this.router.navigate(['/district/LdmbankWiseMandalReport'], {
      queryParams: { request: result },
    });
  }
}
