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
import { PromotersModuleService } from '../../services/promoters-module.service';

@Component({
  selector: 'app-promoters-detail-level',
  templateUrl: './promoters-detail-level.component.html',
  styleUrls: ['./promoters-detail-level.component.css'],
})
export class PromotersDetailLevelComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  personDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
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
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        rbkId: this.rbkId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.personDetails = res.result;
        for (let i = 0; i < this.personDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.personDetails[i].MANDAL_NAME,
            VILLAGE_NAME: this.personDetails[i].VILLAGE_NAME,
            AMC_ID: this.personDetails[i].AMC_ID,
            ROUTE_NAME: this.personDetails[i].ROUTE_NAME,
            MPUSS: this.personDetails[i].MPUSS,
            PROM_ID: this.personDetails[i].PROM_ID,
            PROMOTERS_NAME: this.personDetails[i].PROMOTERS_NAME,
            DOB: this.personDetails[i].DOB,
            DO_OR_WO: this.personDetails[i].DO_OR_WO,
            FATHER_SPOUSE_NAME: this.personDetails[i].FATHER_SPOUSE_NAME,
            AADHAR: this.personDetails[i].AADHAR,
            FATHER_SPOUSE_AADHAR: this.personDetails[i].FATHER_SPOUSE_AADHAR,
            MOBILE: this.personDetails[i].MOBILE,
            FATHER_SPOUSE_MOBILE: this.personDetails[i].FATHER_SPOUSE_MOBILE,
            EDUCATION_QUALIFICATION: this.personDetails[i]
              .EDUCATION_QUALIFICATION,
            BANK_ACCOUNT_NO: this.personDetails[i].BANK_ACCOUNT_NO,
            IFSC_CODE: this.personDetails[i].IFSC_CODE,
            BANK_NAME: this.personDetails[i].BANK_NAME,
            BRANCH: this.personDetails[i].BRANCH,
            ADDRESS_DNO: this.personDetails[i].ADDRESS_DNO,
            PIN_CODE: this.personDetails[i].PIN_CODE,
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
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Promoters Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        rbkId: this.rbkId,
        mentorId: this.mentorId,
        districtName: this.districtName,
        rbkName: this.rbkName,
        mentorName: this.mentorName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'detailLevelPromotersReport';
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
