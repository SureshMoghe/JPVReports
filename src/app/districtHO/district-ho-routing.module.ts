import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
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
import { CommonComponent } from './components/common/common.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
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
import { FarmerRegistrationStatusComponent } from './components/FarmerRegistrationStatus/farmer-registration-status/farmer-registration-status.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
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

const roles = ['204'];

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'villageLevelMeetingsMentorLevelReport',
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
        path: 'AmcuHandingOverDetailReport',
        component: AmcuHandingOverDetailReportComponent,
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
        path: 'CheyuthaBankDistrictLevelReport',
        component: CheyuthaBankDistrictLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankMandalLevelReport',
        component: CheyuthaBankMandalLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankRbkLevelReport',
        component: CheyuthaBankRbkLevelComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankAcceptedReport',
        component: CheyuthaBankAcceptedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankPendingReport',
        component: CheyuthaBankPendingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBankRejectedReport',
        component: CheyuthaBankRejectedReportComponent,
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
        path: 'GroundingApprovedRejectedReport',
        component: GroundingApprovedRejectedReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerRegistrationStatus',
        component: FarmerRegistrationStatusComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerabstractTxnDistrictReport',
        component: FarmerabstractTxnDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerabstractTxnMandalReport',
        component: FarmerabstractTxnMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerabstractTxnSocietyReport',
        component: FarmerabstractTxnSocietyReportComponent,
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
        path: 'FarmerMpussRegDetailReport',
        component: FarmerMpussRegDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerMpussRegDistrictReport',
        component: FarmerMpussRegDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerMpussRegRbkReport',
        component: FarmerMpussRegRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'FarmerMpussRegVillageReport',
        component: FarmerMpussRegVillageReportComponent,
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
        path: 'LdmbankWiseDistrictReport',
        component: LdmbankWiseDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseMandalReport',
        component: LdmbankWiseMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseBranchReport',
        component: LdmbankWiseBranchReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWiseRbkReport',
        component: LdmbankWiseRbkReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'LdmbankWisePendingReport',
        component: LdmbankWisePendingReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        }, 
      },
      {
        path: 'LdmbankWiseApprovedRejectedReport',
        component: LdmbankWiseApprovedRejectedReportComponent,
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
        path: 'MpuacBankAccDetailReport',
        component: MpuacBankAccDetailReportComponent,
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
        path: 'MpuacBankAccMentorReport',
        component: MpuacBankAccMentorReportComponent,
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
        path: 'PaymentStatusDetailReport',
        component: PaymentStatusDetailReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PaymentStatusDistrictReport',
        component: PaymentStatusDistrictReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PaymentStatusMandalReport',
        component: PaymentStatusMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'PaymentStatusRbkReport',
        component: PaymentStatusRbkReportComponent,
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
        path: 'SecAsstSecDetailReport',
        component: SecAsstSecDetailReportComponent,
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
        path: 'FarmerAbstractTxnRbkReport',
        component: FarmerAbstractTxnRbkReportComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictHORoutingModule { }
