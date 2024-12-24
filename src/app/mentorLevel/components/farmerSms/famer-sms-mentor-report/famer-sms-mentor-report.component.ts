import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerSmsMentorComponent } from 'src/app/farmerSmsModule/components/farmer-sms-mentor/farmer-sms-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-famer-sms-mentor-report',
  templateUrl: './famer-sms-mentor-report.component.html',
  styleUrls: ['./famer-sms-mentor-report.component.css'],
})
export class FamerSmsMentorReportComponent implements OnInit {
  @ViewChild(FarmerSmsMentorComponent)
  private farmerSmsMentor: FarmerSmsMentorComponent;

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
    this.router.navigate(['/mentor/FamerSmsRbkReport'], {
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

    this.farmerSmsMentor.loadReport();
  }
}
