import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerApprovalService } from 'src/app/farmerApprovalModule/services/farmer-approval.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-details-level-details',
  templateUrl: './farmer-approval-details-level-details.component.html',
  styleUrls: ['./farmer-approval-details-level-details.component.css']
})
export class FarmerApprovalDetailsLevelDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() phaseid: any;
  @Input() phasename: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() rbkName: any;
  @Input() rbkId: any;
  @Input() villageId: any;
  @Input() VillageName: any;
  @Input() clusterId: any;


  DetailLevelDetails: any[] = [];


  excelData = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
      private spinner: NgxSpinnerService,
      private toast: ToasterService,
      private approvalAPI: FarmerApprovalService,
      private utils: UtilsService,
      private logger: LoggerService
  ) { }

  ngOnInit(): void {
      debugger;
      this.loadReport();

  }

  async loadReport(): Promise<void> {
      try {
          debugger;


          const req = {
              fromDate: this.fromDate,
              toDate: this.toDate,
              input_01: this.clusterId,
              phase: this.phaseid,

          };

          this.spinner.show();
          const res = await this.approvalAPI.farmerApprovalDetailLevel(req);//farmerApprovalRouteLevel
          if (res.success) {
              this.excelData = [];
              this.DetailLevelDetails = res.result;
              console.log(this.DetailLevelDetails);


              console.log(this.DetailLevelDetails);
              for (let i = 0; i < this.DetailLevelDetails.length; i++) {


                  let singleRow = {
                      S_NO: i + 1,
                      HOUSEHOLD_NAME: this.DetailLevelDetails[i].TEMP_ID,
                      HHNAME: this.DetailLevelDetails[i].FARMER_NAME,
                      SURVEY_STATUS: this.DetailLevelDetails[i].SURVEY_STATUS,
                      APPROVAL_STATUS: this.DetailLevelDetails[i].APPROVAL_STATUS,
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

  btnExcel(): void {
      this.utils.JSONToCSVConvertor(
          this.excelData,
          'Farmer Approval Details Level Report',
          true
      );
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