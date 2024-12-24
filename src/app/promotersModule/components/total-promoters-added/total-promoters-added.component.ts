import {
  AfterViewInit,
  Component,
  Input,
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
import { PromotersModuleService } from '../../services/promoters-module.service';

@Component({
  selector: 'app-total-promoters-added',
  templateUrl: './total-promoters-added.component.html',
  styleUrls: ['./total-promoters-added.component.css'],
})
export class TotalPromotersAddedComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() subReportType: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;

  promoterDetails = [];
  excelData = [];
  headingText = '';

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {  debugger;
    if (this.subReportType === '3') {
      this.headingText = 'Total Promoters Added Report';
    } else if (this.subReportType === '4') {
      this.headingText = 'Milk Pouring Promoters Total Report ';
    } else if (this.subReportType === '6') {
      this.headingText = 'Milk Pouring Promoters Morning Shift Report';
    } else if (this.subReportType === '7') {
      this.headingText = 'Milk Pouring Promoters Evening Shift Report';
    } else if (this.subReportType === '5') {
      this.headingText = 'Milk Not Pouring Promoters Report';
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        subReportType: this.subReportType,
        mentorId: this.mentorId,
        rbkId:this.rbkId
      }; debugger;
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelRbkAndPromoterReport(req);
      if (res.success) {
        this.excelData = [];
        this.promoterDetails = res.result;
        for (let i = 0; i < this.promoterDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.promoterDetails[i].DISTRICT,
            MANDAL_NAME: this.promoterDetails[i].MANDAL_NAME,
            RBK_NAME: this.promoterDetails[i].RBK_NAME,
            RBK_CODE: this.promoterDetails[i].RBK_CODE,
            AMCU_CODE: this.promoterDetails[i].AMCU_CODE,
            FARMER_CODE: this.promoterDetails[i].FARMER_CODE,
            PROMOTERS_NAME: this.promoterDetails[i].PROMOTERS_NAME,
            DOB: this.promoterDetails[i].DOB,
            MOBILE: this.promoterDetails[i].MOBILE,
            COWS: this.promoterDetails[i].COWS,
            BUFFALOS: this.promoterDetails[i].BUFFALOS,
            TOTAL_NO_POUR_DAYS: this.promoterDetails[i].TOTAL_NO_POUR_DAYS
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
        districtName: this.districtName,
        fromDate: this.fromDate,
        toDate: this.toDate,
        subReportType: this.subReportType,
        mentorId: this.mentorId,
      };
      const fileName = this.headingText;
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelPromotersPDFReport(req);
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
