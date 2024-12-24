import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankWiseMandalComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-mandal/ldm-bank-wise-mandal.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-mandal-report',
  templateUrl: './ldmbank-wise-mandal-report.component.html',
  styleUrls: ['./ldmbank-wise-mandal-report.component.css'],
})
export class LdmbankWiseMandalReportComponent implements OnInit {
  @ViewChild(LdmBankWiseMandalComponent)
  private ldmBank: LdmBankWiseMandalComponent;

  input: any;
  bankName: any;
  districtId: any;
  districtName: any;

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
  }

  onMandalChange(result): void {
    this.router.navigate(['/districtHO/LdmbankWiseBranchReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/districtHO/LdmbankWiseDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
