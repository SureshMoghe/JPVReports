import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
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
  phaseid:any;
  phasename:any;
  constructor(
    private utils: UtilsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService 
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
    this.phasename=decString.phasename;
    this.phaseid=decString.phaseid;
  }

  onRbkChange(result): void {
    this.router.navigate(['/state/VvFarmerDataRbkReport'], {
      queryParams: { request: result },
    });
  }
  onVolunteerChange(result): void {
    this.router.navigate(['/state/VvFarmerVolunteersListReport'], {
      queryParams: { request: result },
    });
  }
  onLoggedInChange(result): void {
    this.router.navigate(['/state/VvFarmerVolunteersLoggedInReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phasename:this.phasename,
      phaseid:this.phaseid,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/VvFarmerDataMandalReport'], {
      queryParams: { request: result },
    });
  }
}
