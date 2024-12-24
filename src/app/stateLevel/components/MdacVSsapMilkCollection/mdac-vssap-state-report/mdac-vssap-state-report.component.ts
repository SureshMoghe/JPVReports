import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdacVSsapStateComponent } from 'src/app/mdacVSsapMilkCollectionModule/components/mdac-vssap-state/mdac-vssap-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-mdac-vssap-state-report',
  templateUrl: './mdac-vssap-state-report.component.html',
  styleUrls: ['./mdac-vssap-state-report.component.css']
})
export class MdacVSsapStateReportComponent implements OnInit {
  @ViewChild(MdacVSsapStateComponent)
  private milkCollectionState: MdacVSsapStateComponent;
  txnDate: any;
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.txnDate = this.session.getTodayDateString();
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/MdacVSsapDistrictReport'], {
      queryParams: { request: result },
    });
  }

  btnLoadReport(): void {
    if (
      this.txnDate === null ||
      this.txnDate === undefined ||
      this.txnDate === ''
    ) {
      this.toast.warning('Transaction Date Is Empty');
      return;
    }

    this.milkCollectionState.loadReport();
  }

}
