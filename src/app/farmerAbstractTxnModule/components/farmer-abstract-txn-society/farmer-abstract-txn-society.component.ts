import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerAbstractTxnService } from '../../service/farmer-abstract-txn.service';

@Component({
  selector: 'app-farmer-abstract-txn-society',
  templateUrl: './farmer-abstract-txn-society.component.html',
  styleUrls: ['./farmer-abstract-txn-society.component.css'], 
})
export class FarmerAbstractTxnSocietyComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  input: any;

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
  @Input() phaseid: any;
  @Input() phasename: any;

  societyDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private abstractAPI: FarmerAbstractTxnService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
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
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
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
     //   districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        districtId:this.phaseid   //we are using districtid assigned value PHASEID 
      };
      this.spinner.show();
      const res = await this.abstractAPI.societyLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.societyDetails = res.result;
        for (let i = 0; i < this.societyDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            FARMER_NAME: this.societyDetails[i].FARMER_NAME,
            FARMER_CODE: this.societyDetails[i].FARMER_CODE,
            SHIFT: this.societyDetails[i].SHIFT,
            COW_MILK_LITERS: this.societyDetails[i].COW_MILK_LITERS,
            COW_MILK_AMOUNT: this.societyDetails[i].COW_MILK_AMOUNT,
            BUFFALO_MILK_LITER: this.societyDetails[i].BUFFALO_MILK_LITER,
            BUFFALO_MILK_AMOUNT: this.societyDetails[i].BUFFALO_MILK_AMOUNT,
            TRANSACTION_DATE: this.societyDetails[i].TRANSACTION_DATE,
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
      'Farmer Abstract Transaction Society Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
        const req = {

            mandalId: this.mandalId,
            rbkId: this.rbkId,
            villageId: this.villageId,
            fromDate: this.fromDate,
            toDate: this.toDate,
            districtId: this.phaseid    //we are using districtid assigned value PHASEID 
        };

        const fileName = 'FarmerAbstractTransactionVillageLevelReport';
        let basePDF = '';
        this.spinner.show();
        const res = await this.abstractAPI.societyLevelFarmerRegPDFReport(req);
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
  // async btnPDF(): Promise<void> {
  //   try {
  //     const req = {
  //       districtId: this.districtId,
  //       mandalId: this.mandalId,
  //       rbkId: this.rbkId,
  //       villageId: this.villageId,
  //       fromDate: this.fromDate,
  //       toDate: this.toDate,
  //     };
  //     const fileName = 'FarmerAbstractTransactionVillageLevelReport';
  //     let basePDF = '';
  //     this.spinner.show();
  //     const res = await this.abstractAPI.societyLevelFarmerRegPDFReport(req);
  //     if (res.success) {
  //       basePDF = res.result;
  //       this.utils.downloadPdfFile(basePDF, fileName);
  //     } else {
  //       this.toast.info(res.message);
  //     }
  //     this.spinner.hide();
  //   } catch (error) {
  //     this.spinner.hide();
  //     this.utils.catchResponse(error);
  //   }
  // }

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
