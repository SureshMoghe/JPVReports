import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerNatureOfUnitRoutingModule } from './farmer-nature-of-unit-routing.module';
import { FarmerNatureOfUnitStateComponent } from './components/farmer-nature-of-unit-state/farmer-nature-of-unit-state.component';
import { FarmerNatureOfUnitDistrictComponent } from './components/farmer-nature-of-unit-district/farmer-nature-of-unit-district.component';
import { FarmerNatureOfUnitMandalComponent } from './components/farmer-nature-of-unit-mandal/farmer-nature-of-unit-mandal.component';
import { FarmerNatureOfUnitDetailComponent } from './components/farmer-nature-of-unit-detail/farmer-nature-of-unit-detail.component';
import { FarmerNatureOfUnitBankDetailComponent } from './components/farmer-nature-of-unit-bank-detail/farmer-nature-of-unit-bank-detail.component';
import { FarmerNatureOfUnitBankStateComponent } from './components/farmer-nature-of-unit-bank-state/farmer-nature-of-unit-bank-state.component';
import { FarmerNatureOfUnitBankDistrictComponent } from './components/farmer-nature-of-unit-bank-district/farmer-nature-of-unit-bank-district.component';
import { FarmerNatureOfUnitBankBranchComponent } from './components/farmer-nature-of-unit-bank-branch/farmer-nature-of-unit-bank-branch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerNatureOfUnitBankDistrictLoginComponent } from './components/farmer-nature-of-unit-bank-district-login/farmer-nature-of-unit-bank-district-login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
      FarmerNatureOfUnitStateComponent,
      FarmerNatureOfUnitDistrictComponent,
      FarmerNatureOfUnitMandalComponent, 
      FarmerNatureOfUnitDetailComponent,
      FarmerNatureOfUnitBankDetailComponent,
      FarmerNatureOfUnitBankStateComponent,
      FarmerNatureOfUnitBankDistrictComponent, 
      FarmerNatureOfUnitBankBranchComponent,
       FarmerNatureOfUnitBankDistrictLoginComponent
      ],
  imports: [
    CommonModule,
    FarmerNatureOfUnitRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports : [
    FarmerNatureOfUnitStateComponent,
    FarmerNatureOfUnitDistrictComponent,
    FarmerNatureOfUnitMandalComponent, 
    FarmerNatureOfUnitDetailComponent,
    FarmerNatureOfUnitBankDetailComponent,
    FarmerNatureOfUnitBankStateComponent,
    FarmerNatureOfUnitBankDistrictComponent, 
    FarmerNatureOfUnitBankBranchComponent,
    FarmerNatureOfUnitBankDistrictLoginComponent
  ]
})
export class FarmerNatureOfUnitModule { }
