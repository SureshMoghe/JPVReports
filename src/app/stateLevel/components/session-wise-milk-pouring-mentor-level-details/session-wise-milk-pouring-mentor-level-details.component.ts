import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-session-wise-milk-pouring-mentor-level-details',
  templateUrl: './session-wise-milk-pouring-mentor-level-details.component.html',
  styleUrls: ['./session-wise-milk-pouring-mentor-level-details.component.css']
})
export class SessionWiseMilkPouringMentorLevelDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkPouringPromotersChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMilkNotPouringPromotersChange = new EventEmitter<string>();

  rbkLevelDetails = [];

  reportTotals = {
          S_NO: '-',
          RBKs: 'TOTAL',
          Societies: 0,
          Mandals: '-',
          //Route_Number: '-',
          Route_Name: '-', 
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== undefined &&
      this.districtId !== '' &&
      this.districtId !== null &&
      this.mentorId !== undefined &&
      this.mentorId !== '' &&
      this.mentorId !== null
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        type:"8",
        districtId: this.districtId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        mandalId: this.phaseid,
      };  debugger;
      this.spinner.show();
      const res = await this.promotersAPI.SessionwisedGetmasterlevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        this. reportTotals = {
          S_NO: '-',
          RBKs: 'TOTAL',
          Societies: 0,
          Mandals: '-', 
          //Route_Number: '-',
          Route_Name: '-', 
          Mentor_Mobile_Number: '-',
          RIC_Mobile_Number: '-',
          No_of_Farmers_Registered:0,         
          Morning_shift: 0,
          Evening_Shift: 0,
          Total: 0,
          Milk_Not_Pouring_Farmers: 0,
  };
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.Societies += parseInt(
            this.rbkLevelDetails[i].NO_OF_SOCIETIES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.No_of_Farmers_Registered += parseInt(
            this.rbkLevelDetails[i].NO_OF_FARMERS_REGISTERED
          );

          // tslint:disable-next-line: radix
          this.reportTotals.Morning_shift += parseInt(
            this.rbkLevelDetails[i].MORNING_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Evening_Shift += parseInt(
            this.rbkLevelDetails[i].EVENING_MILK_POURERS
          );
          this.reportTotals.Total += parseInt(
            this.rbkLevelDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Milk_Not_Pouring_Farmers += parseInt(
            this.rbkLevelDetails[i].MILK_NOT_POURERS
          );
          let singleRow = {   
            S_NO: i + 1,
            RBKs: this.rbkLevelDetails[i].RBK_NAME,
            Mandals: this.rbkLevelDetails[i].MANDAL_NAME,
            Societies: this.rbkLevelDetails[i].NO_OF_SOCIETIES,
            //Route_Number: this.rbkLevelDetails[i].ROUTE_NO,
            Route_Name: this.rbkLevelDetails[i].ROUTE_NAME,
            Mentor_Mobile_Number: this.rbkLevelDetails[i].MENTOR_MOBILE_NO,
            RIC_Mobile_Number: this.rbkLevelDetails[i].RIC_MOBILE_NO,
            No_of_Farmers_Registered: this.rbkLevelDetails[i].NO_OF_FARMERS_REGISTERED,
            Morning_shift: this.rbkLevelDetails[i].MORNING_MILK_POURERS,
            Evening_Shift: this.rbkLevelDetails[i].EVENING_MILK_POURERS,
            Total: this.rbkLevelDetails[i].TOTAL_MILK_POURERS,
            Milk_Not_Pouring_Farmers: this.rbkLevelDetails[i].MILK_NOT_POURERS,
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
      mentorId: this.mentorId,
      mentorName: this.mentorName,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid: this.phaseid,
      phasename: this.phasename,
    };
    debugger;

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
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
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,   
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
      mentorName: this.mentorName, //obj.NAME_OF_THE_MENTOR,       //obj.MENTOR_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };
debugger;
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
      mentorName: this.mentorName,//obj.NAME_OF_THE_MENTOR,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
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
      mentorName:this.mentorName, //obj.NAME_OF_THE_MENTOR,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMilkNotPouringPromotersChange.emit(encryptedString);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Session Wise Milk Pouring RBKs Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        mentorId: this.mentorId,
        mentorName: this.mentorName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'rbkLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.rbkLevelPromotersPDFReport(req);
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

