import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pending-village-report',
  templateUrl: './pending-village-report.component.html',
  styleUrls: ['./pending-village-report.component.css']
})
export class PendingVillageReportComponent implements OnInit {

  @Output() input = new EventEmitter<string>();

 
  VILLAGECODE: any; 
  VILLAGENAME: any;
  fromDate:any; 
  
  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }
  

  ngOnInit(): void {

    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.VILLAGECODE = decString.VILLAGECODE;
    this.VILLAGENAME = decString.VILLAGENAME; 
    this.fromDate=decString.fromDate;
     
  }


  btnBack(): void { 
    const requestData = {
      SOCIETYCODE: this.VILLAGECODE,
      SOCIETYNAME: this.VILLAGENAME, 
       fromDate: this.fromDate,
              
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/PendingVillageDetails'], {
      queryParams: { request: result },
    });
  }

}
