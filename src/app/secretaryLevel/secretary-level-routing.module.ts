import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerAbstractTxnRbkReportComponent } from './components/farmerAbstractTxn/farmer-abstract-txn-rbk-report/farmer-abstract-txn-rbk-report.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerBankBAUStatusRbkReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-baustatus-rbk-report/farmer-bank-baustatus-rbk-report.component';
import { FarmerBankInvalidAccountsReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-invalid-accounts-report/farmer-bank-invalid-accounts-report.component';
import { FarmerBankPendingAtDaReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-da-report/farmer-bank-pending-at-da-report.component';
import { FarmerBankPendingAtMentorReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-pending-at-mentor-report/farmer-bank-pending-at-mentor-report.component';
import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './components/farmerBankAccUpdateStatus/farmer-bank-verified-accepted-rejected-report/farmer-bank-verified-accepted-rejected-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerRegistrationDetailReportComponent } from './components/FarmerRegistrationDetailReportComponent/farmer-registration-detail-report/farmer-registration-detail-report.component';
import { MomRbkReportComponent } from './components/minutesOfMeeting/mom-rbk-report/mom-rbk-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { PaymentStatusDetailReportComponent } from './components/paymentStatus/payment-status-detail-report/payment-status-detail-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { VAOwisefarmersreportComponent } from '../stateLevel/components/vaowisefarmersreport/vaowisefarmersreport.component';
import { MdssRegRptComponent } from '../stateLevel/components/mdss-reg-rpt/mdss-reg-rpt.component';
import { MdssFollowupAbstractReportComponent } from '../stateLevel/components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';

const roles = ['901'];
const routes: Routes = [

    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                redirectTo: 'FarmerAbstractTxnRbkReport',
                pathMatch: 'full',
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
                path: 'FarmerabstractTxnSocietyReport',
                component: FarmerabstractTxnSocietyReportComponent,
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
                path: 'FarmerBankPendingAtMentorReport',
                component: FarmerBankPendingAtMentorReportComponent,
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
                path: 'FarmerRegistrationDetailReport',
                component: FarmerRegistrationDetailReportComponent,
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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretaryLoginsRoutingModule { }
