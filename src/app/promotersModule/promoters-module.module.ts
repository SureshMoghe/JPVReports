import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotersModuleRoutingModule } from './promoters-module-routing.module';
import { PromotersStateLevelComponent } from './components/promoters-state-level/promoters-state-level.component';
import { PromotersMentorLevelComponent } from './components/promoters-mentor-level/promoters-mentor-level.component';
import { PromotersRbkLevelComponent } from './components/promoters-rbk-level/promoters-rbk-level.component';
import { PromotersDetailLevelComponent } from './components/promoters-detail-level/promoters-detail-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { PromotersAddedRBKComponent } from './components/promoters-added-rbk/promoters-added-rbk.component';
import { PromotersNotAddedRBKComponent } from './components/promoters-not-added-rbk/promoters-not-added-rbk.component';
import { TotalPromotersAddedComponent } from './components/total-promoters-added/total-promoters-added.component';

@NgModule({
  declarations: [
    PromotersStateLevelComponent,
    PromotersMentorLevelComponent,
    PromotersRbkLevelComponent,
    PromotersDetailLevelComponent,
    PromotersAddedRBKComponent,
    PromotersNotAddedRBKComponent,
    TotalPromotersAddedComponent,
  ],
  imports: [
    CommonModule,
    PromotersModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule,
  ],
  exports: [
    PromotersStateLevelComponent,
    PromotersMentorLevelComponent,
    PromotersRbkLevelComponent,
    PromotersDetailLevelComponent,
    PromotersAddedRBKComponent,
    PromotersNotAddedRBKComponent,
    TotalPromotersAddedComponent,
  ],
})
export class PromotersModuleModule {}
