import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { VafMandalLevelComponent } from 'src/app/volunteerAsFarmerModule/components/vaf-mandal-level/vaf-mandal-level.component';

@Component({
  selector: 'app-vaf-mandal-level-report',
  templateUrl: './vaf-mandal-level-report.component.html',
  styleUrls: ['./vaf-mandal-level-report.component.css'],
})
export class VafMandalLevelReportComponent implements OnInit {
  @ViewChild(VafMandalLevelComponent)
  private vvFarmerMandal: VafMandalLevelComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
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
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/VafRbkLevelReport'], {
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

    this.vvFarmerMandal.loadReport();
  }
}
