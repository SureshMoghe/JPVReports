import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-building-inspect',
  templateUrl: './village-meeting-building-inspect.component.html',
  styleUrls: ['./village-meeting-building-inspect.component.css'],
})
export class VillageMeetingBuildingInspectComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  inspectDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private villageMeetingsAPI: VillageMeetingService,
    private utils: UtilsService,
    private logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mentorId === undefined &&
    //   this.mentorId === '' &&
    //   this.mentorId === null
    // ) {
    //   return;
    // }
    // if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
    //   return;
    // }
    // this.loadReport();
  }
  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.BuildingInspectReport(req);
      if (res.success) {
        this.excelData = [];
        this.inspectDetails = res.result;
        for (let i = 0; i < this.inspectDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.inspectDetails[i].ROUTE_NAME,
            VILLAGE_NAME1: this.inspectDetails[i].VILLAGE_NAME1,
            BUILDING_ADDRESS: this.inspectDetails[i].BUILDING_ADDRESS,
            BUILDING_STREET: this.inspectDetails[i].BUILDING_STREET,
            BUILDING_PINCODE: this.inspectDetails[i].BUILDING_PINCODE,
            IS_INSPECTION_DATE: this.inspectDetails[i].IS_INSPECTION_DATE,
            IS_INSPECTION_TIME: this.inspectDetails[i].IS_INSPECTION_TIME,
            BUILDING_LONG: this.inspectDetails[i].BUILDING_LONG,
            BUILDING_LAT: this.inspectDetails[i].BUILDING_LAT,
            IS_AMCU_BUILDING:
              this.inspectDetails[i].IS_AMCU_BUILDING === '1' ? 'YES' : 'NO',
            IS_VILLAGE_LOCATED_IN_CENTERLY:
              this.inspectDetails[i].IS_VILLAGE_LOCATED_IN_CENTERLY === '1'
                ? 'YES'
                : 'NO',
            IS_SAFETY_ARRANGEMENTS:
              this.inspectDetails[i].IS_SAFETY_ARRANGEMENTS === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ELECTRIC_CONNECTION:
              this.inspectDetails[i].IS_AVIL_ELECTRIC_CONNECTION === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ELECTRIC_EARTHING:
              this.inspectDetails[i].IS_AVIL_ELECTRIC_EARTHING === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_SPACE_VEHICAL_MOVMENT:
              this.inspectDetails[i].IS_AVIL_SPACE_VEHICAL_MOVMENT === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ROAD_TO_APPROCH_AMCU:
              this.inspectDetails[i].IS_AVIL_ROAD_TO_APPROCH_AMCU === '1'
                ? 'YES'
                : 'NO',
            IS_HAVING_NETWORK_CONNECTIVITY:
              this.inspectDetails[i].IS_HAVING_NETWORK_CONNECTIVITY === '1'
                ? 'YES'
                : 'NO',
          };

          this.excelData.push(singleRow);
        }
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
      'village Meeting Building Inspection Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'buildingInspectionVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.villageMeetingsAPI.BuildingInspectVillageMeetingPDFReport(
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
