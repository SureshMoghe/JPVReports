import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { BankerService } from 'src/app/bankerModule/services/banker.service'; 
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service'; 

@Component({ 
  selector: 'app-cheyutha-districts-reports',   
  templateUrl: './cheyutha-districts-reports.component.html', 
  styleUrls: ['./cheyutha-districts-reports.component.css'] 
})
export class CheyuthaDistrictsReportsComponent implements OnInit, OnDestroy, AfterViewInit {   
  // tslint:disable-next-line: no-output-on-prefix
  @Input() fromDate: any;
  @Input() toDate: any;
  @Output() onDistrictChange = new EventEmitter<string>();  
  @Output() onRouteChange = new EventEmitter<string>(); 
  @Output() onJpvRegisteredfarmerChange = new EventEmitter<string>(); 
  @Output() onVILLAGECOUNTChange = new EventEmitter<string>();   
  @Output() oncheybeneRegjpvfarmerChange = new EventEmitter<string>(); 
  @Output() oncheybeneRegjpvfarmergroundedanimalChange = new EventEmitter<string>(); 
  @Output() oncheybeneRegNonjpvfarmergroundedanimalChange = new EventEmitter<string>(); 
  @Output() onTotalCheyuthaBeneficiariesGroundedwithanimalsChange = new EventEmitter<string>();  
  @Output() onjpvRegFaranimalgroundingChange = new EventEmitter<string>();
  @Output() onjpvStatestreenidhiChange = new EventEmitter<string>();
  @Output()   onjpvStatesunnathiChange  = new EventEmitter<string>();
  @Output()   onbanklinkChange  = new EventEmitter<string>();
  @Output()   ontotalnoofanimalsChange  = new EventEmitter<string>();
  @Output()   onsurveyedwithanimalsChange  = new EventEmitter<string>();  
  @Output()   onsurveyedwithoutanimalsChange  = new EventEmitter<string>();
  @Output()   onSurvyednonRegisteredBeneficiariesChange  = new EventEmitter<string>();
  @Output()   onnonsurveyedChange  = new EventEmitter<string>();  
  @Output()   onSurveyedRegFarmersCount  = new EventEmitter<string>(); 

