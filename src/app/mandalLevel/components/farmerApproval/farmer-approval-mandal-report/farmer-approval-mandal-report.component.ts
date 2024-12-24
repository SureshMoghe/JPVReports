import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-mandal-report',
  templateUrl: './farmer-approval-mandal-report.component.html',
  styleUrls: ['./farmer-approval-mandal-report.component.css'],
})
export class FarmerApprovalMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private route: ActivatedRoute,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
  }

  onRouteChange(result): void {
    this.router.navigate(['/mandalLevel/FarmerApprovalRoutesReport'], {
      queryParams: { request: result },
    });
  }
}
