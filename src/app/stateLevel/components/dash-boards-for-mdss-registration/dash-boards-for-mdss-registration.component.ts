import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from '../../services/state.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
@Component({
    selector: 'app-dash-boards-for-mdss-registration',
    templateUrl: './dash-boards-for-mdss-registration.component.html',
    styleUrls: ['./dash-boards-for-mdss-registration.component.css']
})
export class DashBoardsForMdssRegistrationComponent implements OnInit {

    MdssDashboardList: any;
    CommonList: any[] = [];
    CommonExcelData: any[] = [];

    MdssRegTotal = {
        S_NO: '-',
        DISTRICT: 'Total',
        NO_OF_ROUTES: 0,
        ELIGIBLE_RBKS: 0,
        SCHEDULED_RBKS: 0,
        MEETING_RBKS: 0,
        DOC_UPLOADED_RBKS: 0,
        SUBMITTED_RBKS: 0,
        REJECTED_RBKS: 0,
        PENDING_RBKS_DLCO: 0,
        PENDING_RBKS_DCO: 0,
        PENDING_RBKS_GM: 0,
        PENDING_RBKS_COMM: 0,
        REGISTERED_RBKS: 0
    };
    constructor(private utils: UtilsService,
        private stateAPI: StateService,
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private session: SessionService

    ) { }

    ngOnInit(): void {
        debugger;
        this.loadDashboardCounts();
    }

