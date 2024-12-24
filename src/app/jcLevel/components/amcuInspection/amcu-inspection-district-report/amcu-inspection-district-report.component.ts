import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmcuInspectionDistrictComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-district/amcu-inspection-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-inspection-district-report',
  templateUrl: './amcu-inspection-district-report.component.html',
  styleUrls: ['./amcu-inspection-district-report.component.css'],
})
export class AmcuInspectionDistrictReportComponent implements OnInit {
  @ViewChild(AmcuInspectionDistrictComponent)
  private inspectDistrict: AmcuInspectionDistrictComponent;

  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  routeNo: any;
  routeName: any;
  typeOfInspection = '';
  inspectionName: any;

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
    this.typeOfInspection = this.inspectionList[0].ID;
    this.inspectionName = this.inspectionList[0].NAME;
  }

  onTypeOfInspectionChange(): void {}

  onSocietiesInspectedClickChange(result): void {
    this.router.navigate(['/jcLevel/AmcuInspectedSocitiesReport'], {
      queryParams: { request: result },
    });
  }
  onSocietiesNotInspectedClickChange(result): void {
    this.router.navigate(['/jcLevel/AmcuNotInspectedSocitiesReport'], {
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
    this.inspectDistrict.loadReport();
  }
}
