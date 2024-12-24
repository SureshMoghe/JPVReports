import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotersDetailLevelComponent } from 'src/app/promotersModule/components/promoters-detail-level/promoters-detail-level.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-promoters-detail-report',
  templateUrl: './promoters-detail-report.component.html',
  styleUrls: ['./promoters-detail-report.component.css'],
})
export class PromotersDetailReportComponent implements OnInit {
  @ViewChild(PromotersDetailReportComponent)
  private inspect: PromotersDetailLevelComponent;
  input: any;
  districtId: any;
  districtName: any;
  rbkId: any;
  rbkName: any;
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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/mentor/PromotersRbkReport'], {
      queryParams: { request: result },
    });
  }
}