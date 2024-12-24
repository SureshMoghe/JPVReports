import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AmcuHandingOverService } from '../../services/amcu-handing-over.service';

@Component({
  selector: 'app-amcu-handing-over-detail',
  templateUrl: './amcu-handing-over-detail.component.html',
  styleUrls: ['./amcu-handing-over-detail.component.css'],
})
export class AmcuHandingOverDetailComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  inspectionDetails = [];
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
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }
  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.handingOver.detailLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.inspectionDetails = res.result;
        for (let i = 0; i < this.inspectionDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.inspectionDetails[i].VILLAGE_NAME,
            AMC_ID: this.inspectionDetails[i].AMC_ID,
            ROUTE_NAME: this.inspectionDetails[i].ROUTE_NAME,
            INSPECTION_DATE: this.inspectionDetails[i].INSPECTION_DATE,
            INSPECTION_TIME: this.inspectionDetails[i].INSPECTION_TIME,
            IS_DESKTOP_COMPUTER_WORKING:
              this.inspectionDetails[i].IS_DESKTOP_COMPUTER_WORKING === '1'
                ? 'YES'
                : 'NO',
            IS_CPU_WORKING:
              this.inspectionDetails[i].IS_CPU_WORKING === '1' ? 'YES' : 'NO',
            IS_MOUSE_WORKING:
              this.inspectionDetails[i].IS_MOUSE_WORKING === '1' ? 'YES' : 'NO',
            IS_KEYBOARD_WORKING:
              this.inspectionDetails[i].IS_KEYBOARD_WORKING === '1'
                ? 'YES'
                : 'NO',
            IS_UPS_WORKING:
              this.inspectionDetails[i].IS_UPS_WORKING === '1' ? 'YES' : 'NO',
            ELECTRONIC_WEIGH_SCALE_WORKING:
              this.inspectionDetails[i].ELECTRONIC_WEIGH_SCALE_WORKING === '1'
                ? 'YES'
                : 'NO',
            ULTRASONIC_MILK_ANALYZ_WORKING:
              this.inspectionDetails[i].ULTRASONIC_MILK_ANALYZ_WORKING === '1'
                ? 'YES'
                : 'NO',
            COW_MILK_FAT_SNF_INDICATORS:
              this.inspectionDetails[i].COW_MILK_FAT_SNF_INDICATORS === '1'
                ? 'YES'
                : 'NO',
            BUF_MILK_FAT_SNF_INDICATORS:
              this.inspectionDetails[i].BUF_MILK_FAT_SNF_INDICATORS === '1'
                ? 'YES'
                : 'NO',
            IS_UPS_1KVA_WORKING:
              this.inspectionDetails[i].IS_UPS_1KVA_WORKING === '1'
                ? 'YES'
                : 'NO',
            IS_BATTERY_IN_CONDITION:
              this.inspectionDetails[i].IS_BATTERY_IN_CONDITION === '1'
                ? 'YES'
                : 'NO',
            IS_REMOTE_DISPLAY_UNIT_WORKING:
              this.inspectionDetails[i].IS_REMOTE_DISPLAY_UNIT_WORKING === '1'
                ? 'YES'
                : 'NO',
            IS_24PIN_80CL_PRINTR_WORKING:
              this.inspectionDetails[i].IS_24PIN_80CL_PRINTR_WORKING === '1'
                ? 'YES'
                : 'NO',
            IS_ULTRASONIC_STIRRER_WORKING:
              this.inspectionDetails[i].IS_ULTRASONIC_STIRRER_WORKING === '1'
                ? 'YES'
                : 'NO',
            INTERNET_DEVICE:
              this.inspectionDetails[i].INTERNET_DEVICE === '1' ? 'YES' : 'NO',
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

  async btnPdfView(pdf): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(pdf);
      if (res.success) {
        this.utils.viewPDF(res.result);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  getExcelDownload(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Handing Over Detail Level Report',
      true
    );
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Handing Over Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        districtName: this.districtName,
        mentorName: this.mentorName,
        rbkName: this.rbkName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'detailLevelHandingOverReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.handingOver.detailLevelHandOverPDFReport(req);
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
