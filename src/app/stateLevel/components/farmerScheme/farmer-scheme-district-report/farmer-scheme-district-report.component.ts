import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-scheme-district-report',
  templateUrl: './farmer-scheme-district-report.component.html',
  styleUrls: ['./farmer-scheme-district-report.component.css'],
})
export class FarmerSchemeDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  phaseid:any;
  phasename:any;
 // phaseheadname:any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;

  }

  onRouteChange(result): void {
    this.router.navigate(['/state/FarmerSchemeRouteReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/state/NonMilkPouringReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/FarmerSchemeStateReport']);
  }
}  
