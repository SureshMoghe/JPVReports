import { NgModule } from '@angular/core';
import { DistrictRoutingModule } from './district-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from './components/common/common.component';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillageMeetingModule } from '../villageMeeting/village-meeting.module';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { CheyuthaBankDistrictLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-district-level/cheyutha-bank-district-level.component';
import { CheyuthaBankRbkLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rbk-level/cheyutha-bank-rbk-level.component';
import { CheyuthaBankAcceptedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-accepted-report/cheyutha-bank-accepted-report.component';
import { CheyuthaBankPendingReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-pending-report/cheyutha-bank-pending-report.component';
import { CheyuthaBankRejectedReportComponent } from './components/cheyuthaBankStatus/cheyutha-bank-rejected-report/cheyutha-bank-rejected-report.component';
import { BankerModuleModule } from '../bankerModule/banker-module.module';
import { LdmBankModule } from '../ldmBankModule/ldm-bank.module';
import { VillagemeetingBuildingInsReportComponent } from './components/villageMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationReportComponent } from './components/villageMeeting/villagemeeting-calibration-report/villagemeeting-calibration-report.component';
import { VillagemeetingPromotersReportComponent } from './components/villageMeeting/villagemeeting-promoters-report/villagemeeting-promoters-report.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerAbstractTxnModuleModule } from '../farmerAbstractTxnModule/farmer-abstract-txn-module.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
// tslint:disable-next-line: max-line-length
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersModuleModule } from '../promotersModule/promoters-module.module';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecModuleModule } from '../secAsstSecModule/sec-asst-sec-module.module';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CalibrationMentorLevelReportComponent } from './components/calibration/calibration-mentor-level-report/calibration-mentor-level-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { CheyuthaBankMandalLevelComponent } from './components/cheyuthaBankStatus/cheyutha-bank-mandal-level/cheyutha-bank-mandal-level.component';
import { LdmBankWiseModuleModule } from '../ldmBankWiseModule/ldm-bank-wise-module.module';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionMentorReportComponent } from './components/buildingInspection/building-inspection-mentor-report/building-inspection-mentor-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { BuildingInspectionModuleModule } from '../buildingInspectionModule/building-inspection-module.module';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHandingOverModuleModule } from '../amcuHandingOverModule/amcu-handing-over-module.module';
import { BuildingAbstractMandalReportComponent } from './components/buildingAbstract/building-abstract-mandal-report/building-abstract-mandal-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingAbstractModuleModule } from '../buildingAbstractModule/building-abstract-module.module';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { FarmerBankAccUpdateStatusModuleModule } from '../farmerBankAccUpdateStatusModule/farmer-bank-acc-update-status-module.module';
import { LandAllotmentModuleModule } from '../landAllotmentModule/land-allotment-module.module';
import { PaymentStatusModule } from '../paymentStatusModule/payment-status.module';
import { CheyuthaGroundingModule } from '../cheyuthaGroundingModule/cheyutha-grounding.module';
import { GroundingDistrictLevelReportComponent } from './components/cheyuthaGrounding/grounding-district-level-report/grounding-district-level-report.component';
import { GroundingMandalLevelReportComponent } from './components/cheyuthaGrounding/grounding-mandal-level-report/grounding-mandal-level-report.component';
import { GroundingDetailLevelReportComponent } from './components/cheyuthaGrounding/grounding-detail-level-report/grounding-detail-level-report.component';
import { GroundingApprovedRejectedReportComponent } from './components/cheyuthaGrounding/grounding-approved-rejected-report/grounding-approved-rejected-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { VolunteerFarmerDataModuleModule } from '../volunteerFarmerDataModule/volunteer-farmer-data-module.module';
import { VvFarmerDataDistrictReportComponent } from './components/volunteerFarmerData/vv-farmer-data-district-report/vv-farmer-data-district-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvHHAnimalsDistrictReportComponent } from './components/vvHHAnimals/vv-hhanimals-district-report/vv-hhanimals-district-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { VvHHAnimalsModule } from '../vvHHAnimalsModule/vv-hhanimals.module';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { AmcuInspectionModule } from '../amcuInspectionModule/amcu-inspection.module';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalDistrictReportComponent } from './components/farmerApproval/farmer-approval-district-report/farmer-approval-district-report.component';
import { FarmerApprovalModule } from '../farmerApprovalModule/farmer-approval.module';
import { FamerSmsDistrictReportComponent } from './components/farmerSms/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSms/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FarmerSmsModule } from '../farmerSmsModule/farmer-sms.module';
import { MdacSocietyWiseReportComponent } from './components/mdacSocietyWise/mdac-society-wise-report/mdac-society-wise-report.component';
import { MdacSocietyWiseModule } from '../mdacSocietyWiseModule/mdac-society-wise.module';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { FarmerMilkPouringDistrictReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-district-report/farmer-milk-pouring-district-report.component';
import { FarmerMilkPouringRouteReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-route-report/farmer-milk-pouring-route-report.component';
import { FarmerMilkPouringMandalReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mandal-report/farmer-milk-pouring-mandal-report.component';
import { FarmerMilkPouringModule } from '../farmerMilkPouringModule/farmer-milk-pouring.module';
import { SharedModule } from '../shared/shared.module';
import { BmcuConstructionModule } from '../bmcuConstructionModule/bmcu-construction.module';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { FarmerSchemeModule } from '../farmerSchemeModule/farmer-scheme.module';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { MinutesOfMeetingModule } from '../minutesOfMeetingModule/minutes-of-meeting.module';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { VafStateLevelReportComponent } from './components/volunteerAsFarmer/vaf-state-level-report/vaf-state-level-report.component';
import { VafDistrictLevelReportComponent } from './components/volunteerAsFarmer/vaf-district-level-report/vaf-district-level-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { JdLevelModule } from '../jdLevel/jd-level.module';
import { LoanSanctionsAndGroundingReportComponent } from './components/loan-sanctions-and-grounding-report/loan-sanctions-and-grounding-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PacsLandAllotmentModule } from '../pacsLandAllotmentModule/pacs-land-allotment.module';
import { MdacVSsapMilkCollectionModule } from '../mdacVSsapMilkCollectionModule/mdac-vssap-milk-collection.module';
import { MdacVSsapDistrictReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-district-report/mdac-vssap-district-report.component';
import { MilkProcurementDistrictReportComponent } from './components/csReports/milk-procurement-district-report/milk-procurement-district-report.component';
import { PromotersVolunteersDistrictReportComponent } from './components/csReports/promoters-volunteers-district-report/promoters-volunteers-district-report.component';
import { SampleMilkStatusDistrictReportComponent } from './components/csReports/sample-milk-status-district-report/sample-milk-status-district-report.component';
import { CsReportsModule } from '../csReportsModule/cs-reports.module';
import { TopMilkPourersMdacDistrictReportComponent } from './components/csReports/top-milk-pourers-mdac-district-report/top-milk-pourers-mdac-district-report.component';
import { AmcuPerformanceDistrictReportComponent } from './components/csReports/amcu-performance-district-report/amcu-performance-district-report.component';
import { PromotersAddedRbklevelComponent } from './components/promoters/promoters-added-rbklevel/promoters-added-rbklevel.component';
import { PromotersNotAddedRbklevelComponent } from './components/promoters/promoters-not-added-rbklevel/promoters-not-added-rbklevel.component';
import { TotalPromotersAddedlevelComponent } from './components/promoters/total-promoters-addedlevel/total-promoters-addedlevel.component';
import { DiscontinuedVillagesReportComponent } from './components/csReports/discontinued-villages-report/discontinued-villages-report.component';
import { FarmerStatusReportComponent } from './components/csReports/farmer-status-report/farmer-status-report.component';
import { HouseholdSurveyReportComponent } from './components/csReports/household-survey-report/household-survey-report.component';
import { SecAsstSecNotAddedReportComponent } from './components/secAsstSec/sec-asst-sec-not-added-report/sec-asst-sec-not-added-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { AmcuLandAllotmentDistrictReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-district-report/amcu-land-allotment-district-report.component';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { AmcuLandAllotmentModule } from '../amcuLandAllotmentModule/amcu-land-allotment.module';
import { VafDetailLevelReportComponent } from './components/volunteerAsFarmer/vaf-detail-level-report/vaf-detail-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VolunteerAsFarmerModule } from '../volunteerAsFarmerModule/volunteer-as-farmer.module';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { SocietyAbstractDistrictReportComponent } from './components/society-abstract-district-report/society-abstract-district-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { FarmerMilkPouringCertificateDashboardComponent } from './components/farmer-milk-pouring-certificate-dashboard/farmer-milk-pouring-certificate-dashboard.component';
import { FeedIndentDashboardComponent } from './components/feed-indent-dashboard/feed-indent-dashboard.component';
import { GswspersonupdateComponent } from './components/gswspersonupdate/gswspersonupdate.component';
import { HomepageComponent } from './components/homepage/homepage.component';



@NgModule({
    declarations: [
        CommonComponent,
        VillagemeetingMentorComponent,
        VillagemeetingRbkComponent,
        VillagemeetingSecAndAssSecComponent,
        VillagemeetingFunctionariesComponent,
        VillagemeetingAttendanceComponent,
        VillagemeetingVillageComponent,
        FarmerMpussRegDistrictReportComponent,
        FarmerMpussRegRbkReportComponent,
        FarmerMpussRegVillageReportComponent,
        FarmerMpussRegDetailReportComponent,
        CheyuthaBankDistrictLevelComponent,
        CheyuthaBankRbkLevelComponent,
        CheyuthaBankAcceptedReportComponent,
        CheyuthaBankPendingReportComponent,
        CheyuthaBankRejectedReportComponent,
        VillagemeetingBuildingInsReportComponent,
        VillagemeetingCalibrationReportComponent,
        VillagemeetingPromotersReportComponent,
        FarmerabstractTxnDistrictReportComponent,
        FarmerabstractTxnMandalReportComponent,
        FarmerabstractTxnSocietyReportComponent,
        MpuacBankAccDetailReportComponent,
        MpuacBankAccMentorReportComponent,
        MpuacBankAccRbkReportComponent,
        PromotersMentorReportComponent,
        PromotersRbkReportComponent,
        PromotersDetailReportComponent,
        SecAsstSecMentorReportComponent,
        SecAsstSecRbkReportComponent,
        SecAsstSecDetailReportComponent,
        CalibrationRbkLevelReportComponent,
        CalibrationMentorLevelReportComponent,
        CalibrationDetailLevelReportComponent,
        FarmerRegistrationStatusComponent,
        CheyuthaBankMandalLevelComponent,
        LdmbankWiseDistrictReportComponent,
        LdmbankWiseMandalReportComponent,
        LdmbankWiseRbkReportComponent,
        LdmbankWiseBranchReportComponent,
        LdmbankWisePendingReportComponent,
        LdmbankWiseApprovedRejectedReportComponent,
        BuildingInspectionDetailReportComponent,
        BuildingInspectionMentorReportComponent,
        BuildingInspectionRbkReportComponent,
        AmcuHandingOverDetailReportComponent,
        AmcuHandingOverMentorReportComponent,
        AmcuHandingOverRbkReportComponent,
        BuildingAbstractMandalReportComponent,
        BuildingAbstractRbkReportComponent,
        BuildingAbstractVillageReportComponent,
        FarmerBankBAUStatusDistrictReportComponent,
        FarmerBankBAUStatusMandalReportComponent,
        FarmerBankBAUStatusRbkReportComponent,
        FarmerBankInvalidAccountsReportComponent,
        FarmerBankPendingAtDaReportComponent,
        FarmerBankVerifiedAcceptedRejectedReportComponent,
        LandAllotmentDistrictReportComponent,
        LandAllotmentMandalReportComponent,
        PaymentStatusDistrictReportComponent,
        PaymentStatusMandalReportComponent,
        PaymentStatusRbkReportComponent,
        PaymentStatusDetailReportComponent,
        GroundingDistrictLevelReportComponent,
        GroundingMandalLevelReportComponent,
        GroundingDetailLevelReportComponent,
        GroundingApprovedRejectedReportComponent,
        MpuacBankAccMandalReportComponent,
        MdacNotCreatedRbkListReportComponent,
        FarmerBankPendingAtMentorReportComponent,
        FarmerAbstractTxnRbkReportComponent,
        MdacBankAccVillageReportComponent,
        VvFarmerDataDistrictReportComponent,
        VvFarmerDataMandalReportComponent,
        VvFarmerDataRbkReportComponent,
        VvFarmerDataRoutesReportComponent,
        VvFarmerDataVillageReportComponent,
        VvFarmerApprovedListReportComponent,
        VvFarmerVolunteersLoggedInReportComponent,
        VvFarmerVolunteersListReportComponent,
        VvHHAnimalsDistrictReportComponent,
        VvHHAnimalsMandalReportComponent,
        VvHHAnimalsRbkReportComponent,
        VvHHAnimalsVillageReportComponent,
        AmcuInspectionDistrictReportComponent,
        AmcuInspectedSocitiesReportComponent,
        AmcuNotInspectedSocitiesReportComponent,
        FarmerApprovalRoutesReportComponent,
        FarmerApprovalMandalReportComponent,
        FarmerApprovalDistrictReportComponent,
        FamerSmsDistrictReportComponent,
        FamerSmsMandalReportComponent,
        FamerSmsRbkReportComponent,
        FamerSmsDetailReportComponent,
        MdacSocietyWiseReportComponent,
        VvHHAnimalsClusterReportComponent,
        FarmerMilkPouringDistrictReportComponent,
        FarmerMilkPouringRouteReportComponent,
        FarmerMilkPouringMandalReportComponent,
        BmcuConstructionDistrictReportComponent,
        BmcuConstructionMandalReportComponent,
        BmcuConstructionRbkReportComponent,
        FarmerSchemeDistrictReportComponent,
        FarmerSchemeRouteReportComponent,
        FarmerSchemeMandalReportComponent,
        FarmerSchemeRbkReportComponent,
        FarmerSchemeVillageReportComponent,
        NonMilkPouringReportComponent,
        MomDistrictReportComponent,
        MomMandalReportComponent,
        MomRbkReportComponent,
        MomVillageReportComponent,
        VafStateLevelReportComponent,
        VafDistrictLevelReportComponent,
        VafMandalLevelReportComponent,
        VwMilkPouringReportComponent,
        LoanSanctionsAndGroundingReportComponent,
        PlaDistrictReportComponent,
        PlaMandalReportComponent,
        MdacVSsapDistrictReportComponent,
        MilkProcurementDistrictReportComponent,
        PromotersVolunteersDistrictReportComponent,
        SampleMilkStatusDistrictReportComponent,
        TopMilkPourersMdacDistrictReportComponent,
        AmcuPerformanceDistrictReportComponent,
        PromotersAddedRbklevelComponent,
        PromotersNotAddedRbklevelComponent,
        TotalPromotersAddedlevelComponent,
        DiscontinuedVillagesReportComponent,
        FarmerStatusReportComponent,
        HouseholdSurveyReportComponent,
        SecAsstSecNotAddedReportComponent,
        AmcuHoNotSubmittedVillagesReportComponent,
        VvHhanimalsPendingHhReportComponent,
        AmcuLandAllotmentDistrictReportComponent,
        AmcuLandAllotmentMandalReportComponent,
        VafDetailLevelReportComponent,
        VafRbkLevelReportComponent,
        MilkPouringFarmersReportComponent,
        SocietyAbstractDistrictReportComponent,
        NonMilkPouringFarmersReportComponent,
        FarmerMilkPouringCertificateDashboardComponent,
        FeedIndentDashboardComponent,
        GswspersonupdateComponent,
        HomepageComponent,



    ],
    imports: [
        CommonModule,
        DistrictRoutingModule,
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
        VolunteerFarmerDataModuleModule,
        VvHHAnimalsModule,
        AmcuInspectionModule,
        FarmerApprovalModule,
        FarmerSmsModule,
        MdacSocietyWiseModule,
        FarmerMilkPouringModule,
        BmcuConstructionModule,
        FarmerSchemeModule,
        MinutesOfMeetingModule,
        PacsLandAllotmentModule,
        MdacVSsapMilkCollectionModule,
        AmcuLandAllotmentModule,
        VolunteerAsFarmerModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        SharedModule,
        JdLevelModule,
        CsReportsModule
    ],

})
export class DistrictModule { }
