import { NgModule } from '@angular/core'; 
import { CommonComponent } from './components/common/common.component'; 
import { CommonModule } from '@angular/common'; 
 
import { PromptModuleRoutingModule } from './prompt-module-routing.module';
import { PromptwelcomepageComponent } from './components/promptwelcomepage/promptwelcomepage.component';
import { CalibrationstatelevelreportComponent } from './components/calibrationstatelevelreport/calibrationstatelevelreport.component';
import { CalibrationModuleModule } from '../calibrationModule/calibration-module.module';
import { SharedModule } from "../shared/shared.module";
import { CalibrationmentorlevelreportComponent } from './components/calibrationmentorlevelreport/calibrationmentorlevelreport.component';
import { CalibrationRbkLevelComponentComponent } from './components/calibration-rbk-level-component/calibration-rbk-level-component.component';
import { PmfarmerabstractComponent } from './components/pmfarmerabstract/pmfarmerabstract.component';
 
 
 
  
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PmsocietyWiseAbstractComponent } from './components/pmsociety-wise-abstract/pmsociety-wise-abstract.component';
 


 
    


@NgModule({
    declarations: 
    [CommonComponent, PromptwelcomepageComponent,
         CalibrationstatelevelreportComponent,
          CalibrationmentorlevelreportComponent,
           CalibrationRbkLevelComponentComponent,
           PmfarmerabstractComponent,
           PmsocietyWiseAbstractComponent,
           
        ],
    imports: [
        CommonModule,
        PromptModuleRoutingModule,
        CalibrationModuleModule,
        SharedModule,
        FormsModule,
        DataTablesModule,
    ]
})





export class PromptModuleModule { }
