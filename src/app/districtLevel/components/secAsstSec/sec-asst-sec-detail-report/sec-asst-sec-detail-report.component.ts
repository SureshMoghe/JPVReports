import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecAsstSecDetailLevelComponent } from 'src/app/secAsstSecModule/components/sec-asst-sec-detail-level/sec-asst-sec-detail-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-sec-asst-sec-detail-report',
  templateUrl: './sec-asst-sec-detail-report.component.html',
  styleUrls: ['./sec-asst-sec-detail-report.component.css'],
})
export class SecAsstSecDetailReportComponent implements OnInit {
  @ViewChild(SecAsstSecDetailLevelComponent)
  private secAsstSec: SecAsstSecDetailLevelComponent;
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

    this.router.navigate(['/district/SecAsstSecMentorReport'], {
      queryParams: { request: result },
    });
  }
}
