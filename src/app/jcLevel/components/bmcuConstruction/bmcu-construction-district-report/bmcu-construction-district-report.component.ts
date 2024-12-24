import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-bmcu-construction-district-report',
  templateUrl: './bmcu-construction-district-report.component.html',
  styleUrls: ['./bmcu-construction-district-report.component.css']
})
export class BmcuConstructionDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }
  onMandalChange(result): void {
    this.router.navigate(['/jcLevel/BmcuConstructionMandalReport'], {
      queryParams: { request: result },
    });
  }

}
