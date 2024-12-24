import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-milk-pouring-mandal-report',
  templateUrl: './farmer-milk-pouring-mandal-report.component.html',
  styleUrls: ['./farmer-milk-pouring-mandal-report.component.css'],
})
export class FarmerMilkPouringMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
phaseid:any;
phasename:any;
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
    this.routeId = decString.routeId;
    this.routeName = decString.routeName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;
  }

  onRbkChange(result): void {
    this.router.navigate(['/state/VolunteerWiseMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      routeId: this.routeId,
      routeName: this.routeName,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/FarmerMilkPouringRouteReport'], {
      queryParams: { request: result },
    });
  }
}
