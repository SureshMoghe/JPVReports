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
  selector: 'app-farmer-scheme-mandal',
  templateUrl: './farmer-scheme-mandal.component.html',
  styleUrls: ['./farmer-scheme-mandal.component.css'],
})
export class FarmerSchemeMandalComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() route: any;
  @Input() routeName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid:any;
  @Input() phasename:any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNonMilkPourersChange = new EventEmitter<string>();
  mandalLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
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
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
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
        districtId: this.districtId,
        route: this.route,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken:this.phaseid,
      };
      this.spinner.show();
      const res = await this.farmerSchemeAPI.farmerSchemeMandalReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mandalLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.mandalLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS += parseInt(
            this.mandalLevelDetails[i].TOTAL_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CHEYUTHA_FMR += parseInt(
            this.mandalLevelDetails[i].TOTAL_CHEYUTHA_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILK_POURERS += parseInt(
            this.mandalLevelDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CHEYUTHA_BEN_MILK_POUR += parseInt(
            this.mandalLevelDetails[i].TOTAL_CHEYUTHA_BEN_MILK_POUR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NON_POUR_FMR += parseInt(
            this.mandalLevelDetails[i].MILK_NON_POUR_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NON_POUR_CHEYUTHA_BEN += parseInt(
            this.mandalLevelDetails[i].MILK_NON_POUR_CHEYUTHA_BEN
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mandalLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGES: this.mandalLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_HH: this.mandalLevelDetails[i].TOTAL_HH,
            TOTAL_FARMERS: this.mandalLevelDetails[i].TOTAL_FARMERS,
            TOTAL_MILK_POURERS: this.mandalLevelDetails[i].TOTAL_MILK_POURERS,
            MILK_NON_POUR_FMR: this.mandalLevelDetails[i].MILK_NON_POUR_FMR,
            TOTAL_CHEYUTHA_FMR: this.mandalLevelDetails[i].TOTAL_CHEYUTHA_FMR,
            TOTAL_CHEYUTHA_BEN_MILK_POUR:
              this.mandalLevelDetails[i].TOTAL_CHEYUTHA_BEN_MILK_POUR,
            MILK_NON_POUR_CHEYUTHA_BEN:
              this.mandalLevelDetails[i].MILK_NON_POUR_CHEYUTHA_BEN,
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Scheme Wise Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.route,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken: this.phaseid,
        columnValue: this.phasename
      };
      const fileName = 'FarmerSchemeWiseMandalLevelReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerSchemeAPI.mandalLevelPDFReport(req);
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      route: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  btnNonMilkPourers(obj, value): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      route: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      actionTaken: value,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNonMilkPourersChange.emit(encryptedString);
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
