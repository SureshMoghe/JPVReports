import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-villagemeeting-rbk',
  templateUrl: './villagemeeting-rbk.component.html',
  styleUrls: ['./villagemeeting-rbk.component.css'],
})
export class VillagemeetingRbkComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
  fromDate: any;
  toDate: any;
  phaseid:any
  phasename:any;

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
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;
  }

  onRbkChange(result): void {
    this.router.navigate(['/state/villageLevelMeetingsVillageLevelReport'], {
      queryParams: { request: result },
    });
  }

  onFunctionariesClickChange(result): void {
    this.router.navigate(['/state/VillagemeetingFunctionariesReport'], {
      queryParams: { request: result },
    });
  }

  onSecAssSecClickChange(result): void {
    this.router.navigate(['/state/VillagemeetingSecAndAssSecReport'], {
      queryParams: { request: result },
    });
  }

  onBuildingInspectClickChange(result): void {
    this.router.navigate(['/state/VillageMeetingBuildingInspectReport'], {
      queryParams: { request: result },
    });
  }

  onCalibrationClickChange(result): void {
    this.router.navigate(['/state/VillageMeetingCalibrationReport'], {
      queryParams: { request: result },
    });
  }

  onPromotersClickChange(result): void {
    this.router.navigate(['/state/VillageMeetingPromotersReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/villageLevelMeetingsMentorLevelReport'], {
      queryParams: { request: result },
    });
  }
}