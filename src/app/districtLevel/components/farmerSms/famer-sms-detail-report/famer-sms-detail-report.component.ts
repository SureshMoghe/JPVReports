import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-famer-sms-detail-report',
  templateUrl: './famer-sms-detail-report.component.html',
  styleUrls: ['./famer-sms-detail-report.component.css'],
})
export class FamerSmsDetailReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  villageId: any;
  villageName: any;
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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.villageId = decString.villageId;
    this.villageName = decString.villageName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid = decString.phaseid;
    this.phasename = decString.phasename;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/FamerSmsRbkReport'], {
      queryParams: { request: result },
    });
  }
}
