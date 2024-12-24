import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerSmsRoutingModule } from './farmer-sms-routing.module';
import { FarmerSmsMandalComponent } from './components/farmer-sms-mandal/farmer-sms-mandal.component';
import { FarmerSmsRbkComponent } from './components/farmer-sms-rbk/farmer-sms-rbk.component';
import { FarmerSmsMentorComponent } from './components/farmer-sms-mentor/farmer-sms-mentor.component';
import { FarmerSmsDistrictComponent } from './components/farmer-sms-district/farmer-sms-district.component';
import { FarmerSmsStateComponent } from './components/farmer-sms-state/farmer-sms-state.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerSmsDetailComponent } from './components/farmer-sms-detail/farmer-sms-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FarmerSmsStateComponent,
    FarmerSmsDistrictComponent,
    FarmerSmsMandalComponent,
    FarmerSmsRbkComponent,
    FarmerSmsMentorComponent,
    FarmerSmsDetailComponent
  ],
  imports: [
    CommonModule,
    FarmerSmsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerSmsStateComponent,
    FarmerSmsDistrictComponent,
    FarmerSmsMandalComponent,
    FarmerSmsRbkComponent, 
    FarmerSmsMentorComponent,
    FarmerSmsDetailComponent
  ]
})
export class FarmerSmsModule { }
