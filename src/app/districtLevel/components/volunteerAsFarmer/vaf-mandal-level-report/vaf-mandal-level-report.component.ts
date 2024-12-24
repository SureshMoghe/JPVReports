import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vaf-mandal-level-report',
  templateUrl: './vaf-mandal-level-report.component.html',
  styleUrls: ['./vaf-mandal-level-report.component.css']
})
export class VafMandalLevelReportComponent implements OnInit {

  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;
  phaseid: any;
  phasename: any;

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
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid = decString.phaseid;
    this.phasename = decString.phasename;
  }

  onRbkChange(result): void {
    this.router.navigate(['/district/VafRbkLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/district/VafDistrictLevelReport'], {
      queryParams: { request: result },
    });
  }
}