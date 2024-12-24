import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { FarmerApprovalService } from 'src/app/farmerApprovalModule/services/farmer-approval.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-village-level-details',
  templateUrl: './farmer-approval-village-level-details.component.html',
  styleUrls: ['./farmer-approval-village-level-details.component.css']
})
export class FarmerApprovalVillageLevelDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
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

  @Output() onClusterChange = new EventEmitter<string>();
  VillageLevelDetails: any[] = [];

  reportTotals = {
      S_NO: '-',
      VILLAGES: 'TOTAL',
      TOT_VV: 0,
      TOT_VV_LOGIN: 0,
      TOT_HH: 0,
      VV_REG_FARMERS: 0,
      APPROVED: 0,
      REJECTED: 0,
      PENDING_FMR_WITH_ANIMALS: 0,
      PENDING_FMR_WITH_OUT_ANIMALS: 0,
      VA_DA_APPROVED: 0,
      MENTOR_APPROVED: 0,
      RIC_APPROVED: 0,
      WITHOUT_MILCH: 0,
      MILCH_DATA_COL_PENDING: 0,

  };
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
          this.reportTotals = {
              S_NO: '-',
              VILLAGES: 'TOTAL',
              TOT_VV: 0,
              TOT_VV_LOGIN: 0,
              TOT_HH: 0,
              VV_REG_FARMERS: 0,
              APPROVED: 0,
              REJECTED: 0,
              PENDING_FMR_WITH_ANIMALS: 0,
              PENDING_FMR_WITH_OUT_ANIMALS: 0,
              VA_DA_APPROVED: 0,
              MENTOR_APPROVED: 0,
              RIC_APPROVED: 0,
              WITHOUT_MILCH: 0,
              MILCH_DATA_COL_PENDING: 0,

          };
          const req = {
              districtId: this.districtId,
              mandalId: this.mandalId,
              villageId: this.phaseid,
              fromDate: this.fromDate,
              toDate: this.toDate,
              rbkId: this.rbkId

          };

          console.log(req);

          this.spinner.show(); //
          const res = await this.approvalAPI.farmerApprovalVillageLevel(req);//farmerApprovalRouteLevel
          if (res.success) {
              this.excelData = [];
              this.VillageLevelDetails = res.result;
              this.reportTotals = {
                  S_NO: '-',
                  VILLAGES: 'TOTAL',
                  TOT_VV: 0,
                  TOT_VV_LOGIN: 0,
                  TOT_HH: 0,
                  VV_REG_FARMERS: 0,
                  APPROVED: 0,
                  REJECTED: 0,
                  PENDING_FMR_WITH_ANIMALS: 0,
                  PENDING_FMR_WITH_OUT_ANIMALS: 0,
                  VA_DA_APPROVED: 0,
                  MENTOR_APPROVED: 0,
                  RIC_APPROVED: 0,
                  WITHOUT_MILCH: 0,
                  MILCH_DATA_COL_PENDING: 0,

              };

              console.log(this.VillageLevelDetails);
              for (let i = 0; i < this.VillageLevelDetails.length; i++) {


                  this.reportTotals.TOT_VV += parseInt(
                      this.VillageLevelDetails[i].TOT_VV
                  );

                  // tslint:disable-next-line: radix
                  this.reportTotals.TOT_VV_LOGIN += parseInt(
                      this.VillageLevelDetails[i].TOT_VV_LOGIN
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.TOT_HH += parseInt(
                      this.VillageLevelDetails[i].TOT_HH
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.VV_REG_FARMERS += parseInt(
                      this.VillageLevelDetails[i].VV_REG_FARMERS
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.APPROVED += parseInt(
                      this.VillageLevelDetails[i].APPROVED
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.REJECTED += parseInt(
                      this.VillageLevelDetails[i].REJECTED
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.PENDING_FMR_WITH_ANIMALS += parseInt(
                      this.VillageLevelDetails[i].PENDING_FMR_WITH_ANIMALS
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.PENDING_FMR_WITH_OUT_ANIMALS += parseInt(
                      this.VillageLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.VA_DA_APPROVED += parseInt(
                      this.VillageLevelDetails[i].VA_DA_APPROVED
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.MENTOR_APPROVED += parseInt(
                      this.VillageLevelDetails[i].MENTOR_APPROVED
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.RIC_APPROVED += parseInt(
                      this.VillageLevelDetails[i].RIC_APPROVED
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.WITHOUT_MILCH += parseInt(
                      this.VillageLevelDetails[i].WITHOUT_MILCH
                  );
                  // tslint:disable-next-line: radix
                  this.reportTotals.MILCH_DATA_COL_PENDING += parseInt(
                      this.VillageLevelDetails[i].MILCH_DATA_COL_PENDING
                  );

                  let singleRow = {
                      S_NO: i + 1,
                      VILLAGES: this.VillageLevelDetails[i].VILLAGE_NAME,
                      TOT_VV: this.VillageLevelDetails[i].TOT_VV,
                      TOT_VV_LOGIN: this.VillageLevelDetails[i].TOT_VV_LOGIN,
                      TOT_HH: this.VillageLevelDetails[i].TOT_HH,
                      VV_S_THH: this.VillageLevelDetails[i].VV_REG_FARMERS,
                      APPROVED: this.VillageLevelDetails[i].APPROVED,
                      REJECTED: this.VillageLevelDetails[i].REJECTED,
                      PENDING_FMR_WITH_ANIMALS:
                          this.VillageLevelDetails[i].PENDING_FMR_WITH_ANIMALS,
                      PENDING_FMR_WITH_OUT_ANIMALS:
                          this.VillageLevelDetails[i].PENDING_FMR_WITH_OUT_ANIMALS,
                      VA_DA_APPROVED: this.VillageLevelDetails[i].VA_DA_APPROVED,
                      MENTOR_APPROVED: this.VillageLevelDetails[i].MENTOR_APPROVED,
                      RIC_APPROVED: this.VillageLevelDetails[i].RIC_APPROVED,
                      WITHOUT_MILCH: this.VillageLevelDetails[i].WITHOUT_MILCH,
                      MILCH_DATA_COL_PENDING:
                          this.VillageLevelDetails[i].MILCH_DATA_COL_PENDING,
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

  btnExcel(): void {
      this.utils.JSONToCSVConvertor(
          this.excelData,
          'Farmer Approval Village Level Report',
          true
      );
  }


  btnGetDetails(obj): void {
      const requestData = {
          districtId: obj.DIST_CODE,
          districtName: obj.DISTRICT_NAME,
          mandalId: obj.MANDAL_CODE,
          mandalName: obj.MANDAL_NAME,
          phaseid: this.phaseid,
          phasename: this.phasename,
          fromDate: this.fromDate,
          toDate: this.toDate,
          VillageName: obj.VILLAGE_NAME,
          villageId: obj.VILLAGECODE,
          rbkId: obj.RBK_CODE,
          rbkName: obj.RBK_NAME

      };

      const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
      this.onClusterChange.emit(encryptedString);
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