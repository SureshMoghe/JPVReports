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
  selector: 'app-vaf-state-level',
  templateUrl: './vaf-state-level.component.html',
  styleUrls: ['./vaf-state-level.component.css'],
})
export class VafStateLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid:any;
  @Input() phasename:any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetailsChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    MANDALS: 0,
    TOTAL_RBK: 0,
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
    this.loadReport();
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_VV: 0,
        TOTAL_VV_REG_FMR: 0,
        TOTAL_VV_MILK_PORU: 0,
        TOTAL_VV_MILK_NOT_PORU: 0,
        NO_OF_MILCH_ANM: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        subReportType:this.phaseid, //Pcolumn_type  dbfield
      };
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.stateLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.MANDALS += parseInt(
            this.stateLevelDetails[i].MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.stateLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.stateLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_REG_FMR += parseInt(
            this.stateLevelDetails[i].TOTAL_VV_REG_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_MILK_PORU += parseInt(
            this.stateLevelDetails[i].TOTAL_VV_MILK_PORU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_MILK_NOT_PORU += parseInt(
            this.stateLevelDetails[i].TOTAL_VV_MILK_NOT_PORU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.stateLevelDetails[i].NO_OF_MILCH_ANM
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            MANDALS: this.stateLevelDetails[i].MANDALS,
            TOTAL_RBK: this.stateLevelDetails[i].TOTAL_RBK,
            TOTAL_VV: this.stateLevelDetails[i].TOTAL_VV,
            TOTAL_VV_REG_FMR: this.stateLevelDetails[i].TOTAL_VV_REG_FMR,
            TOTAL_VV_MILK_PORU: this.stateLevelDetails[i].TOTAL_VV_MILK_PORU,
            TOTAL_VV_MILK_NOT_PORU:
              this.stateLevelDetails[i].TOTAL_VV_MILK_NOT_PORU,
            NO_OF_MILCH_ANM: this.stateLevelDetails[i].NO_OF_MILCH_ANM,
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
      'Volunteer As Farmer State Level Report',
      true
    );
  }
   

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelVolunteerAsFarmerReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.volunteerAsFarmerAPI.stateLevelPDFReport(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }
  btnGetVolunteerDetails(obj, id): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      subReportType: id,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDetailsChange.emit(encryptedString);
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
