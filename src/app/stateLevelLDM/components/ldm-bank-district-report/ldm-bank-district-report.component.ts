import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LdmBankDistrictComponent } from 'src/app/ldmBankModule/components/ldm-bank-district/ldm-bank-district.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-ldm-bank-district-report',
  templateUrl: './ldm-bank-district-report.component.html',
  styleUrls: ['./ldm-bank-district-report.component.css']
})
export class LdmBankDistrictReportComponent implements OnInit {

  @ViewChild(LdmBankDistrictComponent) private ldmBank: LdmBankDistrictComponent;

  input: any;
  districtId: any;
  districtName: any;
  bankName: any;

  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.bankName = decString.bankName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/stateLevelLDM/LdmBankRbkReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/stateLevelLDM/LdmBankStateReport']);
  }

  btnExcel(): void {
    this.ldmBank.getExcelDownload();
  }

}
