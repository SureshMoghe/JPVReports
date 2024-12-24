import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-cheyutha-mandal-report',
  templateUrl: './cheyutha-mandal-report.component.html',
  styleUrls: ['./cheyutha-mandal-report.component.css']
})
export class CheyuthaMandalReportComponent implements OnInit {

  input: any;
  districtId: any;
  districtName: any;
  mandalId: any; 
  mandalName: any; 
  fromDate:any; 
  toDate:any;

  constructor(private utils: UtilsService, private route: ActivatedRoute,private router: Router, private session: SessionService) { }

  ngOnInit(): void { debugger;

    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.mandalId = this.session.mandalId;
    this.mandalName = this.session.mandalName;
   this.fromDate =  this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  } 

  
  onMandalChange(result): void {
    debugger;
    this.router.navigate(['/mandalLevel/CheyuthaRbkReport'], { 
      queryParams: { request: result },
    });
  } 
   



 




  
onRouteChange(result): void {debugger;    
  this.router.navigate(['/state/cheyuthabeneficiariescount'], {
    queryParams: { request: result },
  });
}

onVILLAGECOUNTChange(result): void {debugger;    
  this.router.navigate(['/state/cheyuthavillagecount'], {
    queryParams: { request: result },
  });
}



onJpvRegisteredfarmerChange(result): void {debugger;    
  this.router.navigate(['/state/jpvRegisteredFarmerCount'], { 
    queryParams: { request: result },
  });
} 

oncheybeneRegjpvfarmerChange(result): void {debugger;    
  this.router.navigate(['/state/CheyuthaBenJpvFarmerReport'], { 
    queryParams: { request: result },
  });
}     



oncheybeneRegjpvfarmergroundedanimalChange(result): void {debugger;    
  this.router.navigate(['/state/CheyuthaBenRegJpvFarmergroundanimalReport'], { 
    queryParams: { request: result },
  });
}

oncheybeneRegNonjpvfarmergroundedanimalChange(result): void {debugger;    
  this.router.navigate(['/state/CheyuthaBenRegnonJpvFarmergroundanimalReport'], { 
    queryParams: { request: result },
  });
}
 
onTotalCheyuthaBeneficiariesGroundedwithanimalsChange(result): void {debugger;    
  this.router.navigate(['/state/TotalCheyuthaBeneficiariesGroundedwithanimals'], { 
    queryParams: { request: result },
  });
}


onjpvRegFaranimalgroundingChange(result): void {debugger;    
  this.router.navigate(['/state/jpvRegFaranimalgrounding'], { 
    queryParams: { request: result },
  });
}



onjpvStatestreenidhiChange(result): void {debugger;    
  this.router.navigate(['/state/CheyuthaStatestreenidhicount'], { 
    queryParams: { request: result },
  });
}

onjpvStateunnathiChange(result): void {debugger;    
  this.router.navigate(['/state/CheyuthaStateunnathiReport'], {  
    queryParams: { request: result },
  });
}

onbanklinkChange(result): void {debugger;    
  this.router.navigate(['/state/BanklinkReports'], {  
    queryParams: { request: result },
  });
}

ontotalnoofanimalsChange(result): void {debugger;    
  this.router.navigate(['/state/TotalnoofanimalsReports'], { 
    queryParams: { request: result },
  });
}


onsurveyedwithanimalsChange(result): void {debugger;    
  this.router.navigate(['/state/SurveyedWithAnimalscount'], { 
    queryParams: { request: result },
  });
}


onsurveyedwithoutanimalsChange(result): void {debugger;    
  this.router.navigate(['/state/SurveyedWithoutAnimals'], { 
    queryParams: { request: result },
  });
}

onSurvyednonRegisteredBeneficiariesChange(result): void {debugger;    
  this.router.navigate(['/state/SurvyednonRegisteredBeneficiaries'], { 
    queryParams: { request: result },
  });
}


onnonsurveyedChange(result): void {debugger;    
  this.router.navigate(['/state/NonSurvyedcount'], { 
    queryParams: { request: result },
  });
}

}
