import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingInspectionStateComponent } from 'src/app/buildingInspectionModule/components/building-inspection-state/building-inspection-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-building-inspection-state-report',
  templateUrl: './building-inspection-state-report.component.html',
  styleUrls: ['./building-inspection-state-report.component.css'],
})
export class BuildingInspectionStateReportComponent implements OnInit {
  fromDate: any;
  toDate: any;

  @ViewChild(BuildingInspectionStateComponent)
  private inspectState: BuildingInspectionStateComponent;
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
    this.router.navigate(['/civilEngLevel/BuildingInspectionMentorReport'], {
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

    this.inspectState.loadReport();
  }
}
