import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-nature-of-unit-mandal-report',
  templateUrl: './farmer-nature-of-unit-mandal-report.component.html',
  styleUrls: ['./farmer-nature-of-unit-mandal-report.component.css'],
})
export class FarmerNatureOfUnitMandalReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;

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
  }

  onSheepToBuffaloChange(result): void {
    this.router.navigate(['/state/FarmerNatureOfUnitDetailReport'], {
      queryParams: { request: result },
    });
  }

  onGoatToBuffaloChange(result): void {
    this.router.navigate(['/state/FarmerNatureOfUnitDetailReport'], {
      queryParams: { request: result },
    });
  }

  onSheepToCowChange(result): void {
    this.router.navigate(['/state/FarmerNatureOfUnitDetailReport'], {
      queryParams: { request: result },
    });
  }

  onGoatToCowChange(result): void {
    this.router.navigate(['/state/FarmerNatureOfUnitDetailReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));

    this.router.navigate(['/state/FarmerNatureOfUnitDistrictReport'], {
      queryParams: { request: result },
    });
  }
}
