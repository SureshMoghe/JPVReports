import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { CheyuthaBankStateLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-state-level/cheyutha-bank-state-level.component';
import { CommonComponent } from './components/common/common.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LdmbankWiseStateReportComponent } from './components/ldmBankWise/ldmbank-wise-state-report/ldmbank-wise-state-report.component';

const roles = ['302']

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'CheyuthaBankStateLevelReport',
        pathMatch: 'full',
      },
      {
        path: 'CheyuthaBankStateLevelReport',
        component: CheyuthaBankStateLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankDistrictLevelReport',
        component: CheyuthaBankDistrictLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankMandalLevelReport',
        component: CheyuthaBankMandalLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankRbkLevelReport',
        component: CheyuthaBankRbkLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankRejectedReport',
        component: CheyuthaBankRejectedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankPendingReport',
        component: CheyuthaBankPendingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankAcceptedReport',
        component: CheyuthaBankAcceptedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseStateReport',
        component: LdmbankWiseStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseDistrictReport',
        component: LdmbankWiseDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseBranchReport',
        component: LdmbankWiseBranchReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseMandalReport',
        component: LdmbankWiseMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseRbkReport',
        component: LdmbankWiseRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWisePendingReport',
        component: LdmbankWisePendingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseApprovedRejectedReport',
        component: LdmbankWiseApprovedRejectedReportComponent,
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
export class StateLevelSLBCRoutingModule { }
