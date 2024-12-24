import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-network-submitted-villages-report',
  templateUrl: './network-submitted-villages-report.component.html',
  styleUrls: ['./network-submitted-villages-report.component.css'],
})
export class NetworkSubmittedVillagesReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  networkType: any;

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
    this.networkType = decString.networkType;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/AmcuNetworkDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
