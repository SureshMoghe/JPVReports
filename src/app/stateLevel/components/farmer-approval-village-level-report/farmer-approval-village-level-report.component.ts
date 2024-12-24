import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-farmer-approval-village-level-report',
  templateUrl: './farmer-approval-village-level-report.component.html',
  styleUrls: ['./farmer-approval-village-level-report.component.css']
})
export class FarmerApprovalVillageLevelReportComponent implements OnInit {
  input: any;
  districtId: any;
  districtName: any;
  mandalId: any;
  mandalName: any;
  fromDate: any;
  toDate: any;
  phaseid: any;
  phasename: any;
  rbkId: any;
  rbkName: any;
  constructor(
      private router: Router,
      private utils: UtilsService,
      private routes: ActivatedRoute
  ) {
      routes.queryParams.subscribe((params) => (this.input = params['request']));
  }

  ngOnInit(): void {
      debugger;
      const decString = JSON.parse(this.utils.decrypt(this.input));
      this.districtId = decString.districtId;
      this.districtName = decString.districtName;
      this.mandalId = decString.mandalId;
      this.mandalName = decString.mandalName;
      this.phaseid = decString.phaseid;
      this.phasename = decString.phasename;
      this.fromDate = decString.fromDate;
      this.toDate = decString.toDate;
      this.rbkId = decString.rbkId;
      this.rbkName = decString.rbkName;
      console.log(decString);
  }

  onClusterChange(result) {

      this.router.navigate(['/state/FarmerApprovalClusterLevelReport'], {
          queryParams: { request: result },
      });
  }



  btnBack(): void {
      debugger
      const requestData = {
          districtId: this.districtId,
          districtName: this.districtName,
          mandalId: this.mandalId,
          mandalName: this.mandalName,
          phaseid: this.phaseid,
          phasename: this.phasename,
          fromDate: this.fromDate,
          toDate: this.toDate,
          rbkId: this.rbkId,
          rbkName: this.rbkName
      };

      const result = this.utils.encrypt(JSON.stringify(requestData));



      this.router.navigate(['/state/FarmerApprovalRoutesReport'], {
          queryParams: { request: result },
      });

  }


}

  