import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmcuNetworkInspectionRoutingModule } from './amcu-network-inspection-routing.module';
import { AmcuNetworkStateComponent } from './components/amcu-network-state/amcu-network-state.component';
import { AmcuNetworkDistrictComponent } from './components/amcu-network-district/amcu-network-district.component';
import { NetworkSubmittedVillagesComponent } from './components/network-submitted-villages/network-submitted-villages.component';
import { NetworkNotSubmittedVillagesComponent } from './components/network-not-submitted-villages/network-not-submitted-villages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AmcuNetworkStateComponent,
    AmcuNetworkDistrictComponent,
    NetworkSubmittedVillagesComponent,
    NetworkNotSubmittedVillagesComponent
  ],
  imports: [
    CommonModule,
    AmcuNetworkInspectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    AmcuNetworkStateComponent,
    AmcuNetworkDistrictComponent,
    NetworkSubmittedVillagesComponent,
    NetworkNotSubmittedVillagesComponent
  ]
})
export class AmcuNetworkInspectionModule { }
