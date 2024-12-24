import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AmcuInspectionMentorComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-mentor/amcu-inspection-mentor.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-amcu-inspection-mentor-report',
  templateUrl: './amcu-inspection-mentor-report.component.html',
  styleUrls: ['./amcu-inspection-mentor-report.component.css'],
})
export class AmcuInspectionMentorReportComponent implements OnInit {
  fromDate: any;
  toDate: any;
  typeOfInspection = '';
  inspectionName = '';
  uniqueId: any;
  districtId: any;
  districtName: any;

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

  @ViewChild(AmcuInspectionMentorComponent)
  private inspectMentor: AmcuInspectionMentorComponent;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtName = this.session.districtName;
    this.districtId = this.session.districtId;
    this.uniqueId = this.session.mentorId;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
    this.typeOfInspection = this.inspectionList[0].ID;
    this.inspectionName = this.inspectionList[0].NAME;
  }

  onTypeOfInspectionChange(): void {}
  onSocietiesInspectedClickChange(result): void {
    this.router.navigate(['/mentor/AmcuInspectedSocitiesReport'], {
      queryParams: { request: result },
    });
  }
  onSocietiesNotInspectedClickChange(result): void {
    this.router.navigate(['/mentor/AmcuNotInspectedSocitiesReport'], {
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
    this.inspectMentor.loadReport();
  }
}
