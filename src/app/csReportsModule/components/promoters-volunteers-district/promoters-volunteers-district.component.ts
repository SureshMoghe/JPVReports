import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { CsReportsService } from '../../services/cs-reports.service';

@Component({
  selector: 'app-promoters-volunteers-district',
  templateUrl: './promoters-volunteers-district.component.html',
  styleUrls: ['./promoters-volunteers-district.component.css'],
})
export class PromotersVolunteersDistrictComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  districtId = '';
  districtName = '';
  promotersVolunteersDetails = [];

  reportTotals = {
    S_NO: '-',
    YEAR: '-',
    MONTH_NAME: 'TOTAL',
    NO_OF_MANDALS: 0,
    NO_OF_RBKS: 0,
    NO_OF_AMCU: 0,
    NO_OF_PROMOTER_REGIS_FARMER: 0,
    MILK_POURING_PROMO: 0,
    MILK_NOT_POURING_PROMO: 0,
    NO_OF_VOLUNTEER_REGIS_FARMER: 0,
    MILK_POURING_VOLUNTEERS: 0,
    MILK_NOT_POURING_VOLUNTEERS: 0,
  };
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private utils: UtilsService,
    private csAPI: CsReportsService,
    private logger: LoggerService,
    private session: SessionService
  ) {}

  ngOnInit(): void {
    this.districtName = this.session.districtName;
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
        YEAR: '-',
        MONTH_NAME: 'TOTAL',
        NO_OF_MANDALS: 0,
        NO_OF_RBKS: 0,
        NO_OF_AMCU: 0,
        NO_OF_PROMOTER_REGIS_FARMER: 0,
        MILK_POURING_PROMO: 0,
        MILK_NOT_POURING_PROMO: 0,
        NO_OF_VOLUNTEER_REGIS_FARMER: 0,
        MILK_POURING_VOLUNTEERS: 0,
        MILK_NOT_POURING_VOLUNTEERS: 0,
      };
      const req = {
        districtId: this.session.districtId,
        levelType: '2',
      };
      this.promotersVolunteersDetails = [];
      this.excelData = [];
      this.spinner.show();
      const res = await this.csAPI.csDistrictReports(req);
      this.spinner.hide();
      if (res.success) {
        this.promotersVolunteersDetails = res.result;
        for (let i = 0; i < this.promotersVolunteersDetails.length; i++) {
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_MANDALS += parseInt(
            this.promotersVolunteersDetails[i].NO_OF_MANDALS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_RBKS += parseInt(
            this.promotersVolunteersDetails[i].NO_OF_RBKS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_AMCU += parseInt(
            this.promotersVolunteersDetails[i].NO_OF_AMCU
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_PROMOTER_REGIS_FARMER += parseInt(
            this.promotersVolunteersDetails[i].NO_OF_PROMOTER_REGIS_FARMER
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_PROMO += parseInt(
            this.promotersVolunteersDetails[i].MILK_POURING_PROMO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NOT_POURING_PROMO += parseInt(
            this.promotersVolunteersDetails[i].MILK_NOT_POURING_PROMO
          );
          // tslint:disable-next-line: radix
          this.reportTotals.NO_OF_VOLUNTEER_REGIS_FARMER += parseInt(
            this.promotersVolunteersDetails[i].NO_OF_VOLUNTEER_REGIS_FARMER
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_POURING_VOLUNTEERS += parseInt(
            this.promotersVolunteersDetails[i].MILK_POURING_VOLUNTEERS
          );
          // tslint:disable-next-line: radix
          this.reportTotals.MILK_NOT_POURING_VOLUNTEERS += parseInt(
            this.promotersVolunteersDetails[i].MILK_NOT_POURING_VOLUNTEERS
          );
          let singleRow = {
            S_NO: i + 1,
            YEAR: this.promotersVolunteersDetails[i].YEAR,
            MONTH_NAME: this.promotersVolunteersDetails[i].MONTH_NAME,
            NO_OF_MANDALS: this.promotersVolunteersDetails[i].NO_OF_MANDALS,
            NO_OF_RBKS: this.promotersVolunteersDetails[i].NO_OF_RBKS,
            NO_OF_AMCU: this.promotersVolunteersDetails[i].NO_OF_AMCU,
            NO_OF_PROMOTER_REGIS_FARMER:
              this.promotersVolunteersDetails[i].NO_OF_PROMOTER_REGIS_FARMER,
            MILK_POURING_PROMO:
              this.promotersVolunteersDetails[i].MILK_POURING_PROMO,
            MILK_NOT_POURING_PROMO:
              this.promotersVolunteersDetails[i].MILK_NOT_POURING_PROMO,
            NO_OF_VOLUNTEER_REGIS_FARMER:
              this.promotersVolunteersDetails[i].NO_OF_VOLUNTEER_REGIS_FARMER,
            MILK_POURING_VOLUNTEERS:
              this.promotersVolunteersDetails[i].MILK_POURING_VOLUNTEERS,
            MILK_NOT_POURING_VOLUNTEERS:
              this.promotersVolunteersDetails[i].MILK_NOT_POURING_VOLUNTEERS,
          };

          this.excelData.push(singleRow);
        }
        this.excelData.push(this.reportTotals);
        this.rerender();
      } else {
        this.spinner.hide();
        this.toast.info(res.message);
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Month Wise Milk Procurement Status',
      true
    );
  }

  btnPDF(): void {
    const req = {
      districtId: this.districtId,
      districtName: this.districtName,
      levelType: '2',
    };
    const fileName = 'monthWiseMilkProcurementStatus';
    let basePDF = '';
    this.spinner.show();
    this.csAPI
      .csDistrictReports(req)
      .then((res: any) => {
        if (res.success) {
          basePDF = res.result;
          this.utils.downloadPdfFile(basePDF, fileName);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
