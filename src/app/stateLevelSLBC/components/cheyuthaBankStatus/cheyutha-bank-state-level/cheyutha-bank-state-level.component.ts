import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheyutha-bank-state-level',
  templateUrl: './cheyutha-bank-state-level.component.html',
  styleUrls: ['./cheyutha-bank-state-level.component.css'],
})
export class CheyuthaBankStateLevelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDistrictChange(result): void {
    this.router.navigate(['/stateLevelSLBC/CheyuthaBankDistrictLevelReport'], {
      queryParams: { request: result },
    });
  }
}
