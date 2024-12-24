import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
import { BankerService } from '../../services/banker.service';

@Component({
  selector: 'app-cheyutha-bank-district',
  templateUrl: './cheyutha-bank-district.component.html', 
  styleUrls: ['./cheyutha-bank-district.component.css'],
})
export class CheyuthaBankDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
    TOTAL_APPLICATION: 0,
    TO_BE_VERIFIED: 0,
    APPROVED: 0,
    REJECTED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  ngOnChanges(): void {
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
      this.districtLevelDetails = [];
      const req = {
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.bankAPI.districtLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL_NAME: 'TOTAL',
          TOTAL_APPLICATION: 0,
          TO_BE_VERIFIED: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.districtLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.districtLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.districtLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.districtLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.districtLevelDetails[i].MANDAL_NAME,
            TOTAL_APPLICATION: this.districtLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.districtLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.districtLevelDetails[i].APPROVED,
            REJECTED: this.districtLevelDetails[i].REJECTED,
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
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      const fileName = 'districtLevelCheyuthaBankReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAPI.districtLevelCheyuthaBankPDFReport(req);
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
