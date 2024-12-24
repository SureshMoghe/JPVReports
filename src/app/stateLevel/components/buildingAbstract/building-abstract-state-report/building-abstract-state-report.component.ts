import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingAbstractStateComponent } from 'src/app/buildingAbstractModule/components/building-abstract-state/building-abstract-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-building-abstract-state-report',
  templateUrl: './building-abstract-state-report.component.html',
  styleUrls: ['./building-abstract-state-report.component.css'],
})
export class BuildingAbstractStateReportComponent implements OnInit {
  @ViewChild(BuildingAbstractStateComponent)
  private buildingAbstract: BuildingAbstractStateComponent;
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
    this.router.navigate(['/state/BuildingAbstractMandalReport'], {
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

    this.buildingAbstract.loadReport();
  }
}
