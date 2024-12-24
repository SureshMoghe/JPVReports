import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BankerService } from 'src/app/bankerModule/services/banker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service'; 
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service'; 
   
@Component({
  selector: 'app-cheyutha-mandal-by-dist-idreports',     
  templateUrl: './cheyutha-mandal-by-dist-idreports.component.html',
  styleUrls: ['./cheyutha-mandal-by-dist-idreports.component.css']
})
export class CheyuthaMandalByDistIDReportsComponent  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();

  @Input() districtId: any; 
   @Input()  districtName: any; 
  @Input() mandalId: any;
  @Input() mandalName: any; 
  @Input() fromDate: any; 
  @Input() toDate: any; 
  str:any;
 
  @Output() onRouteChange = new EventEmitter<string>(); 

  @Output() onVILLAGECOUNTChange = new EventEmitter<string>(); 

  @Output() onJpvRegisteredfarmerChange = new EventEmitter<string>();   
  @Output() oncheybeneRegjpvfarmerChange = new EventEmitter<string>(); 
  @Output() oncheybeneRegjpvfarmergroundedanimalChange = new EventEmitter<string>(); 
  @Output() oncheybeneRegNonjpvfarmergroundedanimalChange = new EventEmitter<string>(); 
  @Output() onTotalCheyuthaBeneficiariesGroundedwithanimalsChange = new EventEmitter<string>();  
  @Output() onjpvRegFaranimalgroundingChange = new EventEmitter<string>();
  @Output() onjpvStatestreenidhiChange = new EventEmitter<string>();
  @Output() onjpvStateunnathiChange = new EventEmitter<string>(); 
  @Output() onbanklinkChange = new EventEmitter<string>(); 
  @Output() ontotalnoofanimalsChange = new EventEmitter<string>(); 
  @Output() onsurveyedwithanimalsChange = new EventEmitter<string>();  
  @Output() onsurveyedwithoutanimalsChange = new EventEmitter<string>();  
  @Output() onSurvyednonRegisteredBeneficiariesChange = new EventEmitter<string>(); 
  @Output()   onSurveyedRegFarmersCount  = new EventEmitter<string>(); 
  @Output() onnonsurveyedChange = new EventEmitter<string>(); 
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
    TOTAL_APPLICATION: 0,
    TO_BE_VERIFIED: 0,
    APPROVED: 0,
    REJECTED: 0,
  };

  reportTotals1 = {
    // S_NO: '-',
    // DISTRICT: 'TOTAL',
    // TOTAL_APPLICATION: 0,
    // TO_BE_VERIFIED: 0,
    // APPROVED: 0,
    // REJECTED: 0,
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
          tt_JPV_FARMERS:0,
          tt_CHEY_BEN_GRD_ANIMALS:0,         
          tt_rbk_count:0,
          tt_villagecnt:0,
          tt_FARMER_REGIS:0,
          tt_CHEYUTHA_REGIS:0,  
          tt_Stree_Nidhi_Beneficiaries:0,
          tt_Unnathi_Beneficiaries :0,
          tt_Bank_Linkage_Beneficiaries:0, 
          tt_Total_Beneficiaries:0,
          tt_total_no_animals:0,  
          tt_REG_BEN_COUNT:0,
         // tt_DIRECT_REG_COUNT:0,
        //  tt_BEN_COUNT:0,  
          tt_SURVEYED_COUNT:0,
          tt_SUR_WITH_ANIMALS_COUNT:0,

          tt_SUR_ANIMALS_APP_COUNT:0,
          tt_SUR_ANIMALS_REJ_COUNT:0,
          tt_SUR_ANIMALS_PEND_COUNT :0,

          tt_SUR_WITH_OUT_ANIMALS_COUNT:0 ,
          tt_SURVEYED_PENDING_COUNT:0,
          tt_FACILITE:0,
          tt_DEAD_COUNT:0,
          tt_MIGRATED_COUNT:0,
         
  };
  excelData = [];
   
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAPI: BankerService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router,
    private session: SessionService,
    private farmerModuleAPI: StateService,
  ) {}

  ngOnInit(): void { debugger;
    // if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
    
  }
  ngOnChanges(): void { debugger;
    if ( 
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== null
    ) {
      this.loadReport();
    }
  }
  async loadReport1(): Promise<void> {
    try {
      this.districtLevelDetails = [];
      const req = {
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
     // const res = await this.bankAPI.districtLevelReport(req);
     const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
  
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          MANDAL_NAME: 'TOTAL',
          TOTAL_APPLICATION: 0,
          TO_BE_VERIFIED: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.districtLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.districtLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.districtLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.districtLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.districtLevelDetails[i].MANDAL_NAME,
            TOTAL_APPLICATION: this.districtLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.districtLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.districtLevelDetails[i].APPROVED,
            REJECTED: this.districtLevelDetails[i].REJECTED,
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

  async loadReport(): Promise<void> {
    try {

      this.totreportTotals = {
        tt_JPV_FARMERS:0,
          tt_CHEY_BEN_GRD_ANIMALS:0,         
          tt_rbk_count:0,
          tt_villagecnt:0,
          tt_FARMER_REGIS:0,
          tt_CHEYUTHA_REGIS:0,  
          tt_Stree_Nidhi_Beneficiaries:0,
          tt_Unnathi_Beneficiaries :0,
          tt_Bank_Linkage_Beneficiaries:0, 
          tt_Total_Beneficiaries:0,
          tt_total_no_animals:0,  
          tt_REG_BEN_COUNT:0,

        //  tt_DIRECT_REG_COUNT:0,

        //  tt_BEN_COUNT:0,
          tt_SURVEYED_COUNT:0,
          tt_SUR_WITH_ANIMALS_COUNT:0,

          tt_SUR_ANIMALS_APP_COUNT:0,
          tt_SUR_ANIMALS_REJ_COUNT:0,
          tt_SUR_ANIMALS_PEND_COUNT :0,

          tt_SUR_WITH_OUT_ANIMALS_COUNT:0 ,
          tt_SURVEYED_PENDING_COUNT:0,
          tt_FACILITE:0,
          tt_DEAD_COUNT:0,
          tt_MIGRATED_COUNT:0,
          };

      // this.reportTotals1 = {
      //   type:2,    
      //   stateid:0,
      //   districtid:this.districtId,
      //   mandalid:0,
      //   rbkid:0,
      //   beneficiaryid:0,
      //   beneficiarystatusid:0,
      //   uniqueid:this.session.uniqueId,
      //   role:this.session.desigId,
      //   insertedbyid:this.session.userName

        
      // };
      const req = {
        type:'122',
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();debugger;
      const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
     // const res = await this.bankAPI.cheyuthaList(this.reportTotals1);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result; debugger;
        this.districtName=this.districtLevelDetails[0].DISTRICTNAME;
        if(this.districtName===undefined) this.districtName=this.districtLevelDetails[0].DISTRICT_NAME;
        this.str="-";

// this.str="From Date="+this.fromDate  +"To Date="+this.toDate;
// this.excelData.push(this.str);
// this.str=" Mandal Level Report ";
// this.excelData.push(this.str);
// this.str="District :="+this.districtName;
// this.excelData.push(this.str );


         for (let i = 0; i < this.districtLevelDetails.length; i++) {

                    this.totreportTotals.tt_JPV_FARMERS = this.str; 
                    //  this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS= this.str; 
                    this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.districtLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS );  
                    this.totreportTotals.tt_rbk_count += parseInt(this.districtLevelDetails[i].RBK_COUNT );                  
                    this.totreportTotals.tt_villagecnt += parseInt(this.districtLevelDetails[i].VILLAGE_COUNT);       
                    this.totreportTotals.tt_FARMER_REGIS += parseInt( this.districtLevelDetails[i].TOTAL_FARMER_REGIS );                   
                    this.totreportTotals.tt_CHEYUTHA_REGIS += parseInt(this.districtLevelDetails[i].TOTAL_CHEYUTHA_REGIS);                   
                    this.totreportTotals.tt_Stree_Nidhi_Beneficiaries += parseInt( this.districtLevelDetails[i].STREENIDHI_BEN_COUNT );
                    this.totreportTotals.tt_Unnathi_Beneficiaries += parseInt( this.districtLevelDetails[i].UNNATHI_BEN_COUNT );
                    this.totreportTotals.tt_Bank_Linkage_Beneficiaries+= parseInt( this.districtLevelDetails[i].BANK_LINKAGE_BEN_COUNT );
                    this.totreportTotals.tt_Total_Beneficiaries+= parseInt( this.districtLevelDetails[i].TOTAL_BEN_COUNT ); 
                    this.totreportTotals.tt_total_no_animals += parseInt( this.districtLevelDetails[i].TOTAL_NO_ANIMALS ); 
                    this.totreportTotals.tt_REG_BEN_COUNT += parseInt( this.districtLevelDetails[i].REG_BEN_COUNT );  
                    
                 //   this.totreportTotals.tt_DIRECT_REG_COUNT += parseInt( this.districtLevelDetails[i].DIRECT_REG_COUNT ); 
                    
                  //  this.totreportTotals.tt_BEN_COUNT += parseInt( this.districtLevelDetails[i].BEN_COUNT ); 
                    this.totreportTotals.tt_SURVEYED_COUNT += parseInt(this.districtLevelDetails[i].SURVEYED_COUNT);  
                    this.totreportTotals.tt_SUR_WITH_ANIMALS_COUNT += parseInt(this.districtLevelDetails[i].SUR_WITH_ANIMALS_COUNT ); 
                   
                    this.totreportTotals.tt_SUR_ANIMALS_APP_COUNT+= parseInt(this.districtLevelDetails[i].SUR_ANIMALS_APP_COUNT ); 
                    this.totreportTotals.tt_SUR_ANIMALS_REJ_COUNT+= parseInt(this.districtLevelDetails[i].SUR_ANIMALS_REJ_COUNT ); 
                    this.totreportTotals.tt_SUR_ANIMALS_PEND_COUNT += parseInt(this.districtLevelDetails[i].SUR_ANIMALS_PEND_COUNT ); 

                   
                    this.totreportTotals.tt_SUR_WITH_OUT_ANIMALS_COUNT += parseInt(this.districtLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT);
                    this.totreportTotals.tt_FACILITE += parseInt( this.districtLevelDetails[i].TOT_FACILITE );
                    this.totreportTotals.tt_SURVEYED_PENDING_COUNT += parseInt( this.districtLevelDetails[i].SURVEYED_PENDING_COUNT );
                     
                    this.totreportTotals.tt_DEAD_COUNT +=parseInt( this.districtLevelDetails[i].DEAD_COUNT);
                    this.totreportTotals.tt_MIGRATED_COUNT +=parseInt( this.districtLevelDetails[i].MIGRATED_COUNT);
                     
           

            let singleRow = {
                    S_NO: i + 1,
                    MANDAL_NAME: this.districtLevelDetails[i].MANDAL_NAME,    
                    Noof_RBKs: this.districtLevelDetails[i].RBK_COUNT,          
                    Noof_VILLAGES: this.districtLevelDetails[i].VILLAGE_COUNT,
                    JPV_Registered_Farmers: this.districtLevelDetails[i].TOTAL_FARMER_REGIS,
                    Cheyutha: this.districtLevelDetails[i].TOTAL_CHEYUTHA_REGIS, 
                    Stree_Nidhi : this.districtLevelDetails[i].STREENIDHI_BEN_COUNT,
                    Unnathi : this.districtLevelDetails[i].UNNATHI_BEN_COUNT,
                    Bank_Linkage: this.districtLevelDetails[i].BANK_LINKAGE_BEN_COUNT, 
                    Total : this.districtLevelDetails[i].TOTAL_BEN_COUNT, 
                    Total_Noof_Animals:this.districtLevelDetails[i].TOTAL_NO_ANIMALS,
                    JPV_Registered_Beneficiaries: this.districtLevelDetails[i].REG_BEN_COUNT,
                  //  Direct_Registred_Farmers : this.districtLevelDetails[i].DIRECT_REG_COUNT,
                   // Total_Beneficiaries: this.districtLevelDetails[i].BEN_COUNT, 
                    Surveyed_Beneficiaries : this.districtLevelDetails[i].SURVEYED_COUNT,
                    Surveyed_with_Animals: this.districtLevelDetails[i].SUR_WITH_ANIMALS_COUNT,
                    Surveyed_with_Animals_Approved: this.districtLevelDetails[i].SUR_ANIMALS_APP_COUNT,
                    Surveyed_Animals_Rejected: this.districtLevelDetails[i].SUR_ANIMALS_REJ_COUNT,
                    Surveyed_Animals_Approval_Pending: this.districtLevelDetails[i].SUR_ANIMALS_PEND_COUNT,
                    Surveyed_without_Animals:  this.districtLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT,
                    Not_Surveyed_Beneficiaries:  this.districtLevelDetails[i].SURVEYED_PENDING_COUNT,
                    JPVregisteredfarmerstobefacilitatedwithanimalgrounding: this.districtLevelDetails[i].TOT_FACILITE,
                    Surveyed_DEAD: this.districtLevelDetails[i].DEAD_COUNT,
                    Surveyed_MIGRATED: this.districtLevelDetails[i].MIGRATED_COUNT,
           }; 

            this.excelData.push(singleRow); 
         }
         this.excelData.push(this.totreportTotals); 
 
        
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

  btnGetDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Cheyutha Bank District Level Report ('+this.session.getdatetimeReport()+")",
      true
    );
  }

  btnGetSurveyedRegFarmersCountDetails(obj,id): void {debugger; 
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      typeid:id,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onSurveyedRegFarmersCount
    .emit(encryptedString);
  }


  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      const fileName = 'districtLevelCheyuthaBankReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAPI.districtLevelCheyuthaBankPDFReport(req);
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


  
  // btnGetDetails(obj): void {debugger;
  //   const requestData = {
  //     districtId: obj.DIST_CODE,
  //     districtName: obj.DISTRICTNAME,
  //     fromDate: this.fromDate,
  //     toDate: this.toDate,
  //   };

  //   const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  //   this.onDistrictChange.emit(encryptedString);
  // }

  btnGetBeneficiaryDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRouteChange.emit(encryptedString);
  }


  btnGetvillageDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVILLAGECOUNTChange.emit(encryptedString);
  }

  
  btnGetTOTALFARMERREGISDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onJpvRegisteredfarmerChange.emit(encryptedString);
  }

  btnGetcheybenregjpvfarmerSDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  oncheybeneRegjpvfarmerChange
    .emit(encryptedString);
  }

  btnGetcheybenregjpvfarmerSgroundanimalDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  oncheybeneRegjpvfarmergroundedanimalChange
    .emit(encryptedString);
  }
  
  btnGetNoncheybenregjpvfarmerSgroundanimalDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  oncheybeneRegNonjpvfarmergroundedanimalChange
    .emit(encryptedString);
  }
  
  btnGetTotalCheyuthaBeneficiariesGroundedwithanimalsDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onTotalCheyuthaBeneficiariesGroundedwithanimalsChange
    .emit(encryptedString);
  }
   
  btnGetjpvRegFaranimalgroundingDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvRegFaranimalgroundingChange
    .emit(encryptedString);
  }


  btnGetStatestreenidhiDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvStatestreenidhiChange
    .emit(encryptedString);
  }
  btnGetStateunnathiDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvStateunnathiChange
    .emit(encryptedString);
  }

  
  btnGetbanklinkDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onbanklinkChange
    .emit(encryptedString);
  }

   

 btnGettotalnoofanimalsDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICT_NAME,
    mandalId: obj.MANDAL_CODE,
    mandalName: obj.MANDAL_NAME,
    fromDate: this.fromDate,
    toDate: this.toDate,
  };

  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  ontotalnoofanimalsChange
  .emit(encryptedString);
}

btnGetsurveyedwithanimalsDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICT_NAME,
    mandalId: obj.MANDAL_CODE,
    mandalName: obj.MANDAL_NAME,
    fromDate: this.fromDate,
    toDate: this.toDate,
  };

  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onsurveyedwithanimalsChange
  .emit(encryptedString);
}

btnGetsurveyedwithoutanimalsDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICT_NAME,
    mandalId: obj.MANDAL_CODE,
    mandalName: obj.MANDAL_NAME,
    fromDate: this.fromDate,
    toDate: this.toDate,
  };

  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onsurveyedwithoutanimalsChange
  .emit(encryptedString);
}

btnSurvyednonRegisteredBeneficiariesDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICT_NAME,
    mandalId: obj.MANDAL_CODE,
    mandalName: obj.MANDAL_NAME,
    fromDate: this.fromDate,
    toDate: this.toDate,
  };

  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onSurvyednonRegisteredBeneficiariesChange
  .emit(encryptedString);
}



btnnonsurveyedDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICT_NAME,
    mandalId: obj.MANDAL_CODE,
    mandalName: obj.MANDAL_NAME,
    fromDate: this.fromDate,
    toDate: this.toDate,
  };

  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onnonsurveyedChange
  .emit(encryptedString);
}



}
