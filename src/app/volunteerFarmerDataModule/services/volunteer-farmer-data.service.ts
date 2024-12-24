import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class VolunteerFarmerDataService {
  baseURL = '';
  crystalReportsURL = '';

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';
    this.crystalReportsURL = utils.crystalReportsUrl() + 'api/farmerModule/';
  }

  public vvFarmerDataStateReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataDistrictReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataMandalReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataRouteReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataRouteReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataRbkReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataVillageReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataVillageReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public volunteersLoggedInList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}volunteersLoggedInList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataMentorReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerDataMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalVolunteersList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}totalVolunteersList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalApprovedFarmersList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}totalApprovedFarmersList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerRegRouteWise(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerRegRouteWise`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerRegVillageList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}vvFarmerRegVillageList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // crystal reports

  public vvFarmerDataStatePDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataStateReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public vvFarmerDataDistrictPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataDistrictReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public vvFarmerDataMandalPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataMandalReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataRoutePDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataRouteReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataRbkPDFReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataRbkReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataVillagePDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataVillageReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public volunteersLoggedInListPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}volunteersLoggedInList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerDataMentorPDFReport(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerDataMentorReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalVolunteersListPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}totalVolunteersList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public totalApprovedFarmersListPDF(req): Promise<any> {
    // tslint:disable-next-line: max-line-length
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}totalApprovedFarmersList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerRegRouteWisePDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerRegRouteWise`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public vvFarmerRegVillageListPDF(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.crystalReportsURL}vvFarmerRegVillageList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  // end reports
}
