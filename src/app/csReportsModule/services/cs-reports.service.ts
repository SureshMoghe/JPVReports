import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class CsReportsService {
  baseURL = '';
  crystalReportsURL = '';
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/csModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/csModule/';
  }

  public csDistrictReports(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}csDistrictReports`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
}
