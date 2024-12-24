import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-bank-branch-report',
  templateUrl: './farmer-nature-of-unit-bank-branch-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-bank-branch-report.component.css'],
})
export class FarmerNatureOfUnitBankBranchReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  bank: any;

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
    this.bank = decString.bank;
  }

  onSheepToBuffaloChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDetailReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  onGoatToBuffaloChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDetailReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  onSheepToCowChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDetailReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  onGoatToCowChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDetailReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  btnBack(): void {
    const requestData = {
      bank: this.bank,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDistrictReport'],
      {
        queryParams: { request: result },
      }
    );
  }
}
