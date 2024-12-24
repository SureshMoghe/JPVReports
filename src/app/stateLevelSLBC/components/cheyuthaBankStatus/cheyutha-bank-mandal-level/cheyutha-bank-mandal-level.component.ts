import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-bank-mandal-level',
  templateUrl: './cheyutha-bank-mandal-level.component.html',
  styleUrls: ['./cheyutha-bank-mandal-level.component.css'],
})
export class CheyuthaBankMandalLevelComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;

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
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
  }

  onRbkChange(result): void {
    this.router.navigate(['/stateLevelSLBC/CheyuthaBankRbkLevelReport'], {
      queryParams: { request: result },
    });
  } 

  btnBack(): void { 
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/stateLevelSLBC/CheyuthaBankDistrictLevelReport'], {
      queryParams: { request: result },
    });
  }
}
