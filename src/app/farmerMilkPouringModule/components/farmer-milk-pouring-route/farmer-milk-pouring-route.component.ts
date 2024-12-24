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
  selector: 'app-farmer-milk-pouring-route',
  templateUrl: './farmer-milk-pouring-route.component.html',
  styleUrls: ['./farmer-milk-pouring-route.component.css'],
})
export class FarmerMilkPouringRouteComponent
  implements OnInit, OnDestroy, AfterViewInit 
{
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMandalChange = new EventEmitter<string>();
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() routeId: any;
  @Input() routeName: any;
  @Input() phaseid:any;
  @Input() phasename:any;
  
  routeLevelDetails = [];
  reportTotals = {
    S_NO: '-',
    MANDAL_NAME: 'TOTAL',
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
      this.districtId !== undefined &&
      this.routeId !== null &&
      this.routeId !== '' &&
      this.routeId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        MANDAL_NAME: 'TOTAL',
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
      const req = {
        districtId: this.districtId,
        route: this.routeId,
        subReportType:this.phaseid,
      };
      this.routeLevelDetails = [];
      this.spinner.show();
      const res = await this.farmerMilkPouring.routeFarmerMilkPouringReport(
        req
      );
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.routeLevelDetails = res.result;
        for (let i = 0; i < this.routeLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_RBK += parseInt(
            this.routeLevelDetails[i].TOTAL_RBK
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VILLAGES += parseInt(
            this.routeLevelDetails[i].TOTAL_VILLAGES
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_VV += parseInt(
            this.routeLevelDetails[i].TOTAL_VV
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.routeLevelDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REG_FARMERS += parseInt(
            this.routeLevelDetails[i].TOTAL_REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WITH_M_ANM += parseInt(
            this.routeLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WO_M_ANM += parseInt(
            this.routeLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.routeLevelDetails[i].NO_OF_MILCH_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_SUR_REG_MILK_NOT_POUR_FAR += parseInt(
            this.routeLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_HH_WITHOUT_ANM += parseInt(
            this.routeLevelDetails[i].TOT_HH_WITHOUT_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING_HH += parseInt(
            this.routeLevelDetails[i].TOTAL_PENDING_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FMR_REGI_MILCH_ANM_COLL_PED += parseInt(
            this.routeLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED
          );
          let singleRow = {
            S_NO: i + 1,
            MANDAL_NAME: this.routeLevelDetails[i].MANDAL_NAME,
            TOTAL_RBK: this.routeLevelDetails[i].TOTAL_RBK,
            TOTAL_VILLAGES: this.routeLevelDetails[i].TOTAL_VILLAGES,
            TOTAL_VV: this.routeLevelDetails[i].TOTAL_VV,
            TOTAL_HH: this.routeLevelDetails[i].TOTAL_HH,
            TOTAL_REG_FARMERS: this.routeLevelDetails[i].TOTAL_REG_FARMERS,
            TOT_REG_MPOUR_FAR_WITH_M_ANM:
              this.routeLevelDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM,
            TOT_REG_MPOUR_FAR_WO_M_ANM:
              this.routeLevelDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM,
            NO_OF_MILCH_ANM: this.routeLevelDetails[i].NO_OF_MILCH_ANM,
            TOT_SUR_REG_MILK_NOT_POUR_FAR:
              this.routeLevelDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR,
            TOT_HH_WITHOUT_ANM: this.routeLevelDetails[i].TOT_HH_WITHOUT_ANM,
            TOTAL_PENDING_HH: this.routeLevelDetails[i].TOTAL_PENDING_HH,
            FMR_REGI_MILCH_ANM_COLL_PED:
              this.routeLevelDetails[i].FMR_REGI_MILCH_ANM_COLL_PED,
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
      'Farmer Milk Pouring Route Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.routeId,
        subReportType: this.phaseid,
        columnValue: this.phasename
      };
      const fileName = 'routeLevelFarmerMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerMilkPouring.routeFarmerMilkPouringReportPDF(
        req
      );
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

  btnGetDetails(obj): void {debugger;
    const requestData = {
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      routeId: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      mandalId: obj.MANDAL_CODE,
      mandalName: obj.MANDAL_NAME,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onMandalChange.emit(encryptedString);
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