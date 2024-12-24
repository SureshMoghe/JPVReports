import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { FarmerRegService } from "src/app/farmerMpussReg/services/farmer-reg.service";
import { LoggerService } from "src/app/shared/services/logger.service";
import { SessionService } from "src/app/shared/services/session.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UtilsService } from "src/app/shared/services/utils.service";
import { StateService } from "../../services/state.service";


@Component({
    selector: 'app-prompt-farmer-data-push-status',
    templateUrl: './prompt-farmer-data-push-status.component.html',
    styleUrls: ['./prompt-farmer-data-push-status.component.css']
})
export class PromptFarmerDataPushStatusComponent
    implements OnInit {
    imgUrl = "https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";
    DataPushType: any;
    SocietyCode: any;
    FarmerCode: any;
    DistrictCode: any
    FarmerDataList: any[] = [];
    OutPutRes: any;
    IsHideDetails: boolean = false;
    IsResult: boolean = false;
    DistrictList: any;
    SocietyList: any[] = [];
    SocietyType: any;
    Farmer: any;
    isFarmer: boolean = false;



    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private farmerModuleAPI: StateService,
        private farmerAPI: FarmerRegService,
        private stateAPI: StateService,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService
    ) {


    }
    // onYearSelected() {
    //     // Handle the selected year within this method
    //     console.log('Selected Year:', this.selectedYear);
    //     // You can perform additional actions here if needed
    // }
    ngOnInit(): void {
        //this.LoadDistricts();



    }



    FarmerDataChange() {
        if (this.Farmer == "1") {
            this.isFarmer = true;
            return;
        }
        else {
            this.isFarmer = false;
            this.FarmerCode = '';
            return;
        }


    }

    async FindData(): Promise<void> {
        try {
            debugger;
            const value = false;
            if (this.utils.isEmpty(this.DistrictCode)) {
                this.toast.info("Please Select District");
                return;
            }
            if (this.utils.isEmpty(this.SocietyCode)) {
                this.toast.info("Please Select Society");
                return;
            }
            if (this.utils.isEmpty(this.Farmer)) {
                this.toast.info("Please Select Farmer");
                return;
            }
            if ((this.Farmer == "1")) {
                if (this.utils.isEmpty(this.FarmerCode)) {
                    this.toast.info("Please Select Farmer Code");
                    return;
                }
            }
            if (value) {

            }
            else {
                this.FarmerDataList = [];
                const req = {

                    type: "1",
                    districtId: this.DistrictCode,
                    societyCode: this.SocietyCode,
                    FARMER_CODE: this.FarmerCode,
                    DATA_TYPE: "1"
                };

                this.spinner.show();
                const res = await this.farmerModuleAPI.PromptFarmerDataPush(req);
                if (res.success) {
                    this.FarmerDataList = res.result;
                    let obj = this.FarmerDataList.find(data => data.FARMER_CODE == this.FarmerCode);
                    if (obj != null) {
                        this.FarmerDataList = [];
                        this.FarmerDataList.push(obj);

                    }
                    //console.log(this.FarmerDataList);
                    this.IsHideDetails = true;
                    this.spinner.hide();
                } else {
                    this.spinner.hide();
                    this.toast.info(res.message);
                }
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }
    onSave($event) {
        console.log("Save button is clicked!", $event);
    }
    get jsonData(): string {
        debugger;
        return JSON.stringify(this.FarmerDataList, null, 2);
    }
    async SendFarmerData(): Promise<void> {
        try {
            debugger;
            if (this.utils.isEmpty(this.DistrictCode)) {
                this.toast.info("Please Select District");
                return;
            }
            if (this.utils.isEmpty(this.SocietyCode)) {
                this.toast.info("Please Select Society");
                return;
            }
            if (this.utils.isEmpty(this.FarmerCode)) {
                this.toast.info("Please Select Farmer");
                return;
            }
            else {
                const req = {
                    type: "1",
                    districtId: this.DistrictCode,
                    societyCode: this.SocietyCode,
                    FARMER_CODE: this.FarmerCode,

                };
                this.spinner.show();
                const res = await this.farmerModuleAPI.PromptFarmerDataPush(req);
                if (res.success) {
                    this.spinner.hide();
                    this.OutPutRes = res.message;
                    //this.FarmerDataList = [];
                    this.IsResult = true;
                    //this.Clear();

                } else {
                    this.spinner.hide();
                    this.OutPutRes = res.message;
                    this.IsResult = true;
                    //this.Clear();


                }
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async LoadDistricts(): Promise<void> {
        try {
            this.DistrictList = [];
            const req = {
                type: this.DataPushType
            };
            this.spinner.show();
            const res = await this.farmerModuleAPI.FarmerDataPush(req);
            if (res.success) {
                this.spinner.hide();
                this.DistrictList = res.result;
                //console.log(this.DistrictList);
                // document.addEventListener("DOMContentLoaded", () => {
                //     const searchInput = document.getElementById("searchInput") as HTMLInputElement;

                //     searchInput.addEventListener("input", () => {
                //         this.LoadSocietyCodes(searchInput.value);
                //     });

                //     this.LoadSocietyCodes(); // Populate the dropdown initially
                // });



            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async LoadSocietyCodes(searchTerm: string = ""): Promise<void> {
        try {
            debugger
            this.SocietyList = [];
            const req = {
                type: parseInt(this.DataPushType) + 2,
                districtId: this.DistrictCode,

            };
            this.spinner.show();
            const res = await this.farmerModuleAPI.FarmerDataPush(req);
            if (res.success) {
                this.spinner.hide();
                this.SocietyList = res.result;


                // const SocietyCode = document.getElementById("SocietyCode") as HTMLSelectElement;
                // SocietyCode.innerHTML = "";

                // const filteredrbkList = this.SocietyList.filter(SocietyList =>
                //     SocietyList.SOCIETY_NAME.toLowerCase().includes(searchTerm.toLowerCase())
                // );

                // filteredrbkList.forEach(SocietyList => {
                //     const option = document.createElement("option");
                //     option.value = SocietyList.SOCIETY_CODE.toString();
                //     option.text = SocietyList.SOCIETY_NAME;
                //     SocietyCode.add(option);
                // });
                //console.log(this.SocietyList);

            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }

        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }


    Clear() {
        this.DistrictCode = ''
        this.SocietyCode = ''
        this.FarmerCode = ''
    }



}
