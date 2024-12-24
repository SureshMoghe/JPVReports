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
import { VolunteerAsFarmerService } from '../../services/volunteer-as-farmer.service';
@Component({
  selector: 'app-vaf-detail-level',
  templateUrl: './vaf-detail-level.component.html',
  styleUrls: ['./vaf-detail-level.component.css'],
})
export class VafDetailLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() subReportType: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  headingText = '';
  volunteerMilkPouringDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private volunteerAsFarmerAPI: VolunteerAsFarmerService,
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (this.subReportType === '1') {
      this.headingText = 'Volunteer Registered As Farmer Report';
    } else if (this.subReportType === '2') {
      this.headingText = 'Volunteer Milk Pouring Report';
    } else if (this.subReportType === '3') {
      this.headingText = 'Volunteer Milk Not Pouring Report';
    }
    // tslint:disable-next-line: align
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId: this.districtId,
        subReportType: this.subReportType,
      };
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.detailLevelSubReport(req);
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.volunteerMilkPouringDetails = res.result;
        for (let i = 0; i < this.volunteerMilkPouringDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.volunteerMilkPouringDetails[i].DISTRICT,
            MANDAL_NAME: this.volunteerMilkPouringDetails[i].MANDAL_NAME,
            RBK_NAME: this.volunteerMilkPouringDetails[i].RBK_NAME,
            RBK_CODE: this.volunteerMilkPouringDetails[i].RBK_CODE,
            AMCU_CODE: this.volunteerMilkPouringDetails[i].AMCU_CODE,
            VILLAGE_NAME: this.volunteerMilkPouringDetails[i].VILLAGE_NAME,
            FARMER_CODE: this.volunteerMilkPouringDetails[i].FARMER_CODE,
            FARMER_NAME: this.volunteerMilkPouringDetails[i].FARMER_NAME,
            MOBILE_NUMBER: this.volunteerMilkPouringDetails[i].MOBILE_NUMBER,
            VOLUNTEER_ID: this.volunteerMilkPouringDetails[i].VOLUNTEER_ID,
            COWS: this.volunteerMilkPouringDetails[i].COWS,
            BUFFALOS: this.volunteerMilkPouringDetails[i].BUFFALOS
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
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId: this.districtId,
        subReportType: this.subReportType
      };
      const fileName = 'detailLevelVolunteerAsFarmerReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.detailLevelSubPDFReport(req);
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
