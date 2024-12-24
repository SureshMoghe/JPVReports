import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhLevelRoutingModule } from './ah-level-routing.module';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { CommonComponent } from './components/common/common.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingAHLevelLoginComponent } from './components/cheyuthaGrounding/grounding-ahlevel-login/grounding-ahlevel-login.component';import { JdLevelModule } from '../jdLevel/jd-level.module';
import { LoanSanctionandGroundingReportComponent } from './components/loanSanctionAndGrounding/loan-sanctionand-grounding-report/loan-sanctionand-grounding-report.component';

@NgModule({
  declarations: [
    CommonComponent,
    GroundingDetailLevelReportComponent,
    GroundingApprovedRejectedReportComponent,
    GroundingMandalLevelReportComponent,
    GroundingAHLevelLoginComponent,
    LoanSanctionandGroundingReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AhLevelRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    CheyuthaGroundingModule,
    JdLevelModule
  ],
})
export class AhLevelModule {}
