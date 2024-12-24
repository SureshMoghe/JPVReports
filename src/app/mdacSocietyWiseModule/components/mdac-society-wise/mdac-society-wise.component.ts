import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { MdacSocietyWiseService } from '../../services/mdac-society-wise.service';

@Component({
  selector: 'app-mdac-society-wise',
  templateUrl: './mdac-society-wise.component.html',
  styleUrls: ['./mdac-society-wise.component.css'],
})
export class MdacSocietyWiseComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() districtId: any;
  societyWiseDetails = [];
  excelData = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private mdac: MdacSocietyWiseService,
    private utils: UtilsService,
    private session: SessionService
  ) {}

  ngOnInit(): void {}
  async loadReport(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      this.societyWiseDetails = [];
      this.spinner.show();
      const res = await this.mdac.districtWiseMdacAccounts(req);
      if (res.success) {
        this.excelData = [];
        this.societyWiseDetails = res.result;
        for (let i = 0; i < this.societyWiseDetails.length; i++) {
          let singleRow = {
            S_NO: i + 1,
            DISTRICT: this.societyWiseDetails[i].DISTRICT,
            MANDAL_NAME: this.societyWiseDetails[i].MANDAL_NAME,
            ROUTE_NAME: this.societyWiseDetails[i].ROUTE_NAME,
            RBK_NAME: this.societyWiseDetails[i].RBK_NAME,
            VILLAGE_NAME: this.societyWiseDetails[i].VILLAGE_NAME,
            MPUSS_CODE: this.societyWiseDetails[i].MPUSS_CODE,
            BANK_NAME: this.societyWiseDetails[i].BANK_NAME,
            IFSCCODE: this.societyWiseDetails[i].IFSCCODE,
            BRANCH_NAME: this.societyWiseDetails[i].BRANCH_NAME,
            BANK_ACCOUNT_NO: this.societyWiseDetails[i].BANK_ACCOUNT_NO,
            SECRETARY_NAME: this.societyWiseDetails[i].SECRETARY_NAME,
            SECRETARY_MBL_NUM: this.societyWiseDetails[i].SECRETARY_MBL_NUM,
            PAN_NO: this.societyWiseDetails[i].PAN_NO,
            PINCODE: this.societyWiseDetails[i].PINCODE,
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
      'MDAC Society Wise Report',
      true
    );
  }

  async btnPDF(): Promise<void> {
    try {
      const req = {
        districtId: this.districtId,
      };
      const fileName = 'mdacSocietyWiseReport';
      let basePDF = '';
      this.spinner.show();
      const res = await this.mdac.districtWiseMdacAccountsPDF(req);
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
