import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-famer-sms-district-report',
  templateUrl: './famer-sms-district-report.component.html',
  styleUrls: ['./famer-sms-district-report.component.css'],
})
export class FamerSmsDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
phaseid:any;
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
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid = decString.phaseid;
    this.phasename = decString.phasename;

  }
  onMandalChange(result): void {
    this.router.navigate(['/state/FamerSmsMandalReport'], {
      queryParams: { request: result },
    });
  }
  btnBack(): void {
    this.router.navigate(['/state/FamerSmsStateReport']);
  }
}
