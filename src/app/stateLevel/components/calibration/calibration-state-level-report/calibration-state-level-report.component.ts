import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalibrationStateLevelComponent } from 'src/app/calibrationModule/components/calibration-state-level/calibration-state-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-calibration-state-level-report',
  templateUrl: './calibration-state-level-report.component.html',
  styleUrls: ['./calibration-state-level-report.component.css'],
})
export class CalibrationStateLevelReportComponent implements OnInit {
  @ViewChild(CalibrationStateLevelComponent)
  private calibration: CalibrationStateLevelComponent;
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
    this.router.navigate(['/state/CalibrationMentorLevelReport'], {
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

    this.calibration.loadReport();
  }
}
