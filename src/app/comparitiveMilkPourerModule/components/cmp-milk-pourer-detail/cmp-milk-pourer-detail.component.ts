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
import { ComparitiveMilkPourerService } from './../../services/comparitive-milk-pourer.service';
@Component({
  selector: 'app-cmp-milk-pourer-detail',
  templateUrl: './cmp-milk-pourer-detail.component.html',
  styleUrls: ['./cmp-milk-pourer-detail.component.css'],
})
export class CmpMilkPourerDetailComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() month: any;
  @Input() year: any;
  @Input() subReportType: any;
  @Input() districtId: any;
  @Input() districtName: any;

  headingText = '';
  comparitiveMilkPouringDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private cmpAPI: ComparitiveMilkPourerService,
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (this.subReportType === '1') {
      this.headingText = '10 Days Milk Pourers Report';
    } else if (this.subReportType === '2') {
      this.headingText = '20 Days Milk Pourers Report';
    } else if (this.subReportType === '3') {
      this.headingText = '30 Days Milk Pourers Report';
    } else if (this.subReportType === '4') {
      this.headingText = 'Non Milk Pourers report';
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        month: this.month,
        year: this.year,
        districtId: this.districtId,
        subReportType: this.subReportType,
      };
      this.spinner.show();
      const res = await this.cmpAPI.milkPourerDetailLevelReport(req);
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.comparitiveMilkPouringDetails = res.result;
        for (let i = 0; i < this.comparitiveMilkPouringDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.comparitiveMilkPouringDetails[i].DISTRICT,
            MANDAL_NAME: this.comparitiveMilkPouringDetails[i].MANDAL_NAME,
            RBK_NAME: this.comparitiveMilkPouringDetails[i].RBK_NAME,
            RBK_CODE: this.comparitiveMilkPouringDetails[i].RBK_CODE,
            AMCU_CODE: this.comparitiveMilkPouringDetails[i].AMCU_CODE,
            VILLAGE: this.comparitiveMilkPouringDetails[i].VILLAGE,
            FARMER_CODE: this.comparitiveMilkPouringDetails[i].FARMER_CODE,
            FARMER_NAME: this.comparitiveMilkPouringDetails[i].FARMER_NAME,
            UID_NUM: this.comparitiveMilkPouringDetails[i].UID_NUM,
            MOBILE_NUMBER: this.comparitiveMilkPouringDetails[i].MOBILE_NUMBER,
            COWS: this.comparitiveMilkPouringDetails[i].COWS,
            BUFFALOS: this.comparitiveMilkPouringDetails[i].BUFFALOS,
          };
          this.excelData.push(singleRow);
        }
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
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
        month: this.month,
        year: this.year,
        districtId: this.districtId,
        districtName: this.districtName,
        subReportType: this.subReportType,
      };
      const fileName = 'comparitiveMilkPouringDetailReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.cmpAPI.milkPourerDetailLevelPDFReport(req);
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
