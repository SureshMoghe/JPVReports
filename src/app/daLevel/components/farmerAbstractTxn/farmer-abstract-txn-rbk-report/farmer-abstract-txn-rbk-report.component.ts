import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerAbstractTxnRbkComponent } from 'src/app/farmerAbstractTxnModule/components/farmer-abstract-txn-rbk/farmer-abstract-txn-rbk.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-abstract-txn-rbk-report',
  templateUrl: './farmer-abstract-txn-rbk-report.component.html',
  styleUrls: ['./farmer-abstract-txn-rbk-report.component.css'],
})
export class FarmerAbstractTxnRbkReportComponent implements OnInit {
  @ViewChild(FarmerAbstractTxnRbkComponent)
  private farmerRbk: FarmerAbstractTxnRbkComponent;

  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;
  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
    this.rbkId = this.session.rbkId;
    this.rbkName = this.session.rbkName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onVillageChange(result): void {
    this.router.navigate(['/daLevel/FarmerabstractTxnSocietyReport'], {
      queryParams: { request: result },
    });
  }

  btnLoadReport(): void {
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
      return;
    }

    this.farmerRbk.loadReport();
  }
}