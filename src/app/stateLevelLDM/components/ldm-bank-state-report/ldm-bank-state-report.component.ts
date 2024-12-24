import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LdmBankStateComponent } from 'src/app/ldmBankModule/components/ldm-bank-state/ldm-bank-state.component';

@Component({
  selector: 'app-ldm-bank-state-report',
  templateUrl: './ldm-bank-state-report.component.html',
  styleUrls: ['./ldm-bank-state-report.component.css']
})
export class LdmBankStateReportComponent implements OnInit {

  @ViewChild(LdmBankStateComponent) private ldmBank: LdmBankStateComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDistrictChange(result): void {
    this.router.navigate(['/stateLevelLDM/LdmBankDistrictReport'], {
      queryParams: { request: result },
    });
  }

  btnExcel():void {
    this.ldmBank.getExcelDownload();
  }

}
