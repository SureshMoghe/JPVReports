import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
  selector: 'app-dccb-non-survyedcount',
  templateUrl: './dccb-non-survyedcount.component.html',
  styleUrls: ['./dccb-non-survyedcount.component.css']
})
export class DccbNonSurvyedcountComponent implements OnInit, OnDestroy, AfterViewInit { 

  mandalId:any;mandalName:any;rbkid:any;rbkName:any;
  distmanrbk:any;
  input: any;
  districtId: any;
  districtName: any;  
  fromDate: any;
  toDate: any; 
  excelData = [];
  // @Input() 
  // @Input() 
  // @Output() onRouteChange = new EventEmitter<string>(); 

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  routeListDetails = [];
  reportTotals = {
    S_NO: '-',
    DISTRICT: 'TOTAL',
    TOTAL_MANDALS: 0,
    TOTAL_ROUTE_NOS: 0,
    TOTAL_RBK: 0,
    TOTAL_VILLAGE: 0,
    TOTAL_VOLUNTEERS: 0,
    TOTAL_VV_LOGEDIN: 0,
    TOTAL_FARMERS_WITH_OUT_AINM: 0,
    TOTAL_FARMERS_WITH_AINM: 0,
    TOTAL_APPROVED_FMR: 0,
    TOTAL_APPROVED_FMR_PERCNT: 0,
    TOTAL_ANIMALS: 0,
    AH_DEPT_VV_ANM_YES: 0,
    AH_DEPT_YES_VV_ANM_NO: 0,
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

 
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  
  

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
        TOTAL_MANDALS: 0,
        TOTAL_ROUTE_NOS: 0,
        TOTAL_RBK: 0,
        TOTAL_VILLAGE: 0,
        TOTAL_VOLUNTEERS: 0,
        TOTAL_VV_LOGEDIN: 0,
        TOTAL_FARMERS_WITH_OUT_AINM: 0,
        TOTAL_FARMERS_WITH_AINM: 0,
        TOTAL_APPROVED_FMR: 0,
        TOTAL_APPROVED_FMR_PERCNT: 0,
        TOTAL_ANIMALS: 0,
        AH_DEPT_VV_ANM_YES: 0,
        AH_DEPT_YES_VV_ANM_NO: 0,
      };
      const req = {
        type:'28',
        districtId: this.districtId,
        cnt1:this.mandalId,
        cnt2:this.rbkid,
        cnt3:'1',
        fromDate: this.fromDate,
        toDate: this.toDate,

      };
      this.routeListDetails = [];
      this.spinner.show();debugger;
      const res =  await this.stateapi.farmerWiseAbstractReportphase(req);
      if (res.success) {
        this.excelData = [];
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
          let singleRow = {
            S_NO: i + 1,

                  
            

            DISTRICT_NAME: this.routeListDetails[i].DISTRICT_NAME,
               MANDAL_NAME: this.routeListDetails[i].MANDAL_NAME,
               SEC_CODE: this.routeListDetails[i].SEC_CODE, 
               SEC_NAME: this.routeListDetails[i].SEC_NAME,
              //  VILLAGE_NAME: this.routeListDetails[i].VILLAGE_NAME,
               CLUSTER_ID: this.routeListDetails[i].CLUSTER_ID,
               BENEFICIARY_NAME: this.routeListDetails[i].BEN_NAME,
               AADHAAR_NO: this.routeListDetails[i].UID_NUM,
               BENEFICIARY_MOBILE_NO: this.routeListDetails[i].BEN_MOBILE_NO,   
               SCHEME_NAME: this.routeListDetails[i].SCHEME_NAME ,  
              //  ANIMAL_COUNT: this.routeListDetails[i].ANIMAL_COUNT,   
               VOLUNTEER_NAME: this.routeListDetails[i]. VOLUNTEER_NAME  ,               
               MOBILE_NO: this.routeListDetails[i]. MOBILE_NO ,   
              //  SURVEYED_DATE: this.routeListDetails[i]. SURVEYED_DATE ,   

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
      'Surveyed with animals count Report',
      true
    );
  }
  btnBack(): void {debugger;
   // this.router.navigate(['/state/CheyuthaStateReport']);
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
    if (this.rbkid != null && this.rbkid != '' && this.rbkid != undefined ) this.router.navigate(['/dccbLevel/CheyuthaMandalReport'], { queryParams: { request: result },});
    else if (this.mandalId != null && this.mandalId != '' && this.mandalId != undefined ) this.router.navigate(['/dccbLevel/CheyuthaDistrictReport'], { queryParams: { request: result },});
     else 
    this.router.navigate(['/dccbLevel/CheyuthaDistrictReport']); 

// const result = this.utils.encrypt(JSON.stringify(requestData));
// if( (this.mandalId != null && this.mandalId != '' && this.mandalId != undefined )&& this.rbkid === undefined ) this.router.navigate(['/state/cheyuthaRbkbymandalidReports'], { queryParams: { request: result },});
// else if(this.rbkid === undefined  && this.mandalId === undefined && this.districtId != undefined ) this.router.navigate(['/state/CheyuthaMandalReport'], { queryParams: { request: result },});
// else this.router.navigate(['/state/CheyuthaStateReport']); 
 


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

