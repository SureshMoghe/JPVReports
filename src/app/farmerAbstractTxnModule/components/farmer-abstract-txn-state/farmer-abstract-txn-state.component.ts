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
import { FarmerAbstractTxnService } from '../../service/farmer-abstract-txn.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({ 
  selector: 'app-farmer-abstract-txn-state', 
  templateUrl: './farmer-abstract-txn-state.component.html',
  styleUrls: ['./farmer-abstract-txn-state.component.css'],
})
export class FarmerAbstractTxnStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_SOCIETY: 0,
    TOTAL_MILK_COLL_SOCIETY: 0,
    TOTAL_WOMEN_FARMERS: 0,
    TOTAL_COW_MILK_LTR: 0,
    TOTAL_COW_MILK_AMOUNT: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_MILK_LTRS: 0,
    TOTAL_AMOUNT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private abstractAPI: FarmerAbstractTxnService,
    private utils: UtilsService,
    private session: SessionService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {debugger;
 

     this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {debugger;
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_SOCIETY: 0,
        TOTAL_MILK_COLL_SOCIETY: 0,
        TOTAL_WOMEN_FARMERS: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_MILK_LTRS: 0,
        TOTAL_AMOUNT: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid,
      };
      this.spinner.show();debugger;
      const res = await this.abstractAPI.stateLevelReport(req);
      if (res.success) { debugger;
        this.excelData = [];
        this.reportTotals = {
          S_NO: '-',
          DISTRICT: 'TOTAL',
          TOTAL_SOCIETY: 0,
          TOTAL_MILK_COLL_SOCIETY: 0,
          TOTAL_WOMEN_FARMERS: 0,
          TOTAL_COW_MILK_LTR: 0,
          TOTAL_COW_MILK_AMOUNT: 0,
          TOTAL_BUFFALO_MILK_LTR: 0,
          TOTAL_BUFFALO_MILK_AMOUNT: 0,
          TOTAL_MILK_LTRS: 0,
          TOTAL_AMOUNT: 0,
        };

        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SOCIETY += parseInt(
            this.stateLevelDetails[i].TOTAL_SOCIETY
          );
          this.reportTotals.TOTAL_MILK_COLL_SOCIETY += parseFloat(
            this.stateLevelDetails[i].TOTAL_MILK_COLL_SOCIETY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_WOMEN_FARMERS += parseInt(
            this.stateLevelDetails[i].TOTAL_WOMEN_FARMERS
          );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.stateLevelDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.stateLevelDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.stateLevelDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_MILK_LTRS += parseFloat(
            this.stateLevelDetails[i].TOTAL_MILK_LTRS
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.stateLevelDetails[i].TOTAL_AMOUNT
          );

          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_SOCIETY: this.stateLevelDetails[i].TOTAL_SOCIETY,
            TOTAL_MILK_COLL_SOCIETY: this.stateLevelDetails[i]
              .TOTAL_MILK_COLL_SOCIETY,
            TOTAL_WOMEN_FARMERS: this.stateLevelDetails[i].TOTAL_WOMEN_FARMERS,
            TOTAL_COW_MILK_LTR: this.stateLevelDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.stateLevelDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
            TOTAL_BUFFALO_MILK_LTR: this.stateLevelDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.stateLevelDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_MILK_LTRS: this.stateLevelDetails[i].TOTAL_MILK_LTRS,
            TOTAL_AMOUNT: this.stateLevelDetails[i].TOTAL_AMOUNT,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_MILK_LTRS = parseFloat(
          this.reportTotals.TOTAL_MILK_LTRS.toFixed(2)
        );
        this.reportTotals.TOTAL_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_AMOUNT.toFixed(2)
        );
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
      'Farmer Abstract Transaction State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'FarmerAbstractTransactionStateLevelReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.abstractAPI.stateLevelFarmerRegPDFReport(req);
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
      districtId: obj.DISTRICT_ID,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
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
