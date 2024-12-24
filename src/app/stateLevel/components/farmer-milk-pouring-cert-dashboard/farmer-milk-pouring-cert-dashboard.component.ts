 
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { promise } from 'protractor';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-farmer-milk-pouring-cert-dashboard',
  templateUrl: './farmer-milk-pouring-cert-dashboard.component.html',
  styleUrls: ['./farmer-milk-pouring-cert-dashboard.component.css'],
}) 

export class FarmerMilkPouringCertDashboardComponent
  implements OnInit, OnDestroy, AfterViewInit
{

  @Input() districtId:any;
  dashboardCounts = {
    Approve: '0',
    Reject: '0',
    Pending: '0',
  };
  showeditPopup=false;
  headingText = '';
  requestType = '';
  farmerCertList = [];
  status = '';
  rejectedReasonList = [];
  rejectedReason = '';
  uidNum = '';
  bankImage = '';
  MILK_IN_LITRES :''

  personDetails = {
    ACCOUNT_NUMBER: '',
    BANKACCNO_UPD: '',
    BANK_BRANCH: '',
    BANK_NAME: '',
    BANK_PINCODE: '',
    DISTRICT: '',
    DIST_CODE: '',
    FARMER_CODE: '',
    FARMER_NAME: '',
    IFSC_CODE: '',
    MANDAL_CODE: '',
    MANDAL_NAME: '',
    MICR_CODE: '',
    MOBILE_NUMBER: '',
    PAN_CARD: '',
    TOTAL_TIMES_UPDATED: '',
    PASSBOOK_IMG: null,
    NO_OF_MILCH_ANIMALS: '',
    RBK_CODE: '',
    RBK_NAME: '',
    UID_NUM: '',
    VILLAGE_CODE: '',
    VILLAGE_NAME: '',
    SOCIETY_CODE: '',
    SOCIETY_NAME: '',
    MILK_IN_LITRES:'',
    NO_OF_DAYS:'',
    LEVEL_STATUS:'',
    DOA:'',
    AR_NAME:'',
    REG_UPDATED_ON:''
    
  };

  requestraised=false;
  downloadcert=false;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private farmerAPI: StateService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
    this.loadRejectedReasons();
  }

  async loadDashboard(): Promise<void> {
    try {
      const req = {
        type:'5',         
        districtId: this.session.districtId,
        levelId: this.session.desigId, //204
        uniqueId:this.session.uniqueId,
        insertedBy:this.session.userName,
        updatedBy:this.session.userName,
      };
      this.spinner.show(); debugger;
      const res = await this.farmerAPI.districtLevelDashboardCounts(req);     //stateLevelDashboardCounts
      this.spinner.hide();
      if (res.success) {
        this.dashboardCounts = res.result[0];
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  
  async btnCertificateDownload(obj): Promise<void> {
    try {
      const req = {
        farmerId: obj.FARMER_CODE,
        insertedBy: this.session.userName,

        levelId: this.session.desigId,
        uniqueId:this.session.uniqueId,
        
        updatedBy:this.session.userName,

      };
      const fileName = 'farmerMilkPouringCertificate';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerAPI.milkPouringCertificate(req);
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

  async btnFarmerDashboardDetails(obj): Promise<void> {
    try {
      this.farmerCertList = [];
      this.requestType = obj;
debugger;
      // if (this.requestType === '0' && this.dashboardCounts.Pending === '0') {
      //   return;
      // }
      // if (this.requestType === '1' && this.dashboardCounts.Approve === '0') {
      //   return;
      // }
      // if (this.requestType === '2' && this.dashboardCounts.Reject === '0') {
      //   return;
      // }

      this.spinner.show();
      let res: any;
      const req = {
        type:'7',
        status: '0',
        levelId: this.session.desigId,
        uniqueId:this.session.uniqueId,
        insertedBy:this.session.userName,
        updatedBy:this.session.userName,
        districtId:this.session.districtId,

      };debugger;
      // if (this.requestType === '0' || this.requestType === '1') {
      //   req.status = '5';//'8';
      //   this.headingText = 'REQUEST RAISED';
      //   this.requestraised=true;
      //   this.downloadcert=false;
      //   res = await this.farmerAPI.districtLevelDashboardCounts(req);//farmerAPI.stateLevelFarmerCertList(req);
      // } else 
      if (this.requestType === '1' || this.requestType === '0') {
        if(this.requestType === '0')
        {
          this.headingText = 'REQUEST RAISED';
        }
        else{
          this.headingText = 'CERTIFICATE DOWNLOAD';
        }
       
        req.status = '4';//'7';
        this.requestraised=false;
        this.downloadcert=true;
        res = await this.farmerAPI.districtLevelDashboardCounts(req);  //stateLevelFarmerCertList
      } else if (this.requestType === '2') {
        this.headingText = 'REJECTED LIST';
        req.status = '10';//'9';
        res = await this.farmerAPI.districtLevelDashboardCounts(req);  //stateLevelFarmerCertList
      } 
      this.spinner.hide();

      if (res.success) {
        this.farmerCertList = res.result.map((obj: any) => ({
          ...obj,
          STATUS: '',
          REJECTED_REASON: obj.REJECTED_REASON || '',
        }));
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async loadRejectedReasons(): Promise<void> {
    try {
      this.spinner.show();
      const req = {
        type:'10',
        levelId: this.session.desigId,
        uniqueId:this.session.uniqueId,
        insertedBy:this.session.userName,
        updatedBy:this.session.userName,

      };
      const res = await this.farmerAPI.districtLevelDashboardCounts(req);  //rejectedReasonsList
      this.spinner.hide();
      if (res.success) {
        this.rejectedReasonList = res.result;
      } else {
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnVerify(obj): Promise<void> {
    try {
      if (this.utils.isEmpty(obj.STATUS)) {
        this.toast.warning('Please select Action Taken');
        return;
      }
      const req = {
        type:'4',
        status: obj.STATUS,
        updatedBy: this.session.userName,
        uniqueId: obj.UNIQUE_ID,
        rejectedReason: obj.REJECTED_REASON,

        levelId: this.session.desigId,
       // uniqueId:this.session.uniqueId,
        insertedBy:this.session.userName,
       // updatedBy:this.session.userName,

      };
      this.spinner.show();
      const response = await this.farmerAPI.districtLevelDashboardCounts(req);//stateLevelCertUpdate
      if (response.success) {
        alert(response.message);
        window.location.reload();
      } else {
        this.spinner.hide();
        this.toast.info(response.message);
      }
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
      dtInstance.clear().draw(); // Add this  line to clear all rows..
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }



  async loadBankImage(imagePath: any): Promise<void> {
    try {
      this.spinner.show();
      const response = await this.utils.DMSFileDownload(imagePath);
      if (response.success) {
        this.bankImage = (
          this.sanitizer.bypassSecurityTrustResourceUrl(response.result) as any
        ).changingThisBreaksApplicationSecurity;
      } else {
        this.toast.info(response.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }




  farmer:any;
  async btnGetDetails(obj): Promise<void>{
        this.showeditPopup=true;
        this.farmer= obj.FARMER_CODE;
      try{ 
      const req = {
        accountNo: this.farmer,

        levelId: this.session.desigId,
        uniqueId:this.session.uniqueId,
        insertedBy:this.session.userName,
        updatedBy:this.session.userName,

        
      };
      this.spinner.show();
      
      const response = await this.farmerAPI.regFarmerDetailsByUid(req);
      if (response.success) {
        this.personDetails = response.result[0];
        if (
          this.personDetails.PASSBOOK_IMG !== null &&
          this.personDetails.PASSBOOK_IMG !== undefined &&
          this.personDetails.PASSBOOK_IMG !== ''
        ) {
          this.loadBankImage(this.personDetails.PASSBOOK_IMG);
        }
      } else {
        this.toast.info(response.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }

  }

  async onClear(): Promise<void> {
    try { 
    this.showeditPopup = false;  
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
}

