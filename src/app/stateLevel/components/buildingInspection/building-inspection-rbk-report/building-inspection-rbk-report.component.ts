import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingInspectionRbkComponent } from 'src/app/buildingInspectionModule/components/building-inspection-rbk/building-inspection-rbk.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-building-inspection-rbk-report',
  templateUrl: './building-inspection-rbk-report.component.html',
  styleUrls: ['./building-inspection-rbk-report.component.css'],
})
export class BuildingInspectionRbkReportComponent implements OnInit {
  @ViewChild(BuildingInspectionRbkComponent)
  private inspect: BuildingInspectionRbkComponent;

  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
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
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/state/BuildingInspectionDetailReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/BuildingInspectionMentorReport'], {
      queryParams: { request: result },
    });
  }
}
