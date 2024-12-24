import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { PromotersModuleService } from 'src/app/promotersModule/services/promoters-module.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-session-wise-milk-pouring-rbklevel-details',
  templateUrl: './session-wise-milk-pouring-rbklevel-details.component.html',
  styleUrls: ['./session-wise-milk-pouring-rbklevel-details.component.css']
})
export class SessionWiseMilkPouringRBKLevelDetailsComponent  implements OnInit, OnDestroy, AfterViewInit {

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() rbkId: any;  
  @Input() rbkName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid: any;
  @Input() phasename: any;

  SocietyDetails = [];
  excelData = [];


  reportTotals = {
    S_NO: '-',
    Society_Name: 'TOTAL', 
    Mandals: '-',
   // Route_Number: '-',
    Route_Name: '-', 
    Mentor_Mobile_Number: '-',
    RIC_Mobile_Number: '-',
    No_of_Farmers_Registered:0,         
    Morning_shift: 0,
    Evening_Shift: 0,
    Total: 0,
    Milk_Not_Pouring_Farmers: 0,
};

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
  }

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    this.loadReport();
  } 

  async loadReport(): Promise<void> {
    try {
      
     this.reportTotals = {
        S_NO: '-',
        Society_Name: 'TOTAL', 
        Mandals: '-',
       // Route_Number: '-',
        Route_Name: '-', 
        Mentor_Mobile_Number: '-',
        RIC_Mobile_Number: '-',
        No_of_Farmers_Registered:0,         
        Morning_shift: 0,
        Evening_Shift: 0,
        Total: 0,
        Milk_Not_Pouring_Farmers: 0,
};     
      debugger;
      const req = {
        type:"9",
        districtId: this.districtId,
        rbkId: this.rbkId,
        mentorId: this.mentorId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        mandalId: this.phaseid,
      };
      this.spinner.show();
      const res = await this.promotersAPI.SessionwisedlevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.SocietyDetails = res.result;
        for (let i = 0; i < this.SocietyDetails.length; i++) {
          // this.reportTotals.Societies += parseInt(
          //   this.SocietyDetails[i].NO_OF_SOCIETIES
          // );
          // tslint:disable-next-line: radix
          this.reportTotals.No_of_Farmers_Registered += parseInt(
            this.SocietyDetails[i].NO_OF_FARMERS_REGISTERED
          );

          // tslint:disable-next-line: radix
          this.reportTotals.Morning_shift += parseInt(
            this.SocietyDetails[i].MORNING_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Evening_Shift += parseInt(
            this.SocietyDetails[i].EVENING_MILK_POURERS
          );
          this.reportTotals.Total += parseInt(
            this.SocietyDetails[i].TOTAL_MILK_POURERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.Milk_Not_Pouring_Farmers += parseInt(
            this.SocietyDetails[i].MILK_NOT_POURERS
          );
          let singleRow = {
            S_NO: i + 1,
            Society_Name: this.SocietyDetails[i].SOCIETY_NAME,
            Mandals: this.SocietyDetails[i].MANDAL_NAME,
            // Societies: this.SocietyDetails[i].NO_OF_SOCIETIES,
           // Route_Number: this.SocietyDetails[i].ROUTE_NO,
            Route_Name: this.SocietyDetails[i].ROUTE_NAME,
            Mentor_Mobile_Number: this.SocietyDetails[i].MENTOR_MOBILE_NO,
            RIC_Mobile_Number: this.SocietyDetails[i].RIC_MOBILE_NO,
            No_of_Farmers_Registered: this.SocietyDetails[i].NO_OF_FARMERS_REGISTERED,
            Morning_shift: this.SocietyDetails[i].MORNING_MILK_POURERS,
            Evening_Shift: this.SocietyDetails[i].EVENING_MILK_POURERS,
            Total: this.SocietyDetails[i].TOTAL_MILK_POURERS,
            Milk_Not_Pouring_Farmers: this.SocietyDetails[i].MILK_NOT_POURERS,
          };

          this.excelData.push(singleRow);
        }
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
      'Session Wise Milk Pouring Society Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        rbkId: this.rbkId,
        mentorId: this.mentorId,
        districtName: this.districtName,
        rbkName: this.rbkName,
        mentorName: this.mentorName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'detailLevelPromotersReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.promotersAPI.detailLevelPromotersPDFReport(req);
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

