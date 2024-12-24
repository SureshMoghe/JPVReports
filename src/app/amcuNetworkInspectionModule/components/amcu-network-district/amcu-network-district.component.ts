import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
import { AmcuNetworkInspectionService } from '../../services/amcu-network-inspection.service';

@Component({
  selector: 'app-amcu-network-district',
  templateUrl: './amcu-network-district.component.html',
  styleUrls: ['./amcu-network-district.component.css'],
})
export class AmcuNetworkDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() districtId: any;
  @Input() districtName: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onNwSubmittedChange = new EventEmitter<string>();
  districtLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    NEWTWORK_TYE: 'TOTAL',
    NW_SUBMITED_VILLAGES: 0,
  };
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
    this.loadReport();
  }
  ngOnChanges(): void {
    // if (this.districtId !== null && this.districtId !== '' && this.districtId !== null  ){
    //   this.loadReport();
    // }
  }
  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        NEWTWORK_TYE: 'TOTAL',
        NW_SUBMITED_VILLAGES: 0,
      };
      const req = {
        districtId: this.districtId,
      };
      this.spinner.show();
      const res = await this.amcuNetwork.networkDistrictLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.districtLevelDetails = res.result;
        for (let i = 0; i < this.districtLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NW_SUBMITED_VILLAGES += parseInt(
            this.districtLevelDetails[i].NW_SUBMITED_VILLAGES
          );
          let singleRow = {
            S_NO: i + 1,
            NEWTWORK_TYE: this.districtLevelDetails[i].NEWTWORK_TYE,
            NW_SUBMITED_VILLAGES: this.districtLevelDetails[i]
              .NW_SUBMITED_VILLAGES,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
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

  btnGetDetails(obj): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      networkType: obj.NEWTWORK_TYE,
    };

    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onNwSubmittedChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Network Inspection District Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
      };
      const fileName = 'districtLevelAMCUNetworkInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuNetwork.districtLevelPDFReport(req);
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
