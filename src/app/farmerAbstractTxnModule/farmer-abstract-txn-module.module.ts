import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerAbstractTxnModuleRoutingModule } from './farmer-abstract-txn-module-routing.module';
import { FarmerAbstractTxnStateComponent } from './components/farmer-abstract-txn-state/farmer-abstract-txn-state.component';
import { FarmerAbstractTxnDistrictComponent } from './components/farmer-abstract-txn-district/farmer-abstract-txn-district.component';
import { FarmerAbstractTxnMandalComponent } from './components/farmer-abstract-txn-mandal/farmer-abstract-txn-mandal.component';
import { FarmerAbstractTxnSocietyComponent } from './components/farmer-abstract-txn-society/farmer-abstract-txn-society.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerAbstractTxnRbkComponent } from './components/farmer-abstract-txn-rbk/farmer-abstract-txn-rbk.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FarmerAbstractTxnStateComponent,
     FarmerAbstractTxnDistrictComponent,
     FarmerAbstractTxnMandalComponent,
     FarmerAbstractTxnSocietyComponent,
     FarmerAbstractTxnRbkComponent
    ],
  imports: [
    CommonModule,
    FarmerAbstractTxnModuleRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    FarmerAbstractTxnStateComponent,
    FarmerAbstractTxnDistrictComponent,
    FarmerAbstractTxnMandalComponent,
    FarmerAbstractTxnSocietyComponent,
    FarmerAbstractTxnRbkComponent
  ]
})
export class FarmerAbstractTxnModuleModule { }
