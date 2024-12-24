import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-district-level-report',
  templateUrl: './grounding-district-level-report.component.html',
  styleUrls: ['./grounding-district-level-report.component.css']
})
export class GroundingDistrictLevelReportComponent implements OnInit {

  input: any;
  districtId: any;
  districtName: any;

  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/state/GroundingMandalLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/GroundingStateLevelReport']);
  }

}
