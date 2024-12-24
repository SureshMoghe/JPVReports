import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { MpuacBankAccStateComponent } from 'src/app/mpuacBankAccModule/components/mpuac-bank-acc-state/mpuac-bank-acc-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-mpuac-bank-acc-state-report',
  templateUrl: './mpuac-bank-acc-state-report.component.html',
  styleUrls: ['./mpuac-bank-acc-state-report.component.css'],
})
export class MpuacBankAccStateReportComponent implements OnInit {
  @ViewChild(MpuacBankAccStateComponent)
  private farmerMpuacBankAccState: MpuacBankAccStateComponent;
  fromDate: any;
  toDate: any;
  phaseid: any;
  phasename: any;

  PhaseTypeList=[];
  PhaseType:any;

  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private stateAPI: StateService,
    
  ) {}

  ngOnInit(): void {

    if(this.session.uniqueId !="" && this.session.desigId != ""){

    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }

    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();

    this.loadPhaseTypelist();
	   
	  if (
		this.phaseid === undefined ||
		this.phaseid === '' ||
		this.phaseid === null
	  ) { 
	  this.phaseid='0';
	  this.phasename='ALL';
	  this.phasename='ALL';
	  this.phaseid='0';
	  }
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

  onReportPhaseTypeChange(): void {  debugger;
    this.phaseid=this.PhaseType; 
      let obj=document.getElementById('PhaseType');
    this.phasename=obj[this.PhaseType].innerText;
   
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/MpuacBankAccMandalReport'], {
      queryParams: { request: result },
    });
  }
  onNoMdacAccChange(result): void {
    this.router.navigate(['/state/MdacNotCreatedStateLevelReport'], {
      queryParams: { request: result },
    });
  }
  btnLoadReport(): void {
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

    this.farmerMpuacBankAccState.loadReport();
  }
}
