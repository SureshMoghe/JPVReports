import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingAbstractVillageComponent } from 'src/app/buildingAbstractModule/components/building-abstract-village/building-abstract-village.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-building-abstract-village-report',
  templateUrl: './building-abstract-village-report.component.html',
  styleUrls: ['./building-abstract-village-report.component.css'],
})
export class BuildingAbstractVillageReportComponent implements OnInit {
  @ViewChild(BuildingAbstractVillageComponent)
  private buildingAbstract: BuildingAbstractVillageComponent;
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  rbkId: any;
  rbkName: any;
  fromDate: any;
  toDate: any;

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
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
    this.rbkId = decString.rbkId;
    this.rbkName = decString.rbkName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      mandalId: this.mandalId,
      mandalName: this.mandalName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/BuildingAbstractRbkReport'], {
      queryParams: { request: result },
    });
  }
}
