import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerMpussRegVillageComponent } from 'src/app/farmerMpussReg/components/farmer-mpuss-reg-village/farmer-mpuss-reg-village.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-mpuss-reg-village-report',
  templateUrl: './farmer-mpuss-reg-village-report.component.html',
  styleUrls: ['./farmer-mpuss-reg-village-report.component.css'],
})
export class FarmerMpussRegVillageReportComponent implements OnInit {
  @ViewChild(FarmerMpussRegVillageComponent)
  private farmerVillage: FarmerMpussRegVillageComponent;
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
    private toast: ToasterService,
    private session: SessionService
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

  onVillageClickChange(result): void {
    this.router.navigate(['/animalHusbLevel/FarmerMpussRegDetailReport'], {
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

    this.farmerVillage.loadReport();
  }
}
