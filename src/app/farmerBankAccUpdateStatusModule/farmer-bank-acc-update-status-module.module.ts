import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerBankAccUpdateStatusModuleRoutingModule } from './farmer-bank-acc-update-status-module-routing.module';
import { FarmerBAUStatusStateComponent } from './components/farmer-baustatus-state/farmer-baustatus-state.component';
import { FarmerBAUStatusDistrictComponent } from './components/farmer-baustatus-district/farmer-baustatus-district.component';
import { FarmerBAUStatusMandalComponent } from './components/farmer-baustatus-mandal/farmer-baustatus-mandal.component';
import { FarmerBAUStatusRbkComponent } from './components/farmer-baustatus-rbk/farmer-baustatus-rbk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerBAUInvalidAccontsComponent } from './components/farmer-bauinvalid-acconts/farmer-bauinvalid-acconts.component';
import { FarmerBAUPendingAtDAComponent } from './components/farmer-baupending-at-da/farmer-baupending-at-da.component';
import { FarmerBAUVerifiedAcceptedRejectedComponent } from './components/farmer-bauverified-accepted-rejected/farmer-bauverified-accepted-rejected.component';
import { FarmerBAUPendingAtMentorComponent } from './components/farmer-baupending-at-mentor/farmer-baupending-at-mentor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: 
  [
    FarmerBAUStatusStateComponent,
     FarmerBAUStatusDistrictComponent,
      FarmerBAUStatusMandalComponent,
      FarmerBAUStatusRbkComponent,
      FarmerBAUInvalidAccontsComponent,
      FarmerBAUPendingAtDAComponent,
      FarmerBAUVerifiedAcceptedRejectedComponent,
      FarmerBAUPendingAtMentorComponent,
    ],
  imports: [
    CommonModule,
    FarmerBankAccUpdateStatusModuleRoutingModule,
    FormsModule,
   ReactiveFormsModule,
   DataTablesModule,
   SharedModule
  ],
  exports: [
    FarmerBAUStatusStateComponent,
     FarmerBAUStatusDistrictComponent,
      FarmerBAUStatusMandalComponent,
      FarmerBAUStatusRbkComponent,
      FarmerBAUInvalidAccontsComponent,
      FarmerBAUPendingAtDAComponent,
      FarmerBAUVerifiedAcceptedRejectedComponent,
      FarmerBAUPendingAtMentorComponent,
  ]
})
export class FarmerBankAccUpdateStatusModuleModule { }
