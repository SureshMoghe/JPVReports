import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmcuInspectionDistrictComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-district/amcu-inspection-district.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-inspection-district-report',
  templateUrl: './amcu-inspection-district-report.component.html',
  styleUrls: ['./amcu-inspection-district-report.component.css'],
})
export class AmcuInspectionDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  routeNo: any;
  routeName: any;
  typeOfInspection = '';
  inspectionName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.typeOfInspection = decString.typeOfInspection;
    this.inspectionName = decString.inspectionName;
  }

  onSocietiesInspectedClickChange(result): void {
    this.router.navigate(['/state/AmcuInspectedSocitiesReport'], {
      queryParams: { request: result },
    });
  }
  onSocietiesNotInspectedClickChange(result): void {
    this.router.navigate(['/state/AmcuNotInspectedSocitiesReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/AmcuInspectionStateReport']);
  }
}
