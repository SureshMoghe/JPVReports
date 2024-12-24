import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecAsstSecRbkLevelComponent } from 'src/app/secAsstSecModule/components/sec-asst-sec-rbk-level/sec-asst-sec-rbk-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-sec-asst-sec-rbk-report',
  templateUrl: './sec-asst-sec-rbk-report.component.html',
  styleUrls: ['./sec-asst-sec-rbk-report.component.css'],
})
export class SecAsstSecRbkReportComponent implements OnInit {
  @ViewChild(SecAsstSecRbkLevelComponent)
  private secAsstSec: SecAsstSecRbkLevelComponent;

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
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/SecAsstSecMentorReport'], {
      queryParams: { request: result },
    });
  }
}
