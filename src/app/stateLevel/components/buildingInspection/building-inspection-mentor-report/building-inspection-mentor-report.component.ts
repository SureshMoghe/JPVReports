import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingInspectionMentorComponent } from 'src/app/buildingInspectionModule/components/building-inspection-mentor/building-inspection-mentor.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-building-inspection-mentor-report',
  templateUrl: './building-inspection-mentor-report.component.html',
  styleUrls: ['./building-inspection-mentor-report.component.css'],
})
export class BuildingInspectionMentorReportComponent implements OnInit {
  @ViewChild(BuildingInspectionMentorComponent)
  private inspect: BuildingInspectionMentorComponent;

  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onMentorChange(result): void {
    this.router.navigate(['/state/BuildingInspectionRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/BuildingInspectionStateReport']);
  }
}
