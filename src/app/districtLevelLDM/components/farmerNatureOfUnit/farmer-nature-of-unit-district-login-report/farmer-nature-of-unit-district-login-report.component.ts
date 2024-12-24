import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-farmer-nature-of-unit-district-login-report',
  templateUrl: './farmer-nature-of-unit-district-login-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-district-login-report.component.css'],
})
export class FarmerNatureOfUnitDistrictLoginReportComponent implements OnInit {
  districtId: any;
  constructor(private router: Router, private session: SessionService) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
  }

  onBankChange(result): void {
    this.router.navigate(
      ['/districtLevelLDM/FarmerNatureOfUnitBankDistrictReport'],
      {
        queryParams: { request: result },
      }
    );
  }
}
