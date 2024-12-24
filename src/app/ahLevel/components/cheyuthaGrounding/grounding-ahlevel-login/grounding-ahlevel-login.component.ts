import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-ahlevel-login',
  templateUrl: './grounding-ahlevel-login.component.html',
  styleUrls: ['./grounding-ahlevel-login.component.css'],
})
export class GroundingAHLevelLoginComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.mentorId;
  }

  onMandalNameChange(result): void {
    this.router.navigate(['/ahLevel/GroundingMandalLevelReport'], {
      queryParams: { request: result },
    });
  }
}
