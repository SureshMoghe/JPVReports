import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class FarmerNatureOfUnitService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/bankerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/bankerModule/';
  }

  public farmerNOUStateLevel(): Promise<any> {
    const result: any = this.httpClient
      .get(`${this.baseURL}farmerNOUStateLevel`, this.utils.getGetHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUDistrictLevel(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUDistrictLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUMadalLevel(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUMadalLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUDetailLevel(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUDetailLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUBankState(): Promise<any> {
    const result: any = this.httpClient
      .get(`${this.baseURL}farmerNOUBankState`, this.utils.getGetHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUBankDistrict(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUBankDistrict`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUBankBranch(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUBankBranch`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUBankDetail(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUBankDetail`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerNOUBankDistrictLogin(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerNOUBankDistrictLogin`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public stateLevelNOUPDFReport(): Promise<any> {
    const result: any = this.httpClient
      .get(
        `${this.crystalReportsURL}farmerNOUStateLevel`,
        this.utils.getGetHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtLevelNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUDistrictLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public madalLevelNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUMadalLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public detailLevelNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUDetailLevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public bankStateNOUPDFReport(): Promise<any> {
    const result: any = this.httpClient
      .get(
        `${this.crystalReportsURL}farmerNOUBankState`,
        this.utils.getGetHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public bankDistrictNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUBankDistrict`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public bankBranchNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUBankBranch`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public bankDetailNOUPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUBankDetail`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public bankDistrictLoginNOUPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerNOUBankDistrictLogin`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // reports end
}
