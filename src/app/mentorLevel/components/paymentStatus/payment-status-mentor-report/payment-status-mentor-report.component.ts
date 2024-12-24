import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentStatusMentorComponent } from 'src/app/paymentStatusModule/components/payment-status-mentor/payment-status-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-payment-status-mentor-report',
  templateUrl: './payment-status-mentor-report.component.html',
  styleUrls: ['./payment-status-mentor-report.component.css']
})
export class PaymentStatusMentorReportComponent implements OnInit {
  @ViewChild(PaymentStatusMentorComponent)
  private paymentMentor: PaymentStatusMentorComponent;

  input: any;
  districtId: any;
  districtName: any;
  uniqueId: any;
  fromDate: any;
  toDate: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.uniqueId = this.session.mentorId;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/PaymentStatusRbkReport'], {
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

    this.paymentMentor.loadReport();
  }
}
