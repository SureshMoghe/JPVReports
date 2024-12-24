import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AmcuNetworkInspectionService } from '../../services/amcu-network-inspection.service';

@Component({
  selector: 'app-network-submitted-villages',
  templateUrl: './network-submitted-villages.component.html',
  styleUrls: ['./network-submitted-villages.component.css'],
})
export class NetworkSubmittedVillagesComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() networkType: any;
  networkSubmittedDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private amcuNetwork: AmcuNetworkInspectionService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.networkType === null &&
      this.networkType === '' &&
      this.networkType === undefined
    ) {
      return;
    }
    this.loadReport();
  }
  ngOnChanges(): void {
    // if (this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        networkType: this.networkType,
      };
      this.spinner.show();
      const res = await this.amcuNetwork.networkSubmittedVillagesList(req);
      if (res.success) {
        this.excelData = [];
        this.networkSubmittedDetails = res.result;
        for (let i = 0; i < this.networkSubmittedDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.networkSubmittedDetails[i].DISTRICT,
            MANDAL_NAME: this.networkSubmittedDetails[i].MANDAL_NAME,
            RBK_NAME: this.networkSubmittedDetails[i].RBK_NAME,
            VILLAGE_NAME: this.networkSubmittedDetails[i].VILLAGE_NAME,
            NEWTWORK_TYE: this.networkSubmittedDetails[i].NEWTWORK_TYE,
            BUILDING_LAT: this.networkSubmittedDetails[i].BUILDING_LAT,
            BUILDING_LONG: this.networkSubmittedDetails[i].BUILDING_LONG,
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
      'AMCU Network Inspected Villages Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        networkType: this.networkType,
      };
      const fileName = 'AMCUNetworkInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuNetwork.networkSubmittedVillagesPDF(req);
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
