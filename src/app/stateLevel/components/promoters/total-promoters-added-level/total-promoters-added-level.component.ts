import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-total-promoters-added-level',
  templateUrl: './total-promoters-added-level.component.html',
  styleUrls: ['./total-promoters-added-level.component.css'],
})
export class TotalPromotersAddedLevelComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  subReportType: any;
  fromDate: any;
  toDate: any;
  mentorId: any;
  mentorName: any;
  rbkId: any;
  rbkName: any;

  constructor(
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    routes.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.subReportType = decString.subReportType;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
  }

  btnBack(): void {    debugger;
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: this.subReportType,
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
    };

    if (
      !this.utils.isEmpty(this.districtId) &&
      !this.utils.isEmpty(this.mentorId) &&
      !this.utils.isEmpty(this.rbkId)
    ) 
     {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/PromotersRbkReport'], {  
        queryParams: { request: result },
      });
    }else if (!this.utils.isEmpty(this.mentorId)) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/PromotersMentorReport'], {
        queryParams: { request: result },
      });
    }
     else if (!this.utils.isEmpty(this.districtId)) {
      const result = this.utils.encrypt(JSON.stringify(requestData));
      this.router.navigate(['/state/PromotersStateReport'], {
        queryParams: { request: result },
      });
    } 
  }
}
