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
  constructor(
    private router: Router,
    private session: SessionService,
    private userManual: UserManualsService,
    private utils: UtilsService,
    private toast: ToasterService
  ) {
    this.guideLines = this.userManual.guideLines;
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
}
