import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
 
import { FarmerSchemeStateComponent } from 'src/app/farmerSchemeModule/components/farmer-scheme-state/farmer-scheme-state.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-scheme-state-report',
  templateUrl: './farmer-scheme-state-report.component.html',
  styleUrls: ['./farmer-scheme-state-report.component.css'],
})
export class FarmerSchemeStateReportComponent implements OnInit {
  @ViewChild(FarmerSchemeStateComponent)
  private farmerSchemeState: FarmerSchemeStateComponent;
  fromDate: any;
  toDate: any;

  PhaseType:any; phaseid: any;   phasename: any;   PhaseTypeList:[];
  
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private stateAPI: StateService
  ) {}

  ngOnInit(): void {
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
    this.loadPhaseTypelist();   
    if (
      this.phaseid === undefined ||
      this.phaseid === '' ||
      this.phaseid === null
    ) { this.phaseid='0'; this.phasename='ALL'; this.session.phasename='ALL'; this.session.phaseid='0';}
      // else
      //   {  document.getElementById('PhaseType').attributes.item(this.session.phaseid);
             
      //   }

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
  }

  onDistrictChange(result): void {  this.onReportPhaseTypeChange(); debugger;
    this.router.navigate(['/state/FarmerSchemeDistrictReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {  this.onReportPhaseTypeChange();
    this.router.navigate(['/state/NonMilkPouringReport'], {
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
    this.onReportPhaseTypeChange();
    this.farmerSchemeState.loadReport();
  }
}
