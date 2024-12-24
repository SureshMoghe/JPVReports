import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { FarmerSchemeDistrictComponent } from 'src/app/farmerSchemeModule/components/farmer-scheme-district/farmer-scheme-district.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-scheme-district-report',
  templateUrl: './farmer-scheme-district-report.component.html',
  styleUrls: ['./farmer-scheme-district-report.component.css'],
})
export class FarmerSchemeDistrictReportComponent implements OnInit {
  @ViewChild(FarmerSchemeDistrictComponent)
  private farmerSchemeDistrict: FarmerSchemeDistrictComponent;
  fromDate: any;
  toDate: any;
  districtId: any;
  districtName: any;

  PhaseType:any;
  phaseid: any; 
  phasename: any; 
  PhaseTypeList:[];

  constructor(
    private session: SessionService,
    private router: Router,
    private toast: ToasterService,
    private spinner: NgxSpinnerService,    
    private stateAPI:StateService
  ) {}

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

  onRouteChange(result): void {
    this.router.navigate(['/district/FarmerSchemeRouteReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPourersChange(result): void {
    this.router.navigate(['/district/NonMilkPouringReport'], {
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

    this.farmerSchemeDistrict.loadReport();
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
