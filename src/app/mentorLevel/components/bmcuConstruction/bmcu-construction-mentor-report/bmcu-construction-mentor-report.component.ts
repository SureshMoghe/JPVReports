import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-bmcu-construction-mentor-report',
  templateUrl: './bmcu-construction-mentor-report.component.html',
  styleUrls: ['./bmcu-construction-mentor-report.component.css'],
})
export class BmcuConstructionMentorReportComponent implements OnInit {
  districtId: any;
  uniqueId: any;
  districtName: any;
  constructor(private session: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.uniqueId = this.session.mentorId;
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }
  onRbkChange(result): void {
    this.router.navigate(['/mentor/BmcuConstructionRbkReport'], {
      queryParams: { request: result },
    });
  }
}
