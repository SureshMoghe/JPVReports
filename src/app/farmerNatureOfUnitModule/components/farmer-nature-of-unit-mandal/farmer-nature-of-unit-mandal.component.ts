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
  selector: 'app-farmer-nature-of-unit-mandal',
  templateUrl: './farmer-nature-of-unit-mandal.component.html',
  styleUrls: ['./farmer-nature-of-unit-mandal.component.css'],
})
export class FarmerNatureOfUnitMandalComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSheepToBuffaloChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGoatToBuffaloChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSheepToCowChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGoatToCowChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  mandalLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK: 'TOTAL',
    SHEEP_TO_BUFFALO: 0,
    GOAT_TO_BUFFALO: 0,
    SHEEP_TO_COW: 0,
    GOAT_TO_COW: 0,
  };
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
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK: 'TOTAL',
        SHEEP_TO_BUFFALO: 0,
        GOAT_TO_BUFFALO: 0,
        SHEEP_TO_COW: 0,
        GOAT_TO_COW: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.farmerNOUMadalLevel(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_BUFFALO += parseInt(
            this.mandalLevelDetails[i].SHEEP_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_BUFFALO += parseInt(
            this.mandalLevelDetails[i].GOAT_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_COW += parseInt(
            this.mandalLevelDetails[i].SHEEP_TO_COW
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_COW += parseInt(
            this.mandalLevelDetails[i].GOAT_TO_COW
          );
          let singleRow = {
            S_NO: i + 1,
            RBK: this.mandalLevelDetails[i].RBK_NAME,
            SHEEP_TO_BUFFALO: this.mandalLevelDetails[i].SHEEP_TO_BUFFALO,
            GOAT_TO_BUFFALO: this.mandalLevelDetails[i].GOAT_TO_BUFFALO,
            SHEEP_TO_COW: this.mandalLevelDetails[i].SHEEP_TO_COW,
            GOAT_TO_COW: this.mandalLevelDetails[i].GOAT_TO_COW,
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
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  btnGetSheepToBuffalo(obj, live: string, nou: string): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      liveStock: live,
      natureOfUnit: nou,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSheepToBuffaloChange.emit(encryptedString);
  }
  btnGetGoatToBuffalo(obj, live: string, nou: string): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      liveStock: live,
      natureOfUnit: nou,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onGoatToBuffaloChange.emit(encryptedString);
  }
  btnGetSheepToCow(obj, live: string, nou: string): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      liveStock: live,
      natureOfUnit: nou,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSheepToCowChange.emit(encryptedString);
  }
  btnGetGoatToCow(obj, live: string, nou: string): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      liveStock: live,
      natureOfUnit: nou,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onGoatToCowChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Nature Of Unit Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'mandalLevelNatureOfUnit';
      let basePDF = '';
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.madalLevelNOUPDFReport(req);
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
