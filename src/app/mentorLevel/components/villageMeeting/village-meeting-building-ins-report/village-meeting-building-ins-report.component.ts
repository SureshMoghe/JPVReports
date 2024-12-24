import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-village-meeting-building-ins-report',
  templateUrl: './village-meeting-building-ins-report.component.html',
  styleUrls: ['./village-meeting-building-ins-report.component.css'],
})
export class VillageMeetingBuildingInsReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  rbkId: any;
  rbkName: any;
  villageId: any;
  villageName: any;
  fromDate: any;
  toDate: any;
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
    this.logger.log('Building Inspection', decString);
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.villageId = decString.villageId;
    this.villageName = decString.villageName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/mentor/villageLevelMeetingsRbkLevelReport'], {
      queryParams: { request: result },
    });
  }
}
