import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankDistrictComponent } from 'src/app/ldmBankModule/components/ldm-bank-district/ldm-bank-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldm-bank-district-report',
  templateUrl: './ldm-bank-district-report.component.html',
  styleUrls: ['./ldm-bank-district-report.component.css'],
})
export class LdmBankDistrictReportComponent implements OnInit {
  @ViewChild(LdmBankDistrictComponent)
  private ldmBank: LdmBankDistrictComponent;

  input: any;
  districtId: any;
  districtName: any;
  bankName: any;

  constructor(
    private utils: UtilsService,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.bankName = this.session.bankName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/districtLevelLDM/LdmBankRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnExcel(): void {
    this.ldmBank.getExcelDownload();
  }
}
