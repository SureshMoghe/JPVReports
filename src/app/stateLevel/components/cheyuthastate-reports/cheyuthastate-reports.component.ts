import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from '../../services/state.service';
import { CheyuthaDistrictsReportsComponent } from '../cheyutha-districts-reports/cheyutha-districts-reports.component';

@Component({
  selector: 'app-cheyuthastate-reports',
  templateUrl: './cheyuthastate-reports.component.html',
  styleUrls: ['./cheyuthastate-reports.component.css']
})
export class CheyuthastateReportsComponent implements OnInit {

  @ViewChild(CheyuthaDistrictsReportsComponent)
  private cheyuthaState: CheyuthaDistrictsReportsComponent;

  fromDate: any;   
  toDate: any; 
  constructor(private router: Router,     
    private toast: ToasterService,
    private session: SessionService,
    private stateAPI: StateService,
    private spinner: NgxSpinnerService) { } 

  ngOnInit(): void {
    this.fromDate =  this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }
  onDistrictChange(result): void {
    this.router.navigate(['/state/CheyuthaMandalReport'], {   //  CheyuthaMandalByDistID
      queryParams: { request: result },
    });
  }

//   onRouteChange(result): void {debugger;  // this.onReportPhaseTypeChange();
//   this.router.navigate(['/state/CheyuthaStateReport'], {
//     queryParams: { request: result },
//   });
// }

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

onjpvStatesunnathiChange(result): void {debugger;    
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

onSurveyedRegFarmersCount(result): void {debugger;    
  this.router.navigate(['/state/SurveyedRegFarmersCount'], { 
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
