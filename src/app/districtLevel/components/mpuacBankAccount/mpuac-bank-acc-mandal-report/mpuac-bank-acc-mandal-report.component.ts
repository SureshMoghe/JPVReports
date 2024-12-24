import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MpuacBankAccMandalComponent } from 'src/app/mpuacBankAccModule/components/mpuac-bank-acc-mandal/mpuac-bank-acc-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mpuac-bank-acc-mandal-report',
  templateUrl: './mpuac-bank-acc-mandal-report.component.html',
  styleUrls: ['./mpuac-bank-acc-mandal-report.component.css'],
})
export class MpuacBankAccMandalReportComponent implements OnInit {
  @ViewChild(MpuacBankAccMandalComponent)
  private mpuacBankAccMentor: MpuacBankAccMandalComponent;

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
  onMandalChange(result): void {
    this.router.navigate(['/district/MpuacBankAccDetailReport'], {
      queryParams: { request: result },
    });
  }

  onNoMdacAccRbkChange(result): void {
    this.router.navigate(['/district/MdacNotCreatedRbkListReport'], {
      queryParams: { request: result },
    });
  }
}
