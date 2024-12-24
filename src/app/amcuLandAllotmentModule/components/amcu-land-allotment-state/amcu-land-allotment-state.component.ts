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
  selector: 'app-amcu-land-allotment-state',
  templateUrl: './amcu-land-allotment-state.component.html',
  styleUrls: ['./amcu-land-allotment-state.component.css'],
})
export class AmcuLandAllotmentStateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_SUBMIT_MANDALS: 0,
    TOTAL_NOT_SUBMIT_MANDALS: 0,
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
HAND_NOT_SUBMIT_VIL: 0


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
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_SUBMIT_MANDALS: 0,
        TOTAL_NOT_SUBMIT_MANDALS: 0,
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
        HAND_NOT_SUBMIT_VIL: 0

      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.allotmentAPI.amcuLandAllotmentStateReport(req);
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt( this.stateLevelDetails[i].TOTAL_MANDALS );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_MANDALS += parseInt( this.stateLevelDetails[i].TOTAL_SUBMIT_MANDALS  );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_MANDALS += parseInt( this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_MANDALS   );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_RBKS += parseInt( this.stateLevelDetails[i].TOTAL_SUBMIT_RBKS );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_RBKS += parseInt( this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_SUBMIT += parseInt( this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_SUBMIT );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_LAND_HANDOVER_NOT_SUBMIT += parseInt(this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_NOT_SUBMIT);

           
         

          

//SRI START
this.reportTotals.TOTAL_VILLAGES += parseInt( this.stateLevelDetails[i].TOTAL_VILLAGES);
this.reportTotals.ALLOT_SUBMITED_VILLAGES += parseInt( this.stateLevelDetails[i].ALLOT_SUBMITED_VILLAGES);
this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP += parseInt( this.stateLevelDetails[i].PERCENT_ALLOT_VILLAGES_COMP);
this.reportTotals.ALLOT_NOT_SUBMITTED_VILLAGES += parseInt( this.stateLevelDetails[i].ALLOT_NOT_SUBMITTED_VILLAGES);
this.reportTotals.HAND_NOT_SUBMIT_VIL += parseInt(this.stateLevelDetails[i].HAND_NOT_SUBMIT_VIL);

//SRI END



          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT_NAME,
            TOTAL_MANDALS: this.stateLevelDetails[i].TOTAL_MANDALS,
            TOTAL_SUBMIT_MANDALS: this.stateLevelDetails[i].TOTAL_SUBMIT_MANDALS,
            TOTAL_NOT_SUBMIT_MANDALS: this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_MANDALS,
            TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
            TOTAL_SUBMIT_RBKS: this.stateLevelDetails[i].TOTAL_SUBMIT_RBKS,
            PERCENTAGE_COMPLETED: this.stateLevelDetails[i].PERCENTAGE_COMPLETED,
            TOTAL_NOT_SUBMIT_RBKS: this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS,
            PERCENTAGE_NOT_COMPLETED: this.stateLevelDetails[i].PERCENTAGE_NOT_COMPLETED,
            TOTAL_LAND_HANDOVER_SUBMIT:  this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_SUBMIT,
            TOTAL_LAND_HANDOVER_NOT_SUBMIT: this.stateLevelDetails[i].TOTAL_LAND_HANDOVER_NOT_SUBMIT,

              TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
              ALLOT_SUBMITED_VILLAGES: this.stateLevelDetails[i].ALLOT_SUBMITED_VILLAGES,
              PERCENT_ALLOT_VILLAGES_COMP: this.stateLevelDetails[i].PERCENT_ALLOT_VILLAGES_COMP,
              ALLOT_NOT_SUBMITTED_VILLAGES: this.stateLevelDetails[i].ALLOT_NOT_SUBMITTED_VILLAGES,
              HAND_NOT_SUBMIT_VIL: this.stateLevelDetails[i].HAND_NOT_SUBMIT_VIL,

          };

          this.excelData.push(singleRow);
        }

        this.reportTotals.PERCENTAGE_COMPLETED = (this.reportTotals.TOTAL_LAND_HANDOVER_SUBMIT / this.reportTotals. ALLOT_SUBMITED_VILLAGES ) * 100;
        this.reportTotals.PERCENTAGE_COMPLETED = parseFloat( this.reportTotals.PERCENTAGE_COMPLETED.toFixed(2) );

        this.reportTotals.PERCENTAGE_NOT_COMPLETED =(this.reportTotals.TOTAL_NOT_SUBMIT_RBKS /this.reportTotals.TOTAL_RBKS) *  100;
        this.reportTotals.PERCENTAGE_NOT_COMPLETED = parseFloat(this.reportTotals.PERCENTAGE_NOT_COMPLETED.toFixed(2) );

        this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP =(this.reportTotals.ALLOT_SUBMITED_VILLAGES/this.reportTotals.TOTAL_VILLAGES ) *  100;
        this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP = parseFloat(this.reportTotals.PERCENT_ALLOT_VILLAGES_COMP.toFixed(2) );


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
      'AMCU Land Allotment State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'stateLevelAmcuLandAllotment';
      let basePDF = '';
      this.spinner.show();
      const res = await this.allotmentAPI.amcuLandAllotmentStateReportPDF(req);
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
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
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
