import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DistrictService } from '../../services/district.service';

@Component({
  selector: 'app-farmer-milk-pouring-certificate-dashboard',
  templateUrl: './farmer-milk-pouring-certificate-dashboard.component.html',
  styleUrls: ['./farmer-milk-pouring-certificate-dashboard.component.css']
})
export class FarmerMilkPouringCertificateDashboardComponent implements OnInit,OnDestroy, AfterViewInit {

  dashboardCounts = {
    Approve: '0',
    Pending_at_higher_level: '0',
    Reject: '0',
    Pending: '0',
  };

  headingText = '';
  requestType = '';
  farmerCertList = [];
  statusList = [];
  status = '';
  rejectedReasonList = [];
  rejectedReason = '';
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  constructor(private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private farmerAPI: DistrictService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

     this.loadDashboard();
  }

  async loadDashboard(): Promise<void> {
    try {
      const req1 = {
        insertedBy: this.session.uniqueId,
        levelId: this.session.desigId,
        districtId: this.session.districtId,
        type:"5",
      };
      this.spinner.show();
      const res1 = await this.farmerAPI.districtHODashboardCounts(req1);
      this.spinner.hide();
      if (res1.success) {
        this.dashboardCounts = res1.result[0];
      } else {
        this.toast.info(res1.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnFarmerDashboardDetails(obj): Promise<void> {
    try {
      this.farmerCertList = [];
      this.requestType = obj;

      if (this.requestType === '0' && this.dashboardCounts.Pending === '0') {
        this.farmerCertList = [];
        return;
      }
      if (this.requestType === '1' && this.dashboardCounts.Approve === '0') {
        this.farmerCertList = [];
        return;
      }
      if (this.requestType === '2' && this.dashboardCounts.Reject === '0') {
        this.farmerCertList = [];
        return;
      }
      if (this.requestType === '3' && this.dashboardCounts.Pending_at_higher_level === '0') {
        this.farmerCertList = [];
        return;
      }
      

      this.spinner.show();
      let res: any;
      const req = {
        insertedBy: this.session.uniqueId,
        status: '0',
        districtId: this.session.districtId,
        type:"11",
      };
      if (this.requestType === '0') {
        req.status = '5';
        this.headingText = 'PENDING LIST';
        res = await this.farmerAPI.districtHODashboardCounts(req);
      } else if (this.requestType === '1') {
        this.headingText = 'APPROVED LIST';
        req.status = '4';
        res = await this.farmerAPI.districtHODashboardCounts(req);
      } else if (this.requestType === '2') {
        this.headingText = 'REJECTED LIST';
        req.status = '10';
        res = await this.farmerAPI.districtHODashboardCounts(req);
      }
      else if (this.requestType === '3') {
        this.headingText = 'PENDING AT HIGHER LEVEL LIST';
        req.status = '6';
        res = await this.farmerAPI.districtHODashboardCounts(req);
      }
      this.spinner.hide();

      if (res.success) {
        this.farmerCertList = res.result.map((obj: any) => ({
          ...obj,
          STATUS: '',
          REJECTED_REASON: obj.REJECTED_REASON,
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
      const res = await this.farmerAPI.rejectedReasonsList();
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
        status: obj.STATUS,
        updatedBy: this.session.userName,
        uniqueId: obj.UNIQUE_ID,
        rejectedReason: obj.REJECTED_REASON,
      };
      this.spinner.show();
      const response = await this.farmerAPI.districtHOCertUpdate(req);
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


}
