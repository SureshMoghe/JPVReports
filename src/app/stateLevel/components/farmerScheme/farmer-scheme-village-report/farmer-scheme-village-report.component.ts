import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-scheme-village-report',
  templateUrl: './farmer-scheme-village-report.component.html',
  styleUrls: ['./farmer-scheme-village-report.component.css'],
})
export class FarmerSchemeVillageReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  route: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  villageId: any;
  villageName: any;
  fromDate: any;
  toDate: any;
  actionTaken: any;

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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.villageId = decString.villageId;
    this.villageName = decString.villageName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.actionTaken = decString.actionTaken;
  }
  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      route: this.route,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      villageId: this.villageId,
      villageName: this.villageName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    if (
      !this.utils.isEmpty(this.districtId) &&
      !this.utils.isEmpty(this.route) &&
      !this.utils.isEmpty(this.mandalId) &&
      !this.utils.isEmpty(this.rbkId) &&
      !this.utils.isEmpty(this.villageId)
    ) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/FarmerSchemeRbkReport'], {
        queryParams: { request: result },
      });
    } else if (
      !this.utils.isEmpty(this.districtId) &&
      !this.utils.isEmpty(this.route) &&
      !this.utils.isEmpty(this.mandalId) &&
      !this.utils.isEmpty(this.rbkId)
    ) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/FarmerSchemeMandalReport'], {
        queryParams: { request: result },
      });
    } else if (
      !this.utils.isEmpty(this.districtId) &&
      !this.utils.isEmpty(this.route) &&
      !this.utils.isEmpty(this.mandalId)
    ) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/FarmerSchemeRouteReport'], {
        queryParams: { request: result },
      });
    } else if (
      !this.utils.isEmpty(this.districtId) &&
      !this.utils.isEmpty(this.route)
    ) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/FarmerSchemeDistrictReport'], {
        queryParams: { request: result },
      });
    } else if (!this.utils.isEmpty(this.districtId)) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/FarmerSchemeStateReport'], {
        queryParams: { request: result },
      });
    }
  }
}
