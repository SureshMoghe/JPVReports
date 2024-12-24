import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { VillageMeetingService } from '../../services/village-meeting.service';

@Component({
  selector: 'app-village-meeting-calibration',
  templateUrl: './village-meeting-calibration.component.html',
  styleUrls: ['./village-meeting-calibration.component.css'],
})
export class VillageMeetingCalibrationComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
  input: any;

  @Input() districtId: any;
  @Input() districtName: any;
  @Input() mentorId: any;
  @Input() mentorName: any;
  @Input() rbkId: any;
  @Input() rbkName: any;
  @Input() villageId: any;
  @Input() villageName: any;
  @Input() fromDate: any;
  @Input() toDate: any;

  calibrationDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private villageMeetingsAPI: VillageMeetingService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if (
    //   this.districtId === undefined ||
    //   this.districtId === '' ||
    //   this.districtId === null
    // ) {
    //   return;
    // }
    // if (
    //   this.mentorId === undefined &&
    //   this.mentorId === '' &&
    //   this.mentorId === null
    // ) {
    //   return;
    // }
    // if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
    //   return;
    // }
    // this.loadReport();
  }
  ngOnChanges(): void {
    if (
      this.districtId === undefined ||
      this.districtId === '' ||
      this.districtId === null
    ) {
      return;
    }
    if (
      this.mentorId === undefined &&
      this.mentorId === '' &&
      this.mentorId === null
    ) {
      return;
    }
    if (this.rbkId === undefined && this.rbkId === '' && this.rbkId === null) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.spinner.show();
      const res = await this.villageMeetingsAPI.CalibrationReport(req);
      if (res.success) {
        this.excelData = [];
        this.calibrationDetails = res.result;
        for (let i = 0; i < this.calibrationDetails.length; i++) {
          let interNetDevice = '';
          if (this.calibrationDetails[i].INTERNET_DEVICE === '0') {
            interNetDevice = 'NO';
          } else if (this.calibrationDetails[i].INTERNET_DEVICE === '1') {
            interNetDevice = 'DONGLE';
          } else if (this.calibrationDetails[i].INTERNET_DEVICE === '2') {
            interNetDevice = 'MODEM';
          }
          let singleRow = {
            S_NO: i + 1,
            VILLAGE_NAME: this.calibrationDetails[i].VILLAGE_NAME,
            ROUTE_NAME: this.calibrationDetails[i].ROUTE_NAME,
            AMCU_ID: this.calibrationDetails[i].AMCU_ID,
            INSPECTION_DATE: this.calibrationDetails[i].INSPECTION_DATE,
            INSPECTION_TIME: this.calibrationDetails[i].INSPECTION_TIME,
            IS_DESKTOP_AVILABLE:
              this.calibrationDetails[i].IS_DESKTOP_AVILABLE === '1'
                ? 'YES'
                : 'NO',
            DESKTOP_MAKER: this.calibrationDetails[i].DESKTOP_MAKER,
            DESKTOP_SERIAL_NO: this.calibrationDetails[i].DESKTOP_SERIAL_NO,
            DEV_DESKTOP_CODE: this.calibrationDetails[i].DEV_DESKTOP_CODE,
            CPU_MAKER: this.calibrationDetails[i].CPU_MAKER,
            CPU_SERIAL_NO: this.calibrationDetails[i].CPU_SERIAL_NO,
            DEV_CPU_CODE: this.calibrationDetails[i].DEV_CPU_CODE,
            MOUSE_MAKER: this.calibrationDetails[i].MOUSE_MAKER,
            MOUSE_SERIAL_NO: this.calibrationDetails[i].MOUSE_SERIAL_NO,
            DEV_MOUSE_CODE: this.calibrationDetails[i].DEV_MOUSE_CODE,
            KEYBOARD_MAKER: this.calibrationDetails[i].KEYBOARD_MAKER,
            KEYBOARD_SERIAL_NO: this.calibrationDetails[i].KEYBOARD_SERIAL_NO,
            DEV_KEYBOARD_CODE: this.calibrationDetails[i].DEV_KEYBOARD_CODE,
            UPS_MAKER: this.calibrationDetails[i].UPS_MAKER,
            UPS_SERIAL_NO: this.calibrationDetails[i].UPS_SERIAL_NO,
            DEV_UPS_CODE: this.calibrationDetails[i].DEV_UPS_CODE,
            IS_ULTRASONIC_MILK_ANALYSER:
              this.calibrationDetails[i].IS_ULTRASONIC_MILK_ANALYSER === '1'
                ? 'YES'
                : 'NO',
            IS_ELE_WEIGHT_SCALE:
              this.calibrationDetails[i].IS_ELE_WEIGHT_SCALE === '1'
                ? 'YES'
                : 'NO',
            DEV_ELE_WEIGHT_SCALE_CODE:
              this.calibrationDetails[i].DEV_ELE_WEIGHT_SCALE_CODE,
            IS_UPS_1KVA:
              this.calibrationDetails[i].IS_UPS_1KVA === '1' ? 'YES' : 'NO',
            IS_BATTERY:
              this.calibrationDetails[i].IS_BATTERY === '1' ? 'YES' : 'NO',
            DEV_BATTERY_CODE: this.calibrationDetails[i].DEV_BATTERY_CODE,
            IS_REMOTE_DISPLAY_UINT:
              this.calibrationDetails[i].IS_REMOTE_DISPLAY_UINT === '1'
                ? 'YES'
                : 'NO',
            DEV_REMOTE_DISPALY_CODE:
              this.calibrationDetails[i].DEV_REMOTE_DISPALY_CODE,
            IS_24PIN_80COL_MATRIX_PRINTER:
              this.calibrationDetails[i].IS_24PIN_80COL_MATRIX_PRINTER === '1'
                ? 'YES'
                : 'NO',
            MARTIX_PRINTER_MAKER:
              this.calibrationDetails[i].MARTIX_PRINTER_MAKER,
            MATRIX_PRINTER_SERIALNO:
              this.calibrationDetails[i].MATRIX_PRINTER_SERIALNO,
            DEV_MATRIX_PRINTER_CODE:
              this.calibrationDetails[i].DEV_MATRIX_PRINTER_CODE,
            IS_ULTRASONIC_STIRRER:
              this.calibrationDetails[i].IS_ULTRASONIC_STIRRER === '1'
                ? 'YES'
                : 'NO',
            ULTRASONIC_STIRRER_MAKER:
              this.calibrationDetails[i].ULTRASONIC_STIRRER_MAKER,
            ULTRASONIC_STIRRER_SERIALNO:
              this.calibrationDetails[i].ULTRASONIC_STIRRER_SERIALNO,
            DEV_ULTRASONIC_STIRRER_CODE:
              this.calibrationDetails[i].DEV_ULTRASONIC_STIRRER_CODE,
            COW_MILK_FAT: this.calibrationDetails[i].COW_MILK_FAT,
            COW_MILK_SNF: this.calibrationDetails[i].COW_MILK_SNF,
            BUFFALO_MILK_FAT: this.calibrationDetails[i].BUFFALO_MILK_FAT,
            BUFFALO_MILK_SNF: this.calibrationDetails[i].BUFFALO_MILK_SNF,
            INTERNET_DEVICE_MAKER:
              this.calibrationDetails[i].INTERNET_DEVICE_MAKER,
            INTERNET_DEVICE_SERIAL_NO:
              this.calibrationDetails[i].INTERNET_DEVICE_SERIAL_NO,
            INTERNET_DEVICE: interNetDevice,
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
      'village Meeting Calibration Level Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
        mentorId: this.mentorId,
        rbkId: this.rbkId,
        villageId: this.villageId,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      const fileName = 'CalibrationVillageMeetingReport';
      let basePDF = '';
      this.spinner.show();
      const res =
        await this.villageMeetingsAPI.CalibrationVillageMeetingPDFReport(req);
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
