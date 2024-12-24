import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-bank-baustatus-district-report',
  templateUrl: './farmer-bank-baustatus-district-report.component.html',
  styleUrls: ['./farmer-bank-baustatus-district-report.component.css'],
})
export class FarmerBankBAUStatusDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/FarmerBankBAUStatusMandalReport'], {
      queryParams: { request: result },
    });
  }
}
