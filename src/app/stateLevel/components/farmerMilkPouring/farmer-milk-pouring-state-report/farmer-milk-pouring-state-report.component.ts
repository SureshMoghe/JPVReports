import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-farmer-milk-pouring-state-report',
  templateUrl: './farmer-milk-pouring-state-report.component.html',
  styleUrls: ['./farmer-milk-pouring-state-report.component.css'],
})
export class FarmerMilkPouringStateReportComponent implements OnInit {
  constructor(
    private router: Router
  ) {} 

  ngOnInit(): void {}  

  onDistrictChange(result): void {
    this.router.navigate(['/state/FarmerMilkPouringDistrictReport'], {
      queryParams: { request: result },
    });
  }

  onDetailsChange(result): void {
    this.router.navigate(['/state/FarmerMilkPouringDetailReport'], {
      queryParams: { request: result },
    });
  }
}
