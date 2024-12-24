import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-session-wise-milk-pouring-state-level-details',
  templateUrl: './session-wise-milk-pouring-state-level-details.component.html',
  styleUrls: ['./session-wise-milk-pouring-state-level-details.component.css']
})
export class SessionWiseMilkPouringStateLevelDetailsComponent 
implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAddedRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNotAddedRbkChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onTotalPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkPouringPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkNotPouringPromotersChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    District: 'TOTAL',
    Routes: 0,
    Mandals: 0,
    RBKS: 0,
    Societies: 0,
    No_of_Farmers_Registered: 0,
    Morning_shift: 0,
    Evening_Shift: 0,
    Total: 0,
    Milk_Not_Pouring:0, 
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
    this.spinner.show();
    try {
      this.reportTotals = {
        S_NO: '-',
        District: 'TOTAL',
        Routes: 0,
        Mandals: 0,
        RBKS: 0,
        Societies: 0,
        No_of_Farmers_Registered: 0,
        Morning_shift: 0,
        Evening_Shift: 0,
        Total: 0,
        Milk_Not_Pouring:0, 
      };
      const req = {

        type:"6",
        fromDate: this.fromDate,
        toDate: this.toDate,
        mandalId:this.phaseid
      };
      this.spinner.show();
     // const res = await this.promotersAPI.stateLevelReport(req);
      const res = await this.promotersAPI.Sessionwisefmrmilkpouring(req);
      if(res.result[0].STATUS_CODE == "0"){ 
        this.toast.warning(res.result[0].STATUS_MSG); 
        this.stateLevelDetails=[];
      }
      else{
      if (res.success) {  
        this.excelData = [];
        this.reportTotals = {
          S_NO: '-',
          District: 'TOTAL',
          Routes: 0,
          Mandals: 0,
          RBKS: 0,
          Societies: 0,
          No_of_Farmers_Registered: 0,
          Morning_shift: 0,
          Evening_Shift: 0,
          Total: 0,
          Milk_Not_Pouring:0, 
        };
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.Routes += parseInt(
            this.stateLevelDetails[i].NO_OF_ROUTES
          );
          
          // tslint:disable-next-line: radix
          this.reportTotals.Mandals += parseInt(
            this.stateLevelDetails[i].NO_OF_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.RBKS += parseInt(
            this.stateLevelDetails[i].NO_OF_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Societies += parseInt(
            this.stateLevelDetails[i].NO_OF_SOCIETIES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.No_of_Farmers_Registered += parseInt(
            this.stateLevelDetails[i].NO_OF_FARMERS_REGISTERED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Morning_shift += parseInt(
            this.stateLevelDetails[i].MORNING_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Evening_Shift += parseInt(
            this.stateLevelDetails[i].EVENING_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Total += parseInt(
            this.stateLevelDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Milk_Not_Pouring += parseInt(
            this.stateLevelDetails[i].MILK_NOT_POURERS
          ); 
          let singleRow = {
            S_NO: i + 1,
            District: this.stateLevelDetails[i].DISTRICT_NAME,
            Routes: this.stateLevelDetails[i].NO_OF_ROUTES,
            Mandals: this.stateLevelDetails[i].NO_OF_MANDALS,
            RBKS: this.stateLevelDetails[i].NO_OF_RBKS,
            Societies: this.stateLevelDetails[i].NO_OF_SOCIETIES,
            No_of_Farmers_Registered:this.stateLevelDetails[i].NO_OF_FARMERS_REGISTERED,
            Morning_shift:this.stateLevelDetails[i].MORNING_MILK_POURERS,
            Evening_Shift: this.stateLevelDetails[i].EVENING_MILK_POURERS,
            Total: this.stateLevelDetails[i].TOTAL_MILK_POURERS,
            Milk_Not_Pouring: this.stateLevelDetails[i].MILK_NOT_POURERS, 
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
      } else {
        this.toast.info(res.message);
      }
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
      'Session Wise Milk Pouring State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DISTRICT_CODE,
      districtName: obj.DISTRICT_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnAddedRbkDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '1',
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAddedRbkChange.emit(encryptedString);
  }

  btnNotAddedRbkDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '2',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNotAddedRbkChange.emit(encryptedString);
  }

  btnTotalPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '3',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onTotalPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '4',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsMs(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '6',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsEs(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '7',   
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkNotPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '5',
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
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