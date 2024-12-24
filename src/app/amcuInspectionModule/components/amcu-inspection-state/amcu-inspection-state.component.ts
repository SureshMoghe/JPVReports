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
import { AmcuInspectionService } from '../../services/amcu-inspection.service';

@Component({
  selector: 'app-amcu-inspection-state',
  templateUrl: './amcu-inspection-state.component.html',
  styleUrls: ['./amcu-inspection-state.component.css'],
})
export class AmcuInspectionStateComponent
  implements OnInit, AfterViewInit, OnDestroy {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() typeOfInspection: any;
  @Input() inspectionName: any;
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    NO_OF_ROUTES: 0,
    NO_OF_SOCIETIES_INSPECTED: 0,
    NO_OF_SOCIETIES_NOT_INSPECTED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private amcuInspection: AmcuInspectionService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    // console.log(this.inspectionName);
    // console.log(this.typeOfInspection);
    this.loadReport();
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        NO_OF_ROUTES: 0,
        NO_OF_SOCIETIES_INSPECTED: 0,
        NO_OF_SOCIETIES_NOT_INSPECTED: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      this.spinner.show();
      const res = await this.amcuInspection.stateReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_ROUTES += parseInt(
            this.stateLevelDetails[i].NO_OF_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_INSPECTED += parseInt(
            this.stateLevelDetails[i].NO_OF_SOCIETIES_INSPECTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_NOT_INSPECTED += parseInt(
            this.stateLevelDetails[i].NO_OF_SOCIETIES_NOT_INSPECTED
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            NO_OF_ROUTES: this.stateLevelDetails[i].NO_OF_ROUTES,
            NO_OF_SOCIETIES_INSPECTED: this.stateLevelDetails[i]
              .NO_OF_SOCIETIES_INSPECTED,
            NO_OF_SOCIETIES_NOT_INSPECTED: this.stateLevelDetails[i]
              .NO_OF_SOCIETIES_NOT_INSPECTED,
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
      'AMCU Inspection State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      const fileName = 'stateLevelAMCUInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuInspection.stateLevelPDFReport(req);
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
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
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
