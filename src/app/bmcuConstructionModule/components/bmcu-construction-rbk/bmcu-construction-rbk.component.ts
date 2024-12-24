import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BmcuConstructionService } from '../../services/bmcu-construction.service';

@Component({
  selector: 'app-bmcu-construction-rbk',
  templateUrl: './bmcu-construction-rbk.component.html',
  styleUrls: ['./bmcu-construction-rbk.component.css'],
})
export class BmcuConstructionRbkComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  rbkLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private constructionAPI: BmcuConstructionService,
    private utils: UtilsService,
    private logger: LoggerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      this.spinner.show();
      const res = await this.constructionAPI.rbkLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            WORK_ID: this.rbkLevelDetails[i].WORK_ID,
            VILLAGE_NAME: this.rbkLevelDetails[i].VILLAGE_NAME,
            F_LGTH_BRTH_DESIGN: this.rbkLevelDetails[i].F_LGTH_BRTH_DESIGN,
            F_LOCATION_ACCESS_WOMEN:
              this.rbkLevelDetails[i].F_LOCATION_ACCESS_WOMEN,
            F_ROAD_VEHICLE: this.rbkLevelDetails[i].F_ROAD_VEHICLE,
            R_REGIS_LAND_DDCF: this.rbkLevelDetails[i].R_REGIS_LAND_DDCF,
            R_ALIENATION_HANDING: this.rbkLevelDetails[i].R_ALIENATION_HANDING,
            OF_AVI_WATER_BOREWELL:
              this.rbkLevelDetails[i].OF_AVI_WATER_BOREWELL,
            OF_AVI_DRINAGE: this.rbkLevelDetails[i].OF_AVI_DRINAGE,
            OF_AVI_SEWAGE_CONNECT:
              this.rbkLevelDetails[i].OF_AVI_SEWAGE_CONNECT,
            MARKING_MDAC_WOMEN: this.rbkLevelDetails[i].MARKING_MDAC_WOMEN,
            FOUNDATION_CONCRET: this.rbkLevelDetails[i].FOUNDATION_CONCRET,
            PLINTH_BEAM: this.rbkLevelDetails[i].PLINTH_BEAM,
            PROVIDING_COLUMNS: this.rbkLevelDetails[i].PROVIDING_COLUMNS,
            PROVIDING_SLAB: this.rbkLevelDetails[i].PROVIDING_SLAB,
            BRICK_WORK_FOR_WALLS: this.rbkLevelDetails[i].BRICK_WORK_FOR_WALLS,
            PLASTERING: this.rbkLevelDetails[i].PLASTERING,
            FLOORING: this.rbkLevelDetails[i].FLOORING,
            WINDOWS_DOORS_VENTILAT:
              this.rbkLevelDetails[i].WINDOWS_DOORS_VENTILAT,
            PAINTING: this.rbkLevelDetails[i].PAINTING,
            LOGOS_NAMEBOARD: this.rbkLevelDetails[i].LOGOS_NAMEBOARD,
            ELE_POWER_LIGHT_FAN: this.rbkLevelDetails[i].ELE_POWER_LIGHT_FAN,
            EARTHING: this.rbkLevelDetails[i].EARTHING,
            WATER_SUPPLY_BORETAP: this.rbkLevelDetails[i].WATER_SUPPLY_BORETAP,
            SANITATION: this.rbkLevelDetails[i].SANITATION,
            SUMP: this.rbkLevelDetails[i].SUMP,
          };

          this.excelData.push(singleRow);
        }
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnPhotoView(photo): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(photo);
      if (res.success) {
        let devicesPhoto = (
          this.sanitizer.bypassSecurityTrustResourceUrl(res.result) as any
        ).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(devicesPhoto);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'BMCU Construction RBK Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
      };
      const fileName = 'rbkLevelBMCUCOnstructionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.constructionAPI.rbkLevelPDFReport(req);
      if (res.success) {
        basePDF = res.result;
        this.utils.downloadPdfFile(basePDF, fileName);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
