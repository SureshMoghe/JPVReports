import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerMpussRegRbkComponent } from 'src/app/farmerMpussReg/components/farmer-mpuss-reg-rbk/farmer-mpuss-reg-rbk.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-reg-rbk-report',
  templateUrl: './farmer-reg-rbk-report.component.html',
  styleUrls: ['./farmer-reg-rbk-report.component.css'],
})
export class FarmerRegRbkReportComponent implements OnInit {
  @ViewChild(FarmerMpussRegRbkComponent)
  private farmerRegMandal: FarmerMpussRegRbkComponent;
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
    this.router.navigate(['/mandalLevel/FarmerRegVillageReport'], {
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

    this.farmerRegMandal.loadReport();
  }
}
