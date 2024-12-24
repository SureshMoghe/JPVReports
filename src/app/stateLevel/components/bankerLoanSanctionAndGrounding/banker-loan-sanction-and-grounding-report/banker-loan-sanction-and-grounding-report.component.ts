import {
  AfterViewInit,
  Component,
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
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-banker-loan-sanction-and-grounding-report',
  templateUrl: './banker-loan-sanction-and-grounding-report.component.html',
  styleUrls: ['./banker-loan-sanction-and-grounding-report.component.css'],
})
export class BankerLoanSanctionAndGroundingReportComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  bankGroundingDetails = [];

  bankList = [];

  natureOfUnit = '';
  type = '';
  bank = '';

  reportDistrictTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    BANK: '-',
    BRANCH: 'TOTAL',
    TOTAL_BENEFICIARIES: 0,
    TOTAL_WILLING_BENEFICIARIES: 0,
    TOTAL_APPLI_SUBMITTED_BY_AH: 0,
    TOTAL_APPLI_APPROVED_BY_BANKS: 0,
    LOAN_AMOUNT_SANCTIONED: 0,
    TOTAL_APPLI_COMPLETED_DOCU: 0,
    TOTAL_GROUNDINGS_COMPLETED: 0,
    TOTAL_ANIMAL_HELCARD_DISTRI: 0,
    TOTAL_PHOTOS_UPLOADED: 0,
  };

  reportDivisionTotals = {
    S_NO: '-',
    DIVISION: '-',
    BANK: '-',
    BRANCH: 'TOTAL',
    TOTAL_BENEFICIARIES: 0,
    TOTAL_WILLING_BENEFICIARIES: 0,
    TOTAL_APPLI_SUBMITTED_BY_AH: 0,
    TOTAL_APPLI_APPROVED_BY_BANKS: 0,
    LOAN_AMOUNT_SANCTIONED: 0,
    TOTAL_APPLI_COMPLETED_DOCU: 0,
    TOTAL_GROUNDINGS_COMPLETED: 0,
    TOTAL_ANIMAL_HELCARD_DISTRI: 0,
    TOTAL_PHOTOS_UPLOADED: 0,
  };

  reportAHTotals = {
    S_NO: '-',
    AVH_NAME: '-',
    BANK: '-',
    BRANCH: 'TOTAL',
    TOTAL_BENEFICIARIES: 0,
    TOTAL_WILLING_BENEFICIARIES: 0,
    TOTAL_APPLI_SUBMITTED_BY_AH: 0,
    TOTAL_APPLI_APPROVED_BY_BANKS: 0,
    LOAN_AMOUNT_SANCTIONED: 0,
    TOTAL_APPLI_COMPLETED_DOCU: 0,
    TOTAL_GROUNDINGS_COMPLETED: 0,
    TOTAL_ANIMAL_HELCARD_DISTRI: 0,
    TOTAL_PHOTOS_UPLOADED: 0,
  };

  reportMandalTotals = {
    S_NO: '-',
    DISTRICT_NAME: '-',
    MANDAL_NAME: '-',
    BANK: '-',
    BRANCH: 'TOTAL',
    TOTAL_BENEFICIARIES: 0,
    TOTAL_WILLING_BENEFICIARIES: 0,
    TOTAL_APPLI_SUBMITTED_BY_AH: 0,
    TOTAL_APPLI_APPROVED_BY_BANKS: 0,
    LOAN_AMOUNT_SANCTIONED: 0,
    TOTAL_APPLI_COMPLETED_DOCU: 0,
    TOTAL_GROUNDINGS_COMPLETED: 0,
    TOTAL_ANIMAL_HELCARD_DISTRI: 0,
    TOTAL_PHOTOS_UPLOADED: 0,
  };

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private groundingAPI: StateService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadBankList();
    this.natureOfUnit = 'ALL';
    this.type = '1';
    this.bank = 'ALL';
    // tslint:disable-next-line: max-line-length
    if (
      this.natureOfUnit !== null &&
      this.natureOfUnit !== '' &&
      this.natureOfUnit !== undefined &&
      this.type !== null &&
      this.type !== '' &&
      this.type !== undefined &&
      this.bank !== null &&
      this.bank !== '' &&
      this.bank !== undefined
    ) {
      this.loadReport();
    }
  }

  loadBankList(): void {
    this.spinner.show();
    this.groundingAPI
      .cheyuthaBankList()
      .then((res: any) => {
        if (res.success) {
          this.bankList = res.result;
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  ngOnChanges(): void {
    // tslint:disable-next-line: max-line-length
  }

  onNatureOfUnitChange(): void {
    this.excelData = [];
    this.bankGroundingDetails = [];
  }

  onTypeChange(): void {
    this.excelData = [];
    this.bankGroundingDetails = [];
  }

  onBankChange(): void {
    this.excelData = [];
    this.bankGroundingDetails = [];
  }

  btnLoadReport(): void {
    // tslint:disable-next-line: max-line-length
    if (
      this.natureOfUnit !== null &&
      this.natureOfUnit !== '' &&
      this.natureOfUnit !== undefined &&
      this.type !== null &&
      this.type !== '' &&
      this.type !== undefined
    ) {
      this.loadReport();
    }
  }

  loadReport(): void {
    this.reportDistrictTotals = {
      S_NO: '-',
      DISTRICT_NAME: '-',
      BANK: '-',
      BRANCH: 'TOTAL',
      TOTAL_BENEFICIARIES: 0,
      TOTAL_WILLING_BENEFICIARIES: 0,
      TOTAL_APPLI_SUBMITTED_BY_AH: 0,
      TOTAL_APPLI_APPROVED_BY_BANKS: 0,
      LOAN_AMOUNT_SANCTIONED: 0,
      TOTAL_APPLI_COMPLETED_DOCU: 0,
      TOTAL_GROUNDINGS_COMPLETED: 0,
      TOTAL_ANIMAL_HELCARD_DISTRI: 0,
      TOTAL_PHOTOS_UPLOADED: 0,
    };

    this.reportDivisionTotals = {
      S_NO: '-',
      DIVISION: '-',
      BANK: '-',
      BRANCH: 'TOTAL',
      TOTAL_BENEFICIARIES: 0,
      TOTAL_WILLING_BENEFICIARIES: 0,
      TOTAL_APPLI_SUBMITTED_BY_AH: 0,
      TOTAL_APPLI_APPROVED_BY_BANKS: 0,
      LOAN_AMOUNT_SANCTIONED: 0,
      TOTAL_APPLI_COMPLETED_DOCU: 0,
      TOTAL_GROUNDINGS_COMPLETED: 0,
      TOTAL_ANIMAL_HELCARD_DISTRI: 0,
      TOTAL_PHOTOS_UPLOADED: 0,
    };

    this.reportAHTotals = {
      S_NO: '-',
      AVH_NAME: '-',
      BANK: '-',
      BRANCH: 'TOTAL',
      TOTAL_BENEFICIARIES: 0,
      TOTAL_WILLING_BENEFICIARIES: 0,
      TOTAL_APPLI_SUBMITTED_BY_AH: 0,
      TOTAL_APPLI_APPROVED_BY_BANKS: 0,
      LOAN_AMOUNT_SANCTIONED: 0,
      TOTAL_APPLI_COMPLETED_DOCU: 0,
      TOTAL_GROUNDINGS_COMPLETED: 0,
      TOTAL_ANIMAL_HELCARD_DISTRI: 0,
      TOTAL_PHOTOS_UPLOADED: 0,
    };

    this.reportMandalTotals = {
      S_NO: '-',
      DISTRICT_NAME: '-',
      MANDAL_NAME: '-',
      BANK: '-',
      BRANCH: 'TOTAL',
      TOTAL_BENEFICIARIES: 0,
      TOTAL_WILLING_BENEFICIARIES: 0,
      TOTAL_APPLI_SUBMITTED_BY_AH: 0,
      TOTAL_APPLI_APPROVED_BY_BANKS: 0,
      LOAN_AMOUNT_SANCTIONED: 0,
      TOTAL_APPLI_COMPLETED_DOCU: 0,
      TOTAL_GROUNDINGS_COMPLETED: 0,
      TOTAL_ANIMAL_HELCARD_DISTRI: 0,
      TOTAL_PHOTOS_UPLOADED: 0,
    };
    this.excelData = [];
    this.bankGroundingDetails = [];
    const req = {
      natureOfUnit: this.natureOfUnit,
      type: this.type,
      bank: this.bank,
    };
    this.spinner.show();
    this.groundingAPI
      .cheyuthaBankLoanSanctionReport(req)
      .then((res: any) => {
        if (res.success) {
          this.excelData = [];
          this.bankGroundingDetails = res.result;
          for (let i = 0; i < this.bankGroundingDetails.length; i++) {
            if (this.type === '1') {
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_WILLING_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_WILLING_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_APPLI_SUBMITTED_BY_AH += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_SUBMITTED_BY_AH
              );
              // tslint:disable-next-line: max-line-length
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_APPLI_APPROVED_BY_BANKS += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_APPROVED_BY_BANKS
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.LOAN_AMOUNT_SANCTIONED += parseInt(
                this.bankGroundingDetails[i].LOAN_AMOUNT_SANCTIONED
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_APPLI_COMPLETED_DOCU += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_COMPLETED_DOCU
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_GROUNDINGS_COMPLETED += parseInt(
                this.bankGroundingDetails[i].TOTAL_GROUNDINGS_COMPLETED
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_ANIMAL_HELCARD_DISTRI += parseInt(
                this.bankGroundingDetails[i].TOTAL_ANIMAL_HELCARD_DISTRI
              );
              // tslint:disable-next-line: radix
              this.reportDistrictTotals.TOTAL_PHOTOS_UPLOADED += parseInt(
                this.bankGroundingDetails[i].TOTAL_PHOTOS_UPLOADED
              );
              const singleRow = {
                S_NO: i + 1,
                DISTRICT_NAME: this.bankGroundingDetails[i].DISTRICT_NAME,
                BANK: this.bankGroundingDetails[i].BANK,
                BRANCH: this.bankGroundingDetails[i].BRANCH,
                TOTAL_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_BENEFICIARIES,
                TOTAL_WILLING_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_WILLING_BENEFICIARIES,
                TOTAL_APPLI_SUBMITTED_BY_AH: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_SUBMITTED_BY_AH,
                TOTAL_APPLI_APPROVED_BY_BANKS: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_APPROVED_BY_BANKS,
                LOAN_AMOUNT_SANCTIONED: this.bankGroundingDetails[i]
                  .LOAN_AMOUNT_SANCTIONED,
                TOTAL_APPLI_COMPLETED_DOCU: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_COMPLETED_DOCU,
                TOTAL_GROUNDINGS_COMPLETED: this.bankGroundingDetails[i]
                  .TOTAL_GROUNDINGS_COMPLETED,
                TOTAL_ANIMAL_HELCARD_DISTRI: this.bankGroundingDetails[i]
                  .TOTAL_ANIMAL_HELCARD_DISTRI,
                TOTAL_PHOTOS_UPLOADED: this.bankGroundingDetails[i]
                  .TOTAL_PHOTOS_UPLOADED,
              };
              this.excelData.push(singleRow);
            } else if (this.type === '2') {
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_WILLING_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_WILLING_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_APPLI_SUBMITTED_BY_AH += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_SUBMITTED_BY_AH
              );
              // tslint:disable-next-line: max-line-length
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_APPLI_APPROVED_BY_BANKS += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_APPROVED_BY_BANKS
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.LOAN_AMOUNT_SANCTIONED += parseInt(
                this.bankGroundingDetails[i].LOAN_AMOUNT_SANCTIONED
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_APPLI_COMPLETED_DOCU += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_COMPLETED_DOCU
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_GROUNDINGS_COMPLETED += parseInt(
                this.bankGroundingDetails[i].TOTAL_GROUNDINGS_COMPLETED
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_ANIMAL_HELCARD_DISTRI += parseInt(
                this.bankGroundingDetails[i].TOTAL_ANIMAL_HELCARD_DISTRI
              );
              // tslint:disable-next-line: radix
              this.reportDivisionTotals.TOTAL_PHOTOS_UPLOADED += parseInt(
                this.bankGroundingDetails[i].TOTAL_PHOTOS_UPLOADED
              );
              const singleRow = {
                S_NO: i + 1,
                DIVISION: this.bankGroundingDetails[i].DIVISION,
                BANK: this.bankGroundingDetails[i].BANK,
                BRANCH: this.bankGroundingDetails[i].BRANCH,
                TOTAL_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_BENEFICIARIES,
                TOTAL_WILLING_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_WILLING_BENEFICIARIES,
                TOTAL_APPLI_SUBMITTED_BY_AH: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_SUBMITTED_BY_AH,
                TOTAL_APPLI_APPROVED_BY_BANKS: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_APPROVED_BY_BANKS,
                LOAN_AMOUNT_SANCTIONED: this.bankGroundingDetails[i]
                  .LOAN_AMOUNT_SANCTIONED,
                TOTAL_APPLI_COMPLETED_DOCU: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_COMPLETED_DOCU,
                TOTAL_GROUNDINGS_COMPLETED: this.bankGroundingDetails[i]
                  .TOTAL_GROUNDINGS_COMPLETED,
                TOTAL_ANIMAL_HELCARD_DISTRI: this.bankGroundingDetails[i]
                  .TOTAL_ANIMAL_HELCARD_DISTRI,
                TOTAL_PHOTOS_UPLOADED: this.bankGroundingDetails[i]
                  .TOTAL_PHOTOS_UPLOADED,
              };
              this.excelData.push(singleRow);
            } else if (this.type === '3') {
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_WILLING_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_WILLING_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_APPLI_SUBMITTED_BY_AH += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_SUBMITTED_BY_AH
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_APPLI_APPROVED_BY_BANKS += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_APPROVED_BY_BANKS
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.LOAN_AMOUNT_SANCTIONED += parseInt(
                this.bankGroundingDetails[i].LOAN_AMOUNT_SANCTIONED
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_APPLI_COMPLETED_DOCU += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_COMPLETED_DOCU
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_GROUNDINGS_COMPLETED += parseInt(
                this.bankGroundingDetails[i].TOTAL_GROUNDINGS_COMPLETED
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_ANIMAL_HELCARD_DISTRI += parseInt(
                this.bankGroundingDetails[i].TOTAL_ANIMAL_HELCARD_DISTRI
              );
              // tslint:disable-next-line: radix
              this.reportAHTotals.TOTAL_PHOTOS_UPLOADED += parseInt(
                this.bankGroundingDetails[i].TOTAL_PHOTOS_UPLOADED
              );
              const singleRow = {
                S_NO: i + 1,
                AVH_NAME: this.bankGroundingDetails[i].AVH_NAME,
                BANK: this.bankGroundingDetails[i].BANK,
                BRANCH: this.bankGroundingDetails[i].BRANCH,
                TOTAL_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_BENEFICIARIES,
                TOTAL_WILLING_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_WILLING_BENEFICIARIES,
                TOTAL_APPLI_SUBMITTED_BY_AH: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_SUBMITTED_BY_AH,
                TOTAL_APPLI_APPROVED_BY_BANKS: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_APPROVED_BY_BANKS,
                LOAN_AMOUNT_SANCTIONED: this.bankGroundingDetails[i]
                  .LOAN_AMOUNT_SANCTIONED,
                TOTAL_APPLI_COMPLETED_DOCU: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_COMPLETED_DOCU,
                TOTAL_GROUNDINGS_COMPLETED: this.bankGroundingDetails[i]
                  .TOTAL_GROUNDINGS_COMPLETED,
                TOTAL_ANIMAL_HELCARD_DISTRI: this.bankGroundingDetails[i]
                  .TOTAL_ANIMAL_HELCARD_DISTRI,
                TOTAL_PHOTOS_UPLOADED: this.bankGroundingDetails[i]
                  .TOTAL_PHOTOS_UPLOADED,
              };
              this.excelData.push(singleRow);
            } else if (this.type === '4') {
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_WILLING_BENEFICIARIES += parseInt(
                this.bankGroundingDetails[i].TOTAL_WILLING_BENEFICIARIES
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_APPLI_SUBMITTED_BY_AH += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_SUBMITTED_BY_AH
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_APPLI_APPROVED_BY_BANKS += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_APPROVED_BY_BANKS
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.LOAN_AMOUNT_SANCTIONED += parseInt(
                this.bankGroundingDetails[i].LOAN_AMOUNT_SANCTIONED
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_APPLI_COMPLETED_DOCU += parseInt(
                this.bankGroundingDetails[i].TOTAL_APPLI_COMPLETED_DOCU
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_GROUNDINGS_COMPLETED += parseInt(
                this.bankGroundingDetails[i].TOTAL_GROUNDINGS_COMPLETED
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_ANIMAL_HELCARD_DISTRI += parseInt(
                this.bankGroundingDetails[i].TOTAL_ANIMAL_HELCARD_DISTRI
              );
              // tslint:disable-next-line: radix
              this.reportMandalTotals.TOTAL_PHOTOS_UPLOADED += parseInt(
                this.bankGroundingDetails[i].TOTAL_PHOTOS_UPLOADED
              );
              const singleRow = {
                S_NO: i + 1,
                DISTRICT_NAME: this.bankGroundingDetails[i].DISTRICT_NAME,
                MANDAL_NAME: this.bankGroundingDetails[i].MANDAL_NAME,
                BANK: this.bankGroundingDetails[i].BANK,
                BRANCH: this.bankGroundingDetails[i].BRANCH,
                TOTAL_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_BENEFICIARIES,
                TOTAL_WILLING_BENEFICIARIES: this.bankGroundingDetails[i]
                  .TOTAL_WILLING_BENEFICIARIES,
                TOTAL_APPLI_SUBMITTED_BY_AH: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_SUBMITTED_BY_AH,
                TOTAL_APPLI_APPROVED_BY_BANKS: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_APPROVED_BY_BANKS,
                LOAN_AMOUNT_SANCTIONED: this.bankGroundingDetails[i]
                  .LOAN_AMOUNT_SANCTIONED,
                TOTAL_APPLI_COMPLETED_DOCU: this.bankGroundingDetails[i]
                  .TOTAL_APPLI_COMPLETED_DOCU,
                TOTAL_GROUNDINGS_COMPLETED: this.bankGroundingDetails[i]
                  .TOTAL_GROUNDINGS_COMPLETED,
                TOTAL_ANIMAL_HELCARD_DISTRI: this.bankGroundingDetails[i]
                  .TOTAL_ANIMAL_HELCARD_DISTRI,
                TOTAL_PHOTOS_UPLOADED: this.bankGroundingDetails[i]
                  .TOTAL_PHOTOS_UPLOADED,
              };
              this.excelData.push(singleRow);
            }
          }
          if (this.type === '1') {
            this.excelData.push(this.reportDistrictTotals);
          } else if (this.type === '2') {
            this.excelData.push(this.reportDivisionTotals);
          } else if (this.type === '3') {
            this.excelData.push(this.reportAHTotals);
          } else {
            this.excelData.push(this.reportMandalTotals);
          }
        } else {
          this.toast.info(res.message);
        }
        this.rerender();
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Bank Loan Sanction And Grounding Report',
      true
    );
  }

  btnPDF(): void {
    const req = {
      natureOfUnit: this.natureOfUnit,
      type: this.type,
      bank: this.bank,
    };
    const fileName = 'bankLoanSanctionAndGroundingReport';
    let basePDF = '';
    this.spinner.show();
    this.groundingAPI
      .cheyuthaBankLoanSanctionPDFReport(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
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
