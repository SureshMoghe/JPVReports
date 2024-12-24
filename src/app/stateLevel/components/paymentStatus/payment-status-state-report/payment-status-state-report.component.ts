import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentStatusStateComponent } from 'src/app/paymentStatusModule/components/payment-status-state/payment-status-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-payment-status-state-report',
  templateUrl: './payment-status-state-report.component.html',
  styleUrls: ['./payment-status-state-report.component.css'],
})
export class PaymentStatusStateReportComponent implements OnInit {
  @ViewChild(PaymentStatusStateComponent)
  private paymentState: PaymentStatusStateComponent;
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
    this.router.navigate(['/state/PaymentStatusDistrictReport'], {
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

    this.paymentState.loadReport();
  }
}
