import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerRegistrationMentorComponent } from 'src/app/farmerMpussReg/components/farmer-registration-mentor/farmer-registration-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-reg-mentor-report',
  templateUrl: './farmer-reg-mentor-report.component.html',
  styleUrls: ['./farmer-reg-mentor-report.component.css'],
})
export class FarmerRegMentorReportComponent implements OnInit {
  @ViewChild(FarmerRegistrationMentorComponent)
  private farmerMentorReg: FarmerRegistrationMentorComponent;

  input: any;
  districtId: any;
  districtName: any;
  uniqueId: any;
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
    this.uniqueId = this.session.mentorId;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
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

    this.farmerMentorReg.loadReport();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/FarmerMpussRegVillageReport'], {
      queryParams: { request: result },
    });
  }
}
