import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vaf-detail-level-report',
  templateUrl: './vaf-detail-level-report.component.html',
  styleUrls: ['./vaf-detail-level-report.component.css']
})
export class VafDetailLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  subReportType: any;
  fromDate: any;
  toDate: any;
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
  }
  btnBack(): void {
    this.router.navigate(['/district/VafStateLevelReport']);
  } 
}
