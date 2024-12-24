import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-farmer-milk-collection-report',
  templateUrl: './farmer-milk-collection-report.component.html',
  styleUrls: ['./farmer-milk-collection-report.component.css'],
})
export class FarmerMilkCollectionReportComponent
  implements OnInit, OnDestroy, AfterViewInit {
  milkCollectionDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerAPI: StateService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport(): void {
    this.spinner.show();
    this.farmerAPI
      .farmerMilkCollectionReport()
      .then((res: any) => {
        if (res.success) {
          this.excelData = [];
          this.milkCollectionDetails = res.result;
          for (let i = 0; i < this.milkCollectionDetails.length; i++) {
            let singleRow = {
              S_NO: i + 1,
              DATES: this.milkCollectionDetails[i].DATES,
              PROMPT: this.milkCollectionDetails[i].PROMPT,
              AKASH: this.milkCollectionDetails[i].AKASH,
            };

            this.excelData.push(singleRow);
          }
        } else {
          this.toast.info(res.message);
        }
        this.rerender();
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Milk Collection Report',
      true
    );
  }

  btnPDF(): void {
    const fileName = 'stateLevelMilkCollectionReport';
    let basePDF = '';
    this.spinner.show();
    this.farmerAPI
      .farmerMilkCollectionPDFReport()
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
