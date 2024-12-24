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
import { CheyuthaGroundingService } from '../../services/cheyutha-grounding.service';

@Component({
  selector: 'app-grounding-state-level',
  templateUrl: './grounding-state-level.component.html',
  styleUrls: ['./grounding-state-level.component.css'],
})
export class GroundingStateLevelComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
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
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_APPLICATIONS: 0,
        APPLICATION_SUBMITED_BY_AHDEPT: 0,
        LOAN_SANCTION_BYTHE_BANKERS: 0,
        ANIMAL_GROUNDING: 0,
        REJECTED: 0,
      };
      this.spinner.show();
      const res = await this.groundingAPI.stateLevelReport();
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATIONS += parseInt(
            this.stateLevelDetails[i].TOTAL_APPLICATIONS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPLICATION_SUBMITED_BY_AHDEPT += parseInt(
            this.stateLevelDetails[i].APPLICATION_SUBMITED_BY_AHDEPT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.LOAN_SANCTION_BYTHE_BANKERS += parseInt(
            this.stateLevelDetails[i].LOAN_SANCTION_BYTHE_BANKERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ANIMAL_GROUNDING += parseInt(
            this.stateLevelDetails[i].ANIMAL_GROUNDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.stateLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_APPLICATIONS: this.stateLevelDetails[i].TOTAL_APPLICATIONS,
            APPLICATION_SUBMITED_BY_AHDEPT: this.stateLevelDetails[i]
              .APPLICATION_SUBMITED_BY_AHDEPT,
            LOAN_SANCTION_BYTHE_BANKERS: this.stateLevelDetails[i]
              .LOAN_SANCTION_BYTHE_BANKERS,
            ANIMAL_GROUNDING: this.stateLevelDetails[i].ANIMAL_GROUNDING,
            REJECTED: this.stateLevelDetails[i].REJECTED,
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
      districtId: obj.LGD_DIST_CODE,
      districtName: obj.DISTRICT_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Grounding State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'stateLevelCheyuthaGroundingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.groundingAPI.stateLevelPDFReport();
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
