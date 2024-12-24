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
import { MdacVSsapMilkCollectionService } from '../../services/mdac-vssap-milk-collection.service';

@Component({
  selector: 'app-mdac-vssap-district',
  templateUrl: './mdac-vssap-district.component.html',
  styleUrls: ['./mdac-vssap-district.component.css'],
})
export class MdacVSsapDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() txnDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MPUSS_CODE: 'TOTAL',
    TXN_DATE: '-',
    SHIFT: '-',
    MILK_TYPE: '-',
    NO_OF_FARMERS: 0,
    MILK_IN_LITERS: 0,
    AVG_FAT: 0,
    AVG_SNF: 0,
    TOTAL_AMOUNT: 0,
    SAP_WEIGHT_LITER: 0,
    SAP_WEIGHT_KG: 0,
    SAP_AVG_FAT: 0,
    SAP_AVG_SNF: 0,
    DIFFERENCE_MILK_IN_LITERS: 0,
    DIFFERENCE_AVG_FAT: 0,
    DIFFERENCE_AVG_SNF: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private milkCollectionApi: MdacVSsapMilkCollectionService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        MPUSS_CODE: 'TOTAL',
        TXN_DATE: '-',
        SHIFT: '-',
        MILK_TYPE: '-',
        NO_OF_FARMERS: 0,
        MILK_IN_LITERS: 0,
        AVG_FAT: 0,
        AVG_SNF: 0,
        TOTAL_AMOUNT: 0,
        SAP_WEIGHT_LITER: 0,
        SAP_WEIGHT_KG: 0,
        SAP_AVG_FAT: 0,
        SAP_AVG_SNF: 0,
        DIFFERENCE_MILK_IN_LITERS: 0,
        DIFFERENCE_AVG_FAT: 0,
        DIFFERENCE_AVG_SNF: 0,
      };
      const req = {
        txnDate: this.txnDate,
        districtId: this.districtId,
        districtName: this.districtName,
      };
      this.spinner.show();
      const res = await this.milkCollectionApi.mdacVSsapDistrictLevelReport(
        req
      );
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_FARMERS += parseInt(
            this.districtLevelDetails[i].NO_OF_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_IN_LITERS += parseFloat(
            this.districtLevelDetails[i].MILK_IN_LITERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AVG_FAT += parseFloat( this.districtLevelDetails[i].AVG_FAT );
          // tslint:disable-next-line: radix
          this.reportTotals.AVG_SNF += parseFloat( this.districtLevelDetails[i].AVG_SNF );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.districtLevelDetails[i].TOTAL_AMOUNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SAP_WEIGHT_LITER += parseInt(
            this.districtLevelDetails[i].SAP_WEIGHT_LITER
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SAP_WEIGHT_KG += parseInt(
            this.districtLevelDetails[i].SAP_WEIGHT_KG
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SAP_AVG_FAT += parseFloat(
            this.districtLevelDetails[i].SAP_AVG_FAT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SAP_AVG_SNF += parseFloat(
            this.districtLevelDetails[i].SAP_AVG_SNF
          );
          // tslint:disable-next-line: radix
          this.reportTotals.DIFFERENCE_MILK_IN_LITERS += parseInt(
            this.districtLevelDetails[i].DIFFERENCE_MILK_IN_LITERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.DIFFERENCE_AVG_FAT += parseInt(
            this.districtLevelDetails[i].DIFFERENCE_AVG_FAT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.DIFFERENCE_AVG_SNF += parseInt(
            this.districtLevelDetails[i].DIFFERENCE_AVG_SNF
          );
          let singleRow = {
            S_NO: i + 1,
            MPUSS_CODE: this.districtLevelDetails[i].MPUSS_CODE,
            TXN_DATE: this.districtLevelDetails[i].TXN_DATE,
            SHIFT: this.districtLevelDetails[i].SHIFT,
            MILK_TYPE: this.districtLevelDetails[i].MILK_TYPE,
            NO_OF_FARMERS: this.districtLevelDetails[i].NO_OF_FARMERS,
            MILK_IN_LITERS: this.districtLevelDetails[i].MILK_IN_LITERS,
            AVG_FAT: this.districtLevelDetails[i].AVG_FAT,
            AVG_SNF: this.districtLevelDetails[i].AVG_SNF,
            TOTAL_AMOUNT: this.districtLevelDetails[i].TOTAL_AMOUNT,
            SAP_WEIGHT_LITER: this.districtLevelDetails[i].SAP_WEIGHT_LITER,
            SAP_WEIGHT_KG: this.districtLevelDetails[i].SAP_WEIGHT_KG,
            SAP_AVG_FAT: this.districtLevelDetails[i].SAP_AVG_FAT,
            SAP_AVG_SNF: this.districtLevelDetails[i].SAP_AVG_SNF,
            DIFFERENCE_MILK_IN_LITERS:
              this.districtLevelDetails[i].DIFFERENCE_MILK_IN_LITERS,
            DIFFERENCE_AVG_FAT: this.districtLevelDetails[i].DIFFERENCE_AVG_FAT,
            DIFFERENCE_AVG_SNF: this.districtLevelDetails[i].DIFFERENCE_AVG_SNF,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.MILK_IN_LITERS = parseFloat(
          this.reportTotals.MILK_IN_LITERS.toFixed(2)
        );
        this.reportTotals.TOTAL_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_AMOUNT.toFixed(2)
        );

        this.reportTotals.AVG_FAT = parseFloat( this.reportTotals.AVG_FAT.toFixed(2));
       
        this.reportTotals.AVG_SNF  = parseFloat( this.reportTotals.AVG_SNF.toFixed(2) );


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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'MDAC VS Sap District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        txnDate: this.txnDate,
        districtId: this.districtId,
        districtName: this.districtName,
      };
      const fileName = 'mdacVsSapMilkCollectionDistrictReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.milkCollectionApi.mdacVSsapDistrictLevelReportPDF(
        req
      );
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
