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
import { FarmerNatureOfUnitService } from '../../services/farmer-nature-of-unit.service';

@Component({
  selector: 'app-farmer-nature-of-unit-detail',
  templateUrl: './farmer-nature-of-unit-detail.component.html',
  styleUrls: ['./farmer-nature-of-unit-detail.component.css'],
})
export class FarmerNatureOfUnitDetailComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSheepToBuffaloChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() liveStock: any;
  @Input() natureOfUnit: any;
  detailLevelDetails = [];

  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerNOUAPI: FarmerNatureOfUnitService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined &&
      this.liveStock !== null &&
      this.liveStock !== '' &&
      this.liveStock !== undefined &&
      this.natureOfUnit !== null &&
      this.natureOfUnit !== '' &&
      this.natureOfUnit !== undefined
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
        liveStock: this.liveStock,
        natureOfUnit: this.natureOfUnit,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.farmerNOUDetailLevel(req);
      if (res.success) {
        this.excelData = [];
        this.detailLevelDetails = res.result;
        for (let i = 0; i < this.detailLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            BEN_CODE: this.detailLevelDetails[i].BEN_CODE,
            BEN_NAME: this.detailLevelDetails[i].BEN_NAME,
            BEN_FATHER_NAME: this.detailLevelDetails[i].BEN_FATHER_NAME,
            UID_NUM: this.detailLevelDetails[i].UID_NUM,
            MOBILE_NUMBER: this.detailLevelDetails[i].MOBILE_NUMBER,
            IFSC_CODE: this.detailLevelDetails[i].IFSC_CODE,
            ACCOUNT_NUMBER: this.detailLevelDetails[i].ACCOUNT_NUMBER,
            LIVE_STOCK: this.detailLevelDetails[i].LIVE_STOCK,
            APP_HARD_COPY_REV_DATE: this.detailLevelDetails[i]
              .APP_HARD_COPY_REV_DATE,
            STATUS: this.detailLevelDetails[i].STATUS,
            REMARKS: this.detailLevelDetails[i].REMARKS,
            UPDATED_DATE: this.detailLevelDetails[i].UPDATED_DATE,
            NATURE_OF_UNIT: this.detailLevelDetails[i].NATURE_OF_UNIT,
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
      'Nature Of Unit Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'detailLevelNatureOfUnit';
      let basePDF = '';
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        liveStock: this.liveStock,
        natureOfUnit: this.natureOfUnit,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.detailLevelNOUPDFReport(req);
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
