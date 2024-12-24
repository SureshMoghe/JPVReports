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
import { DomSanitizer } from '@angular/platform-browser';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { PacsLandAllotmentService } from '../../services/pacs-land-allotment.service';

@Component({
  selector: 'app-pla-mandal',
  templateUrl: './pla-mandal.component.html',
  styleUrls: ['./pla-mandal.component.css'],
})
export class PlaMandalComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  mandalLevelDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private allotmentAPI: PacsLandAllotmentService,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.mandalId !== null &&
      this.mandalId !== '' &&
      this.mandalId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.allotmentAPI.pacsLandAllotmentMandalReport(req);
      if (res.success) {
        this.excelData = [];
        this.mandalLevelDetails = res.result;
        for (let i = 0; i < this.mandalLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DIVISION_NAME: this.mandalLevelDetails[i].DIVISION_NAME,
            VILLAGE_NAME: this.mandalLevelDetails[i].VILLAGE_NAME,
            PUBLIC_OWN_LAND: this.mandalLevelDetails[i].PUBLIC_OWN_LAND,
            SURVEY_NUMBER: this.mandalLevelDetails[i].SURVEY_NUMBER,
            AREA: this.mandalLevelDetails[i].AREA,
            LAND_ALLOTMENT_STATUS:
              this.mandalLevelDetails[i].LAND_ALLOTMENT_STATUS,
            LATITUDE: this.mandalLevelDetails[i].LATITUDE,
            LONGITUDE: this.mandalLevelDetails[i].LONGITUDE,
            NORTH_BOUNDARY: this.mandalLevelDetails[i].NORTH_BOUNDARY,
            SOUTH_BOUNDARY: this.mandalLevelDetails[i].SOUTH_BOUNDARY,
            EAST_BOUNDARY: this.mandalLevelDetails[i].EAST_BOUNDARY,
            WEST_BOUNDARY: this.mandalLevelDetails[i].WEST_BOUNDARY,
            HANDOVER_VILLAGE_NAME:
              this.mandalLevelDetails[i].HANDOVER_VILLAGE_NAME,
            SIGNED_BY_PERSON: this.mandalLevelDetails[i].SIGNED_BY_PERSON,
            LAND_TAKEN_BY_NAME: this.mandalLevelDetails[i].LAND_TAKEN_BY_NAME,
            LAND_TAKEN_BY_MOB_NO:
              this.mandalLevelDetails[i].LAND_TAKEN_BY_MOB_NO,
            LAND_TAKEN_BY_DISIGNATION:
              this.mandalLevelDetails[i].LAND_TAKEN_BY_DISIGNATION,
            LAND_HANDOVER_BY_NAME:
              this.mandalLevelDetails[i].LAND_HANDOVER_BY_NAME,
            LAND_HANDOVER_BY_MOB_NO:
              this.mandalLevelDetails[i].LAND_HANDOVER_BY_MOB_NO,
            LAND_HANDOVER_BY_DISIGNATION:
              this.mandalLevelDetails[i].LAND_HANDOVER_BY_DISIGNATION,
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
      'Land Allotment Mandal Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'mandalLevelMPFCLandAllotment';
      let basePDF = '';
      this.spinner.show();
      const res = await this.allotmentAPI.landAllotmentMandalPDFReport(req);
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

  async btnPhotoView(photo): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(photo);
      if (res.success) {
        let passbookPhoto = (
          this.sanitizer.bypassSecurityTrustResourceUrl(res.result) as any
        ).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(passbookPhoto);
        //  this.toast.showImage(passbookPhoto);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnPdfView(pdf): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(pdf);
      if (res.success) {
        this.utils.viewPDF(res.result);
        // let signedByPdf = 'data:application/pdf, ' + res.result;
        // window.open(signedByPdf, '_blank');
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
