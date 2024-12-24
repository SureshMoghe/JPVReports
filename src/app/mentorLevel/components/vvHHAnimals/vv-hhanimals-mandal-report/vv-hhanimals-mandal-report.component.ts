import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvHHAnimalsMandalComponent } from 'src/app/vvHHAnimalsModule/components/vv-hhanimals-mandal/vv-hhanimals-mandal.component';

@Component({
  selector: 'app-vv-hhanimals-mandal-report',
  templateUrl: './vv-hhanimals-mandal-report.component.html',
  styleUrls: ['./vv-hhanimals-mandal-report.component.css'],
})
export class VvHHAnimalsMandalReportComponent implements OnInit {
  @ViewChild(VvHHAnimalsMandalComponent)
  private vvFarmerMandal: VvHHAnimalsMandalComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;

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
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/VvHHAnimalsRbkReport'], {
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

    this.vvFarmerMandal.loadReport();
  }
}
