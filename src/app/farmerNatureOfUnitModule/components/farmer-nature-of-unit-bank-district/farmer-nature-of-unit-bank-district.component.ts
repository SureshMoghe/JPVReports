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
  selector: 'app-farmer-nature-of-unit-bank-district',
  templateUrl: './farmer-nature-of-unit-bank-district.component.html',
  styleUrls: ['./farmer-nature-of-unit-bank-district.component.css'],
})
export class FarmerNatureOfUnitBankDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  @Input() bank: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
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
    if (this.bank !== null && this.bank !== '' && this.bank !== undefined) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        SHEEP_TO_BUFFALO: 0,
        GOAT_TO_BUFFALO: 0,
        SHEEP_TO_COW: 0,
        GOAT_TO_COW: 0,
      };
      const req = {
        bank: this.bank,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.farmerNOUBankDistrict(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_BUFFALO += parseInt(
            this.districtLevelDetails[i].SHEEP_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_BUFFALO += parseInt(
            this.districtLevelDetails[i].GOAT_TO_BUFFALO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SHEEP_TO_COW += parseInt(
            this.districtLevelDetails[i].SHEEP_TO_COW
          );
          // tslint:disable-next-line: radix
          this.reportTotals.GOAT_TO_COW += parseInt(
            this.districtLevelDetails[i].GOAT_TO_COW
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.districtLevelDetails[i].DISTRICT_NAME,
            SHEEP_TO_BUFFALO: this.districtLevelDetails[i].SHEEP_TO_BUFFALO,
            GOAT_TO_BUFFALO: this.districtLevelDetails[i].GOAT_TO_BUFFALO,
            SHEEP_TO_COW: this.districtLevelDetails[i].SHEEP_TO_COW,
            GOAT_TO_COW: this.districtLevelDetails[i].GOAT_TO_COW,
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
      bank: this.bank,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Nature Of Unit Bank District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'bankDstrictLevelNatureOfUnit';
      let basePDF = '';
      const req = {
        bank: this.bank,
      };
      this.spinner.show();
      const res = await this.farmerNOUAPI.bankDistrictNOUPDFReport(req);
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
