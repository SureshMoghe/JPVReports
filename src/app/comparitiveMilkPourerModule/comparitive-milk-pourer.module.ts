import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpStateLevelComponent } from './components/cmp-state-level/cmp-state-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { CmpMilkPourerDetailComponent } from './components/cmp-milk-pourer-detail/cmp-milk-pourer-detail.component';

@NgModule({
  declarations: [
    CmpStateLevelComponent,
    CmpMilkPourerDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    CmpStateLevelComponent,
    CmpMilkPourerDetailComponent
  ],
})
export class ComparitiveMilkPourerModule {}
