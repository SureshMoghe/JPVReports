import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BankerService } from 'src/app/bankerModule/services/banker.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-cheyuthabenficiary-list-by-rbk',
  templateUrl: './cheyuthabenficiary-list-by-rbk.component.html',
  styleUrls: ['./cheyuthabenficiary-list-by-rbk.component.css'] 
})
export class CheyuthabenficiaryListByRbkComponent implements OnInit {
   @Output() onRbkChange = new EventEmitter<string>();
 @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any; 
  @Input() rbkid: any;
  @Input() rbkName: any; 
  @Input() fromDate: any; 
  @Input() toDate: any; 

  rbkLevelDetails = [];excelData=[]; 
  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_APPLICATION: 0,
    TO_BE_VERIFIED: 0,
    APPROVED: 0,
    REJECTED: 0,
  };
  reportTotals1 = { 
    type:0,    
    stateid:0,
    districtid:0,
    mandalid:0,
    rbkid:0,
    beneficiaryid:0,
    beneficiarystatusid:0,
    uniqueid:0,
    role:0,
    insertedbyid:"" 
  };
  totreportTotals = {
    tt_MILK_QTY:0,
    tt_MILK_AMOUNT:0,
    };
    @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private session: SessionService,private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService, 
    private stateAPI: StateService, 
    private farmerModuleAPI: StateService,
    private utils: UtilsService,) { }

  ngOnInit(): void { 

    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkid !== null &&
      this.rbkid !== '' &&
      this.rbkid !== undefined
    ) {
       this.loadReport();
    }
  }

  
  async loadReport(): Promise<void> {
    try {
      this.rbkLevelDetails = [];

      // type:'5',  
      // districtid:this.districtId, 
      // pvar1:this.mandalId,
      // pvar2:this.rbkid,
//  const res = await this.stateAPI.farmerWiseAbstractReportphase(req);
    // const req = {
    //     type:'4',  
    //     districtid:this.districtId, 
    //     mandalid:this.mandalId,
    //     rbkid:this.rbkid,
    //   };
    //   this.spinner.show();debugger;
    //    const res = await this.bankAPI.cheyuthaList(req);
    const req = { 
    type:'14',
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        cnt1:this.mandalId,
        cnt2:this.rbkid,
      };

      this.spinner.show();debugger;
      const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
      if (res.success) {
       this.excelData = [];
        this.rbkLevelDetails = res.result;  
        // // this.districtName=this.rbkLevelDetails[0].DISTRICTNAME;
           for (let i = 0; i < this.rbkLevelDetails.length; i++) { 
         
          //   // tslint:disable-next-line: radix
             this.totreportTotals.tt_MILK_QTY += parseInt(this.rbkLevelDetails[i].MILK_QTY);
        // //   // tslint:disable-next-line: radix
             this.totreportTotals.tt_MILK_AMOUNT += parseInt( this.rbkLevelDetails[i].MILK_AMOUNT );
        // //   // tslint:disable-next-line: radix
        //     this.totreportTotals.tt_JPV_FARMERS += parseInt( this.rbkLevelDetails[i].TOTAL_JPV_FARMERS );
        // //   // tslint:disable-next-line: radix
        //     this.totreportTotals.tt_JPV_FARM_GROUNDED += parseInt( this.rbkLevelDetails[i].TOTAL_JPV_FARM_GROUNDED );
        // //    tslint:disable-next-line: radix
        //    this.totreportTotals.tt_NON_REG_CHYUTH_BEN += parseInt( this.rbkLevelDetails[i].NON_REG_CHYUTH_BEN );
        // //   // tslint:disable-next-line: radix
        //     this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.rbkLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS );
        // //   // tslint:disable-next-line: radix
        //     this.totreportTotals.tt_FACILITE += parseInt( this.rbkLevelDetails[i].TOT_FACILITE );

           let singleRow = { 
              S_NO: i + 1,
              CHEYUTHA_BEN_NAME: this.rbkLevelDetails[i].CHEYUTHA_BEN_NAME,
              JPV_REG_STATUS: this.rbkLevelDetails[i].JPV_REG_STATUS,
              JPV_REG_STATUS_WITH_ANML: this.rbkLevelDetails[i].JPV_REG_STATUS_WITH_ANML,
              START_DATE: this.rbkLevelDetails[i].START_DATE,
              LATEST_DATE: this.rbkLevelDetails[i].LATEST_DATE,
              MILK_QTY: this.rbkLevelDetails[i].MILK_QTY,
              MILK_AMOUNT: this.rbkLevelDetails[i].MILK_AMOUNT,
              ANML_GRND_STATUS: this.rbkLevelDetails[i].ANML_GRND_STATUS,
              ANML_TYPE: this.rbkLevelDetails[i].ANML_TYPE,
           
           };

            this.excelData.push(singleRow);
           }

 
        
      } else {
        this.toast.info(res.message);
      }
     //  this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }


  btnGetDetails(obj): void {debugger;
    const requestData = {  
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkid: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha  Rbk Level Report',
      true
    );
  }

  async btnPDF(): Promise <void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      const fileName = 'mandalLevelCheyuthaBankReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAPI.mandalLevelCheyuthaBankPDFReport(req);
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

  rerender(): void { debugger;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
