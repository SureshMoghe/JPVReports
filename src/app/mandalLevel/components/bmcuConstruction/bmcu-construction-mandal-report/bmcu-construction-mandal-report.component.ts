import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-bmcu-construction-mandal-report',
  templateUrl: './bmcu-construction-mandal-report.component.html',
  styleUrls: ['./bmcu-construction-mandal-report.component.css']
})
export class BmcuConstructionMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/BmcuConstructionRbkReport'], {
      queryParams: { request: result },
    });
  }
}
