import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FarmerSmsStateComponent } from 'src/app/farmerSmsModule/components/farmer-sms-state/farmer-sms-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-famer-sms-state-report',
  templateUrl: './famer-sms-state-report.component.html',
  styleUrls: ['./famer-sms-state-report.component.css'],
})
export class FamerSmsStateReportComponent implements OnInit {
  @ViewChild(FarmerSmsStateComponent)
  private farmerSmsState: FarmerSmsStateComponent;
  fromDate: any;
  toDate: any;
  phase_type:any;
  phaseid: any;//  this.phaseid,
  phasename: any;// this.phasename,
  PhaseTypeList:[];
  constructor(
    private router: Router,
    private toast: ToasterService,
    private spinner: NgxSpinnerService,
    private session: SessionService,
    private stateAPI:StateService

  ) {}

  ngOnInit(): void {debugger;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
    this.loadPhaseTypelist();
    if ( 
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) { this.router.navigate(['/state/FamerSmsStateReport']);
    }

    if ( 
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) { this.router.navigate(['/state/FamerSmsStateReport']);
    }
this.onFamerSmsState();
      
     
	  if (
		this.phaseid === undefined ||
		this.phaseid === '' ||
		this.phaseid === null
	  ) { 
     this.phase_type='0';
	   this.phaseid='0';
      this.phasename='ALL';
     
    } 
this.btnLoadReport();
  }
  
  async loadPhaseTypelist(): Promise<void> {
    try { 
      const req = {
        type: '9', 
      };
		this.PhaseTypeList=[];
		this.spinner.show();
		const res = await this.stateAPI.volunteerHHMandalReport(req);
		if (res.success) {        debugger;
			this.PhaseTypeList = res.result;
			this.phase_type='0';
      
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }
  onReportPhaseTypeChange(): void {   debugger;
    this.phaseid=this.phase_type; 
      let obj=document.getElementById('phase_type');
    this.phasename=obj[this.phase_type].innerText;
   // this.phasename=obj[this.PhaseType].innerText;
   
  }
  onDistrictChange(result): void { this.onReportPhaseTypeChange();
    this.router.navigate(['/state/FamerSmsDistrictReport'], {
      queryParams: { request: result },
    });
  }


  onFamerSmsState(): void {  this.onReportPhaseTypeChange();
    this.router.navigate(['/state/FamerSmsStateReport']);
  }
  btnLoadReport(): void {debugger;
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

    this.farmerSmsState.loadReport();
  }
}
