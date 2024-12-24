import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SsoComponent } from './components/sso/sso.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../shared/shared.module';
import { StateLevelModule } from '../stateLevel/state-level.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';


@NgModule({
  declarations: [LoginComponent, SsoComponent, MainDashboardComponent, NotificationsComponent, JobDetailsComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    SharedModule,
    StateLevelModule,
     
  ]  
})
export class LoginModule { }
