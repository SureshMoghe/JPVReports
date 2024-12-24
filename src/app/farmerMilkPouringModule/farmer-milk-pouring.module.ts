import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerMilkPouringRoutingModule } from './farmer-milk-pouring-routing.module';
import { FarmerMilkPouringStateComponent } from './components/farmer-milk-pouring-state/farmer-milk-pouring-state.component';
import { FarmerMilkPouringDistrictComponent } from './components/farmer-milk-pouring-district/farmer-milk-pouring-district.component';
import { FarmerMilkPouringRouteComponent } from './components/farmer-milk-pouring-route/farmer-milk-pouring-route.component';
import { FarmerMilkPouringMandalComponent } from './components/farmer-milk-pouring-mandal/farmer-milk-pouring-mandal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerMilkPouringMentorComponent } from './components/farmer-milk-pouring-mentor/farmer-milk-pouring-mentor.component';
import { SharedModule } from '../shared/shared.module';
import { FarmerMilkPouringDetailComponent } from './components/farmer-milk-pouring-detail/farmer-milk-pouring-detail.component';
import { VolunteerWiseMilkPouringComponent } from './components/volunteer-wise-milk-pouring/volunteer-wise-milk-pouring.component';
import { SurveyedHhMilkPouringFarmersComponent } from './components/surveyed-hh-milk-pouring-farmers/surveyed-hh-milk-pouring-farmers.component';
import { SurveyedHhNonMilkPouringFarmersComponent } from './components/surveyed-hh-non-milk-pouring-farmers/surveyed-hh-non-milk-pouring-farmers.component';

@NgModule({
  declarations: [
    FarmerMilkPouringStateComponent,
    FarmerMilkPouringDistrictComponent,
    FarmerMilkPouringRouteComponent,
    FarmerMilkPouringMandalComponent,
    FarmerMilkPouringMentorComponent,
    FarmerMilkPouringDetailComponent,
    VolunteerWiseMilkPouringComponent,
    SurveyedHhMilkPouringFarmersComponent,
    SurveyedHhNonMilkPouringFarmersComponent
  ],
  imports: [
    CommonModule,
    FarmerMilkPouringRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerMilkPouringStateComponent,
    FarmerMilkPouringDistrictComponent,
    FarmerMilkPouringRouteComponent,
    FarmerMilkPouringMandalComponent,
    FarmerMilkPouringMentorComponent,
    FarmerMilkPouringDetailComponent,
    VolunteerWiseMilkPouringComponent,
    SurveyedHhMilkPouringFarmersComponent,
    SurveyedHhNonMilkPouringFarmersComponent
  ]
})
export class FarmerMilkPouringModule {}
