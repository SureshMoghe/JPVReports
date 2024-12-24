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
  selector: 'app-vv-farmer-approved-list',
  templateUrl: './vv-farmer-approved-list.component.html',
  styleUrls: ['./vv-farmer-approved-list.component.css'],
})
export class VvFarmerApprovedListComponent
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

  approvedListDetails = [];

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
      const res = await this.vvFarmerAPI.totalApprovedFarmersList(req);
      if (res.success) {
        this.excelData = [];
        this.approvedListDetails = res.result;
        for (let i = 0; i < this.approvedListDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            FARMER_NAME: this.approvedListDetails[i].FARMER_NAME,
            UID_NUM: this.approvedListDetails[i].UID_NUM,
            MOBILE_NUMBER: this.approvedListDetails[i].MOBILE_NUMBER,
            BANK_NAME: this.approvedListDetails[i].BANK_NAME,
            BANK_BRANCH: this.approvedListDetails[i].BANK_BRANCH,
            IFSC_CODE: this.approvedListDetails[i].IFSC_CODE,
            MICR_CODE: this.approvedListDetails[i].MICR_CODE,
            BANK_PINCODE: this.approvedListDetails[i].BANK_PINCODE,
            ACCOUNT_NUMBER: this.approvedListDetails[i].ACCOUNT_NUMBER,
            PAN_CARD: this.approvedListDetails[i].PAN_CARD,
            MILK_POTENTIAL_BUFFALO: this.approvedListDetails[i]
              .MILK_POTENTIAL_BUFFALO,
            MILK_POTENTIAL_COW: this.approvedListDetails[i].MILK_POTENTIAL_COW,
            NOOFBUFFALOMALE: this.approvedListDetails[i].NOOFBUFFALOMALE,
            NOOFBUFFALOFEMALE: this.approvedListDetails[i].NOOFBUFFALOFEMALE,
            NOOFWHITECALLTEFEMALE: this.approvedListDetails[i]
              .NOOFWHITECALLTEFEMALE,
            NOOFWHITECATTLEMALE: this.approvedListDetails[i]
              .NOOFWHITECATTLEMALE,
            NO_OF_MILCH_ANIMALS_COW: this.approvedListDetails[i]
              .NO_OF_MILCH_ANIMALS_COW,
            INSERTED_DATE: this.approvedListDetails[i].INSERTED_DATE,
            APPROVED_BY_PERSON_NAME: this.approvedListDetails[i]
              .APPROVED_BY_PERSON_NAME,
            UPDATED_DATE: this.approvedListDetails[i].UPDATED_DATE,
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
      const res = this.utils.DMSFileDownload(photo);
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
      const res = await this.vvFarmerAPI.totalApprovedFarmersListPDF(req);
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
