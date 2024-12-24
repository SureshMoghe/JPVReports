import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalibrationMentorLevelComponent } from 'src/app/calibrationModule/components/calibration-mentor-level/calibration-mentor-level.component';
 
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-calibrationmentorlevelreport',
  templateUrl: './calibrationmentorlevelreport.component.html',
  styleUrls: ['./calibrationmentorlevelreport.component.css']
})
export class CalibrationmentorlevelreportComponent implements OnInit {

  @ViewChild(CalibrationMentorLevelComponent)
  private calibration: CalibrationMentorLevelComponent;

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
    this.router.navigate(['../../prompt-module/CalibrationRbkLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['../../prompt-module/Calibrationstatelevelreport']);
  }
}
