import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FarmerFeedIndentDashboardComponent } from '../stateLevel/components/farmer-feed-indent-dashboard/farmer-feed-indent-dashboard.component';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverMentorReportComponent } from './components/amcuHandingOver/amcu-handing-over-mentor-report/amcu-handing-over-mentor-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuInspectionDistrictReportComponent } from './components/amcuInspection/amcu-inspection-district-report/amcu-inspection-district-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { AmcuLandAllotmentDistrictReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-district-report/amcu-land-allotment-district-report.component';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { BmcuConstructionDistrictReportComponent } from './components/bmcuConstruction/bmcu-construction-district-report/bmcu-construction-district-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
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
import { AmcuPerformanceDistrictReportComponent } from './components/csReports/amcu-performance-district-report/amcu-performance-district-report.component';
import { DiscontinuedVillagesReportComponent } from './components/csReports/discontinued-villages-report/discontinued-villages-report.component';
import { FarmerStatusReportComponent } from './components/csReports/farmer-status-report/farmer-status-report.component';
import { HouseholdSurveyReportComponent } from './components/csReports/household-survey-report/household-survey-report.component';
import { MilkProcurementDistrictReportComponent } from './components/csReports/milk-procurement-district-report/milk-procurement-district-report.component';
import { PromotersVolunteersDistrictReportComponent } from './components/csReports/promoters-volunteers-district-report/promoters-volunteers-district-report.component';
import { SampleMilkStatusDistrictReportComponent } from './components/csReports/sample-milk-status-district-report/sample-milk-status-district-report.component';
import { TopMilkPourersMdacDistrictReportComponent } from './components/csReports/top-milk-pourers-mdac-district-report/top-milk-pourers-mdac-district-report.component';
import { FarmerMilkPouringCertificateDashboardComponent } from './components/farmer-milk-pouring-certificate-dashboard/farmer-milk-pouring-certificate-dashboard.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerabstractTxnDistrictReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-district-report/farmerabstract-txn-district-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerApprovalDistrictReportComponent } from './components/farmerApproval/farmer-approval-district-report/farmer-approval-district-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FarmerBankBAUStatusDistrictReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-district-report/farmer-bank-baustatus-district-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMilkPouringDistrictReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-district-report/farmer-milk-pouring-district-report.component';
import { FarmerMilkPouringMandalReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mandal-report/farmer-milk-pouring-mandal-report.component';
import { FarmerMilkPouringRouteReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-route-report/farmer-milk-pouring-route-report.component';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerSchemeDistrictReportComponent } from './components/farmerScheme/farmer-scheme-district-report/farmer-scheme-district-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
// tslint:disable-next-line: max-line-length
import { FarmerSchemeRouteReportComponent } from './components/farmerScheme/farmer-scheme-route-report/farmer-scheme-route-report.component';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FamerSmsDistrictReportComponent } from './components/farmerSms/famer-sms-district-report/famer-sms-district-report.component';
import { FamerSmsMandalReportComponent } from './components/farmerSms/famer-sms-mandal-report/famer-sms-mandal-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { GswspersonupdateComponent } from './components/gswspersonupdate/gswspersonupdate.component';
import { LandAllotmentDistrictReportComponent } from './components/landAllotment/land-allotment-district-report/land-allotment-district-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { LdmbankWiseApprovedRejectedReportComponent } from './components/ldmBankWise/ldmbank-wise-approved-rejected-report/ldmbank-wise-approved-rejected-report.component';
import { LdmbankWiseBranchReportComponent } from './components/ldmBankWise/ldmbank-wise-branch-report/ldmbank-wise-branch-report.component';
import { LdmbankWiseDistrictReportComponent } from './components/ldmBankWise/ldmbank-wise-district-report/ldmbank-wise-district-report.component';
import { LdmbankWiseMandalReportComponent } from './components/ldmBankWise/ldmbank-wise-mandal-report/ldmbank-wise-mandal-report.component';
import { LdmbankWisePendingReportComponent } from './components/ldmBankWise/ldmbank-wise-pending-report/ldmbank-wise-pending-report.component';
import { LdmbankWiseRbkReportComponent } from './components/ldmBankWise/ldmbank-wise-rbk-report/ldmbank-wise-rbk-report.component';
import { LoanSanctionsAndGroundingReportComponent } from './components/loan-sanctions-and-grounding-report/loan-sanctions-and-grounding-report.component';
import { MdacSocietyWiseReportComponent } from './components/mdacSocietyWise/mdac-society-wise-report/mdac-society-wise-report.component';
import { MdacVSsapDistrictReportComponent } from './components/MdacVSsapMilkCollection/mdac-vssap-district-report/mdac-vssap-district-report.component';
import { MomDistrictReportComponent } from './components/minutesOfMeeting/mom-district-report/mom-district-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccMentorReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mentor-report/mpuac-bank-acc-mentor-report.component';
// tslint:disable-next-line: max-line-length
import { MpuacBankAccRbkReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-rbk-report/mpuac-bank-acc-rbk-report.component';
import { PlaDistrictReportComponent } from './components/pacsLandAllotment/pla-district-report/pla-district-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusDistrictReportComponent } from './components/paymentStatus/payment-status-district-report/payment-status-district-report.component';
import { PaymentStatusMandalReportComponent } from './components/paymentStatus/payment-status-mandal-report/payment-status-mandal-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PromotersAddedRbklevelComponent } from './components/promoters/promoters-added-rbklevel/promoters-added-rbklevel.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersMentorReportComponent } from './components/promoters/promoters-mentor-report/promoters-mentor-report.component';
import { PromotersNotAddedRbklevelComponent } from './components/promoters/promoters-not-added-rbklevel/promoters-not-added-rbklevel.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { TotalPromotersAddedlevelComponent } from './components/promoters/total-promoters-addedlevel/total-promoters-addedlevel.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecMentorReportComponent } from './components/secAsstSec/sec-asst-sec-mentor-report/sec-asst-sec-mentor-report.component';
import { SecAsstSecNotAddedReportComponent } from './components/secAsstSec/sec-asst-sec-not-added-report/sec-asst-sec-not-added-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { SocietyAbstractDistrictReportComponent } from './components/society-abstract-district-report/society-abstract-district-report.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingBuildingInsReportComponent } from './components/villageMeeting/villagemeeting-building-ins-report/villagemeeting-building-ins-report.component';
import { VillagemeetingCalibrationReportComponent } from './components/villageMeeting/villagemeeting-calibration-report/villagemeeting-calibration-report.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingMentorComponent } from './components/villageMeeting/villagemeeting-mentor/villagemeeting-mentor.component';
import { VillagemeetingPromotersReportComponent } from './components/villageMeeting/villagemeeting-promoters-report/villagemeeting-promoters-report.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VafDetailLevelReportComponent } from './components/volunteerAsFarmer/vaf-detail-level-report/vaf-detail-level-report.component';
import { VafDistrictLevelReportComponent } from './components/volunteerAsFarmer/vaf-district-level-report/vaf-district-level-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VafStateLevelReportComponent } from './components/volunteerAsFarmer/vaf-state-level-report/vaf-state-level-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvFarmerDataDistrictReportComponent } from './components/volunteerFarmerData/vv-farmer-data-district-report/vv-farmer-data-district-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { VvHHAnimalsDistrictReportComponent } from './components/vvHHAnimals/vv-hhanimals-district-report/vv-hhanimals-district-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CheyuthastateReportsComponent } from '../stateLevel/components/cheyuthastate-reports/cheyuthastate-reports.component';
import { AllMastersDetailsComponent } from '../stateLevel/components/Masterdetails/all-masters-details/all-masters-details.component';
import { FarmerMilkPouringCertDashboardComponent } from '../stateLevel/components/farmer-milk-pouring-cert-dashboard/farmer-milk-pouring-cert-dashboard.component';
import { VAOwisefarmersreportComponent } from '../stateLevel/components/vaowisefarmersreport/vaowisefarmersreport.component';
import { MdssFollowupAbstractReportComponent } from '../stateLevel/components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { MdssRegRptComponent } from '../stateLevel/components/mdss-reg-rpt/mdss-reg-rpt.component';
import { SocietyAbstractReportComponent } from '../stateLevel/components/farmerAbstract/society-abstract-report/society-abstract-report.component';



