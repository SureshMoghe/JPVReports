import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-benficiarysbyrbk-reports',
  templateUrl: './cheyutha-benficiarysbyrbk-reports.component.html',
  styleUrls: ['./cheyutha-benficiarysbyrbk-reports.component.css']
})
export class CheyuthaBenficiarysbyrbkReportsComponent implements OnInit {
  @Output() 
  input: any;
  districtId:any;districtName:any;mandalId:any;mandalName:any;rbkid:any;rbkName:any;fromDate:any;
  toDate:any;

  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {  debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkid = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.fromDate=-decString.fromDate;
    this.toDate=-decString.toDate;

  }

  btnBack(): void { debugger;
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
     mandalId :  this.mandalId,
    mandalName : this.mandalName,
    fromDate: this.fromDate,
              toDate: this.toDate,
    rbkid:this.rbkid,
    rbkName:this.rbkName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/state/cheyuthaRbkbymandalidReports'], {
      queryParams: { request: result },
    });
  }

}
