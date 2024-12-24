import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmcuHandingOverMentorComponent } from 'src/app/amcuHandingOverModule/components/amcu-handing-over-mentor/amcu-handing-over-mentor.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-handing-over-mentor-report',
  templateUrl: './amcu-handing-over-mentor-report.component.html',
  styleUrls: ['./amcu-handing-over-mentor-report.component.css'],
})
export class AmcuHandingOverMentorReportComponent implements OnInit {
  @ViewChild(AmcuHandingOverMentorComponent)
  private inspect: AmcuHandingOverMentorComponent;

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
    this.router.navigate(['/state/AmcuHandingOverRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/AmcuHandingOverStateReport']);
  }
}
