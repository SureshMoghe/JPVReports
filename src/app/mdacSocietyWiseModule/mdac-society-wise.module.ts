import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdacSocietyWiseRoutingModule } from './mdac-society-wise-routing.module';
import { MdacSocietyWiseComponent } from './components/mdac-society-wise/mdac-society-wise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    MdacSocietyWiseComponent
  ],
  imports: [
    CommonModule,
    MdacSocietyWiseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  exports: [
    MdacSocietyWiseComponent
  ]
})
export class MdacSocietyWiseModule { }
