import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ComparitiveMilkPourerService } from 'src/app/comparitiveMilkPourerModule/services/comparitive-milk-pourer.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-bmcu-equipment-submitted-details',
  templateUrl: './bmcu-equipment-submitted-details.component.html',
  styleUrls: ['./bmcu-equipment-submitted-details.component.css']
})
export class BmcuEquipmentSubmittedDetailsComponent 
implements OnInit, OnDestroy, AfterViewInit
{
  @Output() onDetailsChange = new EventEmitter<string>();

@Input() districtId: any;
@Input() type: any;
@Input() districtName: any;

headingText = '';
comparitiveMilkPouringDetails = [];
excelData = [];

detailshide:boolean=true;
detailshide1:boolean=true;
shifted:boolean=false;
detailshide123:boolean=true;
detailshide12345:boolean=true;
shiftedid:any;


@ViewChild(DataTableDirective, { static: false })
dtElement: DataTableDirective;

dtOptions: DataTables.Settings = this.utils.dataTableOptions();
dtTrigger: Subject<any> = new Subject();
constructor(
  private StateAPI: StateService,
  private spinner: NgxSpinnerService,
  private toast: ToasterService,
  private utils: UtilsService,
  private logger: LoggerService
) {}

ngOnInit(): void {  

  if(this.type == '35'){
    this.headingText = "BMCU Equipments Approved Details";
    this.detailshide12345=false;
    this.detailshide1=false;
    this.detailshide123=true;
  }
  else if(this.type == '41'){
    this.headingText = "BMCU Equipments Rejected Details";
    this.detailshide12345=false;
    this.detailshide1=true;
    this.detailshide123=true;
  }
  else{
    this.headingText = "BMCU Equipments Not Submitted Details";
    this.detailshide=false;
    this.detailshide1=false;
    this.detailshide123=false
    this.detailshide12345=true
  }
  this.loadReport();
}

async loadReport(): Promise<void> {  debugger;
  try {
    const req = {
      TYPE: this.type,
      DISTRICT: this.districtId,       
    };
    this.spinner.show();
    const res = await this.StateAPI.TechnisianDetails_Select(req);
    this.spinner.hide();
    if (res.success) {
      this.excelData = [];
      this.comparitiveMilkPouringDetails = res.result;

      
    //   for (let i = 0; i < this.comparitiveMilkPouringDetails.length; i++) {
    //      this.shiftedid =  this.comparitiveMilkPouringDetails[i].SHIFTED; 

    //      if(this.shiftedid == '1' ){
    //       this.shifted=true;
    //      }
    //      else{
    //       this.shifted = false;
    //      }
    //  }

     

  

    } else {
      this.toast.info(res.message);
    }
    this.rerender();
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
}

btnExcel(): void {
  this.utils.JSONToCSVConvertor(this.excelData, this.headingText, true);
}

// async btnPDF(): Promise<void> {
//   try {
//     const req = {
//       month: this.month,
//       year: this.year,
//       districtId: this.districtId,
//       districtName: this.districtName,
//       subReportType: this.subReportType,
//     };
//     const fileName = 'comparitiveMilkPouringDetailReport';
//     let basePDF = '';
//     this.spinner.show();
//     const res = await this.cmpAPI.milkPourerDetailLevelPDFReport(req);
//     if (res.success) {
//       basePDF = res.result;
//       this.utils.downloadPdfFile(basePDF, fileName);
//     } else {
//       this.toast.info(res.message);
//     }
//     this.spinner.hide();
//   } catch (error) {
//     this.spinner.hide();
//     this.utils.catchResponse(error);
//   }
// }


btnEquipDetails(obj,type): void { debugger;

  console.log(obj);
  const requestData = {
    type: type,
    districtId: obj.DISTRICT_CODE,
    districtName :obj.DISTRICT,
    mandalId :obj.MANDAL_CODE,
    mandalName :obj.MANDAL,
    bmcuId :obj.BMCU_CODE,
    bmcuName :obj.BMCU, 

    };
  const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
  this.onDetailsChange.emit(encryptedString);
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

async btnViewImage(path): Promise<void> {
  try {  debugger;

    //this.utils.viewImage(path);
    
    if (!this.utils.isEmpty(path)) {
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(path);
      this.spinner.hide();
      if (res.success) {
       var imagepath = res.result;
        this.utils.viewImage(imagepath);
      } else {
        this.toast.info(res.message);
      }
    } else {
      this.toast.info('Photo Not Available...');
    }
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }


}


async btnPdfView(pdf): Promise<void> {
  try {
    this.spinner.show();
    const res = await this.utils.DMSFileDownload(pdf);
    if (res.success) {
      this.utils.viewPDF(res.result);
    } else {
      this.toast.info(res.message);
    }
    this.spinner.hide();
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
}

}

