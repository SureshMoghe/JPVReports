import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { AmcuInspectionStateComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-state/amcu-inspection-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-inspection-state-report',
  templateUrl: './amcu-inspection-state-report.component.html',
  styleUrls: ['./amcu-inspection-state-report.component.css'],
})
export class AmcuInspectionStateReportComponent implements OnInit {
  fromDate: any;
  toDate: any;
  typeOfInspection = '';
  inspectionName = '';

  inspectionList = [
    {
      NAME: 'RBK Payment Inspection',
      ID: '1',
    },
    {
      NAME: 'RBK Milk Inspection',
      ID: '2',
    },
    {
      NAME: 'RBK Society Inspection',
      ID: '3',
    },
    {
      NAME: 'RBK Society Milk Inspection',
      ID: '4',
    },
  ];

  @ViewChild(AmcuInspectionStateComponent)
  private inspectState: AmcuInspectionStateComponent;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
    this.typeOfInspection = this.inspectionList[0].ID;
    this.inspectionName = this.inspectionList[0].NAME;
  }

  onTypeOfInspectionChange(): void {}
  onDistrictChange(result): void {
    this.router.navigate(['/state/AmcuInspectionDistrictReport'], {
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
    if (
      this.typeOfInspection === null ||
      this.typeOfInspection === undefined ||
      this.typeOfInspection === ''
    ) {
      this.toast.warning('Type Of Inspection Is Empty');
      return;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.inspectionList.length; i++) {
      if (this.inspectionList[i].ID === this.typeOfInspection) {
        this.inspectionName = this.inspectionList[i].NAME;
      }
    }
    this.inspectState.loadReport();
  }
}
