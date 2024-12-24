import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { VillageMeetingStateComponent } from 'src/app/villageMeeting/components/village-meeting-state/village-meeting-state.component';

@Component({
  selector: 'app-villagemeeting-state',
  templateUrl: './villagemeeting-state.component.html',
  styleUrls: ['./villagemeeting-state.component.css'],
})
export class VillagemeetingStateComponent implements OnInit {
  @ViewChild(VillageMeetingStateComponent)
  private villageMeetingState: VillageMeetingStateComponent;

  fromDate: any;
  toDate: any;

  PhaseType:any;
		phaseid: any;//  this.phaseid,
		phasename: any;// this.phasename,
		PhaseTypeList:[];
	   


  constructor(
    private utils: UtilsService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private stateAPI: StateService,
    private session: SessionService
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
	  this.phaseid='0';
	  this.phasename='ALL';
	  this.phasename='ALL';
	  this.phaseid='0';
	  }
  }

  onDistrictChange(result): void {
    this.router.navigate(['/state/villageLevelMeetingsMentorLevelReport'], {
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
     
     
  
     
  // const  currentYear = new Date(this.fromDate);
  // alert(currentYear.getFullYear());

  //  // if(this.fromDate>this.toDate)
  //  if( Date.parse(this.fromDate) > Date.parse(this.toDate))
  //   {this.toast.info("From Date must be Less than To Date");return;}

    this.villageMeetingState.loadReport();
    debugger;
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
}
