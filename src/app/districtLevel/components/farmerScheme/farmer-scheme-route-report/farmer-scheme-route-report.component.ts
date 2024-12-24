import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-scheme-route-report',
  templateUrl: './farmer-scheme-route-report.component.html',
  styleUrls: ['./farmer-scheme-route-report.component.css'],
})
export class FarmerSchemeRouteReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  route: any;
  routeName: any;
  fromDate: any;
  toDate: any;
  phaseid: any;
  phasename: any;
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
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid = decString.phaseid;
    this.phasename = decString.phasename;
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/FarmerSchemeMandalReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/district/NonMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      route: this.route,
      routeName: this.routeName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/FarmerSchemeDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
