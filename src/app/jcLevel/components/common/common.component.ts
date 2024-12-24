import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  userName : string;
  lastLoginTime : string;
  constructor(private router: Router,private session : SessionService) {}

  ngOnInit(): void {
    this.userName = this.session.userName;
    this.lastLoginTime= this.session.lastLoginTime;
  }
  btnLogout(): void {
    if (confirm('are you sure want to logout ?')) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
