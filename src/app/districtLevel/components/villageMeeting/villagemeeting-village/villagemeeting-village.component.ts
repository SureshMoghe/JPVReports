import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-villagemeeting-village',
  templateUrl: './villagemeeting-village.component.html',
  styleUrls: ['./villagemeeting-village.component.css'],
})
export class VillagemeetingVillageComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;
  phasename: any;
  phaseid: any;
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
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phasename=decString.phasename;
    this.phaseid=decString.phaseid;
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

    this.router.navigate(['/district/villageLevelMeetingsRbkLevelReport'], {
      queryParams: { request: result },
    });
  }

  onAttendanceClickChange(result): void {
    this.router.navigate(['/district/VillagemeetingAttendanceReport'], {
      queryParams: { request: result },
    });
  }

  onFunctionariesClickChange(result): void {
    this.router.navigate(['/district/VillagemeetingFunctionariesReport'], {
      queryParams: { request: result },
    });
  }

  onSecAssSecClickChange(result): void {
    this.router.navigate(['/district/VillagemeetingSecAndAssSecReport'], {
      queryParams: { request: result },
    });
  }
}
