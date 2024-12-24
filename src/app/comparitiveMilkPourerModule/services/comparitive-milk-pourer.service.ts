import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class ComparitiveMilkPourerService {
  baseURL = '';
  crystalReportsURL = '';
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public comparitiveMilkPourerReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}comparitiveMilkPourerReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public milkPourerDetailLevelReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}milkPourerDetailLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports
  public comparitiveMilkPourerPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}comparitiveMilkPourerReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public milkPourerDetailLevelPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}milkPourerDetailLevelReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  // end reports
}
