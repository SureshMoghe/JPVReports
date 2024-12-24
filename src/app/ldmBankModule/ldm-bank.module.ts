import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdmBankRoutingModule } from './ldm-bank-routing.module';
import { LdmBankStateComponent } from './components/ldm-bank-state/ldm-bank-state.component';
import { LdmBankDistrictComponent } from './components/ldm-bank-district/ldm-bank-district.component';
import { LdmBankRbkComponent } from './components/ldm-bank-rbk/ldm-bank-rbk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LdmBankStateComponent,
    LdmBankDistrictComponent,
    LdmBankRbkComponent
  ],
  imports: [
    CommonModule,
    LdmBankRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports : [
    LdmBankStateComponent,
    LdmBankDistrictComponent,
    LdmBankRbkComponent
  ]
})
export class LdmBankModule { }
