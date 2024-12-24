import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-bmcu-equipments-status-details',
  templateUrl: './bmcu-equipments-status-details.component.html',
  styleUrls: ['./bmcu-equipments-status-details.component.css']
})
export class BmcuEquipmentsStatusDetailsComponent implements OnInit, OnDestroy, AfterViewInit
{  

  @Output() onDetailsChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    MANDAL: 0,
    BMCU: 0,
    APPROVED: 0,
    REJECTED: 0,
    NOT_SUBMITTED: 0     
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptionsaLL();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
  debugger;
    try { 

      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        MANDAL: 0,
        BMCU: 0,
        APPROVED: 0,
        REJECTED: 0,
        NOT_SUBMITTED: 0     
      };

      const req = { 
        TYPE:"29", 
      };
      this.spinner.show(); 
      const res = await this.promotersAPI.TechnisianDetails_Select(req);
      if(res.success){ 
        this.stateLevelDetails = res.result;

        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.MANDAL += parseInt(
            this.stateLevelDetails[i].MANDAL
          );
          // tslint:disable-next-line: radix
          this.reportTotals.BMCU += parseInt(
            this.stateLevelDetails[i].BMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.stateLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.stateLevelDetails[i].REJECTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NOT_SUBMITTED += parseInt(
            this.stateLevelDetails[i].NOT_SUBMITTED
          ); 

          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            MANDAL_CODE: this.stateLevelDetails[i].MANDAL,
            BMCU_CODE: this.stateLevelDetails[i].BMCU,
            APPROVED: this.stateLevelDetails[i].APPROVED,
            REJECTED: this.stateLevelDetails[i].REJECTED,
            NOT_SUBMITTED: this.stateLevelDetails[i].NOT_SUBMITTED, 
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
      } 
       else {
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
      'BMCU EQUIPMENT STATUS REPORT',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
       // fromDate: this.fromDate,
       // toDate: this.toDate,
      };
      const fileName = 'stateLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.stateLevelPromotersPDFReport(req);
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


  btnSubmittedDetails(obj,type): void { debugger;

    console.log(obj);
    const requestData = {
      type: type,
      districtId: obj.DISTRICT_CODE,
      districtName :obj.DISTRICT,
      
      };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDetailsChange.emit(encryptedString);
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