import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankerModuleRoutingModule } from './banker-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CheyuthaBankRbkComponent } from './components/cheyutha-bank-rbk/cheyutha-bank-rbk.component';
import { CheyuthaBankDistrictComponent } from './components/cheyutha-bank-district/cheyutha-bank-district.component';
import { CheyuthaBankStateComponent } from './components/cheyutha-bank-state/cheyutha-bank-state.component';
import { CheyuthaBankPendingComponent } from './components/cheyutha-bank-pending/cheyutha-bank-pending.component';
import { CheyuthaBankAcceptedComponent } from './components/cheyutha-bank-accepted/cheyutha-bank-accepted.component';
import { CheyuthaBankRejectedComponent } from './components/cheyutha-bank-rejected/cheyutha-bank-rejected.component';
import { CheyuthaBankMandalComponent } from './components/cheyutha-bank-mandal/cheyutha-bank-mandal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CheyuthaBankStateComponent,
    CheyuthaBankDistrictComponent,
    CheyuthaBankRbkComponent,
    CheyuthaBankPendingComponent,
    CheyuthaBankAcceptedComponent,
    CheyuthaBankRejectedComponent,
    CheyuthaBankMandalComponent
  ],
  imports: [
    CommonModule,
    BankerModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports : [
    CheyuthaBankStateComponent,
    CheyuthaBankDistrictComponent,
    CheyuthaBankRbkComponent,
    CheyuthaBankPendingComponent,
    CheyuthaBankAcceptedComponent,
    CheyuthaBankRejectedComponent,
    CheyuthaBankMandalComponent
  ]
})
export class BankerModuleModule { }
