import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-detail-level-report',
  templateUrl: './grounding-detail-level-report.component.html',
  styleUrls: ['./grounding-detail-level-report.component.css'],
})
export class GroundingDetailLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  secId: any;
  secName: any;
  status: any;

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
    this.secId = decString.secId;
    this.secName = decString.secName;
    this.status = decString.status;
    this.logger.log(decString);
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/jdLevel/GroundingMandalLevelReport'], {
      queryParams: { request: result },
    });
  }
}
