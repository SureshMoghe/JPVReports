import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LdmBankWiseStateComponent } from 'src/app/ldmBankWiseModule/components/ldm-bank-wise-state/ldm-bank-wise-state.component';

@Component({
  selector: 'app-ldmbank-wise-state-report',
  templateUrl: './ldmbank-wise-state-report.component.html',
  styleUrls: ['./ldmbank-wise-state-report.component.css'],
})
export class LdmbankWiseStateReportComponent implements OnInit {
  @ViewChild(LdmBankWiseStateComponent)
  private ldmBankWise: LdmBankWiseStateComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBankChange(result): void {
    this.router.navigate(['/state/LdmbankWiseDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
