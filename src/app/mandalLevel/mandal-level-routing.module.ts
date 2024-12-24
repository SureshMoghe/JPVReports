import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AmcuLandAllotmentMandalReportComponent } from './components/amcuLandAllotment/amcu-land-allotment-mandal-report/amcu-land-allotment-mandal-report.component';
import { BmcuConstructionMandalReportComponent } from './components/bmcuConstruction/bmcu-construction-mandal-report/bmcu-construction-mandal-report.component';
import { BmcuConstructionRbkReportComponent } from './components/bmcuConstruction/bmcu-construction-rbk-report/bmcu-construction-rbk-report.component';
import { CommonComponent } from './components/common/common.component';
import { FarmerRegistrationStatusComponent } from './components/farmer-registration-status/farmer-registration-status.component';
import { FatMandalReportComponent } from './components/farmerAbstractTxn/fat-mandal-report/fat-mandal-report.component';
import { FatRbkReportComponent } from './components/farmerAbstractTxn/fat-rbk-report/fat-rbk-report.component';
import { FatSocietyReportComponent } from './components/farmerAbstractTxn/fat-society-report/fat-society-report.component';
import { FarmerApprovalMandalReportComponent } from './components/farmerApproval/farmer-approval-mandal-report/farmer-approval-mandal-report.component';
import { FarmerApprovalRoutesReportComponent } from './components/farmerApproval/farmer-approval-routes-report/farmer-approval-routes-report.component';
import { FarmerBankBAUStatusMandalReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-mandal-report/farmer-bank-baustatus-mandal-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FmpMandalReportComponent } from './components/farmerMilkPouring/fmp-mandal-report/fmp-mandal-report.component';
import { MilkPouringFarmersReportComponent } from './components/farmerMilkPouring/milk-pouring-farmers-report/milk-pouring-farmers-report.component';
import { NonMilkPouringFarmersReportComponent } from './components/farmerMilkPouring/non-milk-pouring-farmers-report/non-milk-pouring-farmers-report.component';
import { VvMilkPouringReportComponent } from './components/farmerMilkPouring/vv-milk-pouring-report/vv-milk-pouring-report.component';
import { FarmerRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-reg-detail-report/farmer-reg-detail-report.component';
import { FarmerRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-reg-rbk-report/farmer-reg-rbk-report.component';
import { FarmerRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-reg-village-report/farmer-reg-village-report.component';
import { FarmerSchemeMandalReportComponent } from './components/farmerScheme/farmer-scheme-mandal-report/farmer-scheme-mandal-report.component';
import { FarmerSchemeRbkReportComponent } from './components/farmerScheme/farmer-scheme-rbk-report/farmer-scheme-rbk-report.component';
import { NonMilkPouringReportComponent } from './components/farmerScheme/non-milk-pouring-report/non-milk-pouring-report.component';
import { FarmerSmsDetailReportComponent } from './components/farmerSMS/farmer-sms-detail-report/farmer-sms-detail-report.component';
import { FarmerSmsMandalReportComponent } from './components/farmerSMS/farmer-sms-mandal-report/farmer-sms-mandal-report.component';
import { FarmerSmsRbkReportComponent } from './components/farmerSMS/farmer-sms-rbk-report/farmer-sms-rbk-report.component';
import { LandAllotmentMandalReportComponent } from './components/landAllotment/land-allotment-mandal-report/land-allotment-mandal-report.component';
import { MdacBankAccDetailReportComponent } from './components/mdacBankAccount/mdac-bank-acc-detail-report/mdac-bank-acc-detail-report.component';
import { MdacBankAccVillageReportComponent } from './components/mdacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MomMandalReportComponent } from './components/minutesOfMeeting/mom-mandal-report/mom-mandal-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { PlaMandalReportComponent } from './components/pacsLandAllotment/pla-mandal-report/pla-mandal-report.component';
import { VafMandalLevelReportComponent } from './components/volunteerAsFarmer/vaf-mandal-level-report/vaf-mandal-level-report.component';
import { VafRbkLevelReportComponent } from './components/volunteerAsFarmer/vaf-rbk-level-report/vaf-rbk-level-report.component';
import { VvFarmerDataMandalReportComponent } from './components/volunteerFarmerData/vv-farmer-data-mandal-report/vv-farmer-data-mandal-report.component';
import { VvFarmerDataRbkReportComponent } from './components/volunteerFarmerData/vv-farmer-data-rbk-report/vv-farmer-data-rbk-report.component';
import { VvFarmerDataRoutesReportComponent } from './components/volunteerFarmerData/vv-farmer-data-routes-report/vv-farmer-data-routes-report.component';
import { VvHHAnimalsClusterReportComponent } from './components/vvHHAnimals/vv-hhanimals-cluster-report/vv-hhanimals-cluster-report.component';
import { VvHHAnimalsMandalReportComponent } from './components/vvHHAnimals/vv-hhanimals-mandal-report/vv-hhanimals-mandal-report.component';
import { VvHhanimalsPendingHhReportComponent } from './components/vvHHAnimals/vv-hhanimals-pending-hh-report/vv-hhanimals-pending-hh-report.component';

import { CheyuthaMandalReportComponent } from './components/cheyutha-mandal-report/cheyutha-mandal-report.component';
import { CheyuthaMandalByDistIDReportsComponent } from '../stateLevel/components/cheyutha-mandal-by-dist-idreports/cheyutha-mandal-by-dist-idreports.component';
import { CheyuthaRbkReportComponent } from './components/cheyutha-rbk-report/cheyutha-rbk-report.component';
import { VAOwisefarmersreportComponent } from '../stateLevel/components/vaowisefarmersreport/vaowisefarmersreport.component';
import { MdssFollowupAbstractReportComponent } from '../stateLevel/components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { MdssRegRptComponent } from '../stateLevel/components/mdss-reg-rpt/mdss-reg-rpt.component';

const roles = ['105', '106'];

const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                redirectTo: 'MdacBankAccDetailReport',
                pathMatch: 'full',
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
                path: 'MdacBankAccDetailReport',
                component: MdacBankAccDetailReportComponent,
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
                path: 'CheyuthaMandalReport',
                component: CheyuthaMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },

            {
                path: 'CheyuthaRbkReport',
                component: CheyuthaRbkReportComponent,
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
                path: 'FarmerBankPendingAtMentorReport',
                component: FarmerBankPendingAtMentorReportComponent,
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
                path: 'FarmerAbstractTxnMandalReport',
                component: FatMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerAbstractTxnRbkReport',
                component: FatRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerAbstractTxnSocietyReport',
                component: FatSocietyReportComponent,
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
                path: 'FarmerRegRbkReport',
                component: FarmerRegRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerRegVillageReport',
                component: FarmerRegVillageReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerRegDetailReport',
                component: FarmerRegDetailReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSmsMandalReport',
                component: FarmerSmsMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSmsRbkReport',
                component: FarmerSmsRbkReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'FarmerSmsDetailReport',
                component: FarmerSmsDetailReportComponent,
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
                path: 'VvHHAnimalsClusterReport',
                component: VvHHAnimalsClusterReportComponent,
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
                path: 'FarmerMilkPouringMandalReport',
                component: FmpMandalReportComponent,
                canActivate: [AuthGuard],
                data: {
                    roles,
                },
            },
            {
                path: 'VolunteerWiseMilkPouringReport',
                component: VvMilkPouringReportComponent,
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
                path: 'NonMilkPouringReport',
                component: NonMilkPouringReportComponent,
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
                path: 'PacsLandAllotmentMandalReport',
                component: PlaMandalReportComponent,
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
                path: 'nonMilkPouringFarmersReport',
                component: NonMilkPouringFarmersReportComponent,
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
export class MandalLevelRoutingModule { }
