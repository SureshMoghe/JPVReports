import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmcuLandAllotmentStateComponent } from './components/amcu-land-allotment-state/amcu-land-allotment-state.component';
import { AmcuLandAllotmentDistrictComponent } from './components/amcu-land-allotment-district/amcu-land-allotment-district.component';
import { AmcuLandAllotmentMandalComponent } from './components/amcu-land-allotment-mandal/amcu-land-allotment-mandal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AmcuLandAllotmentStateComponent,
    AmcuLandAllotmentDistrictComponent,
    AmcuLandAllotmentMandalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    AmcuLandAllotmentStateComponent,
    AmcuLandAllotmentDistrictComponent,
    AmcuLandAllotmentMandalComponent,
  ],
})
export class AmcuLandAllotmentModule {}
