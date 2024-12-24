import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vv-farmer-data-rbk-report',
  templateUrl: './vv-farmer-data-rbk-report.component.html',
  styleUrls: ['./vv-farmer-data-rbk-report.component.css'],
})
export class VvFarmerDataRbkReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  route: any;
  routeName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;
  phasename: any;
  phaseid: any;

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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phasename=decString.phasename;
    this.phaseid=decString.phaseid;
  }

  onVillageChange(result): void {
    this.router.navigate(['/district/VvFarmerDataVillageReport'], {
      queryParams: { request: result },
    });
  }

  onApprovedChange(result): void {
    this.router.navigate(['/district/VvFarmerApprovedListReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      route: this.route,
      routeName: this.routeName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phasename: this.phasename,
      phaseid: this.phaseid,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/district/VvFarmerDataRoutesReport'], {
      queryParams: { request: result },
    });
  }
}
