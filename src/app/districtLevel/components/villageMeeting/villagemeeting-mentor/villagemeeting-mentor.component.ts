import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { VillageMeetingMentorComponent } from 'src/app/villageMeeting/components/village-meeting-mentor/village-meeting-mentor.component';

@Component({
  selector: 'app-villagemeeting-mentor',
  templateUrl: './villagemeeting-mentor.component.html',
  styleUrls: ['./villagemeeting-mentor.component.css'],
})
export class VillagemeetingMentorComponent implements OnInit {
  @ViewChild(VillageMeetingMentorComponent)
  private villageMeetingMentor: VillageMeetingMentorComponent;
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  PhaseType:any;
  phaseid: any;//  this.phaseid,
  phasename: any;// this.phasename,
  PhaseTypeList:[];

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,  
    private router: Router,
    private session: SessionService,
    private toast: ToasterService,  private stateAPI: StateService,
		private spinner: NgxSpinnerService
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
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

    this.villageMeetingMentor.loadReport();
  }

  onMentorChange(result): void {
    this.router.navigate(['/district/villageLevelMeetingsRbkLevelReport'], {
      queryParams: { request: result },
    });
  }

  async loadPhaseTypelist(): Promise<void> {
    try { debugger;
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
