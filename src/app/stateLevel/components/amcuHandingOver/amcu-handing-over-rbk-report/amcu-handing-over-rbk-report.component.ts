import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmcuHandingOverRbkComponent } from 'src/app/amcuHandingOverModule/components/amcu-handing-over-rbk/amcu-handing-over-rbk.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-handing-over-rbk-report',
  templateUrl: './amcu-handing-over-rbk-report.component.html',
  styleUrls: ['./amcu-handing-over-rbk-report.component.css'],
})
export class AmcuHandingOverRbkReportComponent implements OnInit {
  @ViewChild(AmcuHandingOverRbkComponent)
  private inspect: AmcuHandingOverRbkComponent;

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
    this.router.navigate(['/state/AmcuHandingOverDetailReport'], {
      queryParams: { request: result },
    });
  }

  onVillageChange(result): void {
    this.router.navigate(['/state/AmcuHoNotSubmittedVillagesReport'], {
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
    this.router.navigate(['/state/AmcuHandingOverMentorReport'], {
      queryParams: { request: result },
    });
  }
}
