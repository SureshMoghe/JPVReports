import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { FarmerSchemeDistrictComponent } from 'src/app/farmerSchemeModule/components/farmer-scheme-district/farmer-scheme-district.component';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-scheme-district-report',
  templateUrl: './farmer-scheme-district-report.component.html',
  styleUrls: ['./farmer-scheme-district-report.component.css'],
})
export class FarmerSchemeDistrictReportComponent implements OnInit {
  @ViewChild(FarmerSchemeDistrictComponent)
  private farmerSchemeDistrict: FarmerSchemeDistrictComponent;
  fromDate: any;
  toDate: any;
  districtId: any;
  districtName: any;

  constructor(
    private session: SessionService,
    private router: Router,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onRouteChange(result): void {
    this.router.navigate(['/jcLevel/FarmerSchemeRouteReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/jcLevel/NonMilkPouringReport'], {
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

    this.farmerSchemeDistrict.loadReport();
  }
}
