import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-mentor-report',
  templateUrl: './farmer-approval-mentor-report.component.html',
  styleUrls: ['./farmer-approval-mentor-report.component.css'],
})
export class FarmerApprovalMentorReportComponent implements OnInit {
  districtId: any;
  districtName: any;
  uniqueId: any;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private route: ActivatedRoute,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.uniqueId = this.session.mentorId;
  }
}
