import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css'],
})
export class SsoComponent implements OnInit {
  token;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private utils: UtilsService,
    private loginAPI: LoginService,
    private session: SessionService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    route.queryParams.subscribe((params) => (this.token = params['request']));
  }

  ngOnInit(): void { debugger;
    this.login();
  }

  login(): void {debugger;
    sessionStorage.setItem('accessToken', this.token);
    this.spinner.show();
    const req = {
  userName:this.session.userName,
  role:this.session.desigId,
  tokenId:this.session.accessToken,
} 
    this.loginAPI
      .SSOLogin()
      .then((res: any) => {
      
        this.spinner.hide();debugger;
        if (res.success) {
          sessionStorage.setItem('desigId', res.ROLE);
          sessionStorage.setItem('userName', res.result[0].USERNAME);
          sessionStorage.setItem(
            'lastLoginTime',
            res.result[0].LAST_LOGIN_TIME
          );
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
          sessionStorage.setItem(
            'mandalId',
            res.result[0].MANDAL_ID ?? res.result[0].LGD_MANDAL_CODE ?? ''
          );

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

          if (res.ROLE === '301' || res.ROLE === '2') {
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
          } else {
            alert('Invalid Route Request !!!');
          }
        } else {
          alert(res.message);
          window.open('https://apddcf.ap.gov.in/jpvReports/#/login/'); //'http://goapamulproject.ap.gov.in/'
        }
      })
      .catch((error: any) => {
        alert(error.error.error_description);
        console.log(error);
        this.spinner.hide();
        window.open('https://apddcf.ap.gov.in/jpvReports/#/login/');//'http://goapamulproject.ap.gov.in/'
      });
  }
} 
