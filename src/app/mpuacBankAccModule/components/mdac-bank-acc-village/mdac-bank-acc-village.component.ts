import {
  AfterViewInit,
  Component,
  Input,
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
import { MpuacBankAccService } from '../../services/mpuac-bank-acc.service';

@Component({
  selector: 'app-mdac-bank-acc-village',
  templateUrl: './mdac-bank-acc-village.component.html',
  styleUrls: ['./mdac-bank-acc-village.component.css'],
})
export class MdacBankAccVillageComponent
  implements OnInit, OnDestroy, AfterViewInit {
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  personDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private bankAccAPI: MpuacBankAccService,
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
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.bankAccAPI.villageLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.personDetails = res.result;
        for (let i = 0; i < this.personDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            ROUTE_NAME: this.personDetails[i].ROUTE_NAME,
            VILLAGE_NAME: this.personDetails[i].VILLAGE_NAME,
            BANK_ACCOUNT_NO: this.personDetails[i].BANK_ACCOUNT_NO,
            BANK_ACCOUNT_NAME: this.personDetails[i].BANK_ACCOUNT_NAME,
            BANK_NAME: this.personDetails[i].BANK_NAME,
            BRANCH_NAME: this.personDetails[i].BRANCH_NAME,
            IFSCCODE: this.personDetails[i].IFSCCODE,
            PRAMOTOR1_NAME: this.personDetails[i].PRAMOTOR1_NAME,
            PRAMOTOR1_MOBILE: this.personDetails[i].PRAMOTOR1_MOBILE,
            PRAMOTOR2_NAME: this.personDetails[i].PRAMOTOR2_NAME,
            PRAMOTOR2_MOBILE: this.personDetails[i].PRAMOTOR2_MOBILE,
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
      'MDAC Bank Account Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelMDACBankAccReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.bankAccAPI.villageLevelMpuacBankPDFReport(req);
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
