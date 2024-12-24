import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaryLoginsRoutingModule } from './secretary-level-routing.module';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { FarmerRegistrationDetailReportComponent } from './components/FarmerRegistrationDetailReportComponent/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';

import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { CommonComponent } from './components/common/common.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { SharedModule } from '../shared/shared.module';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';

@NgModule({
  declarations: [
    CommonComponent,
    FarmerMpussRegDetailReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerabstractTxnSocietyReportComponent,
    PaymentStatusDetailReportComponent,
    FarmerRegistrationDetailReportComponent,
    FarmerBankBAUStatusRbkReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    PaymentStatusRbkReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerAbstractTxnRbkReportComponent,
    MomVillageReportComponent,
    MomRbkReportComponent
  ],
  imports: [
    CommonModule,
     SecretaryLoginsRoutingModule,
     FarmerMpussRegModule,
     FarmerAbstractTxnModuleModule,
     PaymentStatusModule,
     FarmerBankAccUpdateStatusModuleModule,
     MinutesOfMeetingModule,
     ReactiveFormsModule,
     DataTablesModule,
     FormsModule,
     SharedModule,
    ],
})
export class SecretaryLevelModule {}
