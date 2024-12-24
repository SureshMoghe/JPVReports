import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    prompturl = '';
    baseURL = '';
    locationURL = '';
    routeURL = '';
    dashboardUrl = '';
    milkCollectionBaseURL = '';
    loanSanctionBaseURL = '';
    bankLoanSanctionBaseURL = '';
    crystalReportsURL = '';
    crystalReportsBankURL = '';
    crystalReportsFarmerURL = '';
    passwordResetURL = '';
    mdacURL = '';
    baseURL_Mdss = '';
    amulurl = '';
    amuldashboardurl = '';
    mdssURL = '';
    LatestDashboardurl = '';
    crystalReportsDashboards = '';
    VAOurl = ''
    mdsscomm = ''
    dairyesignappURL = ''
    mdssDashBoardURL = ''
    smsapi = '';
    societyURL = '';
    baseURLJPV = '';
    techinicianUrl = '';
    BMCUEquipUrl = '';
    bmcucrystalrpt = '';


    constructor(private httpClient: HttpClient, private utils: UtilsService) {
        this.mdssDashBoardURL = utils.mdssUrl() + 'api/NewMemberaddModule/';
        this.baseURL = utils.baseUrl() + 'api/farmerModule/';
        this.locationURL = utils.baseUrl() + 'api/locationModule/';
        this.routeURL = utils.baseUrl() + 'api/routeModule/';
        this.dashboardUrl = utils.baseUrl() + 'api/dashboard/';
        this.milkCollectionBaseURL =
            utils.crystalReportsUrl() + 'api/farmerModule/';
        this.loanSanctionBaseURL = utils.baseUrl() + 'api/cheyuthaLoanSanction/';
        this.bankLoanSanctionBaseURL =
            utils.baseUrl() + 'api/cheyuthaBankLoanSanction/';
        this.crystalReportsURL =
            utils.crystalReportsUrl() + 'api/cheyuthaLoanSanction/';
        this.crystalReportsBankURL =
            utils.crystalReportsUrl() + 'api/cheyuthaBankLoanSanction/';
        this.crystalReportsFarmerURL = utils.crystalReportsUrl() + 'api/farmerModule/';
        this.passwordResetURL = utils.baseUrl() + 'api/admin/';
        this.mdacURL = utils.DISTHOUrl() + 'api/districtHO/';
        this.baseURL_Mdss = utils.mdssUrl() + 'api/dlcoModule/';
        this.amulurl = utils.jpvbaseURL() + 'api/amulReports/';
        this.prompturl = utils.jpvbaseURL() + 'api/FarmerDataPush/';
        this.amuldashboardurl = utils.jpvbaseURL() + 'api/amulReportDashboard/';

        this.mdssURL = utils.mdssUrl() + 'api/MDSSReports/';
        this.LatestDashboardurl = utils.jpvbaseURL() + 'api/rptsdashboard/';
        this.VAOurl = utils.jpvbaseURL() + 'api/rptsVAOReport/';
        this.crystalReportsDashboards = utils.crystalReportsUrl() + 'api/dashboard/';
        this.mdsscomm = utils.mdssUrl() + 'api/common/';
        this.dairyesignappURL = utils.crystalesignUrl() + 'api/mdssmahilamilkproducers/';
        //this.amulurltest=utils.testurl()+'api/amulReports/';

        this.smsapi = utils.jpvbaseURL() + 'api/rptssmsSending/';
        this.societyURL = utils.jpvbaseURL() + 'api/societyChange/';
        this.baseURLJPV = utils.jpvbaseURL() + 'api/farmerModule/';
        this.techinicianUrl = utils.jpvbaseURL() + 'api/TechnicianDetails/';
        this.BMCUEquipUrl = utils.jpvbaseURL() + 'api/ReportsDashBoards/';

        this.bmcucrystalrpt = utils.crystalReportsUrl() + 'api/bmcuConstruction/';
    }
    public PromptFarmerDataPush(req) {
        const result: any = this.httpClient
            .post(
                `${this.prompturl}PromptFarmerDataPush`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public FarmerDataPush(req) {
        const result: any = this.httpClient
            .post(
                `${this.prompturl}FarmerDataPush`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MSSReportGetDetails(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL_Mdss}MSSReportGetDetails`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public TransactionsByUnionidGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}TransactionsByUnionidGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public CCCDashboardDistrictlist(req) {
        const result: any = this.httpClient
            .post(
                `${this.LatestDashboardurl}CCCDashboardDistrictlist`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public CCCDashboardPhaselist(req) {
        const result: any = this.httpClient
            .post(
                `${this.LatestDashboardurl}CCCDashboardPhaselist`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public CCCDashboardRoutslist(req) {
        const result: any = this.httpClient
            .post(
                `${this.LatestDashboardurl}CCCDashboardRoutslist`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public CCCDashboardDetails(req) {
        const result: any = this.httpClient
            .post(
                `${this.LatestDashboardurl}CCCDashboardDetails`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public DashboardDailycountsRptGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}DashboardDailycountsRptGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public SendOTP(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}sendOtp`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public VerifyOtp(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}verifyOtp`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public NotificationsForJobDetails(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}GetJobDetails`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public JobDetailsSubmit(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}OfficeJobDetailsSub`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public GetJobDetails(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}GetJobDetails`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerMilkCollectionReport() {
        const result: any = this.httpClient
            .get(
                `${this.baseURL}farmerMilkCollectionReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public masterandMilkPouringReport(req) {
        const result: any = this.httpClient
            .get(
                `${this.baseURL}masterandMilkPouringReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public masterandMilkPouringReportnew(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}masterandMilkPouringReport`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }




    public SocietyMonotoringService(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}SocietyMonitoringReport`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public districtList() {
        const result: any = this.httpClient
            .get(`${this.locationURL}districtList`, this.utils.getGetHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public routeDetailsByDistrictId(req) {
        const result: any = this.httpClient
            .post(
                `${this.routeURL}routeDetailsByDistrictId`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public cheyuthaLoanSanctionReport(req) {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.loanSanctionBaseURL}cheyuthaLoanSanctionReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public cheyuthaBankLoanSanctionReport(req) {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.bankLoanSanctionBaseURL}cheyuthaBankLoanSanctionReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public cheyuthaBankList() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.bankLoanSanctionBaseURL}cheyuthaBankList`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerWiseAbstractReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerWiseAbstractReport`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerWiseAbstractReportphase(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}farmerWiseAbstractReportphase`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public DayWiseMilkPouredVillagesandSocieties(req) {
        const result: any = this.httpClient
            .post(
                `${this.amuldashboardurl}DayWiseMilkPouredVillagesandSocieties`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }



    public TotalMilkPouringDistrictwiseReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}TotalMilkPouringDistrictwiseReport`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public societyWiseAbstractReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}societyWiseAbstractReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerRouteWiseMilkPopuringReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerRouteWiseMilkPopuringReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public loginsList(req) {
        const result: any = this.httpClient
            .post(
                `${this.passwordResetURL}loginsList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public userDetails(req) {
        const result: any = this.httpClient
            .post(
                `${this.passwordResetURL}userDetails`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public passwordResetUpdate(req) {
        const result: any = this.httpClient
            .post(
                `${this.passwordResetURL}passwordResetUpdate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public volunteerCheck(req) {
        const result: any = this.httpClient
            .post(
                `${this.passwordResetURL}volunteerCheck`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public volunteerHHReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}volunteerHHReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerPushRecordStatusCheck(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerPushRecordStatusCheck`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public volunteerHHMandalReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}volunteerHHMandalReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    //#region  crysral

    public farmerMilkCollectionPDFReport() {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .get(
                `${this.milkCollectionBaseURL}farmerMilkCollectionReport`,
                this.utils.getGetHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public cheyuthaBankLoanSanctionPDFReport(req) {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsBankURL}cheyuthaBankLoanSanctionReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public cheyuthaLoanSanctionPDFReport(req) {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}cheyuthaLoanSanctionReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerWiseAbstractPDFReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsFarmerURL}farmerWiseAbstractReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public societyWiseAbstractPDFReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsFarmerURL}societyWiseAbstractReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerRouteWiseMilkPopuringPDFReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsFarmerURL}farmerRouteWiseMilkPopuringReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    //#endregion

    // farmer milk pouring certificate

    public stateLevelDashboardCounts(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}stateLevelDashboardCounts`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }



    public districtLevelDashboardCounts(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.amuldashboardurl}districtLevelDashboardCounts`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public stateLevelFarmerCertList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}stateLevelFarmerCertList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public stateLevelCertUpdate(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}stateLevelCertUpdate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public rejectedReasonsList(): Promise<any> {
        const result: any = this.httpClient
            .get(`${this.baseURL}rejectedReasonsList`, this.utils.getGetHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public regFarmerDetailsByUid(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}regFarmerDetailsByUid`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public milkPouringCertificate(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.milkCollectionBaseURL}milkPouringCertificate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    // end  farmer milk pouring certificate

    public feedIndentHODashboard(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdacURL}feedIndentHODashboard`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public feedIndentHOPersonList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdacURL}feedIndentHOPersonList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public feedIndentHOUpdation(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdacURL}feedIndentHOUpdation`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public excelDownloadReport(req) {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}excelDownloadReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MdssFollowupStateAbsractReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssURL}MdssFollowupStateAbsractReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MdssDashBoardsCounts(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssDashBoardURL}MdssDashBoardsCounts`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MdssDashBoardsCountsGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssDashBoardURL}MdssDashBoardsCountsGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public MdssDashBoardsCountsGetData(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssDashBoardURL}MdssDashBoardsCountsGetData`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public MdssDashBoardsGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssDashBoardURL}MdssDashBoardsGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MdssFollowupDistrictAbsractReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssURL}MdssFollowupDistrictAbsractReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MdssFarmersDetailReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdssURL}MdssFarmersDetailReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public DashboardCumulativecountsRptGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}DashboardCumulativecountsRptGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public ExperienceDetailsSubmit(req) {
        const result: any = this.httpClient
            .post(
                `${this.amulurl}ExperienceDetailsSub`,   //amulurl  baseURL
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public MDSSPromotersMilkPouringGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL_Mdss}MDSSPromotersMilkPouringGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public MilkCollectionDataNotReceivedSocietie(req) {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsDashboards}MilkCollectionDataNotReceivedSocietie`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public VAOReportSelect(req) {
        const result: any = this.httpClient
            .post(
                `${this.VAOurl}VAOReportSelect`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public eSignDocumentsGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdsscomm}eSignDocumentsGet`,
                req,
                this.utils.getPostHttpOptions()
            )

            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        debugger;
        return result;
    }

    public MDssDlcoandDCOandGMRPT(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.dairyesignappURL}MDssDlcoandDCOandGMRPT`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public eSignDocumentsInsert(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.mdsscomm}eSignDocumentsInsert`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public searchByIFSC(req): Promise<any> {
        const result: any = this.httpClient
            .post(`${this.baseURLJPV}searchByIFSC`, req, this.utils.getPostHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public personDetailsByFarmerIdwithtype(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURLJPV}personDetailsByFarmerIdwithtype`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public farmerMobileUpdate(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURLJPV}farmerMobileUpdate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerAnimalUpdate(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURLJPV}farmerAnimalUpdate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public farmerBankAllDetailsUpdate(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURLJPV}farmerBankAllDetailsUpdate`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public SmsSendingCredGet(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.smsapi}SmsSendingCredGet`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public HODashboard(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.societyURL}HODashboard`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public HOPendingList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.societyURL}HOPendingList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public HOApprovedList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.societyURL}HOApprovedList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public HORejectedList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.societyURL}HORejectedList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public TechnisianDetails_Select(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.techinicianUrl}TechnisianDetails_Select`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public TechnisianDistricts(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.techinicianUrl}TechnisianDistricts`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public BMCUDeviceDetailsIns(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.BMCUEquipUrl}BMCUDeviceDetailsIns`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }

      public BMCUEquipmentStatusRpt(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.bmcucrystalrpt}BMCUEquipmentStatusRpt`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }

      public mdacHODashboard(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.mdacURL}mdacHODashboard`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }

      public pendingList(req): Promise<any> {
        const result: any = this.httpClient
          .post(`${this.mdacURL}pendingList`, req, this.utils.getPostHttpOptions())
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }
    
      public approvedList(req): Promise<any> {
        const result: any = this.httpClient
          .post(`${this.mdacURL}approvedList`, req, this.utils.getPostHttpOptions())
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }
    
      public rejectedList(req): Promise<any> {
        const result: any = this.httpClient
          .post(`${this.mdacURL}rejectedList`, req, this.utils.getPostHttpOptions())
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }

      public promotersHODashboard(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.mdacURL}promotersHODashboard`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }
      public promotersPendingList(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.mdacURL}promotersPendingList`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }
    
      public promotersApprovedList(req): Promise<any> {
        const result: any = this.httpClient
          .post(
            `${this.mdacURL}promotersApprovedList`,
            req,
            this.utils.getPostHttpOptions()
          )
          .pipe(retry(this.utils.env.API_RETRY_COUNT))
          .toPromise();
        return result;
      }
      
      
  public promotersRejectedList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.mdacURL}promotersRejectedList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

}
