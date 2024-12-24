import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageMeetingRoutingModule } from './village-meeting-routing.module';
import { VillageMeetingRbkComponent } from './components/village-meeting-rbk/village-meeting-rbk.component';
import { VillageMeetingStateComponent } from './components/village-meeting-state/village-meeting-state.component';
import { VillageMeetingMentorComponent } from './components/village-meeting-mentor/village-meeting-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { VillageMeetingVillageComponent } from './components/village-meeting-village/village-meeting-village.component';
import { VillageMeetingAttendanceComponent } from './components/village-meeting-attendance/village-meeting-attendance.component';
import { VillageMeetingFunctionariesComponent } from './components/village-meeting-functionaries/village-meeting-functionaries.component';
import { VillageMeetingSecAndAssSecComponent } from './components/village-meeting-sec-and-ass-sec/village-meeting-sec-and-ass-sec.component';
import { VillageMeetingBuildingInspectComponent } from './components/village-meeting-building-inspect/village-meeting-building-inspect.component';
import { VillageMeetingCalibrationComponent } from './components/village-meeting-calibration/village-meeting-calibration.component';
import { VillageMeetingPromotersComponent } from './components/village-meeting-promoters/village-meeting-promoters.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    VillageMeetingStateComponent,
    VillageMeetingMentorComponent,
    VillageMeetingRbkComponent,
    VillageMeetingVillageComponent,
    VillageMeetingAttendanceComponent,
    VillageMeetingFunctionariesComponent,
    VillageMeetingSecAndAssSecComponent,
    VillageMeetingBuildingInspectComponent,
    VillageMeetingCalibrationComponent,
    VillageMeetingPromotersComponent],
  imports: [
    CommonModule,
    VillageMeetingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    VillageMeetingStateComponent,
    VillageMeetingMentorComponent,
    VillageMeetingRbkComponent,
    VillageMeetingVillageComponent,
    VillageMeetingAttendanceComponent,
    VillageMeetingFunctionariesComponent,
    VillageMeetingSecAndAssSecComponent,
    VillageMeetingBuildingInspectComponent,
    VillageMeetingCalibrationComponent,
    VillageMeetingPromotersComponent
  ],
})
export class VillageMeetingModule { }
