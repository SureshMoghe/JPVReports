import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PromptwelcomepageComponent } from '../prompt-module/components/promptwelcomepage/promptwelcomepage.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverStateReportComponent } from './components/amcuHandingOver/amcu-handing-over-state-report/amcu-handing-over-state-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuInspectionStateReportComponent } from './components/amcuInspection/amcu-inspection-state-report/amcu-inspection-state-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { AmcuLandAllotmentDistrictReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-district-report/amcu-land-allotment-district-report.component';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { AmcuLandAllotmentStateReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-state-report/amcu-land-allotment-state-report.component';
import { AmcuNetworkDistrictReportComponent } from './components/amcuNetworkInspection/amcu-network-district-report/amcu-network-district-report.component';
import { AmcuNetworkStateReportComponent } from './components/amcuNetworkInspection/amcu-network-state-report/amcu-network-state-report.component';
import { NetworkNotSubmittedVillagesReportComponent } from './components/amcuNetworkInspection/network-not-submitted-villages-report/network-not-submitted-villages-report.component';
import { NetworkSubmittedVillagesReportComponent } from './components/amcuNetworkInspection/network-submitted-villages-report/network-submitted-villages-report.component';
import { BankerLoanSanctionAndGroundingReportComponent } from './components/bankerLoanSanctionAndGrounding/banker-loan-sanction-and-grounding-report/banker-loan-sanction-and-grounding-report.component';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { BmcuConstructionStateReportComponent } from './components/bmcuConstruction/bmcu-construction-state-report/bmcu-construction-state-report.component';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractStateReportComponent } from './components/buildingAbstract/building-abstract-state-report/building-abstract-state-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionStateReportComponent } from './components/buildingInspection/building-inspection-state-report/building-inspection-state-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CalibrationStateLevelReportComponent } from './components/calibration/calibration-state-level-report/calibration-state-level-report.component';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { CheyuthaBankStateLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-state-level/cheyutha-bank-state-level.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingStateLevelReportComponent } from './components/cheyuthaGrounding/grounding-state-level-report/grounding-state-level-report.component';
import { CommonComponent } from './components/common/common.component';
import { CmpMilkPourerDetailReportComponent } from './components/comparitiveMilkPourer/cmp-milk-pourer-detail-report/cmp-milk-pourer-detail-report.component';
import { CmpStateLevelReportComponent } from './components/comparitiveMilkPourer/cmp-state-level-report/cmp-state-level-report.component';
import { DailyTotalMilkPopuringFarmersReportComponent } from './components/dashboard/daily-total-milk-popuring-farmers-report/daily-total-milk-popuring-farmers-report.component';
import { DailyTotalRegisterdFarmersReportComponent } from './components/dashboard/daily-total-registerd-farmers-report/daily-total-registerd-farmers-report.component';
import { FutureDatesMilkPouringReportComponent } from './components/dashboard/future-dates-milk-pouring-report/future-dates-milk-pouring-report.component';
import { NewlyMilkPouringFarmersReportComponent } from './components/dashboard/newly-milk-pouring-farmers-report/newly-milk-pouring-farmers-report.component';
import { TotalDistrictsReportComponent } from './components/dashboard/total-districts-report/total-districts-report.component';
import { TotalMilkPouringFarmersReportComponent } from './components/dashboard/total-milk-pouring-farmers-report/total-milk-pouring-farmers-report.component';
import { TotalRBKReportComponent } from './components/dashboard/total-rbkreport/total-rbkreport.component';
import { TotalRegisteredFarmersReportComponent } from './components/dashboard/total-registered-farmers-report/total-registered-farmers-report.component';
import { TotalVillagesReportComponent } from './components/dashboard/total-villages-report/total-villages-report.component';
import { DatapushreportComponent } from './components/datapushreport/datapushreport.component';
import { FarmerFeedIndentDashboardComponent } from './components/farmer-feed-indent-dashboard/farmer-feed-indent-dashboard.component';
import { FarmerMilkCollectionReportComponent } from './components/farmer-milk-collection-report/farmer-milk-collection-report.component';
import { FarmerMilkPouringCertDashboardComponent } from './components/farmer-milk-pouring-cert-dashboard/farmer-milk-pouring-cert-dashboard.component';
import { FarmerRegistrationDetailReportComponent } from './components/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { FarmerAbstractReportComponent } from './components/farmerAbstract/farmer-abstract-report/farmer-abstract-report.component';
import { FarmerRouteWiseMilkPouringReportComponent } from './components/farmerAbstract/farmer-route-wise-milk-pouring-report/farmer-route-wise-milk-pouring-report.component';
import { SocietyAbstractReportComponent } from './components/farmerAbstract/society-abstract-report/society-abstract-report.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerabstractTxnStateReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-state-report/farmerabstract-txn-state-report.component';
import { FarmerApprovalDistrictReportComponent } from './components/farmerApproval/farmer-approval-district-report/farmer-approval-district-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FarmerApprovalStateReportComponent } from './components/farmerApproval/farmer-approval-state-report/farmer-approval-state-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankBAUStatusStateReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-state-report/farmer-bank-baustatus-state-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMilkPouringDetailReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-detail-report/farmer-milk-pouring-detail-report.component';
import { FarmerMilkPouringDistrictReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-district-report/farmer-milk-pouring-district-report.component';
import { FarmerMilkPouringMandalReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mandal-report/farmer-milk-pouring-mandal-report.component';
import { FarmerMilkPouringRouteReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-route-report/farmer-milk-pouring-route-report.component';
import { FarmerMilkPouringStateReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-state-report/farmer-milk-pouring-state-report.component';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { AdminSMSCodesComponent } from './components/farmerMonitoringReport/admin-smscodes/admin-smscodes.component';
import { FarmerMonitoringDistrictReportComponent } from './components/farmerMonitoringReport/farmer-monitoring-district-report/farmer-monitoring-district-report.component';
import { FarmerMonitoringMandalReportComponent } from './components/farmerMonitoringReport/farmer-monitoring-mandal-report/farmer-monitoring-mandal-report.component';
import { FarmermonitoringdistrictcountComponent } from './components/farmerMonitoringReport/farmermonitoringdistrictcount/farmermonitoringdistrictcount.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegStateReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-state-report/farmer-mpuss-reg-state-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerNatureOfUnitDetailReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-detail-report/farmer-nature-of-unit-detail-report.component';
import { FarmerNatureOfUnitDistrictReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-report/farmer-nature-of-unit-district-report.component';
import { FarmerNatureOfUnitMandalReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-mandal-report/farmer-nature-of-unit-mandal-report.component';
import { FarmerNatureOfUnitStateReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-state-report/farmer-nature-of-unit-state-report.component';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeStateReportComponent } from './components/farmerScheme/farmer-scheme-state-report/farmer-scheme-state-report.component';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSMS/famer-sms-detail-report/famer-sms-detail-report.component';
import { FamerSmsDistrictReportComponent } from './components/farmerSMS/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSMS/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSMS/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { FamerSmsStateReportComponent } from './components/farmerSMS/famer-sms-state-report/famer-sms-state-report.component';
import { GswspersonupdatedetailsComponent } from './components/gswspersonupdatedetails/gswspersonupdatedetails.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LandAllotmentStateReportComponent } from './components/landAllotment/land-allotment-state-report/land-allotment-state-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LdmbankWiseStateReportComponent } from './components/ldmBankWise/ldmbank-wise-state-report/ldmbank-wise-state-report.component';
import { LoanSanctionAndGroundingReportComponent } from './components/loanSanctionAndGrounding/loan-sanction-and-grounding-report/loan-sanction-and-grounding-report.component';
import { LoginReportStateLevelComponent } from './components/loginReport/login-report-state-level/login-report-state-level.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { MdacSocietyWiseReportComponent } from './components/mdacSocietyWise/mdac-society-wise-report/mdac-society-wise-report.component';
import { MdacVSsapDistrictReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-district-report/mdac-vssap-district-report.component';
import { MdacVSsapStateReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-state-report/mdac-vssap-state-report.component';
import { MdssFollowupAbstractReportComponent } from './components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { MdssRegRptComponent } from './components/mdss-reg-rpt/mdss-reg-rpt.component';
import { MilkdatadetailsRptComponent } from './components/milkdatadetails-rpt/milkdatadetails-rpt.component';
import { MilkdatadetailsUpdateComponent } from './components/milkdatadetails-update/milkdatadetails-update.component';
import { MilksecnariodataComponent } from './components/milksecnariodata/milksecnariodata.component';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomStateReportComponent } from './components/minutesOfMeeting/mom-state-report/mom-state-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MdacNotCreatedStateLevelReportComponent } from './components/mpuacBankAccount/mdac-not-created-state-level-report/mdac-not-created-state-level-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
// tslint:disable-next-line: max-line-length
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { MpuacBankAccStateReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-state-report/mpuac-bank-acc-state-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PlaStateReportComponent } from './components/pacsLandAllotment/pla-state-report/pla-state-report.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PaymentStatusStateReportComponent } from './components/paymentStatus/payment-status-state-report/payment-status-state-report.component';
import { PromotersAddedRBKLevelComponent } from './components/promoters/promoters-added-rbklevel/promoters-added-rbklevel.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersNotAddedRBKLevelComponent } from './components/promoters/promoters-not-added-rbklevel/promoters-not-added-rbklevel.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersStateReportComponent } from './components/promoters/promoters-state-report/promoters-state-report.component';
// tslint:disable-next-line: max-line-length
import { TotalPromotersAddedLevelComponent } from './components/promoters/total-promoters-added-level/total-promoters-added-level.component';
import { RouteMapStateLevelComponent } from './components/routesMap/route-map-state-level/route-map-state-level.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecNotAddedReportComponent } from './components/secAsstSec/sec-asst-sec-not-added-report/sec-asst-sec-not-added-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecStateReportComponent } from './components/secAsstSec/sec-asst-sec-state-report/sec-asst-sec-state-report.component';
import { FarmerPushStatusCheckComponent } from './components/statusCheck/farmer-push-status-check/farmer-push-status-check.component';
import { VillageMeetingBuildingInsReportComponent } from './components/villageMeeting/village-meeting-building-ins-report/village-meeting-building-ins-report.component';
import { VillageMeetingCalibrationReportComponent } from './components/villageMeeting/village-meeting-calibration-report/village-meeting-calibration-report.component';
import { VillageMeetingPromotersReportComponent } from './components/villageMeeting/village-meeting-promoters-report/village-meeting-promoters-report.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingStateComponent } from './components/villageMeeting/villagemeeting-state/villagemeeting-state.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VolunteerCheckComponent } from './components/volunteer-check/volunteer-check.component';
import { VolunteerHhExcelDownloadComponent } from './components/volunteer-hh-excel-download/volunteer-hh-excel-download.component';
import { VafDetailLevelReportComponent } from './components/volunteerAsFarmer/vaf-detail-level-report/vaf-detail-level-report.component';
import { VafDistrictLevelReportComponent } from './components/volunteerAsFarmer/vaf-district-level-report/vaf-district-level-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VafStateLevelReportComponent } from './components/volunteerAsFarmer/vaf-state-level-report/vaf-state-level-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvFarmerDataDistrictReportComponent } from './components/volunteerFarmerData/vv-farmer-data-district-report/vv-farmer-data-district-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataRouteWiseListComponent } from './components/volunteerFarmerData/vv-farmer-data-route-wise-list/vv-farmer-data-route-wise-list.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvFarmerDataStateReportComponent } from './components/volunteerFarmerData/vv-farmer-data-state-report/vv-farmer-data-state-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VvFarmerDataVillageWiseListComponent } from './components/volunteerFarmerData/vv-farmer-data-village-wise-list/vv-farmer-data-village-wise-list.component';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { VvHHAnimalsDistrictReportComponent } from './components/vvHHAnimals/vv-hhanimals-district-report/vv-hhanimals-district-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsStateReportComponent } from './components/vvHHAnimals/vv-hhanimals-state-report/vv-hhanimals-state-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
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
import { WomenfarmerRegDistrictReportsComponent } from './components/dashboard/womenfarmer-reg-district-reports/womenfarmer-reg-district-reports.component';
import { WomenfarmerRegDistrictDetailsComponent } from './components/dashboard/womenfarmer-reg-district-details/womenfarmer-reg-district-details.component';
import { WomenfarmerRegMandalDetailsComponent } from './components/dashboard/womenfarmer-reg-mandal-details/womenfarmer-reg-mandal-details.component';
import { WomenfarmerRegMandalReportsComponent } from './components/dashboard/womenfarmer-reg-mandal-reports/womenfarmer-reg-mandal-reports.component';
import { WomenfarmerRegRbkReportComponent } from './components/dashboard/womenfarmer-reg-rbk-report/womenfarmer-reg-rbk-report.component';
import { WomenfarmerRegRbkDetailsComponent } from './components/dashboard/womenfarmer-reg-rbk-details/womenfarmer-reg-rbk-details.component';
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
import { DistWiseMandalDetailsReportComponent } from './components/dashboard/dist-wise-mandal-details-report/dist-wise-mandal-details-report.component';
import { DistWiseMandalReportComponent } from './components/dashboard/dist-wise-mandal-report/dist-wise-mandal-report.component';
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
import { SocietyMonitoringDayWiseCheckComponent } from './components/SocietyMonitoring/society-monitoring-day-wise-check/society-monitoring-day-wise-check.component';
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
import { FarmerApprovalClusterLevelReportComponent } from './components/farmer-approval-cluster-level-report/farmer-approval-cluster-level-report.component';
import { FarmerApprovalDetailsLevelReportComponent } from './components/farmer-approval-details-level-report/farmer-approval-details-level-report.component';
import { MeetingPhotosListComponent } from './components/meeting-photos-list/meeting-photos-list.component';
import { MeetingPhotosUploadComponent } from './components/meeting-photos-upload/meeting-photos-upload.component';
import { SessionWiseMilkPouringDistrictLevelReportComponent } from './components/session-wise-milk-pouring-district-level-report/session-wise-milk-pouring-district-level-report.component';
import { SessionWiseMilkPouringMentorLevelDetailsComponent } from './components/session-wise-milk-pouring-mentor-level-details/session-wise-milk-pouring-mentor-level-details.component';
import { SessionWiseMilkPouringMentorLevelReportComponent } from './components/session-wise-milk-pouring-mentor-level-report/session-wise-milk-pouring-mentor-level-report.component';
import { SessionWiseMilkPouringRBKLevelDetailsComponent } from './components/session-wise-milk-pouring-rbklevel-details/session-wise-milk-pouring-rbklevel-details.component';
import { SessionWiseMilkPouringRBKLevelReportComponent } from './components/session-wise-milk-pouring-rbklevel-report/session-wise-milk-pouring-rbklevel-report.component';
import { SessionWiseMilkPouringStateLevelDetailsComponent } from './components/session-wise-milk-pouring-state-level-details/session-wise-milk-pouring-state-level-details.component';
import { SessionWiseMilkPouringStateLevelReportComponent } from './components/session-wise-milk-pouring-state-level-report/session-wise-milk-pouring-state-level-report.component';
import { SessionWiseMilkPouringDistrictLevelDetailsComponent } from './components/session-wise-milk-pouring-district-level-details/session-wise-milk-pouring-district-level-details.component';
import { MDSSRBKDetailsComponent } from './components/mdssrbkdetails/mdssrbkdetails.component';
import { DashBoardsForMdssRegistrationComponent } from './components/dash-boards-for-mdss-registration/dash-boards-for-mdss-registration.component';
import { MdssDashBoardAttendanceSubmittedCountComponent } from './components/mdss-dash-board-attendance-submitted-count/mdss-dash-board-attendance-submitted-count.component';
import { MdssDashBoardPromoterAddedCountComponent } from './components/mdss-dash-board-promoter-added-count/mdss-dash-board-promoter-added-count.component';
import { MdssDashBoardTotalRBKsCountComponent } from './components/mdss-dash-board-total-rbks-count/mdss-dash-board-total-rbks-count.component';
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
import { BmcuEquipmentNotSubmittedDetailsComponent } from './components/bmcu-equipment-not-submitted-details/bmcu-equipment-not-submitted-details.component';
import { BmcuEquipmentNotSubmittedReportComponent } from './components/bmcu-equipment-not-submitted-report/bmcu-equipment-not-submitted-report.component';
import { MdacAccountDashboardComponent } from './components/mdac-account-dashboard/mdac-account-dashboard.component';
import { PromotersDashboardComponent } from './components/promoters-dashboard/promoters-dashboard.component';

// const roles = ['301', '2','801','207','208' ];
const roles = ['301', '2', '801', '207', '208', '202', '201', '203', '204', '205', '206', '101', '103', '104', '105', '106'];

const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',

            },
            {
                path: 'villageLevelMeetingsStateLevelReport',
                component: VillagemeetingStateComponent,
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
                path: 'CheyuthaBenficiaryListk',
                component: CheyuthabenficiaryListByRbkComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'SurveyedRegFarmersCount',
                component: SurvyedRegfarmerscountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'SurveyedWithoutAnimals',
                component: SurveyedWithoutAnimalscountComponent,
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
                path: 'VillageMeetingBuildingInspectReport',
                component: VillageMeetingBuildingInsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageMeetingCalibrationReport',
                component: VillageMeetingCalibrationReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageMeetingPromotersReport',
                component: VillageMeetingPromotersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMpussRegStateReport',
                component: FarmerMpussRegStateReportComponent,
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
                path: 'CheyuthaBankStateLevelReport',
                component: CheyuthaBankStateLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaStateReport',
                component: CheyuthastateReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NonSurvyedcount',
                component: NonSurvyedcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'CheyuthaStateunnathiReport',
                component: StateunnathicountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaStatestreenidhicount',
                component: StatestreenidhicountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'cheyuthavillagecount',
                component: StatecheyuthavillagecountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'jpvRegFaranimalgrounding',
                component: StatejpvRegFarfacilitatedwithanimalgroundingcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'TotalCheyuthaBeneficiariesGroundedwithanimals',
                component: StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'SurveyedWithAnimalscount',
                component: SurveyedWithAnimalscountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'CheyuthaBenRegnonJpvFarmergroundanimalReport',
                component: StatenoncheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'CheyuthaBenRegJpvFarmergroundanimalReport',
                component: StatecheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaBenJpvFarmerReport',
                component: StatecheyuthabeneRegjpvfarmerChangecountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'jpvRegisteredFarmerCount',
                component: StatecheyuthaJpvRegisteredfarmerountComponent,
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
                path: 'CheyuthaBankRejectedReport',
                component: CheyuthaBankRejectedReportComponent,
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
                path: 'CheyuthaBankAcceptedReport',
                component: CheyuthaBankAcceptedReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerabstractTxnStateReport',
                component: FarmerabstractTxnStateReportComponent,
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
                path: 'MpuacBankAccStateReport',
                component: MpuacBankAccStateReportComponent,
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
                path: 'MpuacBankAccMandalReport',
                component: MpuacBankAccMandalReportComponent,
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
                path: 'MpuacBankAccDetailReport',
                component: MpuacBankAccDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromotersStateReport',
                component: PromotersStateReportComponent,
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
                path: 'PromotersAddedRBKLevelReport',
                component: PromotersAddedRBKLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromotersNotAddedRBKLevelReport',
                component: PromotersNotAddedRBKLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalPromotersAddedReport',
                component: TotalPromotersAddedLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'CalibrationStateLevelReport',
                component: CalibrationStateLevelReportComponent,
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
                path: 'SecAsstSecStateReport',
                component: SecAsstSecStateReportComponent,
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
                path: 'SecAsstSecNotAddedDetailReport',
                component: SecAsstSecNotAddedReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'LdmbankWiseStateReport',
                component: LdmbankWiseStateReportComponent,
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
                path: 'FarmerRegistrationStatus',
                component: FarmerRegistrationStatusComponent,
                canActivate: [],
                data: {
                    roles,
                },
            },
            {
                path: 'BuildingInspectionStateReport',
                component: BuildingInspectionStateReportComponent,
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
                path: 'AmcuHandingOverStateReport',
                component: AmcuHandingOverStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
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
                path: 'FarmerMilkCollectionReport',
                component: FarmerMilkCollectionReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'LoginReportStateLevel',
                component: LoginReportStateLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'RouteMappingReport',
                component: RouteMapStateLevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BuildingAbstractStateReport',
                component: BuildingAbstractStateReportComponent,
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
                path: 'dashboard',
                component: MainDashboardComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerNatureOfUnitStateReport',
                component: FarmerNatureOfUnitStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerNatureOfUnitDistrictReport',
                component: FarmerNatureOfUnitDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerNatureOfUnitMandalReport',
                component: FarmerNatureOfUnitMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerNatureOfUnitDetailReport',
                component: FarmerNatureOfUnitDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerBankBAUStatusStateReport',
                component: FarmerBankBAUStatusStateReportComponent,
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
                path: 'FarmerBankVerifiedAcceptedRejectedReport',
                component: FarmerBankVerifiedAcceptedRejectedReportComponent,
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
                path: 'LandAllotmentStateReport',
                component: LandAllotmentStateReportComponent,
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
                path: 'PaymentStatusStateReport',
                component: PaymentStatusStateReportComponent,
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
                path: 'GroundingStateLevelReport',
                component: GroundingStateLevelReportComponent,
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
                path: 'LoanSanctionAndGroundingReport',
                component: LoanSanctionAndGroundingReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BankerLoanSanctionAndGroundingReport',
                component: BankerLoanSanctionAndGroundingReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerRegistrationDetailReport',
                component: FarmerRegistrationDetailReportComponent,
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
                path: 'FarmerBankPendingAtMentorReport',
                component: FarmerBankPendingAtMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalDistrictsReport',
                component: TotalDistrictsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalRBKReport',
                component: TotalRBKReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalVillagesReport',
                component: TotalVillagesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalRegisteredFarmersReport',
                component: TotalRegisteredFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalMilkPouringFarmersReport',
                component: TotalMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'TotalMilkPouringDistrictwiseReport',
                component: TotalmilkpouringdistrictwisereportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'TotalMilkPouringDistrictwiseFarmersReport',
                component: TotalmilkpouringfarmerbydistidwisereportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DailyTotalRegisterdFarmersReport',
                component: DailyTotalRegisterdFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DailyTotalMilkPopuringFarmersReport',
                component: DailyTotalMilkPopuringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerAbstractReport',
                component: FarmerAbstractReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SocietyAbstractReport',
                component: SocietyAbstractReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerRouteWiseMilkPouringReport',
                component: FarmerRouteWiseMilkPouringReportComponent,
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
            {
                path: 'VvFarmerDataStateReport',
                component: VvFarmerDataStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataDistrictReport',
                component: VvFarmerDataDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataMandalReport',
                component: VvFarmerDataMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataRoutesReport',
                component: VvFarmerDataRoutesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataRbkReport',
                component: VvFarmerDataRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataVillageReport',
                component: VvFarmerDataVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerVolunteersListReport',
                component: VvFarmerVolunteersListReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerVolunteersLoggedInReport',
                component: VvFarmerVolunteersLoggedInReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerApprovedListReport',
                component: VvFarmerApprovedListReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsStateReport',
                component: VvHHAnimalsStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsDistrictReport',
                component: VvHHAnimalsDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsMandalReport',
                component: VvHHAnimalsMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsRbkReport',
                component: VvHHAnimalsRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsVillageReport',
                component: VvHHAnimalsVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataRouteWiseList',
                component: VvFarmerDataRouteWiseListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvFarmerDataVillageWiseList',
                component: VvFarmerDataVillageWiseListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuInspectionStateReport',
                component: AmcuInspectionStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuInspectionDistrictReport',
                component: AmcuInspectionDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuInspectedSocitiesReport',
                component: AmcuInspectedSocitiesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuNotInspectedSocitiesReport',
                component: AmcuNotInspectedSocitiesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuNetworkStateReport',
                component: AmcuNetworkStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuNetworkDistrictReport',
                component: AmcuNetworkDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'NetworkSubmittedVillagesReport',
                component: NetworkSubmittedVillagesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'NetworkNotSubmittedVillagesReport',
                component: NetworkNotSubmittedVillagesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerApprovalStateReport',
                component: FarmerApprovalStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerApprovalDistrictReport',
                component: FarmerApprovalDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerApprovalMandalReport',
                component: FarmerApprovalMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerApprovalRoutesReport',
                component: FarmerApprovalRoutesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsStateReport',
                component: FamerSmsStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsDistrictReport',
                component: FamerSmsDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsMandalReport',
                component: FamerSmsMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsRbkReport',
                component: FamerSmsRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsDetailReport',
                component: FamerSmsDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdacSocietyWiseReport',
                component: MdacSocietyWiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VvHHAnimalsClusterReport',
                component: VvHHAnimalsClusterReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringStateReport',
                component: FarmerMilkPouringStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringDistrictReport',
                component: FarmerMilkPouringDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringRouteReport',
                component: FarmerMilkPouringRouteReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringMandalReport',
                component: FarmerMilkPouringMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringDetailReport',
                component: FarmerMilkPouringDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'NewlyMilkPouringFarmersReport',
                component: NewlyMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdacNotCreatedStateLevelReport',
                component: MdacNotCreatedStateLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuConstructionStateReport',
                component: BmcuConstructionStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuConstructionDistrictReport',
                component: BmcuConstructionDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuConstructionMandalReport',
                component: BmcuConstructionMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuConstructionRbkReport',
                component: BmcuConstructionRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeStateReport',
                component: FarmerSchemeStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeDistrictReport',
                component: FarmerSchemeDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeRouteReport',
                component: FarmerSchemeRouteReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeMandalReport',
                component: FarmerSchemeMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeRbkReport',
                component: FarmerSchemeRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSchemeVillageReport',
                component: FarmerSchemeVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'NonMilkPouringReport',
                component: NonMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MomStateReport',
                component: MomStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MomDistrictReport',
                component: MomDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MomMandalReport',
                component: MomMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MomRbkReport',
                component: MomRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MomVillageReport',
                component: MomVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafStateLevelReport',
                component: VafStateLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafDistrictLevelReport',
                component: VafDistrictLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafMandalLevelReport',
                component: VafMandalLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafRbkLevelReport',
                component: VafRbkLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafDetailLevelReport',
                component: VafDetailLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'cmpStateLevelReport',
                component: CmpStateLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'CmpMilkPourerDetailReport',
                component: CmpMilkPourerDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VolunteerWiseMilkPouringReport',
                component: VwMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PasswordReset',
                component: PasswordResetComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PacsLandAllotmentStateReport',
                component: PlaStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PacsLandAllotmentDistrictReport',
                component: PlaDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PacsLandAllotmentMandalReport',
                component: PlaMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FutureDatesMilkPouringReport',
                component: FutureDatesMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdacVSsapStateReport',
                component: MdacVSsapStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdacVSsapDistrictReport',
                component: MdacVSsapDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringCertificateDashboard',
                component: FarmerMilkPouringCertDashboardComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VolunteerCheck',
                component: VolunteerCheckComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuHoNotSubmittedVillagesReport',
                component: AmcuHoNotSubmittedVillagesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'pendingHouseHoldReport',
                component: VvHhanimalsPendingHhReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'amcuLandAllotmentStateReport',
                component: AmcuLandAllotmentStateReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'amcuLandAllotmentDistrictReport',
                component: AmcuLandAllotmentDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'amcuLandAllotmentMandalReport',
                component: AmcuLandAllotmentMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'milkPouringFarmersReport',
                component: MilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'volunteerHhExcelDownload',
                component: VolunteerHhExcelDownloadComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'nonMilkPouringFarmersReport',
                component: NonMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'Datapushreport',
                component: DatapushreportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'farmerRecordPushStatusCheck',
                component: FarmerPushStatusCheckComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'feedindentdashboard',
                component: FarmerFeedIndentDashboardComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            //1407
            {
                path: 'Milkdatadetails',
                component: MilksecnariodataComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'Milkdataveiwup',
                component: MilkdatadetailsUpdateComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerMilkDetailsRpt',
                component: MilkdatadetailsRptComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'GSWSPERSONUPDATE',
                component: GswspersonupdatedetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'farmermonitoringalldiscount',
                component: FarmermonitoringdistrictcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'farmermonitoringalldistrict',
                component: FarmerMonitoringDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'farmermonitoringallmandals',
                component: FarmerMonitoringMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'mdssregistrationrept',
                component: MdssRegRptComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaDistrinctReport',
                component: CheyuthaDistrictsReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'adminUniontransationdetails',
                component: AdminUniontransationDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'amcuportaldata',
                component: AmcuportaldataComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MilkComparativeTxnReport',
                component: MilkComparativeTxnReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'amcuportaldataReport',
                component: AmcuportaldataReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'adminsmscodes',
                component: AdminSMSCodesComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'mdssfollowupabstractreport',
                component: MdssFollowupAbstractReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaMandalByDistID',
                component: CheyuthaMandalByDistIDReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaMandalReport',
                component: CheyuthaMandalReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'CheyutharbkReport',
                component: CheyuthaRbkReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'cheyuthabeneficiariescount',
                component: StatecheyuthabeneficiariescountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'SurvyednonRegisteredBeneficiaries',
                component: SurvyednonregisteredbeneficiariescountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'cheyuthaRbkbymandalidReports',
                component: CheyuthaRbkbymandalidReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BanklinkReports',
                component: StatebanklinkcountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalnoofanimalsReports',
                component: StatetotalnoofanimalscountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'cheyuthaBeneficiarybyrbkReports',
                component: CheyuthaBenficiarysbyrbkReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'cheyuthaBeneficiaryReports',
                component: CheyuthaBeneficiaryReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'cheyuthaBeneficiarybyRbkIDReport',
                component: CheyuthaBeneficiarybyRbkIDReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DistrictwiseRbkReport',  //MANDALREPORT
                component: DistrictWiseRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DistrictwiseRbkDetails',
                component: DistrictWiseRbkDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'RbkwiseReport',
                component: RbkwiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'RbkwiseDetails',
                component: RbkwiseDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'VillagewiseReport',
                component: VillagewiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'VillagewiseDetails',
                component: VillagewiseDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'FarmerwiseReport',
                component: FarmerwiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerwiseDetails',
                component: FarmerwiseDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NoofRbkCountReport',
                component: NoofRbkCountReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NoofRbkCountDetails',
                component: NoofRbkCountDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'NoofDistrictcount',
                component: TotaldistrictreportdetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'WomenFarmerRegDistrictReport',
                component: WomenfarmerRegDistrictReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'WomenFarmerRegDistrictDetails',
                component: WomenfarmerRegDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'ToDatCumDashBoard',
                component: ToDatCumDashboardDetComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'WomenFarmerRegMandalDetails',
                component: WomenfarmerRegMandalDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerRegMandalReport',
                component: WomenfarmerRegMandalReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'WomenFarmerRegRbkReport',
                component: WomenfarmerRegRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerRegRbkDetails',
                component: WomenfarmerRegRbkDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'WomenFarmerRegVillageReport',
                component: WomenfarmerRegVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerRegVillageDetails',
                component: WomenfarmerRegVillageDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerRegFarmerReport',
                component: WomenfarmerRegFarmerReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerRegFarmerDetails',
                component: WomenfarmerRegFarmerDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            ///////////////////////////

            {
                path: 'VillageWiseDistrictDetails',
                component: VillageWiseDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'VillageWiseDistrictReport',
                component: VillageWiseDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseMandalReport',
                component: VillageWiseMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseMandalGridReport',
                component: VillageWiseMandalGridReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseRbkReport',
                component: VillageWiseRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseRbkGridReport',
                component: VillageWiseRbkGridReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseVillageReport',
                component: VillageWiseVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'VillageWiseVillageGridReport',
                component: VillageWiseVillageGridReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'VillageWiseFarmerReport',
                component: VillageWiseFarmerReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VillageWiseFarmerGridReport',
                component: VillageWiseFarmerGridReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'PendingSocietiesReport',
                component: PendingSocietiesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'PendingSocietiesInformation',
                component: PendingSocietiesInformationComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PendingVillageDetails',
                component: PendingVillageDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PendingVillageReport',
                component: PendingVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PendingVillageInformation',
                component: PendingVillageInformationComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PendingSocietiesDetails',
                component: PendingSocietiesDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'DailyBargraphSocietyAbstractReport',
                component: DailyBargraphSocietyAbstractReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'MilkpouredandpendingSocietiesReport',
                component: MilkpouredandpendingSocietiesComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            //Newly MilkPouring Farmers

            {
                path: 'NewlyMilkPouringFarmersDistrictReport',
                component: NewlyMilkPouringFarmersDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'NewlyMilkPouringFarmersDistrictDetails',
                component: NewlyMilkPouringFarmersDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdssAdhocMilkDetails',
                component: MdssAdhocMilkPouringDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdssPromotersMilkPouringStatus',
                component: MdssPromotersMilkPouringStatusComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NewlyMilkPouringFarmersMandalReport',
                component: MandalNewlyMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NewlyMilkPouringFarmersMandalDetails',
                component: MandalNewlyMilkPouringFarmersGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'NewlyMilkPouringFarmersRbkReport',
                component: RBKNewlyMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NewlyMilkPouringFarmersRbkDetails',
                component: RBKNewlyMilkPouringFarmersGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'NewlyMilkPouringFarmersVillageReport',
                component: VillageNewlyMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NewlyMilkPouringFarmersVillageDetails',
                component: VillageNewlyMilkPouringFarmersGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'NewlyMilkPouringFarmersFarmerReport',
                component: FarmerBeneficiaryNewlyMilkPouringReportsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'NewlyMilkPouringFarmersFarmerDetails',
                component: FarmerBeneficiaryNewlyMilkPouringFarmersListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },





            {
                path: 'WomenFarmerMilkPouringDistrictReport',
                component: TodayNoOfWomenFarmerMilkPouringDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerMilkPouringDistrictDetails',
                component: TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'WomenFarmerMilkPouringMandalReport',
                component: MandalNoOfWomenFarmerMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerMilkPouringMandalDetails',
                component: MandalNoOfWomenFarmerMilkPouringGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'WomenFarmerMilkPouringRbkReport',
                component: RBKNoOfWomenFarmerMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerMilkPouringRbkDetails',
                component: RBKNoOfWomenFarmerMilkPouringGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'WomenFarmerMilkPouringVillageReport',
                component: VillageNoOfWomenFarmerMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerMilkPouringVillageDetails',
                component: VillageNoOfWomenFarmerMilkPouringGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'WomenFarmerMilkPouringFarmerReport',
                component: FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'WomenFarmerMilkPouringFarmerDetails',
                component: FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'DashboardDistrictCountReport',
                component: DistWiseDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashboardDistrictCountDetails',
                component: DistWiseDistrictDetailsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'DashboardMandalCountReport',
                component: DistWiseMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashboardMandalCountDetails',
                component: DistWiseMandalDetailsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'DashboardRbkCountReport',
                component: DistWiseRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashboardRbkCountDetails',
                component: DistWiseRbkDetailsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            //
            //



            {
                path: 'DashboardVillageCountReport',
                component: DistWiseVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashboardVillageCountDetails',
                component: DistWiseVillageDetailsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'DashboardFarmerCountReport',
                component: DistWiseFarmerReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashboardFarmerCountDetails',
                component: DistWiseFarmerDetailsReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'DashBoardDistrictWiseReport',
                component: DashboardDistrictWiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardDistrictWiseDetails',
                component: DashboardDistrictWiseDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'DashBoardNoofRbkCountReport',
                component: DashboardNoofRbkCountReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardNoofRbkCountDetails',
                component: DashboardNoofRbkCountDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashBoardVillageWiseDistrictReport',
                component: DashboardVillageWiseDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardVillageWiseDistrictDetails',
                component: DashboardVillageWiseDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'DashBoardWomenFarmerRegDistrictReport',
                component: DashboardWomenFarmerRegDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardWomenFarmerRegDistrictDetails',
                component: DashboardWomenFarmerRegDistrictDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'DashBoardTotalMilkPouringDistrictwiseReport',
                component: DashboardTotalMilkPouringDistrictwiseReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardTotalMilkPouringDistrictwiseDetails',
                component: DashboardTotalMilkPouringDistrictwiseDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'Masterdetails',
                component: AllMastersDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'SocietyMonitoringReport',
                component: SocietyMonitoringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'SocietyMonitoringDayWiseCheck',
                component: SocietyMonitoringDayWiseCheckComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'JobapplicationDetails',
                component: JobApplicationDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromptFarmerDataPushStatus',
                component: PromptFarmerDataPushStatusComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'vaowisefarmersreport',
                component: VAOwisefarmersreportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'FarmerApprovalVillageLevelReport',
                component: FarmerApprovalVillageLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'FarmerApprovalClusterLevelReport',
                component: FarmerApprovalClusterLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'FarmerApprovalDetailLevelReport',
                component: FarmerApprovalDetailsLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'vaowisefarmersreportDetails',
                component: VAOwisefarmersreportDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },




            {
                path: 'MeetingPhotosUpload',
                component: MeetingPhotosUploadComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'MeetingPhotosList',
                component: MeetingPhotosListComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'SessionWiseMilkPouringStateLevelReport',
                component: SessionWiseMilkPouringStateLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringStateLevelDetails',
                component: SessionWiseMilkPouringStateLevelDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringDistrictLevelReport',
                component: SessionWiseMilkPouringDistrictLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringDistrictLevelDetails',
                component: SessionWiseMilkPouringDistrictLevelDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringMentorLevelReport',
                component: SessionWiseMilkPouringMentorLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringMentorLevelDetails',
                component: SessionWiseMilkPouringMentorLevelDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringRBKLevelReport',
                component: SessionWiseMilkPouringRBKLevelReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SessionWiseMilkPouringRBKLevelDetails',
                component: SessionWiseMilkPouringRBKLevelDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MDSSRBKDetails',
                component: MDSSRBKDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DashBoardsForMdssRegistartion',
                component: DashBoardsForMdssRegistrationComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'AttendanceSubmittedCount',
                component: MdssDashBoardAttendanceSubmittedCountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromoterAddedCount',
                component: MdssDashBoardPromoterAddedCountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalRBKsCount',
                component: MdssDashBoardTotalRBKsCountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'EligibleMDSSCount',
                component: MdssDashBoardEligibleMDSSCountComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'Bankdetailsallupdate',
                component: FarmerBankAllDetailsUpdateComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SocietyChangeDashboardForAllDistricts',
                component: SocietyChangeDashboardForAllDistrictsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AadharMask',
                component: AadharInputComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentsStatusReport',
                component: BmcuEquipmentsStatusReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentsStatusDetails',
                component: BmcuEquipmentsStatusDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentSubmittedReport',
                component: BmcuEquipmentSubmittedReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentSubmittedDetails',
                component: BmcuEquipmentSubmittedDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentsReport',
                component: BmcuEquipmentNotSubmittedReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuEquipmentsDetails',
                component: BmcuEquipmentNotSubmittedDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'bmcusEquipmentStatus',
                component: EditBmcusCalibrationComponent,
                canActivate: [AuthGuard],
                data: {
                  roles,
                },
              },
              {
                path: 'bmcusEquipmentFileUpload',
                component: BmcuEquipmentFileUploadComponent,
                canActivate: [AuthGuard],
                data: {
                  roles,
                },
              },
              {
                path: 'bmcuEquipmentsPAR',
                component: BmcuEquipmentsPARComponent,
                canActivate: [AuthGuard],
                data: {
                  roles,
                },
              },

              {
                path: 'MdacAccountDashboard',
                component: MdacAccountDashboardComponent,
                canActivate: [AuthGuard],
                data: {
                  roles,
                },
              },

          {
            path: 'PromotersDashboard',
            component: PromotersDashboardComponent,
            canActivate: [AuthGuard],
            data: {
              roles,
            },
          },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StateLevelRoutingModule { }
