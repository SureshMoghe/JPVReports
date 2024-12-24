import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeLevelRoutingModule } from './ce-level-routing.module';
import { AmcuHandingOverStateReportComponent } from './components/amcuHandingOver/amcu-handing-over-state-report/amcu-handing-over-state-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { BuildingInspectionStateReportComponent } from './components/buildingInspection/building-inspection-state-report/building-inspection-state-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { LandAllotmentStateReportComponent } from './components/landAllotment/land-allotment-state-report/land-allotment-state-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CommonComponent } from './components/common/common.component';
import { SharedModule } from '../shared/shared.module';
import { PlaStateReportComponent } from './components/pacsLandAllotment/pla-state-report/pla-state-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PacsLandAllotmentModule } from '../pacsLandAllotmentModule/pacs-land-allotment.module';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';

@NgModule({
  declarations: [
    AmcuHandingOverStateReportComponent,
    AmcuHandingOverMentorReportComponent,
    AmcuHandingOverRbkReportComponent,
    AmcuHandingOverDetailReportComponent,
    BuildingInspectionStateReportComponent,
    BuildingInspectionMentorReportComponent,
    BuildingInspectionRbkReportComponent,
    BuildingInspectionDetailReportComponent,
    LandAllotmentStateReportComponent,
    LandAllotmentDistrictReportComponent,
    LandAllotmentMandalReportComponent,
    CommonComponent,
    PlaStateReportComponent,
    PlaDistrictReportComponent,
    PlaMandalReportComponent,
    AmcuHoNotSubmittedVillagesReportComponent
  ],
  imports: [
    CommonModule,
    CeLevelRoutingModule,
    BuildingInspectionModuleModule,
    AmcuHandingOverModuleModule,
    LandAllotmentModuleModule,
    PacsLandAllotmentModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
})
export class CeLevelModule {}
