import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmcuInspectionRoutingModule } from './amcu-inspection-routing.module';
import { AmcuInspectionStateComponent } from './components/amcu-inspection-state/amcu-inspection-state.component';
import { AmcuInspectionDistrictComponent } from './components/amcu-inspection-district/amcu-inspection-district.component';
import { AmcuInspectedSocitiesComponent } from './components/amcu-inspected-socities/amcu-inspected-socities.component';
import { AmcuNotInspectedSocitiesComponent } from './components/amcu-not-inspected-socities/amcu-not-inspected-socities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AmcuInspectionMentorComponent } from './components/amcu-inspection-mentor/amcu-inspection-mentor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AmcuInspectionStateComponent,
    AmcuInspectionDistrictComponent,
    AmcuInspectedSocitiesComponent,
    AmcuNotInspectedSocitiesComponent,
    AmcuInspectionMentorComponent
  ],
  imports: [
    CommonModule,
    AmcuInspectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    AmcuInspectionStateComponent,
    AmcuInspectionDistrictComponent,
    AmcuInspectedSocitiesComponent,
    AmcuNotInspectedSocitiesComponent,
    AmcuInspectionMentorComponent
  ]
})
export class AmcuInspectionModule { }
