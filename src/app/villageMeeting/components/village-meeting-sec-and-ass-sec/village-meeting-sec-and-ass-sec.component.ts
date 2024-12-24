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
  selector: 'app-village-meeting-sec-and-ass-sec',
  templateUrl: './village-meeting-sec-and-ass-sec.component.html',
  styleUrls: ['./village-meeting-sec-and-ass-sec.component.css'],
})
export class VillageMeetingSecAndAssSecComponent
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
  @Input() desigId: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  functionaryDetails = [];
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
      this.desigId === undefined &&
      this.desigId === '' &&
      this.desigId === null
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
      this.desigId === undefined &&
      this.desigId === '' &&
      this.desigId === null
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
        mandalId: this.desigId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.secretaryAssistantSecretaryReport(
        req
      );
      if (res.success) {
        this.excelData = [];
        this.functionaryDetails = res.result;
        for (let i = 0; i < this.functionaryDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.functionaryDetails[i].ROUTE_NAME,
            NAME: this.functionaryDetails[i].NAME,
            AGE: this.functionaryDetails[i].AGE,
            GENDER: this.functionaryDetails[i].GENDER,
            DESIGNATION: this.functionaryDetails[i].DESIGNATION,
            MARITAL_STATUS: this.functionaryDetails[i].MARITAL_STATUS,
            MOBILE_NO: this.functionaryDetails[i].MOBILE_NO,
            QUALIFICATION: this.functionaryDetails[i].QUALIFICATION,
            BANK_AC_NO: this.functionaryDetails[i].BANK_AC_NO,
            IFSC_CODE: this.functionaryDetails[i].IFSC_CODE,
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
      'village Meeting Sec Asst Sec Level Report',
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
        mandalId: this.desigId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'SecAsstSecVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.villageMeetingsAPI.secAsstSecVillageMeetingPDFReport(
        req
      );
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
