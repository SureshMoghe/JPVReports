import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BuildingAbstractService } from '../../services/building-abstract.service';

@Component({
  selector: 'app-building-abstract-village',
  templateUrl: './building-abstract-village.component.html',
  styleUrls: ['./building-abstract-village.component.css'],
})
export class BuildingAbstractVillageComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  villageLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private buildingAbstract: BuildingAbstractService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.buildingAbstract.villageLevelAbstractReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.villageLevelDetails[i].VILLAGE_NAME,
            AMC_ID: this.villageLevelDetails[i].AMC_ID,
            ROUTE_NAME: this.villageLevelDetails[i].ROUTE_NAME,
            IS_AMCU_BUILDING: this.villageLevelDetails[i].IS_AMCU_BUILDING,
            IS_VILLAGE_LOCATED_IN_CENTERLY: this.villageLevelDetails[i]
              .IS_VILLAGE_LOCATED_IN_CENTERLY,
            IS_SAFETY_ARRANGEMENTS: this.villageLevelDetails[i]
              .IS_SAFETY_ARRANGEMENTS,
            IS_AVIL_ELECTRIC_CONNECTION: this.villageLevelDetails[i]
              .IS_AVIL_ELECTRIC_CONNECTION,
            IS_AVIL_ELECTRIC_EARTHING: this.villageLevelDetails[i]
              .IS_AVIL_ELECTRIC_EARTHING,
            IS_AVIL_SPACE_VEHICAL_MOVMENT: this.villageLevelDetails[i]
              .IS_AVIL_SPACE_VEHICAL_MOVMENT,
            IS_AVIL_ROAD_TO_APPROCH_AMCU: this.villageLevelDetails[i]
              .IS_AVIL_ROAD_TO_APPROCH_AMCU,
            IS_HAVING_NETWORK_CONNECTIVITY: this.villageLevelDetails[i]
              .IS_HAVING_NETWORK_CONNECTIVITY,
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Building Abstract Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelBuildingAbstractReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.buildingAbstract.villageLevelAbstractPDFReport(
        req
      );
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
