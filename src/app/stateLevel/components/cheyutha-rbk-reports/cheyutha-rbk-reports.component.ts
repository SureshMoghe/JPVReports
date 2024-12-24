import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  selector: 'app-cheyutha-rbk-reports',
  templateUrl: './cheyutha-rbk-reports.component.html',
  styleUrls: ['./cheyutha-rbk-reports.component.css'] 
})
export class CheyuthaRbkReportsComponent    implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();

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
  @Output() onnonsurveyedChange = new EventEmitter<string>();
  @Output()   onSurveyedRegFarmersCount  = new EventEmitter<string>(); 

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any; 
  @Input() rbkid: any;
  @Input() rbkName: any; 
  @Input() fromDate:any;
  @Input() toDate:any;
  
  mandalLevelDetails = [];
  totcheyuthalist:any = [];
  CheyuthaBeneficiariesdiv=false;
  Rbkdiv=true;
  reportTotals = { 
    S_NO: '-',
    RBK_NAME: 'TOTAL',
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
tt_villagecnt:0,
tt_FARMER_REGIS:0,
tt_CHEYUTHA_REGIS:0,  
tt_Stree_Nidhi_Beneficiaries:0,
tt_Unnathi_Beneficiaries :0,
tt_Bank_Linkage_Beneficiaries:0, 
tt_Total_Beneficiaries:0,
tt_total_no_animals:0,  
tt_JPV_FARM_GROUNDED:0,
//tt_DIRECT_REG_COUNT:0,
//tt_BEN_COUNT:0,
tt_SURVEYED_COUNT:0,
tt_SUR_WITH_ANIMALS_COUNT:0,

tt_SUR_ANIMALS_APP_COUNT:0,
          tt_SUR_ANIMALS_REJ_COUNT:0,
          tt_SUR_ANIMALS_PEND_COUNT :0,

tt_SUR_WITH_OUT_ANIMALS_COUNT:0,

tt_SURVEYED_PENDING_COUNT:0,tt_FACILITE:0,
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

  ngOnInit(): void {
    // if(this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  ngOnChanges(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport1(): Promise<void> {
    try {
      this.mandalLevelDetails = [];
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
      };
      this.spinner.show();
      const res = await this.bankAPI.mandalLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          RBK_NAME: 'TOTAL',
          TOTAL_APPLICATION: 0,
          TO_BE_VERIFIED: 0,
          APPROVED: 0,
          REJECTED: 0,
        };
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPLICATION += parseInt(
            this.mandalLevelDetails[i].TOTAL_APPLICATION
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TO_BE_VERIFIED += parseInt(
            this.mandalLevelDetails[i].TO_BE_VERIFIED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.APPROVED += parseInt(
            this.mandalLevelDetails[i].APPROVED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REJECTED += parseInt(
            this.mandalLevelDetails[i].REJECTED
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mandalLevelDetails[i].SECRETARIAT_NAME,
            TOTAL_APPLICATION: this.mandalLevelDetails[i].TOTAL_APPLICATION,
            TO_BE_VERIFIED: this.mandalLevelDetails[i].TO_BE_VERIFIED,
            APPROVED: this.mandalLevelDetails[i].APPROVED,
            REJECTED: this.mandalLevelDetails[i].REJECTED,
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
      this.mandalLevelDetails = [];
      this. totreportTotals = {
        tt_JPV_FARMERS:0,
        tt_CHEY_BEN_GRD_ANIMALS:0, 
        tt_villagecnt:0,
        tt_FARMER_REGIS:0,
        tt_CHEYUTHA_REGIS:0,  
        tt_Stree_Nidhi_Beneficiaries:0,
        tt_Unnathi_Beneficiaries :0,
        tt_Bank_Linkage_Beneficiaries:0, 
        tt_Total_Beneficiaries:0,
        tt_total_no_animals:0,  
        tt_JPV_FARM_GROUNDED:0,
       // tt_DIRECT_REG_COUNT:0,
      //  tt_BEN_COUNT:0,
        tt_SURVEYED_COUNT:0,
        tt_SUR_WITH_ANIMALS_COUNT:0,

        tt_SUR_ANIMALS_APP_COUNT:0,
          tt_SUR_ANIMALS_REJ_COUNT:0,
          tt_SUR_ANIMALS_PEND_COUNT :0,

        tt_SUR_WITH_OUT_ANIMALS_COUNT:0,
       
        tt_SURVEYED_PENDING_COUNT:0,
        tt_FACILITE:0,
        tt_DEAD_COUNT:0,
        tt_MIGRATED_COUNT:0,
    };
      
      const req = {
        type:'133',
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        cnt1:this.mandalId
      };

      this.spinner.show();debugger;
      const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
     // const res = await this.bankAPI.cheyuthaList(this.reportTotals1);
     debugger;
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
         this.districtName=this.mandalLevelDetails[0].DISTRICTNAME;
         for (let i = 0; i < this.mandalLevelDetails.length; i++) {

                    this.totreportTotals.tt_JPV_FARMERS =null; 
                    this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS=null;          
                    //   // tslint:disable-next-line: radix
                    this.totreportTotals.tt_villagecnt += parseInt(this.mandalLevelDetails[i].VILLAGE_COUNT);         
                    //   // tslint:disable-next-line: radix
                    this.totreportTotals.tt_CHEYUTHA_REGIS += parseInt(this.mandalLevelDetails[i].TOTAL_CHEYUTHA_REGIS);
                    //   // tslint:disable-next-line: radix
                    this.totreportTotals.tt_FARMER_REGIS += parseInt( this.mandalLevelDetails[i].TOTAL_FARMER_REGIS ); 
                    this.totreportTotals.tt_Stree_Nidhi_Beneficiaries += parseInt( this.mandalLevelDetails[i].STREENIDHI_BEN_COUNT );
                    this.totreportTotals.tt_Unnathi_Beneficiaries += parseInt( this.mandalLevelDetails[i].UNNATHI_BEN_COUNT );
                    this.totreportTotals.tt_Bank_Linkage_Beneficiaries+= parseInt( this.mandalLevelDetails[i].BANK_LINKAGE_BEN_COUNT );
                    this.totreportTotals.tt_Total_Beneficiaries+= parseInt( this.mandalLevelDetails[i].TOTAL_BEN_COUNT );
                    //     // tslint:disable-next-line: radix
                    //     this.totreportTotals.tt_JPV_FARMERS += parseInt( this.stateLevelDetails[i].TOTAL_JPV_FARMERS );  
                    // tslint:disable-next-line: radix
                    this.totreportTotals.tt_total_no_animals += parseInt( this.mandalLevelDetails[i].TOTAL_NO_ANIMALS );
                    //   // tslint:disable-next-line: radix
                    //    this.totreportTotals.tt_JPV_FARMERS += parseInt( this.mandalLevelDetails[i].TOTAL_JPV_FARMERS );
                   
                    
                    //   // tslint:disable-next-line: radix
                    this.totreportTotals.tt_JPV_FARM_GROUNDED += parseInt( this.mandalLevelDetails[i].TOTAL_JPV_FARM_GROUNDED );
                   // this.totreportTotals.tt_DIRECT_REG_COUNT+= parseInt( this.mandalLevelDetails[i].DIRECT_REG_COUNT );
                    //    tslint:disable-next-line: radix
                   // this.totreportTotals.tt_BEN_COUNT += parseInt( this.mandalLevelDetails[i].BEN_COUNT );
                    //   // tslint:disable-next-line: radix
                    //      this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.mandalLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS );
                    //   // tslint:disable-next-line: radix
                    this.totreportTotals.tt_SUR_WITH_OUT_ANIMALS_COUNT += parseInt( this.mandalLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT );
                    this.totreportTotals.tt_SURVEYED_COUNT += parseInt( this.mandalLevelDetails[i].SURVEYED_COUNT );
                    this.totreportTotals.tt_SUR_WITH_ANIMALS_COUNT += parseInt( this.mandalLevelDetails[i].SUR_WITH_ANIMALS_COUNT );

                    
                    this.totreportTotals.tt_SUR_ANIMALS_APP_COUNT+= parseInt(this.mandalLevelDetails[i].SUR_ANIMALS_APP_COUNT ); 
                    this.totreportTotals.tt_SUR_ANIMALS_REJ_COUNT+= parseInt(this.mandalLevelDetails[i].SUR_ANIMALS_REJ_COUNT ); 
                    this.totreportTotals.tt_SUR_ANIMALS_PEND_COUNT += parseInt(this.mandalLevelDetails[i].SUR_ANIMALS_PEND_COUNT ); 


                   
                    this.totreportTotals.tt_SURVEYED_PENDING_COUNT += parseInt( this.mandalLevelDetails[i].SURVEYED_PENDING_COUNT );
                    this.totreportTotals.tt_FACILITE += parseInt( this.mandalLevelDetails[i].TOT_FACILITE );
                    this.totreportTotals.tt_DEAD_COUNT +=parseInt( this.mandalLevelDetails[i].DEAD_COUNT);
                    this.totreportTotals.tt_MIGRATED_COUNT +=parseInt( this.mandalLevelDetails[i].MIGRATED_COUNT);
       
                    let singleRow = { 
                            S_NO: i + 1,
                            RBK_NAME: this.mandalLevelDetails[i].RBK_NAME, 
                            NOOF_VILLAGES: this.mandalLevelDetails[i].VILLAGE_COUNT,
                            JPV_Registered_Farmers: this.mandalLevelDetails[i].TOTAL_FARMER_REGIS,
                            Cheyutha: this.mandalLevelDetails[i].TOTAL_CHEYUTHA_REGIS,
                            Stree_Nidhi : this.mandalLevelDetails[i].STREENIDHI_BEN_COUNT,
                            Unnathi : this.mandalLevelDetails[i].UNNATHI_BEN_COUNT,
                            Bank_Linkage: this.mandalLevelDetails[i].BANK_LINKAGE_BEN_COUNT, 
                            Total : this.mandalLevelDetails[i].TOTAL_BEN_COUNT, 
                            Total_Noof_Animals:this.mandalLevelDetails[i].TOTAL_NO_ANIMALS,
                            //  TOTAL_JPV_FARMERS: this.mandalLevelDetails[i].TOTAL_JPV_FARMERS,
                            //  TOT_CHEY_BEN_GRD_ANIMALS: this.mandalLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS,
                            JPV_Registered_Beneficiaries: this.mandalLevelDetails[i].TOTAL_JPV_FARM_GROUNDED,
                           // Direct_Registered_Farmers: this.mandalLevelDetails[i].DIRECT_REG_COUNT,  
                           // Total_Beneficiaries: this.mandalLevelDetails[i].BEN_COUNT,
                            Surveyed_Beneficiaries: this.mandalLevelDetails[i].SURVEYED_COUNT,// SURVEYED_NON_REG_BEN,
                            Surveyed_with_Animals:this.mandalLevelDetails[i].SUR_WITH_ANIMALS_COUNT,
                            Surveyed_with_Animals_Approved: this.mandalLevelDetails[i].SUR_ANIMALS_APP_COUNT,
                            Surveyed_Animals_Rejected: this.mandalLevelDetails[i].SUR_ANIMALS_REJ_COUNT,
                            Surveyed_Animals_Approval_Pending: this.mandalLevelDetails[i].SUR_ANIMALS_PEND_COUNT,
                            Surveyed_without_Animals:this.mandalLevelDetails[i].SUR_WITH_OUT_ANIMALS_COUNT,  
                            Non_Surveyed: this.mandalLevelDetails[i].SURVEYED_PENDING_COUNT,
                            JPV_Registered_Farmers_tobe_Facilitated_with_Animal_Grounding: this.mandalLevelDetails[i].TOT_FACILITE,  
                            Surveyed_DEAD: this.mandalLevelDetails[i].DEAD_COUNT,
                            Surveyed_MIGRATED: this.mandalLevelDetails[i].MIGRATED_COUNT,
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

  async totcheyuthaDetails(obj):Promise<void>{

    try {
      this.totcheyuthalist = [];
       
      
      const req = {
        type:'14',
        districtId: this.districtId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        cnt1:this.mandalId,
        cnt2:obj.RBK_ID,
      };

      this.spinner.show();debugger;
      const res = await this.farmerModuleAPI.farmerWiseAbstractReportphase(req);
     // const res = await this.bankAPI.cheyuthaList(this.reportTotals1);
     debugger;
      if (res.success) {
        this.CheyuthaBeneficiariesdiv=true;
  this.Rbkdiv=false;
        this.excelData = [];
        this.totcheyuthalist = res.result;
         this.districtName=this.mandalLevelDetails[0].DISTRICTNAME;
         for (let i = 0; i < this.mandalLevelDetails.length; i++) {

 

         
        //   // tslint:disable-next-line: radix
            this.totreportTotals.tt_CHEYUTHA_REGIS += parseInt(this.mandalLevelDetails[i].TOTAL_CHEYUTHA_REGIS);
        //   // tslint:disable-next-line: radix
            this.totreportTotals.tt_FARMER_REGIS += parseInt( this.mandalLevelDetails[i].TOTAL_FARMER_REGIS );
        //   // tslint:disable-next-line: radix
            this.totreportTotals.tt_JPV_FARMERS += parseInt( this.mandalLevelDetails[i].TOTAL_JPV_FARMERS );
        //   // tslint:disable-next-line: radix
            this.totreportTotals.tt_JPV_FARM_GROUNDED += parseInt( this.mandalLevelDetails[i].TOTAL_JPV_FARM_GROUNDED );
        //    tslint:disable-next-line: radix
         //  this.totreportTotals.tt_BEN_COUNT += parseInt( this.mandalLevelDetails[i].BEN_COUNT );
        //   // tslint:disable-next-line: radix     REG_BEN_COUNT
            this.totreportTotals.tt_CHEY_BEN_GRD_ANIMALS += parseInt( this.mandalLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS );
        //   // tslint:disable-next-line: radix
            this.totreportTotals.tt_FACILITE += parseInt( this.mandalLevelDetails[i].TOT_FACILITE );

           let singleRow = { 
              S_NO: i + 1,
              RBK_NAME: this.mandalLevelDetails[i].RBK_NAME,
           TOTAL_CHEYUTHA_REGIS: this.mandalLevelDetails[i].TOTAL_CHEYUTHA_REGIS,
           TOTAL_FARMER_REGIS: this.mandalLevelDetails[i].TOTAL_FARMER_REGIS,
           TOTAL_JPV_FARMERS: this.mandalLevelDetails[i].TOTAL_JPV_FARMERS,
           TOTAL_JPV_FARM_GROUNDED: this.mandalLevelDetails[i].TOTAL_JPV_FARM_GROUNDED,
           REG_BEN_COUNT: this.mandalLevelDetails[i].REG_BEN_COUNT,
           TOT_CHEY_BEN_GRD_ANIMALS: this.mandalLevelDetails[i].TOT_CHEY_BEN_GRD_ANIMALS,
           TOT_FACILITE: this.mandalLevelDetails[i].TOT_FACILITE,
           
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

  btnGetDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
        toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
  }

  
  
 

  btnGetBeneficiaryDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRouteChange.emit(encryptedString);
  }

  btnGetSurveyedRegFarmersCountDetails(obj,id): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      typeid:id,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onSurveyedRegFarmersCount
    .emit(encryptedString);
  }



  
  btnGetVillageDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVILLAGECOUNTChange.emit(encryptedString);
  }

  
  btnGetTOTALFARMERREGISDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvRegFaranimalgroundingChange
    .emit(encryptedString);
  }


  btnGetstreenidhiDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
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
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.  onjpvStateunnathiChange
    .emit(encryptedString);
  }


  btnGetbanklinkageDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    onbanklinkChange
    .emit(encryptedString);
  }

  
  btnGettotalnoofanimalsDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    ontotalnoofanimalsChange
    .emit(encryptedString);
  }
  
  btnGetsurveyedwithanimalsDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    onsurveyedwithanimalsChange
    .emit(encryptedString);
  }

  
  btnGetsurveyedwithoutanimalsDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    onsurveyedwithoutanimalsChange
    .emit(encryptedString);
  }

  

  btnGetSurvyednonRegisteredBeneficiariesDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    onSurvyednonRegisteredBeneficiariesChange
    .emit(encryptedString);
  }

  btnGetnonsurveyedChangeDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICTNAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_ID,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.    onnonsurveyedChange
    .emit(encryptedString);
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
