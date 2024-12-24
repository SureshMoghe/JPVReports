import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-payment-status-district-report',
  templateUrl: './payment-status-district-report.component.html',
  styleUrls: ['./payment-status-district-report.component.css'],
})
export class PaymentStatusDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

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
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onMandalChange(result): void {
    this.router.navigate(['/state/PaymentStatusMandalReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/PaymentStatusStateReport']);
  }
}
