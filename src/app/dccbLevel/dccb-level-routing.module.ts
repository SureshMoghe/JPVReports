import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CommonComponent } from './components/common/common.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { FarmerregistrationstatusComponent } from './components/farmerregistrationstatus/farmerregistrationstatus.component';
import { FarmerStatusComponent } from './components/farmer-status/farmer-status.component';
import { FarmerMilkPouringCertificateDashboardComponent } from './components/farmer-milk-pouring-certificate-dashboard/farmer-milk-pouring-certificate-dashboard.component';
import { CheyuthaDistrictReportsComponent } from './components/cheyutha-district-reports/cheyutha-district-reports.component';
import { CheyuthaMandalReportComponent } from './components/cheyutha-mandal-report/cheyutha-mandal-report.component';
import { DccbcheyuthavillagecountComponent } from './components/dccbcheyuthavillagecount/dccbcheyuthavillagecount.component';
import { DccbCheyuthaJpvRegisteredFarmerCountComponent } from './components/dccb-cheyutha-jpv-registered-farmer-count/dccb-cheyutha-jpv-registered-farmer-count.component';
import { DccbCheyuthaBeneficiariesCountComponent } from './components/dccb-cheyutha-beneficiaries-count/dccb-cheyutha-beneficiaries-count.component';
import { DccbStreenidhicountComponent } from './components/dccb-streenidhicount/dccb-streenidhicount.component';
import { DccbUnnathicountComponent } from './components/dccb-unnathicount/dccb-unnathicount.component';
import { DccbBanklinkcountComponent } from './components/dccb-banklinkcount/dccb-banklinkcount.component';
import { DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent } from './components/dccb-total-cheyutha-beneficiaries-groundedwithanimalscount/dccb-total-cheyutha-beneficiaries-groundedwithanimalscount.component';
import { DccbTotalnoofanimalscountComponent } from './components/dccb-totalnoofanimalscount/dccb-totalnoofanimalscount.component';
import { DccbCheyuthabeneRegjpvfarmerChangegroundanimalcountComponent } from './components/dccb-cheyuthabene-regjpvfarmer-changegroundanimalcount/dccb-cheyuthabene-regjpvfarmer-changegroundanimalcount.component';
import { DccbSurvyednonregisteredbeneficiariescountComponent } from './components/dccb-survyednonregisteredbeneficiariescount/dccb-survyednonregisteredbeneficiariescount.component';
import { DccbSurveyedWithAnimalscountComponent } from './components/dccb-surveyed-with-animalscount/dccb-surveyed-with-animalscount.component';
import { DccbSurvyedRegfarmerscountComponent } from './components/dccb-survyed-regfarmerscount/dccb-survyed-regfarmerscount.component';
import { DccbSurveyedWithoutAnimalscountComponent } from './components/dccb-surveyed-without-animalscount/dccb-surveyed-without-animalscount.component';
import { DccbNonSurvyedcountComponent } from './components/dccb-non-survyedcount/dccb-non-survyedcount.component';
import { DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent } from './components/dccbjpv-reg-farfacilitatedwithanimalgroundingcount/dccbjpv-reg-farfacilitatedwithanimalgroundingcount.component';
 
const roles = ['802'];

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'FarmerMpussRegDistrictReport',
        pathMatch: 'full',
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
        path: 'farmer-status',
        component: FarmerStatusComponent,
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
        path: 'MdacBankAccVillageReport',
        component: MdacBankAccVillageReportComponent,
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
        path: 'farmerregistrationstatus',
        component: FarmerregistrationstatusComponent,
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
        path: 'MpuacBankAccMandalReport',
        component: MpuacBankAccMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },

      {
        path: 'FarmerMilkPouringCertificateDashboard',
        component: FarmerMilkPouringCertificateDashboardComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaDistrictReport',
        component:CheyuthaDistrictReportsComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaMandalReport',
        component:CheyuthaMandalReportComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'cheyuthavillagecount',
        component:DccbcheyuthavillagecountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'jpvRegisteredFarmerCount',
        component:DccbCheyuthaJpvRegisteredFarmerCountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'cheyuthabeneficiariescount',
        component:DccbCheyuthaBeneficiariesCountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaStatestreenidhicount',
        component:DccbStreenidhicountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaStateunnathiReport',
        component:DccbUnnathicountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'BanklinkReports',
        component:DccbBanklinkcountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'TotalCheyuthaBeneficiariesGroundedwithanimals',
        component:DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'TotalnoofanimalsReports',
        component:DccbTotalnoofanimalscountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'CheyuthaBenRegJpvFarmergroundanimalReport',
        component:DccbCheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      },
      {
        path: 'SurvyednonRegisteredBeneficiaries',
        component:DccbSurvyednonregisteredbeneficiariescountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
      {
        path: 'SurveyedWithAnimalscount',
        component:DccbSurveyedWithAnimalscountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
      {
        path: 'SurveyedRegFarmersCount',
        component:DccbSurvyedRegfarmerscountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
      {
        path: 'SurveyedWithoutAnimals',
        component:DccbSurveyedWithoutAnimalscountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
      {
        path: 'NonSurvyedcount',
        component:DccbNonSurvyedcountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
      {
        path: 'jpvRegFaranimalgrounding',
        component:DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent,
        canActivate: [AuthGuard],
        data: {
          roles,
        },
      }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DccbLevelRoutingModule { }
