import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BuildingInspectionService } from '../../services/building-inspection.service';

@Component({
  selector: 'app-building-inspection-detail',
  templateUrl: './building-inspection-detail.component.html',
  styleUrls: ['./building-inspection-detail.component.css'],
})
export class BuildingInspectionDetailComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  inspectionDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private buildingInspect: BuildingInspectionService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
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
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.buildingInspect.detailLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.inspectionDetails = res.result;
        for (let i = 0; i < this.inspectionDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.inspectionDetails[i].VILLAGE_NAME,
            AMC_ID: this.inspectionDetails[i].AMC_ID,
            ROUTE_NAME: this.inspectionDetails[i].ROUTE_NAME,
            IS_INSPECTION_DATE: this.inspectionDetails[i].IS_INSPECTION_DATE,
            IS_INSPECTION_TIME: this.inspectionDetails[i].IS_INSPECTION_TIME,
            IS_AMCU_BUILDING:
              this.inspectionDetails[i].IS_AMCU_BUILDING === '1' ? 'YES' : 'NO',
            BUILDING_NAME: this.inspectionDetails[i].BUILDING_NAME,
            IS_VILLAGE_LOCATED_IN_CENTERLY:
              this.inspectionDetails[i].IS_VILLAGE_LOCATED_IN_CENTERLY === '1'
                ? 'YES'
                : 'NO',
            IS_SAFETY_ARRANGEMENTS:
              this.inspectionDetails[i].IS_SAFETY_ARRANGEMENTS === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ELECTRIC_CONNECTION:
              this.inspectionDetails[i].IS_AVIL_ELECTRIC_CONNECTION === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ELECTRIC_EARTHING:
              this.inspectionDetails[i].IS_AVIL_ELECTRIC_EARTHING === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_SPACE_VEHICAL_MOVMENT:
              this.inspectionDetails[i].IS_AVIL_SPACE_VEHICAL_MOVMENT === '1'
                ? 'YES'
                : 'NO',
            IS_AVIL_ROAD_TO_APPROCH_AMCU:
              this.inspectionDetails[i].IS_AVIL_ROAD_TO_APPROCH_AMCU === '1'
                ? 'YES'
                : 'NO',
            REQ_MILK_CANS: this.inspectionDetails[i].REQ_MILK_CANS,
            IS_HAVING_NETWORK_CONNECTIVITY:
              this.inspectionDetails[i].IS_HAVING_NETWORK_CONNECTIVITY,
            BUILDING_ADDRESS: this.inspectionDetails[i].BUILDING_ADDRESS,
            BUILDING_STREET: this.inspectionDetails[i].BUILDING_STREET,
            BUILDING_LAT: this.inspectionDetails[i].BUILDING_LAT,
            BUILDING_LONG: this.inspectionDetails[i].BUILDING_LONG,
            UNIQUE_ID: this.inspectionDetails[i].UNIQUE_ID,
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

  async btnPhotoView(photo): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(photo);
      if (res.success) {
        let devicesPhoto = (
          this.sanitizer.bypassSecurityTrustResourceUrl(res.result) as any
        ).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(devicesPhoto);
        // this.toast.showImage(devicesPhoto);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Building Inspection Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        districtName: this.districtName,
        mentorName: this.mentorName,
        rbkName: this.rbkName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'detailLevelBuildingInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.buildingInspect.detailLevelInspectPDFReport(req);
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
