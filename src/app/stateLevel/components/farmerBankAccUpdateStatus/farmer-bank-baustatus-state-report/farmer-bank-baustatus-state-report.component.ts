import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-bank-baustatus-state-report',
  templateUrl: './farmer-bank-baustatus-state-report.component.html',
  styleUrls: ['./farmer-bank-baustatus-state-report.component.css'],
})
export class FarmerBankBAUStatusStateReportComponent implements OnInit {
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {}

  onDistrictChange(result): void {
    this.router.navigate(['/state/FarmerBankBAUStatusDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
