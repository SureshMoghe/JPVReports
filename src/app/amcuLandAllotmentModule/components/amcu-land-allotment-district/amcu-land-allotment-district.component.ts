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
import { AmcuLandAllotmentService } from '../../services/amcu-land-allotment.service';

@Component({
  selector: 'app-amcu-land-allotment-district',
  templateUrl: './amcu-land-allotment-district.component.html',
  styleUrls: ['./amcu-land-allotment-district.component.css'],
})
export class AmcuLandAllotmentDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL: 'TOTAL',
    TOTAL_RBKS: 0,
    TOTAL_SUBMIT_RBKS: 0,
    PERCENTAGE_COMPLETED: 0,
    TOTAL_NOT_SUBMIT_RBKS: 0,
    PERCENTAGE_NOT_COMPLETED: 0,
    TOTAL_LAND_HANDOVER_SUBMIT: 0,
    TOTAL_LAND_HANDOVER_NOT_SUBMIT: 0,

    TOTAL_VILLAGES: 0,
    ALLOT_SUBMITED_VILLAGES: 0, 
    PERCENT_ALLOT_VILLAGES_COMP: 0, 
    ALLOT_NOT_SUBMITTED_VILLAGES: 0,
    SUBMITED_HAND_VILLAGES: 0,
    PERCENT_HAND_VILLAGES_COMP: 0,
    HAND_NOT_SUBMIT_VIL: 0,

  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private allotmentAPI: AmcuLandAllotmentService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        MANDAL: 'TOTAL',
        TOTAL_RBKS: 0,
        TOTAL_SUBMIT_RBKS: 0,
        PERCENTAGE_COMPLETED: 0,
        TOTAL_NOT_SUBMIT_RBKS: 0,
        PERCENTAGE_NOT_COMPLETED: 0,
        TOTAL_LAND_HANDOVER_SUBMIT: 0,
        TOTAL_LAND_HANDOVER_NOT_SUBMIT: 0,

        TOTAL_VILLAGES: 0,
    ALLOT_SUBMITED_VILLAGES: 0, 
    PERCENT_ALLOT_VILLAGES_COMP: 0, 
    ALLOT_NOT_SUBMITTED_VILLAGES: 0,
    SUBMITED_HAND_VILLAGES: 0,
    PERCENT_HAND_VILLAGES_COMP: 0,
    HAND_NOT_SUBMIT_VIL: 0,

      };
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.allotmentAPI.amcuLandAllotmentDistrictReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.districtLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_RBKS += parseInt(
            this.districtLevelDetails[i].TOTAL_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_RBKS += parseInt(
            this.districtLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_SUBMIT += parseInt(
            this.districtLevelDetails[i].TOTAL_LAND_HANDOVER_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_NOT_SUBMIT += parseInt(
            this.districtLevelDetails[i].TOTAL_LAND_HANDOVER_NOT_SUBMIT
          );

//SRI START
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(this.districtLevelDetails[i].TOTAL_VILLAGES);
            this.reportTotals.ALLOT_SUBMITED_VILLAGES += parseInt(this.districtLevelDetails[i].ALLOT_SUBMITED_VILLAGES);
           this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP += parseInt(this.districtLevelDetails[i].PERCENT_ALLOT_VILLAGES_COMP);
             this.reportTotals.ALLOT_NOT_SUBMITTED_VILLAGES += parseInt(this.districtLevelDetails[i].ALLOT_NOT_SUBMITTED_VILLAGES);
           this.reportTotals.SUBMITED_HAND_VILLAGES += parseInt(this.districtLevelDetails[i].SUBMITED_HAND_VILLAGES);
           this.reportTotals.HAND_NOT_SUBMIT_VIL += parseInt(this.districtLevelDetails[i].HAND_NOT_SUBMIT_VIL);


          // this.reportTotals.PERCENT_HAND_VILLAGES_COMP += parseInt(this.districtLevelDetails[i].PERCENT_HAND_VILLAGES_COMP);
          // 


//SRI END

          let singleRow = {
            S_NO: i + 1,
            MANDAL: this.districtLevelDetails[i].MANDAL_NAME,
            TOTAL_RBKS: this.districtLevelDetails[i].TOTAL_RBKS,
            TOTAL_SUBMIT_RBKS: this.districtLevelDetails[i].TOTAL_SUBMIT_RBKS,
            PERCENTAGE_COMPLETED: this.districtLevelDetails[i].PERCENTAGE_COMPLETED,
            TOTAL_NOT_SUBMIT_RBKS:  this.districtLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS,
            PERCENTAGE_NOT_COMPLETED:  this.districtLevelDetails[i].PERCENTAGE_NOT_COMPLETED,
            TOTAL_LAND_HANDOVER_SUBMIT:   this.districtLevelDetails[i].TOTAL_LAND_HANDOVER_SUBMIT,
            TOTAL_LAND_HANDOVER_NOT_SUBMIT:   this.districtLevelDetails[i].TOTAL_LAND_HANDOVER_NOT_SUBMIT,
            //SRI START
            TOTAL_VILLAGES:   this.districtLevelDetails[i].TOTAL_VILLAGES,
              ALLOT_SUBMITED_VILLAGES:   this.districtLevelDetails[i].ALLOT_SUBMITED_VILLAGES,
              PERCENT_ALLOT_VILLAGES_COMP:   this.districtLevelDetails[i].PERCENT_ALLOT_VILLAGES_COMP,
               ALLOT_NOT_SUBMITTED_VILLAGES:   this.districtLevelDetails[i].ALLOT_NOT_SUBMITTED_VILLAGES,
              SUBMITED_HAND_VILLAGES:   this.districtLevelDetails[i].SUBMITED_HAND_VILLAGES,
              HAND_NOT_SUBMIT_VIL:   this.districtLevelDetails[i].HAND_NOT_SUBMIT_VIL,
              
            // PERCENT_HAND_VILLAGES_COMP:   this.districtLevelDetails[i].PERCENT_HAND_VILLAGES_COMP,
            // 

            //SRI END
          };
          this.reportTotals.PERCENTAGE_COMPLETED =  (this.reportTotals.TOTAL_SUBMIT_RBKS /  this.reportTotals.TOTAL_RBKS) *  100;
          this.reportTotals.PERCENTAGE_COMPLETED = parseFloat(this.reportTotals.PERCENTAGE_COMPLETED.toFixed(2) );

          this.reportTotals.PERCENTAGE_NOT_COMPLETED =(this.reportTotals.TOTAL_NOT_SUBMIT_RBKS /this.reportTotals.TOTAL_RBKS) *  100;
          this.reportTotals.PERCENTAGE_NOT_COMPLETED = parseFloat(this.reportTotals.PERCENTAGE_NOT_COMPLETED.toFixed(2) );

 //SRI START
 this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP =  (this.reportTotals.ALLOT_SUBMITED_VILLAGES /  this.reportTotals.TOTAL_VILLAGES  )*100;
 this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP = parseFloat(this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP.toFixed(2) ); 
 
 //SRI END
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Land Allotment District Level Report',
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
      const fileName = 'districtLevelAmcuLandAllotment';
      let basePDF = '';
      this.spinner.show();
      const res = await this.allotmentAPI.amcuLandAllotmentDistrictReportPDF(
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalName: obj.MANDAL_NAME,
      mandalId: obj.MANDAL_CODE,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
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
