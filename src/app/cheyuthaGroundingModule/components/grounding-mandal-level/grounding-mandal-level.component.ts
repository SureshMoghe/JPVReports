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
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { CheyuthaGroundingService } from '../../services/cheyutha-grounding.service';

@Component({
  selector: 'app-grounding-mandal-level',
  templateUrl: './grounding-mandal-level.component.html',
  styleUrls: ['./grounding-mandal-level.component.css'],
})
export class GroundingMandalLevelComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetailChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK: 'TOTAL',
    TOTAL_APPLICATIONS: 0,
    APPLICATION_SUBMITED_BY_AHDEPT: 0,
    LOAN_SANCTION_BYTHE_BANKERS: 0,
    ANIMAL_GROUNDING: 0,
    REJECTED: 0,
  };
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private groundingAPI: CheyuthaGroundingService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }
  ngOnChanges(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK: 'TOTAL',
        TOTAL_APPLICATIONS: 0,
        APPLICATION_SUBMITED_BY_AHDEPT: 0,
        LOAN_SANCTION_BYTHE_BANKERS: 0,
        ANIMAL_GROUNDING: 0,
        REJECTED: 0,
      };
      this.spinner.show();
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      const res = await this.groundingAPI.mandalLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATIONS += parseInt(
            this.mandalLevelDetails[i].TOTAL_APPLICATIONS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPLICATION_SUBMITED_BY_AHDEPT += parseInt(
            this.mandalLevelDetails[i].APPLICATION_SUBMITED_BY_AHDEPT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.LOAN_SANCTION_BYTHE_BANKERS += parseInt(
            this.mandalLevelDetails[i].LOAN_SANCTION_BYTHE_BANKERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ANIMAL_GROUNDING += parseInt(
            this.mandalLevelDetails[i].ANIMAL_GROUNDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.mandalLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            RBK: this.mandalLevelDetails[i].SECRETARIAT_NAME,
            TOTAL_APPLICATIONS: this.mandalLevelDetails[i].TOTAL_APPLICATIONS,
            APPLICATION_SUBMITED_BY_AHDEPT: this.mandalLevelDetails[i]
              .APPLICATION_SUBMITED_BY_AHDEPT,
            LOAN_SANCTION_BYTHE_BANKERS: this.mandalLevelDetails[i]
              .LOAN_SANCTION_BYTHE_BANKERS,
            ANIMAL_GROUNDING: this.mandalLevelDetails[i].ANIMAL_GROUNDING,
            REJECTED: this.mandalLevelDetails[i].REJECTED,
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

  btnGetDetails(obj, statusCode: string): void {
    const requestData = {
      districtId: obj.LGD_DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.LGD_MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      secId: obj.SECRETARIAT_CODE,
      secName: obj.SECRETARIAT_NAME,
      status: statusCode,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDetailChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Grounding Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      const fileName = 'mandalLevelCheyuthaGroundingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.groundingAPI.mandalLevelPDFReport(req);
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
