import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandalLevelRoutingModule } from './mandal-level-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { SharedModule } from '../shared/shared.module';
import { CommonComponent } from './components/common/common.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { MdacBankAccDetailReportComponent } from './components/mdacBankAccount/mdac-bank-acc-detail-report/mdac-bank-acc-detail-report.component';
import { MdacBankAccVillageReportComponent } from './components/mdacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { BmcuConstructionModule } from '../bmcuConstructionModule/bmcu-construction.module';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { VolunteerFarmerDataModuleModule } from '../volunteerFarmerDataModule/volunteer-farmer-data-module.module';
import { VvHHAnimalsModule } from '../vvHHAnimalsModule/vv-hhanimals.module';
import { FarmerApprovalModule } from '../farmerApprovalModule/farmer-approval.module';
import { FarmerSmsModule } from '../farmerSmsModule/farmer-sms.module';
import { FarmerMilkPouringModule } from '../farmerMilkPouringModule/farmer-milk-pouring.module';
import { FarmerSchemeModule } from '../farmerSchemeModule/farmer-scheme.module';
import { VolunteerAsFarmerModule } from '../volunteerAsFarmerModule/volunteer-as-farmer.module';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { FatMandalReportComponent } from './components/farmerAbstractTxn/fat-mandal-report/fat-mandal-report.component';
import { FatRbkReportComponent } from './components/farmerAbstractTxn/fat-rbk-report/fat-rbk-report.component';
import { FatSocietyReportComponent } from './components/farmerAbstractTxn/fat-society-report/fat-society-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { FarmerRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-reg-rbk-report/farmer-reg-rbk-report.component';
import { FarmerRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-reg-village-report/farmer-reg-village-report.component';
import { FarmerRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-reg-detail-report/farmer-reg-detail-report.component';
import { FarmerSmsMandalReportComponent } from './components/farmerSMS/farmer-sms-mandal-report/farmer-sms-mandal-report.component';
import { FarmerSmsRbkReportComponent } from './components/farmerSMS/farmer-sms-rbk-report/farmer-sms-rbk-report.component';
import { FarmerSmsDetailReportComponent } from './components/farmerSMS/farmer-sms-detail-report/farmer-sms-detail-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FmpMandalReportComponent } from './components/farmerMilkPouring/fmp-mandal-report/fmp-mandal-report.component';
import { VvMilkPouringReportComponent } from './components/farmerMilkPouring/vv-milk-pouring-report/vv-milk-pouring-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PacsLandAllotmentModule } from '../pacsLandAllotmentModule/pacs-land-allotment.module';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { AmcuLandAllotmentModule } from '../amcuLandAllotmentModule/amcu-land-allotment.module';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { CheyuthaMandalReportComponent } from './components/cheyutha-mandal-report/cheyutha-mandal-report.component';
import { StateLevelModule } from '../stateLevel/state-level.module';
import { CheyuthaRbkReportComponent } from './components/cheyutha-rbk-report/cheyutha-rbk-report.component';
 
 
 
 

@NgModule({
  declarations: [
    CommonComponent,
    FarmerRegistrationStatusComponent,
    MdacBankAccDetailReportComponent,
    MdacBankAccVillageReportComponent,
    FarmerBankBAUStatusMandalReportComponent,
    FarmerBankBAUStatusRbkReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    LandAllotmentMandalReportComponent,
    BmcuConstructionMandalReportComponent,
    BmcuConstructionRbkReportComponent,
    MomMandalReportComponent,
    MomRbkReportComponent,
    MomVillageReportComponent,
    FatMandalReportComponent,
    FatRbkReportComponent,
    FatSocietyReportComponent,
    VvFarmerDataMandalReportComponent,
    VvFarmerDataRoutesReportComponent,
    VvFarmerDataRbkReportComponent,
    FarmerRegRbkReportComponent,
    FarmerRegVillageReportComponent,
    FarmerRegDetailReportComponent,
    FarmerSmsMandalReportComponent,
    FarmerSmsRbkReportComponent,
    FarmerSmsDetailReportComponent,
    VvHHAnimalsMandalReportComponent,
    VvHHAnimalsClusterReportComponent,
    FarmerApprovalMandalReportComponent,
    FarmerApprovalRoutesReportComponent,
    FmpMandalReportComponent,
    VvMilkPouringReportComponent,
    FarmerSchemeMandalReportComponent,
    FarmerSchemeRbkReportComponent,
    NonMilkPouringReportComponent,
    VafMandalLevelReportComponent,
    VafRbkLevelReportComponent,
    PlaMandalReportComponent,
    VvHhanimalsPendingHhReportComponent,
    AmcuLandAllotmentMandalReportComponent,
    MilkPouringFarmersReportComponent,
    NonMilkPouringFarmersReportComponent,
    CheyuthaMandalReportComponent,
    CheyuthaRbkReportComponent,
    //CheyuthaMandalByDistIDReportsComponent,
  ],
  imports: [
    CommonModule,
    MandalLevelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
    FarmerMpussRegModule,
    MpuacBankAccModule,
    FarmerBankAccUpdateStatusModuleModule,
    LandAllotmentModuleModule,
    BmcuConstructionModule,
    MinutesOfMeetingModule,
    FarmerAbstractTxnModuleModule,
    VolunteerFarmerDataModuleModule,
    VvHHAnimalsModule,
    FarmerApprovalModule,
    FarmerSmsModule,
    FarmerMilkPouringModule,
    FarmerSchemeModule,
    VolunteerAsFarmerModule,
    PacsLandAllotmentModule,
    AmcuLandAllotmentModule,
     StateLevelModule,      
  ],
})
export class MandalLevelModule {}
