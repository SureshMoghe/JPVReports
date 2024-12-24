import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvFarmerDataMentorComponent } from 'src/app/volunteerFarmerDataModule/components/vv-farmer-data-mentor/vv-farmer-data-mentor.component';

@Component({
  selector: 'app-vv-farmer-data-mentor-report',
  templateUrl: './vv-farmer-data-mentor-report.component.html',
  styleUrls: ['./vv-farmer-data-mentor-report.component.css'],
})
export class VvFarmerDataMentorReportComponent implements OnInit {
  @ViewChild(VvFarmerDataMentorComponent)
  private vvFarmerMentor: VvFarmerDataMentorComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  route: any;
  routeName: any;
  uniqueId: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    activeRoute.queryParams.subscribe(
      (params) => (this.input = params['request'])
    );
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    (this.uniqueId = this.session.mentorId),
      (this.fromDate = this.session.getFromDateString());
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/VvFarmerDataRbkReport'], {
      queryParams: { request: result },
    });
  }
  onVolunteerChange(result): void {
    this.router.navigate(['/mentor/VvFarmerVolunteersListReport'], {
      queryParams: { request: result },
    });
  }
  onLoggedInChange(result): void {
    this.router.navigate(['/mentor/VvFarmerVolunteersLoggedInReport'], {
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
