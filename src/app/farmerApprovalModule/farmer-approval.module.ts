import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerApprovalRoutingModule } from './farmer-approval-routing.module';
import { FarmerApprovalStateComponent } from './components/farmer-approval-state/farmer-approval-state.component';
import { FarmerApprovalDistrictComponent } from './components/farmer-approval-district/farmer-approval-district.component';
import { FarmerApprovalMandalComponent } from './components/farmer-approval-mandal/farmer-approval-mandal.component';
import { FarmerApprovalRoutesComponent } from './components/farmer-approval-routes/farmer-approval-routes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerApprovalMentorComponent } from './components/farmer-approval-mentor/farmer-approval-mentor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FarmerApprovalStateComponent,
    FarmerApprovalDistrictComponent,
    FarmerApprovalMandalComponent,
    FarmerApprovalRoutesComponent,
    FarmerApprovalMentorComponent
  ],
  imports: [
    CommonModule,
    FarmerApprovalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerApprovalStateComponent,
    FarmerApprovalDistrictComponent,
    FarmerApprovalMandalComponent,
    FarmerApprovalRoutesComponent,
    FarmerApprovalMentorComponent
  ]
})
export class FarmerApprovalModule { }
