import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpuacBankAccRoutingModule } from './mpuac-bank-acc-routing.module';
import { MpuacBankAccStateComponent } from './components/mpuac-bank-acc-state/mpuac-bank-acc-state.component';
import { MpuacBankAccMentorComponent } from './components/mpuac-bank-acc-mentor/mpuac-bank-acc-mentor.component';
import { MpuacBankAccRbkComponent } from './components/mpuac-bank-acc-rbk/mpuac-bank-acc-rbk.component';
import { MpuacBankAccDetailComponent } from './components/mpuac-bank-acc-detail/mpuac-bank-acc-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MpuacBankAccMandalComponent } from './components/mpuac-bank-acc-mandal/mpuac-bank-acc-mandal.component';
import { MdacNotCreatedRbkListComponent } from './components/mdac-not-created-rbk-list/mdac-not-created-rbk-list.component';
import { MdacBankAccVillageComponent } from './components/mdac-bank-acc-village/mdac-bank-acc-village.component';
import { MdacNotCreatedStateLevelComponent } from './components/mdac-not-created-state-level/mdac-not-created-state-level.component';
import { SharedModule } from '../shared/shared.module';
import { MdacBankAccMentorComponent } from './components/mdac-bank-acc-mentor/mdac-bank-acc-mentor.component';


@NgModule({
  declarations: [
    MpuacBankAccStateComponent,
     MpuacBankAccMentorComponent,
     MpuacBankAccRbkComponent,
     MpuacBankAccDetailComponent,
     MpuacBankAccMandalComponent,
     MdacNotCreatedRbkListComponent,
     MdacBankAccVillageComponent,
     MdacNotCreatedStateLevelComponent,
     MdacBankAccMentorComponent
    ],
  imports: [
    CommonModule,
    MpuacBankAccRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    MpuacBankAccStateComponent,
    MpuacBankAccMentorComponent,
    MpuacBankAccRbkComponent,
    MpuacBankAccDetailComponent,
    MpuacBankAccMandalComponent,
    MdacNotCreatedRbkListComponent,
    MdacBankAccVillageComponent,
    MdacNotCreatedStateLevelComponent,
    MdacBankAccMentorComponent
  ]
})
export class MpuacBankAccModule { }
