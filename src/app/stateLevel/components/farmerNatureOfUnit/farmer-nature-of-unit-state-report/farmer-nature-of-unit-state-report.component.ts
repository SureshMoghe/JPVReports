import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-nature-of-unit-state-report',
  templateUrl: './farmer-nature-of-unit-state-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-state-report.component.css'],
})
export class FarmerNatureOfUnitStateReportComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDistrictChange(result): void {
    this.router.navigate(['/state/FarmerNatureOfUnitDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
