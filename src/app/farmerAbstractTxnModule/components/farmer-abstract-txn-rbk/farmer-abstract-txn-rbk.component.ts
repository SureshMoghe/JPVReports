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
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerAbstractTxnService } from '../../service/farmer-abstract-txn.service';

@Component({
  selector: 'app-farmer-abstract-txn-rbk',
  templateUrl: './farmer-abstract-txn-rbk.component.html',
  styleUrls: ['./farmer-abstract-txn-rbk.component.css'],
})
export class FarmerAbstractTxnRbkComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVillageChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;

  villageLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    VILLAGE: 'TOTAL',
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.mandalId !== undefined &&
      this.mandalId !== '' &&
      this.mandalId !== null &&
      this.rbkId !== undefined &&
      this.rbkId !== '' &&
      this.rbkId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        villageId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.abstractAPI.villageLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          VILLAGE: 'TOTAL',
          TOTAL_WOMEN_FARMERS: 0,
          TOTAL_COW_MILK_LTR: 0,
          TOTAL_COW_MILK_AMOUNT: 0,
          TOTAL_BUFFALO_MILK_LTR: 0,
          TOTAL_BUFFALO_MILK_AMOUNT: 0,
          TOTAL_MILK_LTRS: 0,
          TOTAL_AMOUNT: 0,
        };
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_WOMEN_FARMERS += parseInt(
            this.villageLevelDetails[i].TOTAL_WOMEN_FARMERS
          );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.villageLevelDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.villageLevelDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.villageLevelDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.villageLevelDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_MILK_LTRS += parseFloat(
            this.villageLevelDetails[i].TOTAL_MILK_LTRS
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.villageLevelDetails[i].TOTAL_AMOUNT
          );

          let singleRow = {
            S_NO: i + 1,
            VILLAGE: this.villageLevelDetails[i].VILLAGE,
            TOTAL_WOMEN_FARMERS: this.villageLevelDetails[i]
              .TOTAL_WOMEN_FARMERS,
            TOTAL_COW_MILK_LTR: this.villageLevelDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT: this.villageLevelDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
            TOTAL_BUFFALO_MILK_LTR: this.villageLevelDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.villageLevelDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_MILK_LTRS: this.villageLevelDetails[i].TOTAL_MILK_LTRS,
            TOTAL_AMOUNT: this.villageLevelDetails[i].TOTAL_AMOUNT,
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
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      villageId: obj.VILLAGE_ID,
      villageName: obj.VILLAGE,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVillageChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Abstract Transaction Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
        const req = {
            districtId: this.districtId,
            mandalId: this.mandalId,
            rbkId: this.rbkId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            villageId: this.phaseid,
        };
        const fileName = 'FarmerAbstractTransactionRBKLevelReport';
        let basePDF = '';
        this.spinner.show();
        const res = await this.abstractAPI.villageLevelPDFReportnew(req);
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
