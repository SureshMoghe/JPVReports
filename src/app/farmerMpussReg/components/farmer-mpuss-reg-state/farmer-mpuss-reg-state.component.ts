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
import { FarmerRegService } from '../../services/farmer-reg.service';
import { StateService } from 'src/app/stateLevel/services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-farmer-mpuss-reg-state',
  templateUrl: './farmer-mpuss-reg-state.component.html',
  styleUrls: ['./farmer-mpuss-reg-state.component.css'],
})
export class FarmerMpussRegStateComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phasename:any;
  @Input() phaseid:any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];
  RegisteredFarmerDetails = [];excelData1 = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_ROUTES: 0,
    TOTAL_RBKS: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_SUBMIT_RBKS: 0,
    TOTAL_NOT_SUBMIT_RBKS: 0,
    TOTAL_SUBMIT_VILLAGE: 0,
    TOTAL_NOT_SUBMIT_VILLAGE: 0,
    TOTAL_REGS: 0,
  };
  excelData = [];

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
    private session: SessionService, 
    private stateAPI:StateService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = { 
        S_NO: '-',
        DISTRICT: 'TOTAL',
        TOTAL_ROUTES: 0,
        TOTAL_RBKS: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_SUBMIT_RBKS: 0,
        TOTAL_NOT_SUBMIT_RBKS: 0,
        TOTAL_SUBMIT_VILLAGE: 0,
        TOTAL_NOT_SUBMIT_VILLAGE: 0,
        TOTAL_REGS: 0,
      };
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkAmcMdacId:this.phaseid,
      };
      this.spinner.show();debugger;
      const res = await this.farmerAPI.stateLevelReport(req);
      if (res.success) {


        this.reportTotals = {
          S_NO: '-',
          DISTRICT: 'TOTAL',
          TOTAL_ROUTES: 0,
          TOTAL_RBKS: 0,
          TOTAL_VILLAGES: 0,
          TOTAL_SUBMIT_RBKS: 0,
          TOTAL_NOT_SUBMIT_RBKS: 0,
          TOTAL_SUBMIT_VILLAGE: 0,
          TOTAL_NOT_SUBMIT_VILLAGE: 0,
          TOTAL_REGS: 0,
        };
        
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ROUTES += parseInt(
            this.stateLevelDetails[i].TOTAL_ROUTES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.stateLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_RBKS += parseInt(
            this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUBMIT_VILLAGE += parseInt(
            this.stateLevelDetails[i].TOTAL_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_NOT_SUBMIT_VILLAGE += parseInt(
            this.stateLevelDetails[i].TOTAL_NOT_SUBMIT_VILLAGE
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REGS += parseInt(
            this.stateLevelDetails[i].TOTAL_REGS
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            TOTAL_ROUTES: this.stateLevelDetails[i].TOTAL_ROUTES,
            TOTAL_RBKS: this.stateLevelDetails[i].TOTAL_RBKS,
            TOTAL_VILLAGES: this.stateLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_SUBMIT_RBKS: this.stateLevelDetails[i].TOTAL_SUBMIT_RBKS,
            TOTAL_NOT_SUBMIT_RBKS: this.stateLevelDetails[i]
              .TOTAL_NOT_SUBMIT_RBKS,
            TOTAL_SUBMIT_VILLAGE: this.stateLevelDetails[i]
              .TOTAL_SUBMIT_VILLAGE,
            TOTAL_NOT_SUBMIT_VILLAGE: this.stateLevelDetails[i]
              .TOTAL_NOT_SUBMIT_VILLAGE,
            TOTAL_REGS: this.stateLevelDetails[i].TOTAL_REGS,
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

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Farmer Registration State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkAmcMdacId:this.phaseid,
        columnValue:this.phasename


      };
      const fileName = 'stateLevelFarmerRegReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerAPI.stateLevelFarmerRegPDFReport(req);
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
      districtName: obj.DISTRICT,
      fromDate: this.fromDate,
      toDate: this.toDate,
      phasename:this.phasename,
      phaseid:this.phaseid,
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




  
  btnRegGetDetails(obj): void { 
    this.RegDetailsReport(obj.DIST_CODE); 
      }
    
      async RegDetailsReport(districtid): Promise<void> {
        try {
          this.RegisteredFarmerDetails = [];
    
    const req={
      districtId:districtid,
      type:"8",
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
                DISTRICT_NAME: this.RegisteredFarmerDetails[i].DISTRICT_NAME,
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
