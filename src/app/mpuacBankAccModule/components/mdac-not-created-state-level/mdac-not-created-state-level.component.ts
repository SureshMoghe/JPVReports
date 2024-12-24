import {
  AfterViewInit,
  Component,
  Input,
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
import { MpuacBankAccService } from '../../services/mpuac-bank-acc.service';

@Component({
  selector: 'app-mdac-not-created-state-level',
  templateUrl: './mdac-not-created-state-level.component.html',
  styleUrls: ['./mdac-not-created-state-level.component.css'],
})
export class MdacNotCreatedStateLevelComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  rbkDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAccAPI: MpuacBankAccService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.bankAccAPI.mdacNotCreatedStateLevel(req);
      if (res.success) {
        this.excelData = [];
        this.rbkDetails = res.result;
        for (let i = 0; i < this.rbkDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.rbkDetails[i].ROUTE_NAME,
            DISTRICT: this.rbkDetails[i].DISTRICT,
            MANDAL_NAME: this.rbkDetails[i].MANDAL_NAME,
            RBK_NAME: this.rbkDetails[i].RBK_NAME,
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
      'MDAC Bank Account Not Created RBK Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'detailLevelMDACBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.mdacNotCreatedRbkListPDF(req);
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
