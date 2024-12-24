import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-network-state-report',
  templateUrl: './amcu-network-state-report.component.html',
  styleUrls: ['./amcu-network-state-report.component.css'],
})
export class AmcuNetworkStateReportComponent implements OnInit {
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {}

  onDistrictChange(result): void {
    this.router.navigate(['/state/AmcuNetworkDistrictReport'], {
      queryParams: { request: result },
    });
  }
  onNwNotSubmittedChange(result): void {
    this.router.navigate(['/state/NetworkNotSubmittedVillagesReport'], {
      queryParams: { request: result },
    });
  }
}
