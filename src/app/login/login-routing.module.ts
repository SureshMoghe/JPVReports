import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SsoComponent } from './components/sso/sso.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: MainDashboardComponent,
  },
  {
    path: 'SSO',
    component: SsoComponent,
  },

  {
    path: 'Notifications',
    component: NotificationsComponent,
  },

  {
    path: 'JobDetails',
    component: JobDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
