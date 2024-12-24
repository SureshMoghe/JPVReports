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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerSmsService } from '../../services/farmer-sms.service';

@Component({
  selector: 'app-farmer-sms-detail',
  templateUrl: './farmer-sms-detail.component.html',
  styleUrls: ['./farmer-sms-detail.component.css'],
})
export class FarmerSmsDetailComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() phaseid:any;
  @Input() phasename:any;

  villageLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerSms: FarmerSmsService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    if (
      this.mandalId === null &&
      this.mandalId === '' &&
      this.mandalId === undefined
    ) {
      return;
    }
    if (this.rbkId === null && this.rbkId === '' && this.rbkId === undefined) {
      return;
    }
    if (
      this.villageId === null &&
      this.villageId === '' &&
      this.villageId === undefined
    ) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {}

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        //rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkId:this.phaseid,
      };
      this.villageLevelDetails = [];
      this.spinner.show();
      const res = await this.farmerSms.farmerSmsDetailsLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            FARMER_CODE: this.villageLevelDetails[i].FARMER_CODE,
            FARMER_NAME: this.villageLevelDetails[i].FARMER_NAME,
            UID_NUM: this.villageLevelDetails[i].UID_NUM,
            SMS_FLAG: this.villageLevelDetails[i].SMS_FLAG,
            INVITATION_SENT: this.villageLevelDetails[i].INVITATION_SENT,
            VV_INVITATION_SENT: this.villageLevelDetails[i].VV_INVITATION_SENT,
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
      'Farmer SMS Village Level Report',
      true
    );
  }
  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
     //   rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        rbkId:this.phaseid,
        columnValue:this.phasename
      };
      const fileName = 'villageLevelFarmerSmsReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerSms.farmerSmsDetailsLevelReportPDF(req);
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
