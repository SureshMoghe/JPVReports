import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { SecAsstSecModuleService } from '../../services/sec-asst-sec-module.service';

@Component({
  selector: 'app-sec-asst-sec-not-added-level',
  templateUrl: './sec-asst-sec-not-added-level.component.html',
  styleUrls: ['./sec-asst-sec-not-added-level.component.css']
})
export class SecAsstSecNotAddedLevelComponent implements OnInit {
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() subReportType: any;
  headingText = '';
  secAsstSecNotAddedDetails = [];
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private secAsstSecAPI: SecAsstSecModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }


  ngOnInit(): void {
    if (this.subReportType === '1') {
      this.headingText = 'Secretaries Not Added Report';
    } else if (this.subReportType === '2') {
      this.headingText = 'Assistant Secretaries Not Added Report';
    }
    // tslint:disable-next-line: align
    this.loadReport();
  }
  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      let res;
      if (this.subReportType === '1') {
        res = await this.secAsstSecAPI.totalSecretaryNotAddedReport(req);
      } else if (this.subReportType === '2') {
        res = await this.secAsstSecAPI.totalAssSecretaryNotAddedReport(req);
      }
      this.spinner.show();
      if (res.success) {
        this.excelData = [];
        this.secAsstSecNotAddedDetails = res.result;
        for (let i = 0; i < this.secAsstSecNotAddedDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            UPDATED_NAME_OF_THE_MANDAL: this.secAsstSecNotAddedDetails[i].UPDATED_NAME_OF_THE_MANDAL,
            RBK_NAME1: this.secAsstSecNotAddedDetails[i].RBK_NAME1,
            MILK_PROCUREMENT_VILLAGES: this.secAsstSecNotAddedDetails[i].MILK_PROCUREMENT_VILLAGES,
          };

          this.excelData.push(singleRow);
        }
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
    this.utils.JSONToCSVConvertor(this.excelData, this.headingText, true);
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        // districtName: this.districtName,
        mentorName: this.mentorName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'totalSecretaryNotAddedReport';
      let basePDF = '';
      this.spinner.show();
      let res;
      if (this.subReportType === '1') {
        res = await this.secAsstSecAPI.totalSecretaryNotAddedPDFReport(req);
      } else if (this.subReportType === '2') {
        res = await this.secAsstSecAPI.totalAssSecretaryNotAddedPDFReport(req);
      }
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

