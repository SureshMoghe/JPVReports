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
  selector: 'app-surveyed-hh-milk-pouring-farmers',
  templateUrl: './surveyed-hh-milk-pouring-farmers.component.html',
  styleUrls: ['./surveyed-hh-milk-pouring-farmers.component.css'],
})
export class SurveyedHhMilkPouringFarmersComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() routeId: any;
  @Input() routeName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() clusterId: any;
  @Input() clusterName: any;

  volunteerWiseDetails = [];
  reportTotals = {
    S_NO: '-',
    VDCS_CODE: '-',
    VILLAGE_NAME: '-',
    FARMER_CODE: '-',
    FARMER_NAME: 'TOTAL',
    FARMER_MBL_NO: '-',
    LAST_MILK_POURING_DATE: '-',
    NO_OF_LTRS_MILK_POURED: 0,
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
      this.routeId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined &&
      this.clusterId !== null &&
      this.clusterId !== '' &&
      this.clusterId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        VDCS_CODE: '-',
        VILLAGE_NAME: '-',
        FARMER_CODE: '-',
        FARMER_NAME: 'TOTAL',
        FARMER_MBL_NO: '-',
        LAST_MILK_POURING_DATE: '-',
        NO_OF_LTRS_MILK_POURED: 0,
      };
      const req = {
        districtId: this.districtId,
        route: this.routeId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        clusterId: this.clusterId,
      };
      this.volunteerWiseDetails = [];
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.surveyedHHMilkPouringFarmersReport(req);
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.volunteerWiseDetails = res.result;
        for (let i = 0; i < this.volunteerWiseDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_LTRS_MILK_POURED += parseFloat(
            this.volunteerWiseDetails[i].NO_OF_LTRS_MILK_POURED
          );
          let singleRow = {
            S_NO: i + 1,
            VDCS_CODE: this.volunteerWiseDetails[i].VDCS_CODE,
            VILLAGE_NAME: this.volunteerWiseDetails[i].VILLAGE_NAME,
           // ROUTE_NO: this.volunteerWiseDetails[i].ROUTE_NO,
            FARMER_CODE: this.volunteerWiseDetails[i].FARMER_CODE,
            FARMER_NAME: this.volunteerWiseDetails[i].FARMER_NAME,
            FARMER_MBL_NO: this.volunteerWiseDetails[i].FARMER_MBL_NO,
            LAST_MILK_POURING_DATE:
              this.volunteerWiseDetails[i].LAST_MILK_POURING_DATE,
            NO_OF_LTRS_MILK_POURED:
              this.volunteerWiseDetails[i].NO_OF_LTRS_MILK_POURED,
          };
          this.reportTotals.NO_OF_LTRS_MILK_POURED = parseFloat(
            this.reportTotals.NO_OF_LTRS_MILK_POURED.toFixed(2)
          );
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
      'Farmer Milk Pouring Volunteer Wise Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.routeId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        districtName: this.districtName,
        routeName: this.routeName,
        mandalName: this.mandalName,
        rbkName: this.rbkName,
      };
      const fileName = 'volunteerWiseFarmerMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.surveyedHHMilkPouringFarmersReportPDF(req);
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
