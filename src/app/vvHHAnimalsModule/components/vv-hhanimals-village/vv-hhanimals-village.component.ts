import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
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
  selector: 'app-vv-hhanimals-village',
  templateUrl: './vv-hhanimals-village.component.html',
  styleUrls: ['./vv-hhanimals-village.component.css'],
})
export class VvHHAnimalsVillageComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;

  villageLevelDetails = [];

  excelData = [];

  reportTotals = {
    S_NO: '-',
    CLUSTER_NAME: 'TOTAL',
    TOTAL_HOUSEHOLDS: 0,
    TOTAL_ANIMALS: 0,
    TOTAL_REGISTRED_HOUSEHOLDS: 0,
    PENDING_HOUSEHOLDS: 0,
    TOTAL_MILCHYANM_OWNERS_HH: 0,
    TOTAL_MILCHYANM_OWNERS_REGI_HH: 0,
    TOTAL_HH_ANM_NOT_HAVING_SUR: 0,
  };

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
    if (
      this.villageId === null &&
      this.villageId === '' &&
      this.villageId === undefined
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        CLUSTER_NAME: 'TOTAL',
        TOTAL_HOUSEHOLDS: 0,
        TOTAL_ANIMALS: 0,
        TOTAL_REGISTRED_HOUSEHOLDS: 0,
        PENDING_HOUSEHOLDS: 0,
        TOTAL_MILCHYANM_OWNERS_HH: 0,
        TOTAL_MILCHYANM_OWNERS_REGI_HH: 0,
        TOTAL_HH_ANM_NOT_HAVING_SUR: 0,
      };
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalVillageReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HOUSEHOLDS += parseInt(
            this.villageLevelDetails[i].TOTAL_HOUSEHOLDS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_ANIMALS += parseInt(
            this.villageLevelDetails[i].TOTAL_ANIMALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REGISTRED_HOUSEHOLDS += parseInt(
            this.villageLevelDetails[i].TOTAL_REGISTRED_HOUSEHOLDS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.PENDING_HOUSEHOLDS += parseInt(
            this.villageLevelDetails[i].PENDING_HOUSEHOLDS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILCHYANM_OWNERS_HH += parseInt(
            this.villageLevelDetails[i].TOTAL_MILCHYANM_OWNERS_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MILCHYANM_OWNERS_REGI_HH += parseInt(
            this.villageLevelDetails[i].TOTAL_MILCHYANM_OWNERS_REGI_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH_ANM_NOT_HAVING_SUR += parseInt(
            this.villageLevelDetails[i].TOTAL_HH_ANM_NOT_HAVING_SUR
          );
          let singleRow = {
            S_NO: i + 1,
            CLUSTER_NAME: this.villageLevelDetails[i].CLUSTER_NAME,
            TOTAL_HOUSEHOLDS: this.villageLevelDetails[i].TOTAL_HOUSEHOLDS,
            TOTAL_ANIMALS: this.villageLevelDetails[i].TOTAL_ANIMALS,
            TOTAL_REGISTRED_HOUSEHOLDS: this.villageLevelDetails[i]
              .TOTAL_REGISTRED_HOUSEHOLDS,
            PENDING_HOUSEHOLDS: this.villageLevelDetails[i].PENDING_HOUSEHOLDS,
            TOTAL_MILCHYANM_OWNERS_HH: this.villageLevelDetails[i]
              .TOTAL_MILCHYANM_OWNERS_HH,
            TOTAL_MILCHYANM_OWNERS_REGI_HH: this.villageLevelDetails[i]
              .TOTAL_MILCHYANM_OWNERS_REGI_HH,
            TOTAL_HH_ANM_NOT_HAVING_SUR: this.villageLevelDetails[i]
              .TOTAL_HH_ANM_NOT_HAVING_SUR,
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
      'Volunteer Farmer HouseHold Data Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelVVFarmerHouseHoldReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvHHAnimalVillagePDFReport(req);
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
