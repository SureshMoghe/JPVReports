import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecAsstSecMentorLevelComponent } from 'src/app/secAsstSecModule/components/sec-asst-sec-mentor-level/sec-asst-sec-mentor-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-sec-asst-sec-mentor-report',
  templateUrl: './sec-asst-sec-mentor-report.component.html',
  styleUrls: ['./sec-asst-sec-mentor-report.component.css'],
})
export class SecAsstSecMentorReportComponent implements OnInit {
  @ViewChild(SecAsstSecMentorLevelComponent)
  private secAsstSec: SecAsstSecMentorLevelComponent;

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
    this.router.navigate(['/state/SecAsstSecRbkReport'], {
      queryParams: { request: result },
    });
  }

  onAsstSecChange(result): void {
    this.router.navigate(['/state/SecAsstSecDetailReport'], {
      queryParams: { request: result },
    });
  }
  onDetailsChange(result): void{
    this.router.navigate(['/state/SecAsstSecNotAddedDetailReport'], {
      queryParams: { request: result },
    });

  }

  btnBack(): void {
    this.router.navigate(['/state/SecAsstSecStateReport']);
  }
}
