import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
  }

  onMandalChange(result): void {
    this.router.navigate(['/stateLevelSLBC/CheyuthaBankMandalLevelReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/stateLevelSLBC/CheyuthaBankStateLevelReport']);
  }
}
