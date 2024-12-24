import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingAbstractModuleRoutingModule } from './building-abstract-module-routing.module';
import { BuildingAbstractStateComponent } from './components/building-abstract-state/building-abstract-state.component';
import { BuildingAbstractMandalComponent } from './components/building-abstract-mandal/building-abstract-mandal.component';
import { BuildingAbstractRbkComponent } from './components/building-abstract-rbk/building-abstract-rbk.component';
import { BuildingAbstractVillageComponent } from './components/building-abstract-village/building-abstract-village.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BuildingAbstractStateComponent,
     BuildingAbstractMandalComponent,
      BuildingAbstractRbkComponent,
       BuildingAbstractVillageComponent
      ],
  imports: [
    CommonModule,
    BuildingAbstractModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports : [
    BuildingAbstractStateComponent,
     BuildingAbstractMandalComponent,
      BuildingAbstractRbkComponent,
       BuildingAbstractVillageComponent
  ]
})
export class BuildingAbstractModuleModule { }
