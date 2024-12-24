import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-routes-report',
  templateUrl: './farmer-approval-routes-report.component.html',
  styleUrls: ['./farmer-approval-routes-report.component.css'],
})
export class FarmerApprovalRoutesReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
  }
}
