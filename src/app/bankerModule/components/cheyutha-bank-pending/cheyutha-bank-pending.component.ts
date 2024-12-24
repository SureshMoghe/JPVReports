import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BankerService } from '../../services/banker.service';

@Component({
  selector: 'app-cheyutha-bank-pending',
  templateUrl: './cheyutha-bank-pending.component.html',
  styleUrls: ['./cheyutha-bank-pending.component.css'],
})
export class CheyuthaBankPendingComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  input: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() ifscCode: any;

  pendingDetails = [];
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {}
  ngOnChanges(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.rbkId !== undefined &&
      this.rbkId !== '' &&
      this.rbkId !== null &&
      this.mandalId !== undefined &&
      this.mandalId !== '' &&
      this.mandalId !== null &&
      this.ifscCode !== undefined &&
      this.ifscCode !== '' &&
      this.ifscCode !== null
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
        ifscCode: this.ifscCode,
      };
      this.spinner.show();
      const res = await this.bankAPI.pendingList(req);
      if (res.success) {
        this.excelData = [];
        this.pendingDetails = res.result;
        for (let i = 0; i < this.pendingDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            BANK: this.pendingDetails[i].BANK,
            BEN_NAME: this.pendingDetails[i].BEN_NAME,
            BEN_FATHER_NAME: this.pendingDetails[i].BEN_FATHER_NAME,
            DOB_DT: this.pendingDetails[i].DOB_DT,
            MOBILE_NUMBER: this.pendingDetails[i].MOBILE_NUMBER,
            APP_HARD_COPY_REV_DATE: this.pendingDetails[i]
              .APP_HARD_COPY_REV_DATE,
            STATUS: this.pendingDetails[i].STATUS,
            UPDATED_DATE: this.pendingDetails[i].UPDATED_DATE,
          };

          this.excelData.push(singleRow);
        }
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
      'Cheyutha Bank Pending List Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        ifscCode: this.ifscCode,
      };
      const fileName = 'pendingListCheyuthaBankReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAPI.pendingListCheyuthaBankPDFReport(req);
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
