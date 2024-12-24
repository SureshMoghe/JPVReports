import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmcuHandingOverModuleRoutingModule } from './amcu-handing-over-module-routing.module';
import { AmcuHandingOverStateComponent } from './components/amcu-handing-over-state/amcu-handing-over-state.component';
import { AmcuHandingOverMentorComponent } from './components/amcu-handing-over-mentor/amcu-handing-over-mentor.component';
import { AmcuHandingOverRbkComponent } from './components/amcu-handing-over-rbk/amcu-handing-over-rbk.component';
import { AmcuHandingOverDetailComponent } from './components/amcu-handing-over-detail/amcu-handing-over-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { AmcuHoNotSubmittedVillagesComponent } from './components/amcu-ho-not-submitted-villages/amcu-ho-not-submitted-villages.component';

@NgModule({
  declarations: [
    AmcuHandingOverStateComponent,
    AmcuHandingOverMentorComponent,
    AmcuHandingOverRbkComponent,
    AmcuHandingOverDetailComponent,
    AmcuHoNotSubmittedVillagesComponent,
  ],
  imports: [
    CommonModule,
    AmcuHandingOverModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    AmcuHandingOverStateComponent,
    AmcuHandingOverMentorComponent,
    AmcuHandingOverRbkComponent,
    AmcuHandingOverDetailComponent,
    AmcuHoNotSubmittedVillagesComponent,
  ],
})
export class AmcuHandingOverModuleModule {}
