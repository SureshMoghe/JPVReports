import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service'; 

@Component({
  selector: 'app-cheyutha-bank-rbk-level',
  templateUrl: './cheyutha-bank-rbk-level.component.html',
  styleUrls: ['./cheyutha-bank-rbk-level.component.css']
})
export class CheyuthaBankRbkLevelComponent implements OnInit {

  input: any;
  districtId: any;
  districtName: any;
  rbkId: any;
  rbkName: any;
  mandalId: any;
  mandalName: any;

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
  }

  onPendingChange(result): void {
    this.router.navigate(['/state/CheyuthaBankPendingReport'], {
      queryParams: { request: result },
    });
  }

  onApprovedChange(result): void {
    this.router.navigate(['/state/CheyuthaBankAcceptedReport'], {
      queryParams: { request: result },
    });
  }

  onRejectedChange(result): void {
    this.router.navigate(['/state/CheyuthaBankRejectedReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/CheyuthaBankMandalLevelReport'], {
      queryParams: { request: result },
    });
  }
}
