import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AmcuLandAllotmentStateComponent } from 'src/app/amcuLandAllotmentModule/components/amcu-land-allotment-state/amcu-land-allotment-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-land-allotment-state-report',
  templateUrl: './amcu-land-allotment-state-report.component.html',
  styleUrls: ['./amcu-land-allotment-state-report.component.css']
})
export class AmcuLandAllotmentStateReportComponent implements OnInit {

  @ViewChild(AmcuLandAllotmentStateComponent)
  private landAllotmentState: AmcuLandAllotmentStateComponent;
  fromDate: any;
  toDate: any;

  constructor(
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/amcuLandAllotmentDistrictReport'], {
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

    this.landAllotmentState.loadReport();
  }

}
