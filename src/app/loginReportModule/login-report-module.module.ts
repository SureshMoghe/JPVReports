import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginReportModuleRoutingModule } from './login-report-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { LoginReportStateComponent } from './components/login-report-state/login-report-state.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginReportStateComponent],
  imports: [
    CommonModule,
    LoginReportModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
exports: [
  LoginReportStateComponent
]
})
export class LoginReportModuleModule { }
