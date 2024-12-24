import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = '';
  dashboardUrl = '';
  jpvbaseURL = '';
  

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/login/';
    this.dashboardUrl = utils.baseUrl() + 'api/dashboard/';
    this.jpvbaseURL = utils.jpvbaseURL() + 'api/login/';
  }
  
  // public getCaptcha() {
  //   const result: any = this.httpClient.get(`${this.baseURL}GetCaptcha`).pipe(
  //     retry(this.utils.env.API_RETRY_COUNT)
  //   ).toPromise();
  //   return result;
  // }
  
  // public token(req) {
  //   const result: any = this.httpClient.post(`${this.baseURL}token`, req, this.utils.getPostHttpOptions()).pipe(
  //     retry(this.utils.env.API_RETRY_COUNT)
  //   ).toPromise();
  //   return result;
  // }

  public getCaptcha() {
    const result: any = this.httpClient
      .get(`${this.baseURL}GetCaptcha`)
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // public getCaptcha() {
  //   const result: any = this.httpClient
  //     .get(`${this.baseURL}GetCaptcha`)
  //     .pipe(retry(this.utils.env.API_RETRY_COUNT))
  //     .toPromise();
  //   return result;
  // }

  public getCaptcha1() {
    const result: any = this.httpClient.get(`${this.jpvbaseURL}GetCaptcha`).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }
  
  public token(req) {
    const result: any = this.httpClient.post(`${this.jpvbaseURL}token`, req, this.utils.getPostHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }


  public SSOLogin() {
    const result: any = this.httpClient.get(`${this.baseURL}SSOLogin`, this.utils.getGetHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }
  
  public  SSOLoginNew(req) {
    const result: any = this.httpClient.post(`${this.jpvbaseURL}SSOLoginNew`, req,this.utils.getGetHttpOptions()).pipe(
      retry(this.utils.env.API_RETRY_COUNT)
    ).toPromise();
    return result;
  }

  public logout(req) {
    const result: any = this.httpClient
      .post(`${this.jpvbaseURL}logout`, req, this.utils.getPostHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  
  
  

}
