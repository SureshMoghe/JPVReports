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
  selector: 'app-vaf-mentor-level',
  templateUrl: './vaf-mentor-level.component.html',
  styleUrls: ['./vaf-mentor-level.component.css'],
})
export class VafMentorLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() uniqueId: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();

  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_VV: 0,
    TOTAL_VV_REG_FMR: 0,
    TOTAL_VV_MILK_PORU: 0,
    TOTAL_VV_MILK_NOT_PORU: 0,
    NO_OF_MILCH_ANM: 0,
  };
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private volunteerAsFarmerAPI: VolunteerAsFarmerService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.uniqueId !== null &&
      this.uniqueId !== '' &&
      this.uniqueId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        TOTAL_VV: 0,
        TOTAL_VV_REG_FMR: 0,
        TOTAL_VV_MILK_PORU: 0,
        TOTAL_VV_MILK_NOT_PORU: 0,
        NO_OF_MILCH_ANM: 0,
      };
      const req = {
        districtId: this.districtId,
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.mentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.RBK_NAME += parseInt(
            this.mandalLevelDetails[i].RBK_NAME
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.mandalLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_REG_FMR += parseInt(
            this.mandalLevelDetails[i].TOTAL_VV_REG_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_MILK_PORU += parseInt(
            this.mandalLevelDetails[i].TOTAL_VV_MILK_PORU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_MILK_NOT_PORU += parseInt(
            this.mandalLevelDetails[i].TOTAL_VV_MILK_NOT_PORU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.mandalLevelDetails[i].NO_OF_MILCH_ANM
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mandalLevelDetails[i].RBK_NAME,
            TOTAL_VV: this.mandalLevelDetails[i].TOTAL_VV,
            TOTAL_VV_REG_FMR: this.mandalLevelDetails[i].TOTAL_VV_REG_FMR,
            TOTAL_VV_MILK_PORU: this.mandalLevelDetails[i].TOTAL_VV_MILK_PORU,
            TOTAL_VV_MILK_NOT_PORU:
              this.mandalLevelDetails[i].TOTAL_VV_MILK_NOT_PORU,
            NO_OF_MILCH_ANM: this.mandalLevelDetails[i].NO_OF_MILCH_ANM,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Volunteer As Farmer Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelVolunteerAsFarmerReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.mandalLevelPDFReport(req);
      this.spinner.hide();
      if (res.success) {
        basePDF = res.result;
        this.utils.downloadPdfFile(basePDF, fileName);
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
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
