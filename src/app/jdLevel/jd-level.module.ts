import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JdLevelRoutingModule } from './jd-level-routing.module';
import { CommonComponent } from './components/common/common.component';
import { StateLevelModule } from '../stateLevel/state-level.module';
import { BankerLoanSanctionAndGroundingComponent } from './components/banker-loan-sanction-and-grounding/banker-loan-sanction-and-grounding.component';
import { LoanSanctionAndGroundingComponent } from './components/loan-sanction-and-grounding/loan-sanction-and-grounding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CommonComponent,
    BankerLoanSanctionAndGroundingComponent,
    LoanSanctionAndGroundingComponent,
    GroundingDistrictLevelReportComponent,
    GroundingMandalLevelReportComponent,
    GroundingDetailLevelReportComponent,
    PasswordResetComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    JdLevelRoutingModule,
    StateLevelModule,
    CheyuthaGroundingModule,
    SharedModule,
  ],
  exports: [
    LoanSanctionAndGroundingComponent
  ]
})
export class JdLevelModule { }
 