import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerFarmerDataModuleRoutingModule } from './volunteer-farmer-data-module-routing.module';
import { VvFarmerDataStateComponent } from './components/vv-farmer-data-state/vv-farmer-data-state.component';
import { VvFarmerDataDistrictComponent } from './components/vv-farmer-data-district/vv-farmer-data-district.component';
import { VvFarmerDataMandalComponent } from './components/vv-farmer-data-mandal/vv-farmer-data-mandal.component';
import { VvFarmerDataRoutesComponent } from './components/vv-farmer-data-routes/vv-farmer-data-routes.component';
import { VvFarmerDataRbkComponent } from './components/vv-farmer-data-rbk/vv-farmer-data-rbk.component';
import { VvFarmerDataVillageComponent } from './components/vv-farmer-data-village/vv-farmer-data-village.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { VvFarmerDataMentorComponent } from './components/vv-farmer-data-mentor/vv-farmer-data-mentor.component';
import { VvFarmerVolunteersListComponent } from './components/vv-farmer-volunteers-list/vv-farmer-volunteers-list.component';
import { VvFarmerApprovedListComponent } from './components/vv-farmer-approved-list/vv-farmer-approved-list.component';
import { VvFarmerVolunteersLoggedInListComponent } from './components/vv-farmer-volunteers-logged-in-list/vv-farmer-volunteers-logged-in-list.component';
import { VvFarmerDataRouteWiseComponent } from './components/vv-farmer-data-route-wise/vv-farmer-data-route-wise.component';
import { VvFarmerDataVillageWiseComponent } from './components/vv-farmer-data-village-wise/vv-farmer-data-village-wise.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VvFarmerDataStateComponent,
    VvFarmerDataDistrictComponent,
    VvFarmerDataMandalComponent,
    VvFarmerDataRoutesComponent,
    VvFarmerDataRbkComponent,
    VvFarmerDataVillageComponent,
    VvFarmerDataMentorComponent,
    VvFarmerVolunteersListComponent,
    VvFarmerApprovedListComponent,
    VvFarmerVolunteersLoggedInListComponent,
    VvFarmerDataRouteWiseComponent,
    VvFarmerDataVillageWiseComponent
  ],
  imports: [
    CommonModule,
    VolunteerFarmerDataModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    VvFarmerDataStateComponent,
    VvFarmerDataDistrictComponent,
    VvFarmerDataMandalComponent,
    VvFarmerDataRoutesComponent,
    VvFarmerDataRbkComponent,
    VvFarmerDataVillageComponent,
    VvFarmerDataMentorComponent,
    VvFarmerVolunteersListComponent,
    VvFarmerApprovedListComponent,
    VvFarmerVolunteersLoggedInListComponent,
    VvFarmerDataRouteWiseComponent,
    VvFarmerDataVillageWiseComponent
  ]
})
export class VolunteerFarmerDataModuleModule { }
