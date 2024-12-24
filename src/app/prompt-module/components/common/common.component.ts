import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UserManualsService } from 'src/app/shared/services/user-manuals.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  dashboardPage: any;
  dashboard = false;
  userName: string;
  lastLoginTime: string;
  guideLines: any[];
  splLoginReports: any;

  Departmentadmindiv=false;
  State_Departmentadmindiv=false;
admin=false;
  constructor(
    private router: Router,
    private session: SessionService,
    private toast: ToasterService,
    private userManual: UserManualsService,
    private utils: UtilsService
  ) {
    this.guideLines = this.userManual.guideLines;
  }

  ngOnInit(): void {
    this.userName = this.session.userName;
    this.lastLoginTime = this.session.lastLoginTime;
    this.splLoginReports = this.session.splLoginReports;
  // if( this.session.desigId=="2")  { this.admin=true;}else {this.admin=false;}
  //   if(this.userName=="9885826228")
  //   {
     
  //     this.State_Departmentadmindiv=false;
  //     this.Departmentadmindiv=true;
  //   }
  //   if(this.userName=="9573021599")
  //   {
     
  //     this.Departmentadmindiv=false;
  //     this.State_Departmentadmindiv=true;
  //   }

  }

  btnLogout(): void {
    if (confirm('are you sure want to logout ?')) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }

  onActivate(event) {
    this.dashboardPage = event.dashboardPage;
    if (this.dashboardPage) {
      this.dashboard = true;
    } else {
      this.dashboard = false;
    }
  }

  btnDocumentDownload(url): void {
    if (this.utils.isEmpty(url)) {
      this.toast.warning('User Manual Not Found !!!');
    } else {
      window.open(url, '_blank');
    }
  }

  btnForgetPassword(): void {
    //this.router.navigate(['/shared/PasswordUpdate']);
    this.utils.updatePassword(this.session.desigId);
    
  }
}
