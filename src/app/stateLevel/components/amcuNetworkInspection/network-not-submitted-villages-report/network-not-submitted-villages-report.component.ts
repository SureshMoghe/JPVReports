import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-network-not-submitted-villages-report',
  templateUrl: './network-not-submitted-villages-report.component.html',
  styleUrls: ['./network-not-submitted-villages-report.component.css'],
})
export class NetworkNotSubmittedVillagesReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;

  constructor(
    private router: Router,
    private toast: ToasterService,
    private utils: UtilsService,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
  }

  btnBack(): void {
    this.router.navigate(['/state/AmcuNetworkStateReport']);
  }
}
