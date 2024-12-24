import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MpuacBankAccMentorComponent } from 'src/app/mpuacBankAccModule/components/mpuac-bank-acc-mentor/mpuac-bank-acc-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mpuac-bank-acc-mentor-report',
  templateUrl: './mpuac-bank-acc-mentor-report.component.html',
  styleUrls: ['./mpuac-bank-acc-mentor-report.component.css'],
})
export class MpuacBankAccMentorReportComponent implements OnInit {
  @ViewChild(MpuacBankAccMentorComponent)
  private mpuacBankAccMentor: MpuacBankAccMentorComponent;

  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
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

    this.mpuacBankAccMentor.loadReport();
  }
  onMentorChange(result): void {
    this.router.navigate(['/district/MpuacBankAccDetailReport'], {
      queryParams: { request: result },
    });
  }
}