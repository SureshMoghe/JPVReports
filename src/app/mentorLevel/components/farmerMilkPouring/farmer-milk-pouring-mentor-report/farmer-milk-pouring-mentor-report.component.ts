import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-milk-pouring-mentor-report',
  templateUrl: './farmer-milk-pouring-mentor-report.component.html',
  styleUrls: ['./farmer-milk-pouring-mentor-report.component.css'],
})
export class FarmerMilkPouringMentorReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
  mentorId: any;
  mentorName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  onRbkChange(result): void {
    this.router.navigate(['/mentor/VolunteerWiseMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mentorId = this.session.mentorId;
    this.mentorName = this.session.mentorName;
  }
}
