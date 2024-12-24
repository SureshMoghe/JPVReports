import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilkProcurementDistrictComponent } from './components/milk-procurement-district/milk-procurement-district.component';
import { PromotersVolunteersDistrictComponent } from './components/promoters-volunteers-district/promoters-volunteers-district.component';
import { SampleMilkStatusDistrictComponent } from './components/sample-milk-status-district/sample-milk-status-district.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { TopMilkPourersMdacDistrictComponent } from './components/top-milk-pourers-mdac-district/top-milk-pourers-mdac-district.component';
import { AmcuPerformanceDistrictComponent } from './components/amcu-performance-district/amcu-performance-district.component';
import { DiscontinuedVillagesComponent } from './components/discontinued-villages/discontinued-villages.component';
import { FarmerStatusComponent } from './components/farmer-status/farmer-status.component';
import { HouseholdSurveyComponent } from './components/household-survey/household-survey.component';

@NgModule({
  declarations: [
    MilkProcurementDistrictComponent,
    PromotersVolunteersDistrictComponent,
    SampleMilkStatusDistrictComponent,
    TopMilkPourersMdacDistrictComponent,
    AmcuPerformanceDistrictComponent,
    DiscontinuedVillagesComponent,
    FarmerStatusComponent,
    HouseholdSurveyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    MilkProcurementDistrictComponent,
    PromotersVolunteersDistrictComponent,
    SampleMilkStatusDistrictComponent,
    TopMilkPourersMdacDistrictComponent,
    AmcuPerformanceDistrictComponent,
    DiscontinuedVillagesComponent,
    FarmerStatusComponent,
    HouseholdSurveyComponent,
  ],
})
export class CsReportsModule {}
