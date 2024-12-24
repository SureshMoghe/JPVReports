import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  loginList = [];
  userDetails = '';

  userName = '';
  districtId = '';
  role = '';

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private passwordResetAPI: StateService,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private session:SessionService,

  ) {}

  ngOnInit(): void {
    this.districtId = '';
    this.loadLogins();
  }

  async loadLogins(): Promise<void> {
    try {
      this.loginList = [];
      const req = {
        districtId: this.districtId,
      };
      this.spinner.show();
      const response = await this.passwordResetAPI.loginsList(req);
      this.spinner.hide();
      if (response.success) {
        this.loginList = response.result;
      } else {
        this.toast.info(response.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnUserDetails(): Promise<void> {
    try {debugger;
      this.userDetails = '';

      if (this.role === '' || this.role === undefined || this.role === null) {
        this.toast.warning('Please Select Login Type');
        return;
      }
      if (
        this.userName === '' ||
        this.userName === undefined ||
        this.userName === null
      ) {
        this.toast.warning('Please Enter Username');
        return;
      }
      const req = {
        districtId: this.districtId,
        role: this.role,
        userName: this.userName,
      };
      this.spinner.show();
      const response = await this.passwordResetAPI.userDetails(req);
      this.spinner.hide();
      if (response.success) {
        this.userDetails = response.result[0];
      } else {
        this.toast.info(response.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnResetPassword(): Promise<void> {
    try {
      if (confirm('Are you sure want to Reset Password ?')) {
        const req = {
          districtId: this.districtId,
          role: this.role,
          userName: this.userName,
        };
        this.spinner.show();
        const response = await this.passwordResetAPI.passwordResetUpdate(req);
        if (response.success) {
          alert(response.message);
          window.location.reload();
        } else {
          this.toast.info(response.message);
        }
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
}
