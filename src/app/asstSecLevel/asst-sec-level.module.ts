import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecAsstSecLoginRoutingModule } from './asst-sec-level-routing.module';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { CommonComponent } from './components/common/common.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { SharedModule } from '../shared/shared.module';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';

@NgModule({
  declarations: [
    CommonComponent,
    FarmerabstractTxnSocietyReportComponent,
    FarmerMpussRegDetailReportComponent,
    PaymentStatusRbkReportComponent,
    MomVillageReportComponent,
  ],
  imports: [
    CommonModule,
    SecAsstSecLoginRoutingModule,
    FarmerMpussRegModule,
    FarmerAbstractTxnModuleModule,
    PaymentStatusModule,
    MinutesOfMeetingModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
  ],
})
export class AsstSecLevelModule {}
