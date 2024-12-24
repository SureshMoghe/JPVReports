import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class FarmerMilkPouringService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public stateFarmerMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}stateFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtFarmerMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}districtFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public routeFarmerMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}routeFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mandalFarmerMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mandalFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public mentorFarmerMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}mentorFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public FarmerDetailLevelMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}FarmerDetailLevelMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public volunteerWiseMilkPouringReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}volunteerWiseMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public surveyedHHMilkPouringFarmersReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}surveyedHHMilkPouringFarmersReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public surveyedHHNonMilkPourers(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}surveyedHHNonMilkPourers`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports
  public stateFarmerMilkPouringReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}stateFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtFarmerMilkPouringReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}districtFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public routeFarmerMilkPouringReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}routeFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public mandalFarmerMilkPouringReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mandalFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public mentorFarmerMilkPouringReportPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}mentorFarmerMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public FarmerDetailLevelMilkPouringReportPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}FarmerDetailLevelMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public volunteerWiseMilkPouringPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}volunteerWiseMilkPouringReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public surveyedHHMilkPouringFarmersReportPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}surveyedHHMilkPouringFarmersReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public surveyedHHNonMilkPourersPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}surveyedHHNonMilkPourers`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // reports end
}
