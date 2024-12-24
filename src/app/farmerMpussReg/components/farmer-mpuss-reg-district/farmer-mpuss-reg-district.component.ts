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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerRegService } from '../../services/farmer-reg.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-mpuss-reg-district',
  templateUrl: './farmer-mpuss-reg-district.component.html',
  styleUrls: ['./farmer-mpuss-reg-district.component.css'],
})
export class FarmerMpussRegDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit { 
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMentorChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phasename:any;
  @Input() phaseid:any;
  mentorLevelDetails = [];
  RegisteredFarmerDetails=[];
  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_SUBMIT_RBKS: 0,
    TOTAL_NOT_SUBMIT_RBKS: 0,
    TOTAL_SUBMIT_VILLAGE: 0,
    TOTAL_NOT_SUBMIT_VILLAGE: 0,
    TOTAL_REGS: 0,
  };
  excelData = [];excelData1=[];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerAPI: FarmerRegService,
    private utils: UtilsService,
    private logger: LoggerService,
    private stateAPI:StateService,
    //private session: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    
      this.loadReport();
    
  }
  else
         {
           this.router.navigate(['/shared/UnAuthorized']);
         }
  }
  // ngOnChanges(): void {
  //   if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
  //     this.loadReport();
  //   }
  // }
  async loadReport(): Promise<void> {
    try {
      this.mentorLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkAmcMdacId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.farmerAPI.districtLevelReport(req); 
      if (res.success) { this.spinner.hide();
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL_NAME: 'TOTAL', 
          TOTAL_ROUTES: 0,
          TOTAL_RBKS: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_SUBMIT_RBKS: 0,
          TOTAL_NOT_SUBMIT_RBKS: 0,
          TOTAL_SUBMIT_VILLAGE: 0,
          TOTAL_NOT_SUBMIT_VILLAGE: 0,
          TOTAL_REGS: 0,
        };
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.mentorLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_RBKS += parseInt(
            this.mentorLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_VILLAGE += parseInt(
            this.mentorLevelDetails[i].TOTAL_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_VILLAGE += parseInt(
            this.mentorLevelDetails[i].TOTAL_NOT_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REGS += parseInt(
            this.mentorLevelDetails[i].TOTAL_REGS
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.mentorLevelDetails[i].MANDAL_NAME,
            TOTAL_ROUTES: this.mentorLevelDetails[i].TOTAL_ROUTES,
            TOTAL_RBKS: this.mentorLevelDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_SUBMIT_RBKS: this.mentorLevelDetails[i].TOTAL_SUBMIT_RBKS,
            TOTAL_NOT_SUBMIT_RBKS: this.mentorLevelDetails[i]
              .TOTAL_NOT_SUBMIT_RBKS,
            TOTAL_SUBMIT_VILLAGE: this.mentorLevelDetails[i]
              .TOTAL_SUBMIT_VILLAGE,
            TOTAL_NOT_SUBMIT_VILLAGE: this.mentorLevelDetails[i]
              .TOTAL_NOT_SUBMIT_VILLAGE,
            TOTAL_REGS: this.mentorLevelDetails[i].TOTAL_REGS,
          };this.spinner.hide();
          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
      } else { this.spinner.hide();
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
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phaseid:this.phaseid,
      phasename:this.phasename,

    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMentorChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Registration District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkAmcMdacId:this.phaseid,
        columnValue:this.phasename

      };
      const fileName = 'districtLevelFarmerRegReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerAPI.districtLevelFarmerRegPDFReport(req);
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


  btnRegGetDetails(obj): void { 
    this.RegDetailsReport(obj.MANDAL_CODE); 
      }
    
      async RegDetailsReport(mandalId): Promise<void> {
        try {
          this.RegisteredFarmerDetails = [];
    
    const req={
      mandalId:mandalId,
      type:"10",
      clusterId:this.phaseid,
    } 
          this.spinner.show(); 
          const res = await this.stateAPI.volunteerHHMandalReport(req);
          if (res.success) {
            this.excelData1 = [];
            this.RegisteredFarmerDetails = res.result;
            for (let i = 0; i < this.RegisteredFarmerDetails.length; i++) {
              let singleRow = {
                S_NO: i + 1,
                MANDAL_NAME: this.RegisteredFarmerDetails[i].MANDAL_NAME,
                RBK_NAME: this.RegisteredFarmerDetails[i].RBK_NAME,
                VILLAGE_NAME: this.RegisteredFarmerDetails[i].VILLAGE_NAME,
                AMC_ID: this.RegisteredFarmerDetails[i].AMC_ID,
                FARMER_CODE: this.RegisteredFarmerDetails[i].FARMER_CODE,
                NAME: this.RegisteredFarmerDetails[i].NAME,
                MOBILE_NUMBER: this.RegisteredFarmerDetails[i].MOBILE_NUMBER,
              };
    
              this.excelData1.push(singleRow);
            }
    
            this.utils.JSONToCSVConvertor(
              this.excelData1,
              'Total Registered Farmers Report',
              true
            );
    
            this.spinner.hide();
            this.rerender();
          } else {
            this.spinner.hide();
            this.toast.info(res.message);
          }
        } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
        }
      }
 
}
