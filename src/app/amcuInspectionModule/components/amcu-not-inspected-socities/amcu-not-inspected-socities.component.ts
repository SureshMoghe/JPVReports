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
  selector: 'app-amcu-not-inspected-socities',
  templateUrl: './amcu-not-inspected-socities.component.html',
  styleUrls: ['./amcu-not-inspected-socities.component.css'],
})
export class AmcuNotInspectedSocitiesComponent
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
      const res = await this.amcuInspection.amcuNoOfNotSocietiesInspected(req);
      if (res.success) {
        this.excelData = [];
        this.detailLevelDetails = res.result;
        for (let i = 0; i < this.detailLevelDetails.length; i++) {
          const singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.detailLevelDetails[i].ROUTE_NAME,
            MANDAL_NAME: this.detailLevelDetails[i].MANDAL_NAME,
            SOCIETY_NAME: this.detailLevelDetails[i].SOCIETY_NAME,
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
      'AMCU Not Inspected Socities Report',
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
      };
      const fileName = 'AMCUNotInspectedSocitiesReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuInspection.amcuNoOfNotSocietiesInspectedPDF(
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

  async btnPhotoView(photo): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(photo);
      if (res.success) {
        const devicesPhoto = (this.sanitizer.bypassSecurityTrustResourceUrl(
          res.result
        ) as any).changingThisBreaksApplicationSecurity;
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
