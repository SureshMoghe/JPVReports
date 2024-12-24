import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerSchemeMentorComponent } from 'src/app/farmerSchemeModule/components/farmer-scheme-mentor/farmer-scheme-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-scheme-mentor-report',
  templateUrl: './farmer-scheme-mentor-report.component.html',
  styleUrls: ['./farmer-scheme-mentor-report.component.css'],
})
export class FarmerSchemeMentorReportComponent implements OnInit {
  @ViewChild(FarmerSchemeMentorComponent)
  private farmerSchemeMentor: FarmerSchemeMentorComponent;
  fromDate: any;
  toDate: any;
  districtId: any;
  uniqueId: any;
  districtName: any;
  constructor(
    private session: SessionService,
    private router: Router,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.uniqueId = this.session.mentorId;
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/FarmerSchemeRbkReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/mentor/NonMilkPouringReport'], {
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

    this.farmerSchemeMentor.loadReport();
  }
}
