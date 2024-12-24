import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-scheme-mandal-report',
  templateUrl: './farmer-scheme-mandal-report.component.html',
  styleUrls: ['./farmer-scheme-mandal-report.component.css'],
})
export class FarmerSchemeMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  route: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    routes.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.route = decString.route;
    this.routeName = decString.routeName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/jcLevel/FarmerSchemeRbkReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/jcLevel/NonMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      route: this.route,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/jcLevel/FarmerSchemeRouteReport'], {
      queryParams: { request: result },
    });
  }
}
