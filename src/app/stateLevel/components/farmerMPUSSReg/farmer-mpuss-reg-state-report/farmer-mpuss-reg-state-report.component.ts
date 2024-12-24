import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FarmerMpussRegStateComponent } from 'src/app/farmerMpussReg/components/farmer-mpuss-reg-state/farmer-mpuss-reg-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-mpuss-reg-state-report',
  templateUrl: './farmer-mpuss-reg-state-report.component.html',
  styleUrls: ['./farmer-mpuss-reg-state-report.component.css'],
})
export class FarmerMpussRegStateReportComponent implements OnInit {
  @ViewChild(FarmerMpussRegStateComponent)
  private farmerRegState: FarmerMpussRegStateComponent;
  fromDate: any;
  toDate: any;
  PhaseType:any;
		phaseid: any;//  this.phaseid,
		phasename: any;// this.phasename,
		PhaseTypeList:[];

  constructor(
    private router: Router,
    private toast: ToasterService,
     private session: SessionService, 
		private stateAPI: StateService,
		private spinner: NgxSpinnerService 
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();

    this.loadPhaseTypelist();
	   
	  if (
		this.phaseid === undefined ||
		this.phaseid === '' ||
		this.phaseid === null
	  ) { 
    //   debugger;
	  // this.phaseid=this.PhaseType;
    // let obj=document.getElementById('PhaseType');
    // this.session.phasename=obj[this.PhaseType].innerText;
	  // this.phasename=this.session.phasename; 
	  // //this.session.phasename='ALL';
	  // this.session.phaseid=this.PhaseType;
	   this.phaseid='0';
      this.phasename='ALL';
     // this.phasename=this.phasename; 
     //this.phaseid=this.phaseid;
    }

    // else{
    //   this.session.phaseid=this.PhaseType; 
    //   let obj=document.getElementById('PhaseType');
    // this.session.phasename=obj[this.PhaseType].innerText;
    // }

  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/FarmerMpussRegDistrictReport'], {
      queryParams: { request: result },
    });
  }

 async loadPhaseTypelist(): Promise<void> {
    try { 
      const req = { 
        type: '9', 
      };
		this.PhaseTypeList=[];
		this.spinner.show();
		const res = await this.stateAPI.volunteerHHMandalReport(req);
		if (res.success) {        
			this.PhaseTypeList = res.result;
			this.PhaseType='0';
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }
    
  onReportPhaseTypeChange(): void {   
    this.phaseid=this.PhaseType; 
      let obj=document.getElementById('PhaseType');
    this.phasename=obj[this.PhaseType].innerText;
    this.phasename=obj[this.PhaseType].innerText;
   
  }
  btnLoadReport(): void { 
     
    if (
      this.PhaseType === undefined ||
      this.PhaseType === '' ||
      this.PhaseType === null
    ){
      this.toast.warning('Phase Empty');
      return;
    }

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

    this.farmerRegState.loadReport();
  }
}
