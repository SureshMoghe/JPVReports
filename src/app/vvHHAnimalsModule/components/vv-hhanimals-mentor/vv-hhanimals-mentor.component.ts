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
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VvHHAnimalsService } from '../../services/vv-hhanimals.service';

@Component({
  selector: 'app-vv-hhanimals-mentor',
  templateUrl: './vv-hhanimals-mentor.component.html',
  styleUrls: ['./vv-hhanimals-mentor.component.css'],
})
export class VvHHAnimalsMentorComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRbkChange = new EventEmitter<string>();
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    RBK_NAME: 'TOTAL',
    TOTAL_VILLAGES: 0,
    TOTAL_CLUSTERS: 0,
    TOTAL_VV: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_HH: 0,
    TOTAL_SUYVYED_DEAD: 0,
    TOTAL_SUYVYED_MIGRATED: 0,
    TOTAL_SUR_HH: 0,
    TOTAL_FARMERS_WITH_AINM_HH: 0,
    TOTAL_ANIMALS: 0,
    TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
    TOTAL_PENDING: 0,
    TOTAL_AH_DEPT_HH: 0,
    TOTAL_FMR_WITH_AINM_AH_HH: 0,
    TOTAL_ANIMALS_AH: 0,
    TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
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
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        RBK_NAME: 'TOTAL',
        TOTAL_VILLAGES: 0,
        TOTAL_CLUSTERS: 0,
        TOTAL_VV: 0,
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_HH: 0,
        TOTAL_SUYVYED_DEAD: 0,
        TOTAL_SUYVYED_MIGRATED: 0,
        TOTAL_SUR_HH: 0,
        TOTAL_FARMERS_WITH_AINM_HH: 0,
        TOTAL_ANIMALS: 0,
        TOTAL_FARMERS_WITH_OUT_AINM_HH: 0,
        TOTAL_PENDING: 0,
        TOTAL_AH_DEPT_HH: 0,
        TOTAL_FMR_WITH_AINM_AH_HH: 0,
        TOTAL_ANIMALS_AH: 0,
        TOTAL_FMR_WITH_OUT_AINM_AH_HH: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        // uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalHouseholdMentorReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.mentorLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CLUSTERS += parseInt(
            this.mentorLevelDetails[i].TOTAL_CLUSTERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.mentorLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.mentorLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUYVYED_DEAD += parseInt(
            this.mentorLevelDetails[i].TOTAL_SUYVYED_DEAD
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUYVYED_MIGRATED += parseInt(
            this.mentorLevelDetails[i].TOTAL_SUYVYED_MIGRATED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUR_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_SUR_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_FARMERS_WITH_AINM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.mentorLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM_HH
          );

          // if( this.reportTotals[i].TOTAL_PENDING===""|| this.mentorLevelDetails[i].TOTAL_PENDING=="0")
          // this.reportTotals.TOTAL_PENDING += parseInt("0");
          // else{
          // // tslint:disable-next-line: radix
          // this.reportTotals.TOTAL_PENDING += parseInt(
          //   this.mentorLevelDetails[i].TOTAL_PENDING
          // );}

          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING += parseInt(
            this.mentorLevelDetails[i].TOTAL_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AH_DEPT_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_AH_DEPT_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_AINM_AH_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_FMR_WITH_AINM_AH_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS_AH += parseInt(
            this.mentorLevelDetails[i].TOTAL_ANIMALS_AH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_OUT_AINM_AH_HH += parseInt(
            this.mentorLevelDetails[i].TOTAL_FMR_WITH_OUT_AINM_AH_HH
          );
          let singleRow = {
            S_NO: i + 1,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            TOTAL_VILLAGES: this.mentorLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_CLUSTERS: this.mentorLevelDetails[i].TOTAL_CLUSTERS,
            TOTAL_VV: this.mentorLevelDetails[i].TOTAL_VV,
            TOTAL_VV_LOGEDIN: this.mentorLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_HH: this.mentorLevelDetails[i].TOTAL_HH,
            TOTAL_SUYVYED_DEAD: this.mentorLevelDetails[i].TOTAL_SUYVYED_DEAD,
            TOTAL_SUYVYED_MIGRATED: this.mentorLevelDetails[i]
              .TOTAL_SUYVYED_MIGRATED,
            TOTAL_SUR_HH: this.mentorLevelDetails[i].TOTAL_SUR_HH,
            TOTAL_FARMERS_WITH_AINM_HH: this.mentorLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM_HH,
            TOTAL_ANIMALS: this.mentorLevelDetails[i].TOTAL_ANIMALS,
            TOTAL_FARMERS_WITH_OUT_AINM_HH: this.mentorLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM_HH,
            TOTAL_PENDING: this.mentorLevelDetails[i].TOTAL_PENDING,
            TOTAL_AH_DEPT_HH: this.mentorLevelDetails[i].TOTAL_AH_DEPT_HH,
            TOTAL_FMR_WITH_AINM_AH_HH: this.mentorLevelDetails[i]
              .TOTAL_FMR_WITH_AINM_AH_HH,
            TOTAL_ANIMALS_AH: this.mentorLevelDetails[i].TOTAL_ANIMALS_AH,
            TOTAL_FMR_WITH_OUT_AINM_AH_HH: this.mentorLevelDetails[i]
              .TOTAL_FMR_WITH_OUT_AINM_AH_HH,
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
      'Volunteer Farmer HouseHold Data Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mentorLevelVVFarmerHouseHoldReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalHhMentorReportPDF(req);
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
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRbkChange.emit(encryptedString);
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
