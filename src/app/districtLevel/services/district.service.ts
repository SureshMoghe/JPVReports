import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root',
  
})
export class DistrictService {
  baseURL = '';
  mdacURL = '';
  jpvURL=''; 
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL = utils.baseUrl() + 'api/farmerModule/';  //JPV REPORTS
    this.mdacURL = utils.DISTHOUrl() + 'api/districtHO/';  //JPV
    this.jpvURL = utils.jpvbaseURL() + 'api/farmerModule/';//JPV
     
  }
  public societyWiseAbstractReport(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}societyWiseAbstractReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  
  

  public JPVGSWSPersonNameByUid(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.jpvURL}JPVGSWSPersonNameByUid`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }



  public districtDashboardCounts(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.mdacURL}districtHODashboardCounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtHODashboardCounts(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}districtHODashboardCounts`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtHOFarmerCertList(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.mdacURL}districtHOFarmerCertList`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public rejectedReasonsList(): Promise<any> {
    const result: any = this.httpClient
      .get(`${this.mdacURL}rejectedReasonsList`, this.utils.getGetHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public districtHOCertUpdate(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.mdacURL}districtHOCertUpdate`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


  public GSWSPersonDetailsByUid(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}GSWSPersonDetailsByUid`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  

  public JPVGSWSPersonDetailsByUid(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.jpvURL}JPVGSWSPersonDetailsByUid`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public JPVGSWSByUid(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.jpvURL}JPVGSWSByUid`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


   


  public gswsDetaisUpdate(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.baseURL}gswsDetaisUpdate`, //
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


  
  public gswsDetaisUpdate_districthomodule(req): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${this.mdacURL}gswsDetaisUpdate`, //baseURL
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


}
