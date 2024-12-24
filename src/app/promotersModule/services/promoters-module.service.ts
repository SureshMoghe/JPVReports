import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class PromotersModuleService {
  baseURL = '';
  crystalReportsURL = '';
  sessionmilkpouringURL = '';
  TechnicianUrl = '';
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/promotersModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/promotersModule/';
    this.sessionmilkpouringURL = utils.jpvbaseURL() + 'api/amulReports/';
    this.TechnicianUrl = utils.jpvbaseURL() + 'api/TechnicianDetails/';
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

  public detailLevelRbkAndPromoterReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}detailLevelRbkAndPromoterReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // Crystal reports

  public stateLevelPromotersPDFReport(req): Promise<any> {
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

  public mentorLevelPromotersPDFReport(req): Promise<any> {
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

  public rbkLevelPromotersPDFReport(req): Promise<any> {
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

  public detailLevelPromotersPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}detailLevelRbkAndPromoterReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  } 

  // report end

  public Sessionwisefmrmilkpouring(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.sessionmilkpouringURL}Sessionwisefmrmilkpouring`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public SessionwisedlevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.sessionmilkpouringURL}SessionwisedlevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public SessionwisedGetmasterlevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.sessionmilkpouringURL}SessionwisedGetmasterlevelReport`,
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
        `${this.TechnicianUrl}TechnisianDetails_Select`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


}
