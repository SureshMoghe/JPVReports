import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdacBankAccMentorComponent } from 'src/app/mpuacBankAccModule/components/mdac-bank-acc-mentor/mdac-bank-acc-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mdac-bank-acc-mentor-report',
  templateUrl: './mdac-bank-acc-mentor-report.component.html',
  styleUrls: ['./mdac-bank-acc-mentor-report.component.css']
})
export class MdacBankAccMentorReportComponent implements OnInit {
  @ViewChild(MdacBankAccMentorComponent)
  private mpuacBankAcc: MdacBankAccMentorComponent;
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
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
    this.mentorId = this.session.mentorId;
    this.mentorName = this.session.mentorName;
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

    this.mpuacBankAcc.loadReport();
  }
  onRbkChange(result): void {
    this.router.navigate(['/mentor/MdacBankAccVillageReport'], {
      queryParams: { request: result },
    });
  }
}
