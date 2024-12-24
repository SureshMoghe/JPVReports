 

import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { PromptservicesService } from '../../services/promptservices.service';




@Component({
  selector: 'app-pmfarmerabstract',
  templateUrl: './pmfarmerabstract.component.html',
  styleUrls: ['./pmfarmerabstract.component.css']
})
export class PmfarmerabstractComponent  implements OnInit, OnDestroy, AfterViewInit {
  farmerAbstractDetails = [];
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  districtList = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    MDAC_CODE: '-',
    FARMER_CODE: '-',
    FARMER_NAME: 'TOTAL',
    TOTAL_BUFFALO_MILK_LTR: 0,
    AVG_BUFFALO_SNF:0,
    AVG_BUFFALO_FAT:0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
    AVG_COW_SNF:0,
    AVG_COW_FAT:0,
    TOTAL_COW_MILK_AMOUNT: 0,
    TOTAL_MILK_ITR: 0,
    TOTAL_AMOUNT: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
   // private farmerModuleAPI: StateService,
    private farmerAPI: FarmerRegService,
    private utils: UtilsService, 
    private session: SessionService,
    private promptservice :PromptservicesService
  ) {}

  ngOnInit(): void {
    this.districtId = '';
     
   // this.fromDate = this.session.getFromDateString();
   this.fromDate = this.session.getTodayDateString();
    this.toDate = this.session.getTodayDateString();
    this.loadDistrictList();
    // tslint:disable-next-line: max-line-length
    if (this.districtId !== null && this.districtId !== undefined) {
      this.loadReport();
    }
  }

   

  loadDistrictList(): void {
    this.spinner.show();
    this.farmerAPI
      .districtList()
      .then((res: any) => {
        if (res.success) {
          this.districtList = res.result;
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

  onDistrictIdChange(): void {
    this.farmerAbstractDetails = [];
    this.excelData = [];
  }

  btnLoadReport(): void {
    if (this.districtId === null || this.districtId === undefined) {
      this.toast.warning('Please Select District');
      return;
    }
    if (
      this.fromDate === null ||
      this.fromDate === undefined ||
      this.fromDate === ''
    ) {
      this.toast.warning('Please Select From Date');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('Please Select To Date');
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT_NAME: '-',
        MDAC_CODE: '-',
        FARMER_CODE: '-',
        FARMER_NAME: 'TOTAL',
        TOTAL_BUFFALO_MILK_LTR: 0,
        AVG_BUFFALO_SNF:0,
        AVG_BUFFALO_FAT:0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        AVG_COW_SNF:0,
        AVG_COW_FAT:0,
        TOTAL_COW_MILK_AMOUNT: 0,
        TOTAL_MILK_ITR: 0,
        TOTAL_AMOUNT: 0,
      };
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.farmerAbstractDetails = [];
      this.spinner.show();
      const res = await this.promptservice.farmerWiseAbstractReport(req);
      if (res.success) {
        this.excelData = [];
        this.farmerAbstractDetails = res.result;
        for (let i = 0; i < this.farmerAbstractDetails.length; i++) {
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.AVG_BUFFALO_SNF += parseFloat(
            this.farmerAbstractDetails[i].AVG_BUFFALO_SNF
          );
          this.reportTotals.AVG_BUFFALO_FAT += parseFloat(
            this.farmerAbstractDetails[i].AVG_BUFFALO_FAT
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.AVG_COW_SNF += parseFloat(
            this.farmerAbstractDetails[i].AVG_COW_SNF
          );
          this.reportTotals.AVG_COW_FAT += parseFloat(
            this.farmerAbstractDetails[i].AVG_COW_FAT
          );
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_MILK_ITR += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_MILK_ITR
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.farmerAbstractDetails[i].TOTAL_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.farmerAbstractDetails[i].DISTRICT_NAME,
            MDAC_CODE: this.farmerAbstractDetails[i].MDAC_CODE,
            FARMER_CODE: this.farmerAbstractDetails[i].FARMER_CODE,
            FARMER_NAME: this.farmerAbstractDetails[i].FARMER_NAME,
            TOTAL_BUFFALO_MILK_LTR: this.farmerAbstractDetails[i]
              .TOTAL_BUFFALO_MILK_LTR,
              AVG_BUFFALO_SNF: this.farmerAbstractDetails[i]
              .AVG_BUFFALO_SNF,
              AVG_BUFFALO_FAT: this.farmerAbstractDetails[i]
              .AVG_BUFFALO_FAT,
            TOTAL_BUFFALO_MILK_AMOUNT: this.farmerAbstractDetails[i]
              .TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR: this.farmerAbstractDetails[i]
              .TOTAL_COW_MILK_LTR,
              AVG_COW_SNF: this.farmerAbstractDetails[i]
              .AVG_COW_SNF,
              AVG_COW_FAT: this.farmerAbstractDetails[i]
              .AVG_COW_FAT,
            TOTAL_COW_MILK_AMOUNT: this.farmerAbstractDetails[i]
              .TOTAL_COW_MILK_AMOUNT,
            TOTAL_MILK_ITR: this.farmerAbstractDetails[i].TOTAL_MILK_ITR,
            TOTAL_AMOUNT: this.farmerAbstractDetails[i].TOTAL_AMOUNT,

              DISTRICT_CODE: this.farmerAbstractDetails[i].DISTRICT_CODE,
              MANDAL_CODE: this.farmerAbstractDetails[i].MANDAL_CODE, 
              MANDAL_NAME: this.farmerAbstractDetails[i].MANDAL_NAME, 
              RBK_CODE: this.farmerAbstractDetails[i].RBK_CODE,
              RBK_NAME: this.farmerAbstractDetails[i].RBK_NAME, 
              HEAD_OF_VILLAGE: this.farmerAbstractDetails[i].HEAD_OF_VILLAGE,

             // MANDAL_CODE, MANDAL_NAME, RBK_CODE, RBK_NAME, HEAD_OF_VILLAGE
          }; 

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_BUFFALO_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_LTR = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_LTR.toFixed(2)
        );
        this.reportTotals.TOTAL_COW_MILK_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_COW_MILK_AMOUNT.toFixed(2)
        );
        this.reportTotals.TOTAL_MILK_ITR = parseFloat(
          this.reportTotals.TOTAL_MILK_ITR.toFixed(2)
        );
        this.reportTotals.TOTAL_AMOUNT = parseFloat(
          this.reportTotals.TOTAL_AMOUNT.toFixed(2)
        );
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else { this.excelData = [];
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {  if(this.excelData.length>0){ 
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Abstract Report',
      true
    );
  }
  }       

  btnPDF(): void {
    // const req = {
    //   districtId: this.districtId,
    //   fromDate: this.fromDate,
    //   toDate: this.toDate,
    // };
    // const fileName = 'farmerAbstractReport';
    // let basePDF = '';
    // this.spinner.show();
    // this.farmerModuleAPI
    //   .farmerWiseAbstractPDFReport(req)
    //   .then((res: any) => {
    //     if (res.success) {
    //       basePDF = res.result;
    //       this.utils.downloadPdfFile(basePDF, fileName);
    //     } else {
    //       this.toast.info(res.message);
    //     }
    //     this.spinner.hide();
    //   })
    //   .catch((error: any) => {
    //     this.spinner.hide();
    //     this.utils.catchResponse(error);
    //   });
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
