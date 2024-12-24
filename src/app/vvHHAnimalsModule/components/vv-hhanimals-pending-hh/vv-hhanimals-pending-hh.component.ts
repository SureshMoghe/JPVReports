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
import { VvHHAnimalsService } from '../../services/vv-hhanimals.service';

@Component({
  selector: 'app-vv-hhanimals-pending-hh',
  templateUrl: './vv-hhanimals-pending-hh.component.html',
  styleUrls: ['./vv-hhanimals-pending-hh.component.css'],
})
export class VvHhanimalsPendingHHComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() clusterId: any;
  @Input() clusterName: any;
  @Input() phaseid: any;
  @Input() phasename: any;


  pendingHHDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VvHHAnimalsService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.clusterId === null &&
      this.clusterId === '' &&
      this.clusterId === undefined
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        clusterId: this.clusterId,
        districtId:this.phaseid,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.pendingHouseHoldReport(req);
      if (res.success) {
        this.excelData = [];
        this.pendingHHDetails = res.result;
        for (let i = 0; i < this.pendingHHDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            HOUSEHOLD_ID: this.pendingHHDetails[i].HOUSEHOLD_ID,
            CITIZEN_NAME: this.pendingHHDetails[i].CITIZEN_NAME,
            GENDER: this.pendingHHDetails[i].GENDER,
            DOB_DT: this.pendingHHDetails[i].DOB_DT,
            UID_NUM: this.pendingHHDetails[i].UID_NUM,
            MOBILE_NUMBER: this.pendingHHDetails[i].MOBILE_NUMBER
          };
          this.excelData.push(singleRow);
        }
        this.spinner.hide();
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Volunteer Farmer HouseHold Pending HouseHold Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
      //  districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId:this.phaseid,
      };
      const fileName = 'vvHHAnimalPendingHHPDFReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.pendingHouseHoldPDFReport(req);
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
