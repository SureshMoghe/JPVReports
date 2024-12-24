import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { datePickerConfig } from 'src/app/shared/models/date-picker.models';
import { DatePickerService } from 'src/app/shared/services/date-picker.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
//import { McuMappingService } from '../../services/mcu-mapping.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-registration-details',
    templateUrl: './registration-details.component.html',
    styleUrls: ['./registration-details.component.css']

})
export class RegistrationDetailsComponent implements OnInit {

    record: any;
    FirstName: any;
    MiddleName: any;
    LastName: any;
    DOB: any;
    MobileNO: any;
    EmailID: any;
    DNoP: any;
    City: any;
    CitVill: any;
    State: any;
    District: any;
    Pincode: any;
    CuDNoP: any;
    CuCity: any;
    CuCitVill: any;
    CuState: any;
    CuDistrict: any;
    CuPincode: any;
    BraSpl: any;
    PCollege: any;
    MaGra: any;
    UploadDocuments: any;
    GDUploadDocuments: any;
    GDMaGra: any;
    GDPCollege: any;
    GDBraSpl: any;
    IBraSpl: any;
    IPCollege: any;
    IMaGra: any;
    IUploadDocuments: any;
    SBraSpl: any;
    SSchool: any;
    SMaGra: any;
    SUploadDocuments: any;
    Duties: any;
    Years: any;
    Role: any;
    OrganiCom: any;
    Months: any;
    CvUpload: any;
    ExperienceLatter: any;
    freshexpe: any;
    CvUploadFresher: any;
    Skills: any;
    isfresher: boolean = false;
    isexperience: boolean = false;
    ispgcheck: boolean = false;
    IsWorking: boolean = false;
    isNotWorking: boolean = true;
    isTable: boolean = false;
    isChecked: any;
    PG: any;
    NotWorking: any;
    CurrentlyWorking: any;
    FromDate: string;
    ToDate: string;
    experTotal: any[] = [];
    employeeStatus: any;
    isModalVisible = false;
    receivedObject: any;
    MobileNum: any;
    OTP: any;
    Gender: any
    PhD: any;
    so: any;
    isSo: boolean = false;
    isDo: boolean = false;
    isGuardian: boolean = false;
    Course: any;
    YearOfPassout: any;
    GdCourse: any;
    GdYearOfPassout: any;
    IdCourse: any;
    IdYearOfPassout: any;
    cbseState: any;
    SYearOfPassout: any;
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
    minDate1: any;
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
    FromDateFormateOne: any;
    ToDateFarmateOne: any;

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
        debugger;
        document.getElementById('headingOne').style.display = "block";
        document.getElementById('heading').style.display = "none";
        document.getElementById('headingThree').style.display = "none";
        document.getElementById('headingFour').style.display = "none";

