import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonComponent } from './components/common/common.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [DashboardComponent, CommonComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
