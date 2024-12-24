import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecAsstSecMentorLevelComponent } from 'src/app/secAsstSecModule/components/sec-asst-sec-mentor-level/sec-asst-sec-mentor-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-sec-asst-sec-mentor-report',
  templateUrl: './sec-asst-sec-mentor-report.component.html',
  styleUrls: ['./sec-asst-sec-mentor-report.component.css'],
})
export class SecAsstSecMentorReportComponent implements OnInit {
  @ViewChild(SecAsstSecMentorLevelComponent)
  private secAsstSec: SecAsstSecMentorLevelComponent;

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
    this.router.navigate(['/districtHO/SecAsstSecRbkReport'], {
      queryParams: { request: result },
    });
  }

  onAsstSecChange(result): void {
    this.router.navigate(['/districtHO/SecAsstSecDetailReport'], {
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