import {
    AfterViewInit,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FarmerRegService } from '../../services/farmer-reg.service';

@Component({
    selector: 'app-farmer-registration-status-details',
    templateUrl: './farmer-registration-status-details.component.html',
    styleUrls: ['./farmer-registration-status-details.component.css'],
})
export class FarmerRegistrationStatusDetailsComponent
    implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = this.utils.dataTableOptions();
    dtTrigger: Subject<any> = new Subject();
    maskedAadhar: any;
    monthlypouringReportPopUp = false;
    inputPlaceHolder = 'Please Enter Farmer Aadhaar Number';
    uidNum = ''; frmNum = '';
    inputRadio = '1';
    monthlypouringDetails = [];
    excelData = [];
    personDetails = {
        ACCOUNT_NUMBER: '',
        BANKACCNO_UPD: '',
        BANK_BRANCH: '',
        BANK_NAME: '',
        BANK_PINCODE: '',
        DISTRICT: '',
        DIST_CODE: '',
        FARMER_CODE: '',
        FARMER_NAME: '',
        IFSC_CODE: '',
        MANDAL_CODE: '',
        MANDAL_NAME: '',
        MICR_CODE: '',
        MOBILE_NUMBER: '',
        PAN_CARD: '',
        TOTAL_TIMES_UPDATED: '',
        PASSBOOK_IMG: null,
        NO_OF_MILCH_ANIMALS: '',
        RBK_CODE: '',
        RBK_NAME: '',
        UID_NUM: '',
        VILLAGE_CODE: '',
        VILLAGE_NAME: '',
        SOCIETY_CODE: '',
        SOCIETY_NAME: '',
    };
    bankImage = '';

    reportTotals = {
        S_NO: '-',
        YEAR_VALUE: 'TOTAL',
        MONTH_DISPLAY: '-',
        NO_OF_DAYS_POURED: 0,
        TOTAL_COW_MILK_LTR: 0,
        TOTAL_BUFFALO_MILK_LTR: 0,
        AVG_SNF: '-',
        AVG_FAT: '-',
        TOTAL_AMOUNT: 0,
    };

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private farmerAPI: FarmerRegService,
        private utils: UtilsService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        document.getElementById('uidNum').style.display = 'block';
        document.getElementById('frmNum').style.display = 'none';
        this.uidNum = ''; this.frmNum = '';
    }

    numberOnly(event): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }


        return true;
    }

    // tslint:disable-next-line: typedef
    onSelectionChange() {
        if (this.inputRadio === '1') {
            this.uidNum = ''; this.frmNum = '';
            this.maskedAadhar = '';
            document.getElementById('uidNum').style.display = 'block';
            document.getElementById('frmNum').style.display = 'none';

            this.inputPlaceHolder = 'Please Enter   Aadhaar Number';
            this.clearInputs();
        } else if (this.inputRadio === '2') {
            this.frmNum = ''; this.uidNum = ''; this.maskedAadhar = '';
            document.getElementById('uidNum').style.display = 'none';
            document.getElementById('frmNum').style.display = 'block';
            this.inputPlaceHolder = 'Please Enter Farmer Code';
            this.clearInputs();
        } else {
            document.getElementById('uidNum').style.display = 'none';
            document.getElementById('frmNum').style.display = 'block';
            this.frmNum = ''; this.uidNum = ''; this.maskedAadhar = '';
            this.inputPlaceHolder = 'Please Enter   Bank Account Number';
            this.clearInputs();
        }
    }

    // tslint:disable-next-line: typedef
    clearInputs() {
        this.uidNum = ''; this.frmNum = '';
        this.personDetails = {
            ACCOUNT_NUMBER: '',
            BANKACCNO_UPD: '',
            BANK_BRANCH: '',
            BANK_NAME: '',
            BANK_PINCODE: '',
            DISTRICT: '',
            DIST_CODE: '',
            FARMER_CODE: '',
            FARMER_NAME: '',
            IFSC_CODE: '',
            MANDAL_CODE: '',
            MANDAL_NAME: '',
            MICR_CODE: '',
            MOBILE_NUMBER: '',
            TOTAL_TIMES_UPDATED: '',
            PAN_CARD: '',
            PASSBOOK_IMG: null,
            NO_OF_MILCH_ANIMALS: '',
            RBK_CODE: '',
            RBK_NAME: '',
            UID_NUM: '',
            VILLAGE_CODE: '',
            VILLAGE_NAME: '',
            SOCIETY_CODE: '',
            SOCIETY_NAME: '',
        };
    }

    async btnUidDetails(): Promise<void> {
        try {
            debugger;
            this.personDetails = {
                ACCOUNT_NUMBER: '',
                BANKACCNO_UPD: '',
                BANK_BRANCH: '',
                BANK_NAME: '',
                BANK_PINCODE: '',
                DISTRICT: '',
                DIST_CODE: '',
                FARMER_CODE: '',
                FARMER_NAME: '',
                IFSC_CODE: '',
                MANDAL_CODE: '',
                MANDAL_NAME: '',
                MICR_CODE: '',
                MOBILE_NUMBER: '',
                TOTAL_TIMES_UPDATED: '',
                PAN_CARD: '',
                PASSBOOK_IMG: null,
                NO_OF_MILCH_ANIMALS: '',
                RBK_CODE: '',
                RBK_NAME: '',
                UID_NUM: '',
                VILLAGE_CODE: '',
                VILLAGE_NAME: '',
                SOCIETY_CODE: '',
                SOCIETY_NAME: '',
            };

            if (
                this.inputRadio === null ||
                this.inputRadio === undefined ||
                this.inputRadio === ''
            ) {
                this.toast.warning(
                    'Please Select Aadhaar Number / Farmer Code / Bank Account No'
                );
                return;
            }

            if (this.inputRadio === '1') {
                if (
                    this.uidNum === null ||
                    this.uidNum === undefined ||
                    this.uidNum === ''
                ) {
                    this.toast.warning('Please Enter   Aadhar Number');
                    return;
                }
                if (!this.utils.validateVerhoeff(this.uidNum)) {
                    this.toast.warning('Please Enter Valid Aadhaar Number');
                    return;
                }
            }

            if (this.inputRadio === '2') {
                if (
                    this.frmNum === null ||
                    this.frmNum === undefined ||
                    this.frmNum === ''
                ) {
                    this.toast.warning('Please Enter Farmer Code');
                    return;
                }
                else this.uidNum = this.frmNum;
                if (this.frmNum.length !== 8) {
                    this.toast.warning('Please Enter Valid Farmer Code');
                    return;
                } else this.uidNum = this.frmNum;
            }

            if (this.inputRadio === '3') {
                if (
                    this.frmNum === null ||
                    this.frmNum === undefined ||
                    this.frmNum === ''
                ) {
                    this.toast.warning('Please Enter Bank Account No');
                    return;
                }
                else this.uidNum = this.frmNum;
            }

            const req = {
                accountNo: this.uidNum,
                type: "55",
            };
            this.spinner.show();
            const response = await this.farmerAPI.RegAadharFarmerByUidCheck(req);
            if (response.success) {
                this.personDetails = response.result[0];
                if (
                    this.personDetails.PASSBOOK_IMG !== null &&
                    this.personDetails.PASSBOOK_IMG !== undefined &&
                    this.personDetails.PASSBOOK_IMG !== ''
                ) {
                    this.loadBankImage(this.personDetails.PASSBOOK_IMG);
                }
            } else {
                this.toast.info(response.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async loadBankImage(imagePath: any): Promise<void> {
        try {
            this.spinner.show();
            const response = await this.utils.DMSFileDownload(imagePath);
            if (response.success) {
                this.bankImage = (
                    this.sanitizer.bypassSecurityTrustResourceUrl(response.result) as any
                ).changingThisBreaksApplicationSecurity;
            } else {
                this.toast.info(response.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    btnImage(image): void {
        this.utils.viewImage(image);
    }

    btnMonthlyPouringDetails(): void {
        this.loadReport();
    }

    async loadReport(): Promise<void> {
        try {
            const req = {
                accountNo: this.uidNum,
            };
            this.spinner.show();
            const res = await this.farmerAPI.milkPouringStatusReport(req);
            this.spinner.hide();
            this.monthlypouringDetails = [];
            if (res.success) {
                this.excelData = [];
                this.monthlypouringDetails = res.result;
                for (let i = 0; i < this.monthlypouringDetails.length; i++) {
                    // tslint:disable-next-line: radix
                    this.reportTotals.NO_OF_DAYS_POURED += parseInt(
                        this.monthlypouringDetails[i].NO_OF_DAYS_POURED
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_COW_MILK_LTR += parseFloat(
                        this.monthlypouringDetails[i].TOTAL_COW_MILK_LTR
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_BUFFALO_MILK_LTR += parseFloat(
                        this.monthlypouringDetails[i].TOTAL_BUFFALO_MILK_LTR
                    );
                    // tslint:disable-next-line: radix
                    this.reportTotals.TOTAL_AMOUNT += parseFloat(
                        this.monthlypouringDetails[i].TOTAL_AMOUNT
                    );
                    let singleRow = {
                        S_NO: i + 1,
                        YEAR_VALUE: this.monthlypouringDetails[i].YEAR_VALUE,
                        MONTH_DISPLAY: this.monthlypouringDetails[i].MONTH_DISPLAY,
                        NO_OF_DAYS_POURED: this.monthlypouringDetails[i].NO_OF_DAYS_POURED,
                        TOTAL_COW_MILK_LTR:
                            this.monthlypouringDetails[i].TOTAL_COW_MILK_LTR,
                        TOTAL_BUFFALO_MILK_LTR:
                            this.monthlypouringDetails[i].TOTAL_BUFFALO_MILK_LTR,
                        AVG_SNF: this.monthlypouringDetails[i].AVG_SNF,
                        AVG_FAT: this.monthlypouringDetails[i].AVG_FAT,
                        TOTAL_AMOUNT: this.monthlypouringDetails[i].TOTAL_AMOUNT,
                    };

                    this.excelData.push(singleRow);
                }
                this.excelData.push(this.reportTotals);
            } else {
                this.toast.info(res.message);
            }
            this.monthlypouringReportPopUp = true;
            this.rerender();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    btnExcel(): void {
        this.utils.JSONToCSVConvertor(
            this.excelData,
            'Monthly Milk Pouring Report',
            true
        );
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

    uidNummaskIputData(value) {

        if (value.length > 0) {

            const charCode = value.which ? value.which : value.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {

                return false;
            }


            if (value.length >= 12) {
                this.uidNum = value;
                const response = this.utils.validateVerhoeff(value);    //this.uidNum
                if (response == true) {
                    this.spinner.hide();
                } else {
                    this.uidNum = '';
                    alert("Invalid Aadhar Number...!");
                    this.spinner.hide();

                }
                return
            }

        }
    }

    onInput(event: Event) {
        debugger;
        this.uidNum = this.utils.ValueGet(event);

    }
    onFocus(): void {
        debugger;
        this.maskedAadhar = this.uidNum;
    }
    onBlur(): void {
        this.maskedAadhar = this.utils.maskAadharNumber(this.uidNum);  // Mask the Aadhar number on blur
    }

}
