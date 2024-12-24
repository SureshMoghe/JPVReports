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
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BuildingInspectionService } from '../../services/building-inspection.service';

@Component({
  selector: 'app-building-inspection-state',
  templateUrl: './building-inspection-state.component.html',
  styleUrls: ['./building-inspection-state.component.css'],
})
export class BuildingInspectionStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  @Input() fromDate: any;
  @Input() toDate: any;
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_MENTOR: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_BUILDING_INSPECT: 0,
    TOTAL_BUILDING_NOT_INSPECT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private buildingInspect: BuildingInspectionService,
    private utils: UtilsService,
    private logger: LoggerService
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
        TOTAL_MENTOR: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_BUILDING_INSPECT: 0,
        TOTAL_BUILDING_NOT_INSPECT: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.buildingInspect.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MENTOR += parseInt(
            this.stateLevelDetails[i].TOTAL_MENTOR
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
          this.reportTotals.TOTAL_BUILDING_INSPECT += parseInt(
            this.stateLevelDetails[i].TOTAL_BUILDING_INSPECT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_BUILDING_NOT_INSPECT += parseInt(
            this.stateLevelDetails[i].TOTAL_BUILDING_NOT_INSPECT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_MENTOR: this.stateLevelDetails[i].TOTAL_MENTOR,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_BUILDING_INSPECT: this.stateLevelDetails[i]
              .TOTAL_BUILDING_INSPECT,
            TOTAL_BUILDING_NOT_INSPECT: this.stateLevelDetails[i]
              .TOTAL_BUILDING_NOT_INSPECT,
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
      'Building Inspection State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelBuildingInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.buildingInspect.stateLevelInspectPDFReport(req);
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
