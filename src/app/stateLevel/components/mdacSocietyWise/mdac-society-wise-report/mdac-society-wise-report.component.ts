import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MdacSocietyWiseComponent } from 'src/app/mdacSocietyWiseModule/components/mdac-society-wise/mdac-society-wise.component';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-mdac-society-wise-report',
  templateUrl: './mdac-society-wise-report.component.html',
  styleUrls: ['./mdac-society-wise-report.component.css'],
})
export class MdacSocietyWiseReportComponent implements OnInit {
  @ViewChild(MdacSocietyWiseComponent)
  private mdacSociety: MdacSocietyWiseComponent;
  districtList = [];
  districtId = '';
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
  btnLoadReport(): void {
    if (
      this.districtId === null ||
      this.districtId === undefined ||
      this.districtId === ''
    ) {
      this.toast.warning('District Is Empty');
      return;
    }
    this.mdacSociety.loadReport();
  }
  onDistrictChange(): void {
    if (this.districtId === '') {
      return;
    }
  }
}
