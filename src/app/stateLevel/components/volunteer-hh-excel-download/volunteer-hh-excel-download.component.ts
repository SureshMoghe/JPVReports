import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-volunteer-hh-excel-download',
  templateUrl: './volunteer-hh-excel-download.component.html',
  styleUrls: ['./volunteer-hh-excel-download.component.css'],
})
export class VolunteerHhExcelDownloadComponent implements OnInit {
  districtList = [];
  districtId = '';
  districtLevelDetails = [];
  Typechange:any;
  Typeid:any;
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private stateAPI: StateService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadDistricts();
  }

  loadDistricts(): void {
    this.spinner.show();
    this.stateAPI
      .districtList()
      .then((res: any) => {
        if (res.success) {
          this.districtList = res.result;
          // this.districtId = this.districtList[0].DISTRICT_ID;
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  onDistrictChange(): void {
    if (this.districtId === '') {
      return;
    }
  }

  async btnDownloadReport(): Promise<void> { 
    try {
      if (this.utils.isEmpty(this.districtId)) {
        this.toast.warning('Please Select District');
        return;
      }
      const req = {
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.stateAPI.volunteerHHReport(req);
      if (res.success) {
       // this.districtLevelDetails = res.result;
        this.utils.JSONToCSVConvertor(
          res.result,
          'Volunteer HH Report',
          true
        );
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    }  catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnexcelDownloadReport(): Promise<void> {
    try {
      if (this.utils.isEmpty(this.Typechange)) {
        this.toast.warning('Please Select Report');
        return;
      }
      const req = {
        Typeid:this.Typechange,
      };
      this.spinner.show();
      const res = await this.stateAPI.excelDownloadReport(req);
      if (res.success) {
        this.utils.JSONToCSVConvertor(
          res.result,
          'Excel Report',
          true
        );
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    }  catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

}
