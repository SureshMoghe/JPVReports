import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmcuHandingOverMentorComponent } from 'src/app/amcuHandingOverModule/components/amcu-handing-over-mentor/amcu-handing-over-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-handing-over-mentor-report',
  templateUrl: './amcu-handing-over-mentor-report.component.html',
  styleUrls: ['./amcu-handing-over-mentor-report.component.css'],
})
export class AmcuHandingOverMentorReportComponent implements OnInit {
  @ViewChild(AmcuHandingOverMentorComponent)
  private inspect: AmcuHandingOverMentorComponent;

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

  onMentorChange(result): void {
    this.router.navigate(['/jcLevel/AmcuHandingOverRbkReport'], {
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

    this.inspect.loadReport();
  }
}
