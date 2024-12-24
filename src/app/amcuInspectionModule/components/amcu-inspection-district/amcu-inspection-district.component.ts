import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AmcuInspectionService } from '../../services/amcu-inspection.service';

@Component({
  selector: 'app-amcu-inspection-district',
  templateUrl: './amcu-inspection-district.component.html',
  styleUrls: ['./amcu-inspection-district.component.css'],
})
export class AmcuInspectionDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSocietiesNotInspectedClickChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSocietiesInspectedClickChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() typeOfInspection: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() inspectionName: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    ROUTE_NAME: 'TOTAL',
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
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.typeOfInspection === null &&
      this.typeOfInspection === '' &&
      this.typeOfInspection === undefined
    ) {
      return;
    }
    this.loadReport();
  }
  ngOnChanges(): void {
    // if (this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  async loadReport(): Promise<void> {
    try {
      this.districtLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      this.spinner.show();
      const res = await this.amcuInspection.districtReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          ROUTE_NAME: 'TOTAL',
          NO_OF_SOCIETIES_INSPECTED: 0,
          NO_OF_SOCIETIES_NOT_INSPECTED: 0,
        };
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_INSPECTED += parseInt(
            this.districtLevelDetails[i].NO_OF_SOCIETIES_INSPECTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_NOT_INSPECTED += parseInt(
            this.districtLevelDetails[i].NO_OF_SOCIETIES_NOT_INSPECTED
          );
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.districtLevelDetails[i].ROUTE_NAME,
            NO_OF_SOCIETIES_INSPECTED: this.districtLevelDetails[i]
              .NO_OF_SOCIETIES_INSPECTED,
            NO_OF_SOCIETIES_NOT_INSPECTED: this.districtLevelDetails[i]
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

  btnGetNotSocietiesInspected(obj): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      routeNo: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSocietiesNotInspectedClickChange.emit(encryptedString);
  }

  btnGetSocietiesInspected(obj): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      routeNo: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSocietiesInspectedClickChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Inspection District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      const fileName = 'districtLevelAmcuInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuInspection.districtLevelPDFReport(req);
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
