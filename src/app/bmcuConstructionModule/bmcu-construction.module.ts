import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmcuConstructionRoutingModule } from './bmcu-construction-routing.module';
import { BmcuConstructionStateComponent } from './components/bmcu-construction-state/bmcu-construction-state.component';
import { BmcuConstructionDistrictComponent } from './components/bmcu-construction-district/bmcu-construction-district.component';
import { BmcuConstructionMandalComponent } from './components/bmcu-construction-mandal/bmcu-construction-mandal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { BmcuConstructionRbkComponent } from './components/bmcu-construction-rbk/bmcu-construction-rbk.component';
import { BmcuConstructionMentorComponent } from './components/bmcu-construction-mentor/bmcu-construction-mentor.component';

@NgModule({
  declarations: [
    BmcuConstructionStateComponent,
    BmcuConstructionDistrictComponent,
    BmcuConstructionMandalComponent,
    BmcuConstructionRbkComponent,
    BmcuConstructionMentorComponent,
  ],
  imports: [
    CommonModule,
    BmcuConstructionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    BmcuConstructionStateComponent,
    BmcuConstructionDistrictComponent,
    BmcuConstructionMandalComponent,
    BmcuConstructionRbkComponent,
    BmcuConstructionMentorComponent,
  ],
})
export class BmcuConstructionModule {}
