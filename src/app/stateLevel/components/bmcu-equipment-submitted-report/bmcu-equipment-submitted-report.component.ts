import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-bmcu-equipment-submitted-report',
  templateUrl: './bmcu-equipment-submitted-report.component.html',
  styleUrls: ['./bmcu-equipment-submitted-report.component.css']
})
export class BmcuEquipmentSubmittedReportComponent implements OnInit {

  input: any;
  districtId: any;
  type: any;   
  districtName: any;   
  constructor(
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    routes.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {  debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.type = decString.type;  
    this.districtName = decString.districtName; 
  }


  onDetailsChange(result): void {// this.onReportPhaseTypeChange();
    this.router.navigate(['/state/BmcuEquipmentsReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    this.router.navigate(['/state/BmcuEquipmentsStatusReport']);
  }
}
