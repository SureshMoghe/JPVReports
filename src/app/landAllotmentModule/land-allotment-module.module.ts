import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandAllotmentModuleRoutingModule } from './land-allotment-module-routing.module';
import { LandAllotmentStateComponent } from './components/land-allotment-state/land-allotment-state.component';
import { LandAllotmentDistrictComponent } from './components/land-allotment-district/land-allotment-district.component';
import { LandAllotmentMandalComponent } from './components/land-allotment-mandal/land-allotment-mandal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandAllotmentStateComponent,
     LandAllotmentDistrictComponent,
      LandAllotmentMandalComponent
    ],
  imports: [
    CommonModule,
    LandAllotmentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
  exports : [
    LandAllotmentStateComponent,
     LandAllotmentDistrictComponent,
      LandAllotmentMandalComponent
  ]
})
export class LandAllotmentModuleModule { }
