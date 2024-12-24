import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-vw-milk-pouring-report',
  templateUrl: './vw-milk-pouring-report.component.html',
  styleUrls: ['./vw-milk-pouring-report.component.css'],
})
export class VwMilkPouringReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.routeId = decString.routeId;
    this.routeName = decString.routeName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
  }

  onVolunteerChange(result): void {
    this.router.navigate(['/mentor/milkPouringFarmersReport'], {
      queryParams: { request: result },
    });
  }

  onNonMilkPouringChange(result): void {
    this.router.navigate(['/mentor/nonMilkPouringFarmersReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      routeId: this.routeId,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/mentor/FarmerMilkPouringMentorReport'], {
      queryParams: { request: result },
    });
  }
}
