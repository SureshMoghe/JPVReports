import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PromptservicesService {
   
  amulurl= '';
  locationURL='';

  constructor(private httpClient: HttpClient, private utils: UtilsService) { 

    this.amulurl=utils.jpvbaseURL()+'api/amulReports/';
    this.locationURL = utils.baseUrl() + 'api/locationModule/';

  }

  public farmerWiseAbstractReport(req) {
    const result: any = this.httpClient
      .post(
        `${this.amulurl}farmerWiseAbstractReport`,    
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  public districtList(): Promise<any> {
    const result: any = this.httpClient
      .get(`${this.locationURL}districtList`, this.utils.getGetHttpOptions())
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  public societyWiseAbstractReport(req) {
    const result: any = this.httpClient
      .post(
        `${this.amulurl}societyWiseAbstractReport`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

}
