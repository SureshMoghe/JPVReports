import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { VvFarmerDataDistrictComponent } from 'src/app/volunteerFarmerDataModule/components/vv-farmer-data-district/vv-farmer-data-district.component';

@Component({
  selector: 'app-vv-farmer-data-district-report',
  templateUrl: './vv-farmer-data-district-report.component.html',
  styleUrls: ['./vv-farmer-data-district-report.component.css'],
})
export class VvFarmerDataDistrictReportComponent implements OnInit {
  @ViewChild(VvFarmerDataDistrictComponent)
  private vvFarmerDistrict: VvFarmerDataDistrictComponent;
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
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
    private stateAPI: StateService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();

    this.loadPhaseTypelist();
    debugger;
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
    this.router.navigate(['/district/VvFarmerDataMandalReport'], {
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

    if (
      this.PhaseType === undefined ||
      this.PhaseType === '' ||
      this.PhaseType === null
    ){
      this.toast.warning('Phase Empty');
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
