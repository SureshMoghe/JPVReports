import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingRbkComponent } from 'src/app/villageMeeting/components/village-meeting-rbk/village-meeting-rbk.component';

@Component({
  selector: 'app-villagemeeting-rbk',
  templateUrl: './villagemeeting-rbk.component.html',
  styleUrls: ['./villagemeeting-rbk.component.css'],
})
export class VillagemeetingRbkComponent implements OnInit {
  @ViewChild(VillageMeetingRbkComponent)
  private villageMeetingRbk: VillageMeetingRbkComponent;

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
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mentorId = this.session.mentorId;
    this.mentorName = this.session.mentorName;
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

    this.villageMeetingRbk.loadReport();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/villageLevelMeetingsVillageLevelReport'], {
      queryParams: { request: result },
    });
  }

  onFunctionariesClickChange(result): void {
    this.router.navigate(['/mentor/VillagemeetingFunctionariesReport'], {
      queryParams: { request: result },
    });
  }

  onSecAssSecClickChange(result): void {
    this.router.navigate(['/mentor/VillagemeetingSecAndAssSecReport'], {
      queryParams: { request: result },
    });
  }

  onBuildingInspectClickChange(result): void {
    this.router.navigate(['/mentor/VillageMeetingBuildingInsReport'], {
      queryParams: { request: result },
    });
  }

  onCalibrationClickChange(result): void {
    this.router.navigate(['/mentor/VillageMeetingCalibrationReport'], {
      queryParams: { request: result },
    });
  }

  onPromotersClickChange(result): void {
    this.router.navigate(['/mentor/VillageMeetingPromotersReport'], {
      queryParams: { request: result },
    });
  }
}
