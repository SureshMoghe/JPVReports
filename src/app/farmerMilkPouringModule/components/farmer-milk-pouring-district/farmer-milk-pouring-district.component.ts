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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerMilkPouringService } from '../../services/farmer-milk-pouring.service';

@Component({
  selector: 'app-farmer-milk-pouring-district',
  templateUrl: './farmer-milk-pouring-district.component.html',
  styleUrls: ['./farmer-milk-pouring-district.component.css'],
})
export class FarmerMilkPouringDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRouteChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() phaseid: any;
  @Input() phasename: any;

  districtLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    ROUTE_NAME: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGES: 0,
    TOTAL_VV: 0,
    TOTAL_HH: 0,
    TOTAL_REG_FARMERS: 0,
    TOT_REG_MPOUR_FAR_WITH_M_ANM: 0,
    TOT_REG_MPOUR_FAR_WO_M_ANM: 0,
    NO_OF_MILCH_ANM: 0,
    TOT_SUR_REG_MILK_NOT_POUR_FAR: 0,
    TOT_HH_WITHOUT_ANM: 0,
    TOTAL_PENDING_HH: 0,
    FMR_REGI_MILCH_ANM_COLL_PED: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerMilkPouring: FarmerMilkPouringService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        ROUTE_NAME: 'TOTAL',
        TOTAL_MANDALS: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGES: 0,
        TOTAL_VV: 0,
        TOTAL_HH: 0,
        TOTAL_REG_FARMERS: 0,
        TOT_REG_MPOUR_FAR_WITH_M_ANM: 0,
        TOT_REG_MPOUR_FAR_WO_M_ANM: 0,
        NO_OF_MILCH_ANM: 0,
        TOT_SUR_REG_MILK_NOT_POUR_FAR: 0,
        TOT_HH_WITHOUT_ANM: 0,
        TOTAL_PENDING_HH: 0,
        FMR_REGI_MILCH_ANM_COLL_PED: 0,
      };debugger;
      const req = { 
        districtId: this.districtId,
        subReportType:this.phaseid,
      };
      this.districtLevelDetails = [];
      this.spinner.show();debugger;
      const res = await this.farmerMilkPouring.districtFarmerMilkPouringReport(
        req
      );
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_MANDALS += parseInt(
            this.districtLevelDetails[i].TOTAL_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.districtLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.districtLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.districtLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.districtLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REG_FARMERS += parseInt(
            this.districtLevelDetails[i].TOTAL_REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WITH_M_ANM += parseInt(
            this.districtLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_SUR_REG_MILK_NOT_POUR_FAR += parseInt(
            this.districtLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.districtLevelDetails[i].NO_OF_MILCH_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WO_M_ANM += parseInt(
            this.districtLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_HH_WITHOUT_ANM += parseInt(
            this.districtLevelDetails[i].TOT_HH_WITHOUT_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING_HH += parseInt(
            this.districtLevelDetails[i].TOTAL_PENDING_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FMR_REGI_MILCH_ANM_COLL_PED += parseInt(
            this.districtLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED
          );
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.districtLevelDetails[i].ROUTE_NAME,
            TOTAL_MANDALS: this.districtLevelDetails[i].TOTAL_MANDALS,
            TOTAL_RBK: this.districtLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.districtLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_VV: this.districtLevelDetails[i].TOTAL_VV,
            TOTAL_HH: this.districtLevelDetails[i].TOTAL_HH,
            TOTAL_REG_FARMERS: this.districtLevelDetails[i].TOTAL_REG_FARMERS,
            TOT_REG_MPOUR_FAR_WITH_M_ANM:
              this.districtLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM,
            TOT_SUR_REG_MILK_NOT_POUR_FAR:
              this.districtLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR,
            NO_OF_MILCH_ANM: this.districtLevelDetails[i].NO_OF_MILCH_ANM,
            TOT_REG_MPOUR_FAR_WO_M_ANM:
              this.districtLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM,
            TOT_HH_WITHOUT_ANM: this.districtLevelDetails[i].TOT_HH_WITHOUT_ANM,
            TOTAL_PENDING_HH: this.districtLevelDetails[i].TOTAL_PENDING_HH,
            FMR_REGI_MILCH_ANM_COLL_PED:
              this.districtLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
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
      'Farmer Milk Pouring District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        subReportType: this.phaseid,
                columnValue: this.phasename
      };
      const fileName = 'districtLevelFarmerMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.districtFarmerMilkPouringReportPDF(req);
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
      routeId: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onRouteChange.emit(encryptedString);
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
