import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvFarmerDataRbkComponent } from 'src/app/volunteerFarmerDataModule/components/vv-farmer-data-rbk/vv-farmer-data-rbk.component';

@Component({
  selector: 'app-vv-farmer-data-rbk-report',
  templateUrl: './vv-farmer-data-rbk-report.component.html',
  styleUrls: ['./vv-farmer-data-rbk-report.component.css'],
})
export class VvFarmerDataRbkReportComponent implements OnInit {
  @ViewChild(VvFarmerDataRbkComponent)
  private vvFarmerRbk: VvFarmerDataRbkComponent;

  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  route: any;
  routeName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {
    activeRoute.queryParams.subscribe(
      (params) => (this.input = params['request'])
    );
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
    this.router.navigate(['/animalHusbLevel/VvFarmerDataVillageReport'], {
      queryParams: { request: result },
    });
  }
  onApprovedChange(result): void {
    this.router.navigate(['/animalHusbLevel/VvFarmerApprovedListReport'], {
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

    this.vvFarmerRbk.loadReport();
  }
}
