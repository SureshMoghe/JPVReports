import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateLevelRoutingModule } from './state-level-routing.module';
import { CommonComponent } from './components/common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { GoogleMapsModule } from '@angular/google-maps';
import { VillagemeetingStateComponent } from './components/villageMeeting/villagemeeting-state/villagemeeting-state.component';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegStateReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-state-report/farmer-mpuss-reg-state-report.component';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { BankerModuleModule } from '../bankerModule/banker-module.module';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankStateLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-state-level/cheyutha-bank-state-level.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { VillageMeetingBuildingInsReportComponent } from './components/villageMeeting/village-meeting-building-ins-report/village-meeting-building-ins-report.component';
import { VillageMeetingCalibrationReportComponent } from './components/villageMeeting/village-meeting-calibration-report/village-meeting-calibration-report.component';
import { VillageMeetingPromotersReportComponent } from './components/villageMeeting/village-meeting-promoters-report/village-meeting-promoters-report.component';
import { LdmBankModule } from '../ldmBankModule/ldm-bank.module';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnStateReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-state-report/farmerabstract-txn-state-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { MpuacBankAccStateReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-state-report/mpuac-bank-acc-state-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
// tslint:disable-next-line: max-line-length
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { PromotersStateReportComponent } from './components/promoters/promoters-state-report/promoters-state-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { CalibrationStateLevelReportComponent } from './components/calibration/calibration-state-level-report/calibration-state-level-report.component';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { SecAsstSecStateReportComponent } from './components/secAsstSec/sec-asst-sec-state-report/sec-asst-sec-state-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { LdmbankWiseStateReportComponent } from './components/ldmBankWise/ldmbank-wise-state-report/ldmbank-wise-state-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LdmBankWiseModuleModule } from '../ldmBankWiseModule/ldm-bank-wise-module.module';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { BuildingInspectionStateReportComponent } from './components/buildingInspection/building-inspection-state-report/building-inspection-state-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { AmcuHandingOverStateReportComponent } from './components/amcuHandingOver/amcu-handing-over-state-report/amcu-handing-over-state-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { FarmerMilkCollectionReportComponent } from './components/farmer-milk-collection-report/farmer-milk-collection-report.component';
import { LoginReportStateLevelComponent } from './components/loginReport/login-report-state-level/login-report-state-level.component';
import { LoginReportModuleModule } from '../loginReportModule/login-report-module.module';
import { RbkRoutesMapComponentComponent } from './components/routesMap/rbk-routes-map-component/rbk-routes-map-component.component';
import { RouteMapStateLevelComponent } from './components/routesMap/route-map-state-level/route-map-state-level.component';
import { BuildingAbstractModuleModule } from '../buildingAbstractModule/building-abstract-module.module';
import { BuildingAbstractStateReportComponent } from './components/buildingAbstract/building-abstract-state-report/building-abstract-state-report.component';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../shared/shared.module';
import { FarmerNatureOfUnitStateReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-state-report/farmer-nature-of-unit-state-report.component';
import { FarmerNatureOfUnitDistrictReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-report/farmer-nature-of-unit-district-report.component';
import { FarmerNatureOfUnitMandalReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-mandal-report/farmer-nature-of-unit-mandal-report.component';
import { FarmerNatureOfUnitDetailReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-detail-report/farmer-nature-of-unit-detail-report.component';
import { FarmerNatureOfUnitModule } from '../farmerNatureOfUnitModule/farmer-nature-of-unit.module';
import { FarmerBankBAUStatusStateReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-state-report/farmer-bank-baustatus-state-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { LandAllotmentStateReportComponent } from './components/landAllotment/land-allotment-state-report/land-allotment-state-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { PaymentStatusStateReportComponent } from './components/paymentStatus/payment-status-state-report/payment-status-state-report.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { GroundingStateLevelReportComponent } from './components/cheyuthaGrounding/grounding-state-level-report/grounding-state-level-report.component';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { LoanSanctionAndGroundingReportComponent } from './components/loanSanctionAndGrounding/loan-sanction-and-grounding-report/loan-sanction-and-grounding-report.component';
import { BankerLoanSanctionAndGroundingReportComponent } from './components/bankerLoanSanctionAndGrounding/banker-loan-sanction-and-grounding-report/banker-loan-sanction-and-grounding-report.component';
import { FarmerRegistrationDetailReportComponent } from './components/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { TotalDistrictsReportComponent } from './components/dashboard/total-districts-report/total-districts-report.component';
import { TotalRBKReportComponent } from './components/dashboard/total-rbkreport/total-rbkreport.component';
import { TotalVillagesReportComponent } from './components/dashboard/total-villages-report/total-villages-report.component';
import { TotalRegisteredFarmersReportComponent } from './components/dashboard/total-registered-farmers-report/total-registered-farmers-report.component';
import { TotalMilkPouringFarmersReportComponent } from './components/dashboard/total-milk-pouring-farmers-report/total-milk-pouring-farmers-report.component';
import { DailyTotalRegisterdFarmersReportComponent } from './components/dashboard/daily-total-registerd-farmers-report/daily-total-registerd-farmers-report.component';
import { DailyTotalMilkPopuringFarmersReportComponent } from './components/dashboard/daily-total-milk-popuring-farmers-report/daily-total-milk-popuring-farmers-report.component';
import { DashboardCountsComponent } from './components/dashboard/dashboard-counts/dashboard-counts.component';
import { DashboardGraphsComponent } from './components/dashboard/dashboard-graphs/dashboard-graphs.component';
import { FarmerAbstractReportComponent } from './components/farmerAbstract/farmer-abstract-report/farmer-abstract-report.component';
import { SocietyAbstractReportComponent } from './components/farmerAbstract/society-abstract-report/society-abstract-report.component';
import { FarmerRouteWiseMilkPouringReportComponent } from './components/farmerAbstract/farmer-route-wise-milk-pouring-report/farmer-route-wise-milk-pouring-report.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { VvFarmerDataStateReportComponent } from './components/volunteerFarmerData/vv-farmer-data-state-report/vv-farmer-data-state-report.component';
import { VvFarmerDataDistrictReportComponent } from './components/volunteerFarmerData/vv-farmer-data-district-report/vv-farmer-data-district-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VolunteerFarmerDataModuleModule } from '../volunteerFarmerDataModule/volunteer-farmer-data-module.module';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvHHAnimalsStateReportComponent } from './components/vvHHAnimals/vv-hhanimals-state-report/vv-hhanimals-state-report.component';
import { VvHHAnimalsDistrictReportComponent } from './components/vvHHAnimals/vv-hhanimals-district-report/vv-hhanimals-district-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { VvHHAnimalsModule } from '../vvHHAnimalsModule/vv-hhanimals.module';
import { AmcuInspectionStateReportComponent } from './components/amcuInspection/amcu-inspection-state-report/amcu-inspection-state-report.component';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { AmcuInspectionModule } from '../amcuInspectionModule/amcu-inspection.module';
import { NetworkNotSubmittedVillagesReportComponent } from './components/amcuNetworkInspection/network-not-submitted-villages-report/network-not-submitted-villages-report.component';
import { NetworkSubmittedVillagesReportComponent } from './components/amcuNetworkInspection/network-submitted-villages-report/network-submitted-villages-report.component';
import { AmcuNetworkStateReportComponent } from './components/amcuNetworkInspection/amcu-network-state-report/amcu-network-state-report.component';
import { AmcuNetworkDistrictReportComponent } from './components/amcuNetworkInspection/amcu-network-district-report/amcu-network-district-report.component';
import { AmcuNetworkInspectionModule } from '../amcuNetworkInspectionModule/amcu-network-inspection.module';
import { FarmerApprovalStateReportComponent } from './components/farmerApproval/farmer-approval-state-report/farmer-approval-state-report.component';
import { FarmerApprovalDistrictReportComponent } from './components/farmerApproval/farmer-approval-district-report/farmer-approval-district-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FarmerApprovalModule } from '../farmerApprovalModule/farmer-approval.module';
import { FamerSmsStateReportComponent } from './components/farmerSMS/famer-sms-state-report/famer-sms-state-report.component';
import { FamerSmsDistrictReportComponent } from './components/farmerSMS/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSMS/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSMS/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { FarmerSmsModule } from '../farmerSmsModule/farmer-sms.module';
import { FamerSmsDetailReportComponent } from './components/farmerSMS/famer-sms-detail-report/famer-sms-detail-report.component';
import { VvFarmerDataRouteWiseListComponent } from './components/volunteerFarmerData/vv-farmer-data-route-wise-list/vv-farmer-data-route-wise-list.component';
import { VvFarmerDataVillageWiseListComponent } from './components/volunteerFarmerData/vv-farmer-data-village-wise-list/vv-farmer-data-village-wise-list.component';
import { MdacSocietyWiseReportComponent } from './components/mdacSocietyWise/mdac-society-wise-report/mdac-society-wise-report.component';
import { MdacSocietyWiseModule } from '../mdacSocietyWiseModule/mdac-society-wise.module';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { FarmerMilkPouringModule } from '../farmerMilkPouringModule/farmer-milk-pouring.module';
import { FarmerMilkPouringStateReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-state-report/farmer-milk-pouring-state-report.component';
import { FarmerMilkPouringDistrictReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-district-report/farmer-milk-pouring-district-report.component';
import { FarmerMilkPouringRouteReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-route-report/farmer-milk-pouring-route-report.component';
import { FarmerMilkPouringMandalReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mandal-report/farmer-milk-pouring-mandal-report.component';
import { NewlyMilkPouringFarmersReportComponent } from './components/dashboard/newly-milk-pouring-farmers-report/newly-milk-pouring-farmers-report.component';
import { MdacNotCreatedStateLevelReportComponent } from './components/mpuacBankAccount/mdac-not-created-state-level-report/mdac-not-created-state-level-report.component';
import { BmcuConstructionModule } from '../bmcuConstructionModule/bmcu-construction.module';
import { BmcuConstructionStateReportComponent } from './components/bmcuConstruction/bmcu-construction-state-report/bmcu-construction-state-report.component';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeStateReportComponent } from './components/farmerScheme/farmer-scheme-state-report/farmer-scheme-state-report.component';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeModule } from '../farmerSchemeModule/farmer-scheme.module';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { MomStateReportComponent } from './components/minutesOfMeeting/mom-state-report/mom-state-report.component';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { FarmerMilkPouringDetailReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-detail-report/farmer-milk-pouring-detail-report.component';
import { PromotersAddedRBKLevelComponent } from './components/promoters/promoters-added-rbklevel/promoters-added-rbklevel.component';
import { PromotersNotAddedRBKLevelComponent } from './components/promoters/promoters-not-added-rbklevel/promoters-not-added-rbklevel.component';
// tslint:disable-next-line: max-line-length
import { TotalPromotersAddedLevelComponent } from './components/promoters/total-promoters-added-level/total-promoters-added-level.component';
import { VafStateLevelReportComponent } from './components/volunteerAsFarmer/vaf-state-level-report/vaf-state-level-report.component';
import { VafDistrictLevelReportComponent } from './components/volunteerAsFarmer/vaf-district-level-report/vaf-district-level-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VolunteerAsFarmerModule } from '../volunteerAsFarmerModule/volunteer-as-farmer.module';
import { VafDetailLevelReportComponent } from './components/volunteerAsFarmer/vaf-detail-level-report/vaf-detail-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { CmpStateLevelReportComponent } from './components/comparitiveMilkPourer/cmp-state-level-report/cmp-state-level-report.component';
import { ComparitiveMilkPourerModule } from '../comparitiveMilkPourerModule/comparitive-milk-pourer.module';
import { CmpMilkPourerDetailReportComponent } from './components/comparitiveMilkPourer/cmp-milk-pourer-detail-report/cmp-milk-pourer-detail-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { SecAsstSecNotAddedReportComponent } from './components/secAsstSec/sec-asst-sec-not-added-report/sec-asst-sec-not-added-report.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PlaStateReportComponent } from './components/pacsLandAllotment/pla-state-report/pla-state-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PacsLandAllotmentModule } from '../pacsLandAllotmentModule/pacs-land-allotment.module';
import { FutureDatesMilkPouringReportComponent } from './components/dashboard/future-dates-milk-pouring-report/future-dates-milk-pouring-report.component';
import { MdacVSsapMilkCollectionModule } from '../mdacVSsapMilkCollectionModule/mdac-vssap-milk-collection.module';
import { MdacVSsapStateReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-state-report/mdac-vssap-state-report.component';
import { MdacVSsapDistrictReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-district-report/mdac-vssap-district-report.component';
import { FarmerMilkPouringCertDashboardComponent } from './components/farmer-milk-pouring-cert-dashboard/farmer-milk-pouring-cert-dashboard.component';
import { VolunteerCheckComponent } from './components/volunteer-check/volunteer-check.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { AmcuLandAllotmentStateReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-state-report/amcu-land-allotment-state-report.component';
import { AmcuLandAllotmentDistrictReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-district-report/amcu-land-allotment-district-report.component';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { AmcuLandAllotmentModule } from '../amcuLandAllotmentModule/amcu-land-allotment.module';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { VolunteerHhExcelDownloadComponent } from './components/volunteer-hh-excel-download/volunteer-hh-excel-download.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { FarmerPushStatusCheckComponent } from './components/statusCheck/farmer-push-status-check/farmer-push-status-check.component';
import { DatapushreportComponent } from './components/datapushreport/datapushreport.component';
import { FarmerFeedIndentDashboardComponent } from './components/farmer-feed-indent-dashboard/farmer-feed-indent-dashboard.component';
import { MilkdatadetailsRptComponent } from './components/milkdatadetails-rpt/milkdatadetails-rpt.component';
import { MilkdatadetailsUpdateComponent } from './components/milkdatadetails-update/milkdatadetails-update.component';
import { MilksecnariodataComponent } from './components/milksecnariodata/milksecnariodata.component';
import { GswspersonupdatedetailsComponent } from './components/gswspersonupdatedetails/gswspersonupdatedetails.component';
import { FarmermonitoringdistrictcountComponent } from './components/farmerMonitoringReport/farmermonitoringdistrictcount/farmermonitoringdistrictcount.component';
import { FarmerMonitoringDistrictReportComponent } from './components/farmerMonitoringReport/farmer-monitoring-district-report/farmer-monitoring-district-report.component';
import { FarmerMonitoringMandalReportComponent } from './components/farmerMonitoringReport/farmer-monitoring-mandal-report/farmer-monitoring-mandal-report.component';
import { AdminSMSCodesComponent } from './components/farmerMonitoringReport/admin-smscodes/admin-smscodes.component';
import { MdssRegRptComponent } from './components/mdss-reg-rpt/mdss-reg-rpt.component';
import { MdssFollowupAbstractReportComponent } from './components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { CheyuthaDistrictsReportsComponent } from './components/cheyutha-districts-reports/cheyutha-districts-reports.component';
import { CheyuthaMandalByDistIDReportsComponent } from './components/cheyutha-mandal-by-dist-idreports/cheyutha-mandal-by-dist-idreports.component';
import { CheyuthastateReportsComponent } from './components/cheyuthastate-reports/cheyuthastate-reports.component';
import { CheyuthaMandalReportsComponent } from './components/cheyutha-mandal-reports/cheyutha-mandal-reports.component';
import { CheyuthaRbkReportsComponent } from './components/cheyutha-rbk-reports/cheyutha-rbk-reports.component';
import { CheyuthaRbkbymandalidReportsComponent } from './components/cheyutha-rbkbymandalid-reports/cheyutha-rbkbymandalid-reports.component';
import { CheyuthaBeneficiaryReportComponent } from './components/cheyutha-beneficiary-report/cheyutha-beneficiary-report.component';
import { CheyuthaBeneficiarybyRbkIDReportComponent } from './components/cheyutha-beneficiaryby-rbk-idreport/cheyutha-beneficiaryby-rbk-idreport.component';
import { CheyuthaBenficiarysbyrbkReportsComponent } from './components/cheyutha-benficiarysbyrbk-reports/cheyutha-benficiarysbyrbk-reports.component';
import { CheyuthabenficiaryListByRbkComponent } from './components/cheyuthabenficiary-list-by-rbk/cheyuthabenficiary-list-by-rbk.component';
import { StatecheyuthabeneficiariescountComponent } from './components/statecheyuthabeneficiariescount/statecheyuthabeneficiariescount.component';
import { StatecheyuthaJpvRegisteredfarmerountComponent } from './components/statecheyutha-jpv-registeredfarmerount/statecheyutha-jpv-registeredfarmerount.component';
import { StatecheyuthabeneRegjpvfarmerChangecountComponent } from './components/statecheyuthabene-regjpvfarmer-changecount/statecheyuthabene-regjpvfarmer-changecount.component';
import { StatecheyuthabeneRegjpvfarmerChangegroundanimalcountComponent } from './components/statecheyuthabene-regjpvfarmer-changegroundanimalcount/statecheyuthabene-regjpvfarmer-changegroundanimalcount.component';
import { StatenoncheyuthabeneRegjpvfarmerChangegroundanimalcountComponent } from './components/statenoncheyuthabene-regjpvfarmer-changegroundanimalcount/statenoncheyuthabene-regjpvfarmer-changegroundanimalcount.component';
import { StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent } from './components/state-total-cheyutha-beneficiaries-groundedwithanimalscount/state-total-cheyutha-beneficiaries-groundedwithanimalscount.component';
import { StatejpvRegFarfacilitatedwithanimalgroundingcountComponent } from './components/statejpv-reg-farfacilitatedwithanimalgroundingcount/statejpv-reg-farfacilitatedwithanimalgroundingcount.component';
import { StatecheyuthavillagecountComponent } from './components/statecheyuthavillagecount/statecheyuthavillagecount.component';
import { StatestreenidhicountComponent } from './components/statestreenidhicount/statestreenidhicount.component';
import { StateunnathicountComponent } from './components/stateunnathicount/stateunnathicount.component';
import { StatebanklinkcountComponent } from './components/statebanklinkcount/statebanklinkcount.component';
import { StatetotalnoofanimalscountComponent } from './components/statetotalnoofanimalscount/statetotalnoofanimalscount.component';
import { SurveyedWithAnimalscountComponent } from './components/surveyed-with-animalscount/surveyed-with-animalscount.component';
import { SurveyedWithoutAnimalscountComponent } from './components/surveyed-without-animalscount/surveyed-without-animalscount.component';
import { SurvyednonregisteredbeneficiariescountComponent } from './components/survyednonregisteredbeneficiariescount/survyednonregisteredbeneficiariescount.component';
import { NonSurvyedcountComponent } from './components/non-survyedcount/non-survyedcount.component';
import { TotalmilkpouringdistrictwisereportComponent } from './components/totalmilkpouringdistrictwisereport/totalmilkpouringdistrictwisereport.component';
import { TotalmilkpouringfarmerbydistidwisereportComponent } from './components/totalmilkpouringfarmerbydistidwisereport/totalmilkpouringfarmerbydistidwisereport.component';
import { TotaldistrictreportdetailsComponent } from './components/dashboard/totaldistrictreportdetails/totaldistrictreportdetails.component';
import { NoofRbkCountReportComponent } from './components/dashboard/noof-rbk-count-report/noof-rbk-count-report.component';
import { NoofRbkCountDetailsComponent } from './components/dashboard/noof-rbk-count-details/noof-rbk-count-details.component';
import { DistrictWiseRbkReportComponent } from './components/dashboard/district-wise-rbk-report/district-wise-rbk-report.component';
import { DistrictWiseRbkDetailsComponent } from './components/dashboard/district-wise-rbk-details/district-wise-rbk-details.component';
import { RbkwiseReportComponent } from './components/dashboard/rbkwise-report/rbkwise-report.component';
import { RbkwiseDetailsComponent } from './components/dashboard/rbkwise-details/rbkwise-details.component';
import { VillagewiseReportComponent } from './components/dashboard/villagewise-report/villagewise-report.component';
import { VillagewiseDetailsComponent } from './components/dashboard/villagewise-details/villagewise-details.component';
import { FarmerwiseReportComponent } from './components/dashboard/farmerwise-report/farmerwise-report.component';
import { FarmerwiseDetailsComponent } from './components/dashboard/farmerwise-details/farmerwise-details.component';
import { WomenfarmerRegDistrictDetailsComponent } from './components/dashboard/womenfarmer-reg-district-details/womenfarmer-reg-district-details.component';
import { WomenfarmerRegDistrictReportsComponent } from './components/dashboard/womenfarmer-reg-district-reports/womenfarmer-reg-district-reports.component';
import { WomenfarmerRegMandalReportsComponent } from './components/dashboard/womenfarmer-reg-mandal-reports/womenfarmer-reg-mandal-reports.component';
import { WomenfarmerRegMandalDetailsComponent } from './components/dashboard/womenfarmer-reg-mandal-details/womenfarmer-reg-mandal-details.component';
import { WomenfarmerRegRbkDetailsComponent } from './components/dashboard/womenfarmer-reg-rbk-details/womenfarmer-reg-rbk-details.component';
import { WomenfarmerRegRbkReportComponent } from './components/dashboard/womenfarmer-reg-rbk-report/womenfarmer-reg-rbk-report.component';
import { WomenfarmerRegVillageReportComponent } from './components/dashboard/womenfarmer-reg-village-report/womenfarmer-reg-village-report.component';
import { WomenfarmerRegVillageDetailsComponent } from './components/dashboard/womenfarmer-reg-village-details/womenfarmer-reg-village-details.component';
import { WomenfarmerRegFarmerDetailsComponent } from './components/dashboard/womenfarmer-reg-farmer-details/womenfarmer-reg-farmer-details.component';
import { WomenfarmerRegFarmerReportComponent } from './components/dashboard/womenfarmer-reg-farmer-report/womenfarmer-reg-farmer-report.component';
import { VillageWiseDistrictReportComponent } from './components/dashboard/village-wise-district-report/village-wise-district-report.component';
import { VillageWiseMandalReportComponent } from './components/dashboard/village-wise-mandal-report/village-wise-mandal-report.component';
import { VillageWiseMandalGridReportComponent } from './components/dashboard/village-wise-mandal-grid-report/village-wise-mandal-grid-report.component';
import { VillageWiseRbkReportComponent } from './components/dashboard/village-wise-rbk-report/village-wise-rbk-report.component';
import { VillageWiseRbkGridReportComponent } from './components/dashboard/village-wise-rbk-grid-report/village-wise-rbk-grid-report.component';
import { VillageWiseVillageReportComponent } from './components/dashboard/village-wise-village-report/village-wise-village-report.component';
import { VillageWiseVillageGridReportComponent } from './components/dashboard/village-wise-village-grid-report/village-wise-village-grid-report.component';
import { VillageWiseFarmerReportComponent } from './components/dashboard/village-wise-farmer-report/village-wise-farmer-report.component';
import { VillageWiseFarmerGridReportComponent } from './components/dashboard/village-wise-farmer-grid-report/village-wise-farmer-grid-report.component';
import { VillageWiseDistrictDetailsComponent } from './components/dashboard/village-wise-district-details/village-wise-district-details.component';
import { PendingVillageDetailsComponent } from './components/dashboard/pending-village-details/pending-village-details.component';
import { PendingSocietiesDetailsComponent } from './components/dashboard/pending-societies-details/pending-societies-details.component';
import { PendingSocietiesReportComponent } from './components/dashboard/pending-societies-report/pending-societies-report.component';
import { PendingSocietiesInformationComponent } from './components/dashboard/pending-societies-information/pending-societies-information.component';
import { PendingVillageInformationComponent } from './components/dashboard/pending-village-information/pending-village-information.component';
import { PendingVillageReportComponent } from './components/dashboard/pending-village-report/pending-village-report.component';
import { DailyBargraphSocietyAbstractReportComponent } from './components/dashboard/daily-bargraph-society-abstract-report/daily-bargraph-society-abstract-report.component';
import { NewlyMilkPouringFarmersDistrictReportComponent } from './components/dashboard/newly-milk-pouring-farmers-district-report/newly-milk-pouring-farmers-district-report.component';
import { NewlyMilkPouringFarmersDistrictDetailsComponent } from './components/dashboard/newly-milk-pouring-farmers-district-details/newly-milk-pouring-farmers-district-details.component';
import { MilkpouredandpendingSocietiesComponent } from './components/dashboard/milkpouredandpending-societies/milkpouredandpending-societies.component';
import { MandalNewlyMilkPouringFarmersReportComponent } from './components/dashboard/mandal-newly-milk-pouring-farmers-report/mandal-newly-milk-pouring-farmers-report.component';
import { MandalNewlyMilkPouringFarmersGridListComponent } from './components/dashboard/mandal-newly-milk-pouring-farmers-grid-list/mandal-newly-milk-pouring-farmers-grid-list.component';
import { RBKNewlyMilkPouringFarmersReportComponent } from './components/dashboard/rbknewly-milk-pouring-farmers-report/rbknewly-milk-pouring-farmers-report.component';
import { RBKNewlyMilkPouringFarmersGridListComponent } from './components/dashboard/rbknewly-milk-pouring-farmers-grid-list/rbknewly-milk-pouring-farmers-grid-list.component';
import { VillageNewlyMilkPouringFarmersReportComponent } from './components/dashboard/village-newly-milk-pouring-farmers-report/village-newly-milk-pouring-farmers-report.component';
import { VillageNewlyMilkPouringFarmersGridListComponent } from './components/dashboard/village-newly-milk-pouring-farmers-grid-list/village-newly-milk-pouring-farmers-grid-list.component';
import { FarmerBeneficiaryNewlyMilkPouringReportsComponent } from './components/dashboard/farmer-beneficiary-newly-milk-pouring-reports/farmer-beneficiary-newly-milk-pouring-reports.component';
import { FarmerBeneficiaryNewlyMilkPouringFarmersListComponent } from './components/dashboard/farmer-beneficiary-newly-milk-pouring-farmers-list/farmer-beneficiary-newly-milk-pouring-farmers-list.component';
import { TodayNoOfWomenFarmerMilkPouringDistrictReportComponent } from './components/dashboard/today-no-of-women-farmer-milk-pouring-district-report/today-no-of-women-farmer-milk-pouring-district-report.component';
import { TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent } from './components/dashboard/today-no-of-women-farmer-milk-pouring-district-details/today-no-of-women-farmer-milk-pouring-district-details.component';
import { MandalNoOfWomenFarmerMilkPouringReportComponent } from './components/dashboard/mandal-no-of-women-farmer-milk-pouring-report/mandal-no-of-women-farmer-milk-pouring-report.component';
import { MandalNoOfWomenFarmerMilkPouringGridListComponent } from './components/dashboard/mandal-no-of-women-farmer-milk-pouring-grid-list/mandal-no-of-women-farmer-milk-pouring-grid-list.component';
import { RBKNoOfWomenFarmerMilkPouringReportComponent } from './components/dashboard/rbkno-of-women-farmer-milk-pouring-report/rbkno-of-women-farmer-milk-pouring-report.component';
import { RBKNoOfWomenFarmerMilkPouringGridListComponent } from './components/dashboard/rbkno-of-women-farmer-milk-pouring-grid-list/rbkno-of-women-farmer-milk-pouring-grid-list.component';
import { VillageNoOfWomenFarmerMilkPouringReportComponent } from './components/dashboard/village-no-of-women-farmer-milk-pouring-report/village-no-of-women-farmer-milk-pouring-report.component';
import { VillageNoOfWomenFarmerMilkPouringGridListComponent } from './components/dashboard/village-no-of-women-farmer-milk-pouring-grid-list/village-no-of-women-farmer-milk-pouring-grid-list.component';
import { FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent } from './components/dashboard/farmer-baneficiary-no-of-women-farmer-milk-pouring-report/farmer-baneficiary-no-of-women-farmer-milk-pouring-report.component';
import { FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent } from './components/dashboard/farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list/farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list.component';
import { DistWiseDistrictReportComponent } from './components/dashboard/dist-wise-district-report/dist-wise-district-report.component';
import { DistWiseDistrictDetailsReportComponent } from './components/dashboard/dist-wise-district-details-report/dist-wise-district-details-report.component';
import { DistWiseMandalReportComponent } from './components/dashboard/dist-wise-mandal-report/dist-wise-mandal-report.component';
import { DistWiseMandalDetailsReportComponent } from './components/dashboard/dist-wise-mandal-details-report/dist-wise-mandal-details-report.component';
import { DistWiseRbkReportComponent } from './components/dashboard/dist-wise-rbk-report/dist-wise-rbk-report.component';
import { DistWiseRbkDetailsReportComponent } from './components/dashboard/dist-wise-rbk-details-report/dist-wise-rbk-details-report.component';
import { DistWiseVillageReportComponent } from './components/dashboard/dist-wise-village-report/dist-wise-village-report.component';
import { DistWiseVillageDetailsReportComponent } from './components/dashboard/dist-wise-village-details-report/dist-wise-village-details-report.component';
import { DistWiseFarmerReportComponent } from './components/dashboard/dist-wise-farmer-report/dist-wise-farmer-report.component';
import { DistWiseFarmerDetailsReportComponent } from './components/dashboard/dist-wise-farmer-details-report/dist-wise-farmer-details-report.component';
import { SurvyedRegfarmerscountComponent } from './components/survyed-regfarmerscount/survyed-regfarmerscount.component';
import { DashboardDistrictWiseReportComponent } from './components/dashboard/dashboard-district-wise-report/dashboard-district-wise-report.component';
import { DashboardDistrictWiseDetailsComponent } from './components/dashboard/dashboard-district-wise-details/dashboard-district-wise-details.component';
import { DashboardNoofRbkCountReportComponent } from './components/dashboard/dashboard-noof-rbk-count-report/dashboard-noof-rbk-count-report.component';
import { DashboardNoofRbkCountDetailsComponent } from './components/dashboard/dashboard-noof-rbk-count-details/dashboard-noof-rbk-count-details.component';


import { DashboardVillageWiseDistrictReportComponent } from './components/dashboard/dashboard-village-wise-district-report/dashboard-village-wise-district-report.component';
import { DashboardVillageWiseDistrictDetailsComponent } from './components/dashboard/dashboard-village-wise-district-details/dashboard-village-wise-district-details.component';
import { DashboardWomenFarmerRegDistrictReportComponent } from './components/dashboard/dashboard-women-farmer-reg-district-report/dashboard-women-farmer-reg-district-report.component';
import { DashboardWomenFarmerRegDistrictDetailsComponent } from './components/dashboard/dashboard-women-farmer-reg-district-details/dashboard-women-farmer-reg-district-details.component';
import { DashboardTotalMilkPouringDistrictwiseReportComponent } from './components/dashboard/dashboard-total-milk-pouring-districtwise-report/dashboard-total-milk-pouring-districtwise-report.component';
import { DashboardTotalMilkPouringDistrictwiseDetailsComponent } from './components/dashboard/dashboard-total-milk-pouring-districtwise-details/dashboard-total-milk-pouring-districtwise-details.component';
import { AllMastersDetailsComponent } from './components/Masterdetails/all-masters-details/all-masters-details.component';
import { SocietyMonitoringReportComponent } from './components/SocietyMonitoring/society-monitoring-report/society-monitoring-report.component';
import { SocietyMonitoringListComponent } from './components/SocietyMonitoring/society-monitoring-list/society-monitoring-list.component';
import { SocietyMonitoringDayWiseCheckComponent } from './components/SocietyMonitoring/society-monitoring-day-wise-check/society-monitoring-day-wise-check.component';
import { SocietyMonitoringDayWiseGridListComponent } from './components/SocietyMonitoring/society-monitoring-day-wise-grid-list/society-monitoring-day-wise-grid-list.component';
import { NotificationsComponent } from '../login/components/notifications/notifications.component';
 
import { JobApplicationDetailsComponent } from './components/job-application-details/job-application-details.component';
import { ToDatCumDashboardDetComponent } from './components/ccc/to-dat-cum-dashboard-det/to-dat-cum-dashboard-det.component';
import { MdssPromotersMilkPouringStatusComponent } from './components/mdss-promoters-milk-pouring-status/mdss-promoters-milk-pouring-status.component';
import { MdssAdhocMilkPouringDetailsComponent } from './components/mdss-adhoc-milk-pouring-details/mdss-adhoc-milk-pouring-details.component';
import { AdminUniontransationDetailsComponent } from './components/admin-uniontransation-details/admin-uniontransation-details.component';
import { AmcuportaldataComponent } from './components/amcuportaldata/amcuportaldata.component';
import { AmcuportaldataReportComponent } from './components/amcuportaldata-report/amcuportaldata-report.component';
import { MilkComparativeTxnReportComponent } from './components/milk-comparative-txn-report/milk-comparative-txn-report.component';
import { PromptFarmerDataPushStatusComponent } from './components/prompt-farmer-data-push-status/prompt-farmer-data-push-status.component';
import { VAOwisefarmersreportComponent } from './components/vaowisefarmersreport/vaowisefarmersreport.component';
import { VAOwisefarmersreportDetailsComponent } from './components/vaowisefarmersreport-details/vaowisefarmersreport-details.component';
import { FarmerApprovalVillageLevelReportComponent } from './components/farmer-approval-village-level-report/farmer-approval-village-level-report.component';
import { FarmerApprovalVillageLevelDetailsComponent } from './components/farmer-approval-village-level-details/farmer-approval-village-level-details.component';
import { FarmerApprovalClusterLevelReportComponent } from './components/farmer-approval-cluster-level-report/farmer-approval-cluster-level-report.component';
import { FarmerApprovalClusterLevelDetailsComponent } from './components/farmer-approval-cluster-level-details/farmer-approval-cluster-level-details.component';
import { FarmerApprovalDetailsLevelReportComponent } from './components/farmer-approval-details-level-report/farmer-approval-details-level-report.component';
import { FarmerApprovalDetailsLevelDetailsComponent } from './components/farmer-approval-details-level-details/farmer-approval-details-level-details.component';
import { MeetingPhotosUploadComponent } from './components/meeting-photos-upload/meeting-photos-upload.component';
import { MeetingPhotosListComponent } from './components/meeting-photos-list/meeting-photos-list.component';
import { SessionWiseMilkPouringStateLevelReportComponent } from './components/session-wise-milk-pouring-state-level-report/session-wise-milk-pouring-state-level-report.component';
import { SessionWiseMilkPouringStateLevelDetailsComponent } from './components/session-wise-milk-pouring-state-level-details/session-wise-milk-pouring-state-level-details.component';
import { SessionWiseMilkPouringDistrictLevelReportComponent } from './components/session-wise-milk-pouring-district-level-report/session-wise-milk-pouring-district-level-report.component';
 
import { SessionWiseMilkPouringMentorLevelReportComponent } from './components/session-wise-milk-pouring-mentor-level-report/session-wise-milk-pouring-mentor-level-report.component';
import { SessionWiseMilkPouringMentorLevelDetailsComponent } from './components/session-wise-milk-pouring-mentor-level-details/session-wise-milk-pouring-mentor-level-details.component';
import { SessionWiseMilkPouringRBKLevelReportComponent } from './components/session-wise-milk-pouring-rbklevel-report/session-wise-milk-pouring-rbklevel-report.component';
import { SessionWiseMilkPouringRBKLevelDetailsComponent } from './components/session-wise-milk-pouring-rbklevel-details/session-wise-milk-pouring-rbklevel-details.component';
import { SessionWiseMilkPouringDistrictLevelDetailsComponent } from './components/session-wise-milk-pouring-district-level-details/session-wise-milk-pouring-district-level-details.component';
import { MDSSRBKDetailsComponent } from './components/mdssrbkdetails/mdssrbkdetails.component';
import { DashBoardsForMdssRegistrationComponent } from './components/dash-boards-for-mdss-registration/dash-boards-for-mdss-registration.component';
import { MdssDashBoardTotalRBKsCountComponent } from './components/mdss-dash-board-total-rbks-count/mdss-dash-board-total-rbks-count.component';
import { MdssDashBoardPromoterAddedCountComponent } from './components/mdss-dash-board-promoter-added-count/mdss-dash-board-promoter-added-count.component';
import { MdssDashBoardAttendanceSubmittedCountComponent } from './components/mdss-dash-board-attendance-submitted-count/mdss-dash-board-attendance-submitted-count.component';
import { MdssDashBoardEligibleMDSSCountComponent } from './components/mdss-dash-board-eligible-mdsscount/mdss-dash-board-eligible-mdsscount.component';
import { FarmerBankAllDetailsUpdateComponent } from './components/farmer-bank-all-details-update/farmer-bank-all-details-update.component';
import { SocietyChangeDashboardForAllDistrictsComponent } from './components/society-change-dashboard-for-all-districts/society-change-dashboard-for-all-districts.component';
import { AadharInputComponent } from './components/aadhar-input/aadhar-input.component';
import { BmcuEquipmentsStatusReportComponent } from './components/bmcu-equipments-status-report/bmcu-equipments-status-report.component';
import { EditBmcusCalibrationComponent } from './components/edit-bmcus-calibration/edit-bmcus-calibration.component';
import { BmcuEquipmentFileUploadComponent } from './components/bmcu-equipment-file-upload/bmcu-equipment-file-upload.component';
import { BmcuEquipmentsPARComponent } from './components/bmcu-equipments-par/bmcu-equipments-par.component';
import { BmcuEquipmentsStatusDetailsComponent } from './components/bmcu-equipments-status-details/bmcu-equipments-status-details.component';
import { BmcuEquipmentSubmittedReportComponent } from './components/bmcu-equipment-submitted-report/bmcu-equipment-submitted-report.component';
import { BmcuEquipmentSubmittedDetailsComponent } from './components/bmcu-equipment-submitted-details/bmcu-equipment-submitted-details.component';
import { BmcuEquipmentNotSubmittedReportComponent } from './components/bmcu-equipment-not-submitted-report/bmcu-equipment-not-submitted-report.component';
import { BmcuEquipmentNotSubmittedDetailsComponent } from './components/bmcu-equipment-not-submitted-details/bmcu-equipment-not-submitted-details.component';
import { MdacAccountDashboardComponent } from './components/mdac-account-dashboard/mdac-account-dashboard.component';
import { PromotersDashboardComponent } from './components/promoters-dashboard/promoters-dashboard.component';
 
@NgModule({
  declarations: [
    CommonComponent,
    VillagemeetingStateComponent,
    VillagemeetingMentorComponent,
    VillagemeetingRbkComponent,
    VillagemeetingVillageComponent,
    VillagemeetingSecAndAssSecComponent,
    VillagemeetingFunctionariesComponent,
    VillagemeetingAttendanceComponent,
    FarmerMpussRegDetailReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerMpussRegRbkReportComponent,
    FarmerMpussRegDistrictReportComponent,
    FarmerMpussRegStateReportComponent,
    CheyuthaBankDistrictLevelComponent,
    CheyuthaBankRbkLevelComponent,
    CheyuthaBankStateLevelComponent,
    CheyuthaBankPendingReportComponent,
    CheyuthaBankRejectedReportComponent,
    CheyuthaBankAcceptedReportComponent,
    VillageMeetingBuildingInsReportComponent,
    VillageMeetingCalibrationReportComponent,
    VillageMeetingPromotersReportComponent,
    FarmerabstractTxnDistrictReportComponent,
    FarmerabstractTxnStateReportComponent,
    FarmerabstractTxnMandalReportComponent,
    FarmerabstractTxnSocietyReportComponent,
    MpuacBankAccStateReportComponent,
    MpuacBankAccMentorReportComponent,
    MpuacBankAccRbkReportComponent,
    MpuacBankAccDetailReportComponent,
    PromotersStateReportComponent,
    PromotersMentorReportComponent,
    PromotersRbkReportComponent,
    PromotersDetailReportComponent,
    CalibrationStateLevelReportComponent,
    CalibrationMentorLevelReportComponent,
    CalibrationRbkLevelReportComponent,
    CalibrationDetailLevelReportComponent,
    SecAsstSecStateReportComponent,
    SecAsstSecMentorReportComponent,
    SecAsstSecRbkReportComponent,
    SecAsstSecDetailReportComponent,
    LdmbankWiseStateReportComponent,
    LdmbankWiseDistrictReportComponent,
    LdmbankWiseMandalReportComponent,
    LdmbankWiseBranchReportComponent,
    LdmbankWiseRbkReportComponent,
    LdmbankWisePendingReportComponent,
    LdmbankWiseApprovedRejectedReportComponent,
    FarmerRegistrationStatusComponent,
    CheyuthaBankMandalLevelComponent,
    BuildingInspectionStateReportComponent,
    BuildingInspectionMentorReportComponent,
    BuildingInspectionRbkReportComponent,
    BuildingInspectionDetailReportComponent,
    AmcuHandingOverStateReportComponent,
    AmcuHandingOverMentorReportComponent,
    AmcuHandingOverRbkReportComponent,
    AmcuHandingOverDetailReportComponent,
    FarmerMilkCollectionReportComponent,
    LoginReportStateLevelComponent,
    RouteMapStateLevelComponent,
    RbkRoutesMapComponentComponent,
    BuildingAbstractStateReportComponent,
    BuildingAbstractMandalReportComponent,
    BuildingAbstractRbkReportComponent,
    BuildingAbstractVillageReportComponent,
    MainDashboardComponent,
    FarmerNatureOfUnitStateReportComponent,
    FarmerNatureOfUnitDistrictReportComponent,
    FarmerNatureOfUnitMandalReportComponent,
    FarmerNatureOfUnitDetailReportComponent,
    FarmerBankBAUStatusStateReportComponent,
    FarmerBankBAUStatusDistrictReportComponent,
    FarmerBankBAUStatusMandalReportComponent,
    FarmerBankBAUStatusRbkReportComponent,
    LandAllotmentStateReportComponent,
    LandAllotmentDistrictReportComponent,
    LandAllotmentMandalReportComponent,
    PaymentStatusStateReportComponent,
    PaymentStatusDistrictReportComponent,
    PaymentStatusMandalReportComponent,
    PaymentStatusRbkReportComponent,
    PaymentStatusDetailReportComponent,
    FarmerBankPendingAtDaReportComponent,
    FarmerBankInvalidAccountsReportComponent,
    FarmerBankVerifiedAcceptedRejectedReportComponent,
    GroundingStateLevelReportComponent,
    GroundingDistrictLevelReportComponent,
    GroundingMandalLevelReportComponent,
    GroundingDetailLevelReportComponent,
    GroundingApprovedRejectedReportComponent,
    MpuacBankAccMandalReportComponent,
    LoanSanctionAndGroundingReportComponent,
    BankerLoanSanctionAndGroundingReportComponent,
    FarmerRegistrationDetailReportComponent,
    MdacNotCreatedRbkListReportComponent,
    FarmerBankPendingAtMentorReportComponent,
    TotalDistrictsReportComponent,
    TotalRBKReportComponent,
    TotalVillagesReportComponent,
    TotalRegisteredFarmersReportComponent,
    TotalMilkPouringFarmersReportComponent,
    DailyTotalRegisterdFarmersReportComponent,
    DailyTotalMilkPopuringFarmersReportComponent,
    FarmerAbstractReportComponent,
    SocietyAbstractReportComponent,
    DashboardCountsComponent,
    DashboardGraphsComponent,
    FarmerRouteWiseMilkPouringReportComponent,
    FarmerAbstractTxnRbkReportComponent,
    MdacBankAccVillageReportComponent,
    VvFarmerDataStateReportComponent,
    VvFarmerDataDistrictReportComponent,
    VvFarmerDataMandalReportComponent,
    VvFarmerDataRoutesReportComponent,
    VvFarmerDataRbkReportComponent,
    VvFarmerDataVillageReportComponent,
    VvFarmerVolunteersListReportComponent,
    VvFarmerVolunteersLoggedInReportComponent,
    VvFarmerApprovedListReportComponent,
    VvHHAnimalsStateReportComponent,
    VvHHAnimalsDistrictReportComponent,
    VvHHAnimalsMandalReportComponent,
    VvHHAnimalsRbkReportComponent,
    VvHHAnimalsVillageReportComponent,
    AmcuInspectionStateReportComponent,
    AmcuInspectionDistrictReportComponent,
    AmcuInspectedSocitiesReportComponent,
    AmcuNotInspectedSocitiesReportComponent,
    NetworkNotSubmittedVillagesReportComponent,
    NetworkSubmittedVillagesReportComponent,
    AmcuNetworkStateReportComponent,
    AmcuNetworkDistrictReportComponent,
    FarmerApprovalStateReportComponent,
    FarmerApprovalDistrictReportComponent,
    FarmerApprovalMandalReportComponent,
    FarmerApprovalRoutesReportComponent,
    FamerSmsStateReportComponent,
    FamerSmsDistrictReportComponent,
    FamerSmsMandalReportComponent,
    FamerSmsRbkReportComponent,
    FamerSmsDetailReportComponent,
    VvFarmerDataRouteWiseListComponent,
    VvFarmerDataVillageWiseListComponent,
    MdacSocietyWiseReportComponent,
    VvHHAnimalsClusterReportComponent,
    FarmerMilkPouringStateReportComponent,
    FarmerMilkPouringDistrictReportComponent,
    FarmerMilkPouringRouteReportComponent,
    FarmerMilkPouringMandalReportComponent,
    NewlyMilkPouringFarmersReportComponent,
    MdacNotCreatedStateLevelReportComponent,
    BmcuConstructionStateReportComponent,
    BmcuConstructionDistrictReportComponent,
    BmcuConstructionMandalReportComponent,
    BmcuConstructionRbkReportComponent,
    FarmerSchemeStateReportComponent,
    FarmerSchemeDistrictReportComponent,
    FarmerSchemeRouteReportComponent,
    FarmerSchemeMandalReportComponent,
    FarmerSchemeRbkReportComponent,
    FarmerSchemeVillageReportComponent,
    NonMilkPouringReportComponent,
    MomStateReportComponent,
    MomDistrictReportComponent,
    MomMandalReportComponent,
    MomRbkReportComponent,
    MomVillageReportComponent,
    FarmerMilkPouringDetailReportComponent,
    PromotersAddedRBKLevelComponent,
    PromotersNotAddedRBKLevelComponent,
    TotalPromotersAddedLevelComponent,
    VafStateLevelReportComponent,
    VafDistrictLevelReportComponent,
    VafMandalLevelReportComponent,
    VafDetailLevelReportComponent,
    VafRbkLevelReportComponent,
    CmpStateLevelReportComponent,
    CmpMilkPourerDetailReportComponent,
    VwMilkPouringReportComponent,
    SecAsstSecNotAddedReportComponent,
    PasswordResetComponent,
    PlaStateReportComponent,
    PlaDistrictReportComponent,
    PlaMandalReportComponent,
    FutureDatesMilkPouringReportComponent,
    MdacVSsapStateReportComponent,
    MdacVSsapDistrictReportComponent,
    FarmerMilkPouringCertDashboardComponent,
    VolunteerCheckComponent,
    AmcuHoNotSubmittedVillagesReportComponent,
    VvHhanimalsPendingHhReportComponent,
    AmcuLandAllotmentStateReportComponent,
    AmcuLandAllotmentDistrictReportComponent,
    AmcuLandAllotmentMandalReportComponent,
    MilkPouringFarmersReportComponent,
    VolunteerHhExcelDownloadComponent,
    NonMilkPouringFarmersReportComponent,
    FarmerPushStatusCheckComponent,
    DatapushreportComponent,
    FarmerFeedIndentDashboardComponent,
    MilkdatadetailsRptComponent,
    MilkdatadetailsUpdateComponent,
    MilksecnariodataComponent,
    GswspersonupdatedetailsComponent,
    FarmermonitoringdistrictcountComponent,
    FarmerMonitoringDistrictReportComponent,
    FarmerMonitoringMandalReportComponent,
    AdminSMSCodesComponent,
    MdssRegRptComponent,
    MdssFollowupAbstractReportComponent,
    CheyuthaDistrictsReportsComponent,
    CheyuthaMandalByDistIDReportsComponent,
    CheyuthastateReportsComponent,
    CheyuthaMandalReportsComponent,
    CheyuthaRbkReportsComponent,
    CheyuthaRbkbymandalidReportsComponent,
    CheyuthaBeneficiaryReportComponent,
    CheyuthaBeneficiarybyRbkIDReportComponent,
    CheyuthaBenficiarysbyrbkReportsComponent,
    CheyuthabenficiaryListByRbkComponent,
    StatecheyuthabeneficiariescountComponent,
    StatecheyuthaJpvRegisteredfarmerountComponent,
    StatecheyuthabeneRegjpvfarmerChangecountComponent,
    StatecheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
    StatenoncheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
    StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent,
    StatejpvRegFarfacilitatedwithanimalgroundingcountComponent,
    StatecheyuthavillagecountComponent,
    StatestreenidhicountComponent,
    StateunnathicountComponent,
    StatebanklinkcountComponent,
    StatetotalnoofanimalscountComponent,
    SurveyedWithAnimalscountComponent,
    SurveyedWithoutAnimalscountComponent,
    SurvyednonregisteredbeneficiariescountComponent,
    NonSurvyedcountComponent,
    TotalmilkpouringdistrictwisereportComponent,
    TotalmilkpouringfarmerbydistidwisereportComponent,
    TotaldistrictreportdetailsComponent,
    NoofRbkCountReportComponent,
    NoofRbkCountDetailsComponent,
    DistrictWiseRbkReportComponent,
    DistrictWiseRbkDetailsComponent,
    RbkwiseReportComponent,
    RbkwiseDetailsComponent,
    VillagewiseReportComponent,
    VillagewiseDetailsComponent,
    FarmerwiseReportComponent,
    FarmerwiseDetailsComponent,
    WomenfarmerRegDistrictDetailsComponent,
    WomenfarmerRegDistrictReportsComponent,
    WomenfarmerRegMandalReportsComponent,
    WomenfarmerRegMandalDetailsComponent,
    WomenfarmerRegRbkDetailsComponent,
    WomenfarmerRegRbkReportComponent,
    WomenfarmerRegVillageReportComponent,
    WomenfarmerRegVillageDetailsComponent,
    WomenfarmerRegFarmerDetailsComponent,
    WomenfarmerRegFarmerReportComponent,
    VillageWiseDistrictReportComponent,
    VillageWiseMandalReportComponent,
    VillageWiseMandalGridReportComponent,
    VillageWiseRbkReportComponent,
    VillageWiseRbkGridReportComponent,
    VillageWiseVillageReportComponent,
    VillageWiseVillageGridReportComponent,
    VillageWiseFarmerReportComponent,
    VillageWiseFarmerGridReportComponent,
    VillageWiseDistrictDetailsComponent,
    PendingVillageDetailsComponent,
    PendingSocietiesDetailsComponent,
    PendingSocietiesReportComponent,
    PendingSocietiesInformationComponent,
    PendingVillageInformationComponent,
    PendingVillageReportComponent,
    DailyBargraphSocietyAbstractReportComponent,
    NewlyMilkPouringFarmersDistrictReportComponent,
    NewlyMilkPouringFarmersDistrictDetailsComponent,
    MilkpouredandpendingSocietiesComponent,
    MandalNewlyMilkPouringFarmersReportComponent,
    MandalNewlyMilkPouringFarmersGridListComponent,
    RBKNewlyMilkPouringFarmersReportComponent,
    RBKNewlyMilkPouringFarmersGridListComponent,
    VillageNewlyMilkPouringFarmersReportComponent,
    VillageNewlyMilkPouringFarmersGridListComponent,
    FarmerBeneficiaryNewlyMilkPouringReportsComponent,
    FarmerBeneficiaryNewlyMilkPouringFarmersListComponent,
    TodayNoOfWomenFarmerMilkPouringDistrictReportComponent,
    TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent,
    MandalNoOfWomenFarmerMilkPouringReportComponent,
    MandalNoOfWomenFarmerMilkPouringGridListComponent,
    RBKNoOfWomenFarmerMilkPouringReportComponent,
    RBKNoOfWomenFarmerMilkPouringGridListComponent,
    VillageNoOfWomenFarmerMilkPouringReportComponent,
    VillageNoOfWomenFarmerMilkPouringGridListComponent,
    FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent,
    FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent,
    DistWiseDistrictReportComponent,
    DistWiseDistrictDetailsReportComponent,
    DistWiseMandalReportComponent,
    DistWiseMandalDetailsReportComponent,
    DistWiseRbkReportComponent,
    DistWiseRbkDetailsReportComponent,
    DistWiseVillageReportComponent,
    DistWiseVillageDetailsReportComponent,
    DistWiseFarmerReportComponent,
    DistWiseFarmerDetailsReportComponent,
    SurvyedRegfarmerscountComponent,
    DashboardDistrictWiseReportComponent,
    DashboardDistrictWiseDetailsComponent,
    DashboardNoofRbkCountReportComponent,
    DashboardNoofRbkCountDetailsComponent,     
    DashboardVillageWiseDistrictReportComponent,
    DashboardVillageWiseDistrictDetailsComponent,
    DashboardWomenFarmerRegDistrictReportComponent,
    DashboardWomenFarmerRegDistrictDetailsComponent,
    DashboardTotalMilkPouringDistrictwiseReportComponent,
    DashboardTotalMilkPouringDistrictwiseDetailsComponent,
    AllMastersDetailsComponent,
    SocietyMonitoringReportComponent,
    SocietyMonitoringListComponent,
    SocietyMonitoringDayWiseCheckComponent,
    SocietyMonitoringDayWiseGridListComponent,
    JobApplicationDetailsComponent,
    ToDatCumDashboardDetComponent,
    MdssPromotersMilkPouringStatusComponent,
    MdssAdhocMilkPouringDetailsComponent,
    AdminUniontransationDetailsComponent,
    AmcuportaldataComponent,
    AmcuportaldataReportComponent,
    MilkComparativeTxnReportComponent,
    PromptFarmerDataPushStatusComponent,
    VAOwisefarmersreportComponent,
    VAOwisefarmersreportDetailsComponent,
    FarmerApprovalVillageLevelReportComponent,
    FarmerApprovalVillageLevelDetailsComponent,
    FarmerApprovalClusterLevelReportComponent,
    FarmerApprovalClusterLevelDetailsComponent,
    FarmerApprovalDetailsLevelReportComponent,
    FarmerApprovalDetailsLevelDetailsComponent,
    MeetingPhotosUploadComponent,
    MeetingPhotosListComponent,
    SessionWiseMilkPouringStateLevelReportComponent,
    SessionWiseMilkPouringStateLevelDetailsComponent,
    SessionWiseMilkPouringDistrictLevelReportComponent,
     
    SessionWiseMilkPouringMentorLevelReportComponent,
    SessionWiseMilkPouringMentorLevelDetailsComponent,
    SessionWiseMilkPouringRBKLevelReportComponent,
    SessionWiseMilkPouringRBKLevelDetailsComponent,
    SessionWiseMilkPouringDistrictLevelDetailsComponent,
    MDSSRBKDetailsComponent,
    DashBoardsForMdssRegistrationComponent,
    MdssDashBoardTotalRBKsCountComponent,
    MdssDashBoardPromoterAddedCountComponent,
    MdssDashBoardAttendanceSubmittedCountComponent,
    MdssDashBoardEligibleMDSSCountComponent,
    FarmerBankAllDetailsUpdateComponent,
    SocietyChangeDashboardForAllDistrictsComponent,
    AadharInputComponent,
    BmcuEquipmentsStatusReportComponent,
    EditBmcusCalibrationComponent,
    BmcuEquipmentFileUploadComponent,
    BmcuEquipmentsPARComponent,
    BmcuEquipmentsStatusDetailsComponent,
    BmcuEquipmentSubmittedReportComponent,
    BmcuEquipmentSubmittedDetailsComponent,
    BmcuEquipmentNotSubmittedReportComponent,
    BmcuEquipmentNotSubmittedDetailsComponent,
    MdacAccountDashboardComponent,
    PromotersDashboardComponent,
  ],
  imports: [
    CommonModule,
    StateLevelRoutingModule,
    VillageMeetingModule,
    FarmerMpussRegModule,
    BankerModuleModule,
    FarmerAbstractTxnModuleModule,
    LdmBankModule,
    MpuacBankAccModule,
    CalibrationModuleModule,
    SecAsstSecModuleModule,
    FormsModule,
    PromotersModuleModule,
    LdmBankWiseModuleModule,
    BuildingInspectionModuleModule,
    AmcuHandingOverModuleModule,
    LoginReportModuleModule,
    BuildingAbstractModuleModule,
    FarmerNatureOfUnitModule,
    FarmerBankAccUpdateStatusModuleModule,
    LandAllotmentModuleModule,
    PaymentStatusModule,
    CheyuthaGroundingModule,
    VolunteerFarmerDataModuleModule,
    VvHHAnimalsModule,
    AmcuInspectionModule,
    AmcuNetworkInspectionModule,
    FarmerApprovalModule,
    FarmerSmsModule,
    MdacSocietyWiseModule,
    FarmerMilkPouringModule,
    BmcuConstructionModule,
    MinutesOfMeetingModule,
    FarmerSchemeModule,
    VolunteerAsFarmerModule,
    ComparitiveMilkPourerModule,
    PacsLandAllotmentModule,
    MdacVSsapMilkCollectionModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgApexchartsModule,
    GoogleMapsModule,
    SharedModule,
    
    AmcuLandAllotmentModule
  ],
  exports: [
    LoanSanctionAndGroundingReportComponent,
    BankerLoanSanctionAndGroundingReportComponent, 
    DashboardCountsComponent,
    DashboardGraphsComponent,
       CheyuthaMandalByDistIDReportsComponent,
       CheyuthaRbkReportsComponent,
       FarmerMilkPouringCertDashboardComponent,
       CheyuthaMandalReportsComponent,
       CheyuthaRbkReportsComponent, 
       StatecheyuthavillagecountComponent,
  ],
})
export class StateLevelModule {}
