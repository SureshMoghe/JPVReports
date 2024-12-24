import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MomMentorComponent } from 'src/app/minutesOfMeetingModule/components/mom-mentor/mom-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-mom-mentor-report',
  templateUrl: './mom-mentor-report.component.html',
  styleUrls: ['./mom-mentor-report.component.css'],
})
export class MomMentorReportComponent implements OnInit {
  @ViewChild(MomMentorComponent)
  private momMentor: MomMentorComponent;

  districtId: any;
  districtName: any;
  uniqueId: any;
  fromDate: any;
  toDate: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.uniqueId = this.session.mentorId;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/MomRbkReport'], {
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

    this.momMentor.loadReport();
  }
}
