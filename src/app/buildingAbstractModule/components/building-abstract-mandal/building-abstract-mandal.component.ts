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
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BuildingAbstractService } from '../../services/building-abstract.service';

@Component({
  selector: 'app-building-abstract-mandal',
  templateUrl: './building-abstract-mandal.component.html',
  styleUrls: ['./building-abstract-mandal.component.css'],
})
export class BuildingAbstractMandalComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    IS_AMCU_BUILDING_GOVERNMENT: 0,
    IS_AMCU_BUILDING_PRIVATE: 0,
    IS_VILLAGE_LOC_IN_CENTERLY: 0,
    IS_VILLAGE_LOC_NOT_IN_CENTERLY: 0,
    IS_SAFETY_ARRANGEMENTS: 0,
    IS_NOT_SAFETY_ARRANGEMENTS: 0,
    IS_AVIL_ELECTRIC_CONC_1_PHASE: 0,
    IS_AVIL_ELECTRIC_CONC_2_PHASE: 0,
    IS_NOT_AVIL_ELECTRICCONNECTION: 0,
    IS_AVIL_ELECTRIC_EARTHING: 0,
    IS_NOT_AVIL_ELECTRIC_EARTHING: 0,
    IS_AVIL_SPACE_VEHI_MOVMENT: 0,
    IS_NOT_AVIL_SPACE_VEHI_MOVMENT: 0,
    IS_AVIL_ROAD_TO_APPROCH_AMCU: 0,
    ISNOT_AVIL_ROADTO_APPROCH_AMCU: 0,
    IS_HAVING_NETWORK_CONNECT: 0,
    ISNOT_HAVING_NETWORK_CONNECT: 0,
  };
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
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.buildingAbstract.mandalLevelAbstractReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_RBK: 0,
          TOTAL_VILLAGES: 0,
          IS_AMCU_BUILDING_GOVERNMENT: 0,
          IS_AMCU_BUILDING_PRIVATE: 0,
          IS_VILLAGE_LOC_IN_CENTERLY: 0,
          IS_VILLAGE_LOC_NOT_IN_CENTERLY: 0,
          IS_SAFETY_ARRANGEMENTS: 0,
          IS_NOT_SAFETY_ARRANGEMENTS: 0,
          IS_AVIL_ELECTRIC_CONC_1_PHASE: 0,
          IS_AVIL_ELECTRIC_CONC_2_PHASE: 0,
          IS_NOT_AVIL_ELECTRICCONNECTION: 0,
          IS_AVIL_ELECTRIC_EARTHING: 0,
          IS_NOT_AVIL_ELECTRIC_EARTHING: 0,
          IS_AVIL_SPACE_VEHI_MOVMENT: 0,
          IS_NOT_AVIL_SPACE_VEHI_MOVMENT: 0,
          IS_AVIL_ROAD_TO_APPROCH_AMCU: 0,
          ISNOT_AVIL_ROADTO_APPROCH_AMCU: 0,
          IS_HAVING_NETWORK_CONNECT: 0,
          ISNOT_HAVING_NETWORK_CONNECT: 0,
        };
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.mandalLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.mandalLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mandalLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AMCU_BUILDING_GOVERNMENT += parseInt(
            this.mandalLevelDetails[i].IS_AMCU_BUILDING_GOVERNMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AMCU_BUILDING_PRIVATE += parseInt(
            this.mandalLevelDetails[i].IS_AMCU_BUILDING_PRIVATE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_VILLAGE_LOC_IN_CENTERLY += parseInt(
            this.mandalLevelDetails[i].IS_VILLAGE_LOC_IN_CENTERLY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_VILLAGE_LOC_NOT_IN_CENTERLY += parseInt(
            this.mandalLevelDetails[i].IS_VILLAGE_LOC_NOT_IN_CENTERLY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_SAFETY_ARRANGEMENTS += parseInt(
            this.mandalLevelDetails[i].IS_SAFETY_ARRANGEMENTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_SAFETY_ARRANGEMENTS += parseInt(
            this.mandalLevelDetails[i].IS_NOT_SAFETY_ARRANGEMENTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_CONC_1_PHASE += parseInt(
            this.mandalLevelDetails[i].IS_AVIL_ELECTRIC_CONC_1_PHASE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_CONC_2_PHASE += parseInt(
            this.mandalLevelDetails[i].IS_AVIL_ELECTRIC_CONC_2_PHASE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_ELECTRICCONNECTION += parseInt(
            this.mandalLevelDetails[i].IS_NOT_AVIL_ELECTRICCONNECTION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_EARTHING += parseInt(
            this.mandalLevelDetails[i].IS_AVIL_ELECTRIC_EARTHING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_ELECTRIC_EARTHING += parseInt(
            this.mandalLevelDetails[i].IS_NOT_AVIL_ELECTRIC_EARTHING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_SPACE_VEHI_MOVMENT += parseInt(
            this.mandalLevelDetails[i].IS_AVIL_SPACE_VEHI_MOVMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_SPACE_VEHI_MOVMENT += parseInt(
            this.mandalLevelDetails[i].IS_NOT_AVIL_SPACE_VEHI_MOVMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ROAD_TO_APPROCH_AMCU += parseInt(
            this.mandalLevelDetails[i].IS_AVIL_ROAD_TO_APPROCH_AMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ISNOT_AVIL_ROADTO_APPROCH_AMCU += parseInt(
            this.mandalLevelDetails[i].ISNOT_AVIL_ROADTO_APPROCH_AMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_HAVING_NETWORK_CONNECT += parseInt(
            this.mandalLevelDetails[i].IS_HAVING_NETWORK_CONNECT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ISNOT_HAVING_NETWORK_CONNECT += parseInt(
            this.mandalLevelDetails[i].ISNOT_HAVING_NETWORK_CONNECT
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.mandalLevelDetails[i].MANDAL_NAME,
            TOTAL_ROUTES: this.mandalLevelDetails[i].TOTAL_ROUTES,
            TOTAL_RBK: this.mandalLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.mandalLevelDetails[i].TOTAL_VILLAGES,
            IS_AMCU_BUILDING_GOVERNMENT: this.mandalLevelDetails[i]
              .IS_AMCU_BUILDING_GOVERNMENT,
            IS_AMCU_BUILDING_PRIVATE: this.mandalLevelDetails[i]
              .IS_AMCU_BUILDING_PRIVATE,
            IS_VILLAGE_LOC_IN_CENTERLY: this.mandalLevelDetails[i]
              .IS_VILLAGE_LOC_IN_CENTERLY,
            IS_VILLAGE_LOC_NOT_IN_CENTERLY: this.mandalLevelDetails[i]
              .IS_VILLAGE_LOC_NOT_IN_CENTERLY,
            IS_SAFETY_ARRANGEMENTS: this.mandalLevelDetails[i]
              .IS_SAFETY_ARRANGEMENTS,
            IS_NOT_SAFETY_ARRANGEMENTS: this.mandalLevelDetails[i]
              .IS_NOT_SAFETY_ARRANGEMENTS,
            IS_AVIL_ELECTRIC_CONC_1_PHASE: this.mandalLevelDetails[i]
              .IS_AVIL_ELECTRIC_CONC_1_PHASE,
            IS_AVIL_ELECTRIC_CONC_2_PHASE: this.mandalLevelDetails[i]
              .IS_AVIL_ELECTRIC_CONC_2_PHASE,
            IS_NOT_AVIL_ELECTRICCONNECTION: this.mandalLevelDetails[i]
              .IS_NOT_AVIL_ELECTRICCONNECTION,
            IS_AVIL_ELECTRIC_EARTHING: this.mandalLevelDetails[i]
              .IS_AVIL_ELECTRIC_EARTHING,
            IS_NOT_AVIL_ELECTRIC_EARTHING: this.mandalLevelDetails[i]
              .IS_NOT_AVIL_ELECTRIC_EARTHING,
            IS_AVIL_SPACE_VEHI_MOVMENT: this.mandalLevelDetails[i]
              .IS_AVIL_SPACE_VEHI_MOVMENT,
            IS_NOT_AVIL_SPACE_VEHI_MOVMENT: this.mandalLevelDetails[i]
              .IS_NOT_AVIL_SPACE_VEHI_MOVMENT,
            IS_AVIL_ROAD_TO_APPROCH_AMCU: this.mandalLevelDetails[i]
              .IS_AVIL_ROAD_TO_APPROCH_AMCU,
            ISNOT_AVIL_ROADTO_APPROCH_AMCU: this.mandalLevelDetails[i]
              .ISNOT_AVIL_ROADTO_APPROCH_AMCU,
            IS_HAVING_NETWORK_CONNECT: this.mandalLevelDetails[i]
              .IS_HAVING_NETWORK_CONNECT,
            ISNOT_HAVING_NETWORK_CONNECT: this.mandalLevelDetails[i]
              .ISNOT_HAVING_NETWORK_CONNECT,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
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
      'Building Abstract Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'mandalLevelBuildingAbstractReport';
      let basePDF = '';
      this.spinner.show();
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const res = await this.buildingAbstract.mandalLevelAbstractPDFReport(req);
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
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
