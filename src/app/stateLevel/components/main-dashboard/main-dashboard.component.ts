import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { DashboardService } from '../../services/dashboard.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
    dashboardPage = true;
    districtId = ''; unionList = []; UNION_CODE = '';
    districtList = [];
    uid: any;
    status: any;
    countId: any;
    Selected_Date: any;
    DateHide: boolean = false;
    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private utils: UtilsService,
        private dashboardAPI: DashboardService,
        private router: Router,
        private session: SessionService
    ) { }

    ngOnInit(): void {
        this.loadUnioon();
        this.ALLDISTRICT();
        this.Selected_Date = this.session.getTodayDateString();
        this.DateHide = true;
    }

    async loadUnioon(): Promise<void> {
        try {
            this.unionList = [];
            this.spinner.show();
            const req = {
                type: '30'
            }; debugger;
            this.spinner.show();
            const res = await this.dashboardAPI.jpvamulReports_UnioonListByDistID(req);
            this.spinner.hide();
            if (res.success) {
                this.unionList = res.result;
                this.spinner.hide();
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async ALLDISTRICT(): Promise<void> {
        try {

            this.districtList = [];
            this.spinner.show();
            const req = {
                type: '32'

            }; this.spinner.hide();
            debugger;
            this.spinner.show();
            const res = await this.dashboardAPI.jpvamulReports_UnioonListByDistID(req);
            this.spinner.hide();
            if (res.success) {
                this.districtList = res.result;
                this.districtId = '';//res.result[0].DISTRICT_ID;
                this.spinner.hide();
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }


    async onunionChange(): Promise<void> {
        try {
            debugger;
            if (this.UNION_CODE == "") {
                this.ALLDISTRICT();
                return;
            }

            this.districtList = [];
            this.spinner.show();
            const req = {
                type: '31',
                villageId: this.UNION_CODE   //UNIONID

            }; this.spinner.hide();
            debugger;
            this.spinner.show();
            const res = await this.dashboardAPI.jpvamulReports_UnioonListByDistID(req);
            if (res.success) {
                this.districtList = res.result;
                this.districtId = res.result[0].DISTRICT_ID;
                this.spinner.hide();
            } else {
                this.spinner.hide();
                this.toast.info(res.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    // onCountsClickChange(countId): void {this.session.dashboarddistrictid=this.districtId;debugger;

    //   if (countId === 'NO_OF_DISTRICT') {
    //     this.router.navigate(['/state/DashboardDistrictCountReport']);  //TotalDistrictsReport  //NoofDistrictcount
    //   } else if (countId === 'TOTAL_RBKS') {
    //     this.router.navigate(['/state/NoofRbkCountReport']);    //TotalRBKReport    
    //   } else if (countId === 'TOTAL_VILLAGES') {
    //     this.router.navigate(['/state/VillageWiseDistrictReport']);  //TotalVillagesReport
    //   } else if (countId === 'TOTAL_FARMERS') {
    //     this.router.navigate(['/state/FarmerMpussRegStateReport']);//      this.router.navigate(['/state/TotalRegisteredFarmersReport']);
    //   } else if (countId === 'TOTAL_WOMEN_FARMERS') {
    //      this.router.navigate(['/state/TotalMilkPouringDistrictwiseReport']);   // this.router.navigate(['/state/TotalMilkPouringFarmersReport']);
    //   } else if (countId === 'D_TOTAL_FARMERS') {
    //     this.router.navigate(['/state/WomenFarmerRegDistrictReport']);  //DailyTotalRegisterdFarmersReport
    //   } else if (countId === 'D_TOTAL_WOMEN_FARMERS') {
    //     this.router.navigate(['/state/WomenFarmerMilkPouringDistrictReport']);      //DailyTotalMilkPopuringFarmersReport     
    //   } else if (countId === 'TOTAL_FARMERS_INTHIS_MONTH') {
    //     this.router.navigate(['/state/NewlyMilkPouringFarmersDistrictReport']);   //NewlyMilkPouringFarmersReport
    //   }     

    // }

    onCountsClickChange(countsD: any): void {
        this.session.dashboarddistrictid = this.districtId; debugger;
        this.uid = countsD;
        if (this.uid == "false") {
            this.Selected_Date = '';
            this.DateHide = false;
        }
        else if (this.uid == "true") {
            this.DateHide = true;
            this.Selected_Date = this.session.getTodayDateString();
        }

        else {
            debugger;
            const parts = this.uid.split('^');
            this.countId = parts[0];
            this.status = parts[1];


            if (this.countId === 'NO_OF_DISTRICT' && this.status === '1') {
                this.router.navigate(['/state/DashboardDistrictCountReport']);
            }
            else if (this.countId === 'NO_OF_DISTRICT' && this.status === '2') {
                this.router.navigate(['/state/DashBoardDistrictWiseReport']);
            }
            else if (this.countId === 'TOTAL_RBKS' && this.status === '1') {
                this.router.navigate(['/state/NoofRbkCountReport']);
            }
            else if (this.countId === 'TOTAL_RBKS' && this.status === '2') {
                this.router.navigate(['/state/DashBoardNoofRbkCountReport']);
            }
            else if (this.countId === 'TOTAL_VILLAGES' && this.status === '1') {
                this.router.navigate(['/state/VillageWiseDistrictReport']);
            }
            else if (this.countId === 'TOTAL_VILLAGES' && this.status === '2') {
                this.router.navigate(['/state/DashBoardVillageWiseDistrictReport']);
            }
            else if (this.countId === 'TOTAL_WOMEN_FARMERS') {
                this.router.navigate(['/state/DashBoardTotalMilkPouringDistrictwiseReport']);
            }
            else if (this.countId === 'D_TOTAL_FARMERS' && this.status === '1') {
                this.router.navigate(['/state/WomenFarmerRegDistrictReport']);
            }
            else if (this.countId === 'TOTAL_FARMERS' && this.status === '2') {
                this.router.navigate(['/state/DashBoardWomenFarmerRegDistrictReport']);
            }
            else if (this.countId === 'D_TOTAL_WOMEN_FARMERS' && this.status === '1') {
                this.router.navigate(['/state/WomenFarmerMilkPouringDistrictReport']);
            }
            else if (this.countId === 'TOTAL_FARMERS_INTHIS_MONTH') {
                this.router.navigate(['/state/NewlyMilkPouringFarmersDistrictReport']);
            }
            else if (this.countId === 'TOTAL_FARMERS') {
                this.router.navigate(['/state/FarmerMpussRegStateReport']);
            }
        }
    }


    onReportsClickChange(obj): void {
        if (obj.reportId === 'ROUTE_WISE_MILK_POURING') {
            const encryptedString = this.utils.encrypt(JSON.stringify(obj));
            this.router.navigate(['/state/FarmerRouteWiseMilkPouringReport'], {
                queryParams: { request: encryptedString },
            });
        }
        console.log(obj);
    }
}
