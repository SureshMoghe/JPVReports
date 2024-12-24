import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingAbstractRbkComponent } from 'src/app/buildingAbstractModule/components/building-abstract-rbk/building-abstract-rbk.component';
import { CalibrationRbkLevelComponent } from 'src/app/calibrationModule/components/calibration-rbk-level/calibration-rbk-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-building-abstract-rbk-report',
  templateUrl: './building-abstract-rbk-report.component.html',
  styleUrls: ['./building-abstract-rbk-report.component.css'],
})
export class BuildingAbstractRbkReportComponent implements OnInit {
  @ViewChild(BuildingAbstractRbkComponent)
  private secAsstSec: BuildingAbstractRbkComponent;

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
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/district/BuildingAbstractVillageReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/BuildingAbstractMandalReport'], {
      queryParams: { request: result },
    });
  }
}
