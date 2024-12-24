import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-bmcu-equipments-status-report',
  templateUrl: './bmcu-equipments-status-report.component.html',
  styleUrls: ['./bmcu-equipments-status-report.component.css']
})
export class BmcuEquipmentsStatusReportComponent implements OnInit 
{    

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  onDetailsChange(result): void {// this.onReportPhaseTypeChange();
    this.router.navigate(['/state/BmcuEquipmentSubmittedReport'], {
      queryParams: { request: result },
    });
  }

 
}