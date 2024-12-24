import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-bank-district-report',
  templateUrl: './farmer-nature-of-unit-bank-district-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-bank-district-report.component.css'],
})
export class FarmerNatureOfUnitBankDistrictReportComponent implements OnInit {
  input: any;
  bank: any;
  districtId: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.bank = decString.bank;
  }

  onDistrictChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankBranchReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitDistrictLoginReport'],
      {
        queryParams: { request: result },
      }
    );
  }
}
