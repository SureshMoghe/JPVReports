import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { VvFarmerDataStateComponent } from 'src/app/volunteerFarmerDataModule/components/vv-farmer-data-state/vv-farmer-data-state.component';

@Component({
  selector: 'app-vv-farmer-data-state-report',
  templateUrl: './vv-farmer-data-state-report.component.html',
  styleUrls: ['./vv-farmer-data-state-report.component.css'],
})
export class VvFarmerDataStateReportComponent implements OnInit {
  @ViewChild(VvFarmerDataStateComponent)
  private vvFarmerState: VvFarmerDataStateComponent; 
  fromDate: any;Phase_Type:any;
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
   debugger;
  if (
    this.session.phaseid === undefined ||
    this.session.phaseid === '' ||
    this.session.phaseid === null
  ) { this.phaseid='0'; this.phasename='ALL'; this.phasename='ALL'; this.phaseid='0';
this.Phase_Type="0";
}
    else
      { // document.getElementById('PhaseType').attributes.item(this.session.phaseid);
      this.Phase_Type=this.session.phaseid;
      this.session.phaseid="";
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

  // onReportPhaseTypeChange(): void {  
  //   this.session.phaseid=this.PhaseType;
  //   if(this.PhaseType==='0')this.session.phasename='All';
  //   else if(this.PhaseType==='1')this.session.phasename='Phase 1';
  //   else if(this.PhaseType==='2')this.session.phasename='Phase 2';
  //   else if(this.PhaseType==='3')this.session.phasename='Phase 3';
  //   else if(this.PhaseType==='4')this.session.phasename='Phase 4';

  // }
  onReportPhaseTypeChange(): void {  debugger;
    this.phaseid=this.Phase_Type;
    // if(this.PhaseType==='0')this.session.phasename='All';
    // else{
      let obj=document.getElementById('PhaseType');
    this.phasename=obj[this.Phase_Type].innerText;

  //}
  }

  onDistrictChange(result): void {debugger;
    this.onReportPhaseTypeChange();// this.onReportPhaseTypeChange();
    this.router.navigate(['/state/VvFarmerDataDistrictReport'], { 
      queryParams: { request: result },
    });
  }

  onRouteChange(result): void {debugger; this.onReportPhaseTypeChange(); // this.onReportPhaseTypeChange();
    this.router.navigate(['/state/VvFarmerDataRouteWiseList'], {
      queryParams: { request: result },
    });
  }

  btnLoadReport(): void { debugger;
     this.onReportPhaseTypeChange(); // this.onReportPhaseTypeChange();
    // this.session.phaseid=this.PhaseType;
    // if(this.PhaseType==='0')this.session.phasename='All';
    // else if(this.PhaseType==='1')this.session.phasename='Phase 1';
    // else if(this.PhaseType==='2')this.session.phasename='Phase 2';
    // else if(this.PhaseType==='3')this.session.phasename='Phase 3';

    if (
      this.Phase_Type === undefined ||
      this.Phase_Type === '' ||
      this.Phase_Type === null
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
    this.spinner.show();
    this.vvFarmerState.loadReport();
    this.spinner.hide();
  }
}
