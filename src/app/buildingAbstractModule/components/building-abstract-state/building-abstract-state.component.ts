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
  selector: 'app-building-abstract-state',
  templateUrl: './building-abstract-state.component.html',
  styleUrls: ['./building-abstract-state.component.css'],
})
export class BuildingAbstractStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_MANDAL: 0,
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
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_ROUTES: 0,
        TOTAL_MANDAL: 0,
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
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.buildingAbstract.stateLevelAbstractReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDAL += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AMCU_BUILDING_GOVERNMENT += parseInt(
            this.stateLevelDetails[i].IS_AMCU_BUILDING_GOVERNMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AMCU_BUILDING_PRIVATE += parseInt(
            this.stateLevelDetails[i].IS_AMCU_BUILDING_PRIVATE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_VILLAGE_LOC_IN_CENTERLY += parseInt(
            this.stateLevelDetails[i].IS_VILLAGE_LOC_IN_CENTERLY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_VILLAGE_LOC_NOT_IN_CENTERLY += parseInt(
            this.stateLevelDetails[i].IS_VILLAGE_LOC_NOT_IN_CENTERLY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_SAFETY_ARRANGEMENTS += parseInt(
            this.stateLevelDetails[i].IS_SAFETY_ARRANGEMENTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_SAFETY_ARRANGEMENTS += parseInt(
            this.stateLevelDetails[i].IS_NOT_SAFETY_ARRANGEMENTS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_CONC_1_PHASE += parseInt(
            this.stateLevelDetails[i].IS_AVIL_ELECTRIC_CONC_1_PHASE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_CONC_2_PHASE += parseInt(
            this.stateLevelDetails[i].IS_AVIL_ELECTRIC_CONC_2_PHASE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_ELECTRICCONNECTION += parseInt(
            this.stateLevelDetails[i].IS_NOT_AVIL_ELECTRICCONNECTION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ELECTRIC_EARTHING += parseInt(
            this.stateLevelDetails[i].IS_AVIL_ELECTRIC_EARTHING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_ELECTRIC_EARTHING += parseInt(
            this.stateLevelDetails[i].IS_NOT_AVIL_ELECTRIC_EARTHING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_SPACE_VEHI_MOVMENT += parseInt(
            this.stateLevelDetails[i].IS_AVIL_SPACE_VEHI_MOVMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_NOT_AVIL_SPACE_VEHI_MOVMENT += parseInt(
            this.stateLevelDetails[i].IS_NOT_AVIL_SPACE_VEHI_MOVMENT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_AVIL_ROAD_TO_APPROCH_AMCU += parseInt(
            this.stateLevelDetails[i].IS_AVIL_ROAD_TO_APPROCH_AMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ISNOT_AVIL_ROADTO_APPROCH_AMCU += parseInt(
            this.stateLevelDetails[i].ISNOT_AVIL_ROADTO_APPROCH_AMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.IS_HAVING_NETWORK_CONNECT += parseInt(
            this.stateLevelDetails[i].IS_HAVING_NETWORK_CONNECT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ISNOT_HAVING_NETWORK_CONNECT += parseInt(
            this.stateLevelDetails[i].ISNOT_HAVING_NETWORK_CONNECT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_MANDAL: this.stateLevelDetails[i].TOTAL_MANDAL,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            IS_AMCU_BUILDING_GOVERNMENT: this.stateLevelDetails[i]
              .IS_AMCU_BUILDING_GOVERNMENT,
            IS_AMCU_BUILDING_PRIVATE: this.stateLevelDetails[i]
              .IS_AMCU_BUILDING_PRIVATE,
            IS_VILLAGE_LOC_IN_CENTERLY: this.stateLevelDetails[i]
              .IS_VILLAGE_LOC_IN_CENTERLY,
            IS_VILLAGE_LOC_NOT_IN_CENTERLY: this.stateLevelDetails[i]
              .IS_VILLAGE_LOC_NOT_IN_CENTERLY,
            IS_SAFETY_ARRANGEMENTS: this.stateLevelDetails[i]
              .IS_SAFETY_ARRANGEMENTS,
            IS_NOT_SAFETY_ARRANGEMENTS: this.stateLevelDetails[i]
              .IS_NOT_SAFETY_ARRANGEMENTS,
            IS_AVIL_ELECTRIC_CONC_1_PHASE: this.stateLevelDetails[i]
              .IS_AVIL_ELECTRIC_CONC_1_PHASE,
            IS_AVIL_ELECTRIC_CONC_2_PHASE: this.stateLevelDetails[i]
              .IS_AVIL_ELECTRIC_CONC_2_PHASE,
            IS_NOT_AVIL_ELECTRICCONNECTION: this.stateLevelDetails[i]
              .IS_NOT_AVIL_ELECTRICCONNECTION,
            IS_AVIL_ELECTRIC_EARTHING: this.stateLevelDetails[i]
              .IS_AVIL_ELECTRIC_EARTHING,
            IS_NOT_AVIL_ELECTRIC_EARTHING: this.stateLevelDetails[i]
              .IS_NOT_AVIL_ELECTRIC_EARTHING,
            IS_AVIL_SPACE_VEHI_MOVMENT: this.stateLevelDetails[i]
              .IS_AVIL_SPACE_VEHI_MOVMENT,
            IS_NOT_AVIL_SPACE_VEHI_MOVMENT: this.stateLevelDetails[i]
              .IS_NOT_AVIL_SPACE_VEHI_MOVMENT,
            IS_AVIL_ROAD_TO_APPROCH_AMCU: this.stateLevelDetails[i]
              .IS_AVIL_ROAD_TO_APPROCH_AMCU,
            ISNOT_AVIL_ROADTO_APPROCH_AMCU: this.stateLevelDetails[i]
              .ISNOT_AVIL_ROADTO_APPROCH_AMCU,
            IS_HAVING_NETWORK_CONNECT: this.stateLevelDetails[i]
              .IS_HAVING_NETWORK_CONNECT,
            ISNOT_HAVING_NETWORK_CONNECT: this.stateLevelDetails[i]
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
      'Building Abstract State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelBuildingAbstractReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.buildingAbstract.stateLevelAbstractPDFReport(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
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
