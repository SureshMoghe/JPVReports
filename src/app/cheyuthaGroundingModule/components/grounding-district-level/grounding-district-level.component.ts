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
import { CheyuthaGroundingService } from '../../services/cheyutha-grounding.service';

@Component({
  selector: 'app-grounding-district-level',
  templateUrl: './grounding-district-level.component.html',
  styleUrls: ['./grounding-district-level.component.css'],
})
export class GroundingDistrictLevelComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  districtLevelDetails = [];

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
      const req = {
        districtId: this.districtId,
      };
      const res = await this.groundingAPI.districtLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATIONS += parseInt(
            this.districtLevelDetails[i].TOTAL_APPLICATIONS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPLICATION_SUBMITED_BY_AHDEPT += parseInt(
            this.districtLevelDetails[i].APPLICATION_SUBMITED_BY_AHDEPT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.LOAN_SANCTION_BYTHE_BANKERS += parseInt(
            this.districtLevelDetails[i].LOAN_SANCTION_BYTHE_BANKERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.ANIMAL_GROUNDING += parseInt(
            this.districtLevelDetails[i].ANIMAL_GROUNDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.districtLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL: this.districtLevelDetails[i].MANDAL_NAME,
            TOTAL_APPLICATIONS: this.districtLevelDetails[i].TOTAL_APPLICATIONS,
            APPLICATION_SUBMITED_BY_AHDEPT: this.districtLevelDetails[i]
              .APPLICATION_SUBMITED_BY_AHDEPT,
            LOAN_SANCTION_BYTHE_BANKERS: this.districtLevelDetails[i]
              .LOAN_SANCTION_BYTHE_BANKERS,
            ANIMAL_GROUNDING: this.districtLevelDetails[i].ANIMAL_GROUNDING,
            REJECTED: this.districtLevelDetails[i].REJECTED,
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
      mandalId: obj.LGD_MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Grounding District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      const fileName = 'districtLevelCheyuthaGroundingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.groundingAPI.districtLevelPDFReport(req);
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
