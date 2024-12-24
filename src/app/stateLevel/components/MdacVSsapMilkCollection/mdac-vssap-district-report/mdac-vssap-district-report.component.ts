import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mdac-vssap-district-report',
  templateUrl: './mdac-vssap-district-report.component.html',
  styleUrls: ['./mdac-vssap-district-report.component.css'],
})
export class MdacVSsapDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  txnDate: any;

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
    this.txnDate = decString.txnDate;
  }

  btnBack(): void {
    this.router.navigate(['/state/MdacVSsapStateReport']);
  }
}
