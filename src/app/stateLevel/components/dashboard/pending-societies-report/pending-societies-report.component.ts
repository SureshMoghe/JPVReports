import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pending-societies-report',
  templateUrl: './pending-societies-report.component.html',
  styleUrls: ['./pending-societies-report.component.css']
})
export class PendingSocietiesReportComponent implements OnInit {

  @Output() input = new EventEmitter<string>();

 
  SOCIETYCODE: any; 
  SOCIETYNAME: any;
  fromDate:any; 
  
  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }
  

  ngOnInit(): void {

    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.SOCIETYCODE = decString.SOCIETYCODE;
    this.SOCIETYNAME = decString.SOCIETYNAME; 
    this.fromDate=decString.fromDate;
     
  }


  btnBack(): void { 
    const requestData = {
      SOCIETYCODE: this.SOCIETYCODE,
      SOCIETYNAME: this.SOCIETYNAME, 
       fromDate: this.fromDate,
              
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/MilkpouredandpendingSocietiesReport'], {  //PendingSocietiesDetails
      queryParams: { request: result },
    });
  }

}
