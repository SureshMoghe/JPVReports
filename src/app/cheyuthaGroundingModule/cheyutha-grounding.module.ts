import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheyuthaGroundingRoutingModule } from './cheyutha-grounding-routing.module';
import { GroundingDistrictLevelComponent } from './components/grounding-district-level/grounding-district-level.component';
import { GroundingMandalLevelComponent } from './components/grounding-mandal-level/grounding-mandal-level.component';
import { GroundingDetailLevelComponent } from './components/grounding-detail-level/grounding-detail-level.component';
import { GroundingApprovedRejectedComponent } from './components/grounding-approved-rejected/grounding-approved-rejected.component';
import { GroundingAhLevelLoginComponent } from './components/grounding-ah-level-login/grounding-ah-level-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { GroundingStateLevelComponent } from './components/grounding-state-level/grounding-state-level.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GroundingStateLevelComponent,
    GroundingDistrictLevelComponent,
    GroundingMandalLevelComponent,
    GroundingDetailLevelComponent,
    GroundingApprovedRejectedComponent,
    GroundingAhLevelLoginComponent,
  ],
  imports: [
    CommonModule,
    CheyuthaGroundingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    GroundingStateLevelComponent,
    GroundingDistrictLevelComponent,
    GroundingMandalLevelComponent,
    GroundingDetailLevelComponent,
    GroundingApprovedRejectedComponent,
    GroundingAhLevelLoginComponent,
  ],
})
export class CheyuthaGroundingModule {}
