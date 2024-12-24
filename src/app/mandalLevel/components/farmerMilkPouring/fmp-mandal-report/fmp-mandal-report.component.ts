import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-fmp-mandal-report',
  templateUrl: './fmp-mandal-report.component.html',
  styleUrls: ['./fmp-mandal-report.component.css']
})
export class FmpMandalReportComponent implements OnInit {
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any;
  mandalId: any;
  mandalName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.routeId = '';
    this.routeName = '';
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/VolunteerWiseMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

}
