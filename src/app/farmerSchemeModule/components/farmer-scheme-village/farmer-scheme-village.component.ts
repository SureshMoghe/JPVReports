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
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerSchemeService } from '../../services/farmer-scheme.service';

@Component({
  selector: 'app-farmer-scheme-village',
  templateUrl: './farmer-scheme-village.component.html',
  styleUrls: ['./farmer-scheme-village.component.css']
})
export class FarmerSchemeVillageComponent implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() route: any;
  @Input() routeName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() actionTaken: any;
  villageLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerSchemeAPI: FarmerSchemeService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.route,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken: this.actionTaken
      };
      this.spinner.show();
      const res = await this.farmerSchemeAPI.nonMilkPouringReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.villageLevelDetails[i].DISTRICT,
            ROUTE_NAME: this.villageLevelDetails[i].ROUTE_NAME,
            MANDAL_NAME: this.villageLevelDetails[i].MANDAL_NAME,
            RBK_NAME: this.villageLevelDetails[i].RBK_NAME,
            VILLAGE_NAME: this.villageLevelDetails[i].VILLAGE_NAME,
            FARMER_CODE: this.villageLevelDetails[i].FARMER_CODE,
            FARMER_NAME: this.villageLevelDetails[i].FARMER_NAME,
            UID_NUM: this.villageLevelDetails[i].UID_NUM,
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
      'Farmer Scheme Wise Village Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        route: this.route,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        actionTaken: this.actionTaken
      };
      const fileName = 'FarmerSchemeWiseVillageLeveReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerSchemeAPI.nonMilkPouringPDFReport(req);
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

