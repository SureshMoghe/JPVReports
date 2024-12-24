import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AmcuHandingOverStateComponent } from 'src/app/amcuHandingOverModule/components/amcu-handing-over-state/amcu-handing-over-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-handing-over-state-report',
  templateUrl: './amcu-handing-over-state-report.component.html',
  styleUrls: ['./amcu-handing-over-state-report.component.css'],
})
export class AmcuHandingOverStateReportComponent implements OnInit {
  @ViewChild(AmcuHandingOverStateComponent)
  private handOver: AmcuHandingOverStateComponent;
  fromDate: any;
  toDate: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onDistrictChange(result): void {
    this.router.navigate(['/civilEngLevel/AmcuHandingOverMentorReport'], {
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

    this.handOver.loadReport();
  }
}
