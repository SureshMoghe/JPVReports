import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-login-report-state-level',
  templateUrl: './login-report-state-level.component.html',
  styleUrls: ['./login-report-state-level.component.css'],
})
export class LoginReportStateLevelComponent implements OnInit {
  input: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
