import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateLevelLDMRoutingModule } from './state-level-ldm-routing.module';
import { CommonComponent } from './components/common/common.component';
import { LdmBankStateReportComponent } from './components/ldm-bank-state-report/ldm-bank-state-report.component';
import { LdmBankRbkReportComponent } from './components/ldm-bank-rbk-report/ldm-bank-rbk-report.component';
import { LdmBankDistrictReportComponent } from './components/ldm-bank-district-report/ldm-bank-district-report.component';
import { LdmBankModule } from '../ldmBankModule/ldm-bank.module';
import { FarmerNatureOfUnitDistrictBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-district-bank-report/farmer-nature-of-unit-district-bank-report.component';
import { FarmerNatureOfUnitStateBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-state-bank-report/farmer-nature-of-unit-state-bank-report.component';
import { FarmerNatureOfUnitBranchBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-branch-bank-report/farmer-nature-of-unit-branch-bank-report.component';
import { FarmerNatureOfUnitDetailBankReportComponent } from './components/farmerNatureOfUnit/farmer-nature-of-unit-detail-bank-report/farmer-nature-of-unit-detail-bank-report.component';
import { FarmerNatureOfUnitModule } from '../farmerNatureOfUnitModule/farmer-nature-of-unit.module';


@NgModule({
  declarations: [CommonComponent,
    LdmBankDistrictReportComponent,
    LdmBankRbkReportComponent,
    LdmBankStateReportComponent,
    FarmerNatureOfUnitDistrictBankReportComponent,
    FarmerNatureOfUnitStateBankReportComponent,
    FarmerNatureOfUnitBranchBankReportComponent,
    FarmerNatureOfUnitDetailBankReportComponent
  ],
  imports: [
    CommonModule,
    LdmBankModule,
    StateLevelLDMRoutingModule,
    FarmerNatureOfUnitModule
  ]
})
export class StateLevelLDMModule { }
