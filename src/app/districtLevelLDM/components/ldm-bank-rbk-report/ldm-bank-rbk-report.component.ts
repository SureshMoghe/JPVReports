import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankRbkComponent } from 'src/app/ldmBankModule/components/ldm-bank-rbk/ldm-bank-rbk.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldm-bank-rbk-report',
  templateUrl: './ldm-bank-rbk-report.component.html',
  styleUrls: ['./ldm-bank-rbk-report.component.css'],
})
export class LdmBankRbkReportComponent implements OnInit {
  @ViewChild(LdmBankRbkComponent) private ldmBank: LdmBankRbkComponent;

  input: any;
  districtId: any;
  districtName: any;
  bankName: any;
  ifscCode: any;
  branchName: any;

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
    this.bankName = decString.bankName;
    this.ifscCode = decString.ifscCode;
    this.branchName = decString.branchName;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      bankName: this.bankName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/districtLevelLDM/LdmBankDistrictReport'], {
      queryParams: { request: result },
    });
  }

  btnExcel(): void {
    this.ldmBank.getExcelDownload();
  }
}
