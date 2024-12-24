import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankWiseDistrictComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-district/ldm-bank-wise-district.component';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-district-report',
  templateUrl: './ldmbank-wise-district-report.component.html',
  styleUrls: ['./ldmbank-wise-district-report.component.css'],
})
export class LdmbankWiseDistrictReportComponent implements OnInit {
  @ViewChild(LdmBankWiseDistrictComponent)
  private ldmBank: LdmBankWiseDistrictComponent;

  input: any;
  bankName: any;
  reportType = 'STATE';

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
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/LdmbankWiseMandalReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/LdmbankWiseStateReport']);
  }
}
