import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-network-district-report',
  templateUrl: './amcu-network-district-report.component.html',
  styleUrls: ['./amcu-network-district-report.component.css'],
})
export class AmcuNetworkDistrictReportComponent implements OnInit {
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

  onNwSubmittedChange(result): void {
    this.router.navigate(['/state/NetworkSubmittedVillagesReport'], {
      queryParams: { request: result },
    });
  }
  btnBack(): void {
    this.router.navigate(['/state/AmcuNetworkStateReport']);
  }
}
