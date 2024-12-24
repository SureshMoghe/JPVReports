import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerabstractTxnSocietyReportComponent } from './components/farmerAbstractTxn/farmerabstract-txn-society-report/farmerabstract-txn-society-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { MomVillageReportComponent } from './components/minutesOfMeeting/mom-village-report/mom-village-report.component';
import { PaymentStatusRbkReportComponent } from './components/paymentStatus/payment-status-rbk-report/payment-status-rbk-report.component';
import { VAOwisefarmersreportComponent } from '../stateLevel/components/vaowisefarmersreport/vaowisefarmersreport.component';
import { MdssFollowupAbstractReportComponent } from '../stateLevel/components/mdss-followup-abstract-report/mdss-followup-abstract-report.component';
import { MdssRegRptComponent } from '../stateLevel/components/mdss-reg-rpt/mdss-reg-rpt.component';
const roles = ['902'];
const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                redirectTo: 'FarmerabstractTxnSocietyReport',
                pathMatch: 'full',
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
                path: 'FarmerMpussRegDetailReport',
                component: FarmerMpussRegDetailReportComponent,
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
export class SecAsstSecLoginRoutingModule { }
