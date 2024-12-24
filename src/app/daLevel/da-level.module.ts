import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaLevelRoutingModule } from './da-level-routing.module';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { CommonComponent } from './components/common/common.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { PaymentStatusDetailReportComponent} from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VolunteerFarmerDataModuleModule } from '../volunteerFarmerDataModule/volunteer-farmer-data-module.module';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { VvHHAnimalsModule } from '../vvHHAnimalsModule/vv-hhanimals.module';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { SharedModule } from '../shared/shared.module';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { FarmerregistrationstatusComponent } from './components/farmerregistrationstatus/farmerregistrationstatus.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    CommonComponent,
    FarmerBankBAUStatusRbkReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    FarmerAbstractTxnRbkReportComponent,
    FarmerabstractTxnSocietyReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerMpussRegDetailReportComponent,
    PaymentStatusRbkReportComponent,
    PaymentStatusDetailReportComponent,
    VvFarmerDataRbkReportComponent,
    VvFarmerDataVillageReportComponent,
    VvFarmerApprovedListReportComponent,
    VvHHAnimalsRbkReportComponent,
    VvHHAnimalsVillageReportComponent,
    VvHHAnimalsClusterReportComponent,
    VvHhanimalsPendingHhReportComponent,
    FarmerregistrationstatusComponent,
    HomepageComponent
      ],
  imports: [
    CommonModule,
    DaLevelRoutingModule,
    FarmerMpussRegModule,
     FarmerAbstractTxnModuleModule,
     PaymentStatusModule,
     FarmerBankAccUpdateStatusModuleModule,
     VolunteerFarmerDataModuleModule,
     VvHHAnimalsModule,
     ReactiveFormsModule,
     DataTablesModule,
     FormsModule,
     SharedModule,
  ]
})
export class DaLevelModule { }
