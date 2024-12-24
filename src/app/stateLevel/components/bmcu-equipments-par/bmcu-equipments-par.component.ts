import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DataTableDirective } from "angular-datatables";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { LoggerService } from "src/app/shared/services/logger.service";
import { SessionService } from "src/app/shared/services/session.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UtilsService } from "src/app/shared/services/utils.service";
import { StateService } from "../../services/state.service";
import { FarmerRegService } from "src/app/farmerMpussReg/services/farmer-reg.service";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
    selector: 'app-bmcu-equipments-par',
    templateUrl: './bmcu-equipments-par.component.html',
    styleUrls: ['./bmcu-equipments-par.component.css']
})
export class BmcuEquipmentsPARComponent implements OnInit, OnDestroy, AfterViewInit {

    Districtlist: any[] = [];
    Districtid: any;
    ImgList: any[] = [];
    BMCUname: any;
    ImgesPopUp: boolean = false;
    buildingimgpath: any;
    RejectPopUp: boolean = false;
    Remarks: any;
    dataListReject: any;

    dashboardCounts = {
        PENDING: '0',
        APPROVED: '0',
        REJECTED: '0',
    };


    headingText = '';
    requestType = '';
    actionTakenValue: any;
    DataList: any[] = [];
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private state: StateService,
        private farmerAPI: FarmerRegService,
        private sanitizer: DomSanitizer




    ) { }

    ngOnInit(): void {
        if (this.session.uniqueId != "" && this.session.desigId != "") {
            this.loadDashboard(); 
        }
        else {
            this.router.navigate(['/shared/UnAuthorized']);
        }

    } 

    async loadDashboard(): Promise<void> {
        try {
            debugger;
            const req = {
                TYPE: "30",
            }

            this.spinner.show();
            const res = await this.state.TechnisianDetails_Select(req);
            this.spinner.hide();
            if (res.success) {
                this.dashboardCounts = res.result[0];
                // console.log(this.dashboardCounts);
            } else {
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async LoadDistricts(): Promise<void> {
        try {
            debugger;
            const req = {
                TYPE: "40",                
                INPUT02:this.requestType
            }

            this.spinner.show();
            const res = await this.state.TechnisianDistricts(req);
            this.spinner.hide();
            if (res.success) {
                this.Districtlist = res.result;
                // console.log(this.dashboardCounts);
            } else {
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async ViewEquipments(obj): Promise<void> {
        try {
            debugger;
            this.ImgList = [];
            const req = {
                TYPE: "36",
                DISTRICT: obj.BMCU_DISTRICT_CODE,
                INPUT01: obj.BMCU_MANDAL_CODE,
                INPUT02: obj.BMCU_BMCU_CODE
            }
            debugger;
            this.spinner.show();
            const response = await this.state.TechnisianDetails_Select(req);
            this.spinner.hide();
            if (response.success) {
                this.ImgList = response.result;
                this.ImgesPopUp = true;
                this.BMCUname = obj.BMCU_BMCU_NAME;
                this.buildingimgpath = response.result[0].BUILDING_IMAGE;


            }
            else {
                this.toast.info(response.message)
            }


        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async RejectDetails(obj): Promise<void> {
        this.RejectPopUp = true;
        this.dataListReject = obj;

    }

    async btnAnimalsDetailsUpdate(): Promise<void> {
        debugger;
        if (this.utils.isEmpty(this.Remarks)) {
            this.toast.warning('Please Enter Remarks');
            return;
        }
        else {
            const req = {
                type: "6",
                Shifted_Bmcucode: "9",
                input_02: this.session.userName,
                districtId: this.dataListReject.BMCU_DISTRICT_CODE,
                mandalId: this.dataListReject.BMCU_MANDAL_CODE,
                bmcuId: this.dataListReject.BMCU_BMCU_CODE,
                input_03: this.session.desigId,
                input_04: this.Remarks,
                bmculist: [{}]


            };
            this.spinner.show();
            const response = await this.state.BMCUDeviceDetailsIns(req);
            this.spinner.hide();
            if (response.success) {
                alert("Data Rejected Successfully");
                window.location.reload();
            } else {
                this.Remarks = '';
                this.toast.info("Data Rejected Failed !!");
            }
        }

    }

    async btnPhotoView(photo): Promise<void> {
        try {
            this.spinner.show();
            const res = await this.utils.DMSFileDownload(photo);
            if (res.success) {
                let devicesPhoto = (
                    this.sanitizer.bypassSecurityTrustResourceUrl(res.result) as any
                ).changingThisBreaksApplicationSecurity;
                this.utils.viewImage(devicesPhoto);
            } else {
                this.toast.info(res.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }



    async ApproveDetails(obj): Promise<void> {
        try {
            debugger;
            if (!confirm('Are you sure want to Approve Details?')) {
                return;
            }
            const req = {
                type: "6",
                Shifted_Bmcucode: "1",
                input_02: this.session.userName,
                districtId: obj.BMCU_DISTRICT_CODE,
                mandalId: obj.BMCU_MANDAL_CODE,
                bmcuId: obj.BMCU_BMCU_CODE,
                input_03: this.session.desigId,
                bmculist: [{}]


            };
            this.spinner.show();
            const response = await this.state.BMCUDeviceDetailsIns(req);
            this.spinner.hide();
            if (response.success) {
                alert("Data Approved Successfully");
                window.location.reload();
            } else {
                this.toast.info("Data Approved Failed !!");
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }



    async btnPdfView(pdf): Promise<void> {
        try {
            debugger;
            this.spinner.show();
            const res = await this.utils.jpvFileDownload(pdf);
            if (res.success) {
                this.utils.viewPDF(res.result);
                // let signedByPdf = 'data:application/pdf, ' + res.result;
                // window.open(signedByPdf, '_blank');
            } else {
                this.toast.info(res.message);
            }
            this.spinner.hide();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }



    async DistrictChanges(): Promise<void> {
        try {
            debugger;
            const req = {
                TYPE: "31",
                DISTRICT: this.Districtid,
                INPUT02: this.requestType

            };
            if (
                this.requestType === '0' &&
                this.dashboardCounts.PENDING === '0'
            ) {
                this.DataList = [];
                return;
            }
            if (
                this.requestType === '1' &&
                this.dashboardCounts.APPROVED === '0'
            ) {
                this.DataList = [];
                return;
            }
            if (
                this.requestType === '9' &&
                this.dashboardCounts.REJECTED === '0'
            ) {
                this.DataList = [];
                return;
            }
            debugger;
            this.spinner.show();
            let res: any;
            if (this.requestType === '0') {
                this.headingText = 'PENDING LIST';
                res = await this.state.TechnisianDetails_Select(req);
            } else if (this.requestType === '1') {
                this.headingText = 'APPROVED LIST';
                res = await this.state.TechnisianDetails_Select(req);
            } else if (this.requestType === '9') {
                this.headingText = 'REJECTED  LIST';
                res = await this.state.TechnisianDetails_Select(req);
            }
            this.spinner.hide();
            this.DataList = [];
            if (res.success) {
                debugger;
                this.DataList = res.result;
            } else {
                this.toast.info(res.message);
            }
            this.rerender();
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    async btnSocietyChangeDashboardDetails(obj): Promise<void> {
        try {
            debugger;
            this.Districtid = '0';
            this.requestType = obj;
            const req = {
                TYPE: "31",
                DISTRICT: this.Districtid,
                // INPUT01: this.Shifted,
                INPUT02: this.requestType

            };

            if (
                this.requestType === '0' &&
                this.dashboardCounts.PENDING === '0'
            ) {
                this.DataList = [];
                return;
            }
            if (
                this.requestType === '1' &&
                this.dashboardCounts.APPROVED === '0'
            ) {
                this.DataList = [];
                return;
            }

            if (
                this.requestType === '9' &&
                this.dashboardCounts.REJECTED === '0'
            ) {
                this.DataList = [];
                return;
            }
            debugger;

            this.spinner.show();
            let res: any;
            if (this.requestType === '0') {
                this.headingText = 'PENDING LIST';
                res = await this.state.TechnisianDetails_Select(req);
            } else if (this.requestType === '1') {
                this.headingText = 'APPROVED LIST';
                res = await this.state.TechnisianDetails_Select(req);
            } else if (this.requestType === '9') {
                this.headingText = 'REJECTED  LIST';
                res = await this.state.TechnisianDetails_Select(req);

            }
            this.spinner.hide();

            this.DataList = [];
            if (res.success) {
                debugger;
                this.DataList = res.result;
               // console.log(this.DataList);
                this.LoadDistricts();
            } else {
                this.toast.info(res.message);

            }
            this.rerender();
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

            dtInstance.clear();

            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }

}