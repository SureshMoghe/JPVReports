import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalibrationDetailLevelComponent } from 'src/app/calibrationModule/components/calibration-detail-level/calibration-detail-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-calibration-detail-level-report',
  templateUrl: './calibration-detail-level-report.component.html',
  styleUrls: ['./calibration-detail-level-report.component.css'],
})
export class CalibrationDetailLevelReportComponent implements OnInit {
  @ViewChild(CalibrationDetailLevelComponent)
  private secAsstSec: CalibrationDetailLevelComponent;
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  rbkId: any;
  rbkName: any;
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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/jcLevel/CalibrationRbkLevelReport'], {
      queryParams: { request: result },
    });
  }
}