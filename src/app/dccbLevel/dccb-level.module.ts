import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DccbLevelRoutingModule } from './dccb-level-routing.module';
import { FarmerMpussRegDistrictReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-district-report/farmer-mpuss-reg-district-report.component';
import { FarmerMpussRegRbkReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-rbk-report/farmer-mpuss-reg-rbk-report.component';
import { FarmerMpussRegVillageReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-village-report/farmer-mpuss-reg-village-report.component';
import { FarmerMpussRegDetailReportComponent } from './components/farmerMPUSSReg/farmer-mpuss-reg-detail-report/farmer-mpuss-reg-detail-report.component';
import { MpuacBankAccMandalReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-mandal-report/mpuac-bank-acc-mandal-report.component';
import { MpuacBankAccDetailReportComponent } from './components/mpuacBankAccount/mpuac-bank-acc-detail-report/mpuac-bank-acc-detail-report.component';
import { MdacNotCreatedRbkListReportComponent } from './components/mpuacBankAccount/mdac-not-created-rbk-list-report/mdac-not-created-rbk-list-report.component';
import { MdacBankAccVillageReportComponent } from './components/mpuacBankAccount/mdac-bank-acc-village-report/mdac-bank-acc-village-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FarmerMpussRegModule } from '../farmerMpussReg/farmer-mpuss-reg.module';
import { MpuacBankAccModule } from '../mpuacBankAccModule/mpuac-bank-acc.module';
import { CommonComponent } from './components/common/common.component';
import { SharedModule } from '../shared/shared.module';
import { FarmerregistrationstatusComponent } from './components/farmerregistrationstatus/farmerregistrationstatus.component';
import { FarmerStatusComponent } from './components/farmer-status/farmer-status.component';
import { FarmerMilkPouringCertificateDashboardComponent } from './components/farmer-milk-pouring-certificate-dashboard/farmer-milk-pouring-certificate-dashboard.component';
import { StateLevelModule } from '../stateLevel/state-level.module';
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
 

@NgModule({
  declarations: [
    CommonComponent,
    FarmerMpussRegDistrictReportComponent,
    FarmerMpussRegRbkReportComponent,
    FarmerMpussRegVillageReportComponent,
    FarmerMpussRegDetailReportComponent,
    MpuacBankAccMandalReportComponent,
    MpuacBankAccDetailReportComponent,
    MdacNotCreatedRbkListReportComponent,
    MdacBankAccVillageReportComponent,
    FarmerregistrationstatusComponent,
    FarmerStatusComponent,
    FarmerMilkPouringCertificateDashboardComponent,
    CheyuthaDistrictReportsComponent,
    CheyuthaMandalReportComponent,
    DccbcheyuthavillagecountComponent,
    DccbCheyuthaJpvRegisteredFarmerCountComponent,
    DccbCheyuthaBeneficiariesCountComponent,
    DccbStreenidhicountComponent,
    DccbUnnathicountComponent,
    DccbBanklinkcountComponent,
    DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent,
    DccbTotalnoofanimalscountComponent,
    DccbCheyuthabeneRegjpvfarmerChangegroundanimalcountComponent,
    DccbSurvyednonregisteredbeneficiariescountComponent,
    DccbSurveyedWithAnimalscountComponent,
    DccbSurvyedRegfarmerscountComponent,
    DccbSurveyedWithoutAnimalscountComponent,
    DccbNonSurvyedcountComponent,
    DccbjpvRegFarfacilitatedwithanimalgroundingcountComponent,
   
      ],
  imports: [
    CommonModule,
    DccbLevelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FarmerMpussRegModule,
    MpuacBankAccModule,
    SharedModule,
    StateLevelModule,

  ]
})
export class DccbLevelModule { }
