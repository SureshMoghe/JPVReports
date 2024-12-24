import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AmcuInspectionDistrictComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-district/amcu-inspection-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-famer-sms-district-report',
  templateUrl: './famer-sms-district-report.component.html',
  styleUrls: ['./famer-sms-district-report.component.css'],
})
export class FamerSmsDistrictReportComponent implements OnInit {
  @ViewChild(AmcuInspectionDistrictComponent)
  private farmerSmsDistrict: AmcuInspectionDistrictComponent;

  districtId: any;
  districtName: any;
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
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onMandalChange(result): void {
    this.router.navigate(['/jcLevel/FamerSmsMandalReport'], {
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

    this.farmerSmsDistrict.loadReport();
  }
}
