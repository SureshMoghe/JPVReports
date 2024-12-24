import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class BmcuConstructionService {
  baseURL = '';
  crystalReportsURL = '';
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/bmcuConstruction/';
    this.crystalReportsURL =
      utils.crystalReportsUrl() + 'api/bmcuConstruction/';
  }
  public stateLevelReport(): Promise<any> {
    const result: any = this.httpClient
      .get(`${this.baseURL}stateLevelReport`, this.utils.getGetHttpOptions())
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

  public mandalLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mandalLevelReport`,
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

  // crystal reports

  public stateLevelPDFReport(): Promise<any> {
    const result: any = this.httpClient
      .get(
        `${this.crystalReportsURL}stateLevelReport`,
        this.utils.getGetHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtLevelPDFReport(req): Promise<any> {
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

  public mandalLevelPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mandalLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public rbkLevelPDFReport(req): Promise<any> {
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

  public villageLevelPDFReport(req): Promise<any> {
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

  // reports end
}
