import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateLevelSLBCRoutingModule } from './state-level-slbc-routing.module';
import { CheyuthaBankStateLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-state-level/cheyutha-bank-state-level.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { LdmbankWiseStateReportComponent } from './components/ldmBankWise/ldmbank-wise-state-report/ldmbank-wise-state-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { BankerModuleModule } from '../bankerModule/banker-module.module';
import { LdmBankWiseModuleModule } from '../ldmBankWiseModule/ldm-bank-wise-module.module';
import { CommonComponent } from './components/common/common.component';

@NgModule({
  declarations: [
    CommonComponent,
    CheyuthaBankStateLevelComponent,
    CheyuthaBankDistrictLevelComponent,
    CheyuthaBankMandalLevelComponent,
    CheyuthaBankRbkLevelComponent,
    CheyuthaBankPendingReportComponent,
    CheyuthaBankAcceptedReportComponent,
    CheyuthaBankRejectedReportComponent,
    LdmbankWiseStateReportComponent,
    LdmbankWiseBranchReportComponent,
    LdmbankWiseDistrictReportComponent,
    LdmbankWiseMandalReportComponent,
    LdmbankWiseRbkReportComponent,
    LdmbankWisePendingReportComponent,
    LdmbankWiseApprovedRejectedReportComponent,
  ],
  imports: [
    CommonModule,
    StateLevelSLBCRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BankerModuleModule,
    LdmBankWiseModuleModule
  ],
})
export class StateLevelSLBCModule {}
