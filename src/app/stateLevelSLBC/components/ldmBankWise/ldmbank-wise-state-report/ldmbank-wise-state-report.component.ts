import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ldmbank-wise-state-report',
  templateUrl: './ldmbank-wise-state-report.component.html',
  styleUrls: ['./ldmbank-wise-state-report.component.css'],
})
export class LdmbankWiseStateReportComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBankChange(result): void {
    this.router.navigate(['/stateLevelSLBC/LdmbankWiseDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
