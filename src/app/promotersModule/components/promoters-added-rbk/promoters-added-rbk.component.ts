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
import { PromotersModuleService } from '../../services/promoters-module.service';

@Component({
  selector: 'app-promoters-added-rbk',
  templateUrl: './promoters-added-rbk.component.html',
  styleUrls: ['./promoters-added-rbk.component.css'],
})
export class PromotersAddedRBKComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() subReportType: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() mentorId: any;
  @Input() mentorName: any;

  rbkDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        subReportType: this.subReportType,
        mentorId: this.mentorId,
      };
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelRbkAndPromoterReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkDetails = res.result;
        for (let i = 0; i < this.rbkDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.rbkDetails[i].DISTRICT,
            MANDAL_NAME: this.rbkDetails[i].MANDAL_NAME,
            RBK_NAME: this.rbkDetails[i].RBK_NAME,
            TOTAL_PROMOTERS: this.rbkDetails[i].TOTAL_PROMOTERS,
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
      'Promoters Added RBKS Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        fromDate: this.fromDate,
        toDate: this.toDate,
        subReportType: this.subReportType,
        mentorId: this.mentorId,
      };
      const fileName = 'PromotersAddedRBKSReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelPromotersPDFReport(req);
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
