import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalibrationRbkLevelComponent } from 'src/app/calibrationModule/components/calibration-rbk-level/calibration-rbk-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-calibration-rbk-level-report',
  templateUrl: './calibration-rbk-level-report.component.html',
  styleUrls: ['./calibration-rbk-level-report.component.css'],
})
export class CalibrationRbkLevelReportComponent implements OnInit {
  @ViewChild(CalibrationRbkLevelComponent)
  private secAsstSec: CalibrationRbkLevelComponent;

  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  fromDate: any;
  toDate: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/jcLevel/CalibrationDetailLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/jcLevel/CalibrationMentorLevelReport'], {
      queryParams: { request: result },
    });
  }
}
