import {
  AfterViewInit,
  Component,
  EventEmitter,
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
import { AmcuNetworkInspectionService } from '../../services/amcu-network-inspection.service';

@Component({
  selector: 'app-amcu-network-state',
  templateUrl: './amcu-network-state.component.html',
  styleUrls: ['./amcu-network-state.component.css'],
})
export class AmcuNetworkStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNwNotSubmittedChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    NW_SUBMITED_VILLAGES: 0,
    NW_NOT_SUBMITED_VILLAGES: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private amcuNetwork: AmcuNetworkInspectionService,
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
        NW_SUBMITED_VILLAGES: 0,
        NW_NOT_SUBMITED_VILLAGES: 0,
      };
      const req = {};
      this.spinner.show();
      const res = await this.amcuNetwork.networkStateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NW_SUBMITED_VILLAGES += parseInt(
            this.stateLevelDetails[i].NW_SUBMITED_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NW_NOT_SUBMITED_VILLAGES += parseInt(
            this.stateLevelDetails[i].NW_NOT_SUBMITED_VILLAGES
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            NW_SUBMITED_VILLAGES: this.stateLevelDetails[i]
              .NW_SUBMITED_VILLAGES,
            NW_NOT_SUBMITED_VILLAGES: this.stateLevelDetails[i]
              .NW_NOT_SUBMITED_VILLAGES,
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnNetworkNotSubmitted(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNwNotSubmittedChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Network Inspection State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {};
      const fileName = 'stateLevelAMCUNetworkInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuNetwork.stateLevelPDFReport(req);
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
