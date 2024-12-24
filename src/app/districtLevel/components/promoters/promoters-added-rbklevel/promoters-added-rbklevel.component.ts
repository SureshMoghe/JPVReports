import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-promoters-added-rbklevel',
  templateUrl: './promoters-added-rbklevel.component.html',
  styleUrls: ['./promoters-added-rbklevel.component.css']
})
export class PromotersAddedRbklevelComponent implements OnInit {

  input: any;
  districtId: any;
  districtName: any;
  subReportType: any;
  fromDate: any;
  toDate: any;
  mentorId: any;
  mentorName: any;

  constructor(
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    routes.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.subReportType = decString.subReportType;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: this.subReportType,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
    };
    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/PromotersMentorReport'], {
      queryParams: { request: result },
    });
  }

}
