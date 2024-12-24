import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { CheyuthaMandalByDistIDReportsComponent } from 'src/app/stateLevel/components/cheyutha-mandal-by-dist-idreports/cheyutha-mandal-by-dist-idreports.component';
//import { CheyuthaMandalReportsComponent } from 'src/app/stateLevel/components/cheyutha-mandal-reports/cheyutha-mandal-reports.component';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-cheyutha-district-reports',
  templateUrl: './cheyutha-district-reports.component.html',
  styleUrls: ['./cheyutha-district-reports.component.css']
})
export class CheyuthaDistrictReportsComponent implements OnInit {
  @ViewChild(CheyuthaMandalByDistIDReportsComponent)
  private cheyuthaState: CheyuthaMandalByDistIDReportsComponent;

  fromDate: any;   
  toDate: any; 
  districtId: any; 
  districtName: any; 
  mandalId: any; 
  mandalName: any; 

  constructor(private router: Router,     
    private toast: ToasterService,
    private session: SessionService,
    private stateAPI: StateService,
    private spinner: NgxSpinnerService) { } 

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;     
    this.mandalId = this.session.mandalId;     
    this.mandalName = this.session.mandalName;     
    this.fromDate =  this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }
  // onDistrictChange(result): void {
  //   this.router.navigate(['/state/CheyuthaMandalReport'], {   //  CheyuthaMandalByDistID
  //     queryParams: { request: result },
  //   });
  // }

//   onRouteChange(result): void {debugger;  // this.onReportPhaseTypeChange();
//   this.router.navigate(['/state/CheyuthaStateReport'], {
//     queryParams: { request: result },
//   });
// }
onMandalChange(result): void {
  debugger;
  this.router.navigate(['/dccbLevel/CheyuthaMandalReport'], { 
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

// onjpvStatesunnathiChange(result): void {debugger;    
//   this.router.navigate(['/dccbLevel/CheyuthaStateunnathiReport'], { 
//     queryParams: { request: result },
//   });
// }

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


ontotalnoofanimalsChange(result): void {debugger;    
  this.router.navigate(['/dccbLevel/TotalnoofanimalsReports'], { 
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
onnonsurveyedChange(result): void {debugger;    
  this.router.navigate(['/dccbLevel/NonSurvyedcount'], { 
    queryParams: { request: result },
  });
}

onSurveyedRegFarmersCount(result): void {debugger;    
  this.router.navigate(['/dccbLevel/SurveyedRegFarmersCount'], { 
    queryParams: { request: result },
  });
}



  btnLoadReport(): void { debugger;
     
   if (
     this.fromDate === null ||
     this.fromDate === undefined ||
     this.fromDate === ''
   ) {
     this.toast.warning('From Date Is Empty');
     return;
   }
   if (
     this.toDate === null ||
     this.toDate === undefined ||
     this.toDate === ''
   ) {
     this.toast.warning('To Date Is Empty');
     return;
   }
   
   this.spinner.show();
   this.cheyuthaState.loadReport();
   this.spinner.hide();
 }
}

