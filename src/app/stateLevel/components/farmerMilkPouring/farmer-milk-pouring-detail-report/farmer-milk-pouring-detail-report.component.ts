import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-milk-pouring-detail-report',
  templateUrl: './farmer-milk-pouring-detail-report.component.html',
  styleUrls: ['./farmer-milk-pouring-detail-report.component.css']
})
export class FarmerMilkPouringDetailReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  subReportType: any; 
phaseid:any;
phasename:any;
  constructor(
    private utils: UtilsService,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    routes.queryParams.subscribe((params) => (this.input = params['request']));
  }


  ngOnInit(): void {debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.subReportType = decString.subReportType; 
    this.phaseid=decString.phaseid;
    this.phasename=decString.phasename;

  }
  btnBack(): void {
    this.router.navigate(['/state/FarmerMilkPouringStateReport']);
  } 
}
