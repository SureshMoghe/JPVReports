import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdacVSsapMilkCollectionRoutingModule } from './mdac-vssap-milk-collection-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { MdacVSsapStateComponent } from './components/mdac-vssap-state/mdac-vssap-state.component';
import { MdacVSsapDistrictComponent } from './components/mdac-vssap-district/mdac-vssap-district.component';

@NgModule({
  declarations: [MdacVSsapStateComponent, MdacVSsapDistrictComponent],
  imports: [
    CommonModule,
    MdacVSsapMilkCollectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [MdacVSsapStateComponent, MdacVSsapDistrictComponent],
})
export class MdacVSsapMilkCollectionModule {}
