import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationModuleRoutingModule } from './notification-module-routing.module';
import { CommonComponent } from './components/common/common.component';
import { RegistrationDetailsComponent } from './components/registration-details/registration-details.component';
import { SharedModule } from '../shared/shared.module';
import { StateLevelModule } from '../stateLevel/state-level.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';
import { JobDetailsReportsComponent } from './components/job-details-reports/job-details-reports.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JobStatusComponent } from './components/job-status/job-status.component';
import { DataTablesModule } from 'angular-datatables';
import { JobProfileComponent } from './components/job-profile/job-profile.component';

@NgModule({
  declarations: [CommonComponent, RegistrationDetailsComponent, NotificationDetailsComponent, JobDetailsReportsComponent, LoginPageComponent, JobStatusComponent, JobProfileComponent],
  imports: [
    CommonModule,
    NotificationModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    SharedModule,
    StateLevelModule,
    BsDatepickerModule,
    DataTablesModule
  ],
  exports:[RegistrationDetailsComponent,NotificationDetailsComponent]
})
export class NotificationModuleModule { }
