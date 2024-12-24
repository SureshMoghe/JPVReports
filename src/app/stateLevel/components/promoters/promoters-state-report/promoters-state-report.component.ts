import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PromotersStateLevelComponent } from 'src/app/promotersModule/components/promoters-state-level/promoters-state-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-promoters-state-report',
  templateUrl: './promoters-state-report.component.html',
  styleUrls: ['./promoters-state-report.component.css'],
})
export class PromotersStateReportComponent implements OnInit {
  @ViewChild(PromotersStateLevelComponent)
  private promoterState: PromotersStateLevelComponent;
  fromDate: any;
  toDate: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/PromotersMentorReport'], {
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

  btnLoadReport(): void {
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
      return;
    }

    this.promoterState.loadReport();
  }
}
