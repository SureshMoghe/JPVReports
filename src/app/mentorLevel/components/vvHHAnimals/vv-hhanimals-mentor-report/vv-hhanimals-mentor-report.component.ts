import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvHHAnimalsMentorComponent } from 'src/app/vvHHAnimalsModule/components/vv-hhanimals-mentor/vv-hhanimals-mentor.component';

@Component({
  selector: 'app-vv-hhanimals-mentor-report',
  templateUrl: './vv-hhanimals-mentor-report.component.html',
  styleUrls: ['./vv-hhanimals-mentor-report.component.css'],
})
export class VvHHAnimalsMentorReportComponent implements OnInit {
  @ViewChild(VvHHAnimalsMentorComponent)
  private vvFarmerMentor: VvHHAnimalsMentorComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;
  uniqueId: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    (this.mandalId = this.session.mentorId),
      (this.mandalName = this.session.mandalName);
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/VvHHAnimalsClusterReport'], {
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

    this.vvFarmerMentor.loadReport();
  }
}
