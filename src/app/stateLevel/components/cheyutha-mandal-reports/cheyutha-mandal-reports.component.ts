import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service'; 

@Component({
  selector: 'app-cheyutha-mandal-reports',
  templateUrl: './cheyutha-mandal-reports.component.html',
  styleUrls: ['./cheyutha-mandal-reports.component.css']
})
export class CheyuthaMandalReportsComponent implements OnInit { 
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any; 
  mandalName: any; 
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
    this.fromDate=decString.fromDate,
    this.toDate=decString.toDate
     
  }
   

  onMandalChange(result): void {
    debugger;
    this.router.navigate(['/state/cheyuthaRbkbymandalidReports'], { 
      queryParams: { request: result },
    });
  } 
   
 


  btnBack(): void { 
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    
   

    this.router.navigate(['/state/CheyuthaStateReport'], {
     // queryParams: { request: result },
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
onSurveyedRegFarmersCount(result): void {debugger;    
  this.router.navigate(['/state/SurveyedRegFarmersCount'], { 
    queryParams: { request: result },
  });
}

onnonsurveyedChange(result): void {debugger;    
  this.router.navigate(['/state/NonSurvyedcount'], { 
    queryParams: { request: result },
  });
}



}
