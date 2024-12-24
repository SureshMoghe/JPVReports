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
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ComparitiveMilkPourerService } from './../../services/comparitive-milk-pourer.service';

@Component({
  selector: 'app-cmp-state-level',
  templateUrl: './cmp-state-level.component.html',
  styleUrls: ['./cmp-state-level.component.css'],
})
export class CmpStateLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetailsChange = new EventEmitter<string>();
  // @Input() phaseid : any;
  // @Input() phasename : any;

  districtId = '';
  districtName = '';
  comparitivemilkpouringDetails = [];

  reportTotals = {
    S_NO: '-',
    YEAR_VALUE: '-',
    MONTH_DISPLAY: 'TOTAL',
    TOTAL_SOCIETYS: 0,
    REGI_FARMERS: 0,
    NO_OF_MILK_POURERS: 0,
    NO_OF_NEW_MILK_POURS: 0,
    MILK_10_DAYS: 0,
    MILK_20_DAYS: 0,
    MILK_31_DAYS: 0,
    NON_POURERS: 0,
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
    private cmpAPI: ComparitiveMilkPourerService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.loadReport('', '');
  }
cleartotals()
{
  try {
    this.reportTotals = {
      S_NO: '-',
      YEAR_VALUE: '-',
      MONTH_DISPLAY: 'TOTAL',
      TOTAL_SOCIETYS: 0,
      REGI_FARMERS: 0,
      NO_OF_MILK_POURERS: 0,
      NO_OF_NEW_MILK_POURS: 0,
      MILK_10_DAYS: 0,
      MILK_20_DAYS: 0,
      MILK_31_DAYS: 0,
      NON_POURERS: 0,
    };
  } catch (error) {
    
  }
}
  async loadReport(districtId: string, districtName: string): Promise<void> {
    try {debugger;
      this.districtId = districtId;
      this.districtName = districtName === '' ? 'ALL' : districtName;

     this.cleartotals();
      const req = {
        districtId: this.districtId,
      };
      this.comparitivemilkpouringDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.cmpAPI.comparitiveMilkPourerReport(req);
      this.spinner.hide();
      if (res.success) { this.cleartotals();
        this.comparitivemilkpouringDetails = res.result;
        for (let i = 0; i < this.comparitivemilkpouringDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SOCIETYS += parseInt(
            this.comparitivemilkpouringDetails[i].TOTAL_SOCIETYS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REGI_FARMERS += parseInt(
            this.comparitivemilkpouringDetails[i].REGI_FARMERS  
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILK_POURERS += parseInt(
            this.comparitivemilkpouringDetails[i].NO_OF_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_NEW_MILK_POURS += parseInt(
            this.comparitivemilkpouringDetails[i].NO_OF_NEW_MILK_POURS
          );
          this.reportTotals.MILK_10_DAYS += parseFloat(
            this.comparitivemilkpouringDetails[i].MILK_10_DAYS
          );
          this.reportTotals.MILK_20_DAYS += parseFloat(
            this.comparitivemilkpouringDetails[i].MILK_20_DAYS
          );
          this.reportTotals.MILK_31_DAYS += parseFloat(
            this.comparitivemilkpouringDetails[i].MILK_31_DAYS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NON_POURERS += parseInt(
            this.comparitivemilkpouringDetails[i].NON_POURERS
          );
          let singleRow = {
            S_NO: i + 1,
            YEAR_VALUE: this.comparitivemilkpouringDetails[i].YEAR_VALUE,
            MONTH_DISPLAY: this.comparitivemilkpouringDetails[i].MONTH_DISPLAY,
            TOTAL_SOCIETYS:
              this.comparitivemilkpouringDetails[i].TOTAL_SOCIETYS,
            REGI_FARMERS: this.comparitivemilkpouringDetails[i].REGI_FARMERS,
            NO_OF_MILK_POURERS:
              this.comparitivemilkpouringDetails[i].NO_OF_MILK_POURERS,
            NO_OF_NEW_MILK_POURS:
              this.comparitivemilkpouringDetails[i].NO_OF_NEW_MILK_POURS,
            MILK_10_DAYS: this.comparitivemilkpouringDetails[i].MILK_10_DAYS,
            MILK_20_DAYS: this.comparitivemilkpouringDetails[i].MILK_20_DAYS,
            MILK_31_DAYS: this.comparitivemilkpouringDetails[i].MILK_31_DAYS,
            NON_POURERS: this.comparitivemilkpouringDetails[i].NON_POURERS,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.rerender();
      } else {  this.cleartotals();
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
      'Comparitive Farmer Milk Pouring Report',
      true
    );
  }

  btnGetMilkPouringDetails(obj,id): void { debugger;
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      month: obj.MONTH_VALUE,
      year: obj.YEAR_VALUE,
       subReportType: id,

    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDetailsChange.emit(encryptedString);
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
    };
    const fileName = 'ComparitiveFarmerMilkPouringReport';
    let basePDF = '';
    this.spinner.show();
    this.cmpAPI
      .comparitiveMilkPourerPDFReport(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
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
