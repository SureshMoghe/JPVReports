import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables'; 
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { NgxSpinnerService } from 'ngx-spinner'; 

@Component({
  selector: 'app-statecheyuthavillagecount',
  templateUrl: './statecheyuthavillagecount.component.html',
  styleUrls: ['./statecheyuthavillagecount.component.css']
})
export class StatecheyuthavillagecountComponent implements OnInit {
  input: any;distmanrbk:any;
  districtId: any;
  districtName: any; 
  fromDate: any;
  toDate: any; 
  excelData = [];
  mandalId:any;mandalName:any;rbkid:any;rbkName:any;
  // @Input() 
  // @Input() 
  // @Output() onRouteChange = new EventEmitter<string>(); 


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();


   
  routeListDetails = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    tt_REG_FARMERS :0,
    tt_MILK_POURING_FARMERS:0,
    tt_COW_MILK_LTR:0,
    tt_COW_MILK_AMOUNT:0,
    tt_BUFFALO_MILK_LTR:0,
    tt_BUFFALO_MILK_AMOUNT:0,
    tt_MILK_LTR:0,
    tt_MILK_AMOUNT:0,
  };

  constructor( private utils: UtilsService, 
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    private stateapi:StateService,
    ) { 
    route.queryParams.subscribe((params) => (this.input = params['request']));

  } 
  ngOnInit(): void { debugger;
    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
    this.mandalId = decString.mandalId;
    this.mandalName = decString.mandalName;
     this.rbkid = decString.rbkId;
       this.rbkName = decString.rbkName;
    this.fromDate = decString.fromDate;
    this.toDate = decString.toDate;
  
    if (this.districtId != null && this.districtId != '' && this.districtId != undefined ) this.distmanrbk='District :'+ this.districtName;
    if (this.mandalId != null && this.mandalId != '' && this.mandalId != undefined ) this.distmanrbk=this.distmanrbk+', Mandal Name :'+ this.mandalName;
    if (this.rbkid != null && this.rbkid != '' && this.rbkid != undefined ) this.distmanrbk=this.distmanrbk+ ', Rbk :'+ this.rbkName;


    if (
      this.districtId === null &&
      this.districtId === '' &&
      this.districtId === undefined
    ) {
      return;
    }
    this.loadReport();
  }

  async loadReport(): Promise<void> {
    try {
      this.reportTotals = {
        S_NO: '-',
    DISTRICT: 'TOTAL',
    tt_REG_FARMERS :0,
    tt_MILK_POURING_FARMERS:0,
    tt_COW_MILK_LTR:0,
    tt_COW_MILK_AMOUNT:0,
    tt_BUFFALO_MILK_LTR:0,
    tt_BUFFALO_MILK_AMOUNT:0,
    tt_MILK_LTR:0,
    tt_MILK_AMOUNT:0,
      };
      const req = {
        type:'21',
        districtId: this.districtId,
        cnt1:this.mandalId,
        cnt2:this.rbkid,
        fromDate: this.fromDate,
        toDate: this.toDate,
      };
      this.routeListDetails = [];
      this.spinner.show();debugger;
      const res =  await this.stateapi.farmerWiseAbstractReportphase(req);
      if (res.success) {
        this.excelData = []; debugger;
        this.routeListDetails = res.result;
         for (let i = 0; i < this.routeListDetails.length; i++) {
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_RBK += parseInt(
        //     this.routeListDetails[i].TOTAL_RBK
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_VILLAGE += parseInt(
        //     this.routeListDetails[i].TOTAL_VILLAGE
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_VOLUNTEERS += parseInt(
        //     this.routeListDetails[i].TOTAL_VOLUNTEERS
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_VV_LOGEDIN += parseInt(
        //     this.routeListDetails[i].TOTAL_VV_LOGEDIN
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_FARMERS_WITH_OUT_AINM += parseInt(
        //     this.routeListDetails[i].TOTAL_FARMERS_WITH_OUT_AINM
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_FARMERS_WITH_AINM += parseInt(
        //     this.routeListDetails[i].TOTAL_FARMERS_WITH_AINM
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_APPROVED_FMR += parseInt(
        //     this.routeListDetails[i].TOTAL_APPROVED_FMR
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_APPROVED_FMR_PERCNT += parseFloat(
        //     this.routeListDetails[i].TOTAL_APPROVED_FMR_PERCNT
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.TOTAL_ANIMALS += parseInt(
        //     this.routeListDetails[i].TOTAL_ANIMALS
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.AH_DEPT_VV_ANM_YES += parseInt(
        //     this.routeListDetails[i].AH_DEPT_VV_ANM_YES
        //   );
        //   // tslint:disable-next-line: radix
        //   this.reportTotals.AH_DEPT_YES_VV_ANM_NO += parseInt(
        //     this.routeListDetails[i].AH_DEPT_YES_VV_ANM_NO
        //   );

        this.reportTotals.tt_REG_FARMERS += parseFloat(this.routeListDetails[i].TOTAL_REG_FARMERS);
        this.reportTotals.tt_MILK_POURING_FARMERS += parseFloat(this.routeListDetails[i].TOTAL_MILK_POURING_FARMERS);
        this.reportTotals.tt_COW_MILK_LTR += parseFloat(this.routeListDetails[i].TOTAL_COW_MILK_LTR);
        this.reportTotals.tt_COW_MILK_AMOUNT += parseFloat(this.routeListDetails[i].TOTAL_COW_MILK_AMOUNT);
        this.reportTotals.tt_BUFFALO_MILK_LTR += parseFloat(this.routeListDetails[i].TOTAL_BUFFALO_MILK_LTR);
        this.reportTotals.tt_BUFFALO_MILK_AMOUNT += parseFloat(this.routeListDetails[i].TOTAL_BUFFALO_MILK_AMOUNT); 
        this.reportTotals.tt_MILK_LTR += parseFloat(this.routeListDetails[i].TOTAL_MILK_LTR);
        this.reportTotals.tt_MILK_AMOUNT += parseFloat(this.routeListDetails[i].TOTAL_MILK_AMOUNT); 

          let singleRow = {
            S_NO: i + 1,
            	 	
              DIST_CODE: this.routeListDetails[i].DIST_CODE,
            DISTRICTNAME: this.routeListDetails[i].DISTRICT, 
            MANDAL_CODE	: this.routeListDetails[i].MANDAL_CODE,
            MANDAL_NAME	: this.routeListDetails[i].MANDAL_NAME,
            RBK_CODE	: this.routeListDetails[i].RBK_CODE,
            RBK_NAME	: this.routeListDetails[i].RBK_NAME,
            VILLAGE_CODE	: this.routeListDetails[i].VILLAGE_CODE,
            VILLAGE_NAME	: this.routeListDetails[i].VILLAGE_NAME,
            TOTAL_REG_FARMERS	: this.routeListDetails[i].TOTAL_REG_FARMERS,
            TOTAL_MILK_POURING_FARMERS	: this.routeListDetails[i].TOTAL_MILK_POURING_FARMERS,
            TOTAL_COW_MILK_LTR	: this.routeListDetails[i].TOTAL_COW_MILK_LTR,
            TOTAL_COW_MILK_AMOUNT	: this.routeListDetails[i].TOTAL_COW_MILK_AMOUNT,
            TOTAL_BUFFALO_MILK_LTR	: this.routeListDetails[i].TOTAL_BUFFALO_MILK_LTR,
            TOTAL_BUFFALO_MILK_AMOUNT: this.routeListDetails[i].TOTAL_BUFFALO_MILK_AMOUNT,
            	TOTAL_MILK_LTR	: this.routeListDetails[i].TOTAL_MILK_LTR,
              TOTAL_MILK_AMOUNT: this.routeListDetails[i].TOTAL_MILK_AMOUNT,            
             
          };
           this.excelData.push(singleRow);
          }
        // this.reportTotals.TOTAL_APPROVED_FMR_PERCNT =
        //   this.reportTotals.TOTAL_APPROVED_FMR_PERCNT /
        //   this.routeListDetails.length;
        // this.reportTotals.TOTAL_APPROVED_FMR_PERCNT = parseFloat(
        //   this.reportTotals.TOTAL_APPROVED_FMR_PERCNT.toFixed(2)
        // );
        // this.excelData.push(this.reportTotals);
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
      'Volunteer Farmer Data RouteWise Level Report',
      true
    );
  }
  btnBack(): void { 
debugger;
    const requestData = {
            districtId: this.districtId,
            districtName: this.districtName,
            mandalId :this.mandalId,
            mandalName : this.mandalName,
            rbkid :this.rbkid,
            rbkName : this.rbkName,
            fromDate: this.fromDate,
            toDate: this.toDate,
    };

    const result = this.utils.encrypt(JSON.stringify(requestData));
    if (this.rbkid != null && this.rbkid != '' && this.rbkid != undefined ) this.router.navigate(['/state/cheyuthaRbkbymandalidReports'], { queryParams: { request: result },});
    else if (this.mandalId != null && this.mandalId != '' && this.mandalId != undefined ) this.router.navigate(['/state/CheyuthaMandalReport'], { queryParams: { request: result },});
     else this.router.navigate(['/state/CheyuthaStateReport']); 
 
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
}
