import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CmpStateLevelComponent } from 'src/app/comparitiveMilkPourerModule/components/cmp-state-level/cmp-state-level.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-cmp-state-level-report',
  templateUrl: './cmp-state-level-report.component.html',
  styleUrls: ['./cmp-state-level-report.component.css'],
})
export class CmpStateLevelReportComponent implements OnInit { 
  

  @ViewChild(CmpStateLevelComponent)

  cmpStateLevelComponent: CmpStateLevelComponent;

  districtId = '';
  districtName: any;
  districtList = [];
  PhaseType:any; phaseid: any;   phasename: any;   PhaseTypeList:[];
  constructor(
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService,
    private stateAPI: StateService
  ) {}

  ngOnInit(): void {
    this.loadDistrictList();

  //   this.loadPhaseTypelist();   
  // if (
  //   this.phaseid === undefined ||
  //   this.phaseid === '' ||
  //   this.phaseid === null
  // ) { this.phaseid='0'; this.phasename='ALL'; this.phasename='ALL'; this.phaseid='0';}
  //   else
  //     {  document.getElementById('PhaseType').attributes.item(this.phaseid);
           
  //     }
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
  //   this.phaseid=this.PhaseType;   
  //   let obj=document.getElementById('PhaseType');
  //   this.phasename=obj[this.PhaseType].innerText;
  // }

  async loadDistrictList(): Promise<void> {
    try {
      const res = await this.stateAPI.districtList();
      if (res.success) {
        this.districtList = res.result;
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  onDistrictChange(): void { debugger; ///this.onReportPhaseTypeChange();
    this.districtName = '';
    for (let i = 0; i < this.districtList.length; i++) {
      if (this.districtId === this.districtList[i].DISTRICT_ID) {
        this.districtId = this.districtList[i].DISTRICT_ID;
        this.districtName = this.districtList[i].DISTRICT_NAME;
        this.phaseid=this.phaseid;
        this.phasename=this.phasename;
        break;
      }
    }
    this.cmpStateLevelComponent.loadReport(this.districtId, this.districtName);
    return;
  }
  onDetailsChange(result): void {// this.onReportPhaseTypeChange();
    this.router.navigate(['/state/CmpMilkPourerDetailReport'], {
      queryParams: { request: result },
    });
  }
}
