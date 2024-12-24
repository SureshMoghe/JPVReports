import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-mpuss-reg-district-report',
  templateUrl: './farmer-mpuss-reg-district-report.component.html',
  styleUrls: ['./farmer-mpuss-reg-district-report.component.css'],
})
export class FarmerMpussRegDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  phasename:any;
  phaseid:any;
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
    this.phasename=decString.phasename;
    this.phaseid=decString.phaseid
  }

  onMentorChange(result): void {
    this.router.navigate(['/state/FarmerMpussRegRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/FarmerMpussRegStateReport']);
  }
}
