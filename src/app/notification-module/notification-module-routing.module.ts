import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { RegistrationDetailsComponent } from './components/registration-details/registration-details.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';
import { JobDetailsReportsComponent } from './components/job-details-reports/job-details-reports.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { JobStatusComponent } from './components/job-status/job-status.component';
import { JobProfileComponent } from './components/job-profile/job-profile.component';

 
const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [ 

      {
        path: '',
        redirectTo: 'NotificationDetails',
        pathMatch: 'full',
      },

      {
        path: 'RegistrationDetails',
        component: RegistrationDetailsComponent,         
      },

      {
        path: 'NotificationDetails',
        component: NotificationDetailsComponent,         
      },
      {
        path: 'JobDetailsReport',
        component: JobDetailsReportsComponent,         
      },
      {
        path: 'LoginPage',
        component: LoginPageComponent,         
      },
      
      {
        path: 'JobDetailsStatus',
        component: JobStatusComponent,         
      },
      {
        path: 'JobProfile',
        component: JobProfileComponent,
    },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class NotificationModuleRoutingModule { }
