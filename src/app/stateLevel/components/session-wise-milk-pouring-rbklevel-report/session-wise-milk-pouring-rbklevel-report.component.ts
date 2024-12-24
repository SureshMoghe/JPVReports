import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-session-wise-milk-pouring-rbklevel-report',
  templateUrl: './session-wise-milk-pouring-rbklevel-report.component.html',
  styleUrls: ['./session-wise-milk-pouring-rbklevel-report.component.css']
})
export class SessionWiseMilkPouringRBKLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  rbkId: any;
  rbkName: any;
  mentorId: any;
  mentorName: any;
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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;    
    this.phaseid = decString.phaseid;    
    this.phasename = decString.phasename;    
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/SessionWiseMilkPouringMentorLevelReport'], {
      queryParams: { request: result },
    });
  }
}