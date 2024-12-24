import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaDistrictComponent } from 'src/app/pacsLandAllotmentModule/components/pla-district/pla-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pla-district-report',
  templateUrl: './pla-district-report.component.html',
  styleUrls: ['./pla-district-report.component.css']
})
export class PlaDistrictReportComponent implements OnInit {

  @ViewChild(PlaDistrictComponent)
  private landAllotmentDist: PlaDistrictComponent;
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

  onMandalChange(result): void {
    this.router.navigate(['/district/PacsLandAllotmentMandalReport'], {
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

    this.landAllotmentDist.loadReport();
  }
}