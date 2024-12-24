import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandAllotmentDistrictComponent } from 'src/app/landAllotmentModule/components/land-allotment-district/land-allotment-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-land-allotment-district-report',
  templateUrl: './land-allotment-district-report.component.html',
  styleUrls: ['./land-allotment-district-report.component.css'],
})
export class LandAllotmentDistrictReportComponent implements OnInit {
  @ViewChild(LandAllotmentDistrictComponent)
  private landAllotmentDist: LandAllotmentDistrictComponent;
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
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onMandalChange(result): void {
    this.router.navigate(['/seLevel/LandAllotmentMandalReport'], {
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

    this.landAllotmentDist.loadReport();
  }
}
