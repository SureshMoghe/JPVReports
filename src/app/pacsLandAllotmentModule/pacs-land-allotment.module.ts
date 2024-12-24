import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacsLandAllotmentRoutingModule } from './pacs-land-allotment-routing.module';
import { PlaStateComponent } from './components/pla-state/pla-state.component';
import { PlaDistrictComponent } from './components/pla-district/pla-district.component';
import { PlaMandalComponent } from './components/pla-mandal/pla-mandal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlaStateComponent, PlaDistrictComponent, PlaMandalComponent],
  imports: [
    CommonModule,
    PacsLandAllotmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [PlaStateComponent, PlaDistrictComponent, PlaMandalComponent],
})
export class PacsLandAllotmentModule {}
