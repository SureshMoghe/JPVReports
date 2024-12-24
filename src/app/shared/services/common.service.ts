import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseURL = '';
  pwdUpdURL='';
  jpvbaseURL = '';


  constructor(private httpClient: HttpClient, private utils: UtilsService) {

    this.baseURL = utils.baseUrl() + 'api/login/';
    this.pwdUpdURL = utils.jpvbaseURL() + 'api/pwdUpdate/';
    this.jpvbaseURL = utils.jpvbaseURL() + 'api/login/';

   }

   public passwordUpdate(req) {
    const result: any = this.httpClient
      .post(
        `${this.jpvbaseURL}passwordUpdate`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public passwordUpdatenew(req) {
    const result: any = this.httpClient
      .post(
        `${this.pwdUpdURL}passwordUpdatenew`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

}
