import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  input: any;
  dashboardPage = true;
  districtId = '';
  districtList = [];
  districtDashboard = false;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private dashboardAPI: DashboardService,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(
      (params) => (this.input = params['districtId'])
    );
  }
  ngOnInit(): void {
    console.log(this.input);
    this.loadDistricts();
  }

  async loadDistricts(): Promise<void> {
    try {
      this.districtList = [];
      this.spinner.show();
      const res = await this.dashboardAPI.districtList();
      if (res.success) {
        this.districtList = res.result;
        if (
          this.input !== '' &&
          this.input !== null &&
          this.input !== undefined
        ) {
          this.districtId = this.input;
          this.districtDashboard = true;
        }
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
}
