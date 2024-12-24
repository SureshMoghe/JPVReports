import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { CommonComponent } from './components/common/common.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FamerSmsDistrictReportComponent } from './components/farmerSms/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSms/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LoanSanctionandGroundingReportComponent } from './components/loan-sanctionand-grounding-report/loan-sanctionand-grounding-report.component';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingBuildingInsReportComponent } from './components/villageMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationReportComponent } from './components/villageMeeting/villagemeeting-calibration-report/villagemeeting-calibration-report.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingPromotersReportComponent } from './components/villageMeeting/villagemeeting-promoters-report/villagemeeting-promoters-report.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { CheyuthastateReportsComponent } from '../stateLevel/components/cheyuthastate-reports/cheyuthastate-reports.component';

const roles = ['202'];

const routes: Routes = [ 
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'AmcuHandingOverMentorReport',
        pathMatch: 'full',
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
        path: 'CheyuthaStateReport',
        component: CheyuthastateReportsComponent,
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
        path: 'LoanSanctionAndGroundingReport',
        component: LoanSanctionandGroundingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingDistrictLevelReport',
        component: GroundingDistrictLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingMandalLevelReport',
        component: GroundingMandalLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'GroundingDetailLevelReport',
        component: GroundingDetailLevelReportComponent,
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
        path: 'AmcuInspectionDistrictReport',
        component: AmcuInspectionDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuInspectedSocitiesReport',
        component: AmcuInspectedSocitiesReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'AmcuNotInspectedSocitiesReport',
        component: AmcuNotInspectedSocitiesReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FamerSmsDistrictReport',
        component: FamerSmsDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FamerSmsMandalReport',
        component: FamerSmsMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FamerSmsRbkReport',
        component: FamerSmsRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FamerSmsDetailReport',
        component: FamerSmsDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankBAUStatusDistrictReport',
        component: FarmerBankBAUStatusDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankBAUStatusMandalReport',
        component: FarmerBankBAUStatusMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankBAUStatusRbkReport',
        component: FarmerBankBAUStatusRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankInvalidAccountsReport',
        component: FarmerBankInvalidAccountsReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankPendingAtDaReport',
        component: FarmerBankPendingAtDaReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankPendingAtMentorReport',
        component: FarmerBankPendingAtMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerBankVerifiedAcceptedRejectedReport',
        component: FarmerBankVerifiedAcceptedRejectedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingAbstractMandalReport',
        component: BuildingAbstractMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingAbstractRbkReport',
        component: BuildingAbstractRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BuildingAbstractVillageReport',
        component: BuildingAbstractVillageReportComponent,
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
        path: 'CalibrationMentorLevelReport',
        component: CalibrationMentorLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CalibrationRbkLevelReport',
        component: CalibrationRbkLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CalibrationDetailLevelReport',
        component: CalibrationDetailLevelReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'SecAsstSecMentorReport',
        component: SecAsstSecMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'SecAsstSecRbkReport',
        component: SecAsstSecRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'SecAsstSecDetailReport',
        component: SecAsstSecDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PromotersMentorReport',
        component: PromotersMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PromotersRbkReport',
        component: PromotersRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PromotersDetailReport',
        component: PromotersDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MpuacBankAccMentorReport',
        component: MpuacBankAccMentorReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MpuacBankAccMandalReport',
        component: MpuacBankAccMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MpuacBankAccRbkReport',
        component: MpuacBankAccRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MpuacBankAccDetailReport',
        component: MpuacBankAccDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MdacBankAccVillageReport',
        component: MdacBankAccVillageReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MdacNotCreatedRbkListReport',
        component: MdacNotCreatedRbkListReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'villageLevelMeetingsMentorLevelReport',
        component: VillagemeetingMentorComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'villageLevelMeetingsRbkLevelReport',
        component: VillagemeetingRbkComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'villageLevelMeetingsVillageLevelReport',
        component: VillagemeetingVillageComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingAttendanceReport',
        component: VillagemeetingAttendanceComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingFunctionariesReport',
        component: VillagemeetingFunctionariesComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingSecAndAssSecReport',
        component: VillagemeetingSecAndAssSecComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingBuildingInsReport',
        component: VillagemeetingBuildingInsReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingCalibrationReport',
        component: VillagemeetingCalibrationReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingPromotersReport',
        component: VillagemeetingPromotersReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BmcuConstructionDistrictReport',
        component: BmcuConstructionDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BmcuConstructionMandalReport',
        component: BmcuConstructionMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BmcuConstructionRbkReport',
        component: BmcuConstructionRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerSchemeDistrictReport',
        component: FarmerSchemeDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerSchemeRouteReport',
        component: FarmerSchemeRouteReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerSchemeMandalReport',
        component: FarmerSchemeMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerSchemeRbkReport',
        component: FarmerSchemeRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerSchemeVillageReport',
        component: FarmerSchemeVillageReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'NonMilkPouringReport',
        component: NonMilkPouringReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MomDistrictReport',
        component: MomDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MomMandalReport',
        component: MomMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MomRbkReport',
        component: MomRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'MomVillageReport',
        component: MomVillageReportComponent,
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
export class JcLevelRoutingModule { }
