import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MdacSocietyWiseComponent } from 'src/app/mdacSocietyWiseModule/components/mdac-society-wise/mdac-society-wise.component';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mdac-society-wise-report',
  templateUrl: './mdac-society-wise-report.component.html',
  styleUrls: ['./mdac-society-wise-report.component.css'],
})
export class MdacSocietyWiseReportComponent implements OnInit, AfterViewInit {
  @ViewChild(MdacSocietyWiseComponent)
  private mdacSociety: MdacSocietyWiseComponent;
  districtId = '';
  districtName = '';
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private router: Router,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtId = this.session.districtId;
    this.districtName = this.session.districtName;
  }

  ngAfterViewInit(): void {
    this.mdacSociety.loadReport();
  }
}
