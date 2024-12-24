import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-volunteer-check',
  templateUrl: './volunteer-check.component.html',
  styleUrls: ['./volunteer-check.component.css'],
})
export class VolunteerCheckComponent implements OnInit {
  uidNumber = '';
  noDataMessage = '';
  personDetails = {
    VOLUNTEER_NAME: '',
    VOLUNTEER_MOBILE: '',
    SECRETARIAT_NAME: '',
    UPDATE_DATE: '',
    MANDAL_NAME: '',
    LAST_LOGIN_TIME: '',
    DISTRICT_NAME: '',
    CLUSTER_NAME: '',
    MSG: '',
    UID_NUM: '',
  };

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private volunteerApi: StateService,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {}

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  async btnUidDetails(): Promise<void> {
    try {
      this.noDataMessage = '';
      this.personDetails = {
        VOLUNTEER_NAME: '',
        VOLUNTEER_MOBILE: '',
        SECRETARIAT_NAME: '',
        UPDATE_DATE: '',
        MANDAL_NAME: '',
        LAST_LOGIN_TIME: '',
        DISTRICT_NAME: '',
        CLUSTER_NAME: '',
        MSG: '',
        UID_NUM: '',
      };

      if (this.utils.isEmpty(this.uidNumber)) {
        this.toast.warning('Please Enter Aadhaar');
        return;
      }
      if (!this.utils.validateVerhoeff(this.uidNumber)) {
        this.toast.warning('Please Enter Valid Aadhaar Number');
        return;
      }

      const req = {
        uidNumber: this.uidNumber,
      };
      this.spinner.show();
      const response = await this.volunteerApi.volunteerCheck(req);
      if (response.success) {
        this.personDetails = response.result[0];
      } else {
        this.noDataMessage = response.message;
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  uidNummaskIputData(value) {
     
    if (value.length > 0) {

      const charCode = value.which ? value.which : value.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

      return false;
    }
  
  
    if(value.length>=12){
      this.uidNumber=value;
      const response = this.utils.validateVerhoeff(value);    //this.uidNum
      if (response == true) {
        this.spinner.hide();
      } else {
        this.uidNumber='';
               alert("Invalid Aadhar Number...!");
        this.spinner.hide();
  
      }
      return
    }
  
  }
  }
}
