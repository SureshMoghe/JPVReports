import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-bank-detail-report',
  templateUrl: './farmer-nature-of-unit-bank-detail-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-bank-detail-report.component.css'],
})
export class FarmerNatureOfUnitBankDetailReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  branch: any;
  bank: any;
  liveStock: any;
  natureOfUnit: any;

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
    this.branch = decString.branch;
    this.liveStock = decString.liveStock;
    this.natureOfUnit = decString.natureOfUnit;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      bank: this.bank,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankBranchReport'],
      {
        queryParams: { request: result },
      }
    );
  }
}
