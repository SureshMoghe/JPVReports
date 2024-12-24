import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-mandal-level-report',
  templateUrl: './grounding-mandal-level-report.component.html',
  styleUrls: ['./grounding-mandal-level-report.component.css'],
})
export class GroundingMandalLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
  }

  onDetailChange(result): void {
    this.router.navigate(['/ahLevel/GroundingDetailLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/ahLevel/GroundingAHLevelLogin'], {
      queryParams: { request: result },
    });
  }
}
