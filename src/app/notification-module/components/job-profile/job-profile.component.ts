import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePickerService } from 'src/app/shared/services/date-picker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-job-profile',
    templateUrl: './job-profile.component.html',
    styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {


    obj = {
        ToDateFarmate: ''
    }
    arrayList: any = [];
    DateOfBirth: any;
    isChecked: any;
    NotWorking: any;
    CurrentlyWorking: any;
    experTotal: any[] = [];
    employeeStatus: any;
    isModalVisible = false;
    receivedObject: any;
    DistList: any[] = [];
    StateList: any[] = [];
    DataList: any[] = [];
    DistListCurrent: any[] = [];
    MasterId: any;
    DistData: any[] = [];
    DistDataSecond: any[] = [];
    DistDataExper: any[] = [];
    fresherSave: boolean = true;
    ExperienceDaetailSave: boolean = false;
    addbutton: boolean = true;
    showaprovedPopup: boolean = false;
    showPopup: boolean = false;
    ToDateDisabled: boolean = true;
    ToDateDisabledOTP: boolean = true;
    countdown: any;
    timer: any;
    isNotCheck: boolean = true;
    isCheck: boolean = false;
    documentobj = {

        UploadDocuments: '',
        GDUploadDocuments: '',
        SUploadDocuments: '',
        IUploadDocuments: '',
        CvUploadFresher: '',
        CvUpload: '',
        ExperienceLatter: ''

    }
    isPersonalDetailsSub: boolean = true;
    isPersonalDetailsUpadte: boolean = false;
    isQualificationDetailsUpdate: boolean = false;
    isQualificationDetailsSub: boolean = true;
    fresherUpadte: boolean = false;
    ExperienceDaetailUpadte: boolean = false;
    minDate: Date;
    maxDate: any;
    DOBFarmate: any;
    FromDateFormate: any;
    ToDateFarmate: any;

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private mcuAPI: StateService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private datePicker: DatePickerService,
        private route: ActivatedRoute,

    ) {

    }
    ngOnInit() {
        this.LoadDataSecond();
        this.LoadDataThird();
        this.LoadData();
        this.LoadState();
        this.session.masterId = sessionStorage.getItem('masterId');

        this.arrayList.push(this.obj)



    }




    addSameAddress(obj) {
        debugger;
        if (this.isChecked) {
            obj.D_NO_STREET_NAME_CR = ''
            obj.VILLAGE_AREA_CR = ''
            obj.CITY_OR_MANDAL_CR = ''
            obj.DISTRICT_CR = ''
            obj.STATE_CR = ''
            obj.PINCODE_CR = ''
        }
        else {

            obj.D_NO_STREET_NAME_CR = obj.ADRESS
            obj.VILLAGE_AREA_CR = obj.VILLAGE_AREA_PR
            obj.CITY_OR_MANDAL_CR = obj.CITY_OR_MANDAL_PR
            obj.DISTRICT_CR = obj.DISTRICT_PR
            obj.STATE_CR = obj.STATE_PR
            obj.PINCODE_CR = obj.PINCODE_PR



        }

    }


    async LoadDist(obj: any): Promise<void> {
        debugger
        try {
            const req = {
                TYPE: "19",
                STATE_PR: obj
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistList = res.result;


            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadDistCurrent(obj: any): Promise<void> {
        debugger
        try {
            const req = {
                TYPE: "19",
                STATE_PR: obj
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistListCurrent = res.result;

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadState(): Promise<void> {
        try {
            const req = {
                TYPE: "20"
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            if (res.success) {
                this.spinner.hide();
                this.StateList = res.result;

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadData(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "8",
                MASTER_ID: this.session.masterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistData = res.result;
            } else {
                this.spinner.hide();
                // this.toast.info(res.message);

            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadDataThird(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "28",
                MASTER_ID: this.session.masterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistDataExper = res.result

            } else {
                this.spinner.hide();
                // this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadDataSecond(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "7",
                MASTER_ID: this.session.masterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistDataSecond = res.result;
                console.log(this.DistDataSecond);
                this.callLoadDistForAllItems();
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    formatDateONE(dateString: string, obj: any) {
        debugger;
        const dobDate = new Date(dateString);
        const day = dobDate.getDate().toString().padStart(2, '0');
        const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = dobDate.getFullYear();

        obj.DATE_OF_BIRTH_SCC = `${day}-${month}-${year}`;

    }
    callLoadDistForAllItems() {
        debugger;
        this.DistDataSecond.forEach((obj) => {
            if (obj.STATE_PR) {
                this.LoadDist(obj.STATE_PR);
            }
        });
        this.DistDataSecond.forEach((obj) => {
            if (obj.STATE_CR) {
                this.LoadDistCurrent(obj.STATE_CR);
            }
        });

        // this.DistDataSecond.forEach((obj) => {
        //     if (obj) {
        //         this.formatDate(obj);
        //     }
        // });

    }







    //Upload documents
    async PGUploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                this.documentobj.UploadDocuments = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }

    async GDUploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );

                this.documentobj.GDUploadDocuments = file

            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }
    async IUploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                this.documentobj.IUploadDocuments = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }
    async SUploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                this.documentobj.SUploadDocuments = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }


    async ExperienceLatterUploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                event.UPLOAD_DCNTS__GRDN_PG = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }
    async CvUploadFresherDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                this.documentobj.CvUploadFresher = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }

    async UploadDocumentsChange(event): Promise<void> {
        try {
            debugger
            const res = await this.utils.encodedString(
                event,
                this.utils.fileType.PDF,
                this.utils.fileSize.oneMB
            );
            if (res) {
                const file = res.replace(
                    'data:application/pdf;base64,',
                    ''
                );
                this.documentobj.CvUpload = file
            }
        } catch (error) {
            this.utils.catchResponse(error);
        }
    }

    ValidationTwo(ob): boolean {
        const isValue = false;
        if (this.utils.isEmpty(ob.PHD)) {
            this.toast.warning('Please Select PhD');
            return false;
        }
        if (this.utils.isEmpty(ob.POST_GRADUATION)) {
            this.toast.warning('Please Select Post Graduation');
            return false;
        }
        if (ob.POST_GRADUATION == "Yes") {
            if (this.utils.isEmpty(ob.COURSE_GRDN_PG)) {
                this.toast.warning('Please Enter Post Graduation Course');
                return false;
            }
            if (this.utils.isEmpty(ob.BRANCH_SPECIALIZATION_PG)) {
                this.toast.warning('Please Enter Post Graduation Branch/Specialization');
                return false;
            }
            if (this.utils.isEmpty(ob.COLLEGE_PG)) {
                this.toast.warning('Please Enter Post Graduation College');
                return false;
            }
            if (this.utils.isEmpty(ob.YEAR_OF_PASSEDOUT_PG)) {
                this.toast.warning('Please Enter Post Graduation Year Of Passout');
                return false;
            }
            if (this.utils.isEmpty(ob.MARKS_GRADE__GRDN_PG)) {
                this.toast.warning('Please Enter Post Graduation Marks/Grade');
                return false;
            }
            if (parseFloat(ob.MARKS_GRADE__GRDN_PG) > 100) {
                this.toast.warning('Please Enter Post Graduation Marks/Grade Below 100%');
                return false;
            }
            if (this.utils.isEmpty(ob.UPLOAD_DCNTS__GRDN_PG)) {
                this.toast.warning('Please select Post Graduation Upload Documents');
                return false;
            }

        }
        if (isValue) {

        }
        if (this.utils.isEmpty(ob.COURSE_GRDN_DEGREE)) {
            this.toast.warning('Please Enter Graduation/Degre Course');
            return false;
        }
        if (this.utils.isEmpty(ob.BRANCH_SPECIALIZATION)) {
            this.toast.warning('Please Enter Graduation/Degree Branch/Specialization');
            return false;
        }
        if (this.utils.isEmpty(ob.COLLEGE__GRDN_DEGREE)) {
            this.toast.warning('Please Enter Graduation/Degre College');
            return false;
        }
        if (this.utils.isEmpty(ob.YEAR_OF_PASSEDOUT_GRDN_DEGREE)) {
            this.toast.warning('Please Enter Graduation/Degre Year Of Passout');
            return false;
        }
        if (this.utils.isEmpty(ob.MARKS_GRADE__GRDN_DEGREE)) {
            this.toast.warning('Please Enter Graduation/Degre Marks/Grade');
            return false;
        }
        if (parseFloat(ob.MARKS_GRADE__GRDN_DEGREE) > 100) {
            this.toast.warning('Please Enter Graduation/Degre Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(ob.UPLOAD_DCNTS__GRDN_DEGREE)) {
            this.toast.warning('Please select Graduation/Degre Upload Documents');
            return false;
        }

        if (this.utils.isEmpty(ob.COURSE_INTER_DIPL)) {
            this.toast.warning('Please Enter Inter/Diploma Course');
            return false;
        }
        if (this.utils.isEmpty(ob.COLLEGE_DIPL)) {
            this.toast.warning('Please Enter Inter/Diploma College');
            return false;
        }
        if (this.utils.isEmpty(ob.YEAR_OF_PASSEDOUT_DIPL)) {
            this.toast.warning('Please Enter Inter/Diploma Year Of Passout');
            return false;
        }
        if (this.utils.isEmpty(ob.MARKS_GRADE_DIPL)) {
            this.toast.warning('Please Enter Inter/Diploma Marks/Grade');
            return false;
        }
        if (parseFloat(ob.MARKS_GRADE_DIPL) > 100) {
            this.toast.warning('Please Enter Inter/Diploma Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(ob.UPLOAD_DCNTS_DIPL)) {
            this.toast.warning('Please select Inter/Diploma Upload Documents');
            return false;
        }
        if (this.utils.isEmpty(ob.CBSE_STATE_SYLLABUS)) {
            this.toast.warning('Please Enter SSC CBSE/State Syllabus');
            return false;
        }
        if (this.utils.isEmpty(ob.SCHOOL)) {
            this.toast.warning('Please Enter SSC School');
            return false;
        }
        if (this.utils.isEmpty(ob.YEAR_OF_PASSEDOUT_SSC)) {
            this.toast.warning('Please Enter SSC Year Of Passout');
            return false;
        }
        if (this.utils.isEmpty(ob.MARKS_GRADE_SSC)) {
            this.toast.warning('Please Enter SSC Marks/Grade');
            return false;
        }
        if (parseFloat(ob.MARKS_GRADE_SSC) > 100) {
            this.toast.warning('Please Enter SSC Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(ob.UPLOAD_DCNTS_SSC)) {
            this.toast.warning('Please select SSC Upload Documents');
            return false;
        }
        return true;
    }

    Validation(obj: any): boolean {

        const isValue = false;
        if (this.utils.isEmpty(obj.FIRST_NAME)) {
            this.toast.warning('Please Enter First Name');
            return false;
        }
        if (this.utils.isEmpty(obj.LAST_NAME)) {
            this.toast.warning('Please Enter Last Name');
            return false;
        }
        if (this.utils.isEmpty(obj.DATE_OF_BIRTH_SCC)) {
            this.toast.warning('Please Select Date Of Birth');
            return false;
        }
        if (
            this.DateOfBirth != '' &&
            this.DateOfBirth != null &&
            this.DateOfBirth != undefined
        ) {
            const sel_date = new Date(this.DateOfBirth);

            const showAge = Math.floor(Math.abs(Date.now() - sel_date.getTime()) / (1000 * 3600 * 24) / 365);
            var ageblow = 18;
            debugger;
            if (showAge < ageblow) {
                this.toast.warning('Not Eligible for below 18 Years');

                this.DateOfBirth = ''
                return false;
            }


        }
        if (isValue) {

        }
        if (this.utils.isEmpty(obj.EMAIL_ID)) {
            this.toast.warning('Please Enter Email ID');
            return false;
        }
        if (
            obj.EMAIL_ID != '' &&
            obj.EMAIL_ID != null &&
            obj.EMAIL_ID != undefined
        ) {
            let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if (regex.test(obj.EMAIL_ID.toUpperCase()) == false) {
                this.toast.warning('Please Enter Valid Email');
                return false;
            }
        }
        if (isValue) {

        }
        if (this.utils.isEmpty(obj.MOBILE_NUMBER)) {
            this.toast.warning('Please Enter Mobile Number');
            return false;
        }
        if (!this.utils.mobileNumCheck(obj.MOBILE_NUMBER)) {
            this.toast.warning('Please Enter Valid Mobile Number');
            return false;
        }
        if (this.utils.isEmpty(obj.GENDER)) {
            this.toast.warning('Please Select Gender');
            return false;
        }
        if (this.utils.isEmpty(obj.FATHER_OR_MOTHER_NAME)) {
            this.toast.warning('Please Enter S/O D/O /Guardian');
            return false;
        }
        if (this.utils.isEmpty(obj.ADRESS)) {
            this.toast.warning('Please Enter Permanent Address D.No And Street Name');
            return false;
        }
        if (this.utils.isEmpty(obj.VILLAGE_AREA_PR)) {
            this.toast.warning('Please Enter Permanent Address Village/Area');
            return false;
        }
        if (this.utils.isEmpty(obj.CITY_OR_MANDAL_PR)) {
            this.toast.warning('Please Enter Permanent Address City/Mandal');
            return false;
        }
        if (this.utils.isEmpty(obj.STATE_PR)) {
            this.toast.warning('Please Select Permanent Address State');
            return false;
        }
        if (this.utils.isEmpty(obj.DISTRICT_PR)) {
            this.toast.warning('Please Select Permanent Address District');
            return false;
        }
        if (this.utils.isEmpty(obj.PINCODE_PR)) {
            this.toast.warning('Please Enter Permanent Address Pincode');
            return false;
        }

        if (this.utils.isEmpty(obj.D_NO_STREET_NAME_CR)) {
            this.toast.warning('Please Enter Current Address D.No And Street Name');
            return false;
        }
        if (this.utils.isEmpty(obj.VILLAGE_AREA_CR)) {
            this.toast.warning('Please Enter Current Address Village/Area');
            return false;
        }
        if (this.utils.isEmpty(obj.CITY_OR_MANDAL_CR)) {
            this.toast.warning('Please Enter Current Address City/Mandal');
            return false;
        }
        if (this.utils.isEmpty(obj.STATE_CR)) {
            this.toast.warning('Please Select Current Address State');
            return false;
        }
        if (this.utils.isEmpty(obj.DISTRICT_CR)) {
            this.toast.warning('Please Select Current Address District');
            return false;
        }
        if (this.utils.isEmpty(obj.PINCODE_CR)) {
            this.toast.warning('Please Enter Current Address Pincode');
            return false;
        }
        return true;
    }






    //EVENTS
    keyPressNumbers(event: any) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }




    async PersonalDaetailUpadte(ob: any): Promise<void> {
        try {
            debugger
            if (this.Validation(ob)) {
                const obj = {
                    TYPE: "21",
                    FISRT_NAME: ob.FIRST_NAME,
                    MIDDLE_NAME: ob.MIDDLE_NAME,
                    LAST_NAME: ob.LAST_NAME,
                    DATE_OF_BIRTH_AS_PER_SSC: ob.DATE_OF_BIRTH_SCC,
                    EMAIL_ID: ob.EMAIL_ID,
                    MOBILE_NUMBER: ob.MOBILE_NUMBER,
                    GENDER: ob.GENDER,
                    FATHER_OR_MOTHER_NAME: ob.FATHER_OR_MOTHER_NAME,
                    D_NO_STREET_NAME_PR: ob.ADRESS,
                    VILLAGE_AREA_PR: ob.VILLAGE_AREA_PR,
                    CITY_OR_MANDAL_PR: ob.CITY_OR_MANDAL_PR,
                    DISTRICT_PR: ob.DISTRICT_PR,
                    STATE_PR: ob.STATE_PR,
                    PINCODE_PR: ob.PINCODE_PR,
                    D_NO_STREET_NAME_CR: ob.D_NO_STREET_NAME_CR,
                    VILLAGE_AREA_CR: ob.VILLAGE_AREA_CR,
                    CITY_OR_MANDAL_CR: ob.CITY_OR_MANDAL_CR,
                    DISTRICT_CR: ob.DISTRICT_CR,
                    STATE_CR: ob.STATE_CR,
                    PINCODE_CR: ob.PINCODE_CR,
                    MASTER_ID: this.session.masterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    debugger;
                    this.spinner.hide();
                    this.LoadDataSecond();
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000)
                    this.toast.info("Data Updated Successfully");
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning("Data Updated Failed,Please Try Again");
                    return;
                }

            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async QualificationDaetailUpdate(ob: any): Promise<void> {
        debugger
        try {
            if (this.ValidationTwo(ob)) {
                const obj = {
                    TYPE: "22",
                    PHD: ob.PHD,
                    POST_GRADUATION: ob.POST_GRADUATION,
                    COURSE_GRDN_PG: ob.COURSE_GRDN_PG,
                    BRANCH_SPECIALIZATION_PG: ob.BRANCH_SPECIALIZATION_PG,
                    COLLEGE_PG: ob.COLLEGE_PG,
                    YEAR_OF_PASSEDOUT_PG: ob.YEAR_OF_PASSEDOUT_PG,
                    MARKS_OR_GRADE_PG: ob.MARKS_GRADE__GRDN_PG,
                    UPLOAD_DOCUMENTS_PG: this.documentobj.UploadDocuments,
                    COURSE_GRDN_DEGREE: ob.COURSE_GRDN_DEGREE,
                    BRANCH_SPECIALIZATION: ob.BRANCH_SPECIALIZATION,
                    COLLEGE__GRDN_DEGREE: ob.COLLEGE__GRDN_DEGREE,
                    YEAR_OF_PASSEDOUT_GRDN_DEGREE: ob.YEAR_OF_PASSEDOUT_GRDN_DEGREE,
                    MARKS_GRADE__GRDN_DEGREE: ob.MARKS_GRADE__GRDN_DEGREE,
                    UPLOAD_DCNTS__GRDN_DEGREE: this.documentobj.GDUploadDocuments,
                    COURSE_INTER_DIPL: ob.COURSE_INTER_DIPL,
                    COLLEGE_DIPL: ob.COLLEGE_DIPL,
                    YEAR_OF_PASSEDOUT_DIPL: ob.YEAR_OF_PASSEDOUT_DIPL,
                    MARKS_GRADE_DIPL: ob.MARKS_GRADE_DIPL,
                    UPLOAD_DCNTS_DIPL: this.documentobj.IUploadDocuments,
                    CBSE_STATE_SYLLABUS: ob.CBSE_STATE_SYLLABUS,
                    SCHOOL: ob.SCHOOL,
                    YEAR_OF_PASSEDOUT_SSC: ob.YEAR_OF_PASSEDOUT_SSC,
                    MARKS_GRADE_SSC: ob.MARKS_GRADE_SSC,
                    UPLOAD_DCNTS_SSC: this.documentobj.SUploadDocuments,
                    MASTER_ID: this.session.masterId
                }
                this.spinner.show();

                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.LoadDataSecond();
                    this.spinner.hide();
                    this.toast.success("Data Updated Successfully");
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning("Data Updated Failed,Please Try Again");
                    return;
                }
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }

    async FresherDaetailUpadte(ob: any): Promise<void> {
        debugger
        try {
            if (this.utils.isEmpty(ob.SKILLS)) {
                this.toast.warning('Please Enter Skills');
                return;
            }
            if (this.utils.isEmpty(ob.CV_UPLOAD)) {
                this.toast.warning('Please Select Upload CV');
                return;
            }
            else {

                const obj = {
                    TYPE: "23",
                    SKILLS: ob.SKILLS,
                    CV_UPLOAD: this.documentobj.CvUploadFresher,
                    MASTER_ID: this.session.masterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.LoadDataSecond();
                    this.spinner.hide();
                    this.toast.success("Data Updated Successfully");
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning("Data Updated Failed,Please Try Again");
                    return;
                }
            }


        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async ExperienceDaetailUpadted(ob: any): Promise<void> {
        debugger
        try {
            const isValue = false;
            if (this.utils.isEmpty(ob.YEARS)) {
                this.toast.warning('Please Enter Years');
                return;
            }
            if (this.utils.isEmpty(ob.MONTHS)) {
                this.toast.warning('Please Enter Months');
                return;
            }
            if (parseFloat(ob.MONTHS) > 11) {
                this.toast.warning('Please Enter Months below 11');
                return;
            }

            if (this.utils.isEmpty(ob.CURRENT_EMP_STATUS)) {
                this.toast.warning('Please Select Employee Status');
                return;
            }
            else {
                const obj = {
                    TYPE: "29",
                    YEARS: ob.YEARS,
                    MONTH: ob.MONTHS,
                    CV_UPLOAD: this.documentobj.CvUpload,
                    EXPERIENCE_LTR_UPLOAD: this.documentobj.ExperienceLatter,
                    CURRENT_EMP_STATUS: ob.CURRENT_EMP_STATUS,
                    MASTER_ID: this.session.masterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {

                    this.UseMethod();
                    this.LoadDataThird();
                    this.LoadData();
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning("Data Updated Failed,Please Try Again");
                    return;
                }
                console.log(obj);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }


    async UseMethod(): Promise<void> {

        const req = {
            TYPE: "24",
            MASTER_ID: this.session.masterId,
            ExperienceList: this.DistData
        }
        const res = await this.mcuAPI.ExperienceDetailsSubmit(req);
        if (res.success) {
            this.spinner.hide();
            this.toast.success("Data Updated Successfully");
            return;
        }
        else {
            this.spinner.hide();
            this.toast.warning("Data Updated Failed,Please Try Again");
            return;
        }

    }




    async btnPdfView(pdf): Promise<void> {
        try {
            this.spinner.show();
            // const res = await this.utils.DMSFileDownload(pdf);
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

    updateData(index: number, key: string, value: any) {
        debugger;
        // Update the input field based on the field parameter
        if (key === 'FROM_DATE') {
            const dobDate = new Date(value);
            const day = dobDate.getDate().toString().padStart(2, '0');
            const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = dobDate.getFullYear();
            const FromDateFormate = `${day}-${month}-${year}`;
            this.DistData[index][key] = FromDateFormate;
        }
        else if (key === 'TO_DATE') {
            const dobDate = new Date(value);
            const day = dobDate.getDate().toString().padStart(2, '0');
            const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = dobDate.getFullYear();
            const ToDateFarmate = `${day}-${month}-${year}`;
            this.DistData[index][key] = ToDateFarmate;
        }
        else {
            this.DistData[index][key] = value;
        }
    }





}
