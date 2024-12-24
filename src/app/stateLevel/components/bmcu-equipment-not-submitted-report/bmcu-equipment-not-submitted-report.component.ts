import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-bmcu-equipment-not-submitted-report',
  templateUrl: './bmcu-equipment-not-submitted-report.component.html',
  styleUrls: ['./bmcu-equipment-not-submitted-report.component.css']
})
export class BmcuEquipmentNotSubmittedReportComponent implements OnInit {
  input: any;
  districtId: any;
  type: any;   
  districtName: any; 
  mandalId: any; 
  mandalName: any; 
  bmcuId: any; 
  bmcuName  : any; 
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
    this.mandalId = decString.mandalId; 
    this.mandalName = decString.mandalName; 
    this.bmcuId = decString.bmcuId; 
    this.bmcuName = decString.bmcuName; 
  }

  btnBack(): void { debugger;

  //   const requestData = {
  //     type:this.type,
  //     districtId: this.districtId,
  //     districtName: this.districtName,
  //     mandalId: this.mandalId,
  //     mandalName: this.mandalName, 
  //     bmcuId :this.bmcuId,
  //     bmcuName : this.bmcuName
  //   };

  //   const result = this.utils.encrypt(JSON.stringify(requestData));
  //   this.router.navigate(['/state/BmcuEquipmentSubmittedReport'], {
  //     queryParams: { request: result },
  //   });
  // } 

    this.router.navigate(['/state/BmcuEquipmentsStatusReport']);
  }
}

