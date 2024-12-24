import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription, interval } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LoginService } from '../../services/login.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private captchaInterval: Subscription;

  username;
  password;
    
  captchaEncoded: string;
  captchaChiper = '';
  captchaData = '';
  uniqueId='';
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private loginAPI: LoginService,
    private utils: UtilsService,
    private session: SessionService
  ) {}
 
  ngOnInit(): void {
     this.username="";
      this.password="";
    // this.username1="";this.password1="";
    // document.getElementById('username1').innerText="";
    // document.getElementById('password1').innerText="";
    // delete window.sessionStorage;
    // window.localStorage.clear();
    // window.sessionStorage.clear();
    // sessionStorage.clear();
   
    
   
    
    this.refreshCaptcha();
    this.captchaInterval = interval(10 * 60 * 1000).subscribe(() => {
       this.refreshCaptcha();
    });
  }

  async refreshCaptcha(): Promise<void> {
    try {
      this.captchaEncoded = '';
      this.captchaChiper = '';
      this.captchaData = '';
      window.sessionStorage.clear();
    sessionStorage.clear();
      this.spinner.show();
      const res = await this.loginAPI.getCaptcha();
      if (res.success) {
        this.captchaData = '';
        this.captchaChiper = res.captchaChiper;

        this.captchaEncoded =
          'data:image/jpg;base64,' +
          (
            this.sanitizer.bypassSecurityTrustResourceUrl(
              res.captchaEncoded
            ) as any
          ).changingThisBreaksApplicationSecurity;
      } else {
        this.toast.info(res.result);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnLogin(): Promise<void> {debugger;
    try { window.sessionStorage.clear();
      if (
        this.username === '' ||
        this.username === undefined ||
        this.username === null
      ) {
        this.toast.warning('Please Enter Username');
        return;
      }

      if (
        this.password === '' ||
        this.password === undefined ||
        this.password === null
      ) {
        this.toast.warning('Please Enter Password');
        return;
      }

      if (
        this.captchaData == '' ||
        this.captchaData == undefined ||
        this.captchaData == null
      ) {
        this.toast.warning('Please Enter Captcha');
        return;
      }

      const req = {
        userName: this.username,
        password: this.password,
        captchaChiper: this.captchaChiper,
        captchaData: this.captchaData,
        
      };
      this.spinner.show();debugger;
      const res = await this.loginAPI.token(req);
      this.spinner.hide();
      if (res.success) {
        sessionStorage.setItem('accessToken', res.access_token);
        sessionStorage.setItem('desigId', res.ROLE);
        sessionStorage.setItem('userName', res.result[0].USERNAME);
        sessionStorage.setItem('lastLoginTime', res.result[0].LAST_LOGIN_TIME);
        sessionStorage.setItem('desigName', res.result[0].DESIGNATION);
        sessionStorage.setItem('mobileNumber', res.result[0].MOBILE_NO);
        sessionStorage.setItem('mentorId', res.result[0].RBK_GROUP_ID);
        sessionStorage.setItem('mentorName', res.result[0].NAME);
        sessionStorage.setItem('districtId', res.result[0].DISTRICT_ID);
        sessionStorage.setItem('districtName', res.result[0].DISTRICT_NAME);
        sessionStorage.setItem('mandalName', res.result[0].MANDAL_NAME ?? '');
        sessionStorage.setItem('bankName', res.result[0].NAME);
        sessionStorage.setItem('villageId', res.result[0].VILLAGE_ID);
        sessionStorage.setItem('villageName', res.result[0].VILLAGE_NAME);
        // For Secretary / Assistant Logins
        sessionStorage.setItem(
          'rbkName',
          res.result[0].RBK_NAME ?? res.result[0].SECRETARIAT_NAME ?? ''
        );
        sessionStorage.setItem(
          'rbkId',
          res.result[0].RBK_CODE ?? res.result[0].SEC_ID ?? ''
        );
        // DA Login
        sessionStorage.setItem(
          'districtId',
          res.result[0].DISTRICT_ID ?? res.result[0].LGD_DIST_CODE ?? ''
        );
        sessionStorage.setItem('mandalId', res.result[0].MANDAL_ID ?? res.result[0].LGD_MANDAL_CODE ?? '' );
        
        sessionStorage.setItem('uniqueId', res.result[0].UNIQUE_ID ?? res.result[0].UNIQUE_ID ?? '' );

        sessionStorage.setItem('splLoginReports', res.result[0].SPECIAL_LOGIN_REPORTS);

        this.session.accessToken = sessionStorage.getItem('accessToken');
        this.session.userName = sessionStorage.getItem('userName');
        this.session.lastLoginTime = sessionStorage.getItem('lastLoginTime');
        this.session.desigId = sessionStorage.getItem('desigId');
        this.session.desigName = sessionStorage.getItem('desigName');
        this.session.mobileNumber = sessionStorage.getItem('mobileNumber');
        this.session.mentorId = sessionStorage.getItem('mentorId');
        this.session.mentorName = sessionStorage.getItem('mentorName');
        this.session.districtId = sessionStorage.getItem('districtId');
        this.session.districtName = sessionStorage.getItem('districtName');
        this.session.mandalId = sessionStorage.getItem('mandalId');
        this.session.mandalName = sessionStorage.getItem('mandalName');
        this.session.bankName = sessionStorage.getItem('bankName');
        this.session.rbkId = sessionStorage.getItem('rbkId');
        this.session.rbkName = sessionStorage.getItem('rbkName');
        this.session.villageId = sessionStorage.getItem('villageId');
        this.session.villageName = sessionStorage.getItem('villageName');
        this.session.splLoginReports = sessionStorage.getItem('splLoginReports');
        this.session.uniqueId = sessionStorage.getItem('uniqueId');

        if (res.ROLE === '301' || res.ROLE === '2'|| res.ROLE === '207') {
          this.router.navigate(['/state']);
        } else if (
          res.ROLE === '201' ||
          res.ROLE === '202' ||
          res.ROLE === '203' ||
          res.ROLE === '204' ||
          res.ROLE === '206'||
          res.ROLE === '1002' 
        ) {
          this.router.navigate(['/district']);
        } else if (res.ROLE === '205') {
          this.router.navigate(['/seLevel']);
        }
        else if (res.ROLE === '208') {
          this.router.navigate(['/prompt-module']);
        }
        
        else if (res.ROLE === '101') {
          this.router.navigate(['/mentor']);
        } else if (res.ROLE === '103') {
          this.router.navigate(['/ahLevel']);
        } else if (res.ROLE === '104') {
          this.router.navigate(['/jdLevel']);
        } else if (res.ROLE === '701') {
          this.router.navigate(['/stateLevelLDM']);
        } else if (res.ROLE === '801') {
          this.router.navigate(['/districtLevelLDM']);
        } else if (res.ROLE === '501') {
          this.router.navigate(['/daLevel']);
        } else if (res.ROLE === '1') {
          this.router.navigate(['/adminDashboard']);
        } else if (res.ROLE === '302') {
          this.router.navigate(['/stateLevelSLBC']);
        } else if (res.ROLE === '303') {
          this.router.navigate(['/civilEngLevel']);
        } else if (res.ROLE === '901') {
          this.router.navigate(['/secretaryLevel']);
        } else if (res.ROLE === '902') {
          this.router.navigate(['/asstSecLevel']);
        } else if (res.ROLE === '502') {
          this.router.navigate(['/animalHusbLevel']);
        } else if (res.ROLE === '504') {
          this.router.navigate(['/welfareAsstLevel']);
        } else if (res.ROLE === '802') {
          this.router.navigate(['/dccbLevel']);
        } else if (res.ROLE === '105' || res.ROLE === '106') {
          this.router.navigate(['/mandalLevel']);
        } else {
          alert('Invalid Route Request !!!');
        }
      } else {
        this.toast.info(res.message);
        this.refreshCaptcha();
      }
    } catch (error) {
      this.refreshCaptcha();
      alert(error.error.error_description);
      console.log(error);
      this.spinner.hide();
    }
  }

  ngOnDestroy(): void {
    this.captchaInterval.unsubscribe();
  }
}
