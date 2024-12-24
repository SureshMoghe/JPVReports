import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-mandal-report',
  templateUrl: './cheyutha-mandal-report.component.html',
  styleUrls: ['./cheyutha-mandal-report.component.css']
})
export class CheyuthaMandalReportComponent implements OnInit {

  @Output() input = new EventEmitter<string>();

  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;  
  rbkid: any; 
  rbkName: any;
  fromDate:any;
  toDate:any;    


constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router) {
route.queryParams.subscribe((params) => (this.input = params['request']));
}

ngOnInit(): void {  
debugger;
const decString = JSON.parse(this.utils.decrypt(this.input));
this.districtId = decString.districtId;
this.districtName = decString.districtName;
this.mandalId = decString.mandalId;
this.mandalName = decString.mandalName;
this.rbkid = decString.rbkid;
this.rbkName = decString.rbkName;
this.fromDate=decString.fromDate;
this.toDate=decString.toDate;  
}

onRbkChange(result): void { debugger;
this.router.navigate(['/state/cheyuthaBeneficiarybyrbkReports'], {   // cheyuthaBeneficiarybyRbkIDReport
  queryParams: { request: result },
});
}  
btnBack(): void { 
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
this.router.navigate(['/dccbLevel/CheyuthaDistrictReport'], {
  queryParams: { request: result },
});
}

ontotalnoofanimalsChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/TotalnoofanimalsReports'], { 
  queryParams: { request: result },
});
}

onRouteChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/cheyuthabeneficiariescount'], {
queryParams: { request: result },
});
}
onVILLAGECOUNTChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/cheyuthavillagecount'], {
queryParams: { request: result },
});
}

onJpvRegisteredfarmerChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/jpvRegisteredFarmerCount'], { 
queryParams: { request: result },
});
} 

oncheybeneRegjpvfarmerChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/CheyuthaBenJpvFarmerReport'], { 
queryParams: { request: result },
});
}



oncheybeneRegjpvfarmergroundedanimalChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/CheyuthaBenRegJpvFarmergroundanimalReport'], { 
queryParams: { request: result },
});
}

oncheybeneRegNonjpvfarmergroundedanimalChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/CheyuthaBenRegnonJpvFarmergroundanimalReport'], { 
queryParams: { request: result },
});
}

onTotalCheyuthaBeneficiariesGroundedwithanimalsChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/TotalCheyuthaBeneficiariesGroundedwithanimals'], { 
queryParams: { request: result },
});
}


onjpvRegFaranimalgroundingChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/jpvRegFaranimalgrounding'], { 
queryParams: { request: result },
});
}



onjpvStatestreenidhiChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/CheyuthaStatestreenidhicount'], { 
queryParams: { request: result },
});
}


onjpvStateunnathiChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/CheyuthaStateunnathiReport'], { 
queryParams: { request: result },
});
}

onbanklinkChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/BanklinkReports'], {  
queryParams: { request: result },
});
}


onsurveyedwithanimalsChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/SurveyedWithAnimalscount'], {  
queryParams: { request: result },
});
}


onsurveyedwithoutanimalsChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/SurveyedWithoutAnimals'], {  
queryParams: { request: result },
});
}
onSurvyednonRegisteredBeneficiariesChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/SurvyednonRegisteredBeneficiaries'], {  
queryParams: { request: result },
});
}

onSurveyedRegFarmersCount(result): void {debugger;    
this.router.navigate(['/dccbLevel/SurveyedRegFarmersCount'], { 
queryParams: { request: result },
});
}

onnonsurveyedChange(result): void {debugger;    
this.router.navigate(['/dccbLevel/NonSurvyedcount'], {  
queryParams: { request: result },
});
}





}
