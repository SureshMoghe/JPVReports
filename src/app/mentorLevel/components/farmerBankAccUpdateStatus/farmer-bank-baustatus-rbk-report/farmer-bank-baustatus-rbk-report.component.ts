import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-bank-baustatus-rbk-report',
  templateUrl: './farmer-bank-baustatus-rbk-report.component.html',
  styleUrls: ['./farmer-bank-baustatus-rbk-report.component.css'],
})
export class FarmerBankBAUStatusRbkReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;

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
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
  }

  onInvalidAccChange(result): void {
    this.router.navigate(['/mentor/FarmerBankInvalidAccountsReport'], {
      queryParams: { request: result },
    });
  }

  onVerifiedApprovedRejectedChange(result): void {
    this.router.navigate(['/mentor/FarmerBankVerifiedAcceptedRejectedReport'], {
      queryParams: { request: result },
    });
  }

  onPendingAtDAChange(result): void {
    this.router.navigate(['/mentor/FarmerBankPendingAtDaReport'], {
      queryParams: { request: result },
    });
  }

  onPendingAtMentorChange(result): void {
    this.router.navigate(['/mentor/FarmerBankPendingAtMentorReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/mentor/FarmerBankBAUStatusMandalReport'], {
      queryParams: { request: result },
    });
  }
}
