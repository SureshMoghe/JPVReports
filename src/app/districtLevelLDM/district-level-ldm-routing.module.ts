import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerNatureOfUnitBankBranchReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-branch-report/farmer-nature-of-unit-bank-branch-report.component';
import { FarmerNatureOfUnitBankDetailReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-detail-report/farmer-nature-of-unit-bank-detail-report.component';
import { FarmerNatureOfUnitBankDistrictReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-district-report/farmer-nature-of-unit-bank-district-report.component';
import { FarmerNatureOfUnitDistrictLoginReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-login-report/farmer-nature-of-unit-district-login-report.component';
import { LdmBankDistrictReportComponent } from './components/ldm-bank-district-report/ldm-bank-district-report.component';
import { LdmBankRbkReportComponent } from './components/ldm-bank-rbk-report/ldm-bank-rbk-report.component';

const roles = ['801']

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'LdmBankDistrictReport',
        pathMatch: 'full',
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
        path: 'FarmerNatureOfUnitDistrictLoginReport',
        component: FarmerNatureOfUnitDistrictLoginReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitBankDistrictReport',
        component: FarmerNatureOfUnitBankDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitBankBranchReport',
        component: FarmerNatureOfUnitBankBranchReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerNatureOfUnitBankDetailReport',
        component: FarmerNatureOfUnitBankDetailReportComponent,
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
export class DistrictLevelLDMRoutingModule { }
