import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SecAsstSecStateLevelComponent } from 'src/app/secAsstSecModule/components/sec-asst-sec-state-level/sec-asst-sec-state-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-sec-asst-sec-state-report',
  templateUrl: './sec-asst-sec-state-report.component.html',
  styleUrls: ['./sec-asst-sec-state-report.component.css'],
})
export class SecAsstSecStateReportComponent implements OnInit {
  @ViewChild(SecAsstSecStateLevelComponent)
  private secAsstSec: SecAsstSecStateLevelComponent;
  fromDate: any;
  toDate: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/SecAsstSecMentorReport'], {
      queryParams: { request: result },
    });
  }
  btnLoadReport(): void {
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
      return;
    }

    this.secAsstSec.loadReport();
  }
}
