import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AmcuHandingOverDetailReportComponent } from './components/amcuHandingOver/amcu-handing-over-detail-report/amcu-handing-over-detail-report.component';
import { AmcuHandingOverRbkReportComponent } from './components/amcuHandingOver/amcu-handing-over-rbk-report/amcu-handing-over-rbk-report.component';
import { AmcuHoNotSubmittedVillagesReportComponent } from './components/amcuHandingOver/amcu-ho-not-submitted-villages-report/amcu-ho-not-submitted-villages-report.component';
import { AmcuInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-inspected-socities-report/amcu-inspected-socities-report.component';
import { AmcuInspectionMentorReportComponent } from './components/amcuInspection/amcu-inspection-mentor-report/amcu-inspection-mentor-report.component';
import { AmcuNotInspectedSocitiesReportComponent } from './components/amcuInspection/amcu-not-inspected-socities-report/amcu-not-inspected-socities-report.component';
import { BmcuConstructionMentorReportComponent } from './components/bmcuConstruction/bmcu-construction-mentor-report/bmcu-construction-mentor-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { BuildingAbstractRbkReportComponent } from './components/buildingAbstract/building-abstract-rbk-report/building-abstract-rbk-report.component';
import { BuildingAbstractVillageReportComponent } from './components/buildingAbstract/building-abstract-village-report/building-abstract-village-report.component';
import { BuildingInspectionDetailReportComponent } from './components/buildingInspection/building-inspection-detail-report/building-inspection-detail-report.component';
import { BuildingInspectionRbkReportComponent } from './components/buildingInspection/building-inspection-rbk-report/building-inspection-rbk-report.component';
import { CalibrationDetailLevelReportComponent } from './components/calibration/calibration-detail-level-report/calibration-detail-level-report.component';
import { CalibrationRbkLevelReportComponent } from './components/calibration/calibration-rbk-level-report/calibration-rbk-level-report.component';
import { CommonComponent } from './components/common/common.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerabstractTxnMandalReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-mandal-report/farmerabstract-txn-mandal-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerApprovalMentorReportComponent } from './components/farmerApproval/farmer-approval-mentor-report/farmer-approval-mentor-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMilkPouringMentorReportComponent } from './components/farmerMilkPouring/farmer-milk-pouring-mentor-report/farmer-milk-pouring-mentor-report.component';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { VwMilkPouringReportComponent } from './components/farmerMilkPouring/vw-milk-pouring-report/vw-milk-pouring-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerRegMentorReportComponent } from './components/farmerMpussReg/farmer-reg-mentor-report/farmer-reg-mentor-report.component';
import { FarmerRegistrationDetailReportComponent } from './components/FarmerRegistrationDetailReport/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { FarmerSchemeMentorReportComponent } from './components/farmerScheme/farmer-scheme-mentor-report/farmer-scheme-mentor-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { FarmerSchemeVillageReportComponent } from './components/farmerScheme/farmer-scheme-village-report/farmer-scheme-village-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { FamerSmsDetailReportComponent } from './components/farmerSms/famer-sms-detail-report/famer-sms-detail-report.component';
import { FamerSmsMentorReportComponent } from './components/farmerSms/famer-sms-mentor-report/famer-sms-mentor-report.component';
import { FamerSmsRbkReportComponent } from './components/farmerSms/famer-sms-rbk-report/famer-sms-rbk-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { MomMentorReportComponent } from './components/minutesOfMeeting/mom-mentor-report/mom-mentor-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { MdacBankAccMentorReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-mentor-report/mdac-bank-acc-mentor-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusMentorReportComponent } from './components/paymentStatus/payment-status-mentor-report/payment-status-mentor-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { PromotersDetailReportComponent } from './components/promoters/promoters-detail-report/promoters-detail-report.component';
import { PromotersRbkReportComponent } from './components/promoters/promoters-rbk-report/promoters-rbk-report.component';
import { SecAsstSecDetailReportComponent } from './components/secAsstSec/sec-asst-sec-detail-report/sec-asst-sec-detail-report.component';
import { SecAsstSecRbkReportComponent } from './components/secAsstSec/sec-asst-sec-rbk-report/sec-asst-sec-rbk-report.component';
import { VillageMeetingBuildingInsReportComponent } from './components/villageMeeting/village-meeting-building-ins-report/village-meeting-building-ins-report.component';
import { VillageMeetingCalibrationReportComponent } from './components/villageMeeting/village-meeting-calibration-report/village-meeting-calibration-report.component';
import { VillageMeetingPromotersReportComponent } from './components/villageMeeting/village-meeting-promoters-report/village-meeting-promoters-report.component';
import { VillagemeetingAttendanceComponent } from './components/villageMeeting/villagemeeting-attendance/villagemeeting-attendance.component';
import { VillagemeetingFunctionariesComponent } from './components/villageMeeting/villagemeeting-functionaries/villagemeeting-functionaries.component';
import { VillagemeetingRbkComponent } from './components/villageMeeting/villagemeeting-rbk/villagemeeting-rbk.component';
import { VillagemeetingSecAndAssSecComponent } from './components/villageMeeting/villagemeeting-sec-and-ass-sec/villagemeeting-sec-and-ass-sec.component';
import { VillagemeetingVillageComponent } from './components/villageMeeting/villagemeeting-village/villagemeeting-village.component';
import { VafMentorLevelReportComponent } from './components/volunteerAsFarmer/vaf-mentor-level-report/vaf-mentor-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VvFarmerApprovedListReportComponent } from './components/volunteerFarmerData/vv-farmer-approved-list-report/vv-farmer-approved-list-report.component';
import { VvFarmerDataMentorReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mentor-report/vv-farmer-data-mentor-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataVillageReportComponent } from './components/volunteerFarmerData/vv-farmer-data-village-report/vv-farmer-data-village-report.component';
import { VvFarmerVolunteersListReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-list-report/vv-farmer-volunteers-list-report.component';
import { VvFarmerVolunteersLoggedInReportComponent } from './components/volunteerFarmerData/vv-farmer-volunteers-logged-in-report/vv-farmer-volunteers-logged-in-report.component';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHHAnimalsMentorReportComponent } from './components/vvHHAnimals/vv-hhanimals-mentor-report/vv-hhanimals-mentor-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';
import { VvHHAnimalsRbkReportComponent } from './components/vvHHAnimals/vv-hhanimals-rbk-report/vv-hhanimals-rbk-report.component';
import { VvHHAnimalsVillageReportComponent } from './components/vvHHAnimals/vv-hhanimals-village-report/vv-hhanimals-village-report.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CheyuthastateReportsComponent } from '../stateLevel/components/cheyuthastate-reports/cheyuthastate-reports.component';
import { RegistrationDetailsComponent } from '../notification-module/components/registration-details/registration-details.component';
import { NotificationDetailsComponent } from '../notification-module/components/notification-details/notification-details.component';
import { VAOwisefarmersreportComponent } from '../stateLevel/components/vaowisefarmersreport/vaowisefarmersreport.component';
import { MdssFollowupAbstractReportComponent } from '../stateLevel/components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { MdssRegRptComponent } from '../stateLevel/components/mdss-reg-rpt/mdss-reg-rpt.component';