const roles = ['201', '202', '203', '204', '206', '1002'];

const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        children: [

            {
                path: '',
                redirectTo: 'Homepage',
                pathMatch: 'full',
            },
            {
                path: 'Homepage',
                component: HomepageComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            // {
            //   path: '',
            //   redirectTo: 'villageLevelMeetingsMentorLevelReport',
            //   pathMatch: 'full',
            // },
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
                path: 'FarmerRegistrationStatus',
                component: FarmerRegistrationStatusComponent,
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
                path: 'SocietyAbstractReport',
                component: SocietyAbstractReportComponent,
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
                path: 'VvHHAnimalsDistrictReport',
                component: VvHHAnimalsDistrictReportComponent,
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
                path: 'VafMandalLevelReport',
                component: VafDetailLevelReportComponent,
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
                path: 'LoanSanctionAndGroundingReport',
                component: LoanSanctionsAndGroundingReportComponent,
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
                path: 'MdacVSsapDistrictReport',
                component: MdacVSsapDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'MilkProcurementDistrictReport',
                component: MilkProcurementDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromotersVolunteersDistrictReport',
                component: PromotersVolunteersDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'SampleMilkStatusDistrictReport',
                component: SampleMilkStatusDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'Top3MilkPourersMdacDistrictReport',
                component: TopMilkPourersMdacDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuPerformanceDistrictReport',
                component: AmcuPerformanceDistrictReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromotersAddedRBKLevelReport',
                component: PromotersAddedRbklevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PromotersNotAddedRBKLevelReport',
                component: PromotersNotAddedRbklevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'TotalPromotersAddedReport',
                component: TotalPromotersAddedlevelComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'DiscontinuedVillagesReport',
                component: DiscontinuedVillagesReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerStatusReport',
                component: FarmerStatusReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'HouseholdSurveyReport',
                component: HouseholdSurveyReportComponent,
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
                path: 'SocietyAbstractDistrictReport',
                component: SocietyAbstractDistrictReportComponent,
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
                path: 'farmermilkpouringdashboard',
                component: FarmerMilkPouringCertificateDashboardComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'GswsPersonDetailsUpdate',
                component: GswspersonupdateComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'farmerfeedindentdashboard',
                component: FarmerFeedIndentDashboardComponent,
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
                path: 'FarmerMilkPouringCertificateDashboard',
                component: FarmerMilkPouringCertDashboardComponent,
                // component: FarmerMilkPouringCertDashboardComponent,
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
                path: 'mdssregistrationrept',
                component: MdssRegRptComponent,
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


        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DistrictRoutingModule { }