    async loadDashboardCounts(): Promise<void> {
        try {
            this.MdssDashboardList = [];
            const req = {
                type: "7"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCounts(req);
            if (res.success) {
                this.spinner.hide();
                this.MdssDashboardList = res.result[0];
                console.log(this.MdssDashboardList);
            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }

    }



    async TotalRBKS(): Promise<void> {
        this.router.navigate(['/state/TotalRBKsCount']);
    }

    async RegisteredMDSS(): Promise<void> {

        debugger;
        this.MdssRegTotal = {
            S_NO: '-',
            DISTRICT: 'Total',
            NO_OF_ROUTES: 0,
            ELIGIBLE_RBKS: 0,
            SCHEDULED_RBKS: 0,
            MEETING_RBKS: 0,
            DOC_UPLOADED_RBKS: 0,
            SUBMITTED_RBKS: 0,
            REJECTED_RBKS: 0,
            PENDING_RBKS_DLCO: 0,
            PENDING_RBKS_DCO: 0,
            PENDING_RBKS_GM: 0,
            PENDING_RBKS_COMM: 0,
            REGISTERED_RBKS: 0
        };
        const req = {
            TYPE: "1"
        };
        const res = await this.stateAPI.MSSReportGetDetails(req);
        if (res.success) {

            this.CommonExcelData = [];
            this.CommonList = res.result;
            this.spinner.hide();
            for (let i = 0; i < this.CommonList.length; i++) {
                // tslint:disable-next-line: radix
                this.MdssRegTotal.NO_OF_ROUTES += parseInt(
                    this.CommonList[i].NO_OF_ROUTES
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.ELIGIBLE_RBKS += parseFloat(
                    this.CommonList[i].ELIGIBLE_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.SCHEDULED_RBKS += parseFloat(
                    this.CommonList[i].SCHEDULED_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.MEETING_RBKS += parseFloat(
                    this.CommonList[i].MEETING_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.DOC_UPLOADED_RBKS += parseFloat(
                    this.CommonList[i].DOC_UPLOADED_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.SUBMITTED_RBKS += parseInt(
                    this.CommonList[i].SUBMITTED_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.REJECTED_RBKS += parseInt(
                    this.CommonList[i].REJECTED_RBKS
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.PENDING_RBKS_DLCO += parseFloat(
                    this.CommonList[i].PENDING_RBKS_DLCO
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.PENDING_RBKS_DCO += parseFloat(
                    this.CommonList[i].PENDING_RBKS_DCO
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.PENDING_RBKS_GM += parseInt(
                    this.CommonList[i].PENDING_RBKS_GM
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.PENDING_RBKS_COMM += parseInt(
                    this.CommonList[i].PENDING_RBKS_COMM
                );
                // tslint:disable-next-line: radix
                this.MdssRegTotal.REGISTERED_RBKS += parseInt(
                    this.CommonList[i].REGISTERED_RBKS
                );

                let singleRow = {
                    S_NO: i + 1,
                    DISTRICT: this.CommonList[i].DISTRICT,
                    NO_OF_ROUTES: this.CommonList[i].NO_OF_ROUTES,
                    ELIGIBLE_RBKS: this.CommonList[i].ELIGIBLE_RBKS,
                    SCHEDULED_RBKS: this.CommonList[i].SCHEDULED_RBKS,
                    MEETING_RBKS: this.CommonList[i].MEETING_RBKS,
                    DOC_UPLOADED_RBKS: this.CommonList[i].DOC_UPLOADED_RBKS,
                    SUBMITTED_RBKS: this.CommonList[i].SUBMITTED_RBKS,
                    REJECTED_RBKS: this.CommonList[i].REJECTED_RBKS,
                    PENDING_RBKS_DLCO: this.CommonList[i].PENDING_RBKS_DLCO,
                    PENDING_RBKS_DCO: this.CommonList[i].PENDING_RBKS_DCO,
                    PENDING_RBKS_GM: this.CommonList[i].PENDING_RBKS_GM,
                    PENDING_RBKS_COMM: this.CommonList[i].PENDING_RBKS_COMM,
                    REGISTERED_RBKS: this.CommonList[i].REGISTERED_RBKS,

                };
                this.CommonExcelData.push(singleRow);
            }
            this.CommonExcelData.push(this.MdssRegTotal);


            this.utils.JSONToCSVConvertor(
                this.CommonExcelData,
                'MDSS Registration Report ' + this.session.dpTodayDate,
                true
            );

        } else {
            this.toast.info(res.message);
            this.spinner.hide();
        }
        this.spinner.hide();
    }
    async PICCommitteAppointed(): Promise<void> {

        try {
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "122"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        MDSS_NAME: this.CommonList[i].MDSS_NAME,
                        DISTRICT_NAME: this.CommonList[i].DISTRICT_NAME,
                        REGISTRATION_NO: this.CommonList[i].REGISTRATION_NO,
                        REGISTRATION_DATE: this.CommonList[i].REGISTRATION_DATE,
                        PROCEEDINGS_RC_NO: this.CommonList[i].PROCEEDINGS_RC_NO,
                        PIC_TERM_EXPIRY_DATE: this.CommonList[i].PIC_TERM_EXPIRY_DATE,
                        TERM_EXTENTION_UPTO: this.CommonList[i].TERM_EXTENTION_UPTO,
                        NAME_OF_THE_RIC: this.CommonList[i].NAME_OF_THE_RIC,
                        DESIGNATION: this.CommonList[i].DESIGNATION,
                        ROUNTE_NOS: this.CommonList[i].ROUNTE_NOS,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    ' PIC Committee Appointed Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async PICcommitteeexpiring(): Promise<void> {
        // try {
        //     this.CommonList = [];
        //     this.CommonExcelData = [];
        //     const req = {
        //         type: "123"
        //     }
        //     this.spinner.show();
        //     debugger;
        //     const res = await this.stateAPI.MdssDashBoardsCounts(req);
        //     if (res.success) {
        //         this.CommonList = [];
        //         this.CommonExcelData = [];
        //         this.spinner.hide();
        //         this.CommonList = res.result;

        //         for (var i = 0; i < this.CommonList.length; i++) {
        //             let singleRow =
        //             {
        //                 S_NO: i + 1,
        //                 MDSS_NAME: this.CommonList[i].MDSS_NAME,
        //                 DISTRICT_NAME: this.CommonList[i].DISTRICT_NAME,
        //                 REGISTRATION_NO: this.CommonList[i].REGISTRATION_NO,
        //                 REGISTRATION_DATE: this.CommonList[i].REGISTRATION_DATE,
        //                 PROCEEDINGS_RC_NO: this.CommonList[i].PROCEEDINGS_RC_NO,
        //                 PIC_TERM_EXPIRY_DATE: this.CommonList[i].PIC_TERM_EXPIRY_DATE,
        //                 TERM_EXTENTION_UPTO: this.CommonList[i].TERM_EXTENTION_UPTO,
        //                 NAME_OF_THE_RIC: this.CommonList[i].NAME_OF_THE_RIC,
        //                 DESIGNATION: this.CommonList[i].DESIGNATION,
        //                 ROUNTE_NOS: this.CommonList[i].ROUNTE_NOS,

        //             }
        //             this.CommonExcelData.push(singleRow);
        //         }

        //         this.utils.JSONToCSVConvertor(
        //             this.CommonExcelData,
        //             ' PIC Committee Expiring Report ' + this.session.dpTodayDate,
        //             true
        //         );

        //     }
        //     else {
        //         this.spinner.hide();
        //         this.toast.info(res.message);
        //     }

        // } catch (error) {
        //     this.spinner.hide();
        //     this.utils.catchResponse(error);
        // }
    }

    EligibleMDSS(): void {
        this.router.navigate(['/state/EligibleMDSSCount']);
    }
    async MeetingsInitiatedMDSS(): Promise<void> {

        try {
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "104"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        DATE_OF_MEETING_: this.CommonList[i].MEETING_DATE,
                        LAST_MEETING_DATE: this.CommonList[i].LAST_MEETING_DATE,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Meetings Initiated Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }


    }
    async MeetingNotInitiatedMDSS(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "105"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Meetings  Not Initiated Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }



    async AttendanceSubmitted(): Promise<void> {
        this.router.navigate(['/state/AttendanceSubmittedCount']);
    }
    async AttendanceNotSubmitted(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "102"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCounts(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,
                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Attendence  Not Submitted Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async PromotersAdded(): Promise<void> {
        this.router.navigate(['/state/PromoterAddedCount']);
    }
    async PromotersNotAdded(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "107"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCounts(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,


                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Promoters Not Added Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }

    }

    async Documentsuploaded(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "108"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCounts(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Documents Uploaded Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async DocumentsNotuploaded(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "109"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,


                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Documents Not Uploaded Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }


    }


    async ApplicationsSubmitted(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "110"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;
                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Application Submitted Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    async ApplicationsNotSubmitted(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "111"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Application Not Submitted Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    async RollBackRbks(): Promise<void> {

        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "112"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Roll Back RBKs Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async ReSubmitted(): Promise<void> {

        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "119"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Re-Submitted Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async Pending(): Promise<void> {

        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "120"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGetData(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;

                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,
                        RIC_NAME: this.CommonList[i].RIC_NAME,
                        RIC_MOBILE: this.CommonList[i].RIC_MOB,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Pending Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }


    async PendingMDSSDLCO(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "113"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsCountsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;
                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Pending MDSS DLCO Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    async PendingMDSSDCO(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "114"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;
                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Pending MDSS DCO Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async PendingMDSSARGM(): Promise<void> {
        try {
            debugger;
            this.CommonList = [];
            this.CommonExcelData = [];
            const req = {
                type: "115"
            }
            this.spinner.show();
            debugger;
            const res = await this.stateAPI.MdssDashBoardsGet(req);
            if (res.success) {
                this.CommonList = [];
                this.CommonExcelData = [];
                this.spinner.hide();
                this.CommonList = res.result;
                for (var i = 0; i < this.CommonList.length; i++) {
                    let singleRow =
                    {
                        S_NO: i + 1,
                        DISTRICT: this.CommonList[i].DISTRICT,
                        DIVISION: this.CommonList[i].DIVISION_NAME,
                        MANDAL: this.CommonList[i].MANDAL_NAME,
                        NAME_OF_RBK: this.CommonList[i].RBK_NAME,
                        RBK_CODE: this.CommonList[i].RBK_CODE,

                    }
                    this.CommonExcelData.push(singleRow);
                }

                this.utils.JSONToCSVConvertor(
                    this.CommonExcelData,
                    'Pending AR/GM MDSS Report ' + this.session.dpTodayDate,
                    true
                );

            }
            else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }


    async PendingMDSSCommissioner(): Promise<void> {
        //     try {
        //         debugger;
        //         this.CommonList = [];
        //         this.CommonExcelData = [];
        //         const req = {
        //             type: "115"
        //         }
        //         this.spinner.show();
        //         debugger;
        //         const res = await this.stateAPI.MdssDashBoardsCounts(req);
        //         if (res.success) {
        //             this.CommonList = [];
        //             this.CommonExcelData = [];
        //             this.spinner.hide();
        //             this.CommonList = res.result;


        //         }
        //         else {
        //             this.spinner.hide();
        //             this.toast.info(res.message);
        //         }

        //     } catch (error) {
        //         this.spinner.hide();
        //         this.utils.catchResponse(error);
        //     }
    }
}



