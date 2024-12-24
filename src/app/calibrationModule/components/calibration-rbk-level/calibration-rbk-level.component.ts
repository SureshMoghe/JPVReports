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
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { CalibrationModuleService } from '../../services/calibration-module.service';

@Component({
  selector: 'app-calibration-rbk-level',
  templateUrl: './calibration-rbk-level.component.html',
  styleUrls: ['./calibration-rbk-level.component.css'],
})
export class CalibrationRbkLevelComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: '-',
    MDAC_CODE: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_CALIB_DONE_VILLAGES: 0,
    TOTAL_CALIB_NOT_DONE_VILLAGES: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private calibration: CalibrationModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.mentorId !== undefined &&
      this.mentorId !== '' &&
      this.mentorId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.calibration.rbkLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          RBK_NAME: '-',
          MDAC_CODE: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_CALIB_DONE_VILLAGES: 0,
          TOTAL_CALIB_NOT_DONE_VILLAGES: 0,
        };
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.rbkLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.rbkLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_DONE_VILLAGES += parseInt(
            this.rbkLevelDetails[i].TOTAL_CALIB_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CALIB_NOT_DONE_VILLAGES += parseInt(
            this.rbkLevelDetails[i].TOTAL_CALIB_NOT_DONE_VILLAGES
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.rbkLevelDetails[i].RBK_NAME,
            MDAC_CODE: this.rbkLevelDetails[i].MDAC_CODE,
            TOTAL_ROUTES: this.rbkLevelDetails[i].TOTAL_ROUTES,
            TOTAL_VILLAGES: this.rbkLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_CALIB_DONE_VILLAGES: this.rbkLevelDetails[i]
              .TOTAL_CALIB_DONE_VILLAGES,
            TOTAL_CALIB_NOT_DONE_VILLAGES: this.rbkLevelDetails[i]
              .TOTAL_CALIB_NOT_DONE_VILLAGES,
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
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Calibration RBK Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'rbkLevelCalibrationReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.calibration.rbkLevelCalibrationPDFReport(req);
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

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Calibration  Level Report',
      true
    );
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
