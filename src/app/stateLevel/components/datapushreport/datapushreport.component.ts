import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datapushreport', 
  templateUrl: './datapushreport.component.html',
  styleUrls: ['./datapushreport.component.css']
})
export class DatapushreportComponent   implements OnInit, OnDestroy, AfterViewInit {

  districtList: any[] = [];
  districtId = '';
  districtLevelDetails: any[] = [];
  DataReportList: any[] = [];
  excelData: any[] = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
      private spinner: NgxSpinnerService,
      private toast: ToasterService,
      private farmerModuleAPI: StateService,
      private farmerAPI: FarmerRegService,
      private stateAPI: StateService,
      private utils: UtilsService,
      private logger: LoggerService,
      private session: SessionService,
      private router: Router,
  ) { }

  ngOnInit(): void { 

      if(this.session.uniqueId !="" && this.session.desigId != ''){ 
        this.loadDistricts();
    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    } 

  }

  loadDistricts(): void {
      this.spinner.show();
      this.stateAPI.districtList().then((res: any) => {
              if (res.success) {
                  this.districtList = res.result;
                   
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

//   onDistrictChange(): void {
//       if (this.districtId === '') {
//           return;
//       }
//   }





  async btnDownloadReport(): Promise<void> {
      try {
          if (this.utils.isEmpty(this.districtId)) {
              this.toast.warning('Please Select District');
              return;
          }
          const req = {
              districtId: this.districtId,
          };
          this.spinner.show();
          const res = await this.stateAPI.volunteerHHReport(req);
          if (res.success) {
              // this.districtLevelDetails = res.result;
              this.utils.JSONToCSVConvertor(
                  res.result,
                  'Volunteer HH Report',
                  true
              );
          } else {
              this.toast.info(res.message);
          }
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }
  }

  btnExcel(): void {
    if (this.excelData.length > 0) {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Data Push Report',
            true
        );
    }
}


  async btnfarmerDetails(): Promise<void> {
      try {
          debugger;
          if (this.utils.isEmpty(this.districtId)) {
              this.toast.warning('Please Select District  ');
              return;
          }
          const req = {
              districtId: this.districtId,
          };
          this.spinner.show();
          const res = await this.stateAPI.masterandMilkPouringReportnew(req); //masterandMilkPouringReport
          if (res.success) {
              // this.DataReportList = res.result[0];
              this.DataReportList = res.result;
              for (let i = 0; i < this.DataReportList.length; i++) {

                let obj = {
                    S_NO: i + 1,
                    DIST_CODE: this.DataReportList[i].DIST_CODE,
                    DISTRICT: this.DataReportList[i].DISTRICT,
                    MANDAL_CODE: this.DataReportList[i].MANDAL_CODE,
                    MANDAL_NAME: this.DataReportList[i].MANDAL_NAME,
                    RBK_CODE: this.DataReportList[i].RBK_CODE1,
                    RBK_NAME: this.DataReportList[i].RBK_NAME1,
                    ROUNTE_NO: this.DataReportList[i].ROUNTE_NOS,
                    ROUTE_NAME: this.DataReportList[i].ROUTE_NAME,
                    VILLAGE_CODE: this.DataReportList[i].VILLAGECODE,
                    VILLAGE_NAME: this.DataReportList[i].VILLAGE_NAME,
                    SOCIETY_CODE: this.DataReportList[i].SOCIETY_CODE,
                    HEAD_OF_VILLAGE: this.DataReportList[i].HEAD_OF_VILLAGE,
                    NAME_OF_THE_MENTOR: this.DataReportList[i].NAME_OF_THE_MENTOR,
                    MENTOR_DESIGNATION: this.DataReportList[i].MENTOR_DESIGNATION,
                    MENTOR_MOBILE_NUM: this.DataReportList[i].MENTOR_MBL_NUM,
                    NAME_OF_THE_ROUTE_INCHARGE: this.DataReportList[i].NAME_OF_THE_ROUTE_INCHARGE,
                    ROUTE_INCHARGE_DESIGNATION: this.DataReportList[i].ROUTE_INCHARGE_DESIGNATION,
                    ROUTE_INCHARGE_MOBILE_NO: this.DataReportList[i].ROUTE_INCHARGE_MOBILE_NO,
                    IS_RECORD_PUSHED: this.DataReportList[i].IS_RECORD_PUSHED,
                    RECORD_PUSHED_ON: this.DataReportList[i].RECORD_PUSHED_ON

                }
                this.excelData.push(obj);
            }
              this.spinner.hide();  
              this.rerender();

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
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
      });
  }

}