import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    dashboardUrl = '';
    crystalDashboardUrl = '';
    farmerMonitoringModuleUrl = '';
    smsSendingurl = '';
    jpvdashboardurl = ''; jpvamulReportsurl = '';
    reportsDashboards = '';
    constructor(private httpClient: HttpClient, private utils: UtilsService) {
        this.dashboardUrl = utils.baseUrl() + 'api/dashboard/';
        this.crystalDashboardUrl = utils.crystalReportsUrl() + 'api/dashboard/';
        this.farmerMonitoringModuleUrl = utils.baseUrl() + 'api/farmerMonitoringModule/';
        this.smsSendingurl = utils.baseUrl() + 'api/smsSending/';
        this.jpvdashboardurl = utils.jpvbaseURL() + 'api/DashboardRpt/';
        this.jpvamulReportsurl = utils.jpvbaseURL() + 'api/amulReports/';
        this.reportsDashboards = utils.jpvbaseURL() + 'api/ReportsDashBoards/';

    }

    public stateCumulativeCounts() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}stateCumulativeCounts`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public todayCounts() {
        const result: any = this.httpClient
            .get(`${this.dashboardUrl}todayCounts`, this.utils.getGetHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public jpvamulReports_UnioonListByDistID(req) {
        const result: any = this.httpClient
            .post(
                `${this.jpvamulReportsurl}UnioonListByDistID`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public districtWiseMilkPouredLitres() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}districtWiseMilkPouredLitres`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public weekWiseMilkPouredLitres(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}weekWiseMilkPouredLitres`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public dayWiseMilkPouredVillages(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}dayWiseMilkPouredVillages`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public dayWiseMilkPouredBreakUp(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}dayWiseMilkPouredBreakUp`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public dayWiseTotalMilkPoured(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}dayWiseTotalMilkPoured`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public dayWiseSNFFatList(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}dayWiseSNFFatList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public topTenSocietiesList(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}topTenSocietiesList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public topFiveMembersList(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}topFiveMembersList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public mentorWiseMilkCollectionData(req) {
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}mentorWiseMilkCollectionData`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public districtList() {
        const result: any = this.httpClient
            .post(`${this.dashboardUrl}districtList`, this.utils.getGetHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public totalDistrictReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}totalDistrictReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalRbksReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}totalRbksReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalVillagesReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}totalVillagesReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalRegisteredFarmersReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}totalRegisteredFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalMilkPouringFarmersReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}totalMilkPouringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public dailyTotalRegisterdFarmersReport() {
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}dailyTotalRegisterdFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public dailyTotalMilkPopuringFarmersReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}dailyTotalMilkPopuringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public newlyMilkPouringFarmersReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}newlyMilkPouringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public futureDatesMilkPouring() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.dashboardUrl}futureDatesMilkPouring`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public milkNonPourerLineChart(req) {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.dashboardUrl}milkNonPourerLineChart`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    // crystal reports

    public dailyTotalMilkPopuringFarmersPDFReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}dailyTotalMilkPopuringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalDistrictPDFReport() {
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}totalDistrictReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalRbksPDFReport() {
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}totalRbksReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalVillagesPDFReport() {
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}totalVillagesReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public dailyTotalRegisterdFarmersPDFReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}dailyTotalRegisterdFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public totalMilkPouringFarmersPDFReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}totalMilkPouringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public newlyMilkPouringFarmersPDFReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.crystalDashboardUrl}newlyMilkPouringFarmersReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerMonitoringTotRpt(req) {
        const result: any = this.httpClient
            .post(
                `${this.farmerMonitoringModuleUrl}farmerMonitoringTotRpt`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerMonitoringAllDist(req) {
        const result: any = this.httpClient
            .post(
                `${this.farmerMonitoringModuleUrl}farmerMonitoringAllDist`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public smsSendingReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.smsSendingurl}smsSendingReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public milkpouredSocietiesMembersList(req) {
        const result: any = this.httpClient
            .post(
                `${this.jpvdashboardurl}milkpouredSocietiesMembersList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public DailyCountsDashboards(req) {
        const result: any = this.httpClient
            .post(
                `${this.reportsDashboards}DailyCountsDashboards`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public TopGridsListGet(req) {
        const result: any = this.httpClient
            .post(
                `${this.reportsDashboards}TopGridsListGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public LestGridsListGet(req) {
        const result: any = this.httpClient
            .post(
                `${this.reportsDashboards}LestGridsListGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    // reports end
}
