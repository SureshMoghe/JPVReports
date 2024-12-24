import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VafDistrictLevelComponent } from './components/vaf-district-level/vaf-district-level.component';
import { VafMandalLevelComponent } from './components/vaf-mandal-level/vaf-mandal-level.component';
import { VafStateLevelComponent } from './components/vaf-state-level/vaf-state-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { VafRbkLevelComponent } from './components/vaf-rbk-level/vaf-rbk-level.component';
import { VafDetailLevelComponent } from './components/vaf-detail-level/vaf-detail-level.component';
import { VafMentorLevelComponent } from './components/vaf-mentor-level/vaf-mentor-level.component';

@NgModule({
  declarations: [
    VafDistrictLevelComponent,
    VafMandalLevelComponent,
    VafStateLevelComponent,
    VafRbkLevelComponent,
    VafDetailLevelComponent,
    VafMentorLevelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    VafDistrictLevelComponent,
    VafMandalLevelComponent,
    VafStateLevelComponent,
    VafRbkLevelComponent,
    VafDetailLevelComponent,
    VafMentorLevelComponent,
  ],
})
export class VolunteerAsFarmerModule {}
