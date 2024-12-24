import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class MdacVSsapMilkCollectionService {
  baseURL = '';
  crystalReportsURL = '';
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public mdacVSsapStateLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mdacVSsapStateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mdacVSsapDistrictLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mdacVSsapDistrictLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public mdacVSsapStateLevelReportPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mdacVSsapStateLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mdacVSsapDistrictLevelReportPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mdacVSsapDistrictLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  // reports end
}
