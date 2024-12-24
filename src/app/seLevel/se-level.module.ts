import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeLevelRoutingModule } from './se-level-routing.module';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { CommonComponent } from './components/common/common.component';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PacsLandAllotmentModule } from '../pacsLandAllotmentModule/pacs-land-allotment.module';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';

@NgModule({
  declarations: [
    CommonComponent,
    LandAllotmentDistrictReportComponent,
    LandAllotmentMandalReportComponent,
    AmcuHandingOverMentorReportComponent,
    AmcuHandingOverRbkReportComponent,
    AmcuHandingOverDetailReportComponent,
    PlaDistrictReportComponent,
    PlaMandalReportComponent,
    AmcuHoNotSubmittedVillagesReportComponent,
  ],
  imports: [
    CommonModule,
    SeLevelRoutingModule,
    AmcuHandingOverModuleModule,
    LandAllotmentModuleModule,
    PacsLandAllotmentModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
    ],
})
export class SeLevelModule {}
