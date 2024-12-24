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
import { AmcuInspectionService } from '../../services/amcu-inspection.service';

@Component({
  selector: 'app-amcu-inspected-socities',
  templateUrl: './amcu-inspected-socities.component.html',
  styleUrls: ['./amcu-inspected-socities.component.css'],
})
export class AmcuInspectedSocitiesComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() routeNo: any;
  @Input() routeName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() inspectionName: any;
  @Input() typeOfInspection: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() uniqueId: any;

  detailLevelDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private amcuInspection: AmcuInspectionService,
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
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        routeNo: this.routeNo,
        rbkId: this.rbkId,
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      this.spinner.show();
      const res = await this.amcuInspection.amcuNoOfSocietiesInspected(req);
      if (res.success) {
        this.excelData = [];
        this.detailLevelDetails = res.result;
        for (let i = 0; i < this.detailLevelDetails.length; i++) {
          if (this.typeOfInspection === '1') {
            const singleRow = {
              S_NO: i + 1,
              ROUTE_NAME: this.detailLevelDetails[i].ROUTE_NAME,
              MANDAL_NAME: this.detailLevelDetails[i].MANDAL_NAME,
              SOCIETY_NAME: this.detailLevelDetails[i].SOCIETY_NAME,
              FARMER_ID: this.detailLevelDetails[i].FARMER_ID,
              FARMER_NAME: this.detailLevelDetails[i].FARMER_NAME,
              PAYMENT_CYCLE: this.detailLevelDetails[i].PAYMENT_CYCLE,
              MILK_QUANTITY: this.detailLevelDetails[i].MILK_QUANTITY,
              FAT_IN_MILK: this.detailLevelDetails[i].FAT_IN_MILK,
              SNF_IN_MILK: this.detailLevelDetails[i].SNF_IN_MILK,
              AMOUNT: this.detailLevelDetails[i].AMOUNT,
              CREDITED_AMOUNT: this.detailLevelDetails[i].CREDITED_AMOUNT,
              INSERTED_ON: this.detailLevelDetails[i].INSERTED_ON,
            };
            this.excelData.push(singleRow);
          } else if (this.typeOfInspection === '2') {
            const singleRow = {
              S_NO: i + 1,
              ROUTE_NAME: this.detailLevelDetails[i].ROUTE_NAME,
              MANDAL_NAME: this.detailLevelDetails[i].MANDAL_NAME,
              SOCIETY_NAME: this.detailLevelDetails[i].SOCIETY_NAME,
              FARMER_ID: this.detailLevelDetails[i].FARMER_ID,
              FARMER_NAME: this.detailLevelDetails[i].FARMER_NAME,
              MILK_TYPE: this.detailLevelDetails[i].MILK_TYPE,
              FAT_IN_MILK: this.detailLevelDetails[i].FAT_IN_MILK,
              SNF_IN_MILK: this.detailLevelDetails[i].SNF_IN_MILK,
              AMOUNT: this.detailLevelDetails[i].AMOUNT,
              INSERTED_ON: this.detailLevelDetails[i].INSERTED_ON,
            };
            this.excelData.push(singleRow);
          } else if (this.typeOfInspection === '3') {
            const singleRow = {
              S_NO: i + 1,
              ROUTE_NAME: this.detailLevelDetails[i].ROUTE_NAME,
              MANDAL_NAME: this.detailLevelDetails[i].MANDAL_NAME,
              SOCIETY_NAME: this.detailLevelDetails[i].SOCIETY_NAME,
              EQUIPMENT_ID: this.detailLevelDetails[i].EQUIPMENT_ID,
              EQUIPMENT_NAME: this.detailLevelDetails[i].EQUIPMENT_NAME,
              REASON_NAME: this.detailLevelDetails[i].REASON_NAME,
              REMARKS: this.detailLevelDetails[i].REMARKS,
              IS_EQUIPMENT_WORKING: this.detailLevelDetails[i]
                .IS_EQUIPMENT_WORKING,
              INSERTED_ON: this.detailLevelDetails[i].INSERTED_ON,
            };
            this.excelData.push(singleRow);
          } else if (this.typeOfInspection === '4') {
            const singleRow = {
              S_NO: i + 1,
              ROUTE_NAME: this.detailLevelDetails[i].ROUTE_NAME,
              MANDAL_NAME: this.detailLevelDetails[i].MANDAL_NAME,
              SOCIETY_NAME: this.detailLevelDetails[i].SOCIETY_NAME,
              INS_DATE: this.detailLevelDetails[i].INS_DATE,
              SHIFT: this.detailLevelDetails[i].SHIFT,
              MILK_TYPE: this.detailLevelDetails[i].MILK_TYPE,
              MILK_QUANTITY: this.detailLevelDetails[i].MILK_QUANTITY,
              FAT_IN_MILK: this.detailLevelDetails[i].FAT_IN_MILK,
              SNF_IN_MILK: this.detailLevelDetails[i].SNF_IN_MILK,
              AMOUNT: this.detailLevelDetails[i].AMOUNT,
              INSERTED_ON: this.detailLevelDetails[i].INSERTED_ON,
            };
            this.excelData.push(singleRow);
          }
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
      'AMCU Inspected Socities Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        routeNo: this.routeNo,
        rbkId: this.rbkId,
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
        inspectionName: this.inspectionName,
      };
      const fileName = 'AMCUInspectedSocitiesReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuInspection.amcuNoOfSocietiesInspectedPDF(req);
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
        let devicesPhoto = (this.sanitizer.bypassSecurityTrustResourceUrl(
          res.result
        ) as any).changingThisBreaksApplicationSecurity;
        this.utils.viewImage(devicesPhoto);
      //  this.toast.showImage(devicesPhoto);
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
