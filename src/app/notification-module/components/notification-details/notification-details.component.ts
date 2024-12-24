import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StateService } from 'src/app/stateLevel/services/state.service';

@Component({
    selector: 'app-notification-details',
    templateUrl: './notification-details.component.html',
    styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
    private hasClicked = false; marqueetext = false; marqueetextdata: any;
    isnumberofpersons: boolean = false;
    isexpequal: boolean = false;
    isexpequalone: boolean = false;
    isCardClosed: boolean = false;
    DataArray = [];
    DesiList: any[] = [];
    POSITIONLIST: any[] = [];
    SUBLIST: any[] = [];
    showPopup: boolean = false;
    reqobj = {
        designation: '',
        Position: '',
    };

    designationID: any
    DistData: any[] = [];
    DistDataSecond: any[] = [];
    DistDataExper: any[] = [];

    constructor(
        private amulurl: StateService,
        private spinner: NgxSpinnerService,
        private utils: UtilsService,
        private toast: ToasterService,
        private session: SessionService,
        private router: Router,
        private mcuAPI: StateService,
    ) { }

    ngOnInit(): void {
        this.LoadDesi();
        this.session.masterId = sessionStorage.getItem('masterId');
        this.session.mobileNumber = sessionStorage.getItem('mobileNumber');


    }
    async handleMouseEnter(obj: any): Promise<void> {
        try {
            const req = {
                TYPE: "14",
                STATUS: obj.POSITION_ID
            }
            debugger;
            const res = await this.amulurl.NotificationsForJobDetails(req);
            if (res.success) {
                this.SUBLIST = res.result;
                console.log(this.SUBLIST);

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }


    async DesignationClick(obj: any): Promise<void> {

        try {

            this.reqobj = {
                designation: obj.DESIGNATION,
                Position: obj.POSITION,
            };

            const req = {
                TYPE: "11",
                DESI_ID: obj.DESI_ID
            }
            debugger;
            this.spinner.show();
            const res = await this.amulurl.NotificationsForJobDetails(req);
            if (res.success) {
                this.spinner.hide();
                this.POSITIONLIST = res.result;
                this.isexpequalone = true;
                console.log(this.POSITIONLIST);

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }


    }
    closeCard() {
        this.isCardClosed = true;
        this.isexpequalone = false;
    }

    async GoTopage(ob: any): Promise<void> {

        debugger;
        try {

            if (this.marqueetextdata != '') {
                this.toast.warning(this.marqueetextdata);
            }
            else {
                if (this.session.masterId == null) {
                    this.router.navigate(['/NotificationModule/RegistrationDetails'], {
                        queryParams: { data: JSON.stringify(ob) }
                    });

                }
                else {
                    this.showPopup = true;
                    this.designationID = ob.DESI_ID
                    this.LoadDataSecond();
                    this.LoadData();
                    this.LoadDataThird();
                }
             }



        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
            return
        }

    }

    async LoadDesi(): Promise<void> {
        try {
            const req = {
                TYPE: "10",
            }
            debugger;
            this.spinner.show();
            const res = await this.amulurl.NotificationsForJobDetails(req);
            if (res.success) {
                this.spinner.hide();
                this.DesiList = res.result;

                if (res.result[0].APPSTATUS != '' && res.result[0].APPSTATUS != undefined) {
                    this.marqueetext = true;
                    this.marqueetextdata =  res.result[0].APPSTATUS;
                }
                else {
                    this.marqueetext = false;
                    this.marqueetextdata = '';
                }


                console.log(this.DesiList);

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }

    }

    async ApplyJob(): Promise<void> {

        try {
            const obj = {
                Type: "15",
                DESI_ID: this.designationID,
                MASTER_ID: this.session.masterId
            }
            const res = await this.mcuAPI.JobDetailsSubmit(obj);
            if (res.result[0].STATUS == "1") {
                this.toast.infoNavigateJob("Job Successfully Applied");
                
                return;
            }
            else if (res.result[0].STATUS == "2") {
                this.toast.infoNavigateJob("Already job Applied Successfully");
                return;
            }
            else {
                this.toast.warning("Job Applied Failed");
                return;
            }
        } catch (error) {

        }
    }

    Edit() {
        this.router.navigate(['/NotificationModule/JobProfile'],);
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
                MASTER_ID: this.session.masterId
            }
            this.spinner.show();
            const res = await this.mcuAPI.NotificationsForJobDetails(req);
            debugger;
            if (res.success) {
                this.spinner.hide();
                this.DistDataExper = res.result;




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
                // console.log(this.DistData);

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

    onClearPreview() {
        this.showPopup = false;

    }

}

