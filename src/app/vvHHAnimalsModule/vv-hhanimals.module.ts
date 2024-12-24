import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VvHHAnimalsRoutingModule } from './vv-hhanimals-routing.module';
import { VvHHAnimalsStateComponent } from './components/vv-hhanimals-state/vv-hhanimals-state.component';
import { VvHHAnimalsDistrictComponent } from './components/vv-hhanimals-district/vv-hhanimals-district.component';
import { VvHHAnimalsMandalComponent } from './components/vv-hhanimals-mandal/vv-hhanimals-mandal.component';
import { VvHHAnimalsRbkComponent } from './components/vv-hhanimals-rbk/vv-hhanimals-rbk.component';
import { VvHHAnimalsVillageComponent } from './components/vv-hhanimals-village/vv-hhanimals-village.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VvHHAnimalsMentorComponent } from './components/vv-hhanimals-mentor/vv-hhanimals-mentor.component';
import { VvHHAnimalsClusterComponent } from './components/vv-hhanimals-cluster/vv-hhanimals-cluster.component';
import { SharedModule } from '../shared/shared.module';
import { VvHhanimalsPendingHHComponent } from './components/vv-hhanimals-pending-hh/vv-hhanimals-pending-hh.component';

@NgModule({
  declarations: [
    VvHHAnimalsStateComponent,
    VvHHAnimalsDistrictComponent,
    VvHHAnimalsMandalComponent,
    VvHHAnimalsRbkComponent,
    VvHHAnimalsVillageComponent,
    VvHHAnimalsMentorComponent,
    VvHHAnimalsClusterComponent,
    VvHhanimalsPendingHHComponent
  ],
  imports: [
    CommonModule,
    VvHHAnimalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    VvHHAnimalsStateComponent,
    VvHHAnimalsDistrictComponent,
    VvHHAnimalsMandalComponent,
    VvHHAnimalsRbkComponent,
    VvHHAnimalsVillageComponent,
    VvHHAnimalsMentorComponent,
    VvHHAnimalsClusterComponent,
    VvHhanimalsPendingHHComponent
  ]
})
export class VvHHAnimalsModule {}
