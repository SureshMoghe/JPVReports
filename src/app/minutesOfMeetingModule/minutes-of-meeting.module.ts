import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinutesOfMeetingRoutingModule } from './minutes-of-meeting-routing.module';
import { MomStateComponent } from './components/mom-state/mom-state.component';
import { MomDistrictComponent } from './components/mom-district/mom-district.component';
import { MomMandalComponent } from './components/mom-mandal/mom-mandal.component';
import { MomRbkComponent } from './components/mom-rbk/mom-rbk.component';
import { MomVillageComponent } from './components/mom-village/mom-village.component';
import { MomMentorComponent } from './components/mom-mentor/mom-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MomStateComponent,
    MomDistrictComponent,
    MomMandalComponent,
    MomRbkComponent,
    MomVillageComponent,
    MomMentorComponent,
  ],
  imports: [
    CommonModule,
    MinutesOfMeetingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports:[
    MomStateComponent,
    MomDistrictComponent,
    MomMandalComponent,
    MomRbkComponent,
    MomVillageComponent,
    MomMentorComponent,
  ]
})
export class MinutesOfMeetingModule {}
