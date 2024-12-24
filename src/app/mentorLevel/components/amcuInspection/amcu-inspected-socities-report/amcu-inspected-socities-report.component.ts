import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-amcu-inspected-socities-report',
  templateUrl: './amcu-inspected-socities-report.component.html',
  styleUrls: ['./amcu-inspected-socities-report.component.css'],
})
export class AmcuInspectedSocitiesReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  routeNo: any;
  routeName: any;
  fromDate: any;
  toDate: any;
  typeOfInspection = '';
  inspectionName: any;
  rbkId: any;
  rbkName: any;
  uniqueId: any;

  constructor(
    private utils: UtilsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    activeRoute.queryParams.subscribe(
      (params) => (this.input = params['request'])
    );
  }

  ngOnInit(): void {
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.routeNo = decString.routeNo;
    this.routeName = decString.routeName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
    this.typeOfInspection = decString.typeOfInspection;
    this.inspectionName = decString.inspectionName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.uniqueId = decString.uniqueId;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
      typeOfInspection: this.typeOfInspection,
      inspectionName: this.inspectionName,
      uniqueId: this.uniqueId,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/mentor/AmcuInspectionMentorReport'], {
      queryParams: { request: result },
    });
  }
}
