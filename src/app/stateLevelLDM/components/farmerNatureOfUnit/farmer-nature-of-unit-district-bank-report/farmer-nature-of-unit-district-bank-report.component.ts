import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-district-bank-report',
  templateUrl: './farmer-nature-of-unit-district-bank-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-district-bank-report.component.css']
})
export class FarmerNatureOfUnitDistrictBankReportComponent implements OnInit {

  input: any;
  bank: any;

  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.bank = decString.bank;
  }

  onDistrictChange(result): void {
    this.router.navigate(['/stateLevelLDM/FarmerNatureOfUnitBranchBankReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/stateLevelLDM/FarmerNatureOfUnitStateBankReport']);
  }

}
