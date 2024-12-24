import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerSchemeRoutingModule } from './farmer-scheme-routing.module';
import { FarmerSchemeStateComponent } from './components/farmer-scheme-state/farmer-scheme-state.component';
import { FarmerSchemeDistrictComponent } from './components/farmer-scheme-district/farmer-scheme-district.component';
import { FarmerSchemeRouteComponent } from './components/farmer-scheme-route/farmer-scheme-route.component';
import { FarmerSchemeMandalComponent } from './components/farmer-scheme-mandal/farmer-scheme-mandal.component';
import { FarmerSchemeRbkComponent } from './components/farmer-scheme-rbk/farmer-scheme-rbk.component';
import { FarmerSchemeMentorComponent } from './components/farmer-scheme-mentor/farmer-scheme-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerSchemeVillageComponent } from './components/farmer-scheme-village/farmer-scheme-village.component';
import { NonMilkPouringComponent } from './components/non-milk-pouring/non-milk-pouring.component';
import { SharedModule } from '../shared/shared.module';
import { NonMilkPouringMandalComponent } from './components/non-milk-pouring-mandal/non-milk-pouring-mandal.component';

@NgModule({
  declarations: [
    FarmerSchemeStateComponent,
    FarmerSchemeDistrictComponent,
    FarmerSchemeRouteComponent,
    FarmerSchemeMandalComponent,
    FarmerSchemeRbkComponent,
    FarmerSchemeMentorComponent,
    FarmerSchemeVillageComponent,
    NonMilkPouringComponent,
    NonMilkPouringMandalComponent,
  ],
  imports: [
    CommonModule,
    FarmerSchemeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerSchemeStateComponent,
    FarmerSchemeDistrictComponent,
    FarmerSchemeRouteComponent,
    FarmerSchemeMandalComponent,
    FarmerSchemeRbkComponent,
    FarmerSchemeMentorComponent,
    FarmerSchemeVillageComponent,
    NonMilkPouringComponent,
    NonMilkPouringMandalComponent,
  ],
})
export class FarmerSchemeModule {}
