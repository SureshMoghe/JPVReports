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
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VolunteerFarmerDataService } from '../../services/volunteer-farmer-data.service';

@Component({
  selector: 'app-vv-farmer-data-village',
  templateUrl: './vv-farmer-data-village.component.html',
  styleUrls: ['./vv-farmer-data-village.component.css'],
})
export class VvFarmerDataVillageComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() route: any;
  @Input() routeName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;

  villageLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
      return;
    }
    if (this.route === undefined && this.route === '' && this.route === null) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    if (
      this.villageId === undefined &&
      this.villageId === '' &&
      this.villageId === null
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        route: this.route,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataVillageReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            FARMER_NAME: this.villageLevelDetails[i].FARMER_NAME,
            UID_NUM: this.villageLevelDetails[i].UID_NUM,
            MOBILE_NUMBER: this.villageLevelDetails[i].MOBILE_NUMBER,
            BANK_NAME: this.villageLevelDetails[i].BANK_NAME,
            BANK_BRANCH: this.villageLevelDetails[i].BANK_BRANCH,
            IFSC_CODE: this.villageLevelDetails[i].IFSC_CODE,
            MICR_CODE: this.villageLevelDetails[i].MICR_CODE,
            BANK_PINCODE: this.villageLevelDetails[i].BANK_PINCODE,
            ACCOUNT_NUMBER: this.villageLevelDetails[i].ACCOUNT_NUMBER,
            PAN_CARD: this.villageLevelDetails[i].PAN_CARD,
            MILK_POTENTIAL_BUFFALO: this.villageLevelDetails[i]
              .MILK_POTENTIAL_BUFFALO,
            MILK_POTENTIAL_COW: this.villageLevelDetails[i].MILK_POTENTIAL_COW,
            NOOFBUFFALOMALE: this.villageLevelDetails[i].NOOFBUFFALOMALE,
            NOOFBUFFALOFEMALE: this.villageLevelDetails[i].NOOFBUFFALOFEMALE,
            NOOFWHITECALLTEFEMALE: this.villageLevelDetails[i]
              .NOOFWHITECALLTEFEMALE,
            NOOFWHITECATTLEMALE: this.villageLevelDetails[i]
              .NOOFWHITECATTLEMALE,
            NO_OF_MILCH_ANIMALS_COW: this.villageLevelDetails[i]
              .NO_OF_MILCH_ANIMALS_COW,
            INSERTED_DATE: this.villageLevelDetails[i].INSERTED_DATE,
            APPROVED_BY_PERSON_NAME: this.villageLevelDetails[i]
              .APPROVED_BY_PERSON_NAME,
            UPDATED_DATE: this.villageLevelDetails[i].UPDATED_DATE,
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

  async btnPhotoView(photo: any): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSVolunteerFileDownload(photo);
      if (res.success) {
        let passBookImage = (this.sanitizer.bypassSecurityTrustResourceUrl(
          res.result
        ) as any).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(passBookImage);
        // this.toast.showImage(passBookImage);
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
      'Volunteer Farmer Data Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        route: this.route,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelVolunteerFarmerDataReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.vvFarmerDataVillagePDFReport(req);
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
