import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VolunteerFarmerDataService } from '../../services/volunteer-farmer-data.service';

@Component({
  selector: 'app-vv-farmer-volunteers-logged-in-list',
  templateUrl: './vv-farmer-volunteers-logged-in-list.component.html',
  styleUrls: ['./vv-farmer-volunteers-logged-in-list.component.css'],
})
export class VvFarmerVolunteersLoggedInListComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() route: any;
  @Input() routeName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;

  volunteerListDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mandalId === undefined &&
      this.mandalId === '' &&
      this.mandalId === null
    ) {
      return;
    }
    if (this.route === undefined && this.route === '' && this.route === null) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mandalId === undefined &&
    //   this.mandalId === '' &&
    //   this.mandalId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.route === undefined &&
    //   this.route === '' &&
    //   this.route === null
    // ) {
    //   return;
    // }
    // if (
    //   this.rbkId === undefined &&
    //   this.rbkId === '' &&
    //   this.rbkId === null
    // ) {
    //   return;
    // }
    // this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        route: this.route,
        rbkId: this.rbkId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.vvFarmerAPI.volunteersLoggedInList(req);
      if (res.success) {
        this.excelData = [];
        this.volunteerListDetails = res.result;
        for (let i = 0; i < this.volunteerListDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.volunteerListDetails[i].VILLAGE_NAME,
            CLUSTER_NAME: this.volunteerListDetails[i].CLUSTER_NAME,
            VOLUNTEER_NAME: this.volunteerListDetails[i].VOLUNTEER_NAME,
            VOLUNTEER_MOBILE: this.volunteerListDetails[i].VOLUNTEER_MOBILE,
            UID_NUM: this.volunteerListDetails[i].UID_NUM,
            LAST_LOGIN_TIME: this.volunteerListDetails[i].LAST_LOGIN_TIME,
          };

          this.excelData.push(singleRow);
        }
      } else {
        this.toast.info(res.message);
      }
      this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Total Volunteer List Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        districtName: this.districtName,
        mandalId: this.mandalId,
        mandalName: this.mandalName,
        route: this.route,
        routeName: this.routeName,
        rbkId: this.rbkId,
        rbkName: this.rbkName,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'totalVolunteersList';
      let basePDF = '';
      this.spinner.show();
      const res = await this.vvFarmerAPI.totalVolunteersListPDF(req);
      if (res.success) {
        basePDF = res.result;
        this.utils.downloadPdfFile(basePDF, fileName);
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
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
