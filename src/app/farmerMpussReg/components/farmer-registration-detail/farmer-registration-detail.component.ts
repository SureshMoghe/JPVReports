import {
  AfterViewInit,
  Component,
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
import { FarmerRegService } from '../../services/farmer-reg.service';

@Component({
  selector: 'app-farmer-registration-detail',
  templateUrl: './farmer-registration-detail.component.html',
  styleUrls: ['./farmer-registration-detail.component.css'],
})
export class FarmerRegistrationDetailComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  districtId = '';
  reportType = '';
  rbkAmcMdacId = '';

  districtList = [];
  personDetails = [];
  excelData = []; 

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private farmerAPI: FarmerRegService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDistrictList();
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.reportType !== null &&
      this.reportType !== '' &&
      this.reportType !== undefined &&
      this.rbkAmcMdacId !== null &&
      this.rbkAmcMdacId !== '' &&
      this.rbkAmcMdacId !== undefined
    ) {
      this.loadReport();
    }
  }

  async loadDistrictList(): Promise<void> {
    try {
      this.spinner.show();
      const res = await this.farmerAPI.districtList();
      if (res.success) {
        this.districtList = res.result;
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  ngOnChanges(): void {
    // tslint:disable-next-line: max-line-length
  }

  onDistrictIdChange(): void {
    this.excelData = [];
    this.personDetails = [];
    this.rbkAmcMdacId = '';
    this.reportType = '';
  }

  onReportTypeChange(): void {
    this.excelData = [];
    this.personDetails = [];
    this.rbkAmcMdacId = '';
  }

  btnLoadReport(): void {
    if (!this.utils.isNumber(this.rbkAmcMdacId)) {
      this.toast.warning('Please Enter Valid MDAC/ RBK/ AMCU/ Village ID');
      return;
    }
    // tslint:disable-next-line: max-line-length
    if (
      this.districtId !== null &&
      this.districtId !== '' &&
      this.districtId !== undefined &&
      this.reportType !== null &&
      this.reportType !== '' &&
      this.reportType !== undefined &&
      this.rbkAmcMdacId !== null &&
      this.rbkAmcMdacId !== '' &&
      this.rbkAmcMdacId !== undefined
    ) {
      this.loadReport();
    }
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        reportType: this.reportType,
        rbkAmcMdacId: this.rbkAmcMdacId,
      };
      this.spinner.show();
      const res = await this.farmerAPI.farmerRegDetailReport(req);
      if (res.success) {
        this.excelData = [];
        this.personDetails = res.result;
        for (let i = 0; i < this.personDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.personDetails[i].DISTRICT,
            MANDAL_NAME: this.personDetails[i].MANDAL_NAME,
            RBK_NAME: this.personDetails[i].RBK_NAME,
            MPUSS_NAME: this.personDetails[i].MPUSS_NAME,
            MDAC_CODE: this.personDetails[i].MDAC_CODE,
            AMC_ID: this.personDetails[i].AMC_ID,
            FARMER_CODE: this.personDetails[i].FARMER_CODE,
            FARMER_NAME: this.personDetails[i].FARMER_NAME,
            MOBILE_NUMBER: this.personDetails[i].MOBILE_NUMBER,
            BANK_NAME: this.personDetails[i].BANK_NAME,
            BRANCH_NAME: this.personDetails[i].BRANCH_NAME,
            IFSC_CODE: this.personDetails[i].IFSC_CODE,
            BANK_PINCODE: this.personDetails[i].BANK_PINCODE,
            ACCOUNT_NUMBER: this.personDetails[i].ACCOUNT_NUMBER,
            MICR_CODE: this.personDetails[i].MICR_CODE,
            PAN_CARD: this.personDetails[i].PAN_CARD,
            AADHAR_NUM: this.personDetails[i].AADHAR_NUM,
            REGISTER_DATE: this.personDetails[i].REGISTER_DATE,
            UPDATED_DATE: this.personDetails[i].UPDATED_DATE,
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
      'Farmer Registration Detail Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        reportType: this.reportType,
        rbkAmcMdacId: this.rbkAmcMdacId,
      };
      const fileName = 'detailLevelFarmerRegReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.farmerAPI.detailLevelFarmerRegPDFReport(req);
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
