import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-society-abstract-district-report',
  templateUrl: './society-abstract-district-report.component.html',
  styleUrls: ['./society-abstract-district-report.component.css'],
})
export class SocietyAbstractDistrictReportComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  societyAbstractDetails = [];
  input: any;
  districtId: any;
  districtName: any;
  fromDate: any;
  toDate: any;
  districtList = []; 

  PhaseType:any;
  phaseid: any;//  this.phaseid,
  phasename: any;// this.phasename,
  PhaseTypeList:[];

  reportTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    MDAC_CODE: '-',
    SOCIETY_ID: '-',
    SOCIETY_NAME: 'TOTAL',
    NO_OF_FARMERS: 0,
    NO_OF_MILK_POURER_FARMERS: 0,
    TOTAL_BUFFALO_MILK_LTR: 0,
    TOTAL_BUFFALO_MILK_AMOUNT: 0,
    TOTAL_COW_MILK_LTR: 0,
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
    private farmerModuleAPI: StateService,
    private utils: UtilsService,
    private farmerAPI: FarmerRegService,
    private logger: LoggerService,
    private session: SessionService,
    private stateAPI:StateService,
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();


    if (
      this.phaseid === undefined ||
      this.phaseid === '' ||
      this.phaseid === null
      ) { 
      this.phaseid='0';
      this.phasename='ALL';
      this.phasename='ALL';
      this.phaseid='0';
      }

      this.loadPhaseTypelist();


    // tslint:disable-next-line: max-line-length
    if (this.districtId !== null && this.districtId !== undefined) {
      this.loadReport();
    } 
  }


  async loadPhaseTypelist(): Promise<void> {
    try { 
      const req = {
        type: '9', 
        districtId:this.districtId,
      };
		this.PhaseTypeList=[];
		this.spinner.show();
		const res = await this.stateAPI.volunteerHHMandalReport(req);
		if (res.success) {        
			this.PhaseTypeList = res.result;
			this.PhaseType='0';
			this.spinner.hide();
		}
		this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
    }
  }
  
  onReportPhaseTypeChange(): void {  debugger;
    this.phaseid=this.PhaseType; 
      let obj=document.getElementById('PhaseType');
    this.phasename=obj[this.PhaseType].innerText;
   
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
      this.toast.warning('From Date Is Empty');
      return;
    }
    if (
      this.toDate === null ||
      this.toDate === undefined ||
      this.toDate === ''
    ) {
      this.toast.warning('To Date Is Empty');
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
        SOCIETY_ID: '-',
        SOCIETY_NAME: 'TOTAL',
        NO_OF_FARMERS: 0,
        NO_OF_MILK_POURER_FARMERS: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_AMOUNT: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_COW_MILK_AMOUNT: 0,
        TOTAL_MILK_ITR: 0,
        TOTAL_AMOUNT: 0,
      };
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        var1:this.phaseid,
      };
      this.societyAbstractDetails = [];
      this.spinner.show();
      const res = await this.farmerModuleAPI.societyWiseAbstractReport(req);
      if (res.success) {
        this.excelData = [];
        this.societyAbstractDetails = res.result;
        for (let i = 0; i < this.societyAbstractDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_FARMERS += parseInt(
            this.societyAbstractDetails[i].NO_OF_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILK_POURER_FARMERS += parseInt(
            this.societyAbstractDetails[i].NO_OF_MILK_POURER_FARMERS
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
            this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_LTR
          );
          this.reportTotals.TOTAL_BUFFALO_MILK_AMOUNT += parseFloat(
            this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
            this.societyAbstractDetails[i].TOTAL_COW_MILK_LTR
          );
          this.reportTotals.TOTAL_COW_MILK_AMOUNT += parseFloat(
            this.societyAbstractDetails[i].TOTAL_COW_MILK_AMOUNT
          );
          this.reportTotals.TOTAL_MILK_ITR += parseFloat(
            this.societyAbstractDetails[i].TOTAL_MILK_ITR
          );
          this.reportTotals.TOTAL_AMOUNT += parseFloat(
            this.societyAbstractDetails[i].TOTAL_AMOUNT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT_NAME: this.societyAbstractDetails[i].DISTRICT_NAME,
            MDAC_CODE: this.societyAbstractDetails[i].MDAC_CODE,
            SOCIETY_ID: this.societyAbstractDetails[i].SOCIETY_ID,
            SOCIETY_NAME: this.societyAbstractDetails[i].SOCIETY_NAME,
            NO_OF_FARMERS: this.societyAbstractDetails[i].NO_OF_FARMERS,
            NO_OF_MILK_POURER_FARMERS:
              this.societyAbstractDetails[i].NO_OF_MILK_POURER_FARMERS,
            TOTAL_BUFFALO_MILK_LTR:
              this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT:
              this.societyAbstractDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            TOTAL_COW_MILK_LTR:
              this.societyAbstractDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT:
              this.societyAbstractDetails[i].TOTAL_COW_MILK_AMOUNT,
            TOTAL_MILK_ITR: this.societyAbstractDetails[i].TOTAL_MILK_ITR,
            TOTAL_AMOUNT: this.societyAbstractDetails[i].TOTAL_AMOUNT,
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
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Society Abstract Report',
      true
    );
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };
    const fileName = 'societyAbstractReport';
    let basePDF = '';
    this.spinner.show();
    this.farmerModuleAPI
      .societyWiseAbstractPDFReport(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
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
