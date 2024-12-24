import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vv-farmer-data-route-wise-list',
  templateUrl: './vv-farmer-data-route-wise-list.component.html',
  styleUrls: ['./vv-farmer-data-route-wise-list.component.css'],
})
export class VvFarmerDataRouteWiseListComponent implements OnInit { 
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  phaseid:any;
  phasename:any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session:SessionService,
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;
  }

  onRouteNameChange(result): void {
    this.router.navigate(['/state/VvFarmerDataVillageWiseList'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {this.session.phaseid=this.phaseid;
    this.router.navigate(['/state/VvFarmerDataStateReport']);
  }
}
