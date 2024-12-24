import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';

@Component({
  selector: 'app-admin-smscodes',
  templateUrl: './admin-smscodes.component.html',
  styleUrls: ['./admin-smscodes.component.css']
})
export class AdminSMSCodesComponent implements OnInit {

  fromDate:any;
  toDate:any;
  Rpttype='';
  smsload=false;
 
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router,
    private session: SessionService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService,
    private dashboardAPI: DashboardService,
    private farmerAPI: FarmerRegService,
    private toast: ToasterService) { }
   

  ngOnInit(): void {
    this.Rpttype = '0';
    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();

  }

  fromdt=true;
  todt=true;
  sttime=true;
  sttime1=true;
  sub=true; 
  msg=true;
  number:any;

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onRpttypeChange(): void {

    if(this.Rpttype==='0')
    {
      this.fromdt=true;
      this.todt=true;
      this.sttime=true;
      this.sttime1=true;
      this.sub=true;
      this.msg=true;
    }
    else if(this.Rpttype==='2')
    {
      this.fromdt=false;
      this.todt=false;
      this.sttime=false;
      this.sttime1=false;
      this.sub=false;
      this.msg=false;
    }
    else
    {
      this.fromdt=true;
      this.todt=true;
      this.sttime=true;
      this.sttime1=true;
      this.sub=true;
      this.msg=true;
    }
  }  

  async btnLoadReport(): Promise<void> {
    try {
if(this.number===undefined)
{
  this.number="";
}
      this.smsload=true;
      if(this.Rpttype ==='2')
      {
        const req = {
       TypeId:this.Rpttype,
         mobilenumber:this.number,
        };
        this.spinner.show();
        const res = await this.dashboardAPI.smsSendingReport(req);
        if (res.success) {
          this.toast.info(res.message);
          this.spinner.hide();
          
        }        
        else {
         this.toast.info(res.message);
         this.spinner.hide();}
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  

}

}
