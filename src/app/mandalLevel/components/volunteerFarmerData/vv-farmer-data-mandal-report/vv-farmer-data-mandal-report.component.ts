import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { VvFarmerDataMandalComponent } from 'src/app/volunteerFarmerDataModule/components/vv-farmer-data-mandal/vv-farmer-data-mandal.component';

@Component({
  selector: 'app-vv-farmer-data-mandal-report',
  templateUrl: './vv-farmer-data-mandal-report.component.html',
  styleUrls: ['./vv-farmer-data-mandal-report.component.css']
})
export class VvFarmerDataMandalReportComponent implements OnInit {
  @ViewChild(VvFarmerDataMandalComponent)
  private vvFarmerState: VvFarmerDataMandalComponent;
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

  onRouteChange(result): void {
    this.router.navigate(['/mandalLevel/VvFarmerDataRoutesReport'], {
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

    this.vvFarmerState.loadReport();
  }
}
