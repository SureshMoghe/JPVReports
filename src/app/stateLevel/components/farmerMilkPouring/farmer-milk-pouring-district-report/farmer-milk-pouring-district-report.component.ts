import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-milk-pouring-district-report',
  templateUrl: './farmer-milk-pouring-district-report.component.html',
  styleUrls: ['./farmer-milk-pouring-district-report.component.css'],
})
export class FarmerMilkPouringDistrictReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  phaseid:any;
  phasename:any;

 

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
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;
  }
  onRouteChange(result): void {
    this.router.navigate(['/state/FarmerMilkPouringRouteReport'], {
      queryParams: { request: result },
    });
  }
  btnBack(): void {
    this.router.navigate(['/state/FarmerMilkPouringStateReport']);
  }
}
