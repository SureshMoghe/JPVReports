import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cmp-milk-pourer-detail-report',
  templateUrl: './cmp-milk-pourer-detail-report.component.html',
  styleUrls: ['./cmp-milk-pourer-detail-report.component.css']
})
export class CmpMilkPourerDetailReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;  
  subReportType: any;
  month: any;
  year: any;
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
    this.month = decString.month;
    this.year = decString.year;
  }

  btnBack(): void {
    this.router.navigate(['/state/cmpStateLevelReport']);
  }
}
