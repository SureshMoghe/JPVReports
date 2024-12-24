import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
 
import { CalibrationStateLevelReportComponent } from '../stateLevel/components/calibration/calibration-state-level-report/calibration-state-level-report.component';
import { MainDashboardComponent } from '../stateLevel/components/main-dashboard/main-dashboard.component';
import { CommonComponent } from './components/common/common.component';
import { PmfarmerabstractComponent } from './components/pmfarmerabstract/pmfarmerabstract.component';
import { PmsocietyWiseAbstractComponent } from './components/pmsociety-wise-abstract/pmsociety-wise-abstract.component';
import { PromptwelcomepageComponent } from './components/promptwelcomepage/promptwelcomepage.component';
 




const roles = ['208'];

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: MainDashboardComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PromptwelcomepageComponent',
        component: PromptwelcomepageComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CalibrationStateLevelReport',
        component: CalibrationStateLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },

      
      {
        path: 'SocietyAbstractReport',
        component: PmsocietyWiseAbstractComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerAbstractReport',
        component: PmfarmerabstractComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },


      ],
    },];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromptModuleRoutingModule { }
