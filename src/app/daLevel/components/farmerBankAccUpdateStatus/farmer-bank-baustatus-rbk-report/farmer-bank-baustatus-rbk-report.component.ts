import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
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
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    this.rbkId = this.session.rbkId;
    this.rbkName = this.session.rbkName;
  }

  onInvalidAccChange(result): void {
    this.router.navigate(['/daLevel/FarmerBankInvalidAccountsReport'], {
      queryParams: { request: result },
    });
  }

  onVerifiedApprovedRejectedChange(result): void {
    this.router.navigate(
      ['/daLevel/FarmerBankVerifiedAcceptedRejectedReport'],
      {
        queryParams: { request: result },
      }
    );
  }

  onPendingAtDAChange(result): void {
    this.router.navigate(['/daLevel/FarmerBankPendingAtDaReport'], {
      queryParams: { request: result },
    });
  }

  onPendingAtMentorChange(result): void {
    this.router.navigate(['/daLevel/FarmerBankPendingAtMentorReport'], {
      queryParams: { request: result },
    });
  }
}
