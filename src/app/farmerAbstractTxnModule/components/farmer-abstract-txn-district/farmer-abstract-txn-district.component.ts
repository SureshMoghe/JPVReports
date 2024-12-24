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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerAbstractTxnService } from '../../service/farmer-abstract-txn.service';

@Component({
  selector: 'app-farmer-abstract-txn-district',
  templateUrl: './farmer-abstract-txn-district.component.html',
  styleUrls: ['./farmer-abstract-txn-district.component.css'],
})
export class FarmerAbstractTxnDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
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
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== null
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.mentorLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.abstractAPI.districtLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL_NAME: 'TOTAL',
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
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SOCIETY += parseInt(
            this.mentorLevelDetails[i].TOTAL_SOCIETY
          );
          this.reportTotals.TOTAL_MILK_COLL_SOCIETY += parseFloat(
            this.mentorLevelDetails[i].TOTAL_MILK_COLL_SOCIETY
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_WOMEN_FARMERS += parseInt(
            this.mentorLevelDetails[i].TOTAL_WOMEN_FARMERS
          );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.mentorLevelDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.mentorLevelDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.mentorLevelDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.mentorLevelDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_MILK_LTRS += parseFloat(
            this.mentorLevelDetails[i].TOTAL_MILK_LTRS
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.mentorLevelDetails[i].TOTAL_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.mentorLevelDetails[i].MANDAL_NAME,
            TOTAL_SOCIETY: this.mentorLevelDetails[i].TOTAL_SOCIETY,
            TOTAL_MILK_COLL_SOCIETY: this.mentorLevelDetails[i]
              .TOTAL_MILK_COLL_SOCIETY,
            TOTAL_WOMEN_FARMERS: this.mentorLevelDetails[i].TOTAL_WOMEN_FARMERS,
            TOTAL_COW_MILK_LTR: this.mentorLevelDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.mentorLevelDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
            TOTAL_BUFFALO_MILK_LTR: this.mentorLevelDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.mentorLevelDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_MILK_LTRS: this.mentorLevelDetails[i].TOTAL_MILK_LTRS,
            TOTAL_AMOUNT: this.mentorLevelDetails[i].TOTAL_AMOUNT,
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DISTRICT_ID,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_ID,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Abstract Transaction District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid, 
      };
      const fileName = 'FarmerAbstractTransactionDistrictLevelReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.abstractAPI.districtLevelFarmerRegPDFReport(req);
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
