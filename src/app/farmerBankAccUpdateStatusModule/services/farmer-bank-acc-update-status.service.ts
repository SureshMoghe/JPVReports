import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class FarmerBankAccUpdateStatusService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public farmerBUSStateLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerBUSStateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSDistrictLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerBUSDistrictLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSMandalLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerBUSMandalLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSRbkLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}farmerBUSRbkLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalInvalidAccounts(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}totalInvalidAccounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public DAVerifiedAcceptedRejected(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}DAVerifiedAcceptedRejected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public pendingAtDALevel(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}pendingAtDALevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mentorPendingList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mentorPendingList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public farmerBUSStateLevelPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerBUSStateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSDistrictLevelPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerBUSDistrictLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSMandalLevelPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerBUSMandalLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public farmerBUSRbkLevelPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}farmerBUSRbkLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalInvalidAccountsPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}totalInvalidAccounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public DAVerifiedAcceptedRejectedPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}DAVerifiedAcceptedRejected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public pendingAtDALevelPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}pendingAtDALevel`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mentorPendingListPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mentorPendingList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mentorPendingListPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mentorPendingList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // reports end
}