        this.route.queryParams.subscribe(params => {
            if (params.data) {
                this.receivedObject = JSON.parse(params.data);
            }
        });
        this.LoadState();

    }
    // fresher or experience
    FresherData() {
        this.isfresher = true;
        this.isexperience = false;
    }
    ExperienceData() {
        this.isexperience = true;
        this.isfresher = false;
    }
    //pg change
    PgYChange() {

        this.ispgcheck = true;

    }
    PgNChange() {
        this.ispgcheck = false;
        this.Course = ''
        this.BraSpl = ''
        this.PCollege = ''
        this.YearOfPassout = ''
        this.MaGra = ''
        this.UploadDocuments = ''

    }

    //experience letter and offer latter chage
    CurrentlyWorkingData() {
        debugger;
        this.IsWorking = true;
        this.isNotWorking = false;;
    }
    NotWorkingData() {
        debugger
        this.isNotWorking = true;
        this.IsWorking = false;
    }
    //for address select
    addSameAddress() {
        debugger;
        if (this.isChecked) {
            this.isCheck = false;
            this.isNotCheck = true;
            this.CuPincode = ''
            this.CuDNoP = ''
            this.CuCity = ''
            this.CuCitVill = ''
            this.CuState = ''
            this.CuDistrict = ''
        }
        else {
            this.isCheck = true;
            this.isNotCheck = false;
            this.CuPincode = this.Pincode;
            this.CuDNoP = this.DNoP;
            this.CuCity = this.City;
            this.CuCitVill = this.CitVill;
            this.CuState = this.State;
            this.CuDistrict = this.District;

        }

    }


    //add  for experience data
    ExperienceDeatailsAdd() {
        debugger;

        if (this.utils.isEmpty(this.Years)) {
            this.toast.warning('Please Enter Years');
            return;
        }
        if (this.utils.isEmpty(this.Months)) {
            this.toast.warning('Please Enter Months');
            return;
        }
        if (parseFloat(this.Months) > 11) {
            this.toast.warning('Please Enter Months below 11');
            return;
        }
        if (this.utils.isEmpty(this.OrganiCom)) {
            this.toast.warning('Please Enter Organization Name');
            return;
        }
        if (this.utils.isEmpty(this.Role)) {
            this.toast.warning('Please Enter Role');
            return;
        }
        if (this.utils.isEmpty(this.Duties)) {
            this.toast.warning('Please Enter Duties');
            return;
        }
        if (this.utils.isEmpty(this.Duties)) {
            this.toast.warning('Please Enter Duties');
            return;
        }
        if (this.utils.isEmpty(this.FromDate)) {
            this.toast.warning('Please Select From Date');
            return;
        }
        if (this.utils.isEmpty(this.ToDate)) {
            this.toast.warning('Please Select To Date');
            return;
        }
        else {
            const obj = {
                ORGANIZATION_NAME: this.OrganiCom,
                ROLE: this.Role,
                DUTIES: this.Duties,
                FROM_DATE: this.FromDateFormate,
                TO_DATE: this.ToDateFarmate

            }
            this.isTable = true;
            this.ExperienceDaetailSave = true;
            this.ToDateDisabled = true;
            this.experTotal.push(obj);
            this.OrganiCom = ''
            this.Role = ''
            this.Duties = ''
            this.FromDate = ''
            this.ToDate = ''
            this.FromDateFormate = ''
            this.ToDateFarmate = ''
        }
    }

    CommercialremoveData(index: number): void {
        this.experTotal.splice(index, 1);
    }
    //radio buttons change
    MaleCheck() {
        this.isSo = true;
        this.isDo = false;
        this.isGuardian = false;
    }
    FemaleCheck() {
        this.isSo = false;
        this.isDo = true;
        this.isGuardian = false;
    }
    OthersCheck() {
        this.isSo = false;
        this.isDo = false;
        this.isGuardian = true;
    }


    // isPopupVisible: boolean = false;

    // togglePopup() {

    //     if (true) {
    //         this.isPopupVisible = true;
    //     }
    // }


    //District and state dropdowns
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
                // console.log(this.DistList);


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
                // console.log(this.DistList);


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
    //PREVIEW DATA
    async LoadData(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "8",
                MASTER_ID: this.MasterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistData = res.result;
                // console.log(this.DistData);



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

    async LoadDataThird(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "28",
                MASTER_ID: this.MasterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistDataExper = res.result;




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

    async LoadDataSecond(): Promise<void> {
        debugger
        try {
            const req = {
                "TYPE": "7",
                MASTER_ID: this.MasterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistDataSecond = res.result;


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
                this.documentobj.ExperienceLatter = file
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

    ValidationTwo(): boolean {
        const isValue = false;
        if (this.utils.isEmpty(this.PhD)) {
            this.toast.warning('Please Select PhD');
            return false;
        }
        if (this.utils.isEmpty(this.PG)) {
            this.toast.warning('Please Select Post Graduation');
            return false;
        }
        if ((this.PhD == "Yes")) {

            if (this.PG == "No") {
                this.toast.warning('If Select PhD is YES Then PG Should Not be NO');
                return false;
            }
        }
        if (isValue) {

        }
        if (this.PG == "Yes") {
            if (this.utils.isEmpty(this.Course)) {
                this.toast.warning('Please Enter Post Graduation Course');
                return false;
            }
            if (this.utils.isEmpty(this.BraSpl)) {
                this.toast.warning('Please Enter Post Graduation Branch/Specialization');
                return false;
            }
            if (this.utils.isEmpty(this.PCollege)) {
                this.toast.warning('Please Enter Post Graduation College');
                return false;
            }
            if (this.utils.isEmpty(this.YearOfPassout)) {
                this.toast.warning('Please Enter Post Graduation Year Of Passout');
                return false;
            }
            if (this.utils.isEmpty(this.MaGra)) {
                this.toast.warning('Please Enter Post Graduation Marks/Grade');
                return false;
            }
            if (parseFloat(this.MaGra) > 100) {
                this.toast.warning('Please Enter Post Graduation Marks/Grade Below 100%');
                return false;
            }
            if (this.utils.isEmpty(this.UploadDocuments)) {
                this.toast.warning('Please select Post Graduation Upload Documents');
                return false;
            }

        }
        if (isValue) {

        }
        if (this.utils.isEmpty(this.GdCourse)) {
            this.toast.warning('Please Enter Graduation/Degree Course');
            return false;
        }
        if (this.utils.isEmpty(this.GDBraSpl)) {
            this.toast.warning('Please Enter Graduation/Degree Branch/Specialization');
            return false;
        }
        if (this.utils.isEmpty(this.GDPCollege)) {
            this.toast.warning('Please Enter Graduation/Degree College');
            return false;
        }
        if (this.utils.isEmpty(this.GdYearOfPassout)) {
            this.toast.warning('Please Enter Graduation/Degree Year Of Passout');
            return false;
        }
        // if ((this.GdYearOfPassout > this.YearOfPassout)) {
        //     this.toast.warning('BTech/Degree Year Of Passout Should not be greater than PG Year Of Passout');
        //     return false;
        // }
        if (this.utils.isEmpty(this.GDMaGra)) {
            this.toast.warning('Please Enter Graduation/Degree Marks/Grade');
            return false;
        }
        if (parseFloat(this.GDMaGra) > 100) {
            this.toast.warning('Please Enter Graduation/Degree Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(this.GDUploadDocuments)) {
            this.toast.warning('Please select Graduation/Degree Upload Documents');
            return false;
        }

        if (this.utils.isEmpty(this.IdCourse)) {
            this.toast.warning('Please Enter Inter/Diploma Course');
            return false;
        }
        if (this.utils.isEmpty(this.IPCollege)) {
            this.toast.warning('Please Enter Inter/Diploma College');
            return false;
        }
        if (this.utils.isEmpty(this.IdYearOfPassout)) {
            this.toast.warning('Please Enter Inter/Diploma Year Of Passout');
            return false;
        }
        if (this.utils.isEmpty(this.IMaGra)) {
            this.toast.warning('Please Enter Inter/Diploma Marks/Grade');
            return false;
        }
        if (parseFloat(this.IMaGra) > 100) {
            this.toast.warning('Please Enter Inter/Diploma Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(this.IUploadDocuments)) {
            this.toast.warning('Please select Inter/Diploma Upload Documents');
            return false;
        }
        if (this.utils.isEmpty(this.cbseState)) {
            this.toast.warning('Please Enter SSC CBSE/State Syllabus');
            return false;
        }
        if (this.utils.isEmpty(this.SSchool)) {
            this.toast.warning('Please Enter SSC School');
            return false;
        }
        if (this.utils.isEmpty(this.SYearOfPassout)) {
            this.toast.warning('Please Enter SSC Year Of Passout');
            return false;
        }
        if (this.utils.isEmpty(this.SMaGra)) {
            this.toast.warning('Please Enter SSC Marks/Grade');
            return false;
        }
        if (parseFloat(this.SMaGra) > 100) {
            this.toast.warning('Please Enter SSC Marks/Grade Below 100%');
            return false;
        }
        if (this.utils.isEmpty(this.SUploadDocuments)) {
            this.toast.warning('Please select SSC Upload Documents');
            return false;
        }
        return true;
    }

    Validation(): boolean {

        const isValue = false;
        if (this.utils.isEmpty(this.FirstName)) {
            this.toast.warning('Please Enter First Name');
            return false;
        }
        if (this.utils.isEmpty(this.LastName)) {
            this.toast.warning('Please Enter Last Name');
            return false;
        }
        if (this.utils.isEmpty(this.DOB)) {
            this.toast.warning('Please Select Date Of Birth');
            return false;
        }
        if (
            this.DOB != '' &&
            this.DOB != null &&
            this.DOB != undefined
        ) {
            const sel_date = new Date(this.DOB);

            const showAge = Math.floor(Math.abs(Date.now() - sel_date.getTime()) / (1000 * 3600 * 24) / 365);
            var ageblow = 18;
            debugger;
            if (showAge < ageblow) {
                this.toast.warning('Not Eligible for below 18 Years');
                this.DOB = ''
                return false;
            }


        }
        if (isValue) {

        }
        if (this.utils.isEmpty(this.EmailID)) {
            this.toast.warning('Please Enter Email ID');
            return false;
        }
        if (
            this.EmailID != '' &&
            this.EmailID != null &&
            this.EmailID != undefined
        ) {
            let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if (regex.test(this.EmailID.toUpperCase()) == false) {
                this.toast.warning('Please Enter Valid Email');
                return false;
            }
        }
        if (isValue) {

        }
        if (this.utils.isEmpty(this.MobileNO)) {
            this.toast.warning('Please Enter Mobile Number');
            return false;
        }
        if (!this.utils.mobileNumCheck(this.MobileNO)) {
            this.toast.warning('Please Enter Valid Mobile Number');
            return false;
        }
        if (this.utils.isEmpty(this.Gender)) {
            this.toast.warning('Please Select Gender');
            return false;
        }
        if (this.utils.isEmpty(this.so)) {
            if (this.Gender == 'Male') {
                this.toast.warning('Please Enter S/O');
                return false;
            }
            else if (this.Gender == 'Female') {
                this.toast.warning('Please Enter D/O');
                return false;
            }
            else {
                this.toast.warning('Please Enter Guardian');
                return false;
            }
        }
        if (isValue) {

        }
        if (this.utils.isEmpty(this.DNoP)) {
            this.toast.warning('Please Enter Permanent Address D.No And Street Name');
            return false;
        }
        if (this.utils.isEmpty(this.CitVill)) {
            this.toast.warning('Please Enter Permanent Address Village/Area');
            return false;
        }
        if (this.utils.isEmpty(this.City)) {
            this.toast.warning('Please Enter Permanent Address City/Mandal');
            return false;
        }
        if (this.utils.isEmpty(this.State)) {
            this.toast.warning('Please Select Permanent Address State');
            return false;
        }
        if (this.utils.isEmpty(this.District)) {
            this.toast.warning('Please Select Permanent Address District');
            return false;
        }
        if (this.utils.isEmpty(this.Pincode)) {
            this.toast.warning('Please Enter Permanent Address Pincode');
            return false;
        }

        if (this.utils.isEmpty(this.CuDNoP)) {
            this.toast.warning('Please Enter Current Address D.No And Street Name');
            return false;
        }
        if (this.utils.isEmpty(this.CuCitVill)) {
            this.toast.warning('Please Enter Current Address Village/Area');
            return false;
        }
        if (this.utils.isEmpty(this.CuCity)) {
            this.toast.warning('Please Enter Current Address City/Mandal');
            return false;
        }
        if (this.utils.isEmpty(this.CuState)) {
            this.toast.warning('Please Select Current Address State');
            return false;
        }
        if (this.utils.isEmpty(this.CuDistrict)) {
            this.toast.warning('Please Select Current Address District');
            return false;
        }
        if (this.utils.isEmpty(this.CuPincode)) {
            this.toast.warning('Please Enter Current Address Pincode');
            return false;
        }
        return true;
    }

    async PersonalDaetailSub(): Promise<void> {
        try {
            debugger
            if (this.Validation()) {
                const obj = {
                    TYPE: "1",
                    FISRT_NAME: this.FirstName,
                    MIDDLE_NAME: this.MiddleName,
                    LAST_NAME: this.LastName,
                    DATE_OF_BIRTH_AS_PER_SSC: this.DOBFarmate,
                    EMAIL_ID: this.EmailID,
                    MOBILE_NUMBER: this.MobileNO,
                    GENDER: this.Gender,
                    FATHER_OR_MOTHER_NAME: this.so,
                    D_NO_STREET_NAME_PR: this.DNoP,
                    VILLAGE_AREA_PR: this.CitVill,
                    CITY_OR_MANDAL_PR: this.City,
                    DISTRICT_PR: this.District,
                    STATE_PR: this.State,
                    PINCODE_PR: this.Pincode,
                    D_NO_STREET_NAME_CR: this.CuDNoP,
                    VILLAGE_AREA_CR: this.CuCitVill,
                    CITY_OR_MANDAL_CR: this.CuCity,
                    DISTRICT_CR: this.CuDistrict,
                    STATE_CR: this.CuState,
                    PINCODE_CR: this.CuPincode
                }
                console.log(obj);
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);

                if (res.result[0].STATUS == "1") {
                    this.DataList = res.result;
                    this.MasterId = this.DataList[0][':B1'];
                    sessionStorage.setItem('mobileNumber', this.MobileNO);
                    if (this.receivedObject && this.receivedObject.DESI_ID != '') {
                        this.DesignationDetailsSend();
                    }
                    this.spinner.hide();
                    this.toast.info(res.message);
                    document.getElementById('heading').style.display = "block";
                    document.getElementById('headingOne').style.display = "none";
                    return;
                }
                else if (res.result[0].STATUS == "2") {
                    this.spinner.hide();
                    this.toast.info(res.message);
                    return;
                }
                else {
                    this.spinner.hide();
                    this.toast.warning(res.message);
                    return;
                }
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }
    async QualificationDaetailSub(): Promise<void> {
        debugger
        try {
            if (this.ValidationTwo()) {
                const obj = {
                    TYPE: "2",
                    PHD: this.PhD,
                    POST_GRADUATION: this.PG,
                    COURSE_GRDN_PG: this.Course,
                    BRANCH_SPECIALIZATION_PG: this.BraSpl,
                    COLLEGE_PG: this.PCollege,
                    YEAR_OF_PASSEDOUT_PG: this.YearOfPassout,
                    MARKS_OR_GRADE_PG: this.MaGra,
                    UPLOAD_DOCUMENTS_PG: this.documentobj.UploadDocuments,
                    COURSE_GRDN_DEGREE: this.GdCourse,
                    BRANCH_SPECIALIZATION: this.GDBraSpl,
                    COLLEGE__GRDN_DEGREE: this.GDPCollege,
                    YEAR_OF_PASSEDOUT_GRDN_DEGREE: this.GdYearOfPassout,
                    MARKS_GRADE__GRDN_DEGREE: this.GDMaGra,
                    UPLOAD_DCNTS__GRDN_DEGREE: this.documentobj.GDUploadDocuments,
                    COURSE_INTER_DIPL: this.IdCourse,
                    COLLEGE_DIPL: this.IPCollege,
                    YEAR_OF_PASSEDOUT_DIPL: this.IdYearOfPassout,
                    MARKS_GRADE_DIPL: this.IMaGra,
                    UPLOAD_DCNTS_DIPL: this.documentobj.IUploadDocuments,
                    CBSE_STATE_SYLLABUS: this.cbseState,
                    SCHOOL: this.SSchool,
                    YEAR_OF_PASSEDOUT_SSC: this.SYearOfPassout,
                    MARKS_GRADE_SSC: this.SMaGra,
                    UPLOAD_DCNTS_SSC: this.documentobj.SUploadDocuments,
                    MASTER_ID: this.MasterId
                }
                this.spinner.show();

                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.spinner.hide();
                    this.toast.success(res.message);
                    this.isQualificationDetailsSub = false;
                    document.getElementById('headingThree').style.display = "block";
                    document.getElementById('headingOne').style.display = "none";
                    document.getElementById('heading').style.display = "none";
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning(res.message);
                    return;
                }
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }

    async FresherDaetailSub(): Promise<void> {
        debugger
        try {
            if (this.utils.isEmpty(this.Skills)) {
                this.toast.warning('Please Enter Skills');
                return;
            }
            if (this.utils.isEmpty(this.CvUploadFresher)) {
                this.toast.warning('Please Select Upload CV');
                return;
            }
            else {

                const obj = {
                    TYPE: "4",
                    SKILLS: this.Skills,
                    CV_UPLOAD: this.documentobj.CvUploadFresher,
                    MASTER_ID: this.MasterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.fresherSave = false;
                    document.getElementById('headingThree').style.display = "none";
                    document.getElementById('headingOne').style.display = "none";
                    document.getElementById('heading').style.display = "none";
                    document.getElementById('headingFour').style.display = "block"
                    this.LoadDataSecond();
                    this.spinner.hide();
                    this.toast.success(res.message);
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning(res.message);
                    return;
                }
            }


        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async ExperienceDaetailSub(): Promise<void> {

        debugger
        try {
            const isValue = false;
            if (this.utils.isEmpty(this.Years)) {
                this.toast.warning('Please Enter Years');
                return;
            }
            if (this.utils.isEmpty(this.Months)) {
                this.toast.warning('Please Enter Months');
                return;
            }
            if (parseFloat(this.Months) > 11) {
                this.toast.warning('Please Enter Months below 11');
                return;
            }

            if (this.utils.isEmpty(this.employeeStatus)) {
                this.toast.warning('Please Select Employee Status');
                return;
            }
            if (this.employeeStatus == 'Working') {

                if (this.utils.isEmpty(this.ExperienceLatter)) {
                    this.toast.warning('Please Select Upload Current Organization Offer Letter');
                    return;
                }
            }
            if (isValue) {

            }
            if (this.employeeStatus == 'Notworking') {
                if (this.utils.isEmpty(this.ExperienceLatter)) {
                    this.toast.warning('Please Select Upload Current Organization Experience Letter');
                    return;
                }
            }
            if (isValue) {

            }
            if (this.utils.isEmpty(this.ExperienceLatter)) {
                this.toast.warning('Please Select Upload Current Organization Experience Letter');
                return;
            }
            if (this.utils.isEmpty(this.CvUpload)) {
                this.toast.warning('Please Select Upload CV');
                return;
            }
            else {
                const obj = {
                    TYPE: "26",
                    YEARS: this.Years,
                    MONTH: this.Months,
                    CV_UPLOAD: this.documentobj.CvUpload,
                    EXPERIENCE_LTR_UPLOAD: this.documentobj.ExperienceLatter,
                    MASTER_ID: this.MasterId,
                    CURRENT_EMP_STATUS: this.employeeStatus,
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.UseMethod();
                    document.getElementById('headingThree').style.display = "none";
                    document.getElementById('headingOne').style.display = "none";
                    document.getElementById('heading').style.display = "none";
                    document.getElementById('headingFour').style.display = "block"
                    this.ExperienceDaetailSave = false;
                    this.addbutton = false;
                    this.experTotal = [];
                    this.LoadDataSecond();
                    this.LoadDataThird();
                    this.spinner.hide();
                    this.toast.success(res.message);
                    return;

                } else {
                    this.spinner.hide();
                    this.toast.warning(res.message);
                    return;
                }

            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }
    }

    async SendOTP(): Promise<void> {

        debugger;
        try {

            const obj = {
                TYPE: "12",
                MOBILE_NUMBER: this.MobileNO,
                MASTER_ID: this.MasterId,
            }
            this.spinner.show();
            const res = await this.mcuAPI.SendOTP(obj);
            if (res.success) {
                this.spinner.hide();
                this.showaprovedPopup = true;
                this.startCountdown();
                return;

            } else {
                this.spinner.hide();
                this.toast.warning(res.message);
                return;
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async VerifyOTP(): Promise<void> {
        try {

            if (this.utils.isEmpty(this.OTP)) {
                this.toast.warning('Please Enter OTP');
                return;
            }
            if (this.countdown == 0) {
                this.toast.warning('Please Enter Valid OTP');
                return;
            }
            else {


                const obj = {
                    TYPE: "13",
                    MOBILE_NUMBER: this.MobileNO,
                    OTP: this.OTP,
                    EMAIL_ID: this.EmailID,
                    MASTER_ID: this.MasterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.VerifyOtp(obj);
                debugger;
                if (res.success) {
                    this.OTP = ''
                    this.toast.infoNavigate(res.message + 'Registration Number:' + res.result[0].REGISTRATION_ID + 'Password :' + res.result[0].PASSWORD1);
                    // this.toast.infoNavigate(
                    //     res.message +
                    //     '<br><span style="color: blue;">Registration Number: ' + res.result[0].REGISTRATION_ID + '</span><br><span style="color: blue;">Password: ' + res.result[0].PASSWORD1 + '</span>'
                    // );
                    // this.toast.infoNavigate(
                    //     res.message +
                    //     '\nRegistration Number: ' + res.result[0].REGISTRATION_ID +
                    //     '\nPassword: ' + res.result[0].PASSWORD1
                    // );
                    this.spinner.hide();
                    return;

                } else {
                    this.OTP = ''
                    this.spinner.hide();
                    this.toast.warning(res.message);
                    return;
                }
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    // Preview hide and show
    onClear() {
        this.showaprovedPopup = false;
    }
    onClearPreview() {
        this.showPopup = false;

    }
    showPreview() {
        this.showPopup = true;
    }
    //Designation id submit
    async DesignationDetailsSend(): Promise<void> {
        debugger;
        const obj = {
            Type: "15",
            DESI_ID: this.receivedObject.DESI_ID,
            MASTER_ID: this.MasterId
        }
        const res = await this.mcuAPI.JobDetailsSubmit(obj);
        if (res.success) {
            return;
        }
        else {
            this.spinner.hide();
            this.toast.warning(res.message);
            return;
        }

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

    Edit() {
        if (this.freshexpe == "Fresher") {
            document.getElementById('Fresher').style.display = "block";
            document.getElementById('Experience').style.display = "none";
        }
        else {
            document.getElementById('Fresher').style.display = "none";
            document.getElementById('Experience').style.display = "block";
        }
        this.showPopup = false;
        this.isPersonalDetailsUpadte = true;
        this.isPersonalDetailsSub = false;
        this.isQualificationDetailsUpdate = true;
        this.isQualificationDetailsSub = false;
        this.ExperienceDaetailSave = false;
        this.ExperienceDaetailUpadte = true;
        this.fresherUpadte = true;
        this.fresherSave = false;
        document.getElementById('headingOne').style.display = "block";
        document.getElementById('heading').style.display = "block";
        document.getElementById('headingThree').style.display = "block";
        document.getElementById('headingFour').style.display = "block"
    }
    startCountdown() {
        debugger;
        this.showaprovedPopup = true;
        this.countdown = 60;
        this.timer = setInterval(() => {
            if (this.countdown > 0) {
                this.countdown--;
            }
            else if (this.countdown == 0) {
                this.ToDateDisabledOTP = false;
                // return;
            }
            else {
                clearInterval(this.timer);
            }
        }, 1000); // Update countdown every 1 second
    }

    async PersonalDaetailUpadte(): Promise<void> {
        try {
            debugger
            if (this.Validation()) {
                const obj = {
                    TYPE: "21",
                    FISRT_NAME: this.FirstName,
                    MIDDLE_NAME: this.MiddleName,
                    LAST_NAME: this.LastName,
                    DATE_OF_BIRTH_AS_PER_SSC: this.DOBFarmate,
                    EMAIL_ID: this.EmailID,
                    MOBILE_NUMBER: this.MobileNO,
                    GENDER: this.Gender,
                    FATHER_OR_MOTHER_NAME: this.so,
                    D_NO_STREET_NAME_PR: this.DNoP,
                    VILLAGE_AREA_PR: this.CitVill,
                    CITY_OR_MANDAL_PR: this.City,
                    DISTRICT_PR: this.District,
                    STATE_PR: this.State,
                    PINCODE_PR: this.Pincode,
                    D_NO_STREET_NAME_CR: this.CuDNoP,
                    VILLAGE_AREA_CR: this.CuCitVill,
                    CITY_OR_MANDAL_CR: this.CuCity,
                    DISTRICT_CR: this.CuDistrict,
                    STATE_CR: this.CuState,
                    PINCODE_CR: this.CuPincode,
                    MASTER_ID: this.MasterId
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    debugger;
                    this.spinner.hide();
                    this.LoadDataSecond();
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

    async QualificationDaetailUpdate(): Promise<void> {
        debugger
        try {
            if (this.ValidationTwo()) {
                const obj = {
                    TYPE: "22",
                    PHD: this.PhD,
                    POST_GRADUATION: this.PG,
                    COURSE_GRDN_PG: this.Course,
                    BRANCH_SPECIALIZATION_PG: this.BraSpl,
                    COLLEGE_PG: this.PCollege,
                    YEAR_OF_PASSEDOUT_PG: this.YearOfPassout,
                    MARKS_OR_GRADE_PG: this.MaGra,
                    UPLOAD_DOCUMENTS_PG: this.documentobj.UploadDocuments,
                    COURSE_GRDN_DEGREE: this.GdCourse,
                    BRANCH_SPECIALIZATION: this.GDBraSpl,
                    COLLEGE__GRDN_DEGREE: this.GDPCollege,
                    YEAR_OF_PASSEDOUT_GRDN_DEGREE: this.GdYearOfPassout,
                    MARKS_GRADE__GRDN_DEGREE: this.GDMaGra,
                    UPLOAD_DCNTS__GRDN_DEGREE: this.documentobj.GDUploadDocuments,
                    COURSE_INTER_DIPL: this.IdCourse,
                    COLLEGE_DIPL: this.IPCollege,
                    YEAR_OF_PASSEDOUT_DIPL: this.IdYearOfPassout,
                    MARKS_GRADE_DIPL: this.IMaGra,
                    UPLOAD_DCNTS_DIPL: this.documentobj.IUploadDocuments,
                    CBSE_STATE_SYLLABUS: this.cbseState,
                    SCHOOL: this.SSchool,
                    YEAR_OF_PASSEDOUT_SSC: this.SYearOfPassout,
                    MARKS_GRADE_SSC: this.SMaGra,
                    UPLOAD_DCNTS_SSC: this.documentobj.SUploadDocuments,
                    MASTER_ID: this.MasterId
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

    async FresherDaetailUpadte(): Promise<void> {
        debugger
        try {
            if (this.utils.isEmpty(this.Skills)) {
                this.toast.warning('Please Enter Skills');
                return;
            }
            if (this.utils.isEmpty(this.CvUploadFresher)) {
                this.toast.warning('Please Select Upload CV');
                return;
            }
            else {

                const obj = {
                    TYPE: "23",
                    SKILLS: this.Skills,
                    CV_UPLOAD: this.documentobj.CvUploadFresher,
                    MASTER_ID: this.MasterId
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

    async ExperienceDaetailUpadted(): Promise<void> {
        debugger
        try {
            const isValue = false;
            if (this.utils.isEmpty(this.Years)) {
                this.toast.warning('Please Enter Years');
                return;
            }
            if (this.utils.isEmpty(this.Months)) {
                this.toast.warning('Please Enter Months');
                return;
            }
            if (parseFloat(this.Months) > 11) {
                this.toast.warning('Please Enter Months below 11');
                return;
            }

            if (this.utils.isEmpty(this.employeeStatus)) {
                this.toast.warning('Please Select Employee Status');
                return;
            }
            if (this.employeeStatus == 'Working') {

                if (this.utils.isEmpty(this.ExperienceLatter)) {
                    this.toast.warning('Please Select Upload Current Organization Offer Letter');
                    return;
                }
            }
            if (isValue) {

            }
            if (this.employeeStatus == 'Notworking') {
                if (this.utils.isEmpty(this.ExperienceLatter)) {
                    this.toast.warning('Please Select Upload Current Organization Experience Letter');
                    return;
                }
            }
            if (isValue) {

            }

            if (this.utils.isEmpty(this.CvUpload)) {
                this.toast.warning('Please Select Upload CV');
                return;
            }
            else {
                const obj = {
                    TYPE: "29",
                    YEARS: this.Years,
                    MONTH: this.Months,
                    CV_UPLOAD: this.documentobj.CvUpload,
                    EXPERIENCE_LTR_UPLOAD: this.documentobj.ExperienceLatter,
                    MASTER_ID: this.MasterId,
                    CURRENT_EMP_STATUS: this.employeeStatus,
                }
                this.spinner.show();
                const res = await this.mcuAPI.JobDetailsSubmit(obj);
                if (res.success) {
                    this.UseMethodOne();
                    this.LoadDataSecond();
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

    async UseMethodOne(): Promise<void> {

        const req = {
            TYPE: "24",
            MASTER_ID: this.MasterId,
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

    // formatDate(inputDate) {
    //     // Input date in the format "DD-MM-YYYY"
    //     const parts = inputDate.split('-');
    //     if (parts.length === 3) {
    //         const year = parts[2];
    //         const month = parts[1];
    //         const day = parts[0];
    //         // Format the date as "YYYY-MM-DD" for the input element
    //         return `${year}-${month}-${day}`;
    //     } else {
    //         // If the date string is not in the expected format, return an empty string or handle it as needed
    //         return '';
    //     }
    // }

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

    async UseMethod(): Promise<void> {

        const req = {
            TYPE: "3",
            MASTER_ID: this.MasterId,
            ExperienceList: this.experTotal
        }
        const res = await this.mcuAPI.ExperienceDetailsSubmit(req);
        if (res.success) {
            this.LoadData();
            return;
        }
        else {
            this.toast.warning(res.message);
            return;
        }

    }

    formatDateONE(dateString: string, field: string) {
        debugger;
        const dobDate = new Date(dateString);
        const day = dobDate.getDate().toString().padStart(2, '0');
        const month = (dobDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = dobDate.getFullYear();

        // Update the input field based on the field parameter
        if (field === 'DOB') {
            this.DOBFarmate = `${day}-${month}-${year}`;
        } else if (field === 'FromDate') {
            this.FromDateFormate = `${day}-${month}-${year}`;
            this.ToDateDisabled = false;
            const selected = new Date(this.FromDate);
            selected.setDate(selected.getDate() + 1);
            this.minDate1 = selected.toISOString().split('T')[0];
        }
        else if (field === 'ToDate') {
            this.ToDateFarmate = `${day}-${month}-${year}`;
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


}

