import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvHHAnimalsService } from '../../services/vv-hhanimals.service';

@Component({
  selector: 'app-vv-hhanimals-cluster',
  templateUrl: './vv-hhanimals-cluster.component.html',
  styleUrls: ['./vv-hhanimals-cluster.component.css'],
})
export class VvHHAnimalsClusterComponent 
  implements OnInit, OnDestroy, AfterViewInit
{ 
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() phaseid: any;
  @Input() phasename: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPendingHHChange = new EventEmitter<string>();

  clusterLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    CLUSTER_ID: '-',
    CLUSTERNAME: '-',
    LOGIN_STATUS: '-',
    VILLAGE_NAME: 'TOTAL',
    TOTAL_HH: 0,
    SUYVYED_DEAD: 0,
    SUYVYED_MIGRATED: 0,
    TOTAL_SUR_HH: 0,
    TOTAL_FARMERS_WITH_AINM_HH: 0,
    TOTAL_ANIMALS: 0,
    TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
    TOTAL_PENDING: 0,
    TOTAL_AH_DEPT_HH: 0,
    TOTAL_FMR_WITH_AINM_AH_HH: 0,
    TOTAL_ANIMALS_AH: 0,
    TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
    TOTAL_RESURVEYED_HH:0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VvHHAnimalsService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.mandalId === null &&
      this.mandalId === '' &&
      this.mandalId === undefined
    ) {
      return;
    }
    if (this.rbkId === null && this.rbkId === '' && this.rbkId === undefined) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        CLUSTER_ID: '-',
        CLUSTERNAME: '-',
        LOGIN_STATUS: '-',
        VILLAGE_NAME: 'TOTAL',
        TOTAL_HH: 0,
        SUYVYED_DEAD: 0,
        SUYVYED_MIGRATED: 0,
        TOTAL_SUR_HH: 0,
        TOTAL_FARMERS_WITH_AINM_HH: 0,
        TOTAL_ANIMALS: 0,
        TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
        TOTAL_PENDING: 0,
        TOTAL_AH_DEPT_HH: 0,
        TOTAL_FMR_WITH_AINM_AH_HH: 0,
        TOTAL_ANIMALS_AH: 0,
        TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
        TOTAL_RESURVEYED_HH:0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        clusterId:this.phaseid,
      };
      this.spinner.show();debugger;
      const res = await this.vvFarmerAPI.vvHHAnimalClusterReport(req);
      if (res.success) {
        this.excelData = [];
        this.clusterLevelDetails = res.result;
        for (let i = 0; i < this.clusterLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SUYVYED_DEAD += parseInt(
            this.clusterLevelDetails[i].SUYVYED_DEAD
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SUYVYED_MIGRATED += parseInt(
            this.clusterLevelDetails[i].SUYVYED_MIGRATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUR_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_SUR_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_FARMERS_WITH_AINM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.clusterLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING += parseInt(
            this.clusterLevelDetails[i].TOTAL_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AH_DEPT_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_AH_DEPT_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_AINM_AH_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_FMR_WITH_AINM_AH_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS_AH += parseInt(
            this.clusterLevelDetails[i].TOTAL_ANIMALS_AH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_OUT_AINM_AH_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_FMR_WITH_OUT_AINM_AH_HH
          );

          this.reportTotals.TOTAL_RESURVEYED_HH += parseInt(
            this.clusterLevelDetails[i].TOTAL_RESURVEYED_HH
          );
           

          let singleRow = {
            S_NO: i + 1,
            CLUSTER_ID: this.clusterLevelDetails[i].CLUSTER_ID,
            CLUSTERNAME: this.clusterLevelDetails[i].CLUSTERNAME,
            LOGIN_STATUS: this.clusterLevelDetails[i].LOGIN_STATUS,
            VILLAGE_NAME: this.clusterLevelDetails[i].VILLAGE_NAME,
            TOTAL_HH: this.clusterLevelDetails[i].TOTAL_HH,
            SUYVYED_DEAD: this.clusterLevelDetails[i].SUYVYED_DEAD,
            SUYVYED_MIGRATED: this.clusterLevelDetails[i].SUYVYED_MIGRATED,
            TOTAL_SUR_HH: this.clusterLevelDetails[i].TOTAL_SUR_HH,
            TOTAL_FARMERS_WITH_AINM_HH:
              this.clusterLevelDetails[i].TOTAL_FARMERS_WITH_AINM_HH,
            TOTAL_ANIMALS: this.clusterLevelDetails[i].TOTAL_ANIMALS,
            TOTAL_FARMERS_WITH_OUT_AINM_HH:this.clusterLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM_HH,
            TOTAL_RESURVEYED_HH: this.clusterLevelDetails[i].TOTAL_RESURVEYED_HH,
            TOTAL_PENDING: this.clusterLevelDetails[i].TOTAL_PENDING,
            TOTAL_AH_DEPT_HH: this.clusterLevelDetails[i].TOTAL_AH_DEPT_HH,
            TOTAL_FMR_WITH_AINM_AH_HH:
              this.clusterLevelDetails[i].TOTAL_FMR_WITH_AINM_AH_HH,
            TOTAL_ANIMALS_AH: this.clusterLevelDetails[i].TOTAL_ANIMALS_AH,
            TOTAL_FMR_WITH_OUT_AINM_AH_HH:
              this.clusterLevelDetails[i].TOTAL_FMR_WITH_OUT_AINM_AH_HH,
          };
          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.spinner.hide();
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Volunteer Farmer HouseHold Data Cluster Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        columnValue:this.phasename

      };
      const fileName = 'vvHHAnimalClusterPDFReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalClusterPDFReport(req);
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
      clusterId: obj.CLUSTER_ID,
      clusterName: obj.CLUSTERNAME,
      phaseid:this.phaseid,
      phasename:this.phasename
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onPendingHHChange.emit(encryptedString);
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
