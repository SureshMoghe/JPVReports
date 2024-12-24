import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
    providedIn: 'root',
})
export class FarmerRegService {
    baseURL = '';
    locationURL = '';
    crystalReportsURL = '';
    baseURLJPV = '';

    constructor(private httpClient: HttpClient, private utils: UtilsService) {
        this.baseURL = utils.baseUrl() + 'api/farmerModule/';
        this.locationURL = utils.baseUrl() + 'api/locationModule/';
        this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
        this.baseURLJPV = utils.jpvbaseURL() + 'api/farmerModule/';
    }

    public RegAadharFarmerByUidCheck(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURLJPV}RegAadharFarmerByUidCheck`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public stateLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}stateLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public districtLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}districtLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public rbkLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}rbkLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public villageLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}villageLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public detailLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}detailLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public districtList(): Promise<any> {
        const result: any = this.httpClient
            .get(`${this.locationURL}districtList`, this.utils.getGetHttpOptions())
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public farmerRegDetailReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}farmerRegDetailReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }
    public milkPouringStatusReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}milkPouringStatusReport`,
                req,
                this.utils.getPostHttpOptions()
            )
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

    public mentorLevelReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.baseURL}mentorLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    // Crystal reports

    public stateLevelFarmerRegPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}stateLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public districtLevelFarmerRegPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}districtLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public rbkLevelFarmerRegPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}rbkLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public villageLevelFarmerRegPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}villageLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public detailLevelFarmerRegPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}detailLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    public mentorLevelPDFReport(req): Promise<any> {
        const result: any = this.httpClient
            .post(
                `${this.crystalReportsURL}mentorLevelReport`,
                req,
                this.utils.getPostHttpOptions()
            )
            .pipe(retry(this.utils.env.API_RETRY_COUNT))
            .toPromise();
        return result;
    }

    // report end
}
