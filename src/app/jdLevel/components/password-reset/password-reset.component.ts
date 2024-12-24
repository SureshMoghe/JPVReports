import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { JdLevelService } from '../../services/jd-level.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  userDetails = '';

  userName  = '';
  districtId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private jdAPI: JdLevelService,
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private logger: LoggerService,
    private session: SessionService) { }

  ngOnInit(): void {
    this.districtId = this.session.districtId;
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

btnUserDetails(): void {

  if(this.userName === '' || this.userName === undefined || this.userName === null){
    this.toast.warning('Please Enter Username');
    return;
  }

  const req = {
    districtId: this.districtId,
    userName : this.userName
  };
  this.spinner.show();
  this.jdAPI
    .userDetails(req)
    .then((res: any) => {
      if (res.success) {
        this.userDetails = res.result[0];
      }else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    })
    .catch((error: any) => {
      this.spinner.hide();
      this.utils.catchResponse(error);
    });

}

  btnResetPassword(): void{
    if (confirm("Are you sure want to Reset Password ?")){
      const req = {
        districtId: this.districtId,
        userName : this.userName
      };
      this.spinner.show();
      this.jdAPI
        .passwordResetUpdate(req)
        .then((res: any) => {
          if (res.success) {
            alert(res.message);
            window.location.reload();
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
  }


}
