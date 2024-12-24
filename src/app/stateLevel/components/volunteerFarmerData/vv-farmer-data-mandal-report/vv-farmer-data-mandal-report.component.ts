import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vv-farmer-data-mandal-report',
  templateUrl: './vv-farmer-data-mandal-report.component.html',
  styleUrls: ['./vv-farmer-data-mandal-report.component.css'],
})
export class VvFarmerDataMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;
  phasename:any;
  phaseid:any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService 
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
    this.phasename=decString.phasename;
    this.phaseid=decString.phaseid;
  }

  onRouteChange(result): void {
    this.router.navigate(['/state/VvFarmerDataRoutesReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
       phasename:this.phasename,
       phaseid:this.phaseid,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/VvFarmerDataDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
