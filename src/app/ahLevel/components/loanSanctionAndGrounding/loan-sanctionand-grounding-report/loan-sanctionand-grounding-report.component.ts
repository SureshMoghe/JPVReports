import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-loan-sanctionand-grounding-report',
  templateUrl: './loan-sanctionand-grounding-report.component.html',
  styleUrls: ['./loan-sanctionand-grounding-report.component.css'],
})
export class LoanSanctionandGroundingReportComponent implements OnInit {
  input: any;
  districtId: any;

  constructor(private session: SessionService) {}

  ngOnInit(): void {
    this.districtId = this.session.mentorId;
  }
}
