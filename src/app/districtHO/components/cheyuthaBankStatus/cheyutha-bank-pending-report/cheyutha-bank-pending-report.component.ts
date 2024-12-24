import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-bank-pending-report',
  templateUrl: './cheyutha-bank-pending-report.component.html',
  styleUrls: ['./cheyutha-bank-pending-report.component.css'],
})
export class CheyuthaBankPendingReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  rbkId: any;
  rbkName: any;
  mandalName: any;
  mandalId: any;
  ifscCode: any;

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
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.ifscCode = decString.ifscCode;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/districtHO/CheyuthaBankRbkLevelReport'], {
      queryParams: { request: result },
    });
  }
}
