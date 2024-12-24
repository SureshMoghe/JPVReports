import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AmcuLandAllotmentMandalComponent } from 'src/app/amcuLandAllotmentModule/components/amcu-land-allotment-mandal/amcu-land-allotment-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-land-allotment-mandal-report',
  templateUrl: './amcu-land-allotment-mandal-report.component.html',
  styleUrls: ['./amcu-land-allotment-mandal-report.component.css'],
})
export class AmcuLandAllotmentMandalReportComponent implements OnInit {
  @ViewChild(AmcuLandAllotmentMandalComponent)
  private landAllotmentMandal: AmcuLandAllotmentMandalComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
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

    this.landAllotmentMandal.loadReport();
  }
}
