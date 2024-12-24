import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class VvHHAnimalsService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public vvHHAnimalStateReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalDistrictReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalMandalReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalHouseholdMentorReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalHouseholdMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalRbkReport(req): Promise<any> {
    const result: any = this.httpClient 
      .post(
        `${this.baseURL}vvHHAnimalRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalVillageReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalVillageReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalClusterReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvHHAnimalClusterReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public pendingHouseHoldReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}pendingHouseHoldReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public vvHHAnimalStatePDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalDistrictPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalMandalPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalRbkPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalVillagePDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalVillageReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalHhMentorReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalHouseholdMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvHHAnimalClusterPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvHHAnimalClusterReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public pendingHouseHoldPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}pendingHouseHoldReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // end reports
}
