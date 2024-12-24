import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs'; 
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-mdac-account-dashboard',
  templateUrl: './mdac-account-dashboard.component.html',
  styleUrls: ['./mdac-account-dashboard.component.css'],
})
export class MdacAccountDashboardComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtName: any;

  dashboardCounts = {
    APPROVED: '0',
    PENDING: '0',
    REJECTED: '0',
  };

  headingText = '';
  requestType = '';
  actionTakenValue: any;
  mdacAccountList = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    //private districtHOAPI: DistrictHoService,
    private StateAPI :StateService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    debugger;
    if(this.session.uniqueId !="" && this.session.desigId != ""){
      
      this.loadDashboard();
    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }
   
  }

  async loadDashboard(): Promise<void> {
    try {
      const req = {
        uniqueId: this.session.uniqueId,
      };
      this.spinner.show();
      const res = await this.StateAPI.mdacHODashboard(req);
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

  async btnMdacAccountDashboardDetails(obj): Promise<void> {
    try {
      this.requestType = obj;
      const req = {
        uniqueId: this.session.uniqueId,
        actionTaken: this.requestType,
      };
      this.mdacAccountList = [];

      if (this.requestType === null && this.dashboardCounts.PENDING === '0') {
        this.mdacAccountList = [];
        return;
      }
      if (this.requestType === '1' && this.dashboardCounts.APPROVED === '0') {
        this.mdacAccountList = [];
        return;
      }

      if (this.requestType === '2' && this.dashboardCounts.REJECTED === '0') {
        this.mdacAccountList = [];
        return;
      }

      this.spinner.show();
      let res: any;
      if (this.requestType === null) {
        this.headingText = 'PENDING LIST';
        res = await this.StateAPI.pendingList(req);
      } else if (this.requestType === '1') {
        this.headingText = 'APPROVED LIST';
        res = await this.StateAPI.approvedList(req);
      } else if (this.requestType === '2') {
        this.headingText = 'REJECTED  LIST';
        res = await this.StateAPI.rejectedList(req);
      }
      this.spinner.hide();

      this.mdacAccountList = [];
      if (res.success) {
        this.mdacAccountList = res.result;
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnVerify(obj): Promise<void> {
    try {
      const encryptedString = this.utils.encrypt(JSON.stringify(obj));
      this.router.navigate(['/districtHOModule/MdacAccountUpdate'], {
        queryParams: { request: encryptedString },
      });
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

      dtInstance.clear();

      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}