import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerSchemeMandalComponent } from 'src/app/farmerSchemeModule/components/farmer-scheme-mandal/farmer-scheme-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-scheme-mandal-report',
  templateUrl: './farmer-scheme-mandal-report.component.html',
  styleUrls: ['./farmer-scheme-mandal-report.component.css'],
})
export class FarmerSchemeMandalReportComponent implements OnInit {
  @ViewChild(FarmerSchemeMandalComponent)
  private farmerSchemeMandal: FarmerSchemeMandalComponent;

  districtId: any;
  districtName: any;
  route: any;
  routeName: any;
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
    this.route = '';
    this.routeName = '';
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/FarmerSchemeRbkReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/mandalLevel/NonMilkPouringReport'], {
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

    this.farmerSchemeMandal.loadReport();
  }
}
