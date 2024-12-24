import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
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
import { VillagemeetingAttendanceComponent } from './components/villageLevelMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingBuildingInsReportComponent } from './components/villageLevelMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationComponent } from './components/villageLevelMeeting/villagemeeting-calibration/villagemeeting-calibration.component';
import { VillagemeetingFunctionariesComponent } from './components/villageLevelMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingMentorComponent } from './components/villageLevelMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingPromotersComponent } from './components/villageLevelMeeting/villagemeeting-promoters/villagemeeting-promoters.component';
import { VillagemeetingRbkComponent } from './components/villageLevelMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageLevelMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingVillageComponent } from './components/villageLevelMeeting/villagemeeting-village/villagemeeting-village.component';

const roles = ['203'];

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
        component: VillagemeetingCalibrationComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'VillagemeetingPromotersReport',
        component: VillagemeetingPromotersComponent,
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
        path: 'FarmerMpussRegDetailReport',
        component: FarmerMpussRegDetailReportComponent,
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
        path: 'MpuacBankAccMandalReport',
        component: MpuacBankAccMandalReportComponent,
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
        path: 'MdacNotCreatedRbkListReport',
        component: MdacNotCreatedRbkListReportComponent,
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
        path: 'FarmerBankVerifiedAcceptedRejectedReport',
        component: FarmerBankVerifiedAcceptedRejectedReportComponent,
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
        path: 'PaymentStatusDetailReport',
        component: PaymentStatusDetailReportComponent,
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcLevelRoutingModule { }
