import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerSmsMandalComponent } from 'src/app/farmerSmsModule/components/farmer-sms-mandal/farmer-sms-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-sms-mandal-report',
  templateUrl: './farmer-sms-mandal-report.component.html',
  styleUrls: ['./farmer-sms-mandal-report.component.css'],
})
export class FarmerSmsMandalReportComponent implements OnInit {
  @ViewChild(FarmerSmsMandalComponent)
  private farmerSmsMandal: FarmerSmsMandalComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;
phaseid:any;
phasename:any;
  
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
    this.router.navigate(['/mandalLevel/FarmerSmsRbkReport'], {
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

    this.farmerSmsMandal.loadReport();
  }
}
