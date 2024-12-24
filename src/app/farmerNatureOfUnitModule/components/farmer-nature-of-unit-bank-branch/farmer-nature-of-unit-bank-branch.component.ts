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
  selector: 'app-farmer-nature-of-unit-bank-branch',
  templateUrl: './farmer-nature-of-unit-bank-branch.component.html',
  styleUrls: ['./farmer-nature-of-unit-bank-branch.component.css'],
})
export class FarmerNatureOfUnitBankBranchComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBranchChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSheepToBuffaloChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGoatToBuffaloChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSheepToCowChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGoatToCowChange = new EventEmitter<string>();
  @Input() bank: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() branch: any;

  branchLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    BRANCH: 'TOTAL',
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
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.bank !== null &&
      this.bank !== '' &&
      this.bank !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        BRANCH: 'TOTAL',
        SHEEP_TO_BUFFALO: 0,
        GOAT_TO_BUFFALO: 0,
        SHEEP_TO_COW: 0,
        GOAT_TO_COW: 0,
      };
      const req = {
        bank: this.bank,
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.farmerNOUBankBranch(req);
      if (res.success) {
        this.excelData = [];
        this.branchLevelDetails = res.result;
        for (let i = 0; i < this.branchLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_BUFFALO += parseInt(
            this.branchLevelDetails[i].SHEEP_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_BUFFALO += parseInt(
            this.branchLevelDetails[i].GOAT_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_COW += parseInt(
            this.branchLevelDetails[i].SHEEP_TO_COW
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_COW += parseInt(
            this.branchLevelDetails[i].GOAT_TO_COW
          );
          let singleRow = {
            S_NO: i + 1,
            BRANCH: this.branchLevelDetails[i].BRANCH,
            SHEEP_TO_BUFFALO: this.branchLevelDetails[i].SHEEP_TO_BUFFALO,
            GOAT_TO_BUFFALO: this.branchLevelDetails[i].GOAT_TO_BUFFALO,
            SHEEP_TO_COW: this.branchLevelDetails[i].SHEEP_TO_COW,
            GOAT_TO_COW: this.branchLevelDetails[i].GOAT_TO_COW,
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

  btnGetSheepToBuffalo(obj, live: string, nou: string): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      bank: obj.BANK,
      branch: obj.BRANCH,
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
      bank: obj.BANK,
      branch: obj.BRANCH,
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
      bank: obj.BANK,
      branch: obj.BRANCH,
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
      bank: obj.BANK,
      branch: obj.BRANCH,
      liveStock: live,
      natureOfUnit: nou,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onGoatToCowChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Nature Of Unit Bank Branch Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'bankBranchLevelNatureOfUnit';
      let basePDF = '';
      const req = {
        bank: this.bank,
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.bankBranchNOUPDFReport(req);
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
