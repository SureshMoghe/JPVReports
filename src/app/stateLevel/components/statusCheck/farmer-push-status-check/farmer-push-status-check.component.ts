import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-farmer-push-status-check',
  templateUrl: './farmer-push-status-check.component.html',
  styleUrls: ['./farmer-push-status-check.component.css'],
})
export class FarmerPushStatusCheckComponent implements OnInit {
  inputPlaceHolder = 'Please Enter Farmer Aadhaar Number';
  uidNum = '';
  inputRadio = '1';
  personDetails = {
    DISTRICT: '',
    DIST_CODE: '',
    FARMER_CODE: '',
    FARMER_NAME: '',
    IS_RECORD_PUSHED: '',
    MANDAL_CODE: '',
    MANDAL_NAME: '',
    MOBILE_NUMBER: '',
    RBK_CODE1: '',
    RBK_NAME1: '',
    RECORD_PUSHED_ON: '',
    STATUS: '',
    VDCS_CODE: '',
    VILLAGECODE: '',
    VILLAGE_NAME: '',
  };

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private farmerAPI: StateService,
    private utils: UtilsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

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
      this.inputPlaceHolder = 'Please Enter Farmer Aadhaar Number';
      this.clearInputs();
    } else if (this.inputRadio === '2') {
      this.inputPlaceHolder = 'Please Enter Farmer Code';
      this.clearInputs();
    } else {
      this.inputPlaceHolder = 'Please Enter Farmer Bank Account Number';
      this.clearInputs();
    }
  }

  // tslint:disable-next-line: typedef
  clearInputs() {
    this.uidNum = '';
    this.personDetails = {
      DISTRICT: '',
      DIST_CODE: '',
      FARMER_CODE: '',
      FARMER_NAME: '',
      IS_RECORD_PUSHED: '',
      MANDAL_CODE: '',
      MANDAL_NAME: '',
      MOBILE_NUMBER: '',
      RBK_CODE1: '',
      RBK_NAME1: '',
      RECORD_PUSHED_ON: '',
      STATUS: '',
      VDCS_CODE: '',
      VILLAGECODE: '',
      VILLAGE_NAME: '',
    };
  }

  async btnUidDetails(): Promise<void> {
    try {
      this.personDetails = {
        DISTRICT: '',
        DIST_CODE: '',
        FARMER_CODE: '',
        FARMER_NAME: '',
        IS_RECORD_PUSHED: '',
        MANDAL_CODE: '',
        MANDAL_NAME: '',
        MOBILE_NUMBER: '',
        RBK_CODE1: '',
        RBK_NAME1: '',
        RECORD_PUSHED_ON: '',
        STATUS: '',
        VDCS_CODE: '',
        VILLAGECODE: '',
        VILLAGE_NAME: '',
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
          this.toast.warning('Please Enter Farmer Aadhar Number');
          return;
        }
        if (!this.utils.validateVerhoeff(this.uidNum)) {
          this.toast.warning('Please Enter Valid Aadhaar Number');
          return;
        }
      }

      if (this.inputRadio === '2') {
        if (
          this.uidNum === null ||
          this.uidNum === undefined ||
          this.uidNum === ''
        ) {
          this.toast.warning('Please Enter Farmer Code');
          return;
        }
        if (this.uidNum.length !== 8) {
          this.toast.warning('Please Enter Valid Farmer Code');
          return;
        }
      }
      const req = {
        farmerId: this.uidNum,
      };
      this.spinner.show();
      const response = await this.farmerAPI.farmerPushRecordStatusCheck(req);
      if (response.success) {
        this.personDetails = response.result[0];
      } else {
        this.toast.info(response.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
}
