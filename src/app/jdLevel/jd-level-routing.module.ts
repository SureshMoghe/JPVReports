import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { BankerLoanSanctionAndGroundingComponent } from './components/banker-loan-sanction-and-grounding/banker-loan-sanction-and-grounding.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { CommonComponent } from './components/common/common.component';
import { LoanSanctionAndGroundingComponent } from './components/loan-sanction-and-grounding/loan-sanction-and-grounding.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

const roles = ['104'];
const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'LoanSanctionAndGroundingReport',
        pathMatch: 'full',
      },
      {
        path: 'LoanSanctionAndGroundingReport',
        component: LoanSanctionAndGroundingComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BankerLoanSanctionAndGroundingReport',
        component: BankerLoanSanctionAndGroundingComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingDistrictLevelReport',
        component: GroundingDistrictLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingMandalLevelReport',
        component: GroundingMandalLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingDetailLevelReport',
        component: GroundingDetailLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PasswordReset',
        component: PasswordResetComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JdLevelRoutingModule { }
