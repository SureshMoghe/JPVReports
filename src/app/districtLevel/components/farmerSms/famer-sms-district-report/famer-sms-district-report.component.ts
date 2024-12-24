import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AmcuInspectionDistrictComponent } from 'src/app/amcuInspectionModule/components/amcu-inspection-district/amcu-inspection-district.component';
import { FarmerSmsDistrictComponent } from 'src/app/farmerSmsModule/components/farmer-sms-district/farmer-sms-district.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-famer-sms-district-report',
  templateUrl: './famer-sms-district-report.component.html',
  styleUrls: ['./famer-sms-district-report.component.css'],
})
export class FamerSmsDistrictReportComponent implements OnInit {
  // @ViewChild(AmcuInspectionDistrictComponent)
  // private farmerSmsDistrict: AmcuInspectionDistrictComponent;
  @ViewChild(FarmerSmsDistrictComponent)
  private farmerSmsDistrict: FarmerSmsDistrictComponent;

  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;

  PhaseType:any;
  phaseid: any; 
  phasename: any; 
  PhaseTypeList:[];

  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
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
     //this.btnLoadReport();
  }

  onMandalChange(result): void {
    this.router.navigate(['/district/FamerSmsMandalReport'], {
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

    this.farmerSmsDistrict.loadReport();
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