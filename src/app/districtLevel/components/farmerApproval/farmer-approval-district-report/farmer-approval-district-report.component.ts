import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-district-report',
  templateUrl: './farmer-approval-district-report.component.html',
  styleUrls: ['./farmer-approval-district-report.component.css'],
})
export class FarmerApprovalDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private route: ActivatedRoute,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/FarmerApprovalRoutesReport'], {
      queryParams: { request: result },
    });
  }
}
