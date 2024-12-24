import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-bmcu-construction-state-report',
  templateUrl: './bmcu-construction-state-report.component.html',
  styleUrls: ['./bmcu-construction-state-report.component.css'],
})
export class BmcuConstructionStateReportComponent implements OnInit {
  constructor(private router: Router, private toast: ToasterService) {}

  ngOnInit(): void {}
  onDistrictChange(result): void {
    this.router.navigate(['/state/BmcuConstructionDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
