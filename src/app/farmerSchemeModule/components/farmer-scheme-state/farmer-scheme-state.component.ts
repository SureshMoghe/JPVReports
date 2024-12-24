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
import { FarmerSchemeService } from '../../services/farmer-scheme.service';

@Component({ 
  selector: 'app-farmer-scheme-state',
  templateUrl: './farmer-scheme-state.component.html', 
  styleUrls: ['./farmer-scheme-state.component.css'],
})
export class FarmerSchemeStateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid:any;
  @Input() phasename:any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNonMilkPourersChange = new EventEmitter<string>();

  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_MANDALS: 0,
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_HH: 0,
    TOTAL_FARMERS: 0,
    TOTAL_MILK_POURERS: 0,
    MILK_NON_POUR_FMR: 0,
    TOTAL_CHEYUTHA_FMR: 0,
    TOTAL_CHEYUTHA_BEN_MILK_POUR: 0,
    MILK_NON_POUR_CHEYUTHA_BEN: 0,
  }; 
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerSchemeAPI: FarmerSchemeService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
    
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: 'TOTAL',
        TOTAL_ROUTES: 0,
        TOTAL_MANDALS: 0,
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_HH: 0,
        TOTAL_FARMERS: 0,
        TOTAL_MILK_POURERS: 0,
        MILK_NON_POUR_FMR: 0,
        TOTAL_CHEYUTHA_FMR: 0,
        TOTAL_CHEYUTHA_BEN_MILK_POUR: 0,
        MILK_NON_POUR_CHEYUTHA_BEN: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken:this.phaseid,
      };
      this.spinner.show();
      const res = await this.farmerSchemeAPI.farmerSchemeStateReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.stateLevelDetails[i].TOTAL_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.stateLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS += parseInt(
            this.stateLevelDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CHEYUTHA_FMR += parseInt(
            this.stateLevelDetails[i].TOTAL_CHEYUTHA_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILK_POURERS += parseInt(
            this.stateLevelDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CHEYUTHA_BEN_MILK_POUR += parseInt(
            this.stateLevelDetails[i].TOTAL_CHEYUTHA_BEN_MILK_POUR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NON_POUR_FMR += parseInt(
            this.stateLevelDetails[i].MILK_NON_POUR_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NON_POUR_CHEYUTHA_BEN += parseInt(
            this.stateLevelDetails[i].MILK_NON_POUR_CHEYUTHA_BEN
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_HH: this.stateLevelDetails[i].TOTAL_HH,
            TOTAL_FARMERS: this.stateLevelDetails[i].TOTAL_FARMERS,
            MILK_NON_POUR_FMR: this.stateLevelDetails[i].MILK_NON_POUR_FMR,
            TOTAL_MILK_POURERS: this.stateLevelDetails[i].TOTAL_MILK_POURERS,
            TOTAL_CHEYUTHA_FMR: this.stateLevelDetails[i].TOTAL_CHEYUTHA_FMR,
            TOTAL_CHEYUTHA_BEN_MILK_POUR:
              this.stateLevelDetails[i].TOTAL_CHEYUTHA_BEN_MILK_POUR,
            MILK_NON_POUR_CHEYUTHA_BEN:
              this.stateLevelDetails[i].MILK_NON_POUR_CHEYUTHA_BEN,
          };
          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      phaseid:this.phaseid,
      phasename:this.phasename,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnNonMilkPourers(obj, value): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      actionTaken: value,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNonMilkPourersChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Scheme Wise State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken: this.phaseid,
                columnValue: this.phasename
      };
      const fileName = 'FarmerSchemeWisestateLeveReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerSchemeAPI.stateLevelPDFReport(req);
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
