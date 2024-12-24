import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-approval-state-report',
  templateUrl: './farmer-approval-state-report.component.html',
  styleUrls: ['./farmer-approval-state-report.component.css'],
})
export class FarmerApprovalStateReportComponent implements OnInit {
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {}

  onDistrictChange(result): void {
    this.router.navigate(['/state/FarmerApprovalDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
