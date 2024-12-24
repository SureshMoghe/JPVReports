import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AmcuInspectionService } from '../../services/amcu-inspection.service';

@Component({
  selector: 'app-amcu-inspection-mentor',
  templateUrl: './amcu-inspection-mentor.component.html',
  styleUrls: ['./amcu-inspection-mentor.component.css'],
})
export class AmcuInspectionMentorComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSocietiesNotInspectedClickChange = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSocietiesInspectedClickChange = new EventEmitter<string>();

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() typeOfInspection: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() inspectionName: any;
  @Input() uniqueId: any;
  mentorLevelDetails = [];

  reportTotals = {
    S_NO: '-',
    ROUTE_NAME: 'TOTAL',
    NO_OF_SOCIETIES_INSPECTED: 0,
    NO_OF_SOCIETIES_NOT_INSPECTED: 0,
  };
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
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    if (
      this.uniqueId !== null &&
      this.uniqueId !== '' &&
      this.uniqueId !== null
    ) {
      this.loadReport();
    }
  }
  ngOnChanges(): void {}
  async loadReport(): Promise<void> {
    try {
      this.mentorLevelDetails = [];
      const req = {
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      this.spinner.show();
      const res = await this.amcuInspection.MentorLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.mentorLevelDetails = res.result;
        this.reportTotals = {
          S_NO: '-',
          ROUTE_NAME: 'TOTAL',
          NO_OF_SOCIETIES_INSPECTED: 0,
          NO_OF_SOCIETIES_NOT_INSPECTED: 0,
        };
        for (let i = 0; i < this.mentorLevelDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_INSPECTED += parseInt(
            this.mentorLevelDetails[i].NO_OF_SOCIETIES_INSPECTED
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_SOCIETIES_NOT_INSPECTED += parseInt(
            this.mentorLevelDetails[i].NO_OF_SOCIETIES_NOT_INSPECTED
          );
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.mentorLevelDetails[i].ROUTE_NAME,
            RBK_NAME: this.mentorLevelDetails[i].RBK_NAME,
            NO_OF_SOCIETIES_INSPECTED: this.mentorLevelDetails[i]
              .NO_OF_SOCIETIES_INSPECTED,
            NO_OF_SOCIETIES_NOT_INSPECTED: this.mentorLevelDetails[i]
              .NO_OF_SOCIETIES_NOT_INSPECTED,
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

  btnGetNotSocietiesInspected(obj): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      routeNo: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      uniqueId: this.uniqueId,
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSocietiesNotInspectedClickChange.emit(encryptedString);
  }

  btnGetSocietiesInspected(obj): void {
    const requestData = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      districtId: obj.DIST_CODE,
      districtName: obj.DISTRICT,
      routeNo: obj.ROUNTE_NOS,
      routeName: obj.ROUTE_NAME,
      rbkId: obj.RBK_CODE,
      rbkName: obj.RBK_NAME,
      uniqueId: this.uniqueId,
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
    };
    const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
    this.onSocietiesInspectedClickChange.emit(encryptedString);
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'AMCU Inspection Mentor Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        uniqueId: this.uniqueId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        typeOfInspection: this.typeOfInspection,
      };
      const fileName = 'mentorLevelAmcuInspectionReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.amcuInspection.MentorLevelReportPDF(req);
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
