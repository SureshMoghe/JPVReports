import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerMpussRegRoutingModule } from './farmer-mpuss-reg-routing.module';
import { FarmerMpussRegStateComponent } from './components/farmer-mpuss-reg-state/farmer-mpuss-reg-state.component';
import { FarmerMpussRegDistrictComponent } from './components/farmer-mpuss-reg-district/farmer-mpuss-reg-district.component';
import { FarmerMpussRegRbkComponent } from './components/farmer-mpuss-reg-rbk/farmer-mpuss-reg-rbk.component';
import { FarmerMpussRegVillageComponent } from './components/farmer-mpuss-reg-village/farmer-mpuss-reg-village.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerMpussRegDetailComponent } from './components/farmer-mpuss-reg-detail/farmer-mpuss-reg-detail.component';
import { FarmerRegistrationDetailComponent } from './components/farmer-registration-detail/farmer-registration-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FarmerRegistrationStatusDetailsComponent } from './components/farmer-registration-status-details/farmer-registration-status-details.component';
import { FarmerRegistrationMentorComponent } from './components/farmer-registration-mentor/farmer-registration-mentor.component';


@NgModule({
  declarations: [
    FarmerMpussRegStateComponent, 
    FarmerMpussRegDistrictComponent, 
    FarmerMpussRegRbkComponent, 
    FarmerMpussRegVillageComponent,
    FarmerMpussRegDetailComponent,
    FarmerRegistrationDetailComponent,
    FarmerRegistrationStatusDetailsComponent,
    FarmerRegistrationMentorComponent
  ],
  imports: [
    CommonModule,
    FarmerMpussRegRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerMpussRegStateComponent, 
    FarmerMpussRegDistrictComponent, 
    FarmerMpussRegRbkComponent, 
    FarmerMpussRegVillageComponent,
    FarmerMpussRegDetailComponent,
    FarmerRegistrationDetailComponent,
    FarmerRegistrationStatusDetailsComponent,
    FarmerRegistrationMentorComponent
  ]
})
export class FarmerMpussRegModule { }
