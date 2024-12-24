import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class JdLevelService {

  baseURL = '';

  constructor(
    private httpClient: HttpClient,
    private utils: UtilsService
  ) {

    this.baseURL = utils.baseUrl() + 'api/jd/';
  }

  public passwordResetUpdate(req) {
    const result: any = this.httpClient.post(`${this.baseURL}passwordResetUpdate`, req, this.utils.getPostHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }
  public userDetails(req) {
    const result: any = this.httpClient.post(`${this.baseURL}userDetails`, req, this.utils.getPostHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }
}
