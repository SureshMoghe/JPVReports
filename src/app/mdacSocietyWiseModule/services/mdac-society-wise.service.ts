import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class MdacSocietyWiseService {
  baseURL = '';
  crystalReportsURL = '';
  constructor(
    private httpClient: HttpClient,
    private utils: UtilsService
    ) {
    this.baseURL = utils.baseUrl() + 'api/villageMeeting/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/villageMeeting/';
  }
  public districtWiseMdacAccounts(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}districtWiseMdacAccounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports
  public districtWiseMdacAccountsPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}districtWiseMdacAccounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  // reports end
}
