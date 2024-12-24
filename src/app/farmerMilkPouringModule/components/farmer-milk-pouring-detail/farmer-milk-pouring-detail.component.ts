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
import { FarmerMilkPouringService } from '../../services/farmer-milk-pouring.service';
@Component({
  selector: 'app-farmer-milk-pouring-detail',
  templateUrl: './farmer-milk-pouring-detail.component.html',
  styleUrls: ['./farmer-milk-pouring-detail.component.css'],
})
export class FarmerMilkPouringDetailComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() subReportType: any;

  @Input() phaseid: any;
  @Input() phasename: any;
 
  headingText = '';
  farmerMilkPouringDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerMilkPouring: FarmerMilkPouringService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {debugger;
    if (this.subReportType === '1') {
      this.headingText = 'Farmer Milk Pouring Total Registered Report --- '+this.phasename ;
    } else if (this.subReportType === '2') {
      this.headingText = 'Total Farmer Milk Pouring Report--- '+this.phasename;
    } else if (this.subReportType === '3') {
      this.headingText = 'Total Farmer Milk Not Pouring Report--- '+this.phasename;
    } else if (this.subReportType === '4') {
      this.headingText =
        'Milk Pouring Farmers With out Milch Animals Registered Report--- '+this.phasename;
    } else if (this.subReportType === '5') {
      this.headingText =
        'Farmer Registered By Mentor/RIC/DA/WEA/AHA Milch Animal Data Collection Pending Report--- '+this.phasename;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        subReportType: this.subReportType,
         clusterId:this.phaseid 
      };
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.FarmerDetailLevelMilkPouringReport(req);
      this.spinner.hide();
      if (res.success) {
        this.excelData = [];
        this.farmerMilkPouringDetails = res.result;
        for (let i = 0; i < this.farmerMilkPouringDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.farmerMilkPouringDetails[i].DISTRICT,
            ROUTE_NAME: this.farmerMilkPouringDetails[i].ROUTE_NAME,
            MANDAL_NAME: this.farmerMilkPouringDetails[i].MANDAL_NAME,
            RBK_NAME: this.farmerMilkPouringDetails[i].RBK_NAME,
            RBK_CODE: this.farmerMilkPouringDetails[i].RBK_CODE,
            AMCU_CODE: this.farmerMilkPouringDetails[i].AMCU_CODE,
            VILLAGE_NAME: this.farmerMilkPouringDetails[i].VILLAGE_NAME,
            FARMER_CODE: this.farmerMilkPouringDetails[i].FARMER_CODE,
            FARMER_NAME: this.farmerMilkPouringDetails[i].FARMER_NAME,
            UID_NUM: this.farmerMilkPouringDetails[i].UID_NUM,
            MOBILE_NUMBER: this.farmerMilkPouringDetails[i].MOBILE_NUMBER,
            COWS: this.farmerMilkPouringDetails[i].COWS,
            BUFFALOS: this.farmerMilkPouringDetails[i].BUFFALOS,
          };
          this.excelData.push(singleRow);
        }
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(this.excelData, this.headingText, true);
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        subReportType: this.subReportType,
        clusterId: this.phaseid,
                columnValue: this.phasename

      };
      const fileName = 'FarmerNonMilkPouringReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.farmerMilkPouring.FarmerDetailLevelMilkPouringReportPDF(req);
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
