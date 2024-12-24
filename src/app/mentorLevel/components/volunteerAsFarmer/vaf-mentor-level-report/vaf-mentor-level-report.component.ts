import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { VafMentorLevelComponent } from 'src/app/volunteerAsFarmerModule/components/vaf-mentor-level/vaf-mentor-level.component';

@Component({
  selector: 'app-vaf-mentor-level-report',
  templateUrl: './vaf-mentor-level-report.component.html',
  styleUrls: ['./vaf-mentor-level-report.component.css'],
})
export class VafMentorLevelReportComponent implements OnInit {
  @ViewChild(VafMentorLevelComponent)
  private vvFarmerMentor: VafMentorLevelComponent;
  fromDate: any;
  toDate: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  uniqueId: any;

  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
    this.uniqueId = this.session.mentorId;
    this.districtName = this.session.districtName;
    this.districtId = this.session.districtId;
    this.mandalName = this.session.mandalName;
    this.mandalId = this.session.mandalId;
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/VafRbkLevelReport'], {
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

    this.vvFarmerMentor.loadReport();
  }
}