  stateLevelDetails = [];
reportname:any; 
  reportTotals = {
    // S_NO: '-',
    // DISTRICT: 'TOTAL',
    // TOTAL_APPLICATION: 0,
    // TO_BE_VERIFIED: 0,
    // APPROVED: 0,
    // REJECTED: 0,
    type:0,    
    stateid:0,
    districtid:0,
    villagecnt:0,
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
              tt_JPV_FARM_GROUNDED:0,
              tt_MANDAL_COUNT:0,
              tt_VILLAGE_COUNT:0,
              tt_FARMER_REGIS:0,
              tt_CHEYUTHA_REGIS:0,
              tt_Stree_Nidhi_Beneficiaries:0,
              tt_Unnathi_Beneficiaries :0,
              tt_Bank_Linkage_Beneficiaries:0, 
              tt_Total_Beneficiaries:0,
              tt_total_no_animals:0,
              tt_CHEY_BEN_GRD_ANIMALS:0,
             // tt_DIRECT_REG_COUNT:0,
                    
              tt_SURVEDYED_NON_REG_BEN:0,           
             
              tt_Surveywithanimals:0, 
              tt_SUR_ANIMALS_APP_COUNT:0,
              
              tt_SUR_ANIMALS_REJ_COUNT:0,
              tt_SUR_ANIMALS_PEND_COUNT:0,
              tt_Surveywithoutanimals:0,  
              tt_SURVEYED_PENDING_COUNT:0,           
              tt_FACILITE:0,   
             // tt_BEN_COUNT:0,
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
    private session: SessionService,
    private farmerModuleAPI: StateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      // this.reportTotals = {
      //   type:1,    
      //   stateid:0,
      //   districtid:0,
      //   mandalid:0,
      //   rbkid:0,
      //   beneficiaryid:0,
      //   beneficiarystatusid:0,
      //   uniqueid:this.session.uniqueId,
      //   role:this.session.desigId,
      //   insertedbyid:this.session.userName

        
      // };

     this.totreportTotals = {
      tt_JPV_FARMERS:0,     
      tt_JPV_FARM_GROUNDED:0,
      tt_MANDAL_COUNT:0,
      tt_VILLAGE_COUNT:0,
      tt_FARMER_REGIS:0,
      tt_CHEYUTHA_REGIS:0,
      tt_Stree_Nidhi_Beneficiaries:0,
      tt_Unnathi_Beneficiaries :0,
      tt_Bank_Linkage_Beneficiaries:0, 
      tt_Total_Beneficiaries:0,
      tt_total_no_animals:0,
      tt_CHEY_BEN_GRD_ANIMALS:0,
     // tt_DIRECT_REG_COUNT:0,
        
               
      tt_SURVEDYED_NON_REG_BEN:0,
      tt_Surveywithanimals:0,
      tt_SUR_ANIMALS_APP_COUNT:0,
              
              tt_SUR_ANIMALS_REJ_COUNT:0,
              tt_SUR_ANIMALS_PEND_COUNT:0,
      tt_Surveywithoutanimals:0,   
      tt_SURVEYED_PENDING_COUNT:0,          
      tt_FACILITE:0,   
     // tt_BEN_COUNT:0,
      tt_DEAD_COUNT:0,
              tt_MIGRATED_COUNT:0,
     
        };

      const req = {
        type:'112',
        fromDate: this.fromDate,
        toDate: this.toDate,
        
      };
      this.spinner.show();debugger;
      //const res = await this.bankAPI.cheyuthaList(this.reportTotals);
      const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
     // const res = await this.bankAPI.farmerWiseAbstractReportphase(req);
      debugger;
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;

         
        this.totreportTotals = {
          tt_JPV_FARMERS:0,     
          tt_JPV_FARM_GROUNDED:0,
          tt_MANDAL_COUNT:0,
          tt_VILLAGE_COUNT:0,
          tt_FARMER_REGIS:0,
          tt_CHEYUTHA_REGIS:0,
          tt_Stree_Nidhi_Beneficiaries:0,
          tt_Unnathi_Beneficiaries :0,
          tt_Bank_Linkage_Beneficiaries:0, 
          tt_Total_Beneficiaries:0,
          tt_total_no_animals:0,
          tt_CHEY_BEN_GRD_ANIMALS:0,
        //  tt_DIRECT_REG_COUNT:0, 
          
          tt_SURVEDYED_NON_REG_BEN:0,      
          tt_Surveywithanimals:0,
          tt_SUR_ANIMALS_APP_COUNT:0,              
          tt_SUR_ANIMALS_REJ_COUNT:0,
              tt_SUR_ANIMALS_PEND_COUNT:0,
          tt_Surveywithoutanimals:0,   
          tt_SURVEYED_PENDING_COUNT:0,          
          tt_FACILITE:0,    
         // tt_BEN_COUNT:0, 
          tt_DEAD_COUNT:0,
              tt_MIGRATED_COUNT:0,
          };

          

            //  Stree_Nidhi_Beneficiaries 
            //  Unnathi_Beneficiaries 
            //  Bank_Linkage_Beneficiaries 
            //  Total_Beneficiaries 

          

       //  this.districtName=this.stateLevelDetails[0].districtname;
         for (let i = 0; i < this.stateLevelDetails.length; i++) {

          this.totreportTotals.tt_JPV_FARMERS =null;
          this.totreportTotals.tt_JPV_FARM_GROUNDED=null;
//   // tslint:disable-next-line: radix
this.totreportTotals.tt_VILLAGE_COUNT += parseInt(this.stateLevelDetails[i].VILLAGE_COUNT);

          //     tslint:disable-next-line: radix
          this.totreportTotals.tt_FARMER_REGIS += parseInt( this.stateLevelDetails[i].TOTAL_FARMER_REGIS );
          //     tslint:disable-next-line: radix
          this.totreportTotals.tt_CHEYUTHA_REGIS += parseInt(this.stateLevelDetails[i].TOTAL_CHEYUTHA_REGIS);
          this.totreportTotals.tt_Stree_Nidhi_Beneficiaries += parseInt( this.stateLevelDetails[i].STREENIDHI_BEN_COUNT );
          this.totreportTotals.tt_Unnathi_Beneficiaries += parseInt( this.stateLevelDetails[i].UNNATHI_BEN_COUNT );
          this.totreportTotals.tt_Bank_Linkage_Beneficiaries+= parseInt( this.stateLevelDetails[i].BANK_LINKAGE_BEN_COUNT );
          this.totreportTotals.tt_Total_Beneficiaries+= parseInt( this.stateLevelDetails[i].TOTAL_BEN_COUNT );
          //     // tslint:disable-next-line: radix
          //     this.totreportTotals.tt_JPV_FARMERS += parseInt( this.stateLevelDetails[i].TOTAL_JPV_FARMERS );

//     // tslint:disable-next-line: radix
          this.totreportTotals.tt_total_no_animals += parseInt( this.stateLevelDetails[i].TOTAL_NO_ANIMALS );
          

          //     // tslint:disable-next-line: radix  
               this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.stateLevelDetails[i].REG_BEN_COUNT );
          //    tslint:disable-next-line: radix
      //    this.totreportTotals.tt_BEN_COUNT += parseInt( this.stateLevelDetails[i].BEN_COUNT );
          //     tslint:disable-next-line: radix
          //this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.stateLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS );
          //     tslint:disable-next-line: radix
          this.totreportTotals.tt_FACILITE += parseInt( this.stateLevelDetails[i].TOT_FACILITE );

          this.totreportTotals.tt_Surveywithanimals += parseInt( this.stateLevelDetails[i].SUR_WITH_ANIMALS_COUNT );
        
          this.totreportTotals.tt_SUR_ANIMALS_APP_COUNT += parseInt( this.stateLevelDetails[i].SUR_ANIMALS_APP_COUNT );
         // this.totreportTotals.tt_DIRECT_REG_COUNT += parseInt( this.stateLevelDetails[i].DIRECT_REG_COUNT );
          this.totreportTotals.tt_SUR_ANIMALS_REJ_COUNT += parseInt( this.stateLevelDetails[i].SUR_ANIMALS_REJ_COUNT );
          this.totreportTotals.tt_SUR_ANIMALS_PEND_COUNT += parseInt( this.stateLevelDetails[i].SUR_ANIMALS_PEND_COUNT );
        
        
        
          this.totreportTotals.tt_Surveywithoutanimals += parseInt( this.stateLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT );
           this.totreportTotals.tt_MANDAL_COUNT+=parseInt( this.stateLevelDetails[i].MANDAL_COUNT);
            this.totreportTotals.tt_SURVEDYED_NON_REG_BEN+=parseInt( this.stateLevelDetails[i].SURVEYED_COUNT);
           this.totreportTotals.tt_SURVEYED_PENDING_COUNT +=parseInt( this.stateLevelDetails[i].SURVEYED_PENDING_COUNT);
          
           this.totreportTotals.tt_DEAD_COUNT +=parseInt( this.stateLevelDetails[i].DEAD_COUNT);
           this.totreportTotals.tt_MIGRATED_COUNT +=parseInt( this.stateLevelDetails[i].MIGRATED_COUNT);
          

           let singleRow = {
              S_NO: i + 1,
                DISTRICTNAME: this.stateLevelDetails[i].DISTRICTNAME,
                NoofMANDALS:this.stateLevelDetails[i].MANDAL_COUNT,
                NoofVILLAGES: this.stateLevelDetails[i].VILLAGE_COUNT,
                JPVRegisteredFarmers: this.stateLevelDetails[i].TOTAL_FARMER_REGIS,
                Cheyutha_Beneficiaries: this.stateLevelDetails[i].TOTAL_CHEYUTHA_REGIS, 
                StreeNidhiBeneficiaries : this.stateLevelDetails[i].STREENIDHI_BEN_COUNT,
                UnnathiBeneficiaries : this.stateLevelDetails[i].UNNATHI_BEN_COUNT,
                BankLinkage_Beneficiaries: this.stateLevelDetails[i].BANK_LINKAGE_BEN_COUNT, 
                TotalBeneficiaries : this.stateLevelDetails[i].TOTAL_BEN_COUNT,
                //  TOTAL_JPV_FARMERS: this.stateLevelDetails[i].TOTAL_JPV_FARMERS,
                //  TOT_CHEY_BEN_GRD_ANIMALS: this.stateLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS,
                TotalNoofAnimals:this.stateLevelDetails[i].TOTAL_NO_ANIMALS,
                JPVregisteredfarmersgroundedwithanimals: this.stateLevelDetails[i].REG_BEN_COUNT,               
               // Direct_Registred_Farmers:this.stateLevelDetails[i].DIRECT_REG_COUNT,
                TotalSurveyedBeneficiaries:this.stateLevelDetails[i].SURVEYED_COUNT,         
                SurveyedwithAnimals:this.stateLevelDetails[i].SUR_WITH_ANIMALS_COUNT,
                Surveyed_Animals_Approved:this.stateLevelDetails[i].SUR_ANIMALS_APP_COUNT,                
                Surveyed_Animals_Rejected:this.stateLevelDetails[i].SUR_ANIMALS_REJ_COUNT,
                Surveyed_Animals_Approval_Pending:this.stateLevelDetails[i].SUR_ANIMALS_PEND_COUNT,               
                SurveyedwithoutAnimals:this.stateLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT,
                Not_Surveyed_count:this.stateLevelDetails[i].SURVEYED_PENDING_COUNT,               
               // NonJPVregisteredfarmersgroundedwithanimals: this.stateLevelDetails[i].BEN_COUNT,
                JPVregisteredfarmerstobefacilitatedwithanimal_grounding: this.stateLevelDetails[i].TOT_FACILITE,
                Surveyed_DEAD: this.stateLevelDetails[i].DEAD_COUNT,
                Surveyed_MIGRATED: this.stateLevelDetails[i].MIGRATED_COUNT,
           

// DISTRICTNAME
// VILLAGE_COUNT
// TOTAL_FARMER_REGIS
// TOTAL_CHEYUTHA_REGIS
// STREENIDHI_BEN_COUNT
// UNNATHI_BEN_COUNT
// BANK_LINKAGE_BEN_COUNT
// TOTAL_BEN_COUNT  
// TOTAL_JPV_FARM_GROUNDED
// NON_REG_CHYUTH_BEN
// TOT_FACILITE


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
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString); 
  }

  

  btnGetVILLAGECOUNTDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVILLAGECOUNTChange.emit(encryptedString);
  }

  btnGetBeneficiaryDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRouteChange.emit(encryptedString);
  }
  
  btnGetTOTALFARMERREGISDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onJpvRegisteredfarmerChange.emit(encryptedString);
  }

  btnGetcheybenregjpvfarmerSDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
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
      districtName: obj.DISTRICTNAME,
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
      districtName: obj.DISTRICTNAME,
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
      districtName: obj.DISTRICTNAME,
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
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate, 
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvRegFaranimalgroundingChange
    .emit(encryptedString);
  }



  btnGetSurveyedRegFarmersCountDetails(obj,id): void {debugger;

    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate, 
      typeid:id,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSurveyedRegFarmersCount.emit(encryptedString);
  }





  


  btnGetjpvStatestreenidhiDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate, 
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvStatestreenidhiChange
    .emit(encryptedString);
  }

  btnGetunnathiDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      fromDate: this.fromDate,
      toDate: this.toDate, 
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvStatesunnathiChange
    .emit(encryptedString);
  }
  



btnGetbanklinkDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICTNAME,
    fromDate: this.fromDate,
    toDate: this.toDate, 
  };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onbanklinkChange
  .emit(encryptedString);
}



btnGettotalnoofanimalDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICTNAME,
    fromDate: this.fromDate,
    toDate: this.toDate, 
  };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  ontotalnoofanimalsChange
  .emit(encryptedString);
}



btnGetSURVEYEDWITHANIMALDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICTNAME,
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
    districtName: obj.DISTRICTNAME,
    fromDate: this.fromDate,
    toDate: this.toDate, 
  };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onsurveyedwithoutanimalsChange
  .emit(encryptedString);
}



btnGetSurvyednonRegisteredBeneficiariesDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICTNAME,
    fromDate: this.fromDate,
    toDate: this.toDate, 
  };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onSurvyednonRegisteredBeneficiariesChange
  .emit(encryptedString);
}


btnGetnonsurveyedDetails(obj): void {debugger;
  const requestData = {
    districtId: obj.DIST_CODE,
    districtName: obj.DISTRICTNAME,
    fromDate: this.fromDate,
    toDate: this.toDate, 
  };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.  onnonsurveyedChange
  .emit(encryptedString);
}



  btnExcel(): void { 
   
   // this.reportname='Cheyutha State Level Report ('+this.session.getdatetimeReport()+")";
    //+(this.session.getTodayDateString().replace('-','_')).toString().replace('-','_')+"_"+this.session.getToDate().getHours()+"_"+this.session.getToDate().getMinutes()+"_"+this.session.getToDate().getSeconds() +")";
  
  debugger;
    this.utils.JSONToCSVConvertor(
      this.excelData,  
       'Cheyutha State Level Report ('+this.session.getdatetimeReport()+")",
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      // const fileName = 'stateLevelCheyuthaBankReport';
      // let basePDF = '';
      // this.spinner.show();
      // const res = await this.bankAPI.stateLevelCheyuthaBankPDFReport();
      // if (res.success) {
      //   basePDF = res.result;
      //   this.utils.downloadPdfFile(basePDF, fileName);
      // } else {
      //   this.toast.info(res.message);
      // }
      // this.spinner.hide();
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
