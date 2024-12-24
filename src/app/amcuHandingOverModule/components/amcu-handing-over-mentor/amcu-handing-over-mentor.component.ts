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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AmcuHandingOverService } from '../../services/amcu-handing-over.service';

@Component({
  selector: 'app-amcu-handing-over-mentor',
  templateUrl: './amcu-handing-over-mentor.component.html',
  styleUrls: ['./amcu-handing-over-mentor.component.css'],
})
export class AmcuHandingOverMentorComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MENTOR_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_HANDOVER_DONE_VILLAGES: 0,
    TOTAL_HO_NOTDONE_VILLAGES: 0,
  };
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private handingOver: AmcuHandingOverService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.mentorLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.handingOver.mentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MENTOR_NAME: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_RBK: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_HANDOVER_DONE_VILLAGES: 0,
          TOTAL_HO_NOTDONE_VILLAGES: 0,
        };
        this.logger.log(this.mentorLevelDetails);
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.mentorLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.mentorLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HANDOVER_DONE_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_HANDOVER_DONE_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HO_NOTDONE_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_HO_NOTDONE_VILLAGES
          );
          let singleRow = {
            S_NO: i + 1,
            MENTOR_NAME: this.mentorLevelDetails[i].MENTOR_NAME,
            TOTAL_ROUTES: this.mentorLevelDetails[i].TOTAL_ROUTES,
            TOTAL_RBK: this.mentorLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_HANDOVER_DONE_VILLAGES: this.mentorLevelDetails[i]
              .TOTAL_HANDOVER_DONE_VILLAGES,
            TOTAL_HO_NOTDONE_VILLAGES: this.mentorLevelDetails[i]
              .TOTAL_HO_NOTDONE_VILLAGES,
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
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Handing Over Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelHandingOverReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.handingOver.mentorLevelHandOverPDFReport(req);
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
