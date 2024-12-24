import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecAsstSecModuleRoutingModule } from './sec-asst-sec-module-routing.module';
import { SecAsstSecRbkLevelComponent } from './components/sec-asst-sec-rbk-level/sec-asst-sec-rbk-level.component';
import { SecAsstSecStateLevelComponent } from './components/sec-asst-sec-state-level/sec-asst-sec-state-level.component';
import { SecAsstSecMentorLevelComponent } from './components/sec-asst-sec-mentor-level/sec-asst-sec-mentor-level.component';
import { SecAsstSecDetailLevelComponent } from './components/sec-asst-sec-detail-level/sec-asst-sec-detail-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { SecAsstSecNotAddedLevelComponent } from './components/sec-asst-sec-not-added-level/sec-asst-sec-not-added-level.component';


@NgModule({
  declarations: [
    SecAsstSecRbkLevelComponent,
     SecAsstSecStateLevelComponent,
      SecAsstSecMentorLevelComponent,
       SecAsstSecDetailLevelComponent,
       SecAsstSecNotAddedLevelComponent
      ],
  imports: [
    CommonModule,
    SecAsstSecModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    SecAsstSecRbkLevelComponent,
    SecAsstSecStateLevelComponent,
     SecAsstSecMentorLevelComponent,
      SecAsstSecDetailLevelComponent,
      SecAsstSecNotAddedLevelComponent
  ]
})
export class SecAsstSecModuleModule { }
