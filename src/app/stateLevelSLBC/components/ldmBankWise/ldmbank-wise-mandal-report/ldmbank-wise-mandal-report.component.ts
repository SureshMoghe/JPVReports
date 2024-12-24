import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldmbank-wise-mandal-report',
  templateUrl: './ldmbank-wise-mandal-report.component.html',
  styleUrls: ['./ldmbank-wise-mandal-report.component.css'],
})
export class LdmbankWiseMandalReportComponent implements OnInit {
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
    this.router.navigate(['/stateLevelSLBC/LdmbankWiseBranchReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      bankName: this.bankName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/stateLevelSLBC/LdmbankWiseDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
