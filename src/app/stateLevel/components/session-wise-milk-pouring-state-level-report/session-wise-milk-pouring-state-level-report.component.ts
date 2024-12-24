import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { PromotersStateLevelComponent } from 'src/app/promotersModule/components/promoters-state-level/promoters-state-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { SessionWiseMilkPouringStateLevelDetailsComponent } from '../session-wise-milk-pouring-state-level-details/session-wise-milk-pouring-state-level-details.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-session-wise-milk-pouring-state-level-report',
  templateUrl: './session-wise-milk-pouring-state-level-report.component.html',
  styleUrls: ['./session-wise-milk-pouring-state-level-report.component.css']
})
export class SessionWiseMilkPouringStateLevelReportComponent implements OnInit {
  @ViewChild(SessionWiseMilkPouringStateLevelDetailsComponent)
  private promoterState: SessionWiseMilkPouringStateLevelDetailsComponent;
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
    private spinner: NgxSpinnerService,
    private stateAPI:StateService,
  ) {}

  ngOnInit(): void {
    if(this.session.uniqueId !="" && this.session.desigId != ""){

    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }

    this.fromDate = this.session.getTodayDateString();//this.session.getFromDateString();
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
    this.router.navigate(['/state/SessionWiseMilkPouringDistrictLevelReport'], {
      queryParams: { request: result },
    });
  }

  onAddedRbkChange(result): void {
    this.router.navigate(['/state/PromotersAddedRBKLevelReport'], {
      queryParams: { request: result },
    });
  }

  onNotAddedRbkChange(result): void {
    this.router.navigate(['/state/PromotersNotAddedRBKLevelReport'], {
      queryParams: { request: result },
    });
  }

  onTotalPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }
  onMilkPouringPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }
  onMilkNotPouringPromotersChange(result): void {
    this.router.navigate(['/state/TotalPromotersAddedReport'], {
      queryParams: { request: result },
    });
  }

  btnLoadReport(): void {  debugger;
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

    this.promoterState.loadReport();
  }
}
