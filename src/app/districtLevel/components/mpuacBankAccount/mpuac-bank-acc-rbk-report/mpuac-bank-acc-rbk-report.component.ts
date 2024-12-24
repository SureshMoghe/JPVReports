import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MpuacBankAccRbkComponent } from 'src/app/mpuacBankAccModule/components/mpuac-bank-acc-rbk/mpuac-bank-acc-rbk.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-mpuac-bank-acc-rbk-report',
  templateUrl: './mpuac-bank-acc-rbk-report.component.html',
  styleUrls: ['./mpuac-bank-acc-rbk-report.component.css'],
})
export class MpuacBankAccRbkReportComponent implements OnInit {
  @ViewChild(MpuacBankAccRbkComponent)
  private mpuacBankAcc: MpuacBankAccRbkComponent;

  input: any;
  districtId: any;
  districtName: any;
  mentorId: any;
  mentorName: any;
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
    this.mentorId = decString.mentorId;
    this.mentorName = decString.mentorName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  }

  onRbkChange(result): void {
    this.router.navigate(['/district/MpuacBankAccDetailReport'], {
      queryParams: { request: result },
    });
  }

  btnBack(): void {
    const requestData = {
      districtId: this.districtId,
      districtName: this.districtName,
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    this.router.navigate(['/district/MpuacBankAccMentorReport'], {
      queryParams: { request: result },
    });
  }
  btnExcel(): void {
    this.mpuacBankAcc.getExcelDownload();
  }
}
