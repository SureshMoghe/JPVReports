import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-bank-baustatus-mandal-report',
  templateUrl: './farmer-bank-baustatus-mandal-report.component.html',
  styleUrls: ['./farmer-bank-baustatus-mandal-report.component.css']
})
export class FarmerBankBAUStatusMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/mandalLevel/FarmerBankBAUStatusRbkReport'], {
      queryParams: { request: result },
    });
  }
}
