import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-nature-of-unit-state-bank-report',
  templateUrl: './farmer-nature-of-unit-state-bank-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-state-bank-report.component.css']
})
export class FarmerNatureOfUnitStateBankReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBankChange(result): void {
    this.router.navigate(['/stateLevelLDM/FarmerNatureOfUnitDistrictBankReport'], {
      queryParams: { request: result },
    });
  }

}
