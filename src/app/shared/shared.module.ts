import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { ServerUnavailableComponent } from './components/server-unavailable/server-unavailable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndianCurrencyPipe } from './pipes/indian-currency.pipe';
import { IndianNumberPipe } from './pipes/indian-number.pipe';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { PasswordupdateComponent } from './components/passwordupdate/passwordupdate.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UnAuthorizedComponent,
    ServerUnavailableComponent,
    IndianCurrencyPipe,
    IndianNumberPipe,
    DatePickerComponent,
    NumbersOnlyDirective,
    PasswordupdateComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports : [
    IndianCurrencyPipe,
    IndianNumberPipe,
    DatePickerComponent
  ]
})
export class SharedModule {}
