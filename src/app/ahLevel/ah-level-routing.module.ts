import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { GroundingAHLevelLoginComponent } from './components/cheyuthaGrounding/grounding-ahlevel-login/grounding-ahlevel-login.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { CommonComponent } from './components/common/common.component';
import { LoanSanctionandGroundingReportComponent } from './components/loanSanctionAndGrounding/loan-sanctionand-grounding-report/loan-sanctionand-grounding-report.component';

const roles = ['103'];
const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'GroundingAHLevelLogin',
        pathMatch: 'full',
      },
      {
        path: 'GroundingAHLevelLogin',
        component: GroundingAHLevelLoginComponent,
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
        path: 'GroundingApprovedRejectedReport',
        component: GroundingApprovedRejectedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LoanSanctionAndGroundingReport',
        component: LoanSanctionandGroundingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AhLevelRoutingModule { }
