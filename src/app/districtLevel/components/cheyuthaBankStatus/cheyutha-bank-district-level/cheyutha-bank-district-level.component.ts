import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-bank-district-level',
  templateUrl: './cheyutha-bank-district-level.component.html',
  styleUrls: ['./cheyutha-bank-district-level.component.css'],
})
export class CheyuthaBankDistrictLevelComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/CheyuthaBankMandalLevelReport'], {
      queryParams: { request: result },
    });
  }
}
