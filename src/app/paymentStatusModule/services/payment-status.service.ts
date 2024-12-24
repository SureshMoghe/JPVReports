import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentStatusService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public paymentStateReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentDistrictReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentMandalReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentRbkReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentDetailedReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentDetailedReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentMentorReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}paymentMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public paymentStatePDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentDistrictPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentMandalPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentRbkPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentDetailedPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentDetailedReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public paymentMentorPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}paymentMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // reports end
}
