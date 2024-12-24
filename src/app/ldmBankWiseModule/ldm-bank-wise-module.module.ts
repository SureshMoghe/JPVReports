import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdmBankWiseModuleRoutingModule } from './ldm-bank-wise-module-routing.module';
import { LdmBankWiseDistrictComponent } from './components/ldm-bank-wise-district/ldm-bank-wise-district.component';
import { LdmBankWiseMandalComponent } from './components/ldm-bank-wise-mandal/ldm-bank-wise-mandal.component';
import { LdmBankWiseBranchComponent } from './components/ldm-bank-wise-branch/ldm-bank-wise-branch.component';
import { LdmBankWiseRbkComponent } from './components/ldm-bank-wise-rbk/ldm-bank-wise-rbk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { LdmBankWiseStateComponent } from './components/ldm-bank-wise-state/ldm-bank-wise-state.component';
import { LdmBankWisePendingComponent } from './components/ldm-bank-wise-pending/ldm-bank-wise-pending.component';
import { LdmBankWiseApprovedRejectedComponent } from './components/ldm-bank-wise-approved-rejected/ldm-bank-wise-approved-rejected.component';
import { LdmBankWiseDistrictLoginComponent } from './components/ldm-bank-wise-district-login/ldm-bank-wise-district-login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LdmBankWiseStateComponent,
    LdmBankWiseDistrictComponent,
    LdmBankWiseMandalComponent,
    LdmBankWiseBranchComponent,
     LdmBankWiseRbkComponent,
      LdmBankWisePendingComponent,
      LdmBankWiseApprovedRejectedComponent,
      LdmBankWiseDistrictLoginComponent
    ],
  imports: [
    CommonModule,
    LdmBankWiseModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    LdmBankWiseStateComponent,
    LdmBankWiseDistrictComponent,
    LdmBankWiseMandalComponent,
    LdmBankWiseBranchComponent,
     LdmBankWiseRbkComponent,
      LdmBankWisePendingComponent,
      LdmBankWiseApprovedRejectedComponent,
      LdmBankWiseDistrictLoginComponent
  ]
})
export class LdmBankWiseModuleModule { }