const roles = ['101'];
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
            //   redirectTo: 'villageLevelMeetingsRbkLevelReport',
            //   pathMatch: 'full',
            // },
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
                path: 'VillageMeetingPromotersReport',
                component: VillageMeetingPromotersReportComponent,
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
                path: 'VillageMeetingBuildingInsReport',
                component: VillageMeetingBuildingInsReportComponent,
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
                path: 'FarmerabstractTxnMandalReport',
                component: FarmerabstractTxnMandalReportComponent,
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
                path: 'FarmerabstractTxnSocietyReport',
                component: FarmerabstractTxnSocietyReportComponent,
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
                path: 'LandAllotmentMandalReport',
                component: LandAllotmentMandalReportComponent,
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
                path: 'FarmerBankPendingAtMentorReport',
                component: FarmerBankPendingAtMentorReportComponent,
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
                path: 'VvFarmerDataMentorReport',
                component: VvFarmerDataMentorReportComponent,
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
                path: 'VvHHAnimalsMentorReport',
                component: VvHHAnimalsMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'AmcuInspectionMentorReport',
                component: AmcuInspectionMentorReportComponent,
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
                path: 'FarmerApprovalMentorReport',
                component: FarmerApprovalMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FamerSmsMentorReport',
                component: FamerSmsMentorReportComponent,
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
                path: 'VvHHAnimalsClusterReport',
                component: VvHHAnimalsClusterReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerMilkPouringMentorReport',
                component: FarmerMilkPouringMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'BmcuConstructionMentorReport',
                component: BmcuConstructionMentorReportComponent,
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
                path: 'FarmerSchemeMentorReport',
                component: FarmerSchemeMentorReportComponent,
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
                path: 'MomMentorReport',
                component: MomMentorReportComponent,
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
                path: 'VolunteerWiseMilkPouringReport',
                component: VwMilkPouringReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerRegMentorReport',
                component: FarmerRegMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'PaymentStatusMentorReport',
                component: PaymentStatusMentorReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'MdacBankAccMentorReport',
                component: MdacBankAccMentorReportComponent,
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
                path: 'milkPouringFarmersReport',
                component: MilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VafMentorLevelReport',
                component: VafMentorLevelReportComponent,
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
                path: 'nonMilkPouringFarmersReport',
                component: NonMilkPouringFarmersReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },



            {
                path: 'RegistrationDetails',
                component: RegistrationDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },


            {
                path: 'NotificationDetails',
                component: NotificationDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            }, {
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
export class MentorLevelRoutingModule { }
