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
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { MinutesOfMeetingService } from '../../services/minutes-of-meeting.service';

@Component({
  selector: 'app-mom-village',
  templateUrl: './mom-village.component.html',
  styleUrls: ['./mom-village.component.css'],
})
export class MomVillageComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mandalId: any;
  @Input() mandalName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  villageLevelDetails = [];

  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private momApi: MinutesOfMeetingService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    if (this.utils.isEmpty(this.districtId)) {
      return;
    }
    if (this.utils.isEmpty(this.mandalId)) {
      return;
    }
    if (this.utils.isEmpty(this.rbkId)) {
      return;
    }
    if (this.utils.isEmpty(this.villageId)) {
      return;
    }
    this.loadReport();
  }

  ngOnChanges(): void {}

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.villageLevelDetails = [];
      this.spinner.show();
      const res = await this.momApi.villageLevelReport(req);
      if (res.success) {
        this.excelData = [];
        this.villageLevelDetails = res.result;
        for (let i = 0; i < this.villageLevelDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            MEETING_AGENDA: this.villageLevelDetails[i].MEETING_AGENDA,
            MEETING_VENUE: this.villageLevelDetails[i].MEETING_VENUE,
            MEETING_VENUE_ADDRESS:
              this.villageLevelDetails[i].MEETING_VENUE_ADDRESS,
            MEETING_DATE: this.villageLevelDetails[i].MEETING_DATE,
            MEETING_TIME: this.villageLevelDetails[i].MEETING_TIME,
            MEETING_MINUTES: this.villageLevelDetails[i].MEETING_MINUTES,
            INSERTED_ON: this.villageLevelDetails[i].INSERTED_ON,
            INVITATION_SENT: this.villageLevelDetails[i].INVITATION_SENT,
            NO_OF_WOMEN_CHEYUTH_BEN:
              this.villageLevelDetails[i].NO_OF_WOMEN_CHEYUTH_BEN,
            NO_OF_WOMEN_MILCH_ANIM_BEN:
              this.villageLevelDetails[i].NO_OF_WOMEN_MILCH_ANIM_BEN,
          };

          this.excelData.push(singleRow);
        }
        this.spinner.hide();
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
      'Minutes Of Meeting Village Level Report',
      true
    );
  }
  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mandalId: this.mandalId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'villageLevelMinutesOfMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.momApi.villageLevelReportPDF(req);
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
