import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictLevelLDMRoutingModule } from './district-level-ldm-routing.module';
import { CommonComponent } from './components/common/common.component';
import { LdmBankDistrictReportComponent } from './components/ldm-bank-district-report/ldm-bank-district-report.component';
import { LdmBankRbkReportComponent } from './components/ldm-bank-rbk-report/ldm-bank-rbk-report.component';
import { LdmBankModule } from '../ldmBankModule/ldm-bank.module';
import { FarmerNatureOfUnitDistrictLoginReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-login-report/farmer-nature-of-unit-district-login-report.component';
import { FarmerNatureOfUnitBankBranchReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-branch-report/farmer-nature-of-unit-bank-branch-report.component';
import { FarmerNatureOfUnitBankDetailReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-detail-report/farmer-nature-of-unit-bank-detail-report.component';
import { FarmerNatureOfUnitModule } from '../farmerNatureOfUnitModule/farmer-nature-of-unit.module';
import { FarmerNatureOfUnitBankDistrictReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-bank-district-report/farmer-nature-of-unit-bank-district-report.component';


@NgModule({
  declarations: [
    CommonComponent,
    LdmBankDistrictReportComponent,
    LdmBankRbkReportComponent,
    FarmerNatureOfUnitDistrictLoginReportComponent,
    FarmerNatureOfUnitBankBranchReportComponent,
    FarmerNatureOfUnitBankDetailReportComponent,
    FarmerNatureOfUnitBankDistrictReportComponent
  ],
  imports: [
    CommonModule,
    LdmBankModule,
    DistrictLevelLDMRoutingModule,
    FarmerNatureOfUnitModule
  ]
})
export class DistrictLevelLDMModule { }
