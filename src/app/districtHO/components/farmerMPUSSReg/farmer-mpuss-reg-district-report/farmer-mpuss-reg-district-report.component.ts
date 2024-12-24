import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerMpussRegDistrictComponent } from 'src/app/farmerMpussReg/components/farmer-mpuss-reg-district/farmer-mpuss-reg-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-mpuss-reg-district-report',
  templateUrl: './farmer-mpuss-reg-district-report.component.html',
  styleUrls: ['./farmer-mpuss-reg-district-report.component.css'],
})
export class FarmerMpussRegDistrictReportComponent implements OnInit {
  @ViewChild(FarmerMpussRegDistrictComponent)
  private farmerRegDist: FarmerMpussRegDistrictComponent;

  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toast: ToasterService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
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

    this.farmerRegDist.loadReport();
  }

  onMentorChange(result): void {
    this.router.navigate(['/districtHO/FarmerMpussRegRbkReport'], {
      queryParams: { request: result },
    });
  }
}
