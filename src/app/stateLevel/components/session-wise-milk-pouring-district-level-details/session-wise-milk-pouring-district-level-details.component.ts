import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-session-wise-milk-pouring-district-level-details',
  templateUrl: './session-wise-milk-pouring-district-level-details.component.html',
  styleUrls: ['./session-wise-milk-pouring-district-level-details.component.css']
})
export class SessionWiseMilkPouringDistrictLevelDetailsComponent implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;
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

  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    Mentor: 'TOTAL',
    Mandals: 0,
    RBKs: 0,
    Societies: 0,
    Route_Name: '-',
   //Route_Number: '-',
    Mentor_Mobile_Number: '-',
    RIC_Mobile_Number: '-',
    No_of_Farmers_Registered:0, 
    Morning_shift: 0,
    Evening_Shift: 0,
    Total: 0,
    Milk_Not_Pouring_Farmers: 0,
  }; 
  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private promotersAPI: PromotersModuleService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== null
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try { debugger;
      this.mentorLevelDetails = [];
      const req = {
        type: "7",
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        mandalId: this.phaseid,
      };
      this.spinner.show();
      const res = await this.promotersAPI.SessionwisedlevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this. reportTotals = {
          S_NO: '-',
          Mentor: 'TOTAL',
          Mandals: 0,
          RBKs: 0,
          Societies: 0,
          Route_Name: '-',
          //Route_Number: '-',
          Mentor_Mobile_Number: '-',
          RIC_Mobile_Number: '-',
          No_of_Farmers_Registered:0, 
          Morning_shift: 0,
          Evening_Shift: 0,
          Total: 0,
          Milk_Not_Pouring_Farmers: 0,
        };
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.Mandals += parseInt(
            this.mentorLevelDetails[i].NO_OF_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.RBKs += parseInt(
            this.mentorLevelDetails[i].NO_OF_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Societies += parseInt(
            this.mentorLevelDetails[i].NO_OF_SOCIETIES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.No_of_Farmers_Registered += parseInt(
            this.mentorLevelDetails[i].NO_OF_FARMERS_REGISTERED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Morning_shift += parseInt(
            this.mentorLevelDetails[i].MORNING_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Evening_Shift += parseInt(
            this.mentorLevelDetails[i].EVENING_MILK_POURERS
          );

          // tslint:disable-next-line: radix
          this.reportTotals.Total += parseInt(
            this.mentorLevelDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Milk_Not_Pouring_Farmers += parseInt(
            this.mentorLevelDetails[i].MILK_NOT_POURERS
          );
          
          let singleRow = {
            S_NO: i + 1,
            Mentor: this.mentorLevelDetails[i].OFFICERS_NAME,
            Mandals: this.mentorLevelDetails[i].NO_OF_MANDALS,
            RBKs: this.mentorLevelDetails[i].NO_OF_RBKS,
            Societies: this.mentorLevelDetails[i].NO_OF_SOCIETIES,
            Route_Name:this.mentorLevelDetails[i].ROUTE_NAME,
          //  Route_Number:this.mentorLevelDetails[i].ROUTE_NO,
            Mentor_Mobile_Number: this.mentorLevelDetails[i].MENTOR_MOBILE_NO,
            RIC_Mobile_Number: this.mentorLevelDetails[i].RIC_MOBILE_NO,
            No_of_Farmers_Registered: this.mentorLevelDetails[i].NO_OF_FARMERS_REGISTERED,
            Morning_shift: this.mentorLevelDetails[i].MORNING_MILK_POURERS,
            Evening_Shift:this.mentorLevelDetails[i].EVENING_MILK_POURERS,
            Total:this.mentorLevelDetails[i].TOTAL_MILK_POURERS,
            Milk_Not_Pouring_Farmers:this.mentorLevelDetails[i].MILK_NOT_POURERS,
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
      districtId: this.districtId,
      districtName: this.districtName,
      mentorId: obj.MENTOR_ID,
      mentorName: obj.OFFICERS_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };
    debugger;

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnAddedRbkDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,        
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '1',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onAddedRbkChange.emit(encryptedString);
  }

  btnNotAddedRbkDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '2',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNotAddedRbkChange.emit(encryptedString);
  }

  btnTotalPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '3',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onTotalPromotersChange.emit(encryptedString);
  }

  btnMilkPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '4',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsMs(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '6',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }
  btnMilkPouringPromotersDetailsEs(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '7',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkPouringPromotersChange.emit(encryptedString);
  }

  btnMilkNotPouringPromotersDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      subReportType: '5',
      mentorId: obj.MENTOR_ID,
      mentorName: obj.MENTOR_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Session Wise Milk Pouring Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.mentorLevelPromotersPDFReport(req);
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

