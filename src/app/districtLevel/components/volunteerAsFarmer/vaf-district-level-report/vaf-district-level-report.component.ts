import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { VafDistrictLevelComponent } from 'src/app/volunteerAsFarmerModule/components/vaf-district-level/vaf-district-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vaf-district-level-report',
  templateUrl: './vaf-district-level-report.component.html',
  styleUrls: ['./vaf-district-level-report.component.css']
})
export class VafDistrictLevelReportComponent implements OnInit {
  @ViewChild(VafDistrictLevelComponent)
  private vvFarmerDistrict: VafDistrictLevelComponent;
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  PhaseType:any;
  phaseid: any; 
  phasename: any; 
  PhaseTypeList:[];

  constructor(
    private utils: UtilsService,
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
    private stateAPI: StateService,
		private spinner: NgxSpinnerService
  ) {
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

  onMandalChange(result): void {
    this.router.navigate(['/district/VafMandalLevelReport'], {
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

    this.vvFarmerDistrict.loadReport();
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