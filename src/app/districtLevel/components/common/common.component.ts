import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UserManualsService } from 'src/app/shared/services/user-manuals.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  userName: string;
  lastLoginTime: string;
  guideLines: any[];
  usermentorManuals:any[];
  kccApplicationFormUrl = '';
  constructor(
    private router: Router,
    private session: SessionService,
    private toast: ToasterService,
    private userManual: UserManualsService,
    private utils: UtilsService
  ) {
    this.guideLines = this.userManual.guideLines;
    this.usermentorManuals = this.userManual.MentorModule;
    this.kccApplicationFormUrl = this.userManual.kccApplicationForm;
  }

  ngOnInit(): void {
    this.userName = this.session.userName;
    this.lastLoginTime = this.session.lastLoginTime;
  }

  btnLogout(): void {
    if (confirm('are you sure want to logout ?')) {
      sessionStorage.clear();
      this.router.navigate(['/']);
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

  btnDownloadUsermentorManual(id): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.usermentorManuals.length; i++) {
      if (id === this.usermentorManuals[i].ID) {
        window.open(this.usermentorManuals[i].URL, '_blank');
        return;
      }
    }
    this.toast.warning('User Manual Not Found !!!');
  }
  
}
