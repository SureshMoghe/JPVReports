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
import { VolunteerFarmerDataService } from '../../services/volunteer-farmer-data.service';

@Component({
  selector: 'app-vv-farmer-data-village-wise',
  templateUrl: './vv-farmer-data-village-wise.component.html',
  styleUrls: ['./vv-farmer-data-village-wise.component.css'],
})
export class VvFarmerDataVillageWiseComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() route: any;
  @Input() routeName: any;

  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    VILLAGE_NAME: 'TOTAL',
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_FARMERS_WITH_OUT_AINM: 0,
    TOTAL_FARMERS_WITH_AINM: 0,
    TOTAL_APPROVED_FMR: 0,
    TOTAL_APPROVED_FMR_PERCNT: 0,
    TOTAL_ANIMALS: 0,
    AH_DEPT_VV_ANM_YES: 0,
    AH_DEPT_YES_VV_ANM_NO: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (this.route === undefined && this.route === '' && this.route === null) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mandalId === undefined &&
    //   this.mandalId === '' &&
    //   this.mandalId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.route === undefined &&
    //   this.route === '' &&
    //   this.route === null
    // ) {
    //   return;
    // }
    // if (
    //   this.rbkId === undefined &&
    //   this.rbkId === '' &&
    //   this.rbkId === null
    // ) {
    //   return;
    // }
    // this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        VILLAGE_NAME: 'TOTAL',
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_FARMERS_WITH_OUT_AINM: 0,
        TOTAL_FARMERS_WITH_AINM: 0,
        TOTAL_APPROVED_FMR: 0,
        TOTAL_APPROVED_FMR_PERCNT: 0,
        TOTAL_ANIMALS: 0,
        AH_DEPT_VV_ANM_YES: 0,
        AH_DEPT_YES_VV_ANM_NO: 0,
      };
      const req = {
        districtId: this.districtId,
        route: this.route,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerRegVillageList(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.rbkLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
            this.rbkLevelDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
            this.rbkLevelDetails[i].TOTAL_FARMERS_WITH_AINM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
            this.rbkLevelDetails[i].TOTAL_APPROVED_FMR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
            this.rbkLevelDetails[i].TOTAL_APPROVED_FMR_PERCNT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.rbkLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
            this.rbkLevelDetails[i].AH_DEPT_VV_ANM_YES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
            this.rbkLevelDetails[i].AH_DEPT_YES_VV_ANM_NO
          );
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.rbkLevelDetails[i].VILLAGE_NAME,
            TOTAL_VV_LOGEDIN: this.rbkLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_FARMERS_WITH_OUT_AINM: this.rbkLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_AINM,
            TOTAL_FARMERS_WITH_AINM: this.rbkLevelDetails[i]
              .TOTAL_FARMERS_WITH_AINM,
            TOTAL_APPROVED_FMR: this.rbkLevelDetails[i].TOTAL_APPROVED_FMR,
            TOTAL_APPROVED_FMR_PERCNT: this.rbkLevelDetails[i]
              .TOTAL_APPROVED_FMR_PERCNT,
            TOTAL_ANIMALS: this.rbkLevelDetails[i].TOTAL_ANIMALS,
            AH_DEPT_VV_ANM_YES: this.rbkLevelDetails[i].AH_DEPT_VV_ANM_YES,
            AH_DEPT_YES_VV_ANM_NO: this.rbkLevelDetails[i]
              .AH_DEPT_YES_VV_ANM_NO,
          };

          this.excelData.push(singleRow);
        }
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
          this.rbkLevelDetails.length;
        this.reportTotals.TOTAL_APPROVED_FMR_PERCNT = parseFloat(
          this.reportTotals.TOTAL_APPROVED_FMR_PERCNT.toFixed(2)
        );
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
      'Volunteer Farmer Data RBK Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.route,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'rbkLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerRegVillageListPDF(req);
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
