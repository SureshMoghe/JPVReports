import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibrationModuleRoutingModule } from './calibration-module-routing.module';
import { CalibrationStateLevelComponent } from './components/calibration-state-level/calibration-state-level.component';
import { CalibrationMentorLevelComponent } from './components/calibration-mentor-level/calibration-mentor-level.component';
import { CalibrationRbkLevelComponent } from './components/calibration-rbk-level/calibration-rbk-level.component';
import { CalibrationDetailLevelComponent } from './components/calibration-detail-level/calibration-detail-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CalibrationStateLevelComponent, 
    CalibrationMentorLevelComponent,
     CalibrationRbkLevelComponent,
      CalibrationDetailLevelComponent
    ],
  imports: [
    CommonModule,
    CalibrationModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    CalibrationStateLevelComponent, 
    CalibrationMentorLevelComponent,
     CalibrationRbkLevelComponent,
      CalibrationDetailLevelComponent
  ]
})
export class CalibrationModuleModule { }
