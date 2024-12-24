import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vv-farmer-data-district-report',
  templateUrl: './vv-farmer-data-district-report.component.html',
  styleUrls: ['./vv-farmer-data-district-report.component.css'],
})
export class VvFarmerDataDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  phasename:any;
  phaseid:any;Phase_Type:any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {  debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phasename=decString.phasename;//this.session.phasename;
    this.phaseid=decString.phaseid;
  }

  onMandalChange(result): void {
    this.router.navigate(['/state/VvFarmerDataMandalReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void { this.phasename=this.phasename;this.session.phaseid=this.phaseid;
    this.router.navigate(['/state/VvFarmerDataStateReport']);
  }
}
