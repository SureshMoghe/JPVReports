import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-mpuss-reg-rbk-report',
  templateUrl: './farmer-mpuss-reg-rbk-report.component.html',
  styleUrls: ['./farmer-mpuss-reg-rbk-report.component.css'],
})
export class FarmerMpussRegRbkReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;
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
  }

  onRbkChange(result): void {
    this.router.navigate(['/dccbLevel/FarmerMpussRegVillageReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/dccbLevel/FarmerMpussRegDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
