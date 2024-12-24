import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerNatureOfUnitBranchBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-branch-bank-report/farmer-nature-of-unit-branch-bank-report.component';
import { FarmerNatureOfUnitDetailBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-detail-bank-report/farmer-nature-of-unit-detail-bank-report.component';
import { FarmerNatureOfUnitDistrictBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-bank-report/farmer-nature-of-unit-district-bank-report.component';
import { FarmerNatureOfUnitStateBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-state-bank-report/farmer-nature-of-unit-state-bank-report.component';
import { LdmBankDistrictReportComponent } from './components/ldm-bank-district-report/ldm-bank-district-report.component';
import { LdmBankRbkReportComponent } from './components/ldm-bank-rbk-report/ldm-bank-rbk-report.component';
import { LdmBankStateReportComponent } from './components/ldm-bank-state-report/ldm-bank-state-report.component';

const roles = ['701']

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'LdmBankStateReport',
        pathMatch: 'full',
      },
      {
        path: 'LdmBankStateReport',
        component: LdmBankStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmBankDistrictReport',
        component: LdmBankDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmBankRbkReport',
        component: LdmBankRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitStateBankReport',
        component: FarmerNatureOfUnitStateBankReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitDistrictBankReport',
        component: FarmerNatureOfUnitDistrictBankReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitBranchBankReport',
        component: FarmerNatureOfUnitBranchBankReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitDetailBankReport',
        component: FarmerNatureOfUnitDetailBankReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateLevelLDMRoutingModule { }
