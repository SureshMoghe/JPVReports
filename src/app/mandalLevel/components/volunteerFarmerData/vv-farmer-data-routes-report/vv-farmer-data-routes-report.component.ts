import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vv-farmer-data-routes-report',
  templateUrl: './vv-farmer-data-routes-report.component.html',
  styleUrls: ['./vv-farmer-data-routes-report.component.css'],
})
export class VvFarmerDataRoutesReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  route: any;
  routeName: any;
  fromDate: any;
  toDate: any;
  string: any;

  constructor(
    private utils: UtilsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    activeRoute.queryParams.subscribe(
      (params) => (this.input = params['request'])
    );
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.route = decString.route;
    this.routeName = decString.routeName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/VvFarmerDataRbkReport'], {
      queryParams: { request: result },
    });
  }
  onVolunteerChange(result): void {}
  onLoggedInChange(result): void {}

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/mandalLevel/VvFarmerDataMandalReport'], {
      queryParams: { request: result },
    });
  }
}
