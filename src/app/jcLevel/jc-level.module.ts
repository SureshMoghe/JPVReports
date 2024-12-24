import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JcLevelRoutingModule } from './jc-level-routing.module';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { CommonComponent } from './components/common/common.component';
import { JdLevelModule } from '../jdLevel/jd-level.module';
import { LoanSanctionandGroundingReportComponent } from './components/loan-sanctionand-grounding-report/loan-sanctionand-grounding-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { AmcuInspectionModule } from '../amcuInspectionModule/amcu-inspection.module';
import { FarmerSmsModule } from '../farmerSmsModule/farmer-sms.module';
import { FamerSmsDistrictReportComponent } from './components/farmerSms/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSms/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingAbstractModuleModule } from '../buildingAbstractModule/building-abstract-module.module';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingBuildingInsReportComponent } from './components/villageMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationReportComponent } from './components/villageMeeting/villagemeeting-calibration-report/villagemeeting-calibration-report.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingPromotersReportComponent } from './components/villageMeeting/villagemeeting-promoters-report/villagemeeting-promoters-report.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { SharedModule } from '../shared/shared.module';
import { BmcuConstructionModule } from '../bmcuConstructionModule/bmcu-construction.module';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
import { FarmerMilkPouringModule } from '../farmerMilkPouringModule/farmer-milk-pouring.module';
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeModule } from '../farmerSchemeModule/farmer-scheme.module';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';


@NgModule({
  declarations: [
    CommonComponent,
    AmcuHandingOverMentorReportComponent,
     AmcuHandingOverRbkReportComponent,
      AmcuHandingOverDetailReportComponent,
      LoanSanctionandGroundingReportComponent,
      LandAllotmentDistrictReportComponent,
      LandAllotmentMandalReportComponent,
      GroundingDistrictLevelReportComponent,
      GroundingMandalLevelReportComponent,
      GroundingDetailLevelReportComponent,
      AmcuInspectionDistrictReportComponent,
      AmcuInspectedSocitiesReportComponent,
      AmcuNotInspectedSocitiesReportComponent,
      FamerSmsDistrictReportComponent,
      FamerSmsMandalReportComponent,
      FamerSmsRbkReportComponent,
      FamerSmsDetailReportComponent,
      FarmerBankBAUStatusDistrictReportComponent,
      FarmerBankBAUStatusMandalReportComponent,
      FarmerBankBAUStatusRbkReportComponent,
      FarmerBankInvalidAccountsReportComponent,
      FarmerBankPendingAtDaReportComponent,
      FarmerBankVerifiedAcceptedRejectedReportComponent,
      FarmerBankPendingAtMentorReportComponent,
      BuildingAbstractMandalReportComponent,
      BuildingAbstractRbkReportComponent,
      BuildingAbstractVillageReportComponent,
      BuildingInspectionDetailReportComponent,
      BuildingInspectionMentorReportComponent,
      BuildingInspectionRbkReportComponent,
      CalibrationDetailLevelReportComponent,
      CalibrationMentorLevelReportComponent,
      CalibrationRbkLevelReportComponent,
      SecAsstSecDetailReportComponent,
      SecAsstSecMentorReportComponent,
      SecAsstSecRbkReportComponent,
      PromotersDetailReportComponent,
      PromotersMentorReportComponent,
      PromotersRbkReportComponent,
      MdacBankAccVillageReportComponent,
      MdacNotCreatedRbkListReportComponent,
      MpuacBankAccDetailReportComponent,
      MpuacBankAccMandalReportComponent,
      MpuacBankAccMentorReportComponent,
      MpuacBankAccRbkReportComponent,
      VillagemeetingAttendanceComponent,
      VillagemeetingBuildingInsReportComponent,
      VillagemeetingCalibrationReportComponent,
      VillagemeetingFunctionariesComponent,
      VillagemeetingMentorComponent,
      VillagemeetingPromotersReportComponent,
      VillagemeetingRbkComponent,
      VillagemeetingSecAndAssSecComponent,
      VillagemeetingVillageComponent,
      BmcuConstructionDistrictReportComponent,
      BmcuConstructionMandalReportComponent,
      BmcuConstructionRbkReportComponent,
      FarmerSchemeDistrictReportComponent,
      FarmerSchemeRouteReportComponent,
      FarmerSchemeMandalReportComponent,
      FarmerSchemeRbkReportComponent,
      FarmerSchemeVillageReportComponent,
      NonMilkPouringReportComponent,
      MomDistrictReportComponent,
      MomMandalReportComponent,
      MomRbkReportComponent,
      MomVillageReportComponent
    ],
  imports: [
    CommonModule,
    JcLevelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    AmcuHandingOverModuleModule,
    JdLevelModule,
    LandAllotmentModuleModule,
    CheyuthaGroundingModule,
    AmcuInspectionModule,
    FarmerSmsModule,
    FarmerBankAccUpdateStatusModuleModule,
    BuildingAbstractModuleModule,
    BuildingInspectionModuleModule,
    CalibrationModuleModule,
    SecAsstSecModuleModule,
    PromotersModuleModule,
    MpuacBankAccModule,
    VillageMeetingModule,
    BmcuConstructionModule,
    FarmerMilkPouringModule,
    SharedModule,
    FarmerSchemeModule,
    MinutesOfMeetingModule
  ]
})
export class JcLevelModule { }
