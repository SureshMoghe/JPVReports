import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class AmcuInspectionService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/amcuInspection/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/amcuInspection/';
  }

  public stateReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(`${this.baseURL}stateReport`, req, this.utils.getPostHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}districtReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public amcuNoOfSocietiesInspected(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}amcuNoOfSocietiesInspected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public amcuNoOfNotSocietiesInspected(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}amcuNoOfNotSocietiesInspected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public MentorLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}MentorLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public stateLevelPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}stateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtLevelPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}districtReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public amcuNoOfSocietiesInspectedPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}amcuNoOfSocietiesInspected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public amcuNoOfNotSocietiesInspectedPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}amcuNoOfNotSocietiesInspected`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public MentorLevelReportPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}MentorLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // reports end
}
