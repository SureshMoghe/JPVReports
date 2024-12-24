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
import { LandAllotmentService } from '../../services/land-allotment.service';

@Component({
  selector: 'app-land-allotment-state',
  templateUrl: './land-allotment-state.component.html',
  styleUrls: ['./land-allotment-state.component.css'],
})
export class LandAllotmentStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_SUBMIT_MANDALS: 0,
    TOTAL_NOT_SUBMIT_MANDALS: 0,
    TOTAL_RBKS: 0,
    TOTAL_LAND_SUBMITTED: 0,
    PERCENTAGE_COMPLETED: 0,
    TOTAL_LAND_NOT_SUBMITTED: 0,
    PERCENTAGE_NOT_COMPLETED: 0,
    TOTAL_LAND_HANDOVER_SUBMIT: 0,
    TOTAL_LAND_HANDOVER_NOT_SUBMIT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private allotmentAPI: LandAllotmentService,
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
        TOTAL_MANDALS: 0,
        TOTAL_SUBMIT_MANDALS: 0,
        TOTAL_NOT_SUBMIT_MANDALS: 0,
        TOTAL_RBKS: 0,
        TOTAL_LAND_SUBMITTED: 0,
        PERCENTAGE_COMPLETED: 0,
        TOTAL_LAND_NOT_SUBMITTED: 0,
        PERCENTAGE_NOT_COMPLETED: 0,
        TOTAL_LAND_HANDOVER_SUBMIT: 0,
        TOTAL_LAND_HANDOVER_NOT_SUBMIT: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.allotmentAPI.landAllotmentStateReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_SUBMIT_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_SUBMITTED += parseInt(
            this.stateLevelDetails[i].TOTAL_LAND_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_NOT_SUBMITTED += parseInt(
            this.stateLevelDetails[i].TOTAL_LAND_NOT_SUBMITTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_SUBMIT += parseInt(
            this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_NOT_SUBMIT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_SUBMIT_MANDALS: this.stateLevelDetails[i]
              .TOTAL_SUBMIT_MANDALS,
            TOTAL_NOT_SUBMIT_MANDALS: this.stateLevelDetails[i]
              .TOTAL_NOT_SUBMIT_MANDALS,
            TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
            TOTAL_LAND_SUBMITTED: this.stateLevelDetails[i]
              .TOTAL_LAND_SUBMITTED,
            PERCENTAGE_COMPLETED: this.stateLevelDetails[i]
              .PERCENTAGE_COMPLETED,
            TOTAL_LAND_NOT_SUBMITTED: this.stateLevelDetails[i]
              .TOTAL_LAND_NOT_SUBMITTED,
            PERCENTAGE_NOT_COMPLETED: this.stateLevelDetails[i]
              .PERCENTAGE_NOT_COMPLETED,
            TOTAL_LAND_HANDOVER_SUBMIT: this.stateLevelDetails[i]
              .TOTAL_LAND_HANDOVER_SUBMIT,
            TOTAL_LAND_HANDOVER_NOT_SUBMIT: this.stateLevelDetails[i]
              .TOTAL_LAND_HANDOVER_NOT_SUBMIT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.PERCENTAGE_COMPLETED =
          (this.reportTotals.TOTAL_LAND_SUBMITTED /
            this.reportTotals.TOTAL_RBKS) *
          100;
        this.reportTotals.PERCENTAGE_COMPLETED = parseFloat(
          this.reportTotals.PERCENTAGE_COMPLETED.toFixed(2)
        );
        this.reportTotals.PERCENTAGE_NOT_COMPLETED =
          (this.reportTotals.TOTAL_LAND_NOT_SUBMITTED /
            this.reportTotals.TOTAL_RBKS) *
          100;
        this.reportTotals.PERCENTAGE_NOT_COMPLETED = parseFloat(
          this.reportTotals.PERCENTAGE_NOT_COMPLETED.toFixed(2)
        );
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
      'Land Allotment State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelLandAllotment';
      let basePDF = '';
      this.spinner.show();
      const res = await this.allotmentAPI.landAllotmentStatePDFReport(req);
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
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
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
