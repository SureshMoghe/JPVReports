import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingAbstractMandalComponent } from 'src/app/buildingAbstractModule/components/building-abstract-mandal/building-abstract-mandal.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-building-abstract-mandal-report',
  templateUrl: './building-abstract-mandal-report.component.html',
  styleUrls: ['./building-abstract-mandal-report.component.css'],
})
export class BuildingAbstractMandalReportComponent implements OnInit {
  @ViewChild(BuildingAbstractMandalComponent)
  private buildingAbstarctMandal: BuildingAbstractMandalComponent;

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
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/BuildingAbstractRbkReport'], {
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

    this.buildingAbstarctMandal.loadReport();
  }
}
