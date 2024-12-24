import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-district-report',
  templateUrl: './ldmbank-wise-district-report.component.html',
  styleUrls: ['./ldmbank-wise-district-report.component.css'],
})
export class LdmbankWiseDistrictReportComponent implements OnInit {
  input: any;
  bankName: any;

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
    const decString = JSON.parse(this.utils.decrypt(result));
    const requestData = {
      reportType: 'SLBC',
      bankName: decString.bankName,
      districtId: decString.districtId,
      districtName: decString.districtName,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/stateLevelSLBC/LdmbankWiseBranchReport'], {
      queryParams: { request: encryptedString },
    });
  }

  btnBack(): void {
    this.router.navigate(['/stateLevelSLBC/LdmbankWiseStateReport']);
  }
}
