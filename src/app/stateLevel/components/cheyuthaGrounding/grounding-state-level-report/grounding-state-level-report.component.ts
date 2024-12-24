import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grounding-state-level-report',
  templateUrl: './grounding-state-level-report.component.html',
  styleUrls: ['./grounding-state-level-report.component.css']
})
export class GroundingStateLevelReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/GroundingDistrictLevelReport'], {
      queryParams: { request: result },
    });
  }
}
