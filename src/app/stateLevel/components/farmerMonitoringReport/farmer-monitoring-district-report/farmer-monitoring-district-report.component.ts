import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from 'src/app/stateLevel/services/dashboard.service';

@Component({
  selector: 'app-farmer-monitoring-district-report',
  templateUrl: './farmer-monitoring-district-report.component.html',
  styleUrls: ['./farmer-monitoring-district-report.component.css']
})
export class FarmerMonitoringDistrictReportComponent implements OnInit {

  @Input() fromDate: any;
  @Input() toDate: any;
  @Output() onDistrictChange = new EventEmitter<string>();
  alldistrictDetails = [];


  reportTotals = {
    mLastYearSameDate:'',
    mLastMonthSameDate:'',
    mPresentDay:'',
    sLastYearSameDate:'',
    sLastMonthSameDate:'',
    sPresentDay:'',
    fLastYearSameDate:'',
    fLastMonthSameDate:'',
    fPresentDay:'',
    blLastYearSameDate:'',
    blLastMonthSameDate:'',
    blPresentDay:'',
    bfsnfLastYearSameDate:'',
    bfsnfLastMonthSameDate:'',
    bfsnfPresentDay:'',
    baLastYearSameDate:'',
    baLastMonthSameDate:'',
    baPresentDay:'',
    clLastYearSameDate:'',
    clLastMonthSameDate:'',
    clPresentDay:'',
    cfsnf1LastYearSameDate:'',
    cfsnfastMonthSameDate:'',
    cfsnfPresentDay:'',
    caLastYearSameDate:'',
    caLastMonthSameDate:'',
    caPresentDay:'',
    qtLastYearSameDate:'',
    qtLastMonthSameDate:'',
    qtPresentDay:'',
    fsnfLastYearSameDate:'',
    fsnfLastMonthSameDate:'',
    fsnfPresentDay:'',
    afLastYearSameDate:'',
    aLastMonthSameDate:'',
    aPresentDay:'',
};
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
    private toast: ToasterService,
    private route:ActivatedRoute) { }

    fromdt=false;
    todt=false;
    Tableload=false;

  ngOnInit(): void {

    this.fromDate = this.session.getFromDateString();
    this.toDate = this.session.getTodayDateString();
  }

  async btnLoadReport(): Promise<void> {
    try {
      this.Tableload=true;
        const req = {
          from_Date: this.fromDate,
          to_Date: this.toDate,
        };
        this.spinner.show();
        const res = await this.dashboardAPI.farmerMonitoringAllDist(req);
        if (res.success) {
          
          this.alldistrictDetails = res.result;
        }       
        else {
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
    district_Id: obj.districtId,
    districtName: obj.DISTRICT,
    from_Date: this.fromDate,
    to_Date: this.toDate,
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

// onDistrictChange(result): void {
//   this.router.navigate(['/state/farmerMonitoringReport/farmermonitoringmandalreport'], {
//     queryParams: { request: result },
//   });
// }


}
