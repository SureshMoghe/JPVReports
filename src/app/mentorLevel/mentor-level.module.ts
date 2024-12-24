import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorLevelRoutingModule } from './mentor-level-routing.module';
import { CommonComponent } from './components/common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillageMeetingPromotersReportComponent } from './components/villageMeeting/village-meeting-promoters-report/village-meeting-promoters-report.component';
import { VillageMeetingCalibrationReportComponent } from './components/villageMeeting/village-meeting-calibration-report/village-meeting-calibration-report.component';
import { VillageMeetingBuildingInsReportComponent } from './components/villageMeeting/village-meeting-building-ins-report/village-meeting-building-ins-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingAbstractModuleModule } from '../buildingAbstractModule/building-abstract-module.module';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerRegistrationDetailReportComponent } from './components/FarmerRegistrationDetailReport/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VolunteerFarmerDataModuleModule } from '../volunteerFarmerDataModule/volunteer-farmer-data-module.module';
import { VvFarmerDataMentorReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mentor-report/vv-farmer-data-mentor-report.component';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { VvHHAnimalsModule } from '../vvHHAnimalsModule/vv-hhanimals.module';
import { VvHHAnimalsMentorReportComponent } from './components/vvHHAnimals/vv-hhanimals-mentor-report/vv-hhanimals-mentor-report.component';
import { AmcuInspectionModule } from '../amcuInspectionModule/amcu-inspection.module';
import { AmcuInspectionMentorReportComponent } from './components/amcuInspection/amcu-inspection-mentor-report/amcu-inspection-mentor-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { FarmerApprovalMentorReportComponent } from './components/farmerApproval/farmer-approval-mentor-report/farmer-approval-mentor-report.component';
import { FarmerApprovalModule } from '../farmerApprovalModule/farmer-approval.module';
import { FamerSmsMentorReportComponent } from './components/farmerSms/famer-sms-mentor-report/famer-sms-mentor-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FarmerSmsModule } from '../farmerSmsModule/farmer-sms.module';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { FarmerMilkPouringMentorReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mentor-report/farmer-milk-pouring-mentor-report.component';
import { FarmerMilkPouringModule } from '../farmerMilkPouringModule/farmer-milk-pouring.module';
import { SharedModule } from '../shared/shared.module';
import { BmcuConstructionModule } from '../bmcuConstructionModule/bmcu-construction.module';
import { BmcuConstructionMentorReportComponent } from './components/bmcuConstruction/bmcu-construction-mentor-report/bmcu-construction-mentor-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { FarmerSchemeMentorReportComponent } from './components/farmerScheme/farmer-scheme-mentor-report/farmer-scheme-mentor-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeModule } from '../farmerSchemeModule/farmer-scheme.module';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { MomMentorReportComponent } from './components/minutesOfMeeting/mom-mentor-report/mom-mentor-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { FarmerRegMentorReportComponent } from './components/farmerMpussReg/farmer-reg-mentor-report/farmer-reg-mentor-report.component';
import { PaymentStatusMentorReportComponent } from './components/paymentStatus/payment-status-mentor-report/payment-status-mentor-report.component';
import { MdacBankAccMentorReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-mentor-report/mdac-bank-acc-mentor-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { VafMentorLevelReportComponent } from './components/volunteerAsFarmer/vaf-mentor-level-report/vaf-mentor-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VolunteerAsFarmerModule } from '../volunteerAsFarmerModule/volunteer-as-farmer.module';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotificationModuleModule } from '../notification-module/notification-module.module';

@NgModule({
  declarations: [
    CommonComponent,
    VillagemeetingRbkComponent,
    VillagemeetingVillageComponent,
    VillagemeetingAttendanceComponent,
    VillagemeetingFunctionariesComponent,
    VillagemeetingSecAndAssSecComponent,
    VillageMeetingPromotersReportComponent,
    VillageMeetingCalibrationReportComponent,
    VillageMeetingBuildingInsReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerMpussRegDetailReportComponent,
    FarmerabstractTxnSocietyReportComponent,
    FarmerabstractTxnMandalReportComponent,
    PromotersRbkReportComponent,
    PromotersDetailReportComponent,
    SecAsstSecRbkReportComponent,
    SecAsstSecDetailReportComponent,
    CalibrationRbkLevelReportComponent,
    CalibrationDetailLevelReportComponent,
    FarmerRegistrationStatusComponent,
    BuildingInspectionRbkReportComponent,
    BuildingInspectionDetailReportComponent,
    AmcuHandingOverRbkReportComponent,
    AmcuHandingOverDetailReportComponent,
    BuildingAbstractRbkReportComponent,
    BuildingAbstractVillageReportComponent,
    PaymentStatusRbkReportComponent,
    PaymentStatusDetailReportComponent,
    LandAllotmentMandalReportComponent,
    FarmerBankBAUStatusMandalReportComponent,
    FarmerBankBAUStatusRbkReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    FarmerRegistrationDetailReportComponent,
    FarmerAbstractTxnRbkReportComponent,
    MdacBankAccVillageReportComponent,
    VvFarmerDataRbkReportComponent,
    VvFarmerDataVillageReportComponent,
    VvFarmerDataMentorReportComponent,
    VvFarmerVolunteersListReportComponent,
    VvFarmerVolunteersLoggedInReportComponent,
    VvFarmerApprovedListReportComponent,
    VvHHAnimalsMandalReportComponent,
    VvHHAnimalsRbkReportComponent,
    VvHHAnimalsVillageReportComponent,
    VvHHAnimalsMentorReportComponent,
    AmcuInspectionMentorReportComponent,
    AmcuInspectedSocitiesReportComponent,
    AmcuNotInspectedSocitiesReportComponent,
    FarmerApprovalMentorReportComponent,
    FamerSmsMentorReportComponent,
    FamerSmsRbkReportComponent,
    FamerSmsDetailReportComponent,
    VvHHAnimalsClusterReportComponent,
    FarmerMilkPouringMentorReportComponent,
    BmcuConstructionMentorReportComponent,
    BmcuConstructionRbkReportComponent,
    FarmerSchemeMentorReportComponent,
    FarmerSchemeRbkReportComponent,
    FarmerSchemeVillageReportComponent,
    NonMilkPouringReportComponent,
    MomMentorReportComponent,
    MomRbkReportComponent,
    MomVillageReportComponent,
    VwMilkPouringReportComponent,
    FarmerRegMentorReportComponent,
    PaymentStatusMentorReportComponent,
    MdacBankAccMentorReportComponent,
    AmcuHoNotSubmittedVillagesReportComponent,
    VvHhanimalsPendingHhReportComponent,
    MilkPouringFarmersReportComponent,
    VafMentorLevelReportComponent,
    VafRbkLevelReportComponent,
    NonMilkPouringFarmersReportComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    MentorLevelRoutingModule,
    VillageMeetingModule,
    FarmerMpussRegModule,
    FarmerAbstractTxnModuleModule,
    MpuacBankAccModule,
    PromotersModuleModule,
    SecAsstSecModuleModule,
    CalibrationModuleModule,
    BuildingInspectionModuleModule,
    AmcuHandingOverModuleModule,
    BuildingAbstractModuleModule,
    FarmerBankAccUpdateStatusModuleModule,
    LandAllotmentModuleModule,
    PaymentStatusModule,
    VolunteerFarmerDataModuleModule,
    VvHHAnimalsModule,
    AmcuInspectionModule,
    FarmerApprovalModule,
    FarmerSmsModule,
    FarmerMilkPouringModule,
    BmcuConstructionModule,
    FarmerSchemeModule,
    MinutesOfMeetingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
    VolunteerAsFarmerModule,
    NotificationModuleModule,
  ],
})
export class MentorLevelModule {}
