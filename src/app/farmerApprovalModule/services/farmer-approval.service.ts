import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
    providedIn: 'root',
})
export class FarmerApprovalService {
    baseURL = '';
    crystalReportsURL = '';
    baseJPVURL = ''
    DCbaseURL = '';offmdlURL='';
    constructor(private httpClient: HttpClient, private utils: UtilsService) {
        this.baseURL = utils.baseUrl() + 'api/farmerModule/';
        this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
        this.baseJPVURL = utils.jpvbaseURL() + 'api/rptsfarmerModule/';
        this.DCbaseURL = utils.jpvbaseURL() + 'api/dc/';

        this.offmdlURL = utils.jpvbaseURL() + 'api/officeModule/';


    }

    public farmerApprovalStateReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerApprovalStateReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public office_po_select(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.offmdlURL}office_po_select`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalVillageLevel(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalVillageLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalClusterLevel(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalClusterLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public farmerApprovalDetailLevel(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalDetailLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }





    public farmerApprovalDistrictReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerApprovalDistrictReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalMandalReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerApprovalMandalReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalRouteLevel(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerApprovalRouteLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }


    public farmerApprovalMentorLevel(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerApprovalMentorLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    // Crystal reports

    public farmerApprovalStateReportPDF(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}farmerApprovalStateReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalDistrictReportPDF(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}farmerApprovalDistrictReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalMandalReportPDF(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}farmerApprovalMandalReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalRouteLevelPDF(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}farmerApprovalRouteLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalStateReportmodifications(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalStateReportmodifications`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public farmerApprovalRouteLevelmodifications(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalRouteLevelmodifications`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalDistrictReportmodifications(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseJPVURL}farmerApprovalDistrictReportmodifications`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerApprovalMentorLevelPDF(req): Promise<any> {
        // tslint:disable-next-line: max-line-length
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}farmerApprovalMentorLevel`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public mandalListByDistrictIdStateLogin(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}mandalListByDistrictId`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public rbkListByMandalIdStateLogin(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}rbkListByMandalId`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public villageListByRbkId(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}villageListByRbkId`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public   villageMeetingPhotoUpload(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}villageMeetingPhotoUpload`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public villagemeetingPhotosList(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}villagemeetingPhotosList`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public deleteMeetingPhotoById(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.DCbaseURL}deleteMeetingPhotoById`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    // report end
}
