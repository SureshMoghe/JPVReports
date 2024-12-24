import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-detail-report',
  templateUrl: './farmer-nature-of-unit-detail-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-detail-report.component.css'],
})
export class FarmerNatureOfUnitDetailReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  rbkId: any;
  rbkName: any;
  mandalName: any;
  mandalId: any;
  liveStock: any;
  natureOfUnit: any;

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
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.liveStock = decString.liveStock;
    this.natureOfUnit = decString.natureOfUnit;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      rbkId: this.rbkId,
      rbkName: this.rbkName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/FarmerNatureOfUnitMandalReport'], {
      queryParams: { request: result },
    });
  }
}
