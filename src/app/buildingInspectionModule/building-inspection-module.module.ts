import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingInspectionModuleRoutingModule } from './building-inspection-module-routing.module';
import { BuildingInspectionStateComponent } from './components/building-inspection-state/building-inspection-state.component';
import { BuildingInspectionMentorComponent } from './components/building-inspection-mentor/building-inspection-mentor.component';
import { BuildingInspectionRbkComponent } from './components/building-inspection-rbk/building-inspection-rbk.component';
import { BuildingInspectionDetailComponent } from './components/building-inspection-detail/building-inspection-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BuildingInspectionStateComponent,
     BuildingInspectionMentorComponent,
     BuildingInspectionRbkComponent,
     BuildingInspectionDetailComponent
    ],
  imports: [
    CommonModule,
    BuildingInspectionModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    BuildingInspectionStateComponent,
    BuildingInspectionMentorComponent,
    BuildingInspectionRbkComponent,
    BuildingInspectionDetailComponent
  ]
})
export class BuildingInspectionModuleModule { }
