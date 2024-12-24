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
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-promoters',
  templateUrl: './village-meeting-promoters.component.html',
  styleUrls: ['./village-meeting-promoters.component.css'],
})
export class VillageMeetingPromotersComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  input: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  promotersDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private villageMeetingsAPI: VillageMeetingService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mentorId === undefined &&
    //   this.mentorId === '' &&
    //   this.mentorId === null
    // ) {
    //   return;
    // }
    // if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
    //   return;
    // }
    // if (
    //   this.villageId === undefined &&
    //   this.villageId === '' &&
    //   this.villageId === null
    // ) {
    //   return;
    // }
    // this.loadReport();
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
    if (
      this.villageId === undefined &&
      this.villageId === '' &&
      this.villageId === null
    ) {
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
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.PromotersReport(req);
      if (res.success) {
        this.excelData = [];
        this.promotersDetails = res.result;
        for (let i = 0; i < this.promotersDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.promotersDetails[i].ROUTE_NAME,
            PROMETERS_ID: this.promotersDetails[i].PROMETERS_ID,
            PROMOTERS_NAME: this.promotersDetails[i].PROMOTERS_NAME,
            DOB: this.promotersDetails[i].DOB,
            DO_OR_WO: this.promotersDetails[i].DO_OR_WO,
            FATHER_SPOUSE_NAME: this.promotersDetails[i].FATHER_SPOUSE_NAME,
            MOBILE: this.promotersDetails[i].MOBILE,
            EDUCATION_QUALIFICATION: this.promotersDetails[i]
              .EDUCATION_QUALIFICATION,
            ADDRESS_DNO: this.promotersDetails[i].ADDRESS_DNO,
            STREET: this.promotersDetails[i].STREET,
            PIN_CODE: this.promotersDetails[i].PIN_CODE,
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
      'village Meeting Promoters Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'PromotersVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.villageMeetingsAPI.PromotersVillageMeetingPDFReport(
        req
      );
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
