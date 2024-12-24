import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentStatusRoutingModule } from './payment-status-routing.module';
import { PaymentStatusStateComponent } from './components/payment-status-state/payment-status-state.component';
import { PaymentStatusDistrictComponent } from './components/payment-status-district/payment-status-district.component';
import { PaymentStatusMandalComponent } from './components/payment-status-mandal/payment-status-mandal.component';
import { PaymentStatusRbkComponent } from './components/payment-status-rbk/payment-status-rbk.component';
import { PaymentStatusDetailComponent } from './components/payment-status-detail/payment-status-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { PaymentStatusMentorComponent } from './components/payment-status-mentor/payment-status-mentor.component';

@NgModule({
  declarations: [
    PaymentStatusStateComponent,
    PaymentStatusDistrictComponent,
    PaymentStatusMandalComponent,
    PaymentStatusRbkComponent,
    PaymentStatusDetailComponent,
    PaymentStatusMentorComponent,
  ],
  imports: [
    CommonModule,
    PaymentStatusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    PaymentStatusStateComponent,
    PaymentStatusDistrictComponent,
    PaymentStatusMandalComponent,
    PaymentStatusRbkComponent,
    PaymentStatusDetailComponent,
    PaymentStatusMentorComponent,
  ],
})
export class PaymentStatusModule {}
