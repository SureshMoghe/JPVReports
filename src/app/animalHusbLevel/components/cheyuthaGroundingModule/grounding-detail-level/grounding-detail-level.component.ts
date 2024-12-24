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
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { CheyuthaGroundingService } from 'src/app/cheyuthaGroundingModule/services/cheyutha-grounding.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-grounding-detail-level',
  templateUrl: './grounding-detail-level.component.html',
  styleUrls: ['./grounding-detail-level.component.css'],
})
export class GroundingDetailLevelComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() secId: any;
  @Input() secName: any;
  @Input() status: any;
  detailedLevelDetails = [];

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
    private sanitizer: DomSanitizer,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.secId !== null &&
      this.secId !== '' &&
      this.secId !== undefined &&
      this.status !== null &&
      this.status !== '' &&
      this.status !== undefined
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
      this.mandalId !== undefined &&
      this.secId !== null &&
      this.secId !== '' &&
      this.secId !== undefined &&
      this.status !== null &&
      this.status !== '' &&
      this.status !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.spinner.show();
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        secId: this.secId,
        status: this.status,
      };
      const res = await this.groundingAPI.detailLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.detailedLevelDetails = res.result;
        for (let i = 0; i < this.detailedLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            BEN_CODE: this.detailedLevelDetails[i].BEN_CODE,
            BEN_NAME: this.detailedLevelDetails[i].BEN_NAME,
            BEN_FATHER_NAME: this.detailedLevelDetails[i].BEN_FATHER_NAME,
            UID_NUM: this.detailedLevelDetails[i].UID_NUM,
            DOB_DT: this.detailedLevelDetails[i].DOB_DT,
            MOBILE_NUMBER: this.detailedLevelDetails[i].MOBILE_NUMBER,
            IFSC_CODE: this.detailedLevelDetails[i].IFSC_CODE,
            ACCOUNT_NUMBER: this.detailedLevelDetails[i].ACCOUNT_NUMBER,
            LIVE_STOCK: this.detailedLevelDetails[i].LIVE_STOCK,
            ACTION_TAKEN: this.detailedLevelDetails[i].ACTION_TAKEN,
            REMARKS: this.detailedLevelDetails[i].REMARKS,
            UPDATED_DATE: this.detailedLevelDetails[i].UPDATED_DATE,
            NATURE_OF_UNIT: this.detailedLevelDetails[i].NATURE_OF_UNIT,
            SUBMISSION_DATE: this.detailedLevelDetails[i].SUBMISSION_DATE,
            LOAN_SANCTION_DATE: this.detailedLevelDetails[i].LOAN_SANCTION_DATE,
            LOAN_AMOUNT: this.detailedLevelDetails[i].LOAN_AMOUNT,
            COMPLETION_DOCUMENTATION_DATE: this.detailedLevelDetails[i]
              .COMPLETION_DOCUMENTATION_DATE,
            GROUNDING_DATE: this.detailedLevelDetails[i].GROUNDING_DATE,
            ANIMAL_HEALTHCARD_ISSUE_DATE: this.detailedLevelDetails[i]
              .ANIMAL_HEALTHCARD_ISSUE_DATE,
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

  async btnPhotoView(photo): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(photo);
      if (res.success) {
        let photoOfUnit = (this.sanitizer.bypassSecurityTrustResourceUrl(
          res.result
        ) as any).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(photoOfUnit);
        // this.toast.showImage(photoOfUnit);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Grounding Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        secId: this.secId,
        status: this.status,
      };
      const fileName = 'detailLevelCheyuthaGroundingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.groundingAPI.detailLevelPDFReport(req);
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
