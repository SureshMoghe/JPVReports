import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalibrationMentorLevelComponent } from 'src/app/calibrationModule/components/calibration-mentor-level/calibration-mentor-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-calibration-mentor-level-report',
  templateUrl: './calibration-mentor-level-report.component.html',
  styleUrls: ['./calibration-mentor-level-report.component.css'],
})
export class CalibrationMentorLevelReportComponent implements OnInit {
  @ViewChild(CalibrationMentorLevelComponent)
  private calibration: CalibrationMentorLevelComponent;

  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onMentorChange(result): void {
    this.router.navigate(['/district/CalibrationRbkLevelReport'], {
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