import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-district-level-report',
  templateUrl: './grounding-district-level-report.component.html',
  styleUrls: ['./grounding-district-level-report.component.css'],
})
export class GroundingDistrictLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/jcLevel/GroundingMandalLevelReport'], {
      queryParams: { request: result },
    });
  }
}
