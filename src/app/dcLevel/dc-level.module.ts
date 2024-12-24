import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DcLevelRoutingModule } from './dc-level-routing.module';
import { VillagemeetingRbkComponent } from './components/villageLevelMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingVillageComponent } from './components/villageLevelMeeting/villagemeeting-village/villagemeeting-village.component';
import { VillagemeetingAttendanceComponent } from './components/villageLevelMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingFunctionariesComponent } from './components/villageLevelMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageLevelMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingBuildingInsReportComponent } from './components/villageLevelMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationComponent } from './components/villageLevelMeeting/villagemeeting-calibration/villagemeeting-calibration.component';
import { VillagemeetingPromotersComponent } from './components/villageLevelMeeting/villagemeeting-promoters/villagemeeting-promoters.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { CommonComponent } from './components/common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { VillagemeetingMentorComponent } from './components/villageLevelMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CommonComponent,
    VillagemeetingRbkComponent,
    VillagemeetingVillageComponent,
    VillagemeetingAttendanceComponent,
    VillagemeetingFunctionariesComponent,
    VillagemeetingSecAndAssSecComponent,
    VillagemeetingBuildingInsReportComponent,
    VillagemeetingCalibrationComponent,
    VillagemeetingPromotersComponent,
    VillagemeetingMentorComponent,
    FarmerMpussRegDistrictReportComponent,
    FarmerMpussRegRbkReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerMpussRegDetailReportComponent,
    FarmerabstractTxnDistrictReportComponent,
    FarmerabstractTxnMandalReportComponent,
    FarmerabstractTxnSocietyReportComponent,
    MpuacBankAccMandalReportComponent,
    MpuacBankAccDetailReportComponent,
    PromotersMentorReportComponent,
    PromotersRbkReportComponent,
    PromotersDetailReportComponent,
    SecAsstSecMentorReportComponent,
    SecAsstSecRbkReportComponent,
    SecAsstSecDetailReportComponent,
    FarmerBankBAUStatusDistrictReportComponent,
    FarmerBankBAUStatusMandalReportComponent,
    FarmerBankBAUStatusRbkReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    PaymentStatusDistrictReportComponent,
    PaymentStatusMandalReportComponent,
    PaymentStatusRbkReportComponent,
    PaymentStatusDetailReportComponent,
    MdacNotCreatedRbkListReportComponent,
    FarmerAbstractTxnRbkReportComponent,
    MdacBankAccVillageReportComponent,
  ],
  imports: [
    CommonModule,
    DcLevelRoutingModule,
    VillageMeetingModule,
    FarmerMpussRegModule,
    FarmerAbstractTxnModuleModule,
    MpuacBankAccModule,
    PromotersModuleModule,
    SecAsstSecModuleModule,
    FarmerBankAccUpdateStatusModuleModule,
    PaymentStatusModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
})
export class DcLevelModule {}
