import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-milk-pouring-route-report',
  templateUrl: './farmer-milk-pouring-route-report.component.html',
  styleUrls: ['./farmer-milk-pouring-route-report.component.css'],
})
export class FarmerMilkPouringRouteReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any; 
phaseid:any;
phasename:any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.routeId = decString.routeId;
    this.routeName = decString.routeName;
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;
  }

  onMandalChange(result): void {
    this.router.navigate(['/state/FarmerMilkPouringMandalReport'], {
      queryParams: { request: result },
    });
  }
  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/FarmerMilkPouringDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
