import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverStateReportComponent } from './components/amcuHandingOver/amcu-handing-over-state-report/amcu-handing-over-state-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionStateReportComponent } from './components/buildingInspection/building-inspection-state-report/building-inspection-state-report.component';
import { CommonComponent } from './components/common/common.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LandAllotmentStateReportComponent } from './components/landAllotment/land-allotment-state-report/land-allotment-state-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PlaStateReportComponent } from './components/pacsLandAllotment/pla-state-report/pla-state-report.component';

const roles = ['303'];
const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'AmcuHandingOverStateReport',
        pathMatch: 'full',
      },
      {
        path: 'AmcuHandingOverStateReport',
        component: AmcuHandingOverStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuHandingOverMentorReport',
        component: AmcuHandingOverMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuHandingOverRbkReport',
        component: AmcuHandingOverRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuHandingOverDetailReport',
        component: AmcuHandingOverDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingInspectionStateReport',
        component: BuildingInspectionStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingInspectionMentorReport',
        component: BuildingInspectionMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingInspectionRbkReport',
        component: BuildingInspectionRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingInspectionDetailReport',
        component: BuildingInspectionDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LandAllotmentStateReport',
        component: LandAllotmentStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LandAllotmentDistrictReport',
        component: LandAllotmentDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LandAllotmentMandalReport',
        component: LandAllotmentMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PacsLandAllotmentStateReport',
        component: PlaStateReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PacsLandAllotmentDistrictReport',
        component: PlaDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PacsLandAllotmentMandalReport',
        component: PlaMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuHoNotSubmittedVillagesReport',
        component: AmcuHoNotSubmittedVillagesReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeLevelRoutingModule { }
