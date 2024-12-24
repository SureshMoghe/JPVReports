import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdacVSsapDistrictComponent } from 'src/app/mdacVSsapMilkCollectionModule/components/mdac-vssap-district/mdac-vssap-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-mdac-vssap-district-report',
  templateUrl: './mdac-vssap-district-report.component.html',
  styleUrls: ['./mdac-vssap-district-report.component.css']
})
export class MdacVSsapDistrictReportComponent implements OnInit {

  @ViewChild(MdacVSsapDistrictComponent)
  private milkCollectionDistrict: MdacVSsapDistrictComponent;
  txnDate: any;
  districtId: any;
  districtName: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.txnDate = this.session.getTodayDateString();
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  btnLoadReport(): void {
    if (
      this.txnDate === null ||
      this.txnDate === undefined ||
      this.txnDate === ''
    ) {
      this.toast.warning('Transaction Date Is Empty');
      return;
    }

    this.milkCollectionDistrict.loadReport();
  }
}
