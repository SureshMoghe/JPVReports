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
  selector: 'app-volunteer-wise-milk-pouring',
  templateUrl: './volunteer-wise-milk-pouring.component.html',
  styleUrls: ['./volunteer-wise-milk-pouring.component.css'],
})
export class VolunteerWiseMilkPouringComponent
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
  @Input() phaseid: any;
  @Input() phasename: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onVolunteerChange = new EventEmitter<string>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNonMilkPouringChange = new EventEmitter<string>();

  volunteerWiseDetails = [];
  reportTotals = {
    S_NO: '-',
    VOLUNTEER_NAME: '-',
    CLUSTER_NAME: 'TOTAL',
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
      this.routeId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined &&
      this.rbkId !== null &&
      this.rbkId !== '' &&
      this.rbkId !== undefined
    ) {
      this.loadReport();
    }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        VOLUNTEER_NAME: '-',
        CLUSTER_NAME: 'TOTAL',
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
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        subReportType:this.phaseid,
      };
      this.volunteerWiseDetails = [];
      this.spinner.show();
      const res = await this.farmerMilkPouring.volunteerWiseMilkPouringReport(
        req
      );
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.volunteerWiseDetails = res.result;
        for (let i = 0; i < this.volunteerWiseDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_HH += parseInt(
            this.volunteerWiseDetails[i].TOTAL_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_REG_FARMERS += parseInt(
            this.volunteerWiseDetails[i].TOTAL_REG_FARMERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WITH_M_ANM += parseInt(
            this.volunteerWiseDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_SUR_REG_MILK_NOT_POUR_FAR += parseInt(
            this.volunteerWiseDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MILCH_ANM += parseInt(
            this.volunteerWiseDetails[i].NO_OF_MILCH_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_REG_MPOUR_FAR_WO_M_ANM += parseInt(
            this.volunteerWiseDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOT_HH_WITHOUT_ANM += parseInt(
            this.volunteerWiseDetails[i].TOT_HH_WITHOUT_ANM
          );
          // tslint:disable-next-line: radix
          this.reportTotals.TOTAL_PENDING_HH += parseInt(
            this.volunteerWiseDetails[i].TOTAL_PENDING_HH
          );
          // tslint:disable-next-line: radix
          this.reportTotals.FMR_REGI_MILCH_ANM_COLL_PED += parseInt(
            this.volunteerWiseDetails[i].FMR_REGI_MILCH_ANM_COLL_PED
          );
          let singleRow = {
            S_NO: i + 1,
            VOLUNTEER_NAME: this.volunteerWiseDetails[i].VOLUNTEER_NAME,
            CLUSTER_NAME: this.volunteerWiseDetails[i].CLUSTER_NAME,
            TOTAL_HH: this.volunteerWiseDetails[i].TOTAL_HH,
            TOTAL_REG_FARMERS: this.volunteerWiseDetails[i].TOTAL_REG_FARMERS,
            TOT_REG_MPOUR_FAR_WITH_M_ANM:
              this.volunteerWiseDetails[i].TOT_REG_MPOUR_FAR_WITH_M_ANM,
            TOT_SUR_REG_MILK_NOT_POUR_FAR:
              this.volunteerWiseDetails[i].TOT_SUR_REG_MILK_NOT_POUR_FAR,
            NO_OF_MILCH_ANM: this.volunteerWiseDetails[i].NO_OF_MILCH_ANM,
            TOT_REG_MPOUR_FAR_WO_M_ANM:
              this.volunteerWiseDetails[i].TOT_REG_MPOUR_FAR_WO_M_ANM,
            TOT_HH_WITHOUT_ANM: this.volunteerWiseDetails[i].TOT_HH_WITHOUT_ANM,
            TOTAL_PENDING_HH: this.volunteerWiseDetails[i].TOTAL_PENDING_HH,
            FMR_REGI_MILCH_ANM_COLL_PED:
              this.volunteerWiseDetails[i].FMR_REGI_MILCH_ANM_COLL_PED,
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
        // phaseid:this.phaseid,
        // phasename:this.phasename,
        columnValue: this.phasename,
        subReportType: this.phaseid,
      };
      const fileName = 'volunteerWiseFarmerMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.volunteerWiseMilkPouringPDFReport(req);
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
      districtId: this.districtId,
      districtName: this.districtName,
      routeId: this.routeId,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      clusterId: obj.CLUSTER_ID,
      clusterName: obj.CLUSTER_NAME,
      phaseid:this.phaseid,
      phasename:this.phasename,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onVolunteerChange.emit(encryptedString);
  }

  btnNonMilkPouringDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      routeId: this.routeId,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      clusterId: obj.CLUSTER_ID,
      clusterName: obj.CLUSTER_NAME,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNonMilkPouringChange.emit(encryptedString);
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
