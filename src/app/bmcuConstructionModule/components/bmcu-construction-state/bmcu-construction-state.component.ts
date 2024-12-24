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
import { BmcuConstructionModule } from '../../bmcu-construction.module';
import { BmcuConstructionService } from '../../services/bmcu-construction.service';

@Component({
  selector: 'app-bmcu-construction-state',
  templateUrl: './bmcu-construction-state.component.html',
  styleUrls: ['./bmcu-construction-state.component.css'],
})
export class BmcuConstructionStateComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDistrictChange = new EventEmitter<string>();
  stateLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    FEASIB_OF_LAND_SUBMIT: 0,
    FEASIB_OF_LAND_NOT_SUBMIT: 0,
    REGIS_OF_LAND_SUBMIT: 0,
    REGIS_OF_LAND_NOT_SUBMIT: 0,
    FACIL_AT_BUILD_SITE_SUBMIT: 0,
    FACIL_AT_BUILD_SITE_NOT_SUBMIT: 0,
    BUILD_BASE_LEVEL_SUBMIT: 0,
    BUILD_BASE_LEVEL_NOT_SUBMIT: 0,
    BUILD_BASE_LEVEL_PARTI_SUBMIT: 0,
    SUPER_STRUCTURE_SUBMIT: 0,
    SUPER_STRUCTURE_NOT_SUBMIT: 0,
    SUPER_STRUC_SUBMIT_PART_SUBMIT: 0,
    FINISH_LEVEL_SUBMIT: 0,
    FINISH_LEVEL_NOT_SUBMIT: 0,
    FINISH_LEVEL_PART_SUBMIT: 0,
    OTHER_INFRASTRAC_SUBMIT: 0,
    OTHER_INFRASTRAC_NOT_SUBMIT: 0,
    OTHER_INFRASTRAC_PARTI_SUBMIT: 0,
  };

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private BmcuConstruction: BmcuConstructionService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        DISTRICT: 'TOTAL',
        FEASIB_OF_LAND_SUBMIT: 0,
        FEASIB_OF_LAND_NOT_SUBMIT: 0,
        REGIS_OF_LAND_SUBMIT: 0,
        REGIS_OF_LAND_NOT_SUBMIT: 0,
        FACIL_AT_BUILD_SITE_SUBMIT: 0,
        FACIL_AT_BUILD_SITE_NOT_SUBMIT: 0,
        BUILD_BASE_LEVEL_SUBMIT: 0,
        BUILD_BASE_LEVEL_NOT_SUBMIT: 0,
        BUILD_BASE_LEVEL_PARTI_SUBMIT: 0,
        SUPER_STRUCTURE_SUBMIT: 0,
        SUPER_STRUCTURE_NOT_SUBMIT: 0,
        SUPER_STRUC_SUBMIT_PART_SUBMIT: 0,
        FINISH_LEVEL_SUBMIT: 0,
        FINISH_LEVEL_NOT_SUBMIT: 0,
        FINISH_LEVEL_PART_SUBMIT: 0,
        OTHER_INFRASTRAC_SUBMIT: 0,
        OTHER_INFRASTRAC_NOT_SUBMIT: 0,
        OTHER_INFRASTRAC_PARTI_SUBMIT: 0,
      };
      this.spinner.show();
      const res = await this.BmcuConstruction.stateLevelReport();
      if (res.success) {
        this.excelData = [];
        this.stateLevelDetails = res.result;
        for (let i = 0; i < this.stateLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.FEASIB_OF_LAND_SUBMIT += parseInt(
            this.stateLevelDetails[i].FEASIB_OF_LAND_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FEASIB_OF_LAND_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].FEASIB_OF_LAND_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REGIS_OF_LAND_SUBMIT += parseInt(
            this.stateLevelDetails[i].REGIS_OF_LAND_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.REGIS_OF_LAND_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].REGIS_OF_LAND_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FACIL_AT_BUILD_SITE_SUBMIT += parseInt(
            this.stateLevelDetails[i].FACIL_AT_BUILD_SITE_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FACIL_AT_BUILD_SITE_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].FACIL_AT_BUILD_SITE_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.BUILD_BASE_LEVEL_SUBMIT += parseInt(
            this.stateLevelDetails[i].BUILD_BASE_LEVEL_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.BUILD_BASE_LEVEL_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].BUILD_BASE_LEVEL_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.BUILD_BASE_LEVEL_PARTI_SUBMIT += parseInt(
            this.stateLevelDetails[i].BUILD_BASE_LEVEL_PARTI_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SUPER_STRUCTURE_SUBMIT += parseInt(
            this.stateLevelDetails[i].SUPER_STRUCTURE_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SUPER_STRUCTURE_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].SUPER_STRUCTURE_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.SUPER_STRUC_SUBMIT_PART_SUBMIT += parseInt(
            this.stateLevelDetails[i].SUPER_STRUC_SUBMIT_PART_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FINISH_LEVEL_SUBMIT += parseInt(
            this.stateLevelDetails[i].FINISH_LEVEL_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FINISH_LEVEL_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].FINISH_LEVEL_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FINISH_LEVEL_PART_SUBMIT += parseInt(
            this.stateLevelDetails[i].FINISH_LEVEL_PART_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OTHER_INFRASTRAC_SUBMIT += parseInt(
            this.stateLevelDetails[i].OTHER_INFRASTRAC_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OTHER_INFRASTRAC_NOT_SUBMIT += parseInt(
            this.stateLevelDetails[i].OTHER_INFRASTRAC_NOT_SUBMIT
          );
          // tslint:disable-next-line: radix
          this.reportTotals.OTHER_INFRASTRAC_PARTI_SUBMIT += parseInt(
            this.stateLevelDetails[i].OTHER_INFRASTRAC_PARTI_SUBMIT
          );
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.stateLevelDetails[i].DISTRICT,
            FEASIB_OF_LAND_SUBMIT:
              this.stateLevelDetails[i].FEASIB_OF_LAND_SUBMIT,
            FEASIB_OF_LAND_NOT_SUBMIT:
              this.stateLevelDetails[i].FEASIB_OF_LAND_NOT_SUBMIT,
            REGIS_OF_LAND_SUBMIT:
              this.stateLevelDetails[i].REGIS_OF_LAND_SUBMIT,
            REGIS_OF_LAND_NOT_SUBMIT:
              this.stateLevelDetails[i].REGIS_OF_LAND_NOT_SUBMIT,
            FACIL_AT_BUILD_SITE_SUBMIT:
              this.stateLevelDetails[i].FACIL_AT_BUILD_SITE_SUBMIT,
            FACIL_AT_BUILD_SITE_NOT_SUBMIT:
              this.stateLevelDetails[i].FACIL_AT_BUILD_SITE_NOT_SUBMIT,
            BUILD_BASE_LEVEL_SUBMIT:
              this.stateLevelDetails[i].BUILD_BASE_LEVEL_SUBMIT,
            BUILD_BASE_LEVEL_NOT_SUBMIT:
              this.stateLevelDetails[i].BUILD_BASE_LEVEL_NOT_SUBMIT,
            BUILD_BASE_LEVEL_PARTI_SUBMIT:
              this.stateLevelDetails[i].BUILD_BASE_LEVEL_PARTI_SUBMIT,
            SUPER_STRUCTURE_SUBMIT:
              this.stateLevelDetails[i].SUPER_STRUCTURE_SUBMIT,
            SUPER_STRUCTURE_NOT_SUBMIT:
              this.stateLevelDetails[i].SUPER_STRUCTURE_NOT_SUBMIT,
            SUPER_STRUC_SUBMIT_PART_SUBMIT:
              this.stateLevelDetails[i].SUPER_STRUC_SUBMIT_PART_SUBMIT,
            FINISH_LEVEL_SUBMIT: this.stateLevelDetails[i].FINISH_LEVEL_SUBMIT,
            FINISH_LEVEL_NOT_SUBMIT:
              this.stateLevelDetails[i].FINISH_LEVEL_NOT_SUBMIT,
            FINISH_LEVEL_PART_SUBMIT:
              this.stateLevelDetails[i].FINISH_LEVEL_PART_SUBMIT,
            OTHER_INFRASTRAC_SUBMIT:
              this.stateLevelDetails[i].OTHER_INFRASTRAC_SUBMIT,
            OTHER_INFRASTRAC_NOT_SUBMIT:
              this.stateLevelDetails[i].OTHER_INFRASTRAC_NOT_SUBMIT,
            OTHER_INFRASTRAC_PARTI_SUBMIT:
              this.stateLevelDetails[i].OTHER_INFRASTRAC_PARTI_SUBMIT,
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onDistrictChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'BMCU Construction State Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const fileName = 'stateLevelBMCUConstructionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.BmcuConstruction.stateLevelPDFReport();
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
