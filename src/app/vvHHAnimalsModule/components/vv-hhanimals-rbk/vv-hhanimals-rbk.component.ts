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
  selector: 'app-vv-hhanimals-rbk',
  templateUrl: './vv-hhanimals-rbk.component.html',
  styleUrls: ['./vv-hhanimals-rbk.component.css'],
})
export class VvHHAnimalsRbkComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVillageChange = new EventEmitter<string>();
  rbkLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    VILLAGE_NAME: 'TOTAL',
    TOTAL_CLUSTERS: 0,
    TOTAL_VV: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_HH: 0,
    TOTAL_SUR_HH: 0,
    TOTAL_FARMERS_WITH_ANIM_HH: 0,
    TOTAL_ANIMALS: 0,
    TOTAL_FARMERS_WITH_OUT_ANIM_HH: 0,
    TOTAL_PENDING: 0,
    TOTAL_AH_DEPT_HH: 0,
    TOTAL_FMR_WITH_ANIM_AH_HH: 0,
    TOTAL_ANIMALS_AH: 0,
    TOTAL_FMR_WITH_OUT_ANIM_AH_HH: 0,
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
        VILLAGE_NAME: 'TOTAL',
        TOTAL_CLUSTERS: 0,
        TOTAL_VV: 0,
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_HH: 0,
        TOTAL_SUR_HH: 0,
        TOTAL_FARMERS_WITH_ANIM_HH: 0,
        TOTAL_ANIMALS: 0,
        TOTAL_FARMERS_WITH_OUT_ANIM_HH: 0,
        TOTAL_PENDING: 0,
        TOTAL_AH_DEPT_HH: 0,
        TOTAL_FMR_WITH_ANIM_AH_HH: 0,
        TOTAL_ANIMALS_AH: 0,
        TOTAL_FMR_WITH_OUT_ANIM_AH_HH: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalRbkReport(req);
      if (res.success) {
        this.excelData = [];
        this.rbkLevelDetails = res.result;
        for (let i = 0; i < this.rbkLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_CLUSTERS += parseInt(
            this.rbkLevelDetails[i].TOTAL_CLUSTERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.rbkLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
            this.rbkLevelDetails[i].TOTAL_VV_LOGEDIN
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_SUR_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_SUR_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_ANIM_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_FARMERS_WITH_ANIM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.rbkLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FARMERS_WITH_OUT_ANIM_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_FARMERS_WITH_OUT_ANIM_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING += parseInt(
            this.rbkLevelDetails[i].TOTAL_PENDING
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_AH_DEPT_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_AH_DEPT_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_ANIM_AH_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_FMR_WITH_ANIM_AH_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS_AH += parseInt(
            this.rbkLevelDetails[i].TOTAL_ANIMALS_AH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_FMR_WITH_OUT_ANIM_AH_HH += parseInt(
            this.rbkLevelDetails[i].TOTAL_FMR_WITH_OUT_ANIM_AH_HH
          );
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.rbkLevelDetails[i].VILLAGE_NAME,
            TOTAL_CLUSTERS: this.rbkLevelDetails[i].TOTAL_CLUSTERS,
            TOTAL_VV: this.rbkLevelDetails[i].TOTAL_VV,
            TOTAL_VV_LOGEDIN: this.rbkLevelDetails[i].TOTAL_VV_LOGEDIN,
            TOTAL_HH: this.rbkLevelDetails[i].TOTAL_HH,
            TOTAL_SUR_HH: this.rbkLevelDetails[i].TOTAL_SUR_HH,
            TOTAL_FARMERS_WITH_ANIM_HH: this.rbkLevelDetails[i]
              .TOTAL_FARMERS_WITH_ANIM_HH,
            TOTAL_ANIMALS: this.rbkLevelDetails[i].TOTAL_ANIMALS,
            TOTAL_FARMERS_WITH_OUT_ANIM_HH: this.rbkLevelDetails[i]
              .TOTAL_FARMERS_WITH_OUT_ANIM_HH,
            TOTAL_PENDING: this.rbkLevelDetails[i].TOTAL_PENDING,
            TOTAL_AH_DEPT_HH: this.rbkLevelDetails[i].TOTAL_AH_DEPT_HH,
            TOTAL_FMR_WITH_ANIM_AH_HH: this.rbkLevelDetails[i]
              .TOTAL_FMR_WITH_ANIM_AH_HH,
            TOTAL_ANIMALS_AH: this.rbkLevelDetails[i].TOTAL_ANIMALS_AH,
            TOTAL_FMR_WITH_OUT_ANIM_AH_HH: this.rbkLevelDetails[i]
              .TOTAL_FMR_WITH_OUT_ANIM_AH_HH,
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
      'Volunteer Farmer HouseHold Data Rbk Level Report',
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
      };
      const fileName = 'rbkLevelVVFarmerHouseHoldReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalRbkPDFReport(req);
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
      villageId: obj.VILLAGECODE,
      villageName: obj.VILLAGE_NAME,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVillageChange.emit(encryptedString);
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