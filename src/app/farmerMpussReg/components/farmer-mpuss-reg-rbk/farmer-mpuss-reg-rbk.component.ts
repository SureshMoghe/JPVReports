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
import { FarmerRegService } from '../../services/farmer-reg.service';

@Component({
  selector: 'app-farmer-mpuss-reg-rbk',
  templateUrl: './farmer-mpuss-reg-rbk.component.html',
  styleUrls: ['./farmer-mpuss-reg-rbk.component.css'],
})
export class FarmerMpussRegRbkComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFunctionariesClickChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSecAssSecClickChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phasename: any;
  @Input()  phaseid:any;

  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: '-',
    MDAC_CODE: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_SUBMIT_VILLAGE: 0,
    TOTAL_NOT_SUBMIT_VILLAGE: 0,
    TOTAL_REGS: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerAPI: FarmerRegService,
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
      this.mandalId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkAmcMdacId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.farmerAPI.rbkLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          RBK_NAME: '-',
          MDAC_CODE: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_SUBMIT_VILLAGE: 0,
          TOTAL_NOT_SUBMIT_VILLAGE: 0,
          TOTAL_REGS: 0,
        };
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.rbkLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.rbkLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_VILLAGE += parseInt(
            this.rbkLevelDetails[i].TOTAL_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_VILLAGE += parseInt(
            this.rbkLevelDetails[i].TOTAL_NOT_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REGS += parseInt(
            this.rbkLevelDetails[i].TOTAL_REGS
          );

          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.rbkLevelDetails[i].RBK_NAME,
            MDAC_CODE: this.rbkLevelDetails[i].MDAC_CODE,
            TOTAL_ROUTES: this.rbkLevelDetails[i].TOTAL_ROUTES,
            TOTAL_VILLAGES: this.rbkLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_SUBMIT_VILLAGE: this.rbkLevelDetails[i].TOTAL_SUBMIT_VILLAGE,
            TOTAL_NOT_SUBMIT_VILLAGE: this.rbkLevelDetails[i]
              .TOTAL_NOT_SUBMIT_VILLAGE,
            TOTAL_REGS: this.rbkLevelDetails[i].TOTAL_REGS,
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
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Registration RBK Level Report',
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
         rbkAmcMdacId:this.phaseid,
         columnValue:this.phasename

      };
      const fileName = 'rbkLevelFarmerRegReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerAPI.rbkLevelFarmerRegPDFReport(req);
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
