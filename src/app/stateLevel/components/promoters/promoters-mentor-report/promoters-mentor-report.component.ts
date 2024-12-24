import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-promoters-mentor-report',
  templateUrl: './promoters-mentor-report.component.html',
  styleUrls: ['./promoters-mentor-report.component.css'],
})
export class PromotersMentorReportComponent implements OnInit {
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

  onMentorChange(result): void {
    this.router.navigate(['/state/PromotersRbkReport'], {
      queryParams: { request: result },
    });
  }

  onAddedRbkChange(result): void {
    this.router.navigate(['/state/PromotersAddedRBKLevelReport'], {
      queryParams: { request: result },
    });
  }

  onNotAddedRbkChange(result): void {
    this.router.navigate(['/state/PromotersNotAddedRBKLevelReport'], {
      queryParams: { request: result },
    });
  }

  onTotalPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }

  onMilkPouringPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }

  onMilkNotPouringPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/PromotersStateReport']);
  }
}
