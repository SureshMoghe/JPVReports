import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictHORoutingModule } from './district-ho-routing.module';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { BankerModuleModule } from '../bankerModule/banker-module.module';
import { BuildingAbstractModuleModule } from '../buildingAbstractModule/building-abstract-module.module';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { LdmBankModule } from '../ldmBankModule/ldm-bank.module';
import { LdmBankWiseModuleModule } from '../ldmBankWiseModule/ldm-bank-wise-module.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { CommonComponent } from './components/common/common.component';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { FarmerRegistrationStatusComponent } from './components/FarmerRegistrationStatus/farmer-registration-status/farmer-registration-status.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/FarmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/FarmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/FarmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
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
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CommonComponent,
    AmcuHandingOverMentorReportComponent,
     AmcuHandingOverRbkReportComponent,
      AmcuHandingOverDetailReportComponent,
      BuildingAbstractMandalReportComponent,
      BuildingAbstractRbkReportComponent,
      BuildingAbstractVillageReportComponent,
      BuildingInspectionDetailReportComponent,
      BuildingInspectionMentorReportComponent,
      BuildingInspectionRbkReportComponent,
      CalibrationDetailLevelReportComponent,
      CalibrationMentorLevelReportComponent,
      CalibrationRbkLevelReportComponent,
      CheyuthaBankAcceptedReportComponent,
      CheyuthaBankDistrictLevelComponent,
      CheyuthaBankMandalLevelComponent,
      CheyuthaBankPendingReportComponent,
      CheyuthaBankRbkLevelComponent,
      CheyuthaBankRejectedReportComponent,
      GroundingApprovedRejectedReportComponent,
      GroundingDetailLevelReportComponent,
      GroundingDistrictLevelReportComponent,
      GroundingMandalLevelReportComponent,
      FarmerRegistrationStatusComponent,
      FarmerabstractTxnDistrictReportComponent,
      FarmerabstractTxnMandalReportComponent,
      FarmerabstractTxnSocietyReportComponent,
      FarmerBankBAUStatusDistrictReportComponent,
      FarmerBankBAUStatusMandalReportComponent,
      FarmerBankBAUStatusRbkReportComponent,
      FarmerBankInvalidAccountsReportComponent,
      FarmerBankPendingAtDaReportComponent,
      FarmerBankPendingAtMentorReportComponent,
      FarmerBankVerifiedAcceptedRejectedReportComponent,
      FarmerMpussRegDetailReportComponent,
      FarmerMpussRegDistrictReportComponent,
      FarmerMpussRegRbkReportComponent,
      FarmerMpussRegVillageReportComponent,
      LandAllotmentDistrictReportComponent,
      LandAllotmentMandalReportComponent,
      LdmbankWiseApprovedRejectedReportComponent,
      LdmbankWiseBranchReportComponent,
      LdmbankWiseDistrictReportComponent,
      LdmbankWiseMandalReportComponent,
      LdmbankWisePendingReportComponent,
      LdmbankWiseRbkReportComponent,
      MdacNotCreatedRbkListReportComponent,
      MpuacBankAccDetailReportComponent,
      MpuacBankAccMandalReportComponent,
      MpuacBankAccMentorReportComponent,
      MpuacBankAccRbkReportComponent,
      PaymentStatusDetailReportComponent,
      PaymentStatusDistrictReportComponent,
      PaymentStatusMandalReportComponent,
      PaymentStatusRbkReportComponent,
      PromotersDetailReportComponent,
      PromotersMentorReportComponent,
      PromotersRbkReportComponent,
      SecAsstSecDetailReportComponent,
      SecAsstSecMentorReportComponent,
      SecAsstSecRbkReportComponent,
      VillagemeetingAttendanceComponent,
      VillagemeetingBuildingInsReportComponent,
      VillagemeetingCalibrationReportComponent,
      VillagemeetingFunctionariesComponent,
      VillagemeetingMentorComponent,
      VillagemeetingPromotersReportComponent,
      VillagemeetingRbkComponent,
      VillagemeetingSecAndAssSecComponent,
      VillagemeetingVillageComponent,
      FarmerAbstractTxnRbkReportComponent,
      MdacBankAccVillageReportComponent
    ],
  imports: [
    CommonModule,
    DistrictHORoutingModule,
    VillageMeetingModule,
    FarmerMpussRegModule,
    BankerModuleModule,
    LdmBankModule,
    FarmerAbstractTxnModuleModule,
    MpuacBankAccModule,
    PromotersModuleModule,
    SecAsstSecModuleModule,
    CalibrationModuleModule,
    LdmBankWiseModuleModule,
    BuildingInspectionModuleModule,
    AmcuHandingOverModuleModule,
    BuildingAbstractModuleModule,
    FarmerBankAccUpdateStatusModuleModule,
    LandAllotmentModuleModule,
    PaymentStatusModule,
    CheyuthaGroundingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ]
})
export class DistrictHOModule { }
