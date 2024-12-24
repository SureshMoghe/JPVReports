import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { SessionService } from 'src/app/shared/services/session.service';
 

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
    JobStatus = false;
    JobProfile = false;
  Regrpt = false;
  Jobrpt = false;
  RegDetails = true;
  userName: any; lastLoginTime: any;
  afterlogin = false;
  before = true;
  constructor(private router: Router,
      private session: SessionService
  ) {
  }

  ngOnInit(): void {
      debugger;
      this.session.masterId = sessionStorage.getItem('masterId');
      this.session.EmailId = sessionStorage.getItem('EmailId');
      if (this.session.EmailId != null || this.session.EmailId === undefined) {
          this.userName = this.session.EmailId;
      }
      if (this.session.masterId != null || this.session.masterId === undefined) {
          this.Regrpt = true;
          this.Jobrpt = false;
          this.JobStatus = true;
          this.JobProfile = true;
         // this.RegDetails = true;

          this.afterlogin = true;
          this.before = false;

      }
      else {
          this.Regrpt = false;
          this.Jobrpt = false;
         // this.RegDetails = false;
          this.afterlogin = false;
          this.before = true;
          this.JobStatus = false;
          this.JobProfile = false;
      }
  }

  screenclick(id) {
      if (id === '1')
          this.router.navigate(['/NotificationModule/RegistrationDetails']);
      if (id === '2')
          this.router.navigate(['/NotificationModule/NotificationDetails']); //Registrationreport
      if (id === '3')
          this.router.navigate(['/NotificationModule/JobDetailsReport']); //Registrationreport
      if (id === '4')
          this.router.navigate(['/NotificationModule/JobReport']);
      if (id === '5')
          this.router.navigate(['/NotificationModule/LoginPage']); //Registrationreport
          if (id === '6')
          this.router.navigate(['/NotificationModule/JobDetailsStatus']);
      if (id === '7')
          this.router.navigate(['/NotificationModule/JobProfile']);

  }




  btnLogout(): void {
      if (confirm('are you sure want to logout ?')) {
          sessionStorage.clear();
          this.router.navigate(['/NotificationModule/LoginPage']);
          this.RegDetails = true;
          this.Regrpt = false;
          this.Jobrpt = false;
          this.before = true;
          this.afterlogin = false;
          sessionStorage.removeItem('masterId');
          sessionStorage.removeItem('EmailId');
          this.JobStatus = false;
          this.JobProfile = false;

      }


  }
}



