import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    accessToken: any;
    lastLoginTime: any;
    userName: any;
    desigId: any;
    desigName: any;
    mobileNumber: any;
    mentorId: any;
    mentorName: any;
    districtId: any;
    districtName: any;
    mandalId: any;
    mandalName: any;
    rbkId: any;
    rbkName: any;
    bankName: any;
    villageId: any;
    villageName: any;
    fromDate = '10-11-2020';
    dpFromDate = new Date(2020, 10, 10);
    dpToDate = new Date();
    splLoginReports: any;
    uniqueId: any;
    dpTodayDate = new Date();
    passwordUpdate: any;
    rbkGroupId: any;
    ifscCode: any;
    ruralUrbanFlag: any;
    societyId: any;
    divisionId: any;
    RPTDISTID: any;
    RPTDIST: any;
    RPTRBKID: any;
    RPTSTATUS: any;
    phaseid: any;
    phasename: any;
    datetimeReport: any;
    dashboarddistrictid: any;
    tooltipname: any;
    masterId: any;
    JobRole: any;
    EmailId: any;
    Date: any;
    constructor() {
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userName = sessionStorage.getItem('userName');
        this.lastLoginTime = sessionStorage.getItem('lastLoginTime');
        this.desigId = sessionStorage.getItem('desigId');
        this.desigName = sessionStorage.getItem('desigName');
        this.mobileNumber = sessionStorage.getItem('mobileNumber');
        this.mentorId = sessionStorage.getItem('mentorId');
        this.mentorName = sessionStorage.getItem('mentorName');
        this.districtId = sessionStorage.getItem('districtId');
        this.districtName = sessionStorage.getItem('districtName');
        this.mandalId = sessionStorage.getItem('mandalId');
        this.mandalName = sessionStorage.getItem('mandalName');
        this.bankName = sessionStorage.getItem('bankName');
        this.rbkId = sessionStorage.getItem('rbkId');
        this.rbkName = sessionStorage.getItem('rbkName');
        this.villageId = sessionStorage.getItem('villageId');
        this.villageName = sessionStorage.getItem('villageName');
        this.splLoginReports = sessionStorage.getItem('splLoginReports');
        this.uniqueId = sessionStorage.getItem('uniqueId');
        this.rbkGroupId = sessionStorage.getItem('rbkGroupId');
        this.ifscCode = sessionStorage.getItem('ifscCode');
        this.ruralUrbanFlag = sessionStorage.getItem('ruralUrbanFlag');
        this.societyId = sessionStorage.getItem('societyId');
        this.divisionId = sessionStorage.getItem('divisionId');
        this.masterId = sessionStorage.getItem('masterId');
        this.JobRole = sessionStorage.getItem('JobRole');
        this.EmailId = sessionStorage.getItem('EmailId');
    }
    getDOBMaxDate(): Date {
        return this.dpTodayDate;
    }

    getDOBMinDate(): any {
        return '';
    }
    clearSession(): void {
        this.accessToken = '';
        this.userName = '';
        this.lastLoginTime = '';
        this.desigId = '';
        this.desigName = '';
        this.mobileNumber = '';
        this.rbkGroupId = '';
        this.districtId = '';
        this.districtName = '';
        this.mandalId = '';
        this.mandalName = '';

        this.ifscCode = '';
        this.bankName = '';

        this.rbkName = '';
        this.rbkId = '';
        this.ruralUrbanFlag = '';

        this.uniqueId = '';
        this.passwordUpdate = '';
        this.villageId = '';
        this.villageName = '';
        this.societyId = '';
        this.divisionId = '';
        this.phaseid = '';
        this.phasename = '';
        this.dashboarddistrictid = '';
        this.masterId = '';
        this.JobRole = '';
        this.EmailId = '';
    }


    getFromDate(): Date {
        return this.dpFromDate;
    }

    getToDate(): Date {
        return this.dpToDate;
    }

    getFromDateString(): string {
        return this.fromDate;
    }

    getTodayDateString(): string {
        const date = this.dpToDate;

        let day = '';
        const tempDay = date.getDate().toString();
        if (tempDay.length === 1) {
            day = '0' + tempDay;
        } else {
            day = tempDay;
        }

        let month = '';
        const tempMonth = (date.getMonth() + 1).toString();
        if (tempMonth.length === 1) {
            month = '0' + tempMonth;
        } else {
            month = tempMonth;
        }

        return day + '-' + month + '-' + date.getFullYear().toString();
    }

    getyearstartingString(): string {
        const date = this.dpToDate;
        // debugger;
        //     let day = '';
        //     const tempDay = date.getDate().toString();
        //     if (tempDay.length === 1) {
        //       day = '0' + tempDay;
        //     } else {
        //       day = tempDay;
        //     }

        //     let month = '';
        //     const tempMonth = (date.getMonth() + 1).toString();
        //     if (tempMonth.length === 1) {
        //       month = '0' + tempMonth;
        //     } else {
        //       month = tempMonth;
        //     }
        // return day + '-' + month + '-' + date.getFullYear().toString();
        return '01-01-' + date.getFullYear().toString();
    }

    getCurrentMonth(): string {
        const date = this.dpTodayDate;
        let month = '';
        const tempMonth = (date.getMonth() + 1).toString();
        if (tempMonth.length === 1) {
            month = '0' + tempMonth;
        } else {
            month = tempMonth;
        }

        return '01-' + month + '-' + date.getFullYear().toString();
    }
    getdatetimeReport(): string {
        debugger;
        const date = this.dpToDate;

        let day = '';
        const tempDay = date.getDate().toString();
        if (tempDay.length === 1) {
            day = '0' + tempDay;
        } else {
            day = tempDay;
        }

        let month = '';
        const tempMonth = (date.getMonth() + 1).toString();
        if (tempMonth.length === 1) {
            month = '0' + tempMonth;
        } else {
            month = tempMonth;
        }

        return day + '_' + month + '_' + date.getFullYear().toString() + '_' + this.getToDate().getHours() + '_' + this.getToDate().getMinutes() + '_' + this.getToDate().getSeconds();
        // this.datetimeReport='('+(this.getTodayDateString().replace('-','_')).toString().replace('-','_')+"_"+this.session.getToDate().getHours()+"_"+this.session.getToDate().getMinutes()+"_"+this.session.getToDate().getSeconds() +")";
        //return this.datetimeReport;  
    }


    getdatetimepageheadingReport(): string {
        debugger;
        const date = this.dpToDate;

        let day = '';
        const tempDay = date.getDate().toString();
        if (tempDay.length === 1) {
            day = '0' + tempDay;
        } else {
            day = tempDay;
        }

        let month = '';
        const tempMonth = (date.getMonth() + 1).toString();
        if (tempMonth.length === 1) {
            month = '0' + tempMonth;
        } else {
            month = tempMonth;
        }
        // day + '-' + month + '-' + date.getFullYear().toString()
        return + this.getToDate().getHours() + ':' + this.getToDate().getMinutes() + ':' + this.getToDate().getSeconds();
        // this.datetimeReport='('+(this.getTodayDateString().replace('-','_')).toString().replace('-','_')+"_"+this.session.getToDate().getHours()+"_"+this.session.getToDate().getMinutes()+"_"+this.session.getToDate().getSeconds() +")";
        //return this.datetimeReport;  
    }


    getdatetimepageheadingReportCumulative(): string {
        debugger;
        const date = this.dpToDate;

        let day = '';
        const tempDay = date.getDate().toString();
        if (tempDay.length === 1) {
            day = '0' + tempDay;
        } else {
            day = tempDay;
        }

        let month = '';
        const tempMonth = (date.getMonth() + 1).toString();
        if (tempMonth.length === 1) {
            month = '0' + tempMonth;
        } else {
            month = tempMonth;
        }

        return day + '-' + month + '-' + date.getFullYear().toString() + ' ' + this.getToDate().getHours() + ':' + this.getToDate().getMinutes() + ':' + this.getToDate().getSeconds();
        // this.datetimeReport='('+(this.getTodayDateString().replace('-','')).toString().replace('-','')+""+this.session.getToDate().getHours()+""+this.session.getToDate().getMinutes()+"_"+this.session.getToDate().getSeconds() +")";
        //return this.datetimeReport;  
    }

    getTodayDate(): Date {
        return this.dpTodayDate;
      }

      getCurrentYear() {
        const date = this.dpTodayDate;
    
        let year: number = date.getFullYear();
        return year;
    }


}
