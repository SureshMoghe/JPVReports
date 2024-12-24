import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-milk-pouring-farmers-report',
  templateUrl: './milk-pouring-farmers-report.component.html',
  styleUrls: ['./milk-pouring-farmers-report.component.css'],
})
export class MilkPouringFarmersReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeId: any;
  routeName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  clusterId: any;
  clusterName: any;

  constructor(
    private utils: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    console.log(decString);
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.routeId = decString.routeId;
    this.routeName = decString.routeName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.clusterId = decString.clusterId;
    this.clusterName = decString.clusterName;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      routeId: this.routeId,
      routeName: this.routeName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/mandalLevel/VolunteerWiseMilkPouringReport'], {
      queryParams: { request: result },
    });
  }
}
