import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MpuacBankAccDetailComponent } from 'src/app/mpuacBankAccModule/components/mpuac-bank-acc-detail/mpuac-bank-acc-detail.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mdac-bank-acc-detail-report',
  templateUrl: './mdac-bank-acc-detail-report.component.html',
  styleUrls: ['./mdac-bank-acc-detail-report.component.css'],
})
export class MdacBankAccDetailReportComponent implements OnInit {
  @ViewChild(MpuacBankAccDetailComponent)
  private farmerMdacAcc: MpuacBankAccDetailComponent;
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mentorId = this.session.mandalId;
    this.mentorName = this.session.mandalName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/MdacBankAccVillageReport'], {
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

    this.farmerMdacAcc.loadReport();
  }
}
